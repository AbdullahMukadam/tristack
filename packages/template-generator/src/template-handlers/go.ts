import type { ProjectConfig } from "@tristack/types";

import type { VirtualFileSystem } from "../core/virtual-fs";
import { copyTemplate, copyTemplates, type TemplateData } from "./utils";

function copyGoBase(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  copyTemplate(vfs, data.templates, config, "go/base/go.mod.hbs", "go.mod");
  copyTemplates(
    vfs,
    data.templates,
    config,
    "go/base",
    (templatePath) => templatePath.includes("go.mod") || templatePath.includes(".gitkeep"),
  );
}

function copyFramework(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  if (config.framework === "none") return;
  copyTemplates(vfs, data.templates, config, `go/framework/${config.framework}`);
}

function copyOrm(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  if (config.orm === "none") return;
  copyTemplates(vfs, data.templates, config, `go/orm/${config.orm}`);
}

function copyMigrations(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  if (config.migrations === "none") return;
  copyTemplates(vfs, data.templates, config, `go/migrations/${config.migrations}`);
}

function copyAddons(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  for (const addon of config.addons) {
    copyTemplates(vfs, data.templates, config, `go/addons/${addon}`);
  }
}

export function processGoTemplates(
  vfs: VirtualFileSystem,
  templates: Map<string, string>,
  config: ProjectConfig,
): void {
  const data: TemplateData = { templates, config };
  copyGoBase(vfs, data);
  copyFramework(vfs, data);
  copyOrm(vfs, data);
  copyMigrations(vfs, data);
  copyAddons(vfs, data);
}
