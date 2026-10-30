import path from "node:path";
import { fileURLToPath } from "node:url";

import type { Language, ProjectConfig } from "./types";
import { getUserPkgManager } from "./utils/get-package-manager";

const __filename = fileURLToPath(import.meta.url);
const distPath = path.dirname(__filename);
export const PKG_ROOT = path.join(distPath, "../");

export const DEFAULT_CONFIG_BASE = {
  projectName: "my-tristack-app",
  relativePath: "my-tristack-app",
  language: "python",
  framework: "fastapi",
  frontend: "none",
  orm: "sqlmodel",
  migrations: "alembic",
  database: "sqlite",
  addons: ["docker", "ruff", "pytest"],
  git: true,
  install: true,
  packageManager: "uv",
} as const;

const LANGUAGE_STACK_DEFAULTS = {
  go: {
    framework: "gin",
    frontend: "none",
    orm: "sqlc",
    migrations: "goose",
    database: "sqlite",
    packageManager: "go",
    addons: ["docker"],
  },
  rust: {
    framework: "axum",
    frontend: "none",
    orm: "seaorm",
    migrations: "none",
    database: "sqlite",
    packageManager: "cargo",
    addons: ["docker"],
  },
} satisfies Record<
  Exclude<Language, "python">,
  Pick<
    ProjectConfig,
    "framework" | "frontend" | "orm" | "migrations" | "database" | "packageManager" | "addons"
  >
>;

export function getDefaultConfig(language: Language = DEFAULT_CONFIG_BASE.language): ProjectConfig {
  const config: ProjectConfig = {
    ...DEFAULT_CONFIG_BASE,
    projectName: DEFAULT_CONFIG_BASE.projectName,
    projectDir: path.resolve(process.cwd(), DEFAULT_CONFIG_BASE.projectName),
    relativePath: DEFAULT_CONFIG_BASE.relativePath,
    language: DEFAULT_CONFIG_BASE.language,
    framework: DEFAULT_CONFIG_BASE.framework,
    frontend: DEFAULT_CONFIG_BASE.frontend,
    orm: DEFAULT_CONFIG_BASE.orm,
    migrations: DEFAULT_CONFIG_BASE.migrations,
    database: DEFAULT_CONFIG_BASE.database,
    packageManager: getUserPkgManager(),
    addons: [...DEFAULT_CONFIG_BASE.addons],
    git: DEFAULT_CONFIG_BASE.git,
    install: DEFAULT_CONFIG_BASE.install,
  };
  if (language === "python") return config;
  const stack = LANGUAGE_STACK_DEFAULTS[language];
  return { ...config, ...stack, language, addons: [...stack.addons] };
}

export const DEFAULT_CONFIG = getDefaultConfig();

export const CLI_VERSION = "1.0.9";

export const LANGUAGE_LABELS = {
  python: "Python",
  go: "Go",
  rust: "Rust",
} as const;
