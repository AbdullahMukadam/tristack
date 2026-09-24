# TriStack CLI

A modern CLI for scaffolding backend projects across **Python, Go, and Rust** — roll your own stack.

> Built as a fork of [Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack) (MIT licensed). The prompt UX framework, virtual file-system template engine, and Stack Builder web UI are adapted from the original project, extended to scaffold Python, Go, and Rust backend stacks.

## Quick Start

Python (run on demand via uvx):

```bash
uvx tristack my-api
```

Or install it as a tool:

```bash
# pip / pipx
pipx install tristack

# or via uv
uv tool install tristack
```

Then:

```bash
tristack my-api
```

Non-interactive default project:

```bash
uvx tristack my-api --yes
```

Go and Rust developers run the same `tristack` binary. The native installers are on the roadmap:

```bash
# Windows (PowerShell)
irm https://tristack.space/install.ps1 | iex

# macOS / Linux
curl -fsSL https://tristack.space/install.sh | bash
```

## Requirements

- Python 3.12+ is required for generated Python projects; the CLI checks the exact stack before writing files.
- Go and Rust toolchains are required to run the generated Go and Rust projects (not to run the CLI itself).
- Rust is required only when building the binary from source.

## Usage

```bash
Usage: uvx tristack [project-directory] [options]

Options:
  -y, --yes                       Use default configuration (skips prompts)
  --dry-run                       Validate configuration without writing files
  --verbose                       Show detailed result information as JSON
  --yolo                          Bypass validations and compatibility checks
  --language <lang>               python (default), go, rust
  --framework <framework>         python: fastapi (default), litestar, django, flask · go: gin, fiber, echo, chi, stdlib · rust: axum, actix-web, rocket, warp, salvo, loco
  --orm <orm>                     python: sqlmodel (default), sqlalchemy, tortoise, none · go: sqlc, gorm, sqlx, none · rust: seaorm, diesel, sqlx, none
  --migrations <tool>             python: alembic (default), none · go: goose, golang-migrate, none · rust: none
  --database <db>                 sqlite (default), postgres, mysql, none
  --package-manager <pm>          python: uv (default), poetry, pip · go: go · rust: cargo
  --addons [values...]            Space-separated addons, or repeat the flag; none disables
  --git / --no-git                Initialize a Git repository (default on)
  --install / --no-install        Install dependencies after creation (default on)
  --directory-conflict <strategy> merge, overwrite, increment, error
  --disable-analytics             Disable analytics (no telemetry is transmitted today)
  -h, --help                      Display help
```

## Agent-Focused Commands

```bash
# Raw JSON payload input (agent-friendly)
uvx tristack create-json --input '{"projectName":"my-api","language":"python","framework":"fastapi","orm":"sqlmodel","migrations":"alembic","database":"postgres","packageManager":"uv","addons":["docker","pytest"],"git":true,"install":false}'

# Dry-run validation
uvx tristack create-json --input '{"projectName":"my-api","dryRun":true}'
```

The payload is validated against `CreateInputSchema` — the same schema that backs `--yes`. See the [Agent Workflows](https://tristack.space/docs/cli/agent-workflows) docs for details.

## Examples

```bash
# Build a fully specified stack
uvx tristack my-api \
  --language python \
  --framework fastapi \
  --orm sqlmodel \
  --migrations alembic \
  --database postgres \
  --package-manager uv \
  --addons docker ruff pytest github-actions

# Validate without writing files
uvx tristack my-api --yes --dry-run
```

## Telemetry & Privacy

The CLI does not currently transmit telemetry; `--disable-analytics` (or the `DO_NOT_TRACK=1` convention) is reserved for if it ever does. No project names, paths, file contents, or secrets are ever collected. See the [Privacy Policy](https://tristack.space/privacy) for details.

## License & Attribution

TriStack CLI is released under the [MIT License](../../LICENSE). Fork of [Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack) (MIT licensed), extended to scaffold Python, Go, and Rust backend stacks.
