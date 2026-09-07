import { describe, expect, test } from "bun:test";

import type { ProjectConfig } from "../../cli/src/types";
import { validateConfigCompatibility } from "../../cli/src/validation";
import {
  applyStackUpdate,
  getTechSelectionUpdate,
  resolveStackCompatibility,
} from "../src/app/(home)/new/_components/stack-builder/use-stack-builder";
import { DEFAULT_STACK, type StackState, TECH_OPTIONS } from "../src/lib/constant";
import { sanitizeStackState } from "../src/lib/sanitize-stack-addons";

const RANDOM_STACK_COUNT = 5_000;
const TRANSITION_SEED_COUNT = 1000;

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick<T>(rand: () => number, items: readonly T[]): T {
  return items[Math.floor(rand() * items.length)];
}

function randomStack(rand: () => number): StackState {
  const ids = (category: keyof typeof TECH_OPTIONS) =>
    TECH_OPTIONS[category].map((option) => option.id);

  const addons = () => {
    const pool = ids("addons").filter((id) => id !== "none");
    const count = Math.floor(rand() * Math.min(pool.length, 4));
    if (count === 0) return ["none"];
    return [...pool].sort(() => rand() - 0.5).slice(0, count);
  };

  return sanitizeStackState({
    ...DEFAULT_STACK,
    projectName: "invariant-test",
    language: pick(rand, ids("language")) as StackState["language"],
    framework: pick(rand, ids("framework")) as StackState["framework"],
    orm: pick(rand, ids("orm")) as StackState["orm"],
    migrations: pick(rand, ids("migrations")) as StackState["migrations"],
    database: pick(rand, ids("database")) as StackState["database"],
    packageManager: pick(rand, ids("packageManager")) as StackState["packageManager"],
    addons: addons(),
    git: pick(rand, ids("git")) as StackState["git"],
    install: pick(rand, ids("install")) as StackState["install"],
    yolo: pick(rand, ["true", "false"]) as StackState["yolo"],
  });
}

function toCliConfig(stack: StackState): ProjectConfig {
  return {
    projectName: stack.projectName ?? "invariant-test",
    projectDir: "/virtual/invariant-test",
    relativePath: "invariant-test",
    language: stack.language as ProjectConfig["language"],
    framework: stack.framework as ProjectConfig["framework"],
    orm: stack.orm as ProjectConfig["orm"],
    migrations: stack.migrations as ProjectConfig["migrations"],
    database: stack.database as ProjectConfig["database"],
    packageManager: stack.packageManager as ProjectConfig["packageManager"],
    addons: stack.addons as ProjectConfig["addons"],
    git: stack.git === "true",
    install: stack.install === "true",
  };
}

function getCliCompatibilityError(stack: StackState): string | null {
  const result = validateConfigCompatibility(toCliConfig(stack));
  return result.isErr() ? result.error.message : null;
}

describe("compatibility adjustment invariants", () => {
  test("language stays locked to python and every framework/orm/migration belongs to it", () => {
    const stack = resolveStackCompatibility(
      sanitizeStackState({
        ...DEFAULT_STACK,
        framework: "django",
        orm: "tortoise",
        migrations: "alembic",
      }),
    ).stack;

    expect(stack.language).toBe("python");
    expect(stack.framework).toBe("django");
    expect(stack.orm).toBe("tortoise");
    expect(getCliCompatibilityError(stack)).toBeNull();
  });

  test("random stacks remain valid for the CLI after sanitization", () => {
    const rand = mulberry32(0xbe77e12);
    const failures: string[] = [];

    for (let i = 0; i < RANDOM_STACK_COUNT; i++) {
      const initial = randomStack(rand);
      const resolution = resolveStackCompatibility(initial);

      const cliError = getCliCompatibilityError(resolution.stack);
      if (cliError) {
        failures.push(`${cliError} for ${JSON.stringify(initial)}`);
      }
    }

    expect(failures.slice(0, 5)).toEqual([]);
    expect(failures.length).toBe(0);
  });

  test("every stack-builder transition produces a CLI-valid stack", () => {
    const rand = mulberry32(0x51acced);
    const failures: string[] = [];
    let transitionsChecked = 0;

    for (let i = 0; i < TRANSITION_SEED_COUNT; i++) {
      const baseStack = resolveStackCompatibility(randomStack(rand)).stack;

      for (const category of Object.keys(TECH_OPTIONS) as Array<keyof typeof TECH_OPTIONS>) {
        for (const option of TECH_OPTIONS[category]) {
          const resolution = applyStackUpdate(baseStack, (currentStack) =>
            getTechSelectionUpdate(currentStack, category, option.id),
          );
          transitionsChecked++;

          const cliError = getCliCompatibilityError(resolution.stack);
          if (cliError) {
            failures.push(
              `${category}=${option.id}: ${cliError} from ${JSON.stringify(baseStack)}`,
            );
          }
        }
      }
    }

    expect(transitionsChecked).toBeGreaterThan(20_000);
    expect(failures.slice(0, 5)).toEqual([]);
    expect(failures.length).toBe(0);
  });

  test("sanitizeStackState repairs out-of-range selections to defaults", () => {
    const sanitized = sanitizeStackState({
      ...DEFAULT_STACK,
      framework: "next",
      database: "oracle",
      addons: ["docker", "unknown-addon", "docker", "none"],
      git: "maybe",
    });

    expect(sanitized).toMatchObject({
      framework: DEFAULT_STACK.framework,
      database: DEFAULT_STACK.database,
      addons: ["docker"],
      git: DEFAULT_STACK.git,
    });
  });
});
