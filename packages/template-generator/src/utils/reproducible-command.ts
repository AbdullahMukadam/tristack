import type { ProjectConfig } from "@tristack/types";

function normalizeMultiValues(values: string[] | undefined): string[] {
  if (!values || values.length === 0) return [];
  const filtered = values.filter((value) => value !== "none");
  return Array.from(new Set(filtered));
}

function formatMultiFlag(flag: string, values: string[]): string {
  if (values.length === 0) {
    return `${flag} none`;
  }
  return `${flag} ${values.join(",")}`;
}

/**
 * Native install command per language. The core engine is a standalone binary
 * wrapped natively per ecosystem: `uvx`/`pip` for Python, and a plain
 * `tristack` command from the standalone curl/PowerShell installers for the
 * Go/Rust phases (which cannot compile a foreign binary via `go install`/`cargo install`).
 */
export function getNativeCommand(language: ProjectConfig["language"]): string {
  if (language === "go" || language === "rust") {
    return "tristack";
  }
  return "uvx tristack";
}

export function generateReproducibleCommand(config: ProjectConfig): string {
  const baseCommand = getNativeCommand(config.language);

  const flags: string[] = [];
  flags.push(`--language ${config.language}`);
  flags.push(`--framework ${config.framework}`);
  flags.push(`--orm ${config.orm}`);
  flags.push(`--migrations ${config.migrations}`);
  flags.push(`--database ${config.database}`);
  flags.push(`--package-manager ${config.packageManager}`);
  flags.push(formatMultiFlag("--addons", normalizeMultiValues(config.addons)));
  flags.push(config.git ? "--git" : "--no-git");
  flags.push(config.install ? "--install" : "--no-install");

  const projectPathArg = config.relativePath ? ` ${config.relativePath}` : "";

  return `${baseCommand}${projectPathArg} ${flags.join(" ")}`;
}
