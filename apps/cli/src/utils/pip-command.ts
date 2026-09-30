import os from "node:os";

import { Result } from "better-result";
import { execa } from "execa";

export type PipCommand = { bin: string; baseArgs: string[] };

let cached: "pip" | "python" | "missing" | null = null;

async function isAvailable(bin: string, args: string[]): Promise<boolean> {
  const result = await Result.tryPromise({
    try: async () => {
      await execa(bin, args, { cwd: os.tmpdir(), stderr: "pipe" });
    },
    catch: () => null,
  });
  return result.isOk();
}

/**
 * Resolves how to invoke pip on this machine.
 *
 * - Prefers a standalone `pip` binary when it is on PATH.
 * - Falls back to `python -m pip` (common on Windows, where the standalone
 *   launcher script is often not on PATH while `python` is).
 * - Falls back to the standalone `pip` argument shape when neither works, so
 *   callers surface a helpful "pip not found" message for the user.
 */
export async function resolvePipCommand(): Promise<PipCommand> {
  if (cached === "pip") return { bin: "pip", baseArgs: [] };
  if (cached === "python") return { bin: "python", baseArgs: ["-m", "pip"] };
  if (cached === "missing") return { bin: "pip", baseArgs: [] };

  if (await isAvailable("pip", ["--version"])) {
    cached = "pip";
    return { bin: "pip", baseArgs: [] };
  }
  if (await isAvailable("python", ["-m", "pip", "--version"])) {
    cached = "python";
    return { bin: "python", baseArgs: ["-m", "pip"] };
  }
  cached = "missing";
  return { bin: "pip", baseArgs: [] };
}
