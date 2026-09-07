/**
 * Virtual filesystem export for web preview
 * Re-exports from @tristack/template-generator for browser-compatible usage
 */

export {
  generate,
  VirtualFileSystem,
  type VirtualFileTree,
  type VirtualFile,
  type VirtualDirectory,
  type VirtualNode,
  type GeneratorOptions,
  GeneratorError,
  EMBEDDED_TEMPLATES,
  TEMPLATE_COUNT,
} from "@tristack/template-generator";

export { Result } from "better-result";

export type {
  Language,
  Framework,
  ORM,
  Migrations,
  Database,
  Addons,
  PackageManager,
  DirectoryConflict,
  ProjectConfig,
  CreateInput,
  TriStackConfig,
} from "@tristack/types";
