import { verifyWebhook } from "npm:@intentlock/core@0.3.0";

import { relayHoldEvent } from "./handler.ts";

function required(name: string): string {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`${name} is not set`);
  return value;
}

const config = {
  webhookSecret: required("INTENTLOCK_WEBHOOK_SECRET"),
  githubToken: required("GITHUB_DISPATCH_TOKEN"),
  repo: required("GITHUB_REPOSITORY"),
};

Deno.serve((req) => relayHoldEvent(req, config, verifyWebhook));
