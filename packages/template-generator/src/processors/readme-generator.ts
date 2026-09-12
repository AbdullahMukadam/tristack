import type { ProjectConfig } from "@tristack/types";

import { toProjectSlug } from "../core/template-processor";
import type { VirtualFileSystem } from "../core/virtual-fs";

function goRunCommand(config: ProjectConfig): string {
  return config.addons.includes("air") ? "air" : "go run ./cmd/api";
}

function goMigrateTags(config: ProjectConfig): string {
  switch (config.database) {
    case "postgres":
      return "postgres";
    case "mysql":
      return "mysql";
    default:
      return "sqlite3";
  }
}

function goMigrationsCommand(config: ProjectConfig): string {
  switch (config.migrations) {
    case "goose":
      return "go run github.com/pressly/goose/v3/cmd/goose@latest -dir migrations up";
    case "golang-migrate":
      return `go run -tags '${goMigrateTags(config)}' github.com/golang-migrate/migrate/v4/cmd/migrate@latest -path db/migrations -database "$DATABASE_URL" up`;
    default:
      return "# no migrations configured";
  }
}

function bashBlock(lines: string[]): string {
  return `\`\`\`bash
${lines.join("\n")}
\`\`\``;
}

function writeGoReadme(vfs: VirtualFileSystem, config: ProjectConfig): void {
  const framework = config.framework;
  const database = config.database === "none" ? "none" : config.database;
  const orm = config.orm === "none" ? "none" : config.orm;
  const migrations = config.migrations === "none" ? "none" : config.migrations;

  const setup: string[] = [];
  setup.push("# 1. Install dependencies", "go mod tidy");
  let step = 2;
  if (config.orm === "sqlc") {
    setup.push(`# ${step}. Generate query code (sqlc)`, "sqlc generate");
    step++;
  }
  if (config.migrations !== "none") {
    setup.push(`# ${step}. Run database migrations`, goMigrationsCommand(config));
    step++;
  }
  const runLabel =
    config.orm === "gorm" && config.migrations === "none"
      ? `# ${step}. Start the dev server (gorm auto-migrates the schema on startup)`
      : `# ${step}. Start the dev server`;
  setup.push(runLabel, goRunCommand(config));

  const common: string[] = [
    "go test -race ./...                    # run all tests",
    "go vet ./...                           # static analysis",
    "gofmt -l .                             # check formatting",
  ];
  if (config.orm !== "none") {
    common.push(
      `go build -o ./bin/${toProjectSlug(config.projectName)} ./cmd/api  # compile the binary`,
    );
  }
  if (config.orm === "sqlc") {
    common.push("sqlc generate                        # regenerate query code");
  }
  if (config.addons.includes("air")) {
    common.push("air                                   # live reload dev server");
  }

  const endpoints =
    config.orm === "none"
      ? "- `GET /health` — liveness probe."
      : "- `GET /health` — liveness probe.\n- `GET /items` / `POST /items` — example resource; replace with your own models, repositories, and handlers.";

  const layout = `\`\`\`
cmd/api/             entrypoint: config -> db -> repository -> service -> handler
internal/config/     environment configuration (PORT, APP_NAME)
internal/handler/    HTTP handlers (framework-specific)
internal/service/    business logic
internal/repository/ data access per ORM
internal/model/      domain models
internal/db/         connection + connection pool
Makefile             convenience targets (build, run, test, vet, fmt, generate, migrate-up/down)
\`\`\``;

  const content = `# ${config.projectName}

A Go backend scaffolded with [TriStack](https://tristack.dev).

## Stack

- **Framework:** ${framework}
- **ORM / DB layer:** ${orm}
- **Database:** ${database}
- **Migrations:** ${migrations}
- **Package manager:** go

## Getting Started

\`\`\`bash
${setup.join("\n\n")}
\`\`\`

## Common commands

${bashBlock(common)}

## API

${endpoints}

## Project layout

${layout}

## Environment

Copy \`.env.example\` to \`.env\` and fill in the values (database URLs, etc.).
`;
  vfs.writeFile("README.md", content);
}

function writeDefaultReadme(
  vfs: VirtualFileSystem,
  config: ProjectConfig,
  existing?: string,
): void {
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

${
  config.language === "rust"
    ? config.framework === "loco"
      ? "A minimal Loco entrypoint is scaffolded. Generate a full Rails-like app with `cargo loco new`."
      : 'A `/health` endpoint is exposed and returns `{"status":"ok"}`.'
    : "When the dev server is running, interactive API docs are available at `/docs`."
}

## Environment

Copy \`.env.example\` to \`.env\` and fill in the values (database URLs, etc.).
`;
  void existing;
  vfs.writeFile("README.md", content);
}

function installCommand(config: ProjectConfig): string {
  if (config.language === "go") {
    return "go mod tidy";
  }
  if (config.language === "rust") {
    return "cargo build";
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

function runCommand(config: ProjectConfig): string {
  if (config.language === "go") {
    return goRunCommand(config);
  }
  if (config.language === "rust") {
    return config.addons.includes("cargo-watch") ? "cargo watch -x run" : "cargo run";
  }
  switch (config.packageManager) {
    case "uv":
      return config.framework === "flask"
        ? "uv run flask --app src.main run --debug"
        : "uv run uvicorn src.main:app --reload";
    case "poetry":
      return config.framework === "flask"
        ? "poetry run flask --app src.main run --debug"
        : "poetry run uvicorn src.main:app --reload";
    default:
      return config.framework === "flask"
        ? "pip install -e . && flask --app src.main run --debug"
        : "pip install -e . && uvicorn src.main:app --reload";
  }
}

export function processReadme(
  vfs: VirtualFileSystem,
  config: ProjectConfig,
  existing?: string,
): void {
  const existingContent = existing ?? vfs.readFile("README.md") ?? "";

  if (config.language === "go") {
    writeGoReadme(vfs, config);
    return;
  }
  writeDefaultReadme(vfs, config, existingContent);
}
