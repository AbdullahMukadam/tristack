# TriStack

A modern CLI for scaffolding backend projects across **Python, Go, and Rust** — roll your own stack.

The CLI scaffolds **Python** (FastAPI, Litestar, Django, Flask), **Go** (Gin, Fiber, Echo, Chi, stdlib), and **Rust** (Axum, Actix-Web, Rocket, Warp) backends. Python is fully shipped (Phase 1); Go (Phase 2) and Rust (Phase 3) scaffolds are available in the same CLI, with installers and full parity on the roadmap.

> **Built as a fork of [Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack) (MIT licensed)** — the prompt UX framework, virtual file-system template engine, and Stack Builder web UI are adapted from the original project, extended to scaffold Python, Go, and Rust backend stacks instead of TypeScript/JavaScript.

<br />

## Philosophy

- **Roll your own stack**: you pick only the parts you need, nothing extra.
- **Minimal templates**: bare-bones scaffolds with zero bloat.
- **Latest dependencies**: always use current, stable versions by default.
- **Native-first distribution**: Python devs use `uvx tristack`; Go and Rust get their own installers and Homebrew (on the roadmap).
- **Free and open source**: forever, under the MIT License.

## Quick Start

```bash
# Python (Phase 1)
uvx tristack my-api
```

Or install it as a tool:

```bash
# pip / pipx
pipx install tristack
tristack my-api

# or via uv
uv tool install tristack
tristack my-api
```

Non-interactive default project:

```bash
uvx tristack my-api --yes
```

Go and Rust developers use the same `tristack` binary; curl/PowerShell installers and Homebrew are on the roadmap.

## Features

- **Languages**: Python — FastAPI, Litestar, Django, Flask. Go — Gin, Fiber, Echo, Chi, stdlib. Rust — Axum, Actix-Web, Rocket, Warp.
- **ORM**: Python: SQLModel (default), SQLAlchemy, Tortoise, or none · Go: GORM, SQLC, SQLx, or none · Rust: SeaORM, Diesel, SQLx, or none
- **Migrations**: Python: Alembic (default) or none · Go: Goose, golang-migrate, or none · Rust: none
- **Databases**: SQLite (default), PostgreSQL, MySQL, or none
- **Package managers**: Python: uv (default), poetry, or pip · Go: go · Rust: cargo
- **Addons**: Docker, Ruff, Pytest, GitHub Actions, and more
- **Agent automation**: JSON-first `create-json` command and a programmatic API

Type-safe, dependency-pinned scaffolding with no lock-in: you choose only what you need.

## Visual Stack Builder

Use the [Stack Builder](https://tristack.dev/new) to pick a language, framework, ORM, migrations, database, package manager, and addons — then copy the ready-to-run `uvx tristack` command for your exact stack.

## Documentation

Visit [tristack.dev](https://tristack.dev) for full documentation, guides, and examples.

## Repository Structure

This repository is organized as a monorepo containing:

- **CLI**: [`apps/cli`](apps/cli) — the scaffolding CLI tool
- **Documentation**: [`apps/web`](apps/web) — official website and documentation
- **Python package**: [`packages/tristack-py`](packages/tristack-py) — PyPI distribution of the CLI
- **Template engine**: [`packages/template-generator`](packages/template-generator)
- **Shared types**: [`packages/types`](packages/types)

## Development

```bash
# Clone the repository
git clone https://github.com/AbdullahMukadam/tristack.git

# Install dependencies
bun install

# Start CLI development
bun dev:cli

# Start website development
bun dev:web
```

## Want to contribute?

Please read the Contribution Guide first and open an issue before starting new features to ensure alignment with project goals.

- Docs: [`./apps/web/content/docs/contributing.mdx`](./apps/web/content/docs/contributing.mdx)
- Repo guide: [`./.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md)

## License & Attribution

TriStack is released under the [MIT License](LICENSE). It is a fork of
[Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack) (MIT licensed) — the
prompt UX framework, virtual file-system template engine, and Stack Builder web UI are adapted from
the original project, extended to scaffold Python, Go, and Rust backend stacks.
