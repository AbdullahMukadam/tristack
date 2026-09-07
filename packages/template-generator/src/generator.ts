import { Result } from "better-result";

import { VirtualFileSystem } from "./core/virtual-fs";
import { processReadme } from "./processors/readme-generator";
import {
  processBaseTemplate,
  processGoTemplates,
  processPythonTemplates,
} from "./template-handlers";
import { writeTriStackConfigToVfs } from "./tristack-config";
import type { GeneratorOptions, VirtualFileTree } from "./types";
import { GeneratorError } from "./types";
import { generateReproducibleCommand } from "./utils/reproducible-command";

export type { TemplateData } from "./template-handlers";

export async function generate(
  options: GeneratorOptions,
): Promise<Result<VirtualFileTree, GeneratorError>> {
  return Result.tryPromise({
    try: async () => {
      const { config, templates } = options;

      if (!templates || templates.size === 0) {
        throw new GeneratorError({
          message: "No templates provided. Templates must be passed via the templates option.",
          phase: "initialization",
        });
      }

      const vfs = new VirtualFileSystem();

      processBaseTemplate(vfs, templates, config);

      switch (config.language) {
        case "python":
          processPythonTemplates(vfs, templates, config);
          break;
        case "go":
          processGoTemplates(vfs, templates, config);
          break;
        case "rust":
          // Not yet implemented in current phase
          break;
      }

      processReadme(vfs, config);

      if (options.version) {
        const reproducibleCommand = generateReproducibleCommand(config);
        writeTriStackConfigToVfs(vfs, config, options.version, reproducibleCommand);
      }

      const tree: VirtualFileTree = {
        root: vfs.toTree(config.projectName),
        fileCount: vfs.getFileCount(),
        directoryCount: vfs.getDirectoryCount(),
        config,
      };

      return tree;
    },
    catch: (e) => {
      if (GeneratorError.is(e)) {
        return e;
      }
      return new GeneratorError({
        message: e instanceof Error ? e.message : String(e),
        phase: "unknown",
        cause: e,
      });
    },
  });
}
