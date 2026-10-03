import { getRuntimeProfile } from "@tristack/types";
import { Result } from "better-result";
import { execa } from "execa";

import type { ProjectConfig } from "../../types";
import { ProjectCreationError } from "../../utils/errors";
import { shouldSkipExternalCommands } from "../../utils/external-commands";
import { getInterruptSignal, startInterruptibleStep, wasInterrupted } from "../../utils/interrupt";
import { resolvePipCommand } from "../../utils/pip-command";
import { createSpinner } from "../../utils/terminal-output";
import { error } from "../../utils/theme";

export type PrepareStatus = "prepared" | "skipped" | "cancelled" | "failed";

const FORCE_KILL_AFTER_MS = 2000;

type CommandSpec = { bin: string; args: string[]; label: string; env?: Record<string, string> };

async function adaptCommand(spec: CommandSpec, config: ProjectConfig): Promise<CommandSpec> {
  if (config.language === "python" && config.packageManager === "pip") {
    const { bin, baseArgs } = await resolvePipCommand();
    return { ...spec, bin, args: [...baseArgs, ...spec.args] };
  }
  return spec;
}

async function runCommand(
  spec: CommandSpec,
  projectDir: string,
): Promise<Result<null, ProjectCreationError>> {
  return Result.tryPromise({
    try: async () => {
      const subprocess = execa(spec.bin, spec.args, {
        cwd: projectDir,
        env: { ...process.env, ...spec.env },
        stderr: "inherit",
        cancelSignal: getInterruptSignal(),
        forceKillAfterDelay: FORCE_KILL_AFTER_MS,
      });
      await subprocess;
      return null;
    },
    catch: (e) =>
      new ProjectCreationError({
        phase: "dependency-installation",
        message: `Installation error: ${e instanceof Error ? e.message : String(e)}`,
        cause: e,
      }),
  });
}

export async function installDependencies({
  projectDir,
  config,
}: {
  projectDir: string;
  config: ProjectConfig;
}): Promise<Result<"installed" | "cancelled", ProjectCreationError>> {
  if (shouldSkipExternalCommands()) {
    return Result.ok("installed");
  }

  const cmd = await adaptCommand(getRuntimeProfile(config).install, config);

  startInterruptibleStep();
  const s = createSpinner();
  s.start(`Running ${cmd.label}...`);

  const result = await runCommand(cmd, projectDir);

  if (wasInterrupted()) {
    s.stop();
    return Result.ok("cancelled");
  }

  if (result.isOk()) {
    s.stop("Dependencies installed");
    return Result.ok("installed");
  }

  s.stop(error("Failed to install dependencies"));
  return Result.err(result.error);
}

export async function prepareDependencies({
  projectDir,
  config,
}: {
  projectDir: string;
  config: ProjectConfig;
}): Promise<Result<PrepareStatus, ProjectCreationError>> {
  const commands = getRuntimeProfile(config).prepare;
  if (commands.length === 0) return Result.ok("skipped");
  if (shouldSkipExternalCommands()) return Result.ok("skipped");

  const s = createSpinner();
  s.start("Running setup steps...");

  for (const rawSpec of commands) {
    const spec = await adaptCommand(rawSpec, config);
    const result = await runCommand(spec, projectDir);

    if (wasInterrupted()) {
      s.stop();
      return Result.ok("cancelled");
    }

    if (result.isErr()) {
      s.stop(error(`Failed to run ${spec.label}`));
      return Result.err(result.error);
    }
  }

  s.stop("Setup complete");
  return Result.ok("prepared");
}
