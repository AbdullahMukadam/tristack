import { DEFAULT_STACK, isStackDefault, type StackState, TECH_OPTIONS } from "@/lib/constant";
import { SITE_URL } from "@/lib/site";
import { stackUrlKeys } from "@/lib/stack-url-keys";

export const CATEGORY_ORDER: Array<keyof typeof TECH_OPTIONS> = [
  "language",
  "framework",
  "frontend",
  "orm",
  "migrations",
  "database",
  "packageManager",
  "addons",
  "git",
  "install",
];

export function formatProjectName(name: string | null | undefined) {
  return (name || "my-tristack-app").replace(/\s+/g, "-");
}

function quoteShellArgument(value: string) {
  if (/^[a-zA-Z0-9_./-]+$/.test(value)) {
    return value;
  }

  return `'${value.replaceAll("'", `'\\''`)}'`;
}

export type SelectedTech = {
  category: keyof typeof TECH_OPTIONS;
  id: string;
  name: string;
  icon: string;
  svgl?: string;
};

export function getSelectedTechs(stack: StackState): SelectedTech[] {
  const selected: SelectedTech[] = [];
  for (const category of CATEGORY_ORDER) {
    const options = TECH_OPTIONS[category];
    const value = stack[category as keyof StackState];
    if (!options || value === undefined) continue;

    const ids = Array.isArray(value) ? value : [value];
    for (const id of ids) {
      if (
        id === "none" ||
        id === "false" ||
        (["git", "install"].includes(category) && id === "true")
      ) {
        continue;
      }
      const tech = options.find((opt) => opt.id === id);
      if (tech) {
        selected.push({
          category,
          id: tech.id,
          name: tech.name,
          icon: tech.icon,
          svgl: "svgl" in tech ? tech.svgl : undefined,
        });
      }
    }
  }
  return selected;
}

export function generateStackSummary(stack: StackState) {
  const selectedTechs = CATEGORY_ORDER.flatMap((category) => {
    const options = TECH_OPTIONS[category];
    const selectedValue = stack[category as keyof StackState];

    if (!options) return [];

    const getTechNames = (value: string | string[]) => {
      const values = Array.isArray(value) ? value : [value];
      return values
        .filter(
          (id) =>
            id !== "none" &&
            id !== "false" &&
            !(["git", "install"].includes(category) && id === "true"),
        )
        .map((id) => options.find((opt) => opt.id === id)?.name)
        .filter(Boolean) as string[];
    };

    return selectedValue ? getTechNames(selectedValue) : [];
  });

  return selectedTechs.length > 0 ? selectedTechs.join(" • ") : "Custom stack";
}

export function generateStackCommand(stack: StackState) {
  // Native-first: the engine is a standalone binary. Python devs
  // run it via uvx (PyPI wrapper); Go/Rust use the standalone `tristack`
  // command from the curl/PowerShell installers.
  const base = stack.language === "go" || stack.language === "rust" ? "tristack" : "uvx tristack";
  const projectName = quoteShellArgument(stack.projectName || "my-tristack-app");

  const isStackDefaultExceptProjectName = Object.entries(DEFAULT_STACK).every(
    ([key]) =>
      key === "projectName" ||
      isStackDefault(stack, key as keyof StackState, stack[key as keyof StackState]),
  );

  if (isStackDefaultExceptProjectName) {
    return `${base} ${projectName} --yes`;
  }

  const addons = [...new Set(stack.addons)].filter(
    (addon) => addon !== "none" && TECH_OPTIONS.addons.some((option) => option.id === addon),
  );

  const flags = [
    `--language ${stack.language}`,
    `--framework ${stack.framework}`,
    `--frontend ${stack.frontend}`,
    `--orm ${stack.orm}`,
    `--migrations ${stack.migrations}`,
    `--database ${stack.database}`,
    `--package-manager ${stack.packageManager}`,
    `--addons ${addons.length > 0 ? addons.join(" ") : "none"}`,
    stack.git === "false" ? "--no-git" : "--git",
    stack.install === "false" ? "--no-install" : "--install",
  ];

  if (stack.yolo === "true") {
    flags.push("--yolo");
  }

  return `${base} ${projectName} ${flags.join(" ")}`;
}

export function formatStackCommandForDisplay(command: string) {
  return command.replaceAll(" --", ` ${"\\"}\n  --`);
}

export function generateStackUrlFromState(stack: StackState, baseUrl?: string) {
  const origin = baseUrl || SITE_URL;
  const searchString = serializeStackToSearchString(stack);
  return `${origin}/new${searchString ? `?${searchString}` : ""}`;
}

function serializeStackToSearchString(stack: StackState) {
  const stackParams = new URLSearchParams();
  Object.entries(stackUrlKeys).forEach(([stackKey, urlKey]) => {
    const value = stack[stackKey as keyof StackState];
    if (value !== undefined) {
      stackParams.set(urlKey as string, Array.isArray(value) ? value.join(",") : String(value));
    }
  });
  return stackParams.toString();
}

export function generateStackSharingUrl(stack: StackState, baseUrl?: string) {
  const origin = baseUrl || SITE_URL;
  const searchString = serializeStackToSearchString(stack);
  return `${origin}/stack${searchString ? `?${searchString}` : ""}`;
}

export function generateStackOgImageUrl(stack: StackState, baseUrl = "") {
  const searchString = serializeStackToSearchString(stack);
  return `${baseUrl}/og/stack${searchString ? `?${searchString}` : ""}`;
}
