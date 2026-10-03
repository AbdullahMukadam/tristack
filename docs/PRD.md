# TriStack — Product Requirements Document (PRD)

Status: living document. Add a new section per planned feature; keep acceptance criteria concrete enough to verify.

## 1. Problem statement

Building a backend project today means either copy-pasting boilerplate (error-prone, inconsistent) or pulling in a full-stack template that forces an entire architecture you did not choose. Developers want a way to pick exactly the stack they need and get a reproducible, minimal starter project whose dependencies are locked at install.

TriStack: a project scaffolding CLI that turns a stack selection into a reproducible starter project across **Python** (Phase 1), **Go** (Phase 2), and **Rust** (Phase 3). Built as a fork of [Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack) (MIT).

## 2. Goals

- **Roll your own stack**: users select only the parts they need — nothing extra.
- **Minimal templates**: bare-bones scaffolds with zero bloat.
- **Latest dependencies**: current, stable versions by default.
- **No lock-in**: scripts and configs stay generic; no runtime coupling to TriStack.
- **Reproducibility**: every scaffold prints the exact command that created it (`tristack.jsonc`).
- **Native-first distribution**: Python via `uvx`/pip/uv; Go and Rust via curl/PowerShell installers.

## 3. Non-goals

- TypeScript/JavaScript project generation (this is the upstream fork's domain; TriStack scaffolds backend stacks only).
- Runtime hosting, deployment platforms, or server provisioning.
- User authentication, database provisioning, or managed services.
- An npm/npx distribution channel. Packages are workspace-private; no `publishConfig`, no npm release scripts, no npm-publish CI steps.
- A full Rails/Django-style opinionated application generator beyond the chosen stack.

## 4. Personas

| Persona                  | Primary need                                          | Surface                                        |
| ------------------------ | ----------------------------------------------------- | ---------------------------------------------- |
| Python developer         | Quick, current FastAPI/Litestar/Django/Flask scaffold | `uvx tristack`, interactive prompts            |
| Go developer             | Parity scaffold with native installers                | `tristack` curl/PowerShell installer (Phase 2) |
| Rust developer           | Parity scaffold via cargo                             | `tristack` installer (Phase 3)                 |
| AI agent / CI pipeline   | Deterministic, JSON-first scaffold                    | `create-json` command, trunkate                |
| Docs / marketing visitor | Understand options, build a stack without the CLI     | tristack.space Stack Builder                   |

## 5. Functional requirements

### 5.1 CLI

- Interactive prompt flow (`@clack/prompts`) covering every stack dimension (see `docs/ARCHITECTURE.md`).
- Non-interactive `--yes` default project.
- Non-interactive flag-driven flow for CI (`--lang`, `--framework`, `--orm`, etc.).
- `create-json` command producing a reproducible JSON config for agents and pipelines.
- A reproducible "Recreate this stack" command persisted in `tristack.jsonc` at scaffold time.
- Post-scaffold verification steps: install dependencies, initialize git (opt-out flags), friendly start hint.
- Careful error handling: graceful `UserCancelledError`, typed results via `better-result` (see AGENTS.md conventions).

### 5.2 Stack dimensions (option catalog)

Per-language dimensions defined in `packages/types/src/constants.ts`:

- **Python**: frameworks `fastapi, litestar, django, flask, none`; ORMs `sqlmodel, sqlalchemy, tortoise, none`; migrations `alembic, none`; package managers `uv, poetry, pip`; addons `docker, ruff, mypy, pytest, github-actions, none`; frontends `htmx, none`.
- **Go** (Phase 2): frameworks `gin, fiber, echo, chi, stdlib, none`; ORMs `sqlc, gorm, sqlx, none`; migrations `goose, golang-migrate, none`; addons `docker, air, golangci-lint, github-actions, none`; frontends `htmx, none`.
- **Rust** (Phase 3): frameworks `axum, actix-web, rocket, warp, salvo, loco, none`; ORMs `seaorm, diesel, sqlx-rust, none`; migrations `none`; addons `docker, cargo-watch, clippy, github-actions, none`; frontends `htmx, none`.

Compatibility rules between a dimension and the Core Stack are declared in the shared type layer and enforced by CLI validation, silent prompts, and the web Stack Builder compatibility engine. Example rules: Django brings its own ORM/migrations; Tortoise has no Alembic support; Tortoise does not run under Flask; no-framework projects are bare.

### 5.3 Template generation

- Templates live in `packages/template-generator/templates` (Handlebars `.hbs`).
- Generation happens **virtually in memory first**, then is written to disk (Virtual Generation → Filesystem Scaffolding).
- Canonical generated layout per language (see `docs/template-architecture.md`).
- Procedural README generation is ORM/framework-aware (auto-create schemas vs. Alembic revision + upgrade vs. Django `manage.py migrate`).

### 5.4 Distribution

- Python: `uvx tristack`, `pipx install tristack`, `uv tool install tristack`, `pip install`.
- Go/Rust: installers at `https://tristack.space/install.sh` and `/install.ps1` (roadmap: parity per language).

### 5.5 Web

- Home page with a single-pane init rail and a centered text wordmark (no terminal/ASCII aesthetic).
- Stack Builder (`/new`): pick a stack visually, get a ready-to-run `uvx tristack` command.
- Fumadocs-based documentation at `/docs`.

## 6. Quality requirements

- Type-safe scaffolding (strict TypeScript across the repo). Generated projects are lockfile-reproducible: `pyproject.toml` declares compatible ranges, and the lockfile written at install (`uv.lock`, `poetry.lock`, `go.sum`, `Cargo.lock`) is the pin.
- Deterministic, reproducible tests (see testing tiers in `docs/CONTEXT.md` and `docs/adr/0001-use-tiered-matrix-testing-for-cli-stack-coverage.md`).
- No generated project may reference `packages/`, `templates/`, or repo-internal paths.
- Pre-existing unrelated typecheck error in `packages/template-generator/src/utils/add-deps.ts:13` acknowledged; do not expand scope to fix it unless scoped.

## 7. Acceptance criteria

- `bun run check` passes (format + lint).
- `cd apps/cli && bun test` passes (default suite).
- A fresh scaffold for each supported Core Stack installs, boots, and exposes the documented routes (`/health`, `/api/v1/items`, `/web/items` as applicable).
- `bunx next build` passes for the web app.
- Phases gate on the criteria in `docs/ROADMAP.md`.
