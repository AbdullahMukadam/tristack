import { generate, EMBEDDED_TEMPLATES } from "@tristack/template-generator";
import { writeTree } from "@tristack/template-generator/fs-writer";
import { getRuntimeProfile } from "@tristack/types";
import { Result } from "better-result";
import fs from "fs-extra";

import { CLI_VERSION } from "../../constants";
import type { ProjectConfig } from "../../types";
import { isSilent } from "../../utils/context";
import { ProjectCreationError } from "../../utils/errors";
import {
  beginInterruptibleScope,
  endInterruptibleScope,
  getInterruptSignal,
  startInterruptibleStep,
  wasAnyStepInterrupted,
} from "../../utils/interrupt";
import { runOptionalStep } from "../../utils/optional-step";
import { cliLog } from "../../utils/terminal-output";
import { accent } from "../../utils/theme";
import { initializeGit } from "./git";
import { installDependencies, prepareDependencies } from "./install-dependencies";

export interface CreateProjectOutcome {
  projectDir: string;
  install: "installed" | "skipped" | "cancelled" | "failed";
  installError: ProjectCreationError | null;
  prepare: "prepared" | "skipped" | "cancelled" | "failed";
  prepareError: ProjectCreationError | null;
  interrupted: boolean;
}

export async function createProject(
  options: ProjectConfig,
): Promise<Result<CreateProjectOutcome, ProjectCreationError>> {
  return Result.gen(async function* () {
    const projectDir = options.projectDir;

    yield* Result.await(
      Result.tryPromise({
        try: () => fs.ensureDir(projectDir),
        catch: (e) =>
          new ProjectCreationError({
            phase: "directory-setup",
            message: `Failed to create project directory: ${e instanceof Error ? e.message : String(e)}`,
            cause: e,
          }),
      }),
    );

    const tree = yield* Result.await(
      generate({
        config: options,
        templates: EMBEDDED_TEMPLATES,
        version: CLI_VERSION,
      }).then((result) =>
        result.mapError(
          (e) =>
            new ProjectCreationError({
              phase: e.phase || "template-generation",
              message: e.message,
              cause: e,
            }),
        ),
      ),
    );

    yield* Result.await(
      writeTree(tree, projectDir).then((result) =>
        result.mapError(
          (e) =>
            new ProjectCreationError({
              phase: "file-writing",
              message: e.message,
              cause: e,
            }),
        ),
      ),
    );

    beginInterruptibleScope();
    try {
      const outcome = yield* Result.await(
        Result.tryPromise({
          try: () => runPostScaffoldSteps(options, projectDir),
          catch: (e) =>
            new ProjectCreationError({
              phase: "post-scaffold",
              message: `Post-scaffold setup failed: ${e instanceof Error ? e.message : String(e)}`,
              cause: e,
            }),
        }),
      );
      return Result.ok(outcome);
    } finally {
      endInterruptibleScope();
    }
  });
}

async function runPostScaffoldSteps(
  options: ProjectConfig,
  projectDir: string,
): Promise<CreateProjectOutcome> {
  if (!isSilent()) cliLog.success("Project scaffolded");

  let install: CreateProjectOutcome["install"] = "skipped";
  let installError: ProjectCreationError | null = null;
  let prepare: CreateProjectOutcome["prepare"] = "skipped";
  let prepareError: ProjectCreationError | null = null;

  if (options.install) {
    const installResult = await installDependencies({
      projectDir,
      config: options,
    });
    if (installResult.isErr()) {
      install = "failed";
      installError = installResult.error;
    } else {
      install = installResult.value;
    }

    if (install === "installed") {
      const prepareResult = await prepareDependencies({
        projectDir,
        config: options,
      });
      if (prepareResult.isErr()) {
        prepare = "failed";
        prepareError = prepareResult.error;
      } else {
        prepare = prepareResult.value;
      }
    }
  }

  startInterruptibleStep();
  await runOptionalStep(
    () => initializeGit(projectDir, options.git, getInterruptSignal()),
    "Git initialization cancelled.",
  );

  if (!isSilent()) {
    cliLog.message(accent(`cd ${options.relativePath}`));
    const runCmd = runCommandHint(options);
    if (runCmd) cliLog.message(accent(runCmd));
  }

  return {
    projectDir,
    install,
    installError,
    prepare,
    prepareError,
    interrupted: wasAnyStepInterrupted(),
  };
}

function runCommandHint(options: ProjectConfig): string {
  return getRuntimeProfile(options).run({ dev: true }).label;
}
