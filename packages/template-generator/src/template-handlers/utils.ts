import type { ProjectConfig } from "@tristack/types";

import {
  isPrecompiledTemplate,
  processFileContent,
  processTemplateString,
  toProjectSlug,
  transformFilename,
  type TemplateSource,
} from "../core/template-processor";
import type { VirtualFileSystem } from "../core/virtual-fs";

export interface TemplateData {
  templates: Map<string, TemplateSource>;
  config: ProjectConfig;
}

export function templateKey(language: string, ...parts: string[]): string {
  return [language, ...parts].join("/");
}

export function isTemplateApplicable(templatePath: string, language: string): boolean {
  return templatePath.startsWith(`${language}/`) || templatePath.startsWith("base/");
}

export function resolvePathVars(path: string, config: ProjectConfig): string {
  return path.split("{{project_slug}}").join(toProjectSlug(config.projectName));
}

export function copyTemplates(
  vfs: VirtualFileSystem,
  templates: Map<string, TemplateSource>,
  config: ProjectConfig,
  prefix: string,
  exclude?: (templatePath: string) => boolean,
): void {
  for (const [templatePath, content] of templates) {
    if (!templatePath.startsWith(prefix + "/")) continue;
    if (exclude?.(templatePath)) continue;

    const relativePath = templatePath.slice(prefix.length + 1);
    const finalPath = transformFilename(resolvePathVars(relativePath, config));
    const processed = processFileContent(templatePath, content, config);
    vfs.writeFile(finalPath, processed, templatePath);
  }
}

export function copyTemplate(
  vfs: VirtualFileSystem,
  templates: Map<string, TemplateSource>,
  config: ProjectConfig,
  templatePath: string,
  outputPath?: string,
): void {
  const content = templates.get(templatePath);
  if (content === undefined) return;
  if (!isPrecompiledTemplate(content)) return;

  const finalPath = transformFilename(outputPath ?? templatePath);
  const processed = processTemplateString(content, config);
  vfs.writeFile(finalPath, processed, templatePath);
}

export function templateExists(
  templates: Map<string, TemplateSource>,
  templatePath: string,
): boolean {
  return templates.has(templatePath);
}
