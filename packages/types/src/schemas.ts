import { z } from "zod";

export const LanguageSchema = z.enum(["python", "go", "rust"]).describe("Programming language");

export const FrameworkSchema = z
  .enum([
    // Python
    "fastapi",
    "litestar",
    "django",
    "flask",
    // Go
    "gin",
    "fiber",
    "echo",
    "chi",
    "stdlib",
    // Rust
    "axum",
    "actix-web",
    "rocket",
    "warp",
    "salvo",
    "loco",
    "none",
  ])
  .describe('Web framework (or "none" for a bare project)');

export const ORMSchema = z
  .enum([
    // Python
    "sqlmodel",
    "sqlalchemy",
    "tortoise",
    // Go
    "sqlc",
    "gorm",
    "sqlx",
    // Rust
    "seaorm",
    "diesel",
    "sqlx-rust",
    "none",
  ])
  .describe("ORM or database layer");

export const MigrationsSchema = z
  .enum([
    // Python
    "alembic",
    // Go
    "goose",
    "golang-migrate",
    // Rust (none standard)
    "none",
  ])
  .describe("Database migration tool");

export const DatabaseSchema = z
  .enum(["sqlite", "postgres", "mysql", "none"])
  .describe("Database type");

export const FrontendSchema = z
  .enum(["htmx", "none"])
  .describe("Client-side interactivity library (server-rendered)");

export const PackageManagerSchema = z
  .enum([
    // Python
    "uv",
    "poetry",
    "pip",
    // Go (always go)
    "go",
    // Rust (always cargo)
    "cargo",
  ])
  .describe("Package manager");

export const AddonsSchema = z
  .enum([
    "docker",
    "ruff",
    "mypy",
    "pytest",
    "github-actions",
    "air",
    "golangci-lint",
    "cargo-watch",
    "clippy",
    "none",
  ])
  .describe("Additional addons");

const AddonsListSchema = z.array(AddonsSchema);

export const DirectoryConflictSchema = z
  .enum(["merge", "overwrite", "increment", "error"])
  .describe("How to handle existing directory conflicts");

export const ProjectNameSchema = z
  .string()
  .min(1, "Project name cannot be empty")
  .max(255, "Project name must be less than 255 characters")
  .refine(
    (name) => name === "." || !name.startsWith("."),
    "Project name cannot start with a dot (except for '.')",
  )
  .refine((name) => name === "." || !name.startsWith("-"), "Project name cannot start with a dash")
  .refine((name) => {
    const invalidChars = ["<", ">", ":", '"', "|", "?", "*"];
    return !invalidChars.some((char) => name.includes(char));
  }, "Project name contains invalid characters")
  .refine((name) => name.toLowerCase() !== "node_modules", "Project name is reserved")
  .describe("Project name or path");

export const CreateInputSchema = z
  .object({
    projectName: z.string().optional(),
    yes: z.boolean().optional(),
    yolo: z.boolean().optional(),
    dryRun: z.boolean().optional(),
    verbose: z.boolean().optional(),
    language: LanguageSchema.optional(),
    framework: FrameworkSchema.optional(),
    orm: ORMSchema.optional(),
    migrations: MigrationsSchema.optional(),
    database: DatabaseSchema.optional(),
    frontend: FrontendSchema.optional(),
    packageManager: PackageManagerSchema.optional(),
    addons: AddonsListSchema.optional(),
    git: z.boolean().optional(),
    install: z.boolean().optional(),
    directoryConflict: DirectoryConflictSchema.optional(),
    disableAnalytics: z.boolean().optional(),
  })
  .strict();

export const AddInputSchema = z
  .object({
    addons: AddonsListSchema.optional(),
    projectDir: z.string().optional(),
    install: z.boolean().optional(),
    packageManager: PackageManagerSchema.optional(),
    dryRun: z.boolean().optional(),
    disableAnalytics: z.boolean().optional(),
  })
  .strict();

export const CLIInputSchema = CreateInputSchema.safeExtend({
  projectDirectory: z.string().optional(),
}).strict();

export const ProjectConfigSchema = z.object({
  projectName: z.string(),
  projectDir: z.string(),
  relativePath: z.string(),
  language: LanguageSchema,
  framework: FrameworkSchema,
  orm: ORMSchema,
  migrations: MigrationsSchema,
  database: DatabaseSchema,
  frontend: FrontendSchema,
  packageManager: PackageManagerSchema,
  addons: AddonsListSchema,
  git: z.boolean(),
  install: z.boolean(),
});

export const TriStackConfigSchema = z.object({
  version: z.string().describe("CLI version used to create this project"),
  createdAt: z.string().describe("Timestamp when the project was created"),
  reproducibleCommand: z.string().optional().describe("Command to reproduce this project setup"),
  language: LanguageSchema,
  framework: FrameworkSchema,
  orm: ORMSchema,
  migrations: MigrationsSchema,
  database: DatabaseSchema,
  frontend: FrontendSchema,
  packageManager: PackageManagerSchema,
  addons: AddonsListSchema,
});

export const TriStackConfigFileSchema = TriStackConfigSchema.safeExtend({
  $schema: z.string().optional().describe("JSON Schema reference for validation"),
})
  .strict()
  .meta({
    id: "https://tristack.dev/schema.json",
    title: "TriStack Configuration",
    description: "Configuration file for TriStack projects",
  });

export const InitResultSchema = z.object({
  success: z.boolean(),
  projectConfig: ProjectConfigSchema,
  reproducibleCommand: z.string(),
  timeScaffolded: z.string(),
  elapsedTimeMs: z.number(),
  projectDirectory: z.string(),
  relativePath: z.string(),
  error: z.string().optional(),
  warnings: z.array(z.string()).optional(),
});

export const LANGUAGE_VALUES = LanguageSchema.options;
export const FRAMEWORK_VALUES = FrameworkSchema.options;
export const ORM_VALUES = ORMSchema.options;
export const MIGRATIONS_VALUES = MigrationsSchema.options;
export const DATABASE_VALUES = DatabaseSchema.options;
export const FRONTEND_VALUES = FrontendSchema.options;
export const PACKAGE_MANAGER_VALUES = PackageManagerSchema.options;
export const ADDONS_VALUES = AddonsSchema.options;
export const DIRECTORY_CONFLICT_VALUES = DirectoryConflictSchema.options;
