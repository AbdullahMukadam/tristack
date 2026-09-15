import type { Language } from "../types";
import { navigableSelect, preferValidInitial } from "./navigable";

const OPTIONS: Array<{ value: Language; label: string; hint: string }> = [
  { value: "python", label: "Python", hint: "FastAPI, Django, Flask, Litestar" },
  { value: "go", label: "Go", hint: "Gin, Fiber, Echo, Chi, stdlib" },
  { value: "rust", label: "Rust", hint: "Axum, Actix-Web, Rocket, Warp" },
];

export async function getLanguageChoice(
  flag: Language | undefined,
  previousAnswer?: Language,
): Promise<Language | symbol> {
  const options = OPTIONS;
  const initialValue = preferValidInitial(options, flag ?? previousAnswer, "python");
  return navigableSelect<Language>({
    message: "Which language do you want?",
    options,
    initialValue,
  });
}
