import {
  createLoader,
  createSerializer,
  parseAsArrayOf as parseAsArrayOfServer,
  parseAsStringEnum as parseAsStringEnumServer,
  parseAsString as parseAsStringServer,
  type UrlKeys,
} from "nuqs/server";

import { DEFAULT_STACK, type StackState, TECH_OPTIONS } from "@/lib/constant";
import { sanitizeStackState } from "@/lib/sanitize-stack-addons";
import { stackUrlKeys } from "@/lib/stack-url-keys";

const getValidIds = (category: keyof typeof TECH_OPTIONS): string[] => {
  return TECH_OPTIONS[category]?.map((opt) => opt.id) ?? [];
};

const serverStackParsers = {
  projectName: parseAsStringServer.withDefault(DEFAULT_STACK.projectName || "my-tristack-app"),
  language: parseAsStringEnumServer<StackState["language"]>(getValidIds("language")).withDefault(
    DEFAULT_STACK.language,
  ),
  framework: parseAsStringEnumServer<StackState["framework"]>(getValidIds("framework")).withDefault(
    DEFAULT_STACK.framework,
  ),
  frontend: parseAsStringEnumServer<StackState["frontend"]>(getValidIds("frontend")).withDefault(
    DEFAULT_STACK.frontend,
  ),
  orm: parseAsStringEnumServer<StackState["orm"]>(getValidIds("orm")).withDefault(
    DEFAULT_STACK.orm,
  ),
  migrations: parseAsStringEnumServer<StackState["migrations"]>(
    getValidIds("migrations"),
  ).withDefault(DEFAULT_STACK.migrations),
  database: parseAsStringEnumServer<StackState["database"]>(getValidIds("database")).withDefault(
    DEFAULT_STACK.database,
  ),
  packageManager: parseAsStringEnumServer<StackState["packageManager"]>(
    getValidIds("packageManager"),
  ).withDefault(DEFAULT_STACK.packageManager),
  addons: parseAsArrayOfServer(parseAsStringServer).withDefault(DEFAULT_STACK.addons),
  git: parseAsStringEnumServer<StackState["git"]>(["true", "false"]).withDefault(DEFAULT_STACK.git),
  install: parseAsStringEnumServer<StackState["install"]>(["true", "false"]).withDefault(
    DEFAULT_STACK.install,
  ),
  yolo: parseAsStringEnumServer<StackState["yolo"]>(["true", "false"]).withDefault(
    DEFAULT_STACK.yolo,
  ),
};

const rawLoadStackParams = createLoader(serverStackParsers, {
  urlKeys: stackUrlKeys as UrlKeys<typeof serverStackParsers>,
});

export const serializeStackParams = createSerializer(serverStackParsers, {
  urlKeys: stackUrlKeys as UrlKeys<typeof serverStackParsers>,
});

export async function loadStackParams(
  searchParams: Parameters<typeof rawLoadStackParams>[0],
): Promise<StackState> {
  const stackState = await rawLoadStackParams(searchParams);
  return sanitizeStackState(stackState);
}

export type LoadedStackState = Awaited<ReturnType<typeof loadStackParams>>;
