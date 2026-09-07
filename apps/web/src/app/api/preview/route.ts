import { generate, EMBEDDED_TEMPLATES, type VirtualNode } from "@tristack/template-generator";
import type {
  Addons,
  Database,
  Framework,
  Migrations,
  ORM,
  PackageManager,
  ProjectConfig,
} from "@tristack/types";
import { NextResponse } from "next/server";

import type { StackState } from "@/lib/constant";
import { sanitizeStackState } from "@/lib/sanitize-stack-addons";

export async function POST(request: Request) {
  try {
    const body = sanitizeStackState((await request.json()) as StackState);

    // Convert StackState from web to CLI options format
    const config = stackStateToConfig(body);

    // Generate project to virtual filesystem using Result-based API
    const result = await generate({
      config,
      templates: EMBEDDED_TEMPLATES,
    });

    // Handle Result type
    if (result.isErr()) {
      throw new Error(result.error.message);
    }

    const tree = result.value;

    // Transform VirtualFileTree to web's expected format
    const transformedRoot = transformTree(tree.root);

    return NextResponse.json({
      success: true,
      tree: {
        root: transformedRoot,
        fileCount: tree.fileCount,
        directoryCount: tree.directoryCount,
      },
    });
  } catch (error) {
    console.error("Preview generation error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

/**
 * Transform VirtualFileTree format to web's expected tree format
 */
interface PreviewFileNode {
  name: string;
  path: string;
  type: "file";
  content: string;
  extension: string;
}

interface PreviewDirectoryNode {
  name: string;
  path: string;
  type: "directory";
  children: PreviewNode[];
}

type PreviewNode = PreviewFileNode | PreviewDirectoryNode;

function transformTree(node: VirtualNode): PreviewNode {
  if (node.type === "file") {
    return {
      name: node.name,
      path: node.path,
      type: "file" as const,
      content: node.content,
      extension: node.extension,
    };
  }

  return {
    name: node.name,
    path: node.path,
    type: "directory" as const,
    children: node.children.map(transformTree),
  };
}

function normalizeBoolean(value: boolean | string | undefined, fallback: boolean): boolean {
  if (value === true || value === false) return value;
  return value === undefined ? fallback : value === "true";
}

function stackStateToConfig(state: StackState): ProjectConfig {
  return {
    projectName: state.projectName || "my-tristack-app",
    projectDir: "/virtual",
    relativePath: "./virtual",
    language: state.language as ProjectConfig["language"],
    framework: state.framework as Framework,
    orm: state.orm as ORM,
    migrations: state.migrations as Migrations,
    database: state.database as Database,
    packageManager: state.packageManager as PackageManager,
    addons: (state.addons || []).filter((addon) => addon !== "none") as Addons[],
    git: normalizeBoolean(state.git, false),
    install: false,
  };
}
