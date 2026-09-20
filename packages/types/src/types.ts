import type { z } from "zod";

import type {
  LanguageSchema,
  FrameworkSchema,
  ORMSchema,
  MigrationsSchema,
  DatabaseSchema,
  FrontendSchema,
  PackageManagerSchema,
  AddonsSchema,
  DirectoryConflictSchema,
  ProjectNameSchema,
  CreateInputSchema,
  AddInputSchema,
  CLIInputSchema,
  ProjectConfigSchema,
  TriStackConfigSchema,
  InitResultSchema,
} from "./schemas";

export type Language = z.infer<typeof LanguageSchema>;
export type Framework = z.infer<typeof FrameworkSchema>;
export type ORM = z.infer<typeof ORMSchema>;
export type Migrations = z.infer<typeof MigrationsSchema>;
export type Database = z.infer<typeof DatabaseSchema>;
export type Frontend = z.infer<typeof FrontendSchema>;
export type PackageManager = z.infer<typeof PackageManagerSchema>;
export type Addons = z.infer<typeof AddonsSchema>;
export type DirectoryConflict = z.infer<typeof DirectoryConflictSchema>;
export type ProjectName = z.infer<typeof ProjectNameSchema>;

export type CreateInput = z.infer<typeof CreateInputSchema>;
export type AddInput = z.infer<typeof AddInputSchema>;
export type CLIInput = z.infer<typeof CLIInputSchema>;
export type ProjectConfig = z.infer<typeof ProjectConfigSchema>;
export type TriStackConfig = z.infer<typeof TriStackConfigSchema>;
export type InitResult = z.infer<typeof InitResultSchema>;
