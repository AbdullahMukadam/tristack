import { EMBEDDED_TEMPLATES, generate, type VirtualNode } from "@tristack/template-generator";
import { getFrameworksForLanguage, getRuntimeProfile, type Language } from "@tristack/types";

import { analyzeStackCompatibility } from "@/app/(home)/new/_components/utils";

import { DEFAULT_STACK, type StackState, TECH_OPTIONS } from "./constant";
import { stackStateToConfig } from "./stack-config";

const LANGUAGES = ["python", "go", "rust"] as const satisfies readonly Language[];

const DEFAULT_ADDONS = {
  python: DEFAULT_STACK.addons,
  go: ["docker", "air", "golangci-lint"],
  rust: ["docker", "cargo-watch", "clippy"],
} satisfies Record<Language, string[]>;

export type FrameworkPage = {
  id: string;
  name: string;
  description: string;
  language: Language;
  languageName: string;
  icon: string;
  svgl?: string;
  iconClassName?: string;
};

function optionName(category: keyof typeof TECH_OPTIONS, id: string) {
  return TECH_OPTIONS[category].find((option) => option.id === id)?.name ?? id;
}

export const FRAMEWORK_PAGES: FrameworkPage[] = LANGUAGES.flatMap((language) =>
  getFrameworksForLanguage(language)
    .filter((id) => id !== "none")
    .map((id) => {
      const option = TECH_OPTIONS.framework.find((candidate) => candidate.id === id);
      return {
        id,
        name: option?.name ?? id,
        description: option?.description ?? "Web framework",
        language,
        languageName: optionName("language", language),
        icon: option?.icon ?? "",
        svgl: option && "svgl" in option ? option.svgl : undefined,
        iconClassName: option && "className" in option ? option.className : undefined,
      };
    }),
);

export function getFrameworkPage(id: string) {
  return FRAMEWORK_PAGES.find((page) => page.id === id);
}

export function getFrameworkStack(page: FrameworkPage): StackState {
  const stack: StackState = {
    ...DEFAULT_STACK,
    projectName: `my-${page.id}-app`,
    language: page.language,
    framework: page.id,
    addons: DEFAULT_ADDONS[page.language],
  };
  return analyzeStackCompatibility(stack).adjustedStack ?? stack;
}

export function describeStack(stack: StackState) {
  return {
    orm: stack.orm === "none" ? null : optionName("orm", stack.orm),
    database: stack.database === "none" ? null : optionName("database", stack.database),
    migrations: stack.migrations === "none" ? null : optionName("migrations", stack.migrations),
    packageManager: optionName("packageManager", stack.packageManager),
    addons: stack.addons.filter((addon) => addon !== "none").map((id) => optionName("addons", id)),
  };
}

function treeLines(node: VirtualNode, prefix = ""): string[] {
  if (node.type === "file") return [];
  const children = [...node.children].sort((a, b) =>
    a.type === b.type ? a.name.localeCompare(b.name) : a.type === "directory" ? -1 : 1,
  );
  return children.flatMap((child, index) => {
    const last = index === children.length - 1;
    const name = child.type === "directory" ? `${child.name}/` : child.name;
    return [
      `${prefix}${last ? "└── " : "├── "}${name}`,
      ...treeLines(child, `${prefix}${last ? "    " : "│   "}`),
    ];
  });
}

export async function getFrameworkProject(stack: StackState) {
  const config = stackStateToConfig(stack);
  const result = await generate({ config, templates: EMBEDDED_TEMPLATES });
  if (result.isErr()) throw new Error(result.error.message);

  const profile = getRuntimeProfile(config);
  return {
    tree: [`${config.projectName}/`, ...treeLines(result.value.root)].join("\n"),
    fileCount: result.value.fileCount,
    steps: [profile.install, ...profile.prepare, profile.run()].map((command) => command.label),
    routes: [...new Set(profile.probes.map((probe) => `${probe.method} ${probe.path}`))],
  };
}
