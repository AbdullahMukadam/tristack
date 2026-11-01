import { generate, EMBEDDED_TEMPLATES, type VirtualNode } from "@tristack/template-generator";
import { NextResponse } from "next/server";

import type { StackState } from "@/lib/constant";
import { sanitizeStackState } from "@/lib/sanitize-stack-addons";
import { stackStateToConfig } from "@/lib/stack-config";

export async function POST(request: Request) {
  try {
    const body = sanitizeStackState((await request.json()) as StackState);

    const config = stackStateToConfig(body); // Convert StackState from web to CLI options format

    const result = await generate({
      // Generate project to virtual filesystem using Result-based API
      config,
      templates: EMBEDDED_TEMPLATES,
    });

    if (result.isErr()) {
      // Handle Result type
      throw new Error(result.error.message);
    }

    const tree = result.value;

    const transformedRoot = transformTree(tree.root); // Transform VirtualFileTree to web's expected format

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
