import { getMigrationsForLanguage } from "@tristack/types";

import type { Language, Migrations } from "../types";
import { navigableSelect, preferValidInitial } from "./navigable";

const MIGRATIONS_LABELS = {
  alembic: "Alembic",
  goose: "Goose",
  "golang-migrate": "golang-migrate",
  none: "None",
} satisfies Record<Migrations, string>;

function optionsFor(language: Language) {
  return getMigrationsForLanguage(language).map((value) => ({
    value,
    label: MIGRATIONS_LABELS[value],
  }));
}

export async function getMigrationsChoice(
  flag: Migrations | undefined,
  language: Language,
  previousAnswer?: Migrations,
): Promise<Migrations | symbol> {
  const options = optionsFor(language).filter((option) => option.value !== "none");
  const initialValue = preferValidInitial(
    options,
    flag ?? previousAnswer,
    options[0]?.value ?? "none",
  );
  return navigableSelect<Migrations>({
    message: "Which migrations tool do you want?",
    options,
    initialValue,
  });
}
