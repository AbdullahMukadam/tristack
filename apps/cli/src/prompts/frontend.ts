import { getFrontendsForLanguage } from "@tristack/types";

import type { Frontend, Language } from "../types";
import { navigableSelect, preferValidInitial } from "./navigable";

const FRONTEND_LABELS = {
  htmx: "HTMX",
  none: "None",
} satisfies Record<Frontend, string>;

const FRONTEND_PROMPT_LANGUAGES: readonly Language[] = ["python", "rust"];

export function getFrontendOptions(language: Language) {
  const options = getFrontendsForLanguage(language).map((value) => ({
    value,
    label: FRONTEND_LABELS[value],
  }));
  return language === "rust" ? options : options.filter((option) => option.value !== "none");
}

export function shouldPromptFrontend(language: Language, framework: string | undefined) {
  return framework !== "none" && FRONTEND_PROMPT_LANGUAGES.includes(language);
}

export async function getFrontendChoice(
  flag: Frontend | undefined,
  language: Language,
  previousAnswer?: Frontend,
): Promise<Frontend | symbol> {
  const options = getFrontendOptions(language);
  if (options.length === 0) {
    return "none" as Frontend;
  }
  const fallback = language === "rust" ? "none" : (options[0]?.value ?? "none");
  const initialValue = preferValidInitial(options, flag ?? previousAnswer, fallback);
  return navigableSelect<Frontend>({
    message: "Which frontend do you want?",
    options,
    initialValue,
  });
}
