import { getOrmsForLanguage } from "@tristack/types";

import type { Language, ORM } from "../types";
import { navigableSelect, preferValidInitial } from "./navigable";

const ORM_LABELS = {
  sqlmodel: "SQLModel",
  sqlalchemy: "SQLAlchemy",
  tortoise: "Tortoise ORM",
  sqlc: "sqlc",
  gorm: "GORM",
  sqlx: "sqlx",
  seaorm: "SeaORM",
  diesel: "Diesel",
  "sqlx-rust": "sqlx",
  none: "None",
} satisfies Record<ORM, string>;

function optionsFor(language: Language) {
  return getOrmsForLanguage(language).map((value) => ({
    value,
    label: ORM_LABELS[value],
  }));
}

export async function getORMChoice(
  flag: ORM | undefined,
  language: Language,
  previousAnswer?: ORM,
): Promise<ORM | symbol> {
  const options = optionsFor(language).filter((option) => option.value !== "none");
  const initialValue = preferValidInitial(
    options,
    flag ?? previousAnswer,
    options[0]?.value ?? "none",
  );
  return navigableSelect<ORM>({
    message: "Which ORM or database layer do you want?",
    options,
    initialValue,
  });
}
