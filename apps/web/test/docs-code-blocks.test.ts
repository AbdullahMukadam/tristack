import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";

import { Glob } from "bun";

const contentRoot = join(import.meta.dir, "..", "content");

describe("docs code blocks", () => {
  test("no fenced code block is collapsed onto one line", () => {
    const offenders: string[] = [];
    for (const file of new Glob("**/*.mdx").scanSync(contentRoot)) {
      const lines = readFileSync(join(contentRoot, file), "utf8").split("\n");
      lines.forEach((line, i) => {
        if (/```\w+ .+```/.test(line)) offenders.push(`${file}:${i + 1}: ${line.trim()}`);
      });
    }
    expect(offenders).toEqual([]);
  });
});
