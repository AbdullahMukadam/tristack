import { DEFAULT_CONFIG } from "../constants";
import type {
  Addons,
  Database,
  Framework,
  Language,
  Migrations,
  ORM,
  PackageManager,
  ProjectConfig,
} from "../types";
import { isSilent } from "../utils/context";
import { UserCancelledError } from "../utils/errors";
import { getAddonsChoice } from "./addons";
import { getDatabaseChoice } from "./database";
import { getFrameworkChoice } from "./framework";
import { getGitChoice } from "./git";
import { getInstallChoice } from "./install";
import { getLanguageChoice } from "./language";
import { getMigrationsChoice } from "./migrations";
import { navigableGroup } from "./navigable-group";
import { getORMChoice } from "./orm";
import { getPackageManagerChoice } from "./package-manager";

type PromptGroupResults = {
  language: Language;
  framework: Framework;
  orm: ORM;
  migrations: Migrations;
  database: Database;
  packageManager: PackageManager;
  addons: Addons[];
  git: boolean;
  install: boolean;
};

export async function gatherConfig(
  flags: Partial<ProjectConfig>,
  projectName: string,
  projectDir: string,
  relativePath: string,
  options: { skipCompatibilityChecks?: boolean } = {},
) {
  if (isSilent()) {
    return {
      projectName,
      projectDir,
      relativePath,
      language: flags.language ?? DEFAULT_CONFIG.language,
      framework: flags.framework ?? DEFAULT_CONFIG.framework,
      orm: flags.orm ?? DEFAULT_CONFIG.orm,
      migrations: flags.migrations ?? DEFAULT_CONFIG.migrations,
      database: flags.database ?? DEFAULT_CONFIG.database,
      packageManager: flags.packageManager ?? DEFAULT_CONFIG.packageManager,
      addons: flags.addons ?? [...DEFAULT_CONFIG.addons],
      git: flags.git ?? DEFAULT_CONFIG.git,
      install: flags.install ?? DEFAULT_CONFIG.install,
    };
  }

  const result = await navigableGroup<PromptGroupResults>(
    {
      language: ({ previousAnswer }) => getLanguageChoice(flags.language, previousAnswer),
      framework: ({ results, previousAnswer }) =>
        getFrameworkChoice(
          flags.framework,
          (results.language ?? flags.language ?? DEFAULT_CONFIG.language) as Language,
          previousAnswer,
        ),
      orm: ({ results, previousAnswer }) =>
        getORMChoice(
          flags.orm,
          (results.language ?? flags.language ?? DEFAULT_CONFIG.language) as Language,
          previousAnswer,
        ),
      migrations: ({ results, previousAnswer }) =>
        getMigrationsChoice(
          flags.migrations,
          (results.language ?? flags.language ?? DEFAULT_CONFIG.language) as Language,
          previousAnswer,
        ),
      database: ({ previousAnswer }) => getDatabaseChoice(flags.database, previousAnswer),
      packageManager: ({ results, previousAnswer }) =>
        getPackageManagerChoice(
          flags.packageManager,
          (results.language ?? flags.language ?? DEFAULT_CONFIG.language) as Language,
          previousAnswer,
        ),
      addons: ({ results, previousAnswer }) =>
        getAddonsChoice(
          flags.addons,
          (results.language ?? flags.language ?? DEFAULT_CONFIG.language) as Language,
          previousAnswer,
        ),
      git: ({ previousAnswer }) => getGitChoice(flags.git, previousAnswer),
      install: ({ previousAnswer }) => getInstallChoice(flags.install, previousAnswer),
    },
    {
      preselected: options.skipCompatibilityChecks ? flags : undefined,
      sections: [
        { label: "Stack", prompts: ["language", "framework", "orm", "migrations", "database"] },
        { label: "Tooling", prompts: ["packageManager", "addons", "git", "install"] },
      ],
      onCancel: () => {
        throw new UserCancelledError({ message: "Operation cancelled" });
      },
    },
  );

  return {
    projectName,
    projectDir,
    relativePath,
    language: result.language,
    framework: result.framework,
    orm: result.orm,
    migrations: result.migrations,
    database: result.database,
    packageManager: result.packageManager,
    addons: result.addons,
    git: result.git,
    install: result.install,
  };
}
