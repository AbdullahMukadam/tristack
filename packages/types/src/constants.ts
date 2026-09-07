import type { Language, Framework, ORM, Migrations, PackageManager, Addons } from "./types";

export const PYTHON_FRAMEWORKS: readonly Framework[] = [
  "fastapi",
  "litestar",
  "django",
  "flask",
] as const;

export const GO_FRAMEWORKS: readonly Framework[] = [
  "gin",
  "fiber",
  "echo",
  "chi",
  "stdlib",
] as const;

export const RUST_FRAMEWORKS: readonly Framework[] = [
  "axum",
  "actix-web",
  "rocket",
  "warp",
  "salvo",
  "loco",
] as const;

export const PYTHON_ORMS: readonly ORM[] = ["sqlmodel", "sqlalchemy", "tortoise", "none"] as const;
export const GO_ORMS: readonly ORM[] = ["sqlc", "gorm", "sqlx", "none"] as const;
export const RUST_ORMS: readonly ORM[] = ["seaorm", "diesel", "sqlx-rust", "none"] as const;

export const PYTHON_MIGRATIONS: readonly Migrations[] = ["alembic", "none"] as const;
export const GO_MIGRATIONS: readonly Migrations[] = ["goose", "golang-migrate", "none"] as const;
export const RUST_MIGRATIONS: readonly Migrations[] = ["none"] as const;

export const PYTHON_PACKAGE_MANAGERS: readonly PackageManager[] = ["uv", "poetry", "pip"] as const;
export const GO_PACKAGE_MANAGERS: readonly PackageManager[] = ["go"] as const;
export const RUST_PACKAGE_MANAGERS: readonly PackageManager[] = ["cargo"] as const;

export const PYTHON_ADDONS: readonly Addons[] = [
  "docker",
  "ruff",
  "mypy",
  "pytest",
  "github-actions",
  "fumadocs",
  "starlight",
  "none",
] as const;

export const GO_ADDONS: readonly Addons[] = [
  "docker",
  "air",
  "golangci-lint",
  "github-actions",
  "fumadocs",
  "starlight",
  "none",
] as const;

export const RUST_ADDONS: readonly Addons[] = [
  "docker",
  "cargo-watch",
  "clippy",
  "github-actions",
  "fumadocs",
  "starlight",
  "none",
] as const;

export function getFrameworksForLanguage(language: Language): readonly Framework[] {
  switch (language) {
    case "python":
      return PYTHON_FRAMEWORKS;
    case "go":
      return GO_FRAMEWORKS;
    case "rust":
      return RUST_FRAMEWORKS;
  }
}

export function getOrmsForLanguage(language: Language): readonly ORM[] {
  switch (language) {
    case "python":
      return PYTHON_ORMS;
    case "go":
      return GO_ORMS;
    case "rust":
      return RUST_ORMS;
  }
}

export function getMigrationsForLanguage(language: Language): readonly Migrations[] {
  switch (language) {
    case "python":
      return PYTHON_MIGRATIONS;
    case "go":
      return GO_MIGRATIONS;
    case "rust":
      return RUST_MIGRATIONS;
  }
}

export function getAddonsForLanguage(language: Language): readonly Addons[] {
  switch (language) {
    case "python":
      return PYTHON_ADDONS;
    case "go":
      return GO_ADDONS;
    case "rust":
      return RUST_ADDONS;
  }
}
