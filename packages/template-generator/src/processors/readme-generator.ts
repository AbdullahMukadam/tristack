import type { Language, ProjectConfig } from "@tristack/types";
import { getRuntimeProfile } from "@tristack/types";

import { toProjectSlug } from "../core/template-processor";
import type { VirtualFileSystem } from "../core/virtual-fs";

function goRunCommand(config: ProjectConfig): string {
  return getRuntimeProfile(config).run().label;
}

function goSqlcGenerateCommand(): string {
  return "go run github.com/sqlc-dev/sqlc/cmd/sqlc@v1.27.0 generate";
}

function goMigrationsCommand(config: ProjectConfig): string {
  const migrate = getRuntimeProfile(config).prepare.find(
    (cmd) => cmd.label.includes("goose") || cmd.label.includes("golang-migrate"),
  );
  if (!migrate) return "# no migrations configured";
  const relevant = Object.entries(migrate.env ?? {}).filter(
    ([key]) => !key.startsWith("CGO_") && !key.startsWith("GOFLAGS"),
  );
  const envPrefix = relevant.map(([key, value]) => `${key}='${value}'`).join(" ");
  return envPrefix ? `${envPrefix} ${migrate.label}` : migrate.label;
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
    setup.push(`# ${step}. Generate query code (sqlc)`, goSqlcGenerateCommand());
    step++;
  }
  if (config.migrations !== "none") {
    setup.push(`# ${step}. Run database migrations`, goMigrationsCommand(config));
    step++;
  }
  const runLabel =
    config.framework === "none"
      ? `# ${step}. Run the entrypoint`
      : config.orm === "gorm" && config.migrations === "none"
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
    common.push(`${goSqlcGenerateCommand()}  # regenerate query code`);
  }
  if (config.addons.includes("air")) {
    common.push("air                                   # live reload dev server");
  }

  const endpoints =
    config.framework === "none"
      ? "- `cmd/api` — bare entrypoint; add your own logic."
      : config.orm === "none"
        ? "- `GET /health` — liveness probe."
        : "- `GET /health` — liveness probe.\n- `GET /api/v1/items` / `POST /api/v1/items` — example resource; replace with your own models, repositories, and handlers.";

  const layout =
    config.framework === "none"
      ? `\`\`\`
cmd/api/             entrypoint
internal/config/     environment configuration (APP_NAME, PORT)
Makefile             convenience targets (build, run, test, vet, fmt)
\`\`\``
      : `\`\`\`
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

A Go project scaffolded with [TriStack](https://tristack.space).

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

Defaults are baked in, so the app runs with no setup. Override them with environment variables:

- \`PORT\` — HTTP port (default \`3000\`)
- \`APP_NAME\` — application name
- \`DATABASE_URL\` — database DSN; see \`env.example\` for per-database values

For a local \`.env\`, load it into your shell before running (Go does not read \`.env\` on its own):

\`\`\`bash
# macOS / Linux
set -a && . ./env.example && set +a

# Windows PowerShell
Get-Content ./env.example | Where-Object { $_ -match '=' -and $_ -notmatch '^\\s*#' } | ForEach-Object { $n, $v = $_ -split '=', 2; Set-Item -Path "env:$n" -Value $v }
\`\`\`
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
  const isBare = config.framework === "none";

  const steps: string[] = ["# 1. Install dependencies", installCommand(config)];
  if (runCommand(config).startsWith("cargo watch")) {
    steps.push("cargo install cargo-watch");
  }
  if (isBare) {
    if (config.language === "python") {
      steps.push("# 2. Run the sample script", bareRunCommand(config));
    }
  } else {
    const migrationSteps = migrationsSteps(config);
    if (migrationSteps.length > 0) {
      steps.push(`# 2. ${migrationSteps[0]}`, ...migrationSteps.slice(1));
    }
    steps.push(`# ${migrationSteps.length > 0 ? 3 : 2}. Start the dev server`, runCommand(config));
  }
  if (config.language === "rust" && config.addons.includes("clippy")) {
    steps.push("# Lint", "cargo clippy --all-targets -- -D warnings");
  }

  const apiDocs = isBare
    ? "Bare project — no API scaffolded yet. Start building under `src/`."
    : config.language === "rust"
      ? rustApiDocs(config)
      : "When the dev server is running, interactive API docs are available at `/docs`.";

  const webDocs = {
    python: `\n## Web\n\nThe app server-renders an HTMX frontend alongside the API:\n\n- \`/\` — home page (loads an HTML fragment over htmx)\n- \`/web/items\` — items fragment (the canonical example; only present when an ORM is configured)\n- \`/api/v1/items\` — the JSON API, unchanged\n`,
    go: `\n## Web\n\nThe app server-renders an HTMX frontend alongside the API:\n\n- \`/\` — home page (loads an HTML fragment over htmx)\n- \`/web/items\` — items fragment (the canonical example; only present when an ORM is configured)\n- \`/health\` and the JSON API routes, unchanged\n`,
    rust: `\n## Web\n\nThe app server-renders an HTMX frontend alongside the API:\n\n- \`/\` — home page (loads an HTML fragment over htmx)\n- \`/web/now\` — server-time fragment\n${config.orm !== "none" ? "- `/web/items` — items fragment (the canonical example)\n" : ""}`,
  } satisfies Partial<Record<Language, string>>;

  const content = `# ${config.projectName}

A ${config.language} project scaffolded with [TriStack](https://tristack.space).

## Stack

- **Framework:** ${framework}
- **ORM / DB layer:** ${orm}
- **Database:** ${database}
- **Migrations:** ${migrations}
- **Package manager:** ${config.packageManager}
${config.frontend !== "none" ? `- **Frontend:** ${config.frontend}` : ""}

## Getting Started

\`\`\`bash
${steps.join("\n\n")}
\`\`\`

## API Docs

${apiDocs}
${config.frontend !== "none" ? (webDocs[config.language] ?? "") : ""}## Environment

${
  config.framework === "django"
    ? "Settings read environment variables directly; `.env` is not loaded. `manage.py` uses `config.settings.development`, which needs none. `wsgi.py` and `asgi.py` (gunicorn, Docker) use `config.settings.production`, which requires `DJANGO_SECRET_KEY` and reads `ALLOWED_HOSTS`, `CORS_ALLOWED_ORIGINS`, and the `DB_*` variables listed in `env.example`."
    : "Copy `env.example` to `.env`; it is read automatically on startup."
}
`;
  void existing;
  vfs.writeFile("README.md", content);
}

function rustApiDocs(config: ProjectConfig): string {
  const health = '- `GET /health` returns `{"status":"ok"}`.';
  if (config.orm === "none") return health;
  return `${health}
- \`GET /api/v1/items\` lists items, newest first.
- \`POST /api/v1/items\` with \`{"name": "..."}\` creates one (201), or returns 400 with \`{"error": "..."}\`.

The \`items\` table is created on startup if it doesn't exist.`;
}

function installCommand(config: ProjectConfig): string {
  return getRuntimeProfile(config).install.label;
}

function bareRunCommand(config: ProjectConfig): string {
  return getRuntimeProfile(config).run().label;
}

function migrationsSteps(config: ProjectConfig): string[] {
  if (config.language === "go") {
    return ["Run database migrations", goMigrationsCommand(config)];
  }
  if (config.language === "rust") {
    return [];
  }
  if (config.database === "none") {
    return [];
  }
  const profile = getRuntimeProfile(config);
  if (config.framework === "django") {
    return [
      "Run database migrations",
      profile.prepare[0]?.label ?? `${pyRunPrefix(config)}python manage.py migrate`,
    ];
  }
  if (config.migrations === "alembic") {
    return [
      "Create and run a database migration",
      profile.prepare[0]?.label ??
        `${pyRunPrefix(config)}alembic revision --autogenerate -m "initial"`,
      profile.prepare[1]?.label ?? `${pyRunPrefix(config)}alembic upgrade head`,
    ];
  }
  if (config.orm === "tortoise") {
    return ["The Tortoise ORM auto-creates the schema on startup (src/db.py init_db)."];
  }
  if (config.orm === "sqlmodel" || config.orm === "sqlalchemy") {
    return ["The SQLAlchemy metadata auto-creates the schema on startup via create_all."];
  }
  return [];
}

function pyRunPrefix(config: ProjectConfig): string {
  switch (config.packageManager) {
    case "uv":
      return "uv run ";
    case "poetry":
      return "poetry run ";
    default:
      return "";
  }
}

function runCommand(config: ProjectConfig): string {
  return getRuntimeProfile(config).run({ dev: true }).label;
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
