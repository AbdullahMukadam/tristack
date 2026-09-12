import path from "node:path";
import { fileURLToPath } from "node:url";

import type { ProjectConfig } from "./types";
import { getUserPkgManager } from "./utils/get-package-manager";

const __filename = fileURLToPath(import.meta.url);
const distPath = path.dirname(__filename);
export const PKG_ROOT = path.join(distPath, "../");

export const DEFAULT_CONFIG_BASE = {
  projectName: "my-tristack-app",
  relativePath: "my-tristack-app",
  language: "python",
  framework: "fastapi",
  orm: "sqlmodel",
  migrations: "alembic",
  database: "sqlite",
  addons: ["docker", "ruff", "pytest"],
  git: true,
  install: true,
  packageManager: "uv",
} as const;

export function getDefaultConfig(): ProjectConfig {
  return {
    ...DEFAULT_CONFIG_BASE,
    projectName: DEFAULT_CONFIG_BASE.projectName,
    projectDir: path.resolve(process.cwd(), DEFAULT_CONFIG_BASE.projectName),
    relativePath: DEFAULT_CONFIG_BASE.relativePath,
    language: DEFAULT_CONFIG_BASE.language,
    framework: DEFAULT_CONFIG_BASE.framework,
    orm: DEFAULT_CONFIG_BASE.orm,
    migrations: DEFAULT_CONFIG_BASE.migrations,
    database: DEFAULT_CONFIG_BASE.database,
    packageManager: getUserPkgManager(),
    addons: [...DEFAULT_CONFIG_BASE.addons],
    git: DEFAULT_CONFIG_BASE.git,
    install: DEFAULT_CONFIG_BASE.install,
  };
}

export const DEFAULT_CONFIG = getDefaultConfig();

export const CLI_VERSION = "0.1.5";

export const LANGUAGE_LABELS = {
  python: "Python",
  go: "Go",
  rust: "Rust",
} as const;
