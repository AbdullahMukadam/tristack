import type { ProjectConfig } from "@tristack/types";

import type { VirtualFileSystem } from "../core/virtual-fs";
import { copyTemplate, copyTemplates, type TemplateData } from "./utils";

function copyRustBase(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  copyTemplate(vfs, data.templates, config, "rust/base/Cargo.toml.hbs", "Cargo.toml");
  copyTemplates(
    vfs,
    data.templates,
    config,
    "rust/base",
    (templatePath) => templatePath.includes("Cargo.toml") || templatePath.includes(".gitkeep"),
  );
}

function copyRustCore(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  if (config.framework === "none") return;
  copyTemplates(vfs, data.templates, config, "rust/core");
}

function copyFramework(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  copyTemplates(vfs, data.templates, config, `rust/framework/${config.framework}`);
}

function copyOrm(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  if (config.orm === "none") return;
  copyTemplates(vfs, data.templates, config, `rust/orm/${config.orm}`);
}

function copyMigrations(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  if (config.migrations === "none") return;
  copyTemplates(vfs, data.templates, config, `rust/migrations/${config.migrations}`);
}

function copyAddons(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  for (const addon of config.addons) {
    copyTemplates(vfs, data.templates, config, `rust/addons/${addon}`);
  }
}

export function processRustTemplates(
  vfs: VirtualFileSystem,
  templates: Map<string, string>,
  config: ProjectConfig,
): void {
  const data: TemplateData = { templates, config };
  copyRustBase(vfs, data);
  copyRustCore(vfs, data);
  copyFramework(vfs, data);
  copyOrm(vfs, data);
  copyMigrations(vfs, data);
  copyAddons(vfs, data);
}
