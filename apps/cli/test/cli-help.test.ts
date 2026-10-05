import { expect, test } from "bun:test";
import { join } from "node:path";

import { execa } from "execa";

test("--help shows the tristack command name", async () => {
  const { stdout } = await execa("bun", [join(import.meta.dir, "..", "src", "cli.ts"), "--help"]);
  expect(stdout).toContain("Usage: tristack ");
  expect(stdout).not.toContain("create-tristack");
});
