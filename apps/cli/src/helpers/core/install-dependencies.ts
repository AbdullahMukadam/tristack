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

export type InstallStatus = "installed" | "cancelled";

const FORCE_KILL_AFTER_MS = 2000;

type InstallCommand = { bin: string; args: string[]; label: string };

async function installCommand(config: ProjectConfig): Promise<InstallCommand> {
  const profile = getRuntimeProfile(config);
  if (config.packageManager === "pip") {
    const { bin, baseArgs } = await resolvePipCommand();
    return { bin, args: [...baseArgs, ...profile.install.args], label: profile.install.label };
  }
  return profile.install;
}

export async function installDependencies({
  projectDir,
  config,
}: {
  projectDir: string;
  config: ProjectConfig;
}): Promise<Result<InstallStatus, ProjectCreationError>> {
  if (shouldSkipExternalCommands()) {
    return Result.ok("installed");
  }

  const cmd = await installCommand(config);

  startInterruptibleStep();
  const s = createSpinner();
  s.start(`Running ${cmd.label}...`);

  const result = await Result.tryPromise({
    try: async () => {
      const subprocess = execa(cmd.bin, cmd.args, {
        cwd: projectDir,
        stderr: "inherit",
        cancelSignal: getInterruptSignal(),
        forceKillAfterDelay: FORCE_KILL_AFTER_MS,
      });
      await subprocess;
    },
    catch: (e) =>
      new ProjectCreationError({
        phase: "dependency-installation",
        message: `Installation error: ${e instanceof Error ? e.message : String(e)}`,
        cause: e,
      }),
  });

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
