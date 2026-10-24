import { readFileSync } from "node:fs";

import {
  ClientBlockReason,
  generateSigningKeyPair,
  type GateDecision,
  type HoldInfo,
  HoldStatus,
  parsePolicy,
  type PolicySet,
  signWebhook,
  type ToolCall,
  Verdict,
  verifyWebhook,
} from "@intentlock/core";
import {
  type ChatResponse,
  type Checkpoint,
  type CheckpointStore,
  FakeProvider,
  type FakeStep,
  RunStatus,
  type ToolCallReq,
} from "@intentlock/guard";
import { LocalGate } from "@intentlock/sdk";
import { beforeAll, describe, expect, test } from "vitest";

import { type GitHub, type GitHubBody, resumeTriage, triageIssue } from "../src/bot.ts";
import { DISPATCH_EVENT, relayHoldEvent } from "../supabase/functions/intentlock-relay/handler.ts";

const REPO = "AbdullahMukadam/tristack";
const USER = "triage-bot@tristack.dev";
const ISSUE = 7;
const issueArgs = { repo: REPO, number: ISSUE };

let privateKey: CryptoKey;
let policy: PolicySet;
beforeAll(async () => {
  privateKey = (await generateSigningKeyPair()).privateKey;
  const parsed = parsePolicy(readFileSync(new URL("../policy.yaml", import.meta.url), "utf8"));
  if (!parsed.ok) throw new Error(JSON.stringify(parsed.errors));
  policy = parsed.policy;
});

type Held = Map<string, HoldInfo>;

class PausingGate extends LocalGate {
  readonly held: Held;
  readonly outcome: HoldStatus;

  constructor(held: Held, outcome: HoldStatus) {
    super({ privateKey, policies: policy, users: { [USER]: { role: "member" } } });
    this.held = held;
    this.outcome = outcome;
  }

  override async check(token: string, call: ToolCall): Promise<GateDecision> {
    const d = await super.check(token, call);
    if (d.verdict !== Verdict.BLOCK || d.reason !== ClientBlockReason.HOLD_REQUIRES_SERVER)
      return d;
    const holdId = `hold-${call.callId}`;
    const planId = JSON.parse(atob(token.split(".")[1]!.replace(/-/g, "+").replace(/_/g, "/")))
      .jti as string;
    this.held.set(holdId, {
      status: HoldStatus.PENDING,
      planId,
      callId: call.callId,
      tool: call.tool,
      args: call.args,
    });
    return {
      verdict: Verdict.HOLD,
      ruleId: d.ruleId ?? "",
      planStep: 0,
      approvers: { roles: [], emails: [], self: false },
      timeoutSeconds: 1800,
      holdId,
    };
  }

  async holdInfo(holdId: string): Promise<HoldInfo> {
    const info = this.held.get(holdId);
    if (!info) throw new Error(`no hold ${holdId}`);
    return { ...info, status: this.outcome };
  }
}

class MemoryStore implements CheckpointStore {
  readonly saved = new Map<string, string>();
  async save(key: string, checkpoint: Checkpoint) {
    this.saved.set(key, JSON.stringify(checkpoint));
  }
  async load(key: string) {
    const raw = this.saved.get(key);
    return raw ? (JSON.parse(raw) as Checkpoint) : null;
  }
  async delete(key: string) {
    this.saved.delete(key);
  }
}

function fakeGitHub() {
  const writes: { path: string; body?: GitHubBody }[] = [];
  const gh: GitHub = async (method, path, body) => {
    if (method === "POST") writes.push({ path, ...(body !== undefined && { body }) });
    if (path.startsWith("/search/issues")) return { items: [] };
    if (path.includes("/labels?")) return [{ name: "bug" }];
    if (path.endsWith("/labels")) return [];
    if (path.endsWith("/comments")) return { html_url: "https://gh/7#c1" };
    return {
      number: ISSUE,
      title: "Crash",
      body: "FastAPI crash",
      user: { login: "x" },
      labels: [],
    };
  };
  return { gh, writes };
}

const call = (id: string, name: string, args: ToolCallReq["args"]): ToolCallReq => ({
  id,
  name,
  args,
});
const turn = (...toolCalls: ToolCallReq[]): ChatResponse => ({ toolCalls });
const done = (text = "Triaged."): ChatResponse => ({ text, toolCalls: [] });
const COMMENT = "Please share `tristack --version`.";

const firstRun = (): FakeStep[] => [
  turn(call("c1", "github_get_issue", issueArgs)),
  turn(
    call("c2", "github_add_label", { ...issueArgs, label: "bug" }),
    call("c3", "github_post_comment", { ...issueArgs, body: COMMENT }),
  ),
];

async function pause() {
  const held: Held = new Map();
  const store = new MemoryStore();
  const github = fakeGitHub();
  const gate = new PausingGate(held, HoldStatus.PENDING);
  const outcome = await triageIssue({
    provider: new FakeProvider(firstRun()),
    gate,
    gh: github.gh,
    repo: REPO,
    issue: ISSUE,
    user: USER,
    checkpoints: store,
  });
  await gate.close();
  if (!outcome.ok || !outcome.result) throw new Error("expected a run");
  return { held, store, github, planId: outcome.result.planId, result: outcome.result };
}

async function resume(paused: Awaited<ReturnType<typeof pause>>, status: HoldStatus) {
  const github = fakeGitHub();
  const gate = new PausingGate(paused.held, status);
  const outcome = await resumeTriage({
    provider: new FakeProvider([done()]),
    gate,
    gh: github.gh,
    planId: paused.planId,
    checkpoints: paused.store,
  });
  await gate.close();
  return { outcome, writes: github.writes };
}

describe("pause on the held comment", () => {
  test("labels are written, the comment waits, the checkpoint is saved by plan id", async () => {
    const paused = await pause();
    expect(paused.result.status).toBe(RunStatus.SUSPENDED);
    expect(paused.result.holdIds).toEqual(["hold-c3"]);
    expect(paused.github.writes.map((w) => w.path)).toEqual([`/repos/${REPO}/issues/7/labels`]);
    expect([...paused.store.saved.keys()]).toEqual([paused.planId]);
  });

  test("approved: a later job posts the comment once and deletes the checkpoint", async () => {
    const paused = await pause();
    const r = await resume(paused, HoldStatus.APPROVED);
    expect(r.outcome.ok && r.outcome.result?.status).toBe(RunStatus.COMPLETED);
    expect(r.writes).toEqual([
      { path: `/repos/${REPO}/issues/7/comments`, body: { body: COMMENT } },
    ]);
    expect(paused.store.saved.size).toBe(0);

    const again = await resume(paused, HoldStatus.APPROVED);
    expect(again.outcome).toEqual({ ok: true, result: null });
    expect(again.writes).toEqual([]);
  });

  test.each([HoldStatus.REJECTED, HoldStatus.EXPIRED])(
    "%s: nothing is posted and the checkpoint is deleted",
    async (status) => {
      const paused = await pause();
      const r = await resume(paused, status);
      expect(r.outcome.ok).toBe(true);
      expect(r.writes).toEqual([]);
      expect(paused.store.saved.size).toBe(0);
    },
  );

  test("still pending: nothing runs and the checkpoint stays", async () => {
    const paused = await pause();
    const r = await resume(paused, HoldStatus.PENDING);
    expect(r.outcome.ok && r.outcome.result?.status).toBe(RunStatus.SUSPENDED);
    expect(r.writes).toEqual([]);
    expect(paused.store.saved.size).toBe(1);
  });

  test("an edited checkpoint (different comment) is refused and nothing is posted", async () => {
    const paused = await pause();
    const raw = paused.store.saved.get(paused.planId)!;
    paused.store.saved.set(paused.planId, raw.replace(COMMENT, "Closing all issues."));
    const r = await resume(paused, HoldStatus.APPROVED);
    expect(r.outcome.ok).toBe(false);
    expect(r.writes).toEqual([]);
  });
});

describe("relay", () => {
  const SECRET = "il_whsec_test";
  const config = { webhookSecret: SECRET, githubToken: "gh-token", repo: REPO };
  const event = {
    id: "ev1",
    type: "hold.resolved",
    at: new Date().toISOString(),
    holdId: "h1",
    planId: "p1",
    agentId: "a1",
    status: "approved",
  };

  async function post(body: string, signature: string | null, answer = 204) {
    const sent: { url: string; init: RequestInit }[] = [];
    const fetchFn = (async (url: string | URL | Request, init?: RequestInit) => {
      sent.push({ url: String(url), init: init ?? {} });
      return new Response(null, { status: answer });
    }) as typeof fetch;
    const req = new Request("https://relay.test", {
      method: "POST",
      body,
      headers: signature ? { "intentlock-signature": signature } : {},
    });
    return { res: await relayHoldEvent(req, config, verifyWebhook, fetchFn), sent };
  }

  test("a signed event becomes one repository_dispatch with the plan id", async () => {
    const body = JSON.stringify(event);
    const { res, sent } = await post(body, await signWebhook(SECRET, body, new Date()));
    expect(res.status).toBe(204);
    expect(sent).toHaveLength(1);
    expect(sent[0]!.url).toBe(`https://api.github.com/repos/${REPO}/dispatches`);
    expect(JSON.parse(String(sent[0]!.init.body))).toEqual({
      event_type: DISPATCH_EVENT,
      client_payload: { planId: "p1", holdId: "h1", status: "approved", eventId: "ev1" },
    });
  });

  test("a bad or missing signature dispatches nothing", async () => {
    const body = JSON.stringify(event);
    expect((await post(body, null)).res.status).toBe(401);
    const forged = await post(body, await signWebhook("other", body, new Date()));
    expect(forged.res.status).toBe(401);
    expect(forged.sent).toHaveLength(0);
  });

  test("a GitHub failure answers 502 so Intentlock retries", async () => {
    const body = JSON.stringify(event);
    const { res } = await post(body, await signWebhook(SECRET, body, new Date()), 403);
    expect(res.status).toBe(502);
  });
});
