import { DEFAULT_STACK, type StackState, TECH_OPTIONS } from "./constant";

const validIdsByCategory = {
  language: new Set(TECH_OPTIONS.language.map((option) => option.id)),
  framework: new Set(TECH_OPTIONS.framework.map((option) => option.id)),
  frontend: new Set(TECH_OPTIONS.frontend.map((option) => option.id)),
  orm: new Set(TECH_OPTIONS.orm.map((option) => option.id)),
  migrations: new Set(TECH_OPTIONS.migrations.map((option) => option.id)),
  database: new Set(TECH_OPTIONS.database.map((option) => option.id)),
  packageManager: new Set(TECH_OPTIONS.packageManager.map((option) => option.id)),
} as const;

const validAddonIds = new Set(["none", ...TECH_OPTIONS.addons.map((option) => option.id)]);

const validToggleIds = new Set(["true", "false"]);

function sanitizeSingleSelection(
  value: string | readonly string[] | null | undefined,
  validIds: ReadonlySet<string>,
  defaultValue: string,
): string {
  if (value === undefined || value === null) {
    return defaultValue;
  }

  const candidates = Array.isArray(value) ? value : [value];
  for (let i = candidates.length - 1; i >= 0; i--) {
    const candidate = candidates[i];
    if (candidate !== undefined && candidate !== null && validIds.has(candidate)) {
      return candidate;
    }
  }

  return defaultValue;
}

function sanitizeMultiSelection(
  values: readonly string[] | null | undefined,
  validIds: ReadonlySet<string>,
  defaultValue: readonly string[],
): string[] {
  if (values == null) {
    return [...defaultValue];
  }

  const sanitized = values.filter((value) => validIds.has(value));
  const normalized =
    sanitized.length > 1 ? sanitized.filter((value) => value !== "none") : sanitized;
  const unique = [...new Set(normalized)];

  return unique.length > 0 ? unique : ["none"];
}

export function sanitizeStackState(stack: StackState): StackState {
  return {
    ...stack,
    language: sanitizeSingleSelection(
      stack.language,
      validIdsByCategory.language,
      DEFAULT_STACK.language,
    ),
    framework: sanitizeSingleSelection(
      stack.framework,
      validIdsByCategory.framework,
      DEFAULT_STACK.framework,
    ),
    frontend: sanitizeSingleSelection(
      stack.frontend,
      validIdsByCategory.frontend,
      DEFAULT_STACK.frontend,
    ),
    orm: sanitizeSingleSelection(stack.orm, validIdsByCategory.orm, DEFAULT_STACK.orm),
    migrations: sanitizeSingleSelection(
      stack.migrations,
      validIdsByCategory.migrations,
      DEFAULT_STACK.migrations,
    ),
    database: sanitizeSingleSelection(
      stack.database,
      validIdsByCategory.database,
      DEFAULT_STACK.database,
    ),
    packageManager: sanitizeSingleSelection(
      stack.packageManager,
      validIdsByCategory.packageManager,
      DEFAULT_STACK.packageManager,
    ),
    addons: sanitizeMultiSelection(stack.addons, validAddonIds, DEFAULT_STACK.addons),
    git: sanitizeSingleSelection(stack.git, validToggleIds, DEFAULT_STACK.git),
    install: sanitizeSingleSelection(stack.install, validToggleIds, DEFAULT_STACK.install),
    yolo: sanitizeSingleSelection(stack.yolo, validToggleIds, DEFAULT_STACK.yolo),
  };
}

export function sanitizeStackAddons(stack: StackState): StackState {
  return sanitizeStackState(stack);
}
