import {
  GeneratorError,
  EMBEDDED_TEMPLATES,
  type VirtualFileTree,
} from "@tristack/template-generator";
import {
  type CreateInput,
  CreateInputSchema,
  type InitResult,
  type ProjectConfig,
  ProjectNameSchema,
  AddonsSchema,
  DatabaseSchema,
  DirectoryConflictSchema,
  FrameworkSchema,
  LanguageSchema,
  MigrationsSchema,
  ORMSchema,
  PackageManagerSchema,
} from "@tristack/types";
import { initTRPC } from "@trpc/server";
import { Result } from "better-result";
import { createCli, type TrpcCli, type TrpcCliMeta } from "trpc-cli";
import z from "zod";

import { CLI_VERSION } from "./constants";
import { createProjectHandler, createProjectHandlerResult } from "./helpers/core/command-handlers";
import {
  CLIError,
  DirectoryConflictError,
  ProjectCreationError,
  UserCancelledError,
} from "./utils/errors";
import { validateResolvedConfigCompatibility } from "./validation";

const t = initTRPC.meta<TrpcCliMeta>().create();

export const router = t.router({
  create: t.procedure
    .meta({
      description: "Create a new TriStack project",
      default: true,
      negateBooleans: true,
    })
    .input(
      z.tuple([
        ProjectNameSchema.optional(),
        z.object({
          yes: z.boolean().optional().default(false).describe("Use default configuration"),
          yolo: z
            .boolean()
            .optional()
            .default(false)
            .describe("(WARNING - NOT RECOMMENDED) Bypass validations and compatibility checks"),
          dryRun: z
            .boolean()
            .optional()
            .default(false)
            .describe("Validate setup without writing files"),
          verbose: z
            .boolean()
            .optional()
            .default(false)
            .describe("Show detailed result information"),
          language: LanguageSchema.optional(),
          framework: FrameworkSchema.optional(),
          orm: ORMSchema.optional(),
          migrations: MigrationsSchema.optional(),
          database: DatabaseSchema.optional(),
          packageManager: PackageManagerSchema.optional(),
          addons: z.array(AddonsSchema).optional(),
          git: z.boolean().optional(),
          install: z.boolean().optional(),
          directoryConflict: DirectoryConflictSchema.optional(),
          renderTitle: z.boolean().optional(),
          disableAnalytics: z.boolean().optional().default(false).describe("Disable analytics"),
        }),
      ]),
    )
    .mutation(async ({ input }) => {
      const [projectName, options] = input;
      const combinedInput = { projectName, ...options };
      const result = await createProjectHandler(combinedInput);
      if (options.verbose) {
        return result;
      }
    }),
  createJson: t.procedure
    .meta({
      description: "Create a project from a raw JSON payload (agent-friendly)",
      jsonInput: "always",
    })
    .input(CreateInputSchema)
    .mutation(async ({ input }) => {
      const result = await createProjectHandler(input, { silent: true });
      if (!result) {
        throw new UserCancelledError({ message: "Operation cancelled" });
      }
      if (!result.success) {
        throw new CLIError({
          message: result.error || "Unknown error occurred",
        });
      }
      return result;
    }),
});

export function createTristackCli(): TrpcCli {
  return createCli({
    router,
    name: "create-tristack",
    version: CLI_VERSION,
  });
}

export { Result } from "better-result";

export type CreateError =
  | UserCancelledError
  | CLIError
  | DirectoryConflictError
  | ProjectCreationError;

function formatInputValidationError(label: string, error: z.ZodError): string {
  const details = error.issues
    .map((issue) => {
      const field = issue.path.join(".");
      return field ? `${field}: ${issue.message}` : issue.message;
    })
    .join("; ");
  return `Invalid ${label} input: ${details}`;
}

/**
 * Programmatic API to create a new TriStack project.
 * Returns a Result type - no console output, no interactive prompts.
 */
export async function create(
  projectName?: string,
  options?: Partial<CreateInput>,
): Promise<Result<InitResult, CreateError>> {
  const rawInput = { ...options, projectName };
  const parsedInput = CreateInputSchema.safeParse(rawInput);
  if (!parsedInput.success) {
    return Result.err(
      new CLIError({
        message: formatInputValidationError("create", parsedInput.error),
        cause: parsedInput.error,
      }),
    );
  }

  const input = {
    ...parsedInput.data,
    projectName: parsedInput.data.projectName ?? projectName,
    renderTitle: false,
    verbose: true,
    directoryConflict: parsedInput.data.directoryConflict ?? "error",
  } as CreateInput & { projectName?: string };

  return Result.tryPromise({
    try: async () => {
      const result = await createProjectHandlerResult(input, { silent: true });
      if (result.isErr()) {
        throw result.error;
      }
      return result.value as InitResult;
    },
    catch: (cause: unknown) => {
      if (UserCancelledError.is(cause)) return cause;
      if (CLIError.is(cause)) return cause;
      if (DirectoryConflictError.is(cause)) return cause;
      if (ProjectCreationError.is(cause)) return cause;
      return new CLIError({
        message: cause instanceof Error ? cause.message : String(cause),
        cause,
      });
    },
  });
}

// Re-export virtual filesystem types for programmatic usage
export {
  VirtualFileSystem,
  type VirtualFile,
  type VirtualDirectory,
  type VirtualNode,
  type GeneratorOptions,
} from "@tristack/template-generator";

/**
 * Programmatic API to generate a project in-memory (virtual filesystem).
 * Returns a Result with a VirtualFileTree without writing to disk.
 */
export async function createVirtual(
  options: Partial<Omit<ProjectConfig, "projectDir" | "relativePath">>,
): Promise<Result<VirtualFileTree, GeneratorError>> {
  const config: ProjectConfig = {
    projectName: options.projectName || "my-project",
    projectDir: "/virtual",
    relativePath: "./virtual",
    language: options.language ?? "python",
    framework: options.framework ?? "fastapi",
    orm: options.orm ?? "sqlmodel",
    migrations: options.migrations ?? "alembic",
    database: options.database ?? "sqlite",
    packageManager: options.packageManager ?? "uv",
    addons: options.addons ?? ["docker", "ruff", "pytest"],
    git: options.git ?? false,
    install: false,
  };

  const validationResult = validateResolvedConfigCompatibility(config);
  if (validationResult.isErr()) {
    return Result.err(
      new GeneratorError({
        message: validationResult.error.message,
        phase: "validation",
        cause: validationResult.error,
      }),
    );
  }

  const { generate: runGenerate } = await import("@tristack/template-generator");
  return runGenerate({
    config,
    templates: EMBEDDED_TEMPLATES,
  });
}

export type { CreateInput, InitResult, ProjectConfig };

export {
  UserCancelledError,
  CLIError,
  ProjectCreationError,
  ValidationError,
  CompatibilityError,
  DirectoryConflictError,
} from "./utils/errors";
