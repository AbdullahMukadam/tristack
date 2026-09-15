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
    const fw = flags.framework ?? DEFAULT_CONFIG.framework;
    const djangoMode = fw === "django";
    const bareMode = fw === "none";
    const orm = djangoMode || bareMode ? "none" : (flags.orm ?? DEFAULT_CONFIG.orm);
    const tortoiseMode = orm === "tortoise";
    return {
      projectName,
      projectDir,
      relativePath,
      language: flags.language ?? DEFAULT_CONFIG.language,
      framework: fw,
      orm,
      migrations:
        djangoMode || bareMode || tortoiseMode
          ? "none"
          : (flags.migrations ?? DEFAULT_CONFIG.migrations),
      database: bareMode ? "none" : (flags.database ?? DEFAULT_CONFIG.database),
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
      orm: async ({ results, previousAnswer }) => {
        const lang = (results.language ?? flags.language ?? DEFAULT_CONFIG.language) as Language;
        const fw = results.framework ?? flags.framework;
        if (lang === "python" && fw === "django") return "none" as ORM;
        if (fw === "none") return "none" as ORM;
        return getORMChoice(flags.orm, lang, previousAnswer);
      },
      migrations: async ({ results, previousAnswer }) => {
        const lang = (results.language ?? flags.language ?? DEFAULT_CONFIG.language) as Language;
        const fw = results.framework ?? flags.framework;
        const orm = results.orm ?? flags.orm;
        if (lang === "python" && fw === "django") return "none" as Migrations;
        if (lang === "python" && orm === "tortoise") return "none" as Migrations;
        if (fw === "none") return "none" as Migrations;
        return getMigrationsChoice(flags.migrations, lang, previousAnswer);
      },
      database: async ({ results, previousAnswer }) => {
        const fw = results.framework ?? flags.framework;
        if (fw === "none") return "none" as Database;
        return getDatabaseChoice(flags.database, previousAnswer);
      },
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
    orm:
      result.framework === "django" || result.framework === "none" ? ("none" as ORM) : result.orm,
    migrations:
      result.framework === "django" || result.framework === "none" || result.orm === "tortoise"
        ? ("none" as Migrations)
        : result.migrations,
    database: result.framework === "none" ? ("none" as Database) : result.database,
    packageManager: result.packageManager,
    addons: result.addons,
    git: result.git,
    install: result.install,
  };
}
