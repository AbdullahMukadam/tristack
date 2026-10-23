import {
  createGuard,
  PlanSource,
  defineTool,
  type GuardEvent,
  type GuardTool,
  type LLMProvider,
  type RunResult,
  toolset,
} from "@intentlock/guard";
import type { Gate } from "@intentlock/sdk";
import { z } from "zod";

export const LABELS = [
  "bug",
  "enhancement",
  "question",
  "documentation",
  "duplicate",
  "needs-repro",
  "python",
  "go",
  "rust",
  "fastapi",
  "django",
  "flask",
  "litestar",
  "chi",
  "echo",
  "fiber",
  "gin",
  "actix-web",
  "axum",
  "rocket",
  "salvo",
  "warp",
] as const;

const MAX_BODY_CHARS = 8_000;
const MAX_SEARCH_RESULTS = 5;
const HOLD_TIMEOUT_MS = 30 * 60_000;

export type GitHubBody = { labels: string[] } | { body: string };
export type GitHub = (method: "GET" | "POST", path: string, body?: GitHubBody) => Promise<unknown>;

export function githubClient(token: string, fetchFn: typeof fetch = fetch): GitHub {
  return async (method, path, body) => {
    const res = await fetchFn(`https://api.github.com${path}`, {
      method,
      headers: {
        accept: "application/vnd.github+json",
        authorization: `Bearer ${token}`,
        "x-github-api-version": "2022-11-28",
        ...(body !== undefined && { "content-type": "application/json" }),
      },
      ...(body !== undefined && { body: JSON.stringify(body) }),
    });
    if (!res.ok) throw new Error(`GitHub ${method} ${path} failed with ${res.status}`);
    return res.json();
  };
}

const Repo = z
  .string()
  .regex(/^[\w-][\w.-]*\/[\w-][\w.-]*$/, "owner/name")
  .describe("Repository as owner/name");
const IssueNumber = z.number().int().positive().describe("Issue number");

const LabelList = z.array(z.object({ name: z.string() }));
const labelNames = (labels: z.infer<typeof LabelList>) => labels.map((l) => l.name);

const Issue = z.object({
  number: z.number(),
  title: z.string(),
  body: z.string().nullish(),
  user: z.object({ login: z.string() }).nullish(),
  labels: LabelList,
});
const SearchResult = z.object({
  items: z.array(
    z.object({ number: z.number(), title: z.string(), state: z.string(), html_url: z.string() }),
  ),
});
const Comment = z.object({ html_url: z.string() });

const withoutQualifiers = (query: string) =>
  query
    .split(/\s+/)
    .filter((word) => word && !word.includes(":"))
    .join(" ");

export function triageTools(gh: GitHub): GuardTool[] {
  return [
    defineTool({
      name: "github_get_issue",
      description: "Read one issue: title, body, author and current labels",
      schema: z.object({ repo: Repo, number: IssueNumber }),
      impl: async ({ repo, number }) => {
        const issue = Issue.parse(await gh("GET", `/repos/${repo}/issues/${number}`));
        return {
          number: issue.number,
          title: issue.title,
          author: issue.user?.login ?? null,
          labels: labelNames(issue.labels),
          body: (issue.body ?? "").slice(0, MAX_BODY_CHARS),
        };
      },
    }),
    defineTool({
      name: "github_list_labels",
      description: "List the labels that exist in a repository",
      schema: z.object({ repo: Repo }),
      impl: async ({ repo }) =>
        labelNames(LabelList.parse(await gh("GET", `/repos/${repo}/labels?per_page=100`))),
    }),
    defineTool({
      name: "github_search_issues",
      description: "Search issues in a repository by keywords, to find likely duplicates",
      schema: z.object({ repo: Repo, query: z.string().min(1).max(200) }),
      impl: async ({ repo, query }) => {
        const q = `repo:${repo} is:issue ${withoutQualifiers(query)}`;
        const found = SearchResult.parse(
          await gh(
            "GET",
            `/search/issues?per_page=${MAX_SEARCH_RESULTS}&q=${encodeURIComponent(q)}`,
          ),
        );
        return found.items.slice(0, MAX_SEARCH_RESULTS).map((i) => ({
          number: i.number,
          title: i.title,
          state: i.state,
          url: i.html_url,
        }));
      },
    }),
    defineTool({
      name: "github_add_label",
      description: "Add one label to an issue",
      schema: z.object({ repo: Repo, number: IssueNumber, label: z.enum(LABELS) }),
      impl: async ({ repo, number, label }) => {
        await gh("POST", `/repos/${repo}/issues/${number}/labels`, { labels: [label] });
        return { labeled: number, label };
      },
    }),
    defineTool({
      name: "github_post_comment",
      description: "Post a public comment on an issue",
      schema: z.object({ repo: Repo, number: IssueNumber, body: z.string().min(1).max(3000) }),
      impl: async ({ repo, number, body }) => {
        const comment = Comment.parse(
          await gh("POST", `/repos/${repo}/issues/${number}/comments`, { body }),
        );
        return { url: comment.html_url };
      },
    }),
  ];
}

const SYSTEM = `You triage new GitHub issues for TriStack, a CLI that scaffolds Python, Go and Rust backends.
1. Read the issue with github_get_issue.
2. Add labels with github_add_label: the language (python, go, rust), the framework if named (fastapi, django, flask, litestar, chi, echo, fiber, gin, actix-web, axum, rocket, salvo, warp), and one type (bug, enhancement, question, documentation). Add needs-repro to a bug that lacks the details below.
3. Search for likely duplicates with github_search_issues using a few keywords from the title.
4. Post at most one short, friendly comment with github_post_comment that asks for any missing details (output of tristack --version, OS, the exact command and the options chosen) and links likely duplicates. Skip the comment if nothing is missing and there are no duplicates.`;

export interface TriageOptions {
  provider: LLMProvider;
  gate: Gate;
  gh: GitHub;
  repo: string;
  issue: number;
  user: string;
  holdTimeoutMs?: number;
  onEvent?: (e: GuardEvent) => void;
}

export type TriageOutcome = { ok: true; result: RunResult } | { ok: false; error: string };

export function triagePlan(repo: string, issue: number) {
  const scope = { repo: { eq: repo } };
  const issueScope = { ...scope, number: { eq: issue } };
  return [
    { tool: "github_get_issue", args: issueScope, maxCalls: 2, required: true },
    { tool: "github_list_labels", args: scope, maxCalls: 1 },
    { tool: "github_search_issues", args: scope, maxCalls: 3 },
    {
      tool: "github_add_label",
      args: { ...issueScope, label: { in: [...LABELS] } },
      maxCalls: 4,
    },
    { tool: "github_post_comment", args: issueScope, maxCalls: 1 },
  ];
}

export async function triageIssue(opts: TriageOptions): Promise<TriageOutcome> {
  try {
    const guard = createGuard({
      provider: opts.provider,
      gate: opts.gate,
      ...toolset(triageTools(opts.gh)),
      system: SYSTEM,
      planSource: PlanSource.EXPLICIT,
      holdTimeoutMs: opts.holdTimeoutMs ?? HOLD_TIMEOUT_MS,
      ...(opts.onEvent && { onEvent: opts.onEvent }),
    });
    const result = await guard.run({
      user: opts.user,
      task: `Triage issue #${opts.issue} in ${opts.repo}`,
      steps: triagePlan(opts.repo, opts.issue),
    });
    return { ok: true, result };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}
