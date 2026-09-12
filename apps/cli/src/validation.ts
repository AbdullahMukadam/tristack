import {
  getFrameworksForLanguage,
  getMigrationsForLanguage,
  getOrmsForLanguage,
  ProjectNameSchema,
} from "@tristack/types";
import { Result } from "better-result";

import type { CLIInput, ProjectConfig } from "./types";
import { ValidationError } from "./utils/errors";

type ValidationResult<T> = Result<T, ValidationError>;

export function getProvidedFlags(options: CLIInput): Set<string> {
  const provided = new Set<string>();
  const entries: Array<[keyof CLIInput, unknown]> = Object.entries(options) as Array<
    [keyof CLIInput, unknown]
  >;
  for (const [key, value] of entries) {
    if (value !== undefined) provided.add(key);
  }
  return provided;
}

function extractProjectName(projectName?: string): ValidationResult<string | undefined> {
  if (!projectName) return Result.ok(undefined);
  if (projectName === ".") return Result.ok(projectName);
  const result = ProjectNameSchema.safeParse(projectName);
  if (!result.success) {
    return Result.err(
      new ValidationError({
        message: result.error.issues[0]?.message ?? "Invalid project name",
        field: "projectName",
        value: projectName,
      }),
    );
  }
  return Result.ok(projectName);
}

function processFlags(options: CLIInput, projectName?: string): Partial<ProjectConfig> {
  const config: Partial<ProjectConfig> = {
    language: options.language,
    framework: options.framework,
    orm: options.orm,
    migrations: options.migrations,
    database: options.database,
    packageManager: options.packageManager,
    addons: options.addons,
    git: options.git,
    install: options.install,
  };
  if (projectName) config.projectName = projectName;
  return config;
}

export function validatePerLanguageValues(config: Partial<ProjectConfig>): ValidationResult<void> {
  if (!config.language) return Result.ok(undefined);

  if (config.framework && !getFrameworksForLanguage(config.language).includes(config.framework)) {
    return Result.err(
      new ValidationError({
        message: `Framework "${config.framework}" is not available for the "${config.language}" language.`,
        field: "framework",
        value: config.framework,
      }),
    );
  }

  if (config.orm && !getOrmsForLanguage(config.language).includes(config.orm)) {
    return Result.err(
      new ValidationError({
        message: `ORM "${config.orm}" is not available for the "${config.language}" language.`,
        field: "orm",
        value: config.orm,
      }),
    );
  }

  if (config.migrations && !getMigrationsForLanguage(config.language).includes(config.migrations)) {
    return Result.err(
      new ValidationError({
        message: `Migrations tool "${config.migrations}" is not available for the "${config.language}" language.`,
        field: "migrations",
        value: config.migrations,
      }),
    );
  }

  return Result.ok(undefined);
}

function validateFrameworkRules(config: Partial<ProjectConfig>): ValidationResult<void> {
  if (config.framework === "django") {
    if (config.orm && config.orm !== "none") {
      return Result.err(
        new ValidationError({
          message: `Django brings its own ORM — set orm to "none" when using Django.`,
          field: "orm",
          value: config.orm,
        }),
      );
    }
    if (config.migrations && config.migrations !== "none") {
      return Result.err(
        new ValidationError({
          message: `Django brings its own migration system — set migrations to "none" when using Django.`,
          field: "migrations",
          value: config.migrations,
        }),
      );
    }
  }
  if (config.orm === "tortoise" && config.migrations && config.migrations !== "none") {
    return Result.err(
      new ValidationError({
        message: `Tortoise ORM has no Alembic support — set migrations to "none" (or pick SQLModel/SQLAlchemy plus Alembic).`,
        field: "migrations",
        value: config.migrations,
      }),
    );
  }
  return Result.ok(undefined);
}

export function processAndValidateFlags(
  options: CLIInput,
  _providedFlags: Set<string>,
  projectName?: string,
): ValidationResult<Partial<ProjectConfig>> {
  const config = processFlags(options, projectName);

  const projectNameResult = extractProjectName(projectName);
  if (projectNameResult.isErr()) return Result.err(projectNameResult.error);
  if (projectNameResult.value) config.projectName = projectNameResult.value;

  const perLanguageResult = validatePerLanguageValues(config);
  if (perLanguageResult.isErr()) return Result.err(perLanguageResult.error);

  return Result.ok(config);
}

export function applyFlagDefaults(
  defaults: ProjectConfig,
  flags: Partial<ProjectConfig>,
): ProjectConfig {
  return {
    ...defaults,
    language: flags.language ?? defaults.language,
    framework: flags.framework ?? defaults.framework,
    orm: flags.orm ?? defaults.orm,
    migrations: flags.migrations ?? defaults.migrations,
    database: flags.database ?? defaults.database,
    packageManager: flags.packageManager ?? defaults.packageManager,
    addons: flags.addons ?? defaults.addons,
    git: flags.git ?? defaults.git,
    install: flags.install ?? defaults.install,
  };
}

export function processProvidedFlagsWithoutValidation(
  options: CLIInput,
  projectName?: string,
): ValidationResult<Partial<ProjectConfig>> {
  const config = processFlags(options, projectName);
  const projectNameResult = extractProjectName(projectName);
  if (projectNameResult.isErr()) return Result.err(projectNameResult.error);
  if (projectNameResult.value) config.projectName = projectNameResult.value;
  return Result.ok(config);
}

export function validateConfigCompatibility(
  config: Partial<ProjectConfig>,
): ValidationResult<void> {
  const langResult = validatePerLanguageValues(config);
  if (langResult.isErr()) return langResult;
  return validateFrameworkRules(config);
}

export function validateResolvedConfigCompatibility(config: ProjectConfig): ValidationResult<void> {
  const langResult = validatePerLanguageValues(config);
  if (langResult.isErr()) return langResult;
  return validateFrameworkRules(config);
}

export { getProvidedFlags as getProvidedFlagsReexport };
