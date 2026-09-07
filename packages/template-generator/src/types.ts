import type { ProjectConfig } from "@tristack/types";
import { TaggedError } from "better-result";

export interface VirtualFile {
  type: "file";
  path: string;
  name: string;
  content: string;
  extension: string;
  sourcePath?: string;
}

export interface VirtualDirectory {
  type: "directory";
  path: string;
  name: string;
  children: VirtualNode[];
}

export type VirtualNode = VirtualFile | VirtualDirectory;

export interface VirtualFileTree {
  root: VirtualDirectory;
  fileCount: number;
  directoryCount: number;
  config: ProjectConfig;
}

export interface GeneratorOptions {
  config: ProjectConfig;
  templates?: Map<string, string>;
  version?: string;
}

export class GeneratorError extends TaggedError("GeneratorError")<{
  message: string;
  phase?: string;
  cause?: unknown;
}> {}
