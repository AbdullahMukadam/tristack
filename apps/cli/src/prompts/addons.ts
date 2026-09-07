import { getAddonsForLanguage } from "@tristack/types";

import type { Addons, Language, ProjectConfig } from "../types";
import { navigableMultiselect } from "./navigable";

const ADDON_LABELS = {
  docker: { label: "Docker", hint: "Containerize the app" },
  ruff: { label: "Ruff", hint: "Fast Python linter/formatter" },
  mypy: { label: "Mypy", hint: "Static type checking for Python" },
  pytest: { label: "Pytest", hint: "Python test framework" },
  "github-actions": { label: "GitHub Actions", hint: "CI workflow" },
  air: { label: "Air", hint: "Live reload for Go" },
  "golangci-lint": { label: "golangci-lint", hint: "Go linters aggregator" },
  "cargo-watch": { label: "cargo-watch", hint: "Watch & rebuild Rust" },
  clippy: { label: "Clippy", hint: "Rust linter" },
  fumadocs: { label: "Fumadocs", hint: "Docs site" },
  starlight: { label: "Starlight", hint: "Docs site" },
  none: { label: "None", hint: "No addons" },
} satisfies Record<Addons, { label: string; hint: string }>;

type Prettify<T> = { [P in keyof T]: T[P] } & {};

function toOption(value: Addons) {
  return {
    value,
    label: ADDON_LABELS[value].label,
    hint: ADDON_LABELS[value].hint,
  };
}

export async function getAddonsChoice(
  flag: Addons[] | undefined,
  language: Language,
  previousAnswer?: Addons[],
): Promise<Addons[] | symbol> {
  const options = getAddonsForLanguage(language)
    .filter((addon) => addon !== "none")
    .map(toOption);

  const fallback: Addons[] = ["docker"];
  const initialValues: Addons[] = flag ?? previousAnswer ?? fallback;

  return navigableMultiselect<Addons>({
    message: "Which addons do you want?",
    options,
    initialValues,
    required: false,
  }) as Promise<Addons[] | symbol>;
}

export type AddonsPromptInput = Prettify<Pick<ProjectConfig, "language">>;
