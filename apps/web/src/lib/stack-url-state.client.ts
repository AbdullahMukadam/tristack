"use client";
import { parseAsArrayOf, parseAsString, parseAsStringEnum, useQueryStates } from "nuqs";
import { useCallback, useMemo } from "react";

import { DEFAULT_STACK, type StackState, TECH_OPTIONS } from "@/lib/constant";

import { sanitizeStackState } from "./sanitize-stack-addons";
import { stackUrlKeys } from "./stack-url-keys";

const getValidIds = (category: keyof typeof TECH_OPTIONS): string[] => {
  return TECH_OPTIONS[category]?.map((opt) => opt.id) ?? [];
};

export const stackParsers = {
  projectName: parseAsString.withDefault(DEFAULT_STACK.projectName ?? "my-tristack-app"),
  language: parseAsStringEnum<StackState["language"]>(getValidIds("language")).withDefault(
    DEFAULT_STACK.language,
  ),
  framework: parseAsStringEnum<StackState["framework"]>(getValidIds("framework")).withDefault(
    DEFAULT_STACK.framework,
  ),
  orm: parseAsStringEnum<StackState["orm"]>(getValidIds("orm")).withDefault(DEFAULT_STACK.orm),
  migrations: parseAsStringEnum<StackState["migrations"]>(getValidIds("migrations")).withDefault(
    DEFAULT_STACK.migrations,
  ),
  database: parseAsStringEnum<StackState["database"]>(getValidIds("database")).withDefault(
    DEFAULT_STACK.database,
  ),
  packageManager: parseAsStringEnum<StackState["packageManager"]>(
    getValidIds("packageManager"),
  ).withDefault(DEFAULT_STACK.packageManager),
  addons: parseAsArrayOf(parseAsString).withDefault(DEFAULT_STACK.addons),
  git: parseAsStringEnum<StackState["git"]>(["true", "false"]).withDefault(DEFAULT_STACK.git),
  install: parseAsStringEnum<StackState["install"]>(["true", "false"]).withDefault(
    DEFAULT_STACK.install,
  ),
  yolo: parseAsStringEnum<StackState["yolo"]>(["true", "false"]).withDefault(DEFAULT_STACK.yolo),
  viewMode: parseAsStringEnum<"command" | "preview">(["command", "preview"]).withDefault("command"),
  selectedFile: parseAsString.withDefault(""),
};

export const stackQueryStatesOptions = {
  history: "replace" as const,
  // The stack builder state is fully client-driven on /new, so URL updates
  // should stay shallow instead of forcing a server navigation.
  shallow: true,
  urlKeys: stackUrlKeys,
  clearOnDefault: true,
};

function getStackFromQueryState(queryState: StackState): StackState {
  return sanitizeStackState({
    projectName: queryState.projectName,
    language: queryState.language,
    framework: queryState.framework,
    orm: queryState.orm,
    migrations: queryState.migrations,
    database: queryState.database,
    packageManager: queryState.packageManager,
    addons: queryState.addons,
    git: queryState.git,
    install: queryState.install,
    yolo: queryState.yolo,
  });
}

export function useStackState() {
  const [queryState, setQueryState] = useQueryStates(stackParsers, stackQueryStatesOptions);

  const stack = useMemo(() => getStackFromQueryState(queryState), [queryState]);

  const viewMode = queryState.viewMode;
  const selectedFile = queryState.selectedFile;

  const updateStack = useCallback(
    async (updates: Partial<StackState> | ((prev: StackState) => Partial<StackState>)) => {
      await setQueryState((currentQueryState) => {
        const currentStack = getStackFromQueryState(currentQueryState);
        const newStack = updates instanceof Function ? updates(currentStack) : updates;
        const finalStack = sanitizeStackState({ ...currentStack, ...newStack });

        return finalStack;
      });
    },
    [setQueryState],
  );

  const setViewMode = useCallback(
    async (mode: "command" | "preview") => {
      await setQueryState({ viewMode: mode });
    },
    [setQueryState],
  );

  const setSelectedFile = useCallback(
    async (filePath: string | null) => {
      await setQueryState({ selectedFile: filePath || "" });
    },
    [setQueryState],
  );

  return [stack, updateStack, viewMode, setViewMode, selectedFile, setSelectedFile] as const;
}
