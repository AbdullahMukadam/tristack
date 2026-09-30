import { describe, expect, it } from "bun:test";

import { resolvePipCommand } from "../src/utils/pip-command";

describe("resolvePipCommand", () => {
  it("resolves to a pip invocation", async () => {
    const cmd = await resolvePipCommand();
    expect(["pip", "python"]).toContain(cmd.bin);
    if (cmd.bin === "pip") {
      expect(cmd.baseArgs).toEqual([]);
    } else {
      expect(cmd.baseArgs).toEqual(["-m", "pip"]);
    }
  });
});
