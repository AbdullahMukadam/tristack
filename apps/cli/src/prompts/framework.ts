import { getFrameworksForLanguage } from "@tristack/types";

import type { Framework, Language } from "../types";
import { navigableSelect, preferValidInitial } from "./navigable";

const FRAMEWORK_LABELS = {
  fastapi: { label: "FastAPI", hint: "Modern, async, OpenAPI-first" },
  litestar: { label: "Litestar", hint: "Lightweight, class-based, ASGI" },
  django: { label: "Django", hint: "Batteries-included, batteries required" },
  flask: { label: "Flask", hint: "Minimal, flexible microframework" },
  gin: { label: "Gin", hint: "High-performance HTTP web framework" },
  fiber: { label: "Fiber", hint: "Express-inspired, built on fasthttp" },
  echo: { label: "Echo", hint: "High-performance, extensible" },
  chi: { label: "Chi", hint: "Lightweight, idiomatic router" },
  stdlib: { label: "Go stdlib", hint: "net/http with no framework" },
  axum: { label: "Axum", hint: "Tokio + tower, modular" },
  "actix-web": { label: "Actix-Web", hint: "Powerful, pragmatic, fast" },
  rocket: { label: "Rocket", hint: "Ergonomic, macro-driven" },
  warp: { label: "Warp", hint: "Composable filter-based" },
  salvo: { label: "Salvo", hint: "Multi-purpose web framework" },
  loco: { label: "Loco", hint: "Rails-for-Rust, batteries included" },
  none: { label: "None", hint: "No framework (bare setup)" },
} satisfies Record<Framework, { label: string; hint: string }>;

function optionsFor(language: Language) {
  return getFrameworksForLanguage(language).map((value) => ({
    value,
    label: FRAMEWORK_LABELS[value].label,
    hint: FRAMEWORK_LABELS[value].hint,
  }));
}

export async function getFrameworkChoice(
  flag: Framework | undefined,
  language: Language,
  previousAnswer?: Framework,
): Promise<Framework | symbol> {
  const options = optionsFor(language);
  const initialValue = preferValidInitial(
    options,
    flag ?? previousAnswer,
    options[0]?.value ?? "none",
  );
  return navigableSelect<Framework>({
    message: "Which framework do you want?",
    options,
    initialValue,
  });
}
