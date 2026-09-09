import path from "node:path";

import { intro, log, outro } from "@clack/prompts";
import { generateReproducibleCommand } from "@tristack/template-generator";
import { Result, UnhandledException } from "better-result";
import pc from "picocolors";

import { getDefaultConfig } from "../../constants";
import { gatherConfig } from "../../prompts/config-prompts";
import { getProjectName } from "../../prompts/project-name";
import type { CreateInput, DirectoryConflict, ProjectConfig } from "../../types";
import { isSilent, runWithContextAsync } from "../../utils/context";
import { displayConfig } from "../../utils/display-config";
import {
  type AppError,
  CLIError,
  DirectoryConflictError,
  ProjectCreationError,
  UserCancelledError,
  displayError,
  isUserCancellation,
} from "../../utils/errors";
import { getUserPkgManager } from "../../utils/get-package-manager";
import { validateAgentSafePathInput } from "../../utils/input-hardening";
import {
  findAvailableIncrementedPath,
  handleDirectoryConflict,
  inspectProjectPath,
  resolveProjectDirectoryPath,
  setupProjectDirectory,
  validateSafeProjectDirectoryPath,
} from "../../utils/project-directory";
import { validateProjectName } from "../../utils/project-name-validation";
import { renderTitle } from "../../utils/render-title";
import { checkBaselineRequirements, checkLocalRequirements } from "../../utils/requirements";
import { accent, success } from "../../utils/theme";
import {
  applyFlagDefaults,
  getProvidedFlags,
  processAndValidateFlags,
  validateResolvedConfigCompatibility,
} from "../../validation";
import { createProject } from "./create-project";

export interface CreateHandlerOptions {
  silent?: boolean;
}

type CreateCommandInput = CreateInput & {
  projectName?: string;
  projectDirectory?: string;
};

export interface CreateProjectResult {
  success: boolean;
  projectConfig: ProjectConfig;
  reproducibleCommand: string;
  timeScaffolded: string;
  elapsedTimeMs: number;
  projectDirectory: string;
  relativePath: string;
  error?: string;
  warnings?: string[];
}

function createEmptyResult(
  timeScaffolded: string,
  elapsedTimeMs: number,
  error?: string,
): CreateProjectResult {
  return {
    success: false,
    projectConfig: getEmptyProjectConfig(),
    reproducibleCommand: "",
    timeScaffolded,
    elapsedTimeMs,
    projectDirectory: "",
    relativePath: "",
    error,
  };
}

function getEmptyProjectConfig(): ProjectConfig {
  return {
    projectName: "",
    projectDir: "",
    relativePath: "",
    language: "python",
    framework: "fastapi",
    orm: "sqlmodel",
    migrations: "alembic",
    database: "none",
    packageManager: "uv",
    addons: [],
    git: false,
    install: false,
  };
}

export type CreateHandlerError =
  | UserCancelledError
  | CLIError
  | DirectoryConflictError
  | ProjectCreationError
  | UnhandledException;

interface CreateHandlerExecution {
  result: Result<CreateProjectResult, CreateHandlerError>;
  startTime: number;
  timeScaffolded: string;
}

async function executeCreateProjectHandler(
  input: CreateCommandInput,
  options: CreateHandlerOptions,
): Promise<CreateHandlerExecution> {
  const { silent = false } = options;

  return runWithContextAsync({ silent }, async () => {
    const startTime = Date.now();
    const timeScaffolded = new Date().toISOString();
    const result = await createProjectHandlerInternal(input, startTime, timeScaffolded);
    return { result, startTime, timeScaffolded };
  });
}

export async function createProjectHandlerResult(
  input: CreateCommandInput,
  options: CreateHandlerOptions = {},
): Promise<Result<CreateProjectResult, CreateHandlerError>> {
  const execution = await executeCreateProjectHandler(input, options);
  return execution.result;
}

export async function createProjectHandler(
  input: CreateCommandInput,
  options: CreateHandlerOptions = {},
): Promise<CreateProjectResult | undefined> {
  const { silent = false } = options;
  const { result, startTime, timeScaffolded } = await executeCreateProjectHandler(input, options);

  if (result.isOk()) {
    return result.value;
  }

  const error = result.error;
  const elapsedTimeMs = Date.now() - startTime;

  if (isUserCancellation(error)) {
    if (silent) {
      return createEmptyResult(timeScaffolded, elapsedTimeMs, error.message);
    }
    return undefined;
  }

  if (silent) {
    return createEmptyResult(timeScaffolded, elapsedTimeMs, error.message);
  }

  displayError(error as AppError);
  process.exit(1);
}

async function createProjectHandlerInternal(
  input: CreateCommandInput,
  startTime: number,
  timeScaffolded: string,
): Promise<Result<CreateProjectResult, CreateHandlerError>> {
  return Result.gen(async function* () {
    if (!isSilent() && input.renderTitle !== false) {
      renderTitle();
    }
    if (!isSilent()) intro(accent("Configure your new project"));

    if (!isSilent()) {
      const baseline = yield* Result.await(
        checkBaselineRequirements(
          input.packageManager ?? getUserPkgManager(),
          input.packageManager !== undefined,
        ),
      );
      for (const warning of baseline.warnings) {
        log.warn(pc.yellow(warning));
      }
    }

    let currentPathInput: string;
    if (isSilent()) {
      currentPathInput = input.projectName?.trim() || getDefaultConfig().relativePath;
    } else if (input.yes && input.projectName) {
      currentPathInput = input.projectName;
    } else if (input.yes) {
      currentPathInput = getDefaultConfig().relativePath;
    } else {
      const projectNameResult = yield* Result.await(
        Result.tryPromise({
          try: async () => getProjectName(input.projectName),
          catch: (cause: unknown) => {
            if (cause instanceof UserCancelledError) return cause;
            return new CLIError({
              message: cause instanceof Error ? cause.message : String(cause),
              cause,
            });
          },
        }),
      );
      currentPathInput = projectNameResult;
    }

    yield* validateResolvedProjectPathInput(currentPathInput);

    const conflictResult = yield* Result.await(
      handleDirectoryConflictResult(currentPathInput, input.directoryConflict),
    );
    const finalPathInput = conflictResult.finalPathInput;
    const shouldClearDirectory = conflictResult.shouldClearDirectory;
    yield* validateResolvedProjectPathInput(finalPathInput);
    yield* Result.await(validateSafeProjectDirectoryPath(finalPathInput));

    const { finalResolvedPath, finalBaseName } = resolveProjectDirectoryPath(finalPathInput);

    const originalInput = { ...input, projectDirectory: input.projectName };
    const providedFlags = getProvidedFlags(originalInput);

    let config: ProjectConfig;
    if (originalInput.yes) {
      const flagConfigResult = processAndValidateFlags(originalInput, providedFlags, finalBaseName);
      if (flagConfigResult.isErr()) {
        return Result.err(
          new CLIError({ message: flagConfigResult.error.message, cause: flagConfigResult.error }),
        );
      }
      const flagConfig = flagConfigResult.value;
      config = {
        ...applyFlagDefaults(getDefaultConfig(), flagConfig),
        projectName: finalBaseName,
        projectDir: finalResolvedPath,
        relativePath: finalPathInput,
      };
    } else {
      const flagConfigResult = processAndValidateFlags(originalInput, providedFlags, finalBaseName);
      if (flagConfigResult.isErr()) {
        return Result.err(
          new CLIError({ message: flagConfigResult.error.message, cause: flagConfigResult.error }),
        );
      }
      const flagConfig = flagConfigResult.value;

      const gathered = yield* Result.await(
        Result.tryPromise({
          try: async () =>
            gatherConfig(flagConfig, finalBaseName, finalResolvedPath, finalPathInput, {
              skipCompatibilityChecks: originalInput.yolo,
            }),
          catch: (cause: unknown) => {
            if (cause instanceof UserCancelledError) return cause;
            return new CLIError({
              message: cause instanceof Error ? cause.message : String(cause),
              cause,
            });
          },
        }),
      );
      config = gathered as ProjectConfig;
    }

    if (!input.yolo) {
      const resolvedConfigValidationResult = validateResolvedConfigCompatibility(config);
      if (resolvedConfigValidationResult.isErr()) {
        yield* new CLIError({
          message: resolvedConfigValidationResult.error.message,
          cause: resolvedConfigValidationResult.error,
        });
      }
    }

    const localRequirements = yield* Result.await(checkLocalRequirements(config));
    if (!isSilent()) {
      for (const warning of localRequirements.warnings) {
        log.warn(pc.yellow(warning));
      }
    }

    if (!input.dryRun) {
      yield* Result.await(
        Result.tryPromise({
          try: async () => setupProjectDirectory(finalPathInput, shouldClearDirectory),
          catch: (cause: unknown) => {
            if (cause instanceof UserCancelledError) return cause;
            return new CLIError({
              message: cause instanceof Error ? cause.message : String(cause),
              cause,
            });
          },
        }),
      );
    }

    if (!isSilent()) {
      log.info(accent(pc.bold("Stack ready")));
      log.message(displayConfig(config));
    }

    const reproducibleCommand = generateReproducibleCommand(config);

    if (input.dryRun) {
      const elapsedTimeMs = Date.now() - startTime;
      if (!isSilent()) {
        log.success(success("Configuration ready. No files were written."));
        log.message(pc.dim(`Target directory: ${finalResolvedPath}`));
        log.message(pc.dim(`Run without --dry-run to create the project.`));
        outro(accent("Dry run complete."));
      }
      return Result.ok({
        success: true,
        projectConfig: config,
        reproducibleCommand,
        timeScaffolded,
        elapsedTimeMs,
        projectDirectory: config.projectDir,
        relativePath: config.relativePath,
      });
    }

    const created = yield* Result.await(createProject(config));

    const warnings: string[] = [];
    if (created.interrupted) {
      warnings.push("One or more setup steps were cancelled.");
    }
    if (created.installError) {
      warnings.push(created.installError.message);
    }

    const elapsedTimeMs = Date.now() - startTime;
    if (!isSilent()) {
      const elapsedTimeInSeconds = (elapsedTimeMs / 1000).toFixed(1);
      outro(accent(`Project ready in ${pc.bold(`${elapsedTimeInSeconds}s`)}`));
      log.message(`${pc.dim("Recreate this stack")}\n${accent(reproducibleCommand)}`);
    }

    return Result.ok({
      success: true,
      projectConfig: config,
      reproducibleCommand,
      timeScaffolded,
      elapsedTimeMs,
      projectDirectory: config.projectDir,
      relativePath: config.relativePath,
      warnings: warnings.length > 0 ? warnings : undefined,
    });
  });
}

interface DirectoryConflictResult {
  finalPathInput: string;
  shouldClearDirectory: boolean;
}

function isPathWithinCwd(targetPath: string) {
  const resolved = path.resolve(targetPath);
  const rel = path.relative(process.cwd(), resolved);
  return !rel.startsWith("..") && !path.isAbsolute(rel);
}

function validateResolvedProjectPathInput(candidate: string): Result<void, CLIError> {
  const hardeningResult = validateAgentSafePathInput(candidate, "projectName");
  if (hardeningResult.isErr()) {
    return Result.err(
      new CLIError({
        message: hardeningResult.error.message,
        cause: hardeningResult.error,
      }),
    );
  }

  if (candidate === ".") {
    return Result.ok(undefined);
  }

  const finalDirName = path.basename(candidate);
  const validationResult = validateProjectName(finalDirName);
  if (validationResult.isErr()) {
    return Result.err(
      new CLIError({
        message: validationResult.error.message,
        cause: validationResult.error,
      }),
    );
  }

  if (!isPathWithinCwd(candidate)) {
    return Result.err(
      new CLIError({
        message: "Project path must be within current directory",
      }),
    );
  }

  return Result.ok(undefined);
}

async function handleDirectoryConflictResult(
  currentPathInput: string,
  strategy?: DirectoryConflict,
): Promise<
  Result<DirectoryConflictResult, UserCancelledError | CLIError | DirectoryConflictError>
> {
  if (strategy) {
    return handleDirectoryConflictProgrammatically(currentPathInput, strategy);
  }
  return Result.tryPromise({
    try: async () => handleDirectoryConflict(currentPathInput),
    catch: (cause: unknown) => {
      if (cause instanceof UserCancelledError) return cause;
      if (cause instanceof CLIError) return cause;
      return new CLIError({
        message: cause instanceof Error ? cause.message : String(cause),
        cause,
      });
    },
  });
}

async function handleDirectoryConflictProgrammatically(
  currentPathInput: string,
  strategy: DirectoryConflict,
): Promise<Result<DirectoryConflictResult, CLIError | DirectoryConflictError>> {
  const currentPath = path.resolve(process.cwd(), currentPathInput);
  const pathStateResult = await inspectProjectPath(currentPath);
  if (pathStateResult.isErr()) return Result.err(pathStateResult.error);
  const pathState = pathStateResult.value;

  if (pathState === "missing" || pathState === "empty-directory") {
    return Result.ok({ finalPathInput: currentPathInput, shouldClearDirectory: false });
  }

  if (strategy === "increment") {
    const incrementResult = await findAvailableIncrementedPath(currentPathInput);
    if (incrementResult.isErr()) return Result.err(incrementResult.error);
    return Result.ok({ finalPathInput: incrementResult.value, shouldClearDirectory: false });
  }

  if (pathState === "symbolic-link") {
    return Result.err(
      new CLIError({
        message: `Project path "${currentPathInput}" is a symbolic link. Choose a real directory or use directoryConflict: "increment".`,
      }),
    );
  }
  if (pathState === "non-directory") {
    return Result.err(
      new CLIError({
        message: `Project path "${currentPathInput}" exists and is not a directory. Choose a different path or use directoryConflict: "increment".`,
      }),
    );
  }

  switch (strategy) {
    case "overwrite":
      return Result.ok({ finalPathInput: currentPathInput, shouldClearDirectory: true });
    case "merge":
      return Result.ok({ finalPathInput: currentPathInput, shouldClearDirectory: false });
    case "error":
    default:
      return Result.err(new DirectoryConflictError({ directory: currentPathInput }));
  }
}
