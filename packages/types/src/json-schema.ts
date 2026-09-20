import {
  DatabaseSchema,
  FrontendSchema,
  FrameworkSchema,
  LanguageSchema,
  ORMSchema,
  MigrationsSchema,
  PackageManagerSchema,
  AddonsSchema,
  DirectoryConflictSchema,
  CreateInputSchema,
  AddInputSchema,
  ProjectConfigSchema,
  TriStackConfigSchema,
  TriStackConfigFileSchema,
  InitResultSchema,
} from "./schemas";

export function getLanguageJsonSchema() {
  return LanguageSchema;
}

export function getFrameworkJsonSchema() {
  return FrameworkSchema;
}

export function getORMJsonSchema() {
  return ORMSchema;
}

export function getMigrationsJsonSchema() {
  return MigrationsSchema;
}

export function getDatabaseJsonSchema() {
  return DatabaseSchema;
}

export function getFrontendJsonSchema() {
  return FrontendSchema;
}

export function getPackageManagerJsonSchema() {
  return PackageManagerSchema;
}

export function getAddonsJsonSchema() {
  return AddonsSchema;
}

export function getDirectoryConflictJsonSchema() {
  return DirectoryConflictSchema;
}

export function getCreateInputJsonSchema() {
  return CreateInputSchema;
}

export function getAddInputJsonSchema() {
  return AddInputSchema;
}

export function getProjectConfigJsonSchema() {
  return ProjectConfigSchema;
}

export function getTriStackConfigJsonSchema() {
  return TriStackConfigSchema;
}

export function getTriStackConfigFileJsonSchema() {
  return TriStackConfigFileSchema;
}

export function getInitResultJsonSchema() {
  return InitResultSchema;
}

export function getAllJsonSchemas() {
  return {
    language: getLanguageJsonSchema(),
    framework: getFrameworkJsonSchema(),
    orm: getORMJsonSchema(),
    migrations: getMigrationsJsonSchema(),
    database: getDatabaseJsonSchema(),
    frontend: getFrontendJsonSchema(),
    packageManager: getPackageManagerJsonSchema(),
    addons: getAddonsJsonSchema(),
    directoryConflict: getDirectoryConflictJsonSchema(),
    createInput: getCreateInputJsonSchema(),
    addInput: getAddInputJsonSchema(),
    projectConfig: getProjectConfigJsonSchema(),
    triStackConfig: getTriStackConfigJsonSchema(),
    triStackConfigFile: getTriStackConfigFileJsonSchema(),
    initResult: getInitResultJsonSchema(),
  };
}
