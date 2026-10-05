import { describe, expect, test } from "bun:test";

import { getMigrationsChoice } from "../src/prompts/migrations";

describe("migrations prompt", () => {
  test("rust has no migrations tool so it is skipped", async () => {
    expect(await getMigrationsChoice(undefined, "rust")).toBe("none");
  });
});
