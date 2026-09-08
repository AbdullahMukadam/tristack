import type { ProjectConfig } from "@tristack/types";

import type { VirtualFileSystem } from "../core/virtual-fs";

function goRunCommand(config: ProjectConfig): string {
  return config.addons.includes("air") ? "air" : "go run .";
}

function rustRunCommand(config: ProjectConfig): string {
  return config.addons.includes("cargo-watch") ? "cargo watch -x run" : "cargo run";
}

function rustInstallCommand(config: ProjectConfig): string {
  return "cargo build";
}

function goMigrationsCommand(config: ProjectConfig): string {
  switch (config.migrations) {
    case "goose":
      return "go run github.com/pressly/goose/v3/cmd/goose@latest up";
    case "golang-migrate":
      return "go run -tags 'sqlite3' github.com/golang-migrate/migrate/v4/cmd/migrate@latest -path db/migrations -database $DATABASE_URL up";
    default:
      return "# no migrations configured";
  }
}

function runCommand(config: ProjectConfig): string {
  if (config.language === "go") {
    return goRunCommand(config);
  }
  if (config.language === "rust") {
    return rustRunCommand(config);
  }
  switch (config.packageManager) {
    case "uv":
      return "uv run fastapi dev";
    case "poetry":
      return "poetry run fastapi dev";
    default:
      return "pip install -e . && fastapi dev";
  }
}

function installCommand(config: ProjectConfig): string {
  if (config.language === "go") {
    return "go mod tidy";
  }
  if (config.language === "rust") {
    return rustInstallCommand(config);
  }
  switch (config.packageManager) {
    case "uv":
      return "uv sync";
    case "poetry":
      return "poetry install";
    default:
      return "pip install -e .";
  }
}

function migrationsCommand(config: ProjectConfig): string {
  if (config.language === "go") {
    return goMigrationsCommand(config);
  }
  if (config.language === "rust") {
    return "# no migrations configured";
  }
  if (config.database === "none") {
    return "# no database configured";
  }
  return config.migrations === "alembic"
    ? "uv run alembic upgrade head"
    : "# see your migration tooling";
}

export function processReadme(
  vfs: VirtualFileSystem,
  config: ProjectConfig,
  existing?: string,
): void {
  const existingContent = existing ?? vfs.readFile("README.md") ?? "";

  const framework = config.framework;
  const database = config.database === "none" ? "none" : config.database;
  const orm = config.orm === "none" ? "none" : config.orm;
  const migrations = config.migrations === "none" ? "none" : config.migrations;

  const content = `# ${config.projectName}

A ${config.language} backend scaffolded with [TriStack](https://tristack.dev).

## Stack

- **Framework:** ${framework}
- **ORM / DB layer:** ${orm}
- **Database:** ${database}
- **Migrations:** ${migrations}
- **Package manager:** ${config.packageManager}

## Getting Started

\`\`\`bash
# 1. Install dependencies
${installCommand(config)}

# 2. Run database migrations
${migrationsCommand(config)}

# 3. Start the dev server
${runCommand(config)}
\`\`\`

## API Docs

${config.language === "go" ? 'A `/health` endpoint is exposed and returns `{"status":"ok"}`.' : config.language === "rust" ? 'A `/health` endpoint is exposed and returns `{"status":"ok"}`.' : "When the dev server is running, interactive API docs are available at `/docs`."}

## Environment

Copy \`.env.example\` to \`.env\` and fill in the values (database URLs, etc.).
`;

  if (existingContent.includes("#") && !existingContent.includes("TriStack")) {
    vfs.writeFile("README.md", content);
  } else if (!existingContent.trim()) {
    vfs.writeFile("README.md", content);
  } else {
    vfs.writeFile("README.md", content);
  }
}
