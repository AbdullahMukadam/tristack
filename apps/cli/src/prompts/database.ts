import type { Database } from "../types";
import { navigableSelect, preferValidInitial } from "./navigable";

const OPTIONS: Array<{ value: Database; label: string; hint: string }> = [
  { value: "sqlite", label: "SQLite", hint: "Zero-config, file-based" },
  { value: "postgres", label: "PostgreSQL", hint: "Robust relational database" },
  { value: "mysql", label: "MySQL", hint: "Widely used relational database" },
  { value: "none", label: "None", hint: "No database" },
];

export async function getDatabaseChoice(
  flag: Database | undefined,
  previousAnswer?: Database,
): Promise<Database | symbol> {
  const options = OPTIONS.filter((option) => option.value !== "none");
  const initialValue = preferValidInitial(options, flag ?? previousAnswer, "sqlite");
  return navigableSelect<Database>({
    message: "Which database do you want?",
    options,
    initialValue,
  });
}
