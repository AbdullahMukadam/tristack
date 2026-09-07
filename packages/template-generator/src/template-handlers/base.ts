import type { ProjectConfig } from "@tristack/types";

import type { VirtualFileSystem } from "../core/virtual-fs";
import { copyTemplates } from "./utils";

export function processBaseTemplate(
  vfs: VirtualFileSystem,
  templates: Map<string, string>,
  config: ProjectConfig,
): void {
  copyTemplates(vfs, templates, config, "base");
}

export { copyTemplate, copyTemplates, templateExists, type TemplateData } from "./utils";
