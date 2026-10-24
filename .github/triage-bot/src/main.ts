import { providerFromEnv, RunStatus, S3CheckpointStore } from "@intentlock/guard";
import { HybridGate } from "@intentlock/sdk";
import { z } from "zod";

import { githubClient, resumeTriage, type TriageOutcome, triageIssue } from "./bot.ts";

const STORAGE = [
  "CHECKPOINT_S3_ENDPOINT",
  "CHECKPOINT_S3_REGION",
  "CHECKPOINT_S3_BUCKET",
  "CHECKPOINT_S3_ACCESS_KEY_ID",
  "CHECKPOINT_S3_SECRET_ACCESS_KEY",
  "CHECKPOINT_KEY",
] as const;

const unset = z.literal("").transform(() => undefined);
const text = unset.or(z.string().min(1)).optional();

const Env = z
  .object({
    INTENTLOCK_URL: z.url(),
    INTENTLOCK_API_KEY: z.string().min(1),
    GITHUB_TOKEN: z.string().min(1),
    GITHUB_REPOSITORY: z.string().min(1),
    ISSUE_NUMBER: unset.or(z.coerce.number().int().positive()).optional(),
    TRIAGE_USER: unset.or(z.email()).optional(),
    TRIAGE_RESUME_PLAN: unset.or(z.string().regex(/^[\w-]{1,64}$/)).optional(),
    CHECKPOINT_S3_ENDPOINT: unset.or(z.url()).optional(),
    CHECKPOINT_S3_REGION: text,
    CHECKPOINT_S3_BUCKET: text,
    CHECKPOINT_S3_ACCESS_KEY_ID: text,
    CHECKPOINT_S3_SECRET_ACCESS_KEY: text,
    CHECKPOINT_KEY: text,
  })
  .superRefine((env, ctx) => {
    const missing = STORAGE.filter((k) => env[k] === undefined);
    if (missing.length > 0 && missing.length < STORAGE.length) {
      ctx.addIssue({ code: "custom", message: `checkpoint storage needs ${missing.join(", ")}` });
    }
    if (env.TRIAGE_RESUME_PLAN) {
      if (missing.length > 0) {
        ctx.addIssue({ code: "custom", message: "resuming needs checkpoint storage" });
      }
      return;
    }
    if (!env.ISSUE_NUMBER)
      ctx.addIssue({ code: "custom", path: ["ISSUE_NUMBER"], message: "required" });
    if (!env.TRIAGE_USER)
      ctx.addIssue({ code: "custom", path: ["TRIAGE_USER"], message: "required" });
  });

const env = Env.parse(process.env);
const gate = new HybridGate({
  baseUrl: env.INTENTLOCK_URL,
  apiKey: env.INTENTLOCK_API_KEY,
  onError: (err) =>
    console.log(
      `::warning::Intentlock: ${err instanceof Error ? (err.stack ?? err.message) : err}`,
    ),
});

const checkpoints = env.CHECKPOINT_KEY
  ? new S3CheckpointStore({
      endpoint: env.CHECKPOINT_S3_ENDPOINT!,
      region: env.CHECKPOINT_S3_REGION!,
      bucket: env.CHECKPOINT_S3_BUCKET!,
      accessKeyId: env.CHECKPOINT_S3_ACCESS_KEY_ID!,
      secretAccessKey: env.CHECKPOINT_S3_SECRET_ACCESS_KEY!,
      encryptionKey: env.CHECKPOINT_KEY,
      prefix: "triage/",
    })
  : undefined;

const common = {
  provider: providerFromEnv(),
  gate,
  gh: githubClient(env.GITHUB_TOKEN),
  onEvent: (e: { type: string; tool?: string; ruleId?: string | null; reason?: string }) =>
    console.log([e.type, e.tool, e.ruleId, e.reason].filter(Boolean).join(" ")),
};

const outcome: TriageOutcome =
  env.TRIAGE_RESUME_PLAN && checkpoints
    ? await resumeTriage({ ...common, planId: env.TRIAGE_RESUME_PLAN, checkpoints })
    : await triageIssue({
        ...common,
        repo: env.GITHUB_REPOSITORY,
        issue: env.ISSUE_NUMBER!,
        user: env.TRIAGE_USER!,
        ...(checkpoints && { checkpoints }),
      });

await gate
  .close()
  .catch((err: Error) => console.log(`::warning::Audit flush failed: ${err.message}`));

if (!outcome.ok) console.log(`::warning::Triage did nothing: ${outcome.error}`);
else if (!outcome.result) console.log("No paused run for this plan (already resumed or finished).");
else if (outcome.result.status === RunStatus.SUSPENDED) {
  console.log(`Paused on hold ${outcome.result.holdIds?.join(", ")}; resumes when it is resolved.`);
} else console.log(outcome.result.text ?? `Finished: ${outcome.result.status}`);
