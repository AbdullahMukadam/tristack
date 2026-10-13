import { expect, test } from "bun:test";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { execa } from "execa";

test("--help shows the tristack command name", async () => {
  const { stdout } = await execa("bun", [join(import.meta.dir, "..", "src", "cli.ts"), "--help"]);
  expect(stdout).toContain("Usage: tristack ");
  expect(stdout).not.toContain("create-tristack");
});

test("documented create-json flag matches the CLI", async () => {
  const { stdout } = await execa("bun", [
    join(import.meta.dir, "..", "src", "cli.ts"),
    "create-json",
    "--help",
  ]);
  const [, flag] = stdout.match(/^\s+(--\w+) <json>/m) ?? [];
  expect(flag).toBe("--json");

  const repo = join(import.meta.dir, "..", "..", "..");
  const docs = [
    "apps/cli/README.md",
    "apps/web/content/docs/cli/index.mdx",
    "apps/web/content/docs/cli/agent-workflows.mdx",
    "apps/web/src/lib/agent-content.ts",
  ];
  for (const doc of docs) {
    const content = await readFile(join(repo, doc), "utf8");
    const usages = [...content.matchAll(/create-json (--\w+)/g)].map(([, used]) => used);
    expect(usages.length).toBeGreaterThan(0);
    expect(new Set(usages)).toEqual(new Set([flag]));
  }
});
