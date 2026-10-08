import type { ProjectConfig } from "@tristack/types";

import type { TemplateSource } from "../core/template-processor";
import type { VirtualFileSystem } from "../core/virtual-fs";
import { copyTemplate, copyTemplates, type TemplateData } from "./utils";

function copyRustBase(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  copyTemplate(vfs, data.templates, config, "rust/base/Cargo.toml.hbs", "Cargo.toml");
  copyTemplate(vfs, data.templates, config, "rust/base/env.example.hbs", ".env.example");
  copyTemplates(
    vfs,
    data.templates,
    config,
    "rust/base",
    (templatePath) =>
      templatePath.includes("Cargo.toml") ||
      templatePath.includes("env.example") ||
      templatePath.includes(".gitkeep"),
  );
}

function copyRustCore(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  if (config.framework === "none") return;
  copyTemplates(vfs, data.templates, config, "rust/core");
}

function copyFramework(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  copyTemplates(
    vfs,
    data.templates,
    config,
    `rust/framework/${config.framework}`,
    (templatePath) =>
      (config.orm === "none" && templatePath.endsWith("/api.rs.hbs")) ||
      (config.frontend === "none" && templatePath.endsWith("/pages.rs.hbs")),
  );
}

function copyItems(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  if (config.orm === "none") return;
  copyTemplates(vfs, data.templates, config, "rust/items");
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

function copyFrontends(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  if (config.frontend === "none") return;

  copyTemplates(
    vfs,
    data.templates,
    config,
    `rust/frontend/${config.frontend}/common`,
    (templatePath) => config.orm === "none" && templatePath.endsWith("/items.html.hbs"),
  );
}

function copyAddons(vfs: VirtualFileSystem, data: TemplateData): void {
  const { config } = data;
  for (const addon of config.addons) {
    copyTemplates(vfs, data.templates, config, `rust/addons/${addon}`);
  }
}

export function processRustTemplates(
  vfs: VirtualFileSystem,
  templates: Map<string, TemplateSource>,
  config: ProjectConfig,
): void {
  const data: TemplateData = { templates, config };
  copyRustBase(vfs, data);
  copyRustCore(vfs, data);
  copyFramework(vfs, data);
  copyItems(vfs, data);
  copyOrm(vfs, data);
  copyMigrations(vfs, data);
  copyFrontends(vfs, data);
  copyAddons(vfs, data);
}
