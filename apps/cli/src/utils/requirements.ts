import os from "node:os";

import { Result } from "better-result";
import { execa } from "execa";

import type { PackageManager, ProjectConfig } from "../types";
import { CLIError } from "./errors";
import { shouldSkipExternalCommands } from "./external-commands";

type Tool = "python" | "node" | PackageManager;

export type LocalToolVersions = Partial<Record<Tool, string>>;

export type LocalRequirements = {
  packageManagerVersion: string;
  warnings: string[];
};

const PACKAGE_MANAGER_COMMAND = {
  uv: "uv",
  poetry: "poetry",
  pip: "pip",
  go: "go",
  cargo: "cargo",
} satisfies Record<PackageManager, string>;

const LANGUAGE_TO_PACKAGE_MANAGERS = {
  python: ["uv", "poetry", "pip"],
  go: ["go"],
  rust: ["cargo"],
} satisfies Record<ProjectConfig["language"], readonly PackageManager[]>;

export function getDefaultPackageManager(language: ProjectConfig["language"]): PackageManager {
  return LANGUAGE_TO_PACKAGE_MANAGERS[language][0];
}

async function readToolVersion(tool: string): Promise<string | null> {
  const result = await Result.tryPromise({
    try: async () => {
      const { stdout } = await execa(tool, ["--version"], {
        cwd: os.tmpdir(),
        stderr: "pipe",
      });
      return stdout.trim().split(/\s+/)[1] ?? stdout.trim();
    },
    catch: () => null,
  });
  return result.isOk() ? result.value : null;
}

export type BaselineCheck = { warnings: string[] };

/**
 * Pre-prompt check that the baseline toolchain (uv / go / cargo / python) is
 * available. Warnings are non-fatal.
 */
export async function checkBaselineRequirements(
  packageManager: PackageManager | undefined,
  _packageManagerIsExplicit: boolean,
): Promise<Result<BaselineCheck, CLIError>> {
  if (shouldSkipExternalCommands()) return Result.ok({ warnings: [] });

  const warnings: string[] = [];
  const tool = packageManager ? PACKAGE_MANAGER_COMMAND[packageManager] : "uv";
  const version = await readToolVersion(tool);
  if (version === null) {
    warnings.push(
      `"${tool}" was not found on your PATH. Install it or choose a different package manager.`,
    );
  }
  return Result.ok({ warnings });
}

export async function checkLocalRequirements(
  config: Pick<ProjectConfig, "packageManager" | "language">,
): Promise<Result<LocalRequirements, CLIError>> {
  if (shouldSkipExternalCommands()) {
    return Result.ok({ packageManagerVersion: "latest", warnings: [] });
  }

  const warnings: string[] = [];
  const tool = PACKAGE_MANAGER_COMMAND[config.packageManager];
  let packageManagerVersion = "latest";
  const version = await readToolVersion(tool);
  if (version === null) {
    warnings.push(`"${tool}" was not found on your PATH. Install it before continuing.`);
  } else {
    packageManagerVersion = version;
  }

  return Result.ok({ packageManagerVersion, warnings });
}
