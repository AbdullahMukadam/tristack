import type { UrlKeys } from "nuqs";

import type { StackState } from "@/lib/constant";

type StackUrlState = StackState & { viewMode: string; selectedFile: string };

export const stackUrlKeys: UrlKeys<StackUrlState> = {
  projectName: "name",
  language: "lang",
  framework: "fw",
  orm: "orm",
  migrations: "mg",
  database: "db",
  packageManager: "pm",
  addons: "add",
  git: "git",
  install: "i",
  yolo: "yolo",
  viewMode: "view",
  selectedFile: "file",
};
