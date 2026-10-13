import { describe, expect, it } from "bun:test";

import { getDefaultConfig } from "../src/constants";
import { createProjectHandler } from "../src/helpers/core/command-handlers";

describe("language-aware defaults", () => {
  it("go defaults to a valid go stack", () => {
    const config = getDefaultConfig("go");
    expect(config).toMatchObject({
      language: "go",
      framework: "gin",
      frontend: "none",
      orm: "sqlc",
      migrations: "goose",
      database: "sqlite",
      packageManager: "go",
      addons: ["docker"],
    });
  });

  it("rust defaults to a valid rust stack", () => {
    const config = getDefaultConfig("rust");
    expect(config).toMatchObject({
      language: "rust",
      framework: "axum",
      frontend: "none",
      orm: "seaorm",
      migrations: "none",
      database: "sqlite",
      packageManager: "cargo",
      addons: ["docker"],
    });
  });

  it("python stays the default language", () => {
    expect(getDefaultConfig().language).toBe("python");
    expect(getDefaultConfig().framework).toBe("fastapi");
  });

  for (const [field, value, message] of [
    ["packageManager", "go", 'Package manager "go" is not available for the "python" language.'],
    ["addons", ["air"], 'Addon "air" is not available for the "python" language.'],
  ] as const) {
    it(`rejects a ${field} from another language`, async () => {
      const result = await createProjectHandler(
        { projectName: `mismatch-${field}`, language: "python", [field]: value, dryRun: true },
        { silent: true },
      );
      expect(result?.success).toBe(false);
      expect(result?.error).toBe(message);
    });
  }

  for (const [language, framework] of [
    ["go", "gin"],
    ["rust", "axum"],
  ] as const) {
    it(`--yes with only --language ${language} resolves ${language} defaults`, async () => {
      const result = await createProjectHandler(
        { projectName: `yes-${language}`, language, yes: true, dryRun: true },
        { silent: true },
      );
      expect(result?.error).toBeUndefined();
      expect(result?.success).toBe(true);
      expect(result?.projectConfig.framework).toBe(framework);
    });

    it(`create-json with only language ${language} resolves ${language} defaults`, async () => {
      const result = await createProjectHandler(
        { projectName: `json-${language}`, language, dryRun: true },
        { silent: true },
      );
      expect(result?.error).toBeUndefined();
      expect(result?.success).toBe(true);
      expect(result?.projectConfig.framework).toBe(framework);
    });
  }
});
