import pc from "picocolors";

import type { ProjectConfig } from "../types";
import { accent, warning } from "./theme";

export type ConfigDisplayRow = { label: string; value: string };
export type ConfigDisplaySection = { title: string; rows: ConfigDisplayRow[] };

type ConfigDisplayValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | readonly ConfigDisplayValue[];

const VALUE_LABELS = {
  none: "None",
  python: "Python",
  go: "Go",
  rust: "Rust",
  fastapi: "FastAPI",
  litestar: "Litestar",
  django: "Django",
  flask: "Flask",
  gin: "Gin",
  fiber: "Fiber",
  echo: "Echo",
  chi: "Chi",
  stdlib: "Go stdlib",
  axum: "Axum",
  "actix-web": "Actix-Web",
  rocket: "Rocket",
  warp: "Warp",
  salvo: "Salvo",
  loco: "Loco",
  sqlmodel: "SQLModel",
  sqlalchemy: "SQLAlchemy",
  tortoise: "Tortoise ORM",
  htmx: "HTMX",
  sqlc: "sqlc",
  gorm: "GORM",
  sqlx: "sqlx",
  seaorm: "SeaORM",
  diesel: "Diesel",
  alembic: "Alembic",
  goose: "Goose",
  "golang-migrate": "golang-migrate",
  sqlite: "SQLite",
  postgres: "PostgreSQL",
  mysql: "MySQL",
  uv: "uv",
  poetry: "Poetry",
  pip: "pip",
  cargo: "cargo",
  docker: "Docker",
  ruff: "Ruff",
  mypy: "Mypy",
  pytest: "Pytest",
  "github-actions": "GitHub Actions",
  air: "Air",
  "golangci-lint": "golangci-lint",
  "cargo-watch": "cargo-watch",
  clippy: "Clippy",
} satisfies Record<string, string>;

function isKnownValueLabel(value: string): value is keyof typeof VALUE_LABELS {
  return Object.hasOwn(VALUE_LABELS, value);
}

export function formatConfigValue(value: ConfigDisplayValue): string {
  if (value === true) return "Yes";
  if (value === false) return "No";
  if (Array.isArray(value)) {
    return value.length > 0 ? value.map(formatConfigValue).join(", ") : "None";
  }
  const text = String(value);
  if (isKnownValueLabel(text)) return VALUE_LABELS[text];
  return text
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function section(
  title: string,
  entries: Array<[label: string, value: ConfigDisplayValue, format?: "raw"]>,
): ConfigDisplaySection | undefined {
  const rows = entries
    .filter(([, value]) => value !== undefined)
    .map(([label, value, format]) => ({
      label,
      value: format === "raw" ? String(value) : formatConfigValue(value),
    }));
  return rows.length > 0 ? { title, rows } : undefined;
}

export function getConfigSections(config: Partial<ProjectConfig>): ConfigDisplaySection[] {
  return [
    section("Project", [
      ["Name", config.projectName, "raw"],
      ["Directory", config.relativePath, "raw"],
    ]),
    section("Stack", [
      ["Language", config.language],
      ["Framework", config.framework],
      ["Frontend", config.frontend],
      ["ORM", config.orm],
      ["Migrations", config.migrations],
      ["Database", config.database],
    ]),
    section("Tooling", [
      ["Package manager", config.packageManager],
      ["Addons", config.addons],
      ["Git", config.git],
      ["Install deps", config.install],
    ]),
  ].filter((value): value is ConfigDisplaySection => value !== undefined);
}

export function displayConfig(config: Partial<ProjectConfig>): string {
  const sections = getConfigSections(config);
  if (sections.length === 0) {
    return warning("No configuration selected.");
  }
  return sections
    .map(({ title, rows }) => {
      const labelWidth = Math.max(...rows.map(({ label }) => label.length));
      const renderedRows = rows
        .map(({ label, value }) => `  ${pc.dim(label.padEnd(labelWidth))}  ${value}`)
        .join("\n");
      return `${accent(pc.bold(title))}\n${renderedRows}`;
    })
    .join("\n\n");
}
