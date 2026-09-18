import type { ProjectConfig } from "@tristack/types";

import type { TemplateSource } from "../core/template-processor";
import type { VirtualFileSystem } from "../core/virtual-fs";
import { copyTemplate, copyTemplates, type TemplateData } from "./utils";

function copyPythonBase(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  copyTemplates(
    vfs,
    data.templates,
    config,
    "python/base",
    (templatePath) =>
      templatePath.includes("pyproject-") ||
      (config.framework === "django" && templatePath.includes("/{{project_slug}}/")),
  );

  const fileName =
    config.packageManager === "uv"
      ? "pyproject-uv.toml.hbs"
      : config.packageManager === "poetry"
        ? "pyproject-poetry.toml.hbs"
        : "pyproject-pip.toml.hbs";
  copyTemplate(vfs, data.templates, config, `python/base/${fileName}`, "pyproject.toml");
}

const FRAMEWORK_CORE_LAYOUT = new Set(["fastapi", "litestar", "flask"]);

function copyPythonCore(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  if (!FRAMEWORK_CORE_LAYOUT.has(config.framework)) return;
  copyTemplates(
    vfs,
    data.templates,
    config,
    "python/core",
    (templatePath) =>
      config.orm === "none" &&
      (templatePath.includes("/schemas/") || templatePath.includes("/services/")),
  );
}

function copyFramework(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  if (config.framework === "none") {
    copyTemplates(vfs, data.templates, config, "python/framework/none");
    return;
  }
  copyTemplates(
    vfs,
    data.templates,
    config,
    `python/framework/${config.framework}`,
    (templatePath) => config.orm === "none" && templatePath.includes("/routes/items."),
  );
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

function copyAddons(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  for (const addon of config.addons) {
    copyTemplates(vfs, data.templates, config, `python/addons/${addon}`);
  }
}

export function processPythonTemplates(
  vfs: VirtualFileSystem,
  templates: Map<string, TemplateSource>,
  config: ProjectConfig,
): void {
  const data: TemplateData = { templates, config };
  copyPythonBase(vfs, data);
  copyPythonCore(vfs, data);
  copyFramework(vfs, data);
  copyOrm(vfs, data);
  copyMigrations(vfs, data);
  copyAddons(vfs, data);
}
