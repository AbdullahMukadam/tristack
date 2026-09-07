import type { ProjectConfig } from "@tristack/types";

import type { VirtualFileSystem } from "../core/virtual-fs";
import { copyTemplate, copyTemplates, type TemplateData } from "./utils";

function copyPythonBase(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  copyTemplates(vfs, data.templates, config, "python/base", (templatePath) =>
    templatePath.includes("pyproject-"),
  );

  const fileName =
    config.packageManager === "uv"
      ? "pyproject-uv.toml.hbs"
      : config.packageManager === "poetry"
        ? "pyproject-poetry.toml.hbs"
        : "pyproject-pip.toml.hbs";
  copyTemplate(vfs, data.templates, config, `python/base/${fileName}`, "pyproject.toml");
}

function copyFramework(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  copyTemplates(vfs, data.templates, config, `python/framework/${config.framework}`);
}

function copyOrm(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  if (config.orm === "none") return;
  copyTemplates(vfs, data.templates, config, `python/orm/${config.orm}`);
}

function copyMigrations(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  if (config.migrations === "none") return;
  copyTemplates(vfs, data.templates, config, `python/migrations/${config.migrations}`);
}

function copyDb(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  if (config.database === "none") return;
  copyTemplates(vfs, data.templates, config, `python/db/${config.database}`);
}

function copyAddons(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  for (const addon of config.addons) {
    copyTemplates(vfs, data.templates, config, `python/addons/${addon}`);
  }
}

export function processPythonTemplates(
  vfs: VirtualFileSystem,
  templates: Map<string, string>,
  config: ProjectConfig,
): void {
  const data: TemplateData = { templates, config };
  copyPythonBase(vfs, data);
  copyFramework(vfs, data);
  copyOrm(vfs, data);
  copyMigrations(vfs, data);
  copyDb(vfs, data);
  copyAddons(vfs, data);
}
