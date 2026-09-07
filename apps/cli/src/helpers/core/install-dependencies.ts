import { Result } from "better-result";
import { execa } from "execa";
import pc from "picocolors";

import type { PackageManager } from "../../types";
import { ProjectCreationError } from "../../utils/errors";
import { shouldSkipExternalCommands } from "../../utils/external-commands";
import { getInterruptSignal, startInterruptibleStep, wasInterrupted } from "../../utils/interrupt";
import { createSpinner } from "../../utils/terminal-output";

export type InstallStatus = "installed" | "cancelled";

const FORCE_KILL_AFTER_MS = 2000;

type InstallCommand = { bin: string; args: string[]; label: string };

function installCommand(packageManager: PackageManager): InstallCommand {
  switch (packageManager) {
    case "uv":
      return { bin: "uv", args: ["sync"], label: "uv sync" };
    case "poetry":
      return { bin: "poetry", args: ["install"], label: "poetry install" };
    case "pip":
      return { bin: "pip", args: ["install", "-e", "."], label: "pip install -e ." };
    case "go":
      return { bin: "go", args: ["mod", "tidy"], label: "go mod tidy" };
    case "cargo":
      return { bin: "cargo", args: ["build"], label: "cargo build" };
  }
}

export async function installDependencies({
  projectDir,
  packageManager,
}: {
  projectDir: string;
  packageManager: PackageManager;
}): Promise<Result<InstallStatus, ProjectCreationError>> {
  if (shouldSkipExternalCommands()) {
    return Result.ok("installed");
  }

  const cmd = installCommand(packageManager);

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

  s.stop(pc.red("Failed to install dependencies"));
  return Result.err(result.error);
}
