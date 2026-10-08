import { describe, expect, it } from "bun:test";

import { renderLogo } from "../src/utils/theme";

describe("renderLogo", () => {
  it("draws the block wordmark when the terminal is wide enough", () => {
    const lines = renderLogo(80, false).split("\n");
    expect(lines).toHaveLength(6);
    for (const line of lines) expect(line).toHaveLength(61);
  });

  it("falls back to the plain name on narrow terminals", () => {
    expect(renderLogo(40, false)).toBe("TriStack");
  });

  it("colors each row when color is supported", () => {
    const lines = renderLogo(80, true).split("\n");
    expect(lines.every((line) => line.startsWith("\x1b[38;2;"))).toBe(true);
    expect(new Set(lines.map((line) => line.slice(0, 20))).size).toBe(6);
  });
});
