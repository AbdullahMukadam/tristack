import {
  getAddonsForLanguage,
  getFrameworksForLanguage,
  getMigrationsForLanguage,
  getOrmsForLanguage,
} from "@tristack/types";

import type { StackState } from "@/lib/constant";
import { TECH_OPTIONS } from "@/lib/constant";

export function validateProjectName(name: string): string | undefined {
  const INVALID_CHARS = ["<", ">", ":", '"', "|", "?", "*"];
  const MAX_LENGTH = 255;

  if (name === ".") return undefined;

  if (!name) return "Project name cannot be empty";
  if (name.length > MAX_LENGTH) {
    return `Project name must be less than ${MAX_LENGTH} characters`;
  }
  if (INVALID_CHARS.some((char) => name.includes(char))) {
    return "Project name contains invalid characters";
  }
  if (name.startsWith(".") || name.startsWith("-")) {
    return "Project name cannot start with a dot or dash";
  }
  if (name.toLowerCase() === "node_modules" || name.toLowerCase() === "favicon.ico") {
    return "Project name is reserved";
  }
  return undefined;
}

export const getCategoryDisplayName = (categoryKey: string): string => {
  const result = categoryKey.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};

interface CompatibilityResult {
  adjustedStack: StackState | null;
  notes: Record<string, { notes: string[]; hasIssue: boolean }>;
  changes: Array<{ category: string; message: string }>;
}

export function getValidIdsForLanguage(
  language: string,
  category: keyof typeof TECH_OPTIONS,
): string[] {
  const all = TECH_OPTIONS[category].map((option) => option.id);
  switch (category) {
    case "framework":
      return [...getFrameworksForLanguage(language as "python" | "go" | "rust")];
    case "orm":
      return [...getOrmsForLanguage(language as "python" | "go" | "rust")];
    case "migrations":
      return [...getMigrationsForLanguage(language as "python" | "go" | "rust")];
    case "packageManager":
      if (language === "go") return ["go"];
      if (language === "rust") return ["cargo"];
      if (language === "python") return ["uv", "poetry", "pip"];
      return all;
    case "addons":
      return [...getAddonsForLanguage(language as "python" | "go" | "rust")];
    default:
      return all;
  }
}

/**
 * Returns the option list for a category filtered to the currently selected
 * language, so only the selected language's choices are shown.
 * `git`/`install`/`database`/`language` are language-agnostic and unchanged.
 */
export function getOptionsForStack(stack: StackState, category: keyof typeof TECH_OPTIONS) {
  if (
    category === "language" ||
    category === "database" ||
    category === "git" ||
    category === "install"
  ) {
    return TECH_OPTIONS[category];
  }
  const validIds = getValidIdsForLanguage(stack.language, category);
  const byId = new Map(TECH_OPTIONS[category].map((option) => [option.id, option]));
  return validIds
    .map((id) => byId.get(id))
    .filter((option): option is NonNullable<typeof option> => option !== undefined);
}

/**
 * Analyzes the stack and auto-adjusts incompatible selections.
 * The TriStack CLI validates options per language only. When the language
 * changes, any framework/orm/migration/package-manager/addon that isn't valid
 * for the new language is reset to a language-valid default.
 */
export const analyzeStackCompatibility = (stack: StackState): CompatibilityResult => {
  const notes: Record<string, { notes: string[]; hasIssue: boolean }> = {};
  const changes: Array<{ category: string; message: string }> = [];
  const adjustedStack: StackState = { ...stack };

  const categoryDefaults = {
    framework: stack.language === "go" ? "gin" : stack.language === "rust" ? "axum" : "fastapi",
    orm: stack.language === "go" ? "sqlc" : stack.language === "rust" ? "seaorm" : "sqlmodel",
    migrations: stack.language === "go" ? "goose" : stack.language === "rust" ? "none" : "alembic",
    packageManager: stack.language === "go" ? "go" : stack.language === "rust" ? "cargo" : "uv",
  } satisfies Record<"framework" | "orm" | "migrations" | "packageManager", string>;

  const categories = ["framework", "orm", "migrations", "packageManager"] as const;
  for (const category of categories) {
    const value = stack[category];
    if (!value) continue;
    const validIds = getValidIdsForLanguage(stack.language, category);
    if (!validIds.includes(value)) {
      const fallback = categoryDefaults[category];
      adjustedStack[category] = fallback;
      changes.push({
        category,
        message: `${category} isn't available for ${stack.language}, switched to ${fallback}.`,
      });
      notes[category] = {
        hasIssue: true,
        notes: [`${value} isn't available for ${stack.language}.`],
      };
    }
  }

  const validAddons = getValidIdsForLanguage(stack.language, "addons");
  const keptAddons = (stack.addons || []).filter(
    (addon) => addon === "none" || validAddons.includes(addon),
  );
  if (keptAddons.length !== (stack.addons || []).length) {
    adjustedStack.addons = keptAddons.length > 0 ? keptAddons : ["none"];
    changes.push({
      category: "addons",
      message: `Some addons aren't available for ${stack.language} and were removed.`,
    });
  }

  if (adjustedStack.framework === "django") {
    if (adjustedStack.orm !== "none") {
      adjustedStack.orm = "none";
      changes.push({
        category: "orm",
        message: "Django brings its own ORM — switched to none.",
      });
    }
    if (adjustedStack.migrations !== "none") {
      adjustedStack.migrations = "none";
      changes.push({
        category: "migrations",
        message: "Django brings its own migration system — switched to none.",
      });
    }
  }

  if (adjustedStack.orm === "tortoise" && adjustedStack.migrations !== "none") {
    adjustedStack.migrations = "none";
    changes.push({
      category: "migrations",
      message: "Tortoise ORM has no Alembic support — switched to none.",
    });
  }

  const hasChanges = changes.length > 0;
  return {
    adjustedStack: hasChanges ? adjustedStack : null,
    notes: hasChanges ? notes : {},
    changes,
  };
};

/**
 * Returns a reason why an option is disabled, or null if it's enabled.
 * Options are disabled when they aren't valid for the currently selected
 * language.
 */
export const getDisabledReason = (
  currentStack: StackState,
  category: keyof typeof TECH_OPTIONS,
  optionId: string,
): string | null => {
  const validIds = getValidIdsForLanguage(currentStack.language, category);
  if (!validIds.includes(optionId)) {
    return `Not available for ${currentStack.language}.`;
  }
  return null;
};

export const isOptionCompatible = (
  currentStack: StackState,
  category: keyof typeof TECH_OPTIONS,
  optionId: string,
): boolean => {
  if (currentStack.yolo === "true") {
    return true;
  }
  return getDisabledReason(currentStack, category, optionId) === null;
};
