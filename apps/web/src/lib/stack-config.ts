import type {
  Addons,
  Database,
  Framework,
  Migrations,
  ORM,
  PackageManager,
  ProjectConfig,
} from "@tristack/types";

import type { StackState } from "./constant";

function normalizeBoolean(value: boolean | string | undefined, fallback: boolean): boolean {
  if (value === true || value === false) return value;
  return value === undefined ? fallback : value === "true";
}

export function stackStateToConfig(state: StackState): ProjectConfig {
  const bare = state.framework === "none";
  return {
    projectName: state.projectName || "my-tristack-app",
    projectDir: "/virtual",
    relativePath: "./virtual",
    language: state.language as ProjectConfig["language"],
    framework: state.framework as Framework,
    frontend: (bare ? "none" : state.frontend) as ProjectConfig["frontend"],
    orm: (bare ? "none" : state.orm) as ORM,
    migrations: (bare ? "none" : state.migrations) as Migrations,
    database: (bare ? "none" : state.database) as Database,
    packageManager: state.packageManager as PackageManager,
    addons: (state.addons || []).filter((addon) => addon !== "none") as Addons[],
    git: normalizeBoolean(state.git, false),
    install: false,
  };
}
