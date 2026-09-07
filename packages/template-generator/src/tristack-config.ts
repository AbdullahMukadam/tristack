import type { ProjectConfig, TriStackConfig } from "@tristack/types";

import type { VirtualFileSystem } from "./core/virtual-fs";

export function buildTriStackConfig(
  config: ProjectConfig,
  version: string,
  reproducibleCommand: string,
): TriStackConfig {
  return {
    version,
    createdAt: new Date().toISOString(),
    reproducibleCommand,
    language: config.language,
    framework: config.framework,
    orm: config.orm,
    migrations: config.migrations,
    database: config.database,
    packageManager: config.packageManager,
    addons: config.addons,
  };
}

export function writeTriStackConfigToVfs(
  vfs: VirtualFileSystem,
  config: ProjectConfig,
  version: string,
  reproducibleCommand: string,
): void {
  const tristackConfig = buildTriStackConfig(config, version, reproducibleCommand);
  vfs.writeFile(
    "tristack.jsonc",
    `// TriStack configuration for this project.\n${JSON.stringify(tristackConfig, null, 2)}`,
  );
}
