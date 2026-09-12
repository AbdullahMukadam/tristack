import { describe, expect, test } from "bun:test";

import {
  GO_ADDONS,
  GO_FRAMEWORKS,
  GO_MIGRATIONS,
  GO_ORMS,
  GO_PACKAGE_MANAGERS,
  PYTHON_ADDONS,
  PYTHON_FRAMEWORKS,
  PYTHON_MIGRATIONS,
  PYTHON_ORMS,
  PYTHON_PACKAGE_MANAGERS,
  RUST_ADDONS,
  RUST_FRAMEWORKS,
  RUST_MIGRATIONS,
  RUST_ORMS,
  RUST_PACKAGE_MANAGERS,
} from "../../../packages/types/src/constants";
import { DATABASE_VALUES } from "../../../packages/types/src/schemas";
import {
  applyStackUpdate,
  getSelectedTechRemovalUpdate,
  getTechSelectionUpdate,
  resolveStackCompatibility,
} from "../src/app/(home)/new/_components/stack-builder/use-stack-builder";
import {
  analyzeStackCompatibility,
  getDisabledReason,
  getOptionsForStack,
  getValidIdsForLanguage,
  isOptionCompatible,
} from "../src/app/(home)/new/_components/utils";
import { DEFAULT_STACK, type StackState, TECH_OPTIONS } from "../src/lib/constant";
import { sanitizeStackState } from "../src/lib/sanitize-stack-addons";
import { formatStackCommandForDisplay, generateStackCommand } from "../src/lib/stack-utils";

function createStack(overrides: Partial<StackState> = {}): StackState {
  return sanitizeStackState({
    ...DEFAULT_STACK,
    ...overrides,
    addons: [...(overrides.addons ?? DEFAULT_STACK.addons)],
  });
}

describe("stack builder option parity", () => {
  test("exposes union of CLI option sets across Python, Go, and Rust", () => {
    const union = (py: readonly string[], go: readonly string[], rust: readonly string[]) => [
      ...new Set([...py, ...go, ...rust]),
    ];
    expect(TECH_OPTIONS.language.map((option) => option.id)).toEqual(["python", "go", "rust"]);
    expect(TECH_OPTIONS.framework.map((option) => option.id)).toEqual(
      union(PYTHON_FRAMEWORKS, GO_FRAMEWORKS, RUST_FRAMEWORKS),
    );
    expect(TECH_OPTIONS.orm.map((option) => option.id)).toEqual(
      union(PYTHON_ORMS, GO_ORMS, RUST_ORMS),
    );
    expect(TECH_OPTIONS.migrations.map((option) => option.id)).toEqual(
      union(PYTHON_MIGRATIONS, GO_MIGRATIONS, RUST_MIGRATIONS),
    );
    expect(TECH_OPTIONS.database.map((option) => option.id)).toEqual([...DATABASE_VALUES]);
    expect(TECH_OPTIONS.packageManager.map((option) => option.id)).toEqual(
      union(PYTHON_PACKAGE_MANAGERS, GO_PACKAGE_MANAGERS, RUST_PACKAGE_MANAGERS),
    );
    expect(TECH_OPTIONS.addons.map((option) => option.id)).toEqual(
      union(PYTHON_ADDONS, GO_ADDONS, RUST_ADDONS),
    );
  });

  test("exposes exactly the per-language option sets via getValidIdsForLanguage", () => {
    expect(getValidIdsForLanguage("python", "framework")).toEqual([...PYTHON_FRAMEWORKS]);
    expect(getValidIdsForLanguage("go", "framework")).toEqual([...GO_FRAMEWORKS]);
    expect(getValidIdsForLanguage("rust", "framework")).toEqual([...RUST_FRAMEWORKS]);
    expect(getValidIdsForLanguage("python", "orm")).toEqual([...PYTHON_ORMS]);
    expect(getValidIdsForLanguage("go", "orm")).toEqual([...GO_ORMS]);
    expect(getValidIdsForLanguage("rust", "orm")).toEqual([...RUST_ORMS]);
    expect(getValidIdsForLanguage("python", "migrations")).toEqual([...PYTHON_MIGRATIONS]);
    expect(getValidIdsForLanguage("go", "migrations")).toEqual([...GO_MIGRATIONS]);
    expect(getValidIdsForLanguage("rust", "migrations")).toEqual([...RUST_MIGRATIONS]);
    expect(getValidIdsForLanguage("python", "packageManager")).toEqual([
      ...PYTHON_PACKAGE_MANAGERS,
    ]);
    expect(getValidIdsForLanguage("go", "packageManager")).toEqual([...GO_PACKAGE_MANAGERS]);
    expect(getValidIdsForLanguage("rust", "packageManager")).toEqual([...RUST_PACKAGE_MANAGERS]);
    expect(getValidIdsForLanguage("python", "addons")).toEqual([...PYTHON_ADDONS]);
    expect(getValidIdsForLanguage("go", "addons")).toEqual([...GO_ADDONS]);
    expect(getValidIdsForLanguage("rust", "addons")).toEqual([...RUST_ADDONS]);
  });

  test("filters the builder options to the selected language only", () => {
    const goStack = createStack({ language: "go" });
    expect(getOptionsForStack(goStack, "framework").map((option) => option.id)).toEqual([
      ...GO_FRAMEWORKS,
    ]);
    expect(getOptionsForStack(goStack, "orm").map((option) => option.id)).toEqual([...GO_ORMS]);
    expect(getOptionsForStack(goStack, "migrations").map((option) => option.id)).toEqual([
      ...GO_MIGRATIONS,
    ]);
    expect(getOptionsForStack(goStack, "packageManager").map((option) => option.id)).toEqual([
      ...GO_PACKAGE_MANAGERS,
    ]);
    expect(getOptionsForStack(goStack, "addons").map((option) => option.id)).toEqual([
      ...GO_ADDONS,
    ]);

    expect(getOptionsForStack(goStack, "framework").some((o) => o.id === "django")).toBe(false);
    expect(getOptionsForStack(goStack, "packageManager").some((o) => o.id === "uv")).toBe(false);

    const pythonStack = createStack({ language: "python" });
    expect(getOptionsForStack(pythonStack, "framework").map((option) => option.id)).toEqual([
      ...PYTHON_FRAMEWORKS,
    ]);
    expect(getOptionsForStack(pythonStack, "framework").some((o) => o.id === "gin")).toBe(false);

    const rustStack = createStack({ language: "rust" });
    expect(getOptionsForStack(rustStack, "framework").map((option) => option.id)).toEqual([
      ...RUST_FRAMEWORKS,
    ]);
    expect(getOptionsForStack(rustStack, "orm").map((option) => option.id)).toEqual([...RUST_ORMS]);
    expect(getOptionsForStack(rustStack, "migrations").map((option) => option.id)).toEqual([
      ...RUST_MIGRATIONS,
    ]);
    expect(getOptionsForStack(rustStack, "packageManager").map((option) => option.id)).toEqual([
      ...RUST_PACKAGE_MANAGERS,
    ]);
    expect(getOptionsForStack(rustStack, "addons").map((option) => option.id)).toEqual([
      ...RUST_ADDONS,
    ]);
    expect(getOptionsForStack(rustStack, "framework").some((o) => o.id === "django")).toBe(false);
    expect(getOptionsForStack(rustStack, "packageManager").some((o) => o.id === "uv")).toBe(false);
  });

  test("marks the default options on git, install, and the default stack", () => {
    expect(getTechSelectionUpdate(DEFAULT_STACK, "git", "true")).toEqual({ git: "false" });
    expect(getTechSelectionUpdate(DEFAULT_STACK, "install", "true")).toEqual({ install: "false" });

    for (const category of [
      "framework",
      "orm",
      "migrations",
      "database",
      "packageManager",
    ] as const) {
      const defaultId = DEFAULT_STACK[category];
      const option = TECH_OPTIONS[category].find((candidate) => candidate.id === defaultId);
      expect(option?.default).toBe(true);
    }
  });
});

describe("stack builder selection updates", () => {
  test("replaces single-select categories", () => {
    const result = applyStackUpdate(DEFAULT_STACK, (currentStack) =>
      getTechSelectionUpdate(currentStack, "framework", "django"),
    ).stack;

    expect(result.framework).toBe("django");
    expect(result.projectName).toBe(DEFAULT_STACK.projectName);
  });

  test("toggles addons and drops the none sentinel once something is picked", () => {
    const first = applyStackUpdate(createStack({ addons: ["none"] }), (currentStack) =>
      getTechSelectionUpdate(currentStack, "addons", "ruff"),
    ).stack;
    expect(first.addons).toEqual(["ruff"]);

    const second = applyStackUpdate(first, (currentStack) =>
      getTechSelectionUpdate(currentStack, "addons", "pytest"),
    ).stack;
    expect(second.addons).toEqual(["ruff", "pytest"]);

    const third = applyStackUpdate(second, (currentStack) =>
      getTechSelectionUpdate(currentStack, "addons", "ruff"),
    ).stack;
    expect(third.addons).toEqual(["pytest"]);
  });

  test("does not emit an update when re-selecting a single-select option", () => {
    expect(getTechSelectionUpdate(DEFAULT_STACK, "framework", "fastapi")).toEqual({});
  });

  test("toggles git and install between true and false", () => {
    expect(getTechSelectionUpdate(DEFAULT_STACK, "git", "false")).toEqual({ git: "false" });
    expect(getTechSelectionUpdate(createStack({ git: "false" }), "git", "true")).toEqual({
      git: "true",
    });
    expect(getTechSelectionUpdate(DEFAULT_STACK, "git", "true")).toEqual({ git: "false" });
    expect(getTechSelectionUpdate(createStack({ install: "true" }), "install", "true")).toEqual({
      install: "false",
    });
  });
});

describe("stack builder removal updates", () => {
  test("falls back to none for addons when the list empties", () => {
    expect(
      getSelectedTechRemovalUpdate(createStack({ addons: ["docker"] }), "addons", "docker"),
    ).toEqual({ addons: ["none"] });
  });

  test("falls back to none for single-select categories with a none option", () => {
    expect(getSelectedTechRemovalUpdate(DEFAULT_STACK, "database", "sqlite")).toEqual({
      database: "none",
    });
    expect(getSelectedTechRemovalUpdate(DEFAULT_STACK, "orm", "sqlmodel")).toEqual({
      orm: "none",
    });
  });

  test("returns an empty update for single-select categories without a none option", () => {
    expect(getSelectedTechRemovalUpdate(DEFAULT_STACK, "framework", "fastapi")).toEqual({});
  });
});

describe("stack builder compatibility", () => {
  test("applies no cross-category adjustments for a valid Python stack", () => {
    expect(getDisabledReason(DEFAULT_STACK, "orm", "sqlalchemy")).toBeNull();
    expect(getDisabledReason(DEFAULT_STACK, "framework", "flask")).toBeNull();

    const analysis = analyzeStackCompatibility(DEFAULT_STACK);
    expect(analysis.adjustedStack).toBeNull();
    expect(analysis.changes).toEqual([]);
    expect(analysis.notes).toEqual({});
  });

  test("disables options not valid for the selected language", () => {
    expect(getDisabledReason(DEFAULT_STACK, "framework", "gin")).toBe("Not available for python.");
    expect(getDisabledReason(DEFAULT_STACK, "orm", "gorm")).toBe("Not available for python.");
  });

  test("adjusts a Go stack to language-valid selections", () => {
    const goStack = createStack({
      language: "go",
      framework: "gin",
      orm: "gorm",
      migrations: "goose",
      packageManager: "go",
      addons: ["docker", "ruff"],
    });
    const analysis = resolveStackCompatibility(goStack);
    expect(analysis.stack).toMatchObject({
      language: "go",
      framework: "gin",
      orm: "gorm",
      migrations: "goose",
      packageManager: "go",
    });
    expect(analysis.stack.addons).toEqual(["docker"]);
  });

  test("repairs a mixed stack that mixes languages across categories", () => {
    const mixed = createStack({
      language: "go",
      framework: "fastapi",
      orm: "sqlmodel",
      migrations: "alembic",
      packageManager: "uv",
      addons: ["docker", "ruff"],
    });
    const resolved = resolveStackCompatibility(mixed).stack;
    expect(resolved).toMatchObject({
      language: "go",
      framework: "gin",
      orm: "sqlc",
      migrations: "goose",
      packageManager: "go",
      addons: ["docker"],
    });
    expect(resolved.framework).not.toBe("fastapi");
    expect(resolved.addons).not.toContain("ruff");
  });

  test("keeps yolo mode accepting any individual selection", () => {
    const yoloStack = createStack({ yolo: "true" });
    expect(isOptionCompatible(yoloStack, "framework", "django")).toBe(true);
    expect(resolveStackCompatibility(yoloStack).stack).toMatchObject({ yolo: "true" });
  });
});

describe("stack builder command generation", () => {
  test("emits the short default command with --yes", () => {
    expect(generateStackCommand(DEFAULT_STACK)).toBe("uvx tristack my-tristack-app --yes");
  });

  test("emits every flag for a customized stack", () => {
    const command = generateStackCommand(createStack({ framework: "django", yolo: "false" }));
    expect(command).toBe(
      "uvx tristack my-tristack-app --language python --framework django --orm sqlmodel --migrations alembic --database sqlite --package-manager uv --addons docker ruff pytest --git --install",
    );
  });

  test("renders addons as a space-separated list or none", () => {
    const noneCommand = generateStackCommand(createStack({ addons: ["none"] }));
    expect(noneCommand).toContain("--addons none");

    const twoCommand = generateStackCommand(createStack({ addons: ["ruff", "mypy"] }));
    expect(twoCommand).toContain("--addons ruff mypy");
  });

  test("emits no-git and no-install toggles and the yolo flag", () => {
    const command = generateStackCommand(
      createStack({ git: "false", install: "false", yolo: "true" }),
    );
    expect(command).toContain("--no-git");
    expect(command).toContain("--no-install");
    expect(command).toContain("--yolo");
  });

  test("quotes project names as a single shell argument", () => {
    expect(generateStackCommand(createStack({ projectName: "name; echo INJECTED" }))).toContain(
      "'name; echo INJECTED' --yes",
    );
    expect(generateStackCommand(createStack({ projectName: "name$(echo INJECTED)" }))).toContain(
      "'name$(echo INJECTED)' --yes",
    );
    expect(generateStackCommand(createStack({ projectName: "project's app\nnext" }))).toContain(
      "'project'\\''s app\nnext' --yes",
    );
  });

  test("renders long CLI commands with visible flag separators", () => {
    const displayCommand = formatStackCommandForDisplay(
      generateStackCommand(createStack({ framework: "django", database: "postgres" })),
    );

    expect(displayCommand).toContain(`my-tristack-app ${"\\"}\n  --language python`);
    expect(displayCommand).toContain(`--framework django ${"\\"}\n  --orm sqlmodel`);
  });
});
