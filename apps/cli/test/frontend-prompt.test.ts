import { describe, expect, test } from "bun:test";

import { getFrontendOptions, shouldPromptFrontend } from "../src/prompts/frontend";

describe("frontend prompt", () => {
  test("rust offers htmx and none", () => {
    expect(getFrontendOptions("rust").map((option) => option.value)).toEqual(["htmx", "none"]);
  });

  test("python keeps its htmx only list", () => {
    expect(getFrontendOptions("python").map((option) => option.value)).toEqual(["htmx"]);
  });

  test("is asked for rust and python web frameworks", () => {
    expect(shouldPromptFrontend("rust", "axum")).toBe(true);
    expect(shouldPromptFrontend("python", "fastapi")).toBe(true);
  });

  test("is skipped for go", () => {
    expect(shouldPromptFrontend("go", "gin")).toBe(false);
  });

  test("is skipped for a bare project", () => {
    expect(shouldPromptFrontend("rust", "none")).toBe(false);
    expect(shouldPromptFrontend("python", "none")).toBe(false);
  });
});
