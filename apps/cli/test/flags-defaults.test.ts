import { describe, expect, it } from "bun:test";

import { getDefaultConfig } from "../src/constants";
import type { CLIInput } from "../src/types";
import { applyFlagDefaults, getProvidedFlags, processAndValidateFlags } from "../src/validation";

describe("--yes default config merge", () => {
  it("retains defaults instead of overriding them with undefined", () => {
    const input = { yes: true, projectName: "my-api" } as CLIInput;
    const result = processAndValidateFlags(input, getProvidedFlags(input), "my-api");
    expect(result.isOk()).toBe(true);
    if (result.isErr()) throw result.error;

    const merged = applyFlagDefaults(getDefaultConfig(), result.value);

    expect(merged.language).toBe("python");
    expect(merged.framework).toBe("fastapi");
    expect(merged.orm).toBe("sqlmodel");
    expect(merged.migrations).toBe("alembic");
    expect(merged.database).toBe("sqlite");
    expect(merged.addons).toEqual(["docker", "ruff", "pytest"]);
  });

  it("applies explicitly provided flags on top of defaults", () => {
    const input = {
      yes: true,
      projectName: "my-api",
      language: "go",
      framework: "gin",
      orm: "gorm",
      migrations: "goose",
      database: "postgres",
      packageManager: "go",
      git: false,
    } as CLIInput;
    const result = processAndValidateFlags(input, getProvidedFlags(input), "my-api");
    expect(result.isOk()).toBe(true);
    if (result.isErr()) throw result.error;

    const merged = applyFlagDefaults(getDefaultConfig(), result.value);

    expect(merged.language).toBe("go");
    expect(merged.framework).toBe("gin");
    expect(merged.orm).toBe("gorm");
    expect(merged.migrations).toBe("goose");
    expect(merged.database).toBe("postgres");
    expect(merged.packageManager).toBe("go");
    expect(merged.git).toBe(false);
  });

  it("keeps false and empty-array values (not mistaken for absent)", () => {
    const input = {
      yes: true,
      projectName: "my-api",
      install: false,
      addons: [],
    } as CLIInput;
    const result = processAndValidateFlags(input, getProvidedFlags(input), "my-api");
    expect(result.isOk()).toBe(true);
    if (result.isErr()) throw result.error;

    const merged = applyFlagDefaults(getDefaultConfig(), result.value);

    expect(merged.install).toBe(false);
    expect(merged.addons).toEqual([]);
  });
});
