import { getFrontendsForLanguage } from "@tristack/types";

import type { Frontend, Language } from "../types";
import { navigableSelect, preferValidInitial } from "./navigable";

const FRONTEND_LABELS = {
  htmx: "HTMX",
  none: "None",
} satisfies Record<Frontend, string>;

function optionsFor(language: Language) {
  return getFrontendsForLanguage(language).map((value) => ({
    value,
    label: FRONTEND_LABELS[value],
  }));
}

export async function getFrontendChoice(
  flag: Frontend | undefined,
  language: Language,
  previousAnswer?: Frontend,
): Promise<Frontend | symbol> {
  const options = optionsFor(language).filter((option) => option.value !== "none");
  if (options.length === 0) {
    return "none" as Frontend;
  }
  const initialValue = preferValidInitial(
    options,
    flag ?? previousAnswer,
    options[0]?.value ?? "none",
  );
  return navigableSelect<Frontend>({
    message: "Which frontend do you want?",
    options,
    initialValue,
  });
}
