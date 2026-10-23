import { FakeProvider, providerFromEnv } from "@intentlock/guard";
import { HybridGate } from "@intentlock/sdk";
import { z } from "zod";

import { githubClient, triageIssue } from "./bot.ts";
import { attackScript } from "./force-attack.ts";

const Env = z.object({
  INTENTLOCK_URL: z.url(),
  INTENTLOCK_API_KEY: z.string().min(1),
  GITHUB_TOKEN: z.string().min(1),
  GITHUB_REPOSITORY: z.string().min(1),
  ISSUE_NUMBER: z.coerce.number().int().positive(),
  TRIAGE_USER: z.email(),
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

const outcome = await triageIssue({
  provider:
    process.env.TRIAGE_FORCE_ATTACK === "1"
      ? new FakeProvider(attackScript(env.GITHUB_REPOSITORY, env.ISSUE_NUMBER))
      : providerFromEnv(),
  gate,
  gh: githubClient(env.GITHUB_TOKEN),
  repo: env.GITHUB_REPOSITORY,
  issue: env.ISSUE_NUMBER,
  user: env.TRIAGE_USER,
  onEvent: (e) => console.log([e.type, e.tool, e.ruleId, e.reason].filter(Boolean).join(" ")),
});

await gate
  .close()
  .catch((err: Error) => console.log(`::warning::Audit flush failed: ${err.message}`));

if (outcome.ok) console.log(outcome.result.text ?? `Finished: ${outcome.result.status}`);
else console.log(`::warning::Triage did nothing: ${outcome.error}`);
