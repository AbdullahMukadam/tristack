import { describe, expect, test } from "bun:test";

import {
  FRAMEWORK_PAGES,
  getFrameworkProject,
  getFrameworkStack,
} from "../src/lib/framework-pages";
import { generateStackCommand } from "../src/lib/stack-utils";

describe("framework landing pages", () => {
  test("covers every framework except none, once each", () => {
    const ids = FRAMEWORK_PAGES.map((page) => page.id);
    expect(ids).toContain("fastapi");
    expect(ids).toContain("gin");
    expect(ids).toContain("axum");
    expect(ids).not.toContain("none");
    expect(new Set(ids).size).toBe(ids.length);
  });

  for (const page of FRAMEWORK_PAGES) {
    test(`${page.id} generates a runnable project`, async () => {
      const stack = getFrameworkStack(page);
      expect(stack.language).toBe(page.language);
      expect(stack.framework).toBe(page.id);
      expect(generateStackCommand(stack)).toContain(`my-${page.id}-app`);

      const project = await getFrameworkProject(stack);
      expect(project.fileCount).toBeGreaterThan(3);
      expect(project.tree.startsWith(`my-${page.id}-app/`)).toBe(true);
      expect(project.steps.length).toBeGreaterThanOrEqual(2);
      expect(project.routes.length).toBeGreaterThan(0);
    });
  }
});
