# TriStack CLI — Project Doc (v0.6 — Native Distribution Strategy Added)

> v0.2 verified the real folder/file structure of
> `AmanVarshney01/create-better-t-stack` directly from source. v0.3 made
> the Stack Builder web UI a **core, non-optional Phase 1 deliverable**
> and turned the rollout plan into a strict phase-gated spec (Section 10)
> with a Definition of Done per phase. v0.4 expands Section 4's stack
> matrix with additional verified frameworks (Gin, Django+DRF, Rocket,
> Loco, Warp, Salvo, GORM) and adds Section 11, covering **two distinct
> doc systems**: docs for our own web app/tool (forked from their Fumadocs
> setup) and docs tooling for the backend projects we generate (README
> auto-gen + optional Fumadocs/Starlight/mdBook doc-site addons + OpenAPI
> tooling per language). v0.5 finalizes the project name as **TriStack**
> (see naming rationale below) and updates all CLI examples, package
> names, and config-file references throughout this doc accordingly.
> v0.6 adds Section 6, addressing a key gap raised during planning:
> **Python/Go/Rust developers should not need Node.js installed to use
> this tool.** The core engine stays TypeScript (fork-friendly, per
> Sections 8–9), but is compiled to a standalone binary and distributed
> through each ecosystem's native installer — PyPI/`uvx` for Python,
> Homebrew/curl-installer for Go and Rust — following the exact precedent
> set by Ruff's own distribution model. This is now a binding requirement
> in each phase's Definition of Done (Section 10), not an afterthought.

## 1. What We're Building

A CLI scaffolding tool — same category as Better-T-Stack — but for backend
ecosystems Better-T-Stack does **not** cover: **Python, Go, and Rust**.

One tool, one install command. On run, the user first picks a **language**,
then answers a language-specific set of prompts (framework, ORM, database,
migrations, addons), and the CLI generates a clean, ready-to-run project —
no boilerplate, no lock-in, latest stable dependencies by default.

**Name:** TriStack — finalized. "Tri" for the three languages supported
(Python, Go, Rust), "Stack" carrying the same meaning it does in
Better-T-Stack. Chosen for brevity and because a search across npm, PyPI,
and GitHub turned up no existing scaffolder/CLI using this name (see
naming search log — Section 16).

**Tagline (draft):** "Better-T-Stack, but for Python, Go, and Rust."

---

## 2. Why This Exists (The Gap)

| Ecosystem     | Existing tooling              | Problem                                       |
| ------------- | ----------------------------- | --------------------------------------------- |
| TypeScript/JS | Better-T-Stack, create-t3-app | Well served already                           |
| Python        | cookiecutter templates        | Static, single fixed template, not composable |
| Go            | Nothing comparable            | Devs hand-wire every project from scratch     |
| Rust          | `cargo generate`              | Single fixed templates, no mix-and-match      |

No existing tool lets a Python/Go/Rust developer say "give me FastAPI +
SQLModel + Postgres + Alembic + Docker" and get a working, idiomatic project
in one command, the way TS developers already can.

---

## 3. Philosophy (inherited from Better-T-Stack)

- **Roll your own stack** — pick only the parts you need, nothing extra.
- **Minimal templates** — bare-bones scaffolds, zero bloat.
- **Latest dependencies** — always current, stable versions by default.
- **Idiomatic per language** — a generated Go project should look like a Go
  developer wrote it, not a TypeScript dev's idea of Go. Same for Rust and
  Python.
- **Free and open source.**

---

## 4. Scope: Language → Stack Matrix

> Verified against current (2026) ecosystem research, not just training
> data — see chat history for sources. This matrix is now considered
> **authoritative** for what Phase 1–3 must support (Section 10). Framework
> choice notes ("why offer this one") are included so the CLI's help text /
> web builder tooltips can reuse this reasoning.

### Python

| Category         | Options                                                                                                                                                                                                                                                                                                                                                            | Notes                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| Framework        | **FastAPI** (async, most popular for new APIs/AI backends), **Litestar** (FastAPI alternative — stronger typing via msgspec, more built-in features), **Django + Django REST Framework** (full batteries-included: ORM, admin, auth, migrations built in — best for CRUD-heavy/enterprise apps), **Flask** (minimal, still common for small services/ML endpoints) | Django's inclusion means our compatibility matrix must account for DRF bundling its _own_ ORM/migrations — see 4.1 |
| ORM              | **SQLModel** (FastAPI creator's own, Pydantic-native), **SQLAlchemy 2.0** (the mature async-capable standard), **Tortoise ORM** (async-native, Django-style syntax), none                                                                                                                                                                                          | Not offered when Django is selected (Django ORM is bundled)                                                        |
| Migrations       | **Alembic** (pairs with SQLAlchemy/SQLModel), none                                                                                                                                                                                                                                                                                                                 | Django uses its own built-in migrations instead                                                                    |
| Templating (SSR) | Jinja2 + htmx, none (API-only)                                                                                                                                                                                                                                                                                                                                     |                                                                                                                    |
| Package manager  | **uv** (fast, modern, surging adoption — good differentiator), poetry, pip                                                                                                                                                                                                                                                                                         |                                                                                                                    |
| Database         | SQLite, PostgreSQL, MySQL, none                                                                                                                                                                                                                                                                                                                                    |                                                                                                                    |
| Addons           | Docker, ruff, mypy, pytest, GitHub Actions                                                                                                                                                                                                                                                                                                                         |                                                                                                                    |

### Go

| Category   | Options                                                                                                                                                                                                                                                                                         | Notes                                                                                                                        |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Framework  | **Gin** (most popular by adoption, batteries-included, best default for newcomers), **Fiber** (Express-style API, fastest via fasthttp), **Echo** (balanced features/simplicity), **Chi** (minimal router, pure `net/http`-compatible, favored for clean architecture), stdlib `net/http` alone | Gin was missing from the earlier draft — corrected here as it's the most-adopted option                                      |
| DB layer   | **sqlc** (generates typed Go code from raw SQL — idiomatic Go preference for "less magic"), **GORM** (full-featured ORM, closest to what a Python/JS dev expects), **sqlx** (thin typed extension over `database/sql`), none                                                                    | Go's ecosystem culturally favors sqlc/sqlx over heavy ORMs — offering GORM covers users who want ORM-style ergonomics anyway |
| Migrations | goose, golang-migrate, none                                                                                                                                                                                                                                                                     |                                                                                                                              |
| Templating | templ (typed, compiled HTML), html/template (stdlib), none                                                                                                                                                                                                                                      |                                                                                                                              |
| Database   | SQLite, PostgreSQL, MySQL, none                                                                                                                                                                                                                                                                 |                                                                                                                              |
| Addons     | Docker, Air (live reload), golangci-lint                                                                                                                                                                                                                                                        |                                                                                                                              |

### Rust

| Category   | Options                                                                                                                                                                                                                                                                                                                                                                                  | Notes                                                                                                                                                                                              |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework  | **Axum** (Tokio team, most idiomatic modern default), **Actix-web** (fastest in benchmarks, longest production track record, actor model), **Rocket** (batteries-included, best developer experience/ergonomics), **Warp**, **Salvo** (both composable/filter-based alternatives), **Loco** (Rails-style full-stack framework — bundles ORM/auth/jobs/deploy conventions on top of Axum) | Loco is meaningfully different from the rest — it's a "framework of frameworks" (opinionated full-stack layer), worth flagging distinctly in prompts rather than listing flat alongside Axum/Actix |
| ORM        | **SeaORM** (async, ActiveRecord-style — the pragmatic middle ground), **Diesel** (max type safety, sync-first — needs `diesel-async` + a pool adapter for async use), **sqlx** (compile-time checked raw SQL, no ORM abstraction layer), none                                                                                                                                            |                                                                                                                                                                                                    |
| Templating | Askama, minijinja, none                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                    |
| Database   | SQLite, PostgreSQL, MySQL, none                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                    |
| Addons     | Docker, cargo-watch, clippy                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                    |

### 4.1 Cross-cutting compatibility notes (feeds `compatibility-rules.ts` per language)

- **Django + DRF selected (Python)** → ORM and Migrations prompts are
  skipped entirely (Django bundles its own); this mirrors how the original
  repo hides the ORM/database prompts when Convex is selected as backend.
- **Diesel selected (Rust)** → if the user also wants async, the generator
  must include `diesel-async` + a pool adapter (`deadpool` or `bb8`) as
  implicit added dependencies, not a separate prompt.
- **Loco selected (Rust)** → since Loco bundles its own ORM/auth/job-queue
  conventions, the ORM prompt should offer only Loco-compatible options
  (primarily SeaORM) rather than the full Rust ORM list.
- **Chi or stdlib `net/http` selected (Go)** → no built-in validation/ORM,
  so the addons list should surface Docker/lint tools more prominently
  since the user is opting into "assemble it yourself."

> Each language has its **own question flow** — not one universal list with
> options filtered in/out. A Go user should never see a "uv vs poetry"
> prompt.

---

## 5. User Flow

> **Updated per distribution strategy (Section 6):** `npx` is shown here
> only as one of several equivalent entry points — see Section 6 before
> assuming npm/Node is the primary path. A Python user is expected to run
> `uvx tristack` or `pip install tristack`, not `npx`.

```
$ uvx tristack my-api          # Python user's natural entry point
# or: npx create-tristack@latest my-api   (works identically, no Node install required for the *generated* project either way)

? Choose your language:      Python | Go | Rust
? Choose your framework:     [options depend on language above]
? Choose your ORM/DB layer:  [options depend on framework]
? Choose your database:      SQLite | PostgreSQL | MySQL | none
? Migrations:                [options depend on language]
? Addons:                    [multi-select, depends on language]

✔ Generating project...
✔ Installing dependencies...
✔ Done. cd my-api && <run command>
```

Non-interactive flag mode (like Better-T-Stack) also supported, from any
install channel:

```bash
tristack my-api \
  --language python \
  --framework fastapi \
  --orm sqlmodel \
  --database postgres \
  --migrations alembic \
  --package-manager uv \
  --addons docker,ruff,pytest,github-actions
```

A visual **Stack Builder** web UI (like Better-T-Stack's `/new` page) is
core Phase 1 scope (Section 10) and generates the correct install command
for the user's detected/selected platform (pip/uvx, npm, cargo, go
install, or brew) — not just an npm command.

---

## 6. Distribution Strategy — No Node.js Required to Use TriStack

> This section exists because of a fair and important challenge during
> planning: **why would a Python, Go, or Rust developer install Node.js
> just to scaffold a project in their own language?** They shouldn't have
> to, and the plan below ensures they don't. This section is now binding
> on all phases — the CLI must ship a native entry point for each
> language before that language's phase is considered done.

### 6.1 The problem with npx-only distribution

Better-T-Stack can safely assume its users already have Node/npm — its
**output** is TypeScript/JavaScript, so the tooling and the target
audience overlap perfectly. TriStack's output is Python, Go, or Rust
code, but its _target audience_ is Python, Go, and Rust developers — many
of whom won't have Node installed, and shouldn't need to install it as a
prerequisite for scaffolding a FastAPI project. Requiring `npx` as the
only entry point would be a real adoption barrier, not a minor
inconvenience.

### 6.2 The precedent: how Ruff (and uv) solve exactly this

Ruff (Astral's Python linter/formatter) is written in Rust, compiled to a
single native binary, and distributed through every ecosystem's own
native installer — with no ecosystem privileged as "the real one":

- **PyPI:** `pip install ruff`, `uvx ruff`, `uv tool install ruff` — the
  PyPI package is a **thin wheel wrapper** that bundles the pre-compiled
  binary per-platform and exposes a console entry point that just executes
  it. No Rust toolchain, no Cargo, nothing beyond Python itself.
- **Standalone installer scripts:** `curl -LsSf https://astral.sh/ruff/install.sh | sh`
  (macOS/Linux) and a PowerShell equivalent for Windows — installs the
  binary directly, no package manager at all required.
- **Homebrew:** `brew install ruff`.
- **Cargo** (its actual source ecosystem) is _also_ supported, but treated
  as just one more channel, not the primary one.

This is the exact shape we need: **one compiled core engine, many thin
native-feeling install wrappers.**

### 6.3 What this means architecturally for TriStack

We keep the core engine built in TypeScript (Section 8–9's fork of
Better-T-Stack's `virtual-fs`/`template-processor`/prompt framework — that
decision doesn't change), but we **do not ship it as a Node script**.
Instead:

1. **Compile to a standalone binary.** Bun supports `bun build --compile`,
   which bundles a TS/JS project (including all our forked engine code)
   into a single native executable per platform (macOS/Linux/Windows, x64
   - arm64) with **no Node.js or Bun runtime required on the end user's
     machine.** This is the linchpin — it means our fork-from-Better-T-Stack
     plan (Section 8–9) is fully compatible with native, per-language
     distribution; we are not choosing between "reuse their engine" and
     "distribute natively," we get both.
2. **Publish thin wrapper packages per ecosystem**, each just downloading
   or bundling the right compiled binary for the user's platform and
   exposing a native-feeling command:

| Channel                         | Command                                                                                           | What it actually does                                                                                                                                                                                                            |
| ------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **PyPI**                        | `pip install tristack` / `uvx tristack` / `uv tool install tristack`                              | Thin Python wheel wrapper bundling the compiled binary per-platform — same pattern as `ruff`/`ruff-api` above                                                                                                                    |
| **Standalone installer script** | `curl -LsSf https://tristack.dev/install.sh \| sh` (macOS/Linux), PowerShell equivalent (Windows) | Downloads the compiled binary directly, no language runtime needed at all                                                                                                                                                        |
| **Homebrew**                    | `brew install tristack`                                                                           | Formula installs the compiled binary                                                                                                                                                                                             |
| **npm**                         | `npx create-tristack@latest`                                                                      | Kept as one more channel (useful for JS-comfortable users, CI environments already using Node, and easy parity with Better-T-Stack's own docs/examples) — but explicitly **not** the primary or only path                        |
| **cargo** (stretch goal)        | `cargo install tristack`                                                                          | True native Rust distribution requires either a thin wrapper crate (less standard in the Rust ecosystem than PyPI wrappers are) or an eventual Rust port of the CLI itself — see Section 12.1 open question                      |
| **go install** (stretch goal)   | `go install github.com/.../tristack@latest`                                                       | `go install` compiles from Go source — it cannot wrap a foreign binary the way pip/uvx can. True support requires either a Go port of the CLI or accepting that Go users install via curl-script/brew instead — see Section 12.1 |

### 6.4 Per-phase distribution requirement (now part of each phase's Definition of Done, Section 10)

- **Phase 1 (Python):** ship PyPI wrapper (`pip install tristack`,
  `uvx tristack`) + standalone curl/PowerShell installer + Homebrew, in
  addition to npm. Python's Definition of Done is **not met** by npm
  distribution alone — this was previously an unstated gap in Section 10
  and is now a required addition to Phase 1's DoD checklist.
- **Phase 2 (Go):** ship Homebrew + curl/PowerShell installer at minimum.
  Whether to pursue true `go install` support (requiring a Go-native
  build, not just a compiled-binary download) is an explicit open
  question — see Section 12.1 — not a silent gap.
- **Phase 3 (Rust):** ship Homebrew + curl/PowerShell installer at
  minimum. Same open question for `cargo install` as Go has for
  `go install`.

### 6.5 Why this doesn't conflict with Section 8's architecture

Nothing about compiling to a standalone binary changes the internal
folder structure, the fork-from-Better-T-Stack plan, or the
CLI-vs-web-builder split in Sections 6–8. `bun build --compile` operates
on the _finished_ TypeScript codebase as a build/packaging step — it's
additive, not a rewrite. The web Stack Builder (`apps/web`) is unaffected
entirely, since it runs in-browser and was never going to be distributed
as a binary.

---

## 7. Better-T-Stack's ACTUAL Source Architecture (verified)

The real repo (`AmanVarshney01/create-better-t-stack`) is a **Bun/Turborepo
monorepo** with three top-level pieces:

```
create-better-t-stack/
├── apps/
│   ├── cli/            # the scaffolding CLI itself
│   └── web/             # docs site + the Stack Builder UI (/new page)
├── packages/
│   ├── template-generator/   # the actual template engine + template files
│   ├── types/                 # shared TS types/schemas/constants
│   ├── backend/                # a Convex backend used by their own web app
│   └── create-bts/             # thin npm-publish wrapper (`create-bts` alias)
├── plugin/               # Claude Code plugin (MCP server + skills)
├── docs/, openspec/, scripts/, tools/
└── turbo.json, package.json, bun.lock  (monorepo root config)
```

### 6.1 `apps/cli/src` — the CLI engine

```
apps/cli/src/
├── cli.ts                    # entrypoint, argument parsing
├── index.ts
├── mcp.ts                    # MCP server mode for AI agents
├── types.ts
├── validation.ts
├── constants.ts
├── commands/
│   ├── history.ts             # `create-better-t-stack history`
│   └── meta.ts
├── prompts/                  # ← ONE FILE PER QUESTION, not per language
│   ├── project-name.ts
│   ├── frontend.ts
│   ├── backend.ts
│   ├── runtime.ts
│   ├── database.ts
│   ├── orm.ts
│   ├── api.ts
│   ├── auth.ts
│   ├── payments.ts
│   ├── addons.ts
│   ├── examples.ts
│   ├── database-setup.ts
│   ├── web-deploy.ts
│   ├── server-deploy.ts
│   ├── package-manager.ts
│   ├── git.ts
│   ├── install.ts
│   ├── config-prompts.ts      # orchestrates the full prompt sequence
│   ├── navigable.ts / navigable-group.ts   # arrow-key nav framework
├── helpers/
│   ├── core/                 # create-project.ts, git.ts, db-setup.ts,
│   │                          # install-dependencies.ts, post-installation.ts,
│   │                          # add-handler.ts (the `add` command),
│   │                          # detect-project-config.ts
│   ├── addons/                # one file per addon: tauri-setup.ts,
│   │                          # mcp-setup.ts, starlight-setup.ts, etc.
│   └── database-providers/    # one file per hosted DB: neon-setup.ts,
│                               # turso-setup.ts, supabase-setup.ts, d1-setup.ts...
└── utils/                     # compatibility.ts, compatibility-rules.ts,
                                # bts-config.ts, project-history.ts,
                                # terminal-output.ts, docker-utils.ts, etc.
```

**Key insight:** prompts are organized **by question/category**
(frontend, backend, orm, database...), not by language or by combination.
`config-prompts.ts` runs them in sequence and `utils/compatibility.ts` +
`compatibility-rules.ts` decide which options are even offered based on
prior answers (e.g. Convex backend hides the ORM/database prompts
entirely).

### 6.2 `packages/template-generator` — the actual template engine

```
packages/template-generator/
├── templates/                 # the raw scaffold files, grouped by CATEGORY
│   ├── base/                  # always-included root files
│   ├── frontend/              # react/, nuxt/, svelte/, solid/, astro/, native/
│   ├── backend/                # server/, convex/
│   ├── db/                     # per-ORM/db files
│   ├── db-setup/                # per-hosted-provider files
│   ├── api/                     # trpc/, orpc/
│   ├── auth/                     # better-auth/, clerk/
│   ├── payments/                  # polar/
│   ├── addons/                     # turborepo/, pwa/, tauri/, biome/...
│   ├── deploy/                      # cloudflare workers config etc.
│   ├── examples/                     # todo/, ai/
│   ├── packages/                      # shared workspace packages
│   └── extras/
└── src/
    ├── generator.ts            # orchestrates the whole generation run
    ├── core/
    │   ├── template-reader.ts   # reads template files (works in-browser too!)
    │   ├── template-processor.ts # variable interpolation / conditionals
    │   └── virtual-fs.ts         # in-memory FS — this is what lets the
    │                              # WEB Stack Builder preview files without
    │                              # a real filesystem
    ├── template-handlers/        # one handler per category — decides WHICH
    │   │                          # template files to pull in based on
    │   │                          # selected options (frontend.ts, backend.ts,
    │   │                          # database.ts, auth.ts, addons.ts, etc.)
    ├── processors/                # dependency-injection logic — adds the
    │   │                           # right npm deps/scripts per choice
    │   │                           # (frontend-deps.ts, db-deps.ts, ...)
    ├── post-process/               # README generation, package.json
    │                                # finalization, vercel config etc.
    └── fs-writer.ts                # writes the virtual FS to real disk (CLI)
                                     # vs. keeping it virtual (web preview)
```

**This is the most important discovery for us:** the template engine is
**decoupled from Node's filesystem** via a `virtual-fs.ts` abstraction. The
same `template-generator` package runs both:

- in the **CLI** (Node/Bun) → writes to real disk via `fs-writer.ts`
- in the **web Stack Builder** (browser) → keeps everything in memory and
  renders a live file-tree preview + generates the CLI command to copy

This is _exactly_ the pattern we should copy for a polyglot version.

### 6.3 `apps/web` — docs site + Stack Builder UI

```
apps/web/src/app/(home)/new/
├── page.tsx
└── _components/
    ├── stack-builder/
    │   ├── index.tsx              # top-level builder component/state
    │   ├── category-nav.tsx        # left sidebar: Frontend / Backend / DB...
    │   ├── tech-categories.tsx      # renders option cards per category
    │   ├── selected-stack-badges.tsx
    │   └── use-stack-builder.ts      # state management hook
    ├── preview-panel.tsx            # right side: live file tree + code
    ├── file-explorer.tsx
    ├── code-viewer.tsx
    ├── action-buttons.tsx           # "Copy command" / "Download zip" etc.
    ├── preset-dropdown.tsx          # saved stack presets
    └── share-button.tsx
```

It's a **Next.js app**. The builder UI is `category-nav` (left) +
`tech-categories` (option grid) + `preview-panel` (live-generated file tree
on the right, powered by the same `template-generator` virtual-fs engine
used by the CLI).

### 6.4 `packages/types` — shared contracts

Single source of truth for option enums, Zod schemas, and constants,
imported by both the CLI and the web app so they can never drift out of
sync (e.g. `--orm` flag values in the CLI match exactly what the web
builder can select).

---

## 8. Our Architecture — Mapped 1:1 Onto Theirs

We keep their exact folder-naming conventions and separation of concerns,
just add a **language** dimension as a new top-level axis everywhere it's
needed.

```
tristack/
├── apps/
│   ├── cli/
│   │   └── src/
│   │       ├── cli.ts
│   │       ├── mcp.ts                     # AI agent mode (Phase 4)
│   │       ├── prompts/
│   │       │   ├── language.ts             # NEW — step 0, picks python/go/rust
│   │       │   ├── project-name.ts          # (reusable almost as-is)
│   │       │   ├── framework.ts              # options depend on language
│   │       │   ├── orm.ts                     # options depend on language
│   │       │   ├── database.ts                 # mostly reusable as-is
│   │       │   ├── migrations.ts                # NEW category
│   │       │   ├── package-manager.ts            # options depend on language
│   │       │   ├── addons.ts                      # options depend on language
│   │       │   ├── config-prompts.ts               # orchestrator, same role
│   │       │   ├── git.ts / install.ts              # reusable near-verbatim
│   │       │   └── navigable.ts / navigable-group.ts # reusable verbatim (UX
│   │       │                                          # framework, language-agnostic)
│   │       ├── helpers/
│   │       │   ├── core/                    # create-project.ts, git.ts,
│   │       │   │                             # install-dependencies.ts —
│   │       │   │                             # reusable, just swap npm-install
│   │       │   │                             # for uv/go-mod/cargo calls
│   │       │   └── addons/                   # one file per addon, same pattern
│   │       │       # docker-setup.ts, ruff-setup.ts, air-setup.ts,
│   │       │       # clippy-setup.ts, github-actions-setup.ts...
│   │       └── utils/
│   │           ├── compatibility.ts          # same role: hide invalid combos
│   │           ├── compatibility-rules.ts     # per-language rule sets
│   │           └── bts-config.ts → tristack-config.ts  (saved config file)
│   └── web/                                   # Stack Builder UI (Phase 5)
│       └── src/app/(home)/new/_components/
│           ├── stack-builder/
│           │   ├── index.tsx
│           │   ├── category-nav.tsx           # add "Language" as first nav item
│           │   ├── tech-categories.tsx          # renders per-language option sets
│           │   └── use-stack-builder.ts
│           └── preview-panel.tsx               # live file tree, same virtual-fs
├── packages/
│   ├── template-generator/
│   │   ├── templates/
│   │   │   ├── python/
│   │   │   │   ├── base/
│   │   │   │   ├── framework/       # fastapi/, litestar/
│   │   │   │   ├── orm/              # sqlmodel/, sqlalchemy/, tortoise/
│   │   │   │   ├── migrations/        # alembic/
│   │   │   │   ├── db/                 # sqlite/, postgres/, mysql/
│   │   │   │   └── addons/              # docker/, ruff/, pytest/, gh-actions/
│   │   │   ├── go/
│   │   │   │   ├── base/
│   │   │   │   ├── framework/        # chi/, fiber/, echo/, stdlib/
│   │   │   │   ├── db-layer/          # sqlc/, gorm/, sqlx/
│   │   │   │   ├── migrations/         # goose/, golang-migrate/
│   │   │   │   └── addons/              # docker/, air/, golangci-lint/
│   │   │   └── rust/
│   │   │       ├── base/
│   │   │       ├── framework/        # axum/, actix-web/
│   │   │       ├── orm/               # seaorm/, diesel/, sqlx/
│   │   │       └── addons/             # docker/, cargo-watch/, clippy/
│   │   └── src/
│   │       ├── generator.ts            # same orchestrator role
│   │       ├── core/
│   │       │   ├── template-reader.ts   # reusable near-verbatim
│   │       │   ├── template-processor.ts # reusable — variable interpolation
│   │       │   │                          # is language-agnostic text substitution
│   │       │   └── virtual-fs.ts         # reusable verbatim — this is the
│   │       │                              # piece that makes web-preview possible
│   │       ├── template-handlers/         # python-handler.ts, go-handler.ts,
│   │       │                               # rust-handler.ts — pick which
│   │       │                               # template files apply
│   │       ├── processors/                 # python-deps.ts (writes
│   │       │                                # pyproject.toml), go-deps.ts
│   │       │                                # (writes go.mod), rust-deps.ts
│   │       │                                # (writes Cargo.toml)
│   │       └── fs-writer.ts                 # reusable verbatim
│   └── types/                                 # shared enums/schemas, same role
└── plugin/                                     # Phase 4: MCP + AI agent plugin
```

**What changes vs. what stays the same, concretely:**

| Piece                                                           | Reuse plan                                                                                                                           |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `navigable.ts`, `navigable-group.ts` (arrow-key prompt UX)      | Reuse verbatim — pure UX, zero language coupling                                                                                     |
| `virtual-fs.ts`, `template-reader.ts`, `template-processor.ts`  | Reuse near-verbatim — this is generic text-templating over a virtual file tree                                                       |
| `fs-writer.ts`                                                  | Reuse verbatim                                                                                                                       |
| `config-prompts.ts` orchestration pattern                       | Reuse the _pattern_, rewrite the specific prompt list                                                                                |
| `compatibility.ts` / `compatibility-rules.ts`                   | Reuse the _pattern_ (a rules engine that filters options), write new rules per language                                              |
| `install-dependencies.ts`                                       | Reuse the _shape_, swap `npm install` for `uv sync` / `go mod tidy` / `cargo build`                                                  |
| Every file in `templates/`                                      | **Not reusable** — 100% new, written per language                                                                                    |
| `template-handlers/*.ts`                                        | Reuse the _pattern_ (one handler per category), rewrite logic per language                                                           |
| `processors/*-deps.ts`                                          | Reuse the _pattern_ (inject deps based on choices), rewrite to emit `pyproject.toml`/`go.mod`/`Cargo.toml` instead of `package.json` |
| `apps/web` Stack Builder (React components, virtual-fs preview) | Reuse the UI shell and virtual-fs preview mechanism; add a "Language" selector as the new first category in `category-nav.tsx`       |
| `plugin/` (Claude Code MCP plugin)                              | Reuse the integration pattern for Phase 4                                                                                            |

---

## 9. Reusing Better-T-Stack's Source (MIT Licensed) — Updated

Confirmed via the repo's `LICENSE` file: **MIT License, Copyright (c) 2025
Better T Stack.** Forking, modifying, and relicensing derivative work is
permitted as long as the original copyright notice is retained in copied
code.

**Directly reusable (fork and adapt in place):**

- `navigable.ts` / `navigable-group.ts` — prompt UX framework
- `virtual-fs.ts`, `template-reader.ts`, `template-processor.ts`, `fs-writer.ts`
- `git.ts`, `project-name-validation.ts`, `project-directory.ts`
- Web app's Stack Builder shell: `stack-builder/index.tsx`,
  `category-nav.tsx`, `preview-panel.tsx`, `file-explorer.tsx`,
  `code-viewer.tsx`, `action-buttons.tsx` — the _layout and preview
  mechanism_, with new category data

**Reusable as an architectural pattern (same shape, new content):**

- `prompts/` — one file per question, orchestrated by `config-prompts.ts`
- `helpers/addons/` — one file per addon
- `helpers/core/create-project.ts`, `install-dependencies.ts`
- `utils/compatibility.ts` + `compatibility-rules.ts` — a rules engine
- `template-handlers/` + `processors/` split (what-to-include vs.
  what-deps-to-add)
- `packages/types` — shared schema package consumed by both CLI and web

**Not reusable — from scratch per language:**

- Everything in `templates/` (currently 100% TS/JS project files)
- Language-specific dependency processors (`pyproject.toml` / `go.mod` /
  `Cargo.toml` writers, vs. their `package.json` writer)
- Language-specific compatibility rules

**Revised estimate:** because the CLI's core engine (`virtual-fs`,
template processor, prompt UX framework, and web preview mechanism) is
more cleanly decoupled from TypeScript-specific logic than expected, the
reusable "plumbing" layer is realistically **40–50%** of total engineering
effort — higher than our earlier estimate, especially once we include the
web Stack Builder shell. The template content itself (per-language scaffold
files) remains a from-scratch effort per language, as before.

---

## 10. Rollout Plan (Phase-Gated Spec)

> **This section is the authoritative build order.** Each phase has a
> fixed scope and an explicit "Definition of Done." No phase begins until
> the previous phase's Definition of Done is fully met. This section is
> written to be followed literally by a coding agent (see Section 15) —
> not reordered, not merged, not partially skipped.

The Stack Builder web UI is **not optional and not deferred to the end.**
Better-T-Stack's own `apps/web/new` UI and its underlying `virtual-fs`
engine are directly forkable (Section 8), so there is no reason to treat
the web builder as a "nice to have" — it ships in **Phase 1**, alongside
the CLI, both driven by the same `template-generator` package from day
one. Building CLI-only first and bolting a UI on later would mean
re-deriving category/option data structures twice; building them together
from the shared `packages/types` schema (their pattern) avoids that.

### Phase 1 — Python, CLI + Web Builder (v0.1)

**Scope:**

- Fork `create-better-t-stack`, strip to `templates/base/` only (Section
  12, steps 1–4).
- `packages/types`: define the new schema — `language`, `framework`,
  `orm`, `migrations`, `database`, `packageManager`, `addons` — with
  `python` as the only language enum value for this phase.
- `packages/template-generator/templates/python/`: base + FastAPI +
  SQLModel + SQLAlchemy + Alembic + SQLite/Postgres + uv + Docker + ruff +
  pytest + GitHub Actions.
- `apps/cli`: `language.ts` prompt (locked to Python for now, but the
  prompt exists and is wired), full Python prompt flow, non-interactive
  flag mode (`--language python --framework fastapi ...`).
- `apps/web/new`: fork the Stack Builder UI, wire `category-nav.tsx` +
  `tech-categories.tsx` to the Python option set from `packages/types`,
  `preview-panel.tsx` renders a live file tree via the shared
  `virtual-fs` engine, `action-buttons.tsx` copies the generated CLI
  command.
- CI: generated-project matrix test (mirrors their
  `test/matrix/create-matrix.test.ts`) — every valid Python combo must
  actually `uv sync` and boot without error.

**Explicitly out of scope for Phase 1:** Go, Rust, AI agent/MCP plugin,
hosted DB providers (Neon/Supabase-equivalent), any addon not listed
above.

**Definition of Done (Phase 1 is complete when ALL of these are true):**

1. `npx create-tristack@latest my-api` scaffolds a working FastAPI +
   SQLModel + Alembic + uv project via CLI prompts.
2. The same flow works fully non-interactively via flags.
3. The web builder at `/new` lets a user pick Python options, preview the
   file tree live, and copy a working CLI command.
4. A freshly generated project runs (`uv run fastapi dev` or equivalent)
   with zero manual fixes.
5. CI passes on every valid Python option combination.
6. README, LICENSE attribution (Section 13) in place.

### Phase 2 — Go

**Scope:** add `language: "go"` to `packages/types`; add
`templates/go/` (Chi + sqlc + goose + Postgres/SQLite + Docker + Air +
golangci-lint); extend `prompts/framework.ts` etc. to branch on language;
extend the web builder's `category-nav` to offer Go once selected.

**Explicitly out of scope:** Rust, AI agent/MCP plugin.

**Definition of Done:** same six criteria as Phase 1, applied to Go, with
both CLI and web builder supporting a `language` toggle between Python and
Go.

### Phase 3 — Rust

**Scope:** same pattern as Phase 2, for `templates/rust/` (Axum + SeaORM +
Docker + cargo-watch + clippy).

**Definition of Done:** same six criteria, all three languages selectable
in both CLI and web builder.

### Phase 4 — AI Agent Integration (MCP plugin)

**Scope:** port the `plugin/` directory pattern — MCP server + Claude Code
skills/commands — so an agent can scaffold any of the three languages from
a plain-English request, mirroring Better-T-Stack's own
`/better-t-stack:new <description>` command.

**Definition of Done:** `/plugin install tristack@tristack` in Claude
Code, followed by a natural-language request, produces a correctly
scaffolded project without the user touching CLI flags directly.

### Phase 5 — Hosted providers & polish (optional, post-v1)

Hosted DB providers per language (e.g. Neon/Supabase-equivalent for
Python, PlanetScale for Go), saved presets, project history, telemetry —
mirrors Better-T-Stack's `helpers/database-providers/` and
`commands/history.ts`. Only begin after Phases 1–4 each individually meet
their Definition of Done.

> **Rule for all phases:** the CLI architecture (Section 8) is built to
> support all three languages structurally from Phase 1 — the `language`
> enum, prompt branching, and compatibility-rules pattern exist from day
> one. What's deferred is only the _content_ (template files, framework
> support) for Go and Rust. This is why Phase 1 must still create the
> `templates/go/` and `templates/rust/` folder stubs (empty except a
> `.gitkeep`) even though they're not populated until Phases 2–3 — so the
> folder shape never needs restructuring later.

---

## 11. Documentation Strategy — Two Distinct Doc Systems

Better-T-Stack actually solves **two separate documentation problems**,
and we need both, confirmed directly from their source:

1. **Docs for our own tool/website** (how to use TriStack itself)
2. **Docs tooling for the projects our tool generates** (so users can
   document _their own_ FastAPI/Go/Rust backend after we scaffold it)

These are architecturally unrelated in their repo and should stay
unrelated in ours — different tech, different audience, different
lifecycle.

### 10.1 Docs for our own web app (reusable, forked directly)

Better-T-Stack's `apps/web` uses **Fumadocs** (`fumadocs-core`,
`fumadocs-mdx`, `fumadocs-ui`) with content as MDX files:

```
apps/web/content/docs/
├── index.mdx
├── faq.mdx
├── contributing.mdx
├── project-structure.mdx
├── bts-config.mdx          # → becomes our tristack-config.mdx
├── analytics.mdx
├── meta.json                 # sidebar/nav ordering
├── cli/                        # per-command CLI reference pages
└── guides/                      # walkthroughs, common setups
```

**Reuse plan:** fork this directly — Fumadocs setup, MDX pipeline,
sidebar config, and page layout are 100% content-agnostic. We only need
to replace the `.mdx` content itself:

- `index.mdx`, `faq.mdx` → rewritten for TriStack
- `cli/` → one page per CLI command/flag (language, framework, orm, etc.
  — mirrors Section 4's matrix)
- `guides/` → "Python quick start," "Go quick start," "Rust quick start,"
  plus common-setup recipes (mirrors the Quick Start doc structure this
  whole project doc was seeded from)
- `bts-config.mdx` → `tristack-config.mdx`, documenting our saved-config file
  format

This belongs in **Phase 1**, shipped alongside the CLI and Stack Builder
(Section 10) — not deferred. A tool with no docs site undermines the "copy
the command from the web builder" flow, since the web builder and docs
site are the same Next.js app.

### 10.2 Docs tooling for GENERATED projects (the backend systems users scaffold)

This is the part worth calling out explicitly: **yes, every backend a
user scaffolds with us should have a path to maintain its own docs**, and
Better-T-Stack already has precedent for exactly this — it's not
something we're inventing, it's a pattern to port.

**How Better-T-Stack does it (verified from source):**

- `helpers/addons/fumadocs-setup.ts` — an **addon** that scaffolds a full
  Fumadocs documentation site _inside the generated project_ (as a new
  `apps/docs` workspace member), with options for MDX templates, search
  (Orama), OG images, and AI chat integration.
- `helpers/addons/starlight-setup.ts` — an alternative addon that
  scaffolds an Astro Starlight docs site instead, via `create-astro
--template starlight`.
- `processors/readme-generator.ts` — separately, a **README auto-writer**
  that runs regardless of addon choice, generating a project-specific
  `README.md` populated with the actual stack the user picked (setup
  commands, scripts, env vars) — this always happens, addon or not.

So Better-T-Stack actually offers docs at **two tiers**: a baseline
auto-generated README (always on) and an optional full docs-site addon
(opt-in, heavier).

**Our equivalent, per language** — same two-tier pattern, adapted to each
ecosystem's own idiomatic doc tooling rather than force-fitting Fumadocs
everywhere:

| Tier                                            | Python                                                                                                                                                                                                                        | Go                                                                                                                                         | Rust                                                                                                                                                                                        |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Baseline (always on)**                        | Auto-generated `README.md` via our own `readme-generator.ts` port, populated with the actual framework/orm/db choices (mirrors their processor exactly)                                                                       | Same — auto `README.md`                                                                                                                    | Same — auto `README.md`                                                                                                                                                                     |
| **API reference (near-free, framework-native)** | FastAPI/Litestar auto-generate OpenAPI/Swagger UI at `/docs` out of the box — just needs to be mentioned in the README, not built                                                                                             | `swaggo` (Gin/Echo) or `huma` generate OpenAPI docs from code comments/structs — offered as an addon since it's not automatic like FastAPI | `utoipa` generates OpenAPI docs for Axum/Actix via macros — offered as an addon, same reasoning                                                                                             |
| **Full docs site (opt-in addon)**               | Fumadocs or Starlight addon — **directly portable from their existing `fumadocs-setup.ts`/`starlight-setup.ts`**, since these are frontend-agnostic (they scaffold a _separate_ docs app, not tied to the backend's language) | Same — Fumadocs/Starlight addon, unchanged from their implementation                                                                       | Alternative idiomatic option: **mdBook** (the standard for Rust project docs, e.g. the Rust Book itself uses it) offered alongside Fumadocs/Starlight for users who want a Rust-native feel |

**Key architectural point:** the full-docs-site addon (Fumadocs/Starlight)
is **language-independent** in their implementation — it scaffolds a
Next.js or Astro app as a sibling workspace member, regardless of what
the _backend_ is written in. That means `fumadocs-setup.ts` and
`starlight-setup.ts` can be **reused almost verbatim** across all three
of our languages — the docs site doesn't care whether the backend it's
documenting is FastAPI, Chi, or Axum. Only the README generator and the
OpenAPI-tooling addon need per-language logic.

**Where this plugs into the architecture (Section 8):**

```
apps/cli/src/helpers/addons/
├── fumadocs-setup.ts       # reused ~verbatim from upstream
├── starlight-setup.ts       # reused ~verbatim from upstream
├── mdbook-setup.ts            # NEW — Rust-specific alternative
├── openapi-swaggo-setup.ts     # NEW — Go
└── openapi-utoipa-setup.ts      # NEW — Rust

packages/template-generator/src/processors/
└── readme-generator.ts        # ported pattern, rewritten per-language
                                 # content (setup commands differ: uv sync
                                 # vs go mod tidy vs cargo build)
```

**Phase placement:** baseline README generation ships in **Phase 1**
(it's required for any DoD to be met — Section 10 already implies a
working, documented project). The full docs-site addon (Fumadocs/
Starlight/mdBook) and OpenAPI-tooling addons ship as part of each
language's addon list in their respective phase (Fumadocs/Starlight in
Phase 1 since they're already portable; language-specific OpenAPI addons
and mdBook land in Phases 1–3 alongside each language's addon list,
per Section 4).

---

## 12. Open Questions

- [x] ~~Final name~~ — **Resolved: TriStack** (Section 1, Section 16).
      Note: a trademark/domain/social-handle check should still be run
      before public launch — the naming search (Section 16) covered
      npm/PyPI/GitHub only, not a full trademark clearance.
- [x] ~~CLI implementation language~~ — **Resolved: TypeScript/Bun**,
      compiled to a standalone native binary via `bun build --compile`
      (Section 6.3), distributed through PyPI/Homebrew/curl-installer
      wrappers rather than requiring Node.js on the end user's machine.
- [ ] Should each language's default DB setup include hosted options
      (Neon, Supabase-equivalent) like Better-T-Stack does, or keep v0.1
      local-only (SQLite/Docker Postgres)?
- [ ] Monorepo tooling for the CLI's own codebase — plain repo vs
      Turborepo/Nx (mirroring Better-T-Stack's own setup)?
- [ ] License for our project — MIT (to match/credit upstream) recommended.

### 12.1 True native distribution for Go and Rust (`go install` / `cargo install`)

Referenced from Section 6.3–6.4. A compiled Bun binary can be wrapped
transparently by PyPI (Python's package format allows bundling arbitrary
binaries behind a thin Python entry point — this is exactly how
`ruff`/`ruff-api` work). **Go and Rust don't have an equivalent
foreign-binary-wrapping convention** in their most idiomatic install
paths:

- `go install pkg@version` compiles from Go source using the Go
  toolchain — it has no standard mechanism to instead download and wrap a
  pre-built non-Go binary.
- `cargo install crate` compiles from Rust source via Cargo — same
  limitation. (`cargo-binstall` exists as a community workaround that
  fetches pre-built binaries instead of compiling, but it requires the
  user to have `cargo-binstall` itself installed first, so it doesn't
  fully solve the "zero prerequisite" goal either.)

**Two real options, to be decided before Phase 2/3 respectively:**

1. **Accept Homebrew + curl-installer as the primary channel for Go/Rust
   users**, same as Ruff does for non-pip users — don't chase `go
install`/`cargo install` support at all. Lowest effort, still removes
   the Node.js dependency (the actual problem raised), just doesn't
   achieve full ecosystem-native parity with Python's PyPI wrapper.
2. **Port the CLI engine itself to Go (for Phase 2) and/or Rust (for
   Phase 3)**, achieving true `go install`/`cargo install` support at the
   cost of maintaining the engine logic in multiple languages instead of
   one shared TypeScript codebase (this would partially undo the
   reuse-from-Better-T-Stack plan in Sections 8–9 for those two
   languages specifically, since the fork's value is the shared
   TypeScript engine).

**Recommendation (non-binding, for discussion):** start with Option 1 for
both Go and Rust — it fully solves the concern that started this
discussion (no Node.js required) with much less engineering cost, and
revisit Option 2 only if user feedback in Phases 2–3 shows Go/Rust
developers specifically expect `go install`/`cargo install` and reject
Homebrew/curl-installer as insufficient.

---

## 13. Credit / Attribution

Since we're forking real code (not just the idea), the LICENSE file must be
carried forward with the original copyright line preserved, e.g.:

```
MIT License

Copyright (c) 2025 Better T Stack
Copyright (c) 2026 <Your Project Name> (modifications)
```

Suggested README line:

> "Built as a fork of [Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack)
> (MIT licensed) — the prompt UX framework, virtual file-system template
> engine, and Stack Builder web UI are adapted from the original project.
> Extended to scaffold Python, Go, and Rust backend stacks instead of
> TypeScript/JavaScript."

---

## 14. Immediate Next Steps

1. Fork `AmanVarshney01/create-better-t-stack` on GitHub.
2. Strip `templates/` down to `templates/base/` only (delete all TS/JS
   frontend/backend/orm template content — keep the folder shape).
3. Rename `--frontend/--backend/--orm/--database` flag semantics in
   `packages/types` to our new category set (language, framework, orm,
   migrations, database, addons).
4. Gut `template-handlers/` and `processors/` down to stubs, then rebuild
   one at a time starting with Python.
5. Write `templates/python/base/` + `templates/python/framework/fastapi/`
   as the first working end-to-end slice — prove the pipeline generates a
   runnable FastAPI project before touching Go or Rust.
6. Fork `apps/web/new` alongside step 5, not after — wire it to the same
   `packages/types` schema so CLI and web builder can never drift apart
   (Phase 1 scope, Section 10).

---

## 15. How the AI Coding Agent Should Use This Doc

This section exists so an AI agent (e.g. Claude Code) working on this repo
follows the plan instead of improvising. Treat these as hard rules, not
suggestions:

1. **This doc is the spec of record.** Before starting any task, the agent
   should identify which Phase (Section 10) the task belongs to. If a
   requested task belongs to a later phase than the one currently in
   progress, the agent should flag this rather than silently doing it —
   e.g. don't write Go templates while Phase 1 is still incomplete.
2. **No phase begins until the prior phase's Definition of Done is fully
   met.** If asked to "just add Go support real quick," the agent should
   check Phase 1's DoD checklist first and say so if it isn't met.
3. **Folder structure is fixed by Section 8's mapping table.** The agent
   should not invent new top-level folders or reorganize
   `packages/template-generator/templates/` — new language support means
   adding a new subfolder (`templates/go/`, `templates/rust/`) in the
   existing shape, not restructuring.
4. **Reuse-vs-rebuild decisions are pre-made** (Section 9's three-tier
   table: reuse verbatim / reuse pattern / rebuild from scratch). The agent
   shouldn't re-derive whether e.g. `virtual-fs.ts` needs rewriting — it
   doesn't.
5. **Every new template category needs a matching entry in three places**,
   mirroring the original repo's pattern: `packages/types` (schema/enum),
   `template-handlers/` (which files to include), `processors/` (which
   deps to inject). Adding one without the others is incomplete work.
6. **When a task is ambiguous against this doc, the agent should ask
   rather than assume** — particularly for anything touching Section 12's
   Open Questions, which are explicitly unresolved.
7. **This doc should be updated, not silently diverged from.** If the
   agent finds during implementation that the plan needs to change (e.g. a
   template category doesn't map cleanly), it should propose an edit to
   this doc as part of that work, not just deviate in code.

Recommended: keep this file at the repo root (e.g. `PROJECT-SPEC.md`) and
reference it explicitly in `AGENTS.md` / `CLAUDE.md` so it's loaded into
context automatically, the same way Better-T-Stack's own repo uses
`AGENTS.md` and `CONTEXT.md` for this purpose.

---

## 16. Naming Decision Log

**Chosen name: TriStack**

**Rationale:**

- Short, single word — matches Better-T-Stack's own brevity.
- "Tri" directly communicates the three supported languages (Python, Go,
  Rust), echoing the same naming logic Better-T-Stack inherited from T3
  (three type-safe pillars: TypeScript, tRPC, Tailwind lineage).
- Reads naturally in CLI form: `npx create-tristack@latest my-api`.

**Names considered and ruled out** (checked against npm, PyPI, and GitHub
during this project's planning conversation):

| Name                   | Reason ruled out                                                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| PolyStack              | Multiple existing collisions: an npm scaffolding library, a hardware-control-stack GitHub org, a game-dev GitHub org      |
| StackForge / BackForge | Several active, same-category scaffolder CLIs already use these exact names                                               |
| Trident                | Taken by NetApp's storage product line and an unrelated AI coding CLI                                                     |
| Keel                   | Taken by an actual backend framework ("Keel — your production-grade backend from one file") — direct conceptual collision |
| Chimera                | Taken directly in-niche by ChimeraStack CLI, an existing Python-based multi-stack project scaffolder                      |
| Amalgam                | Taken by a .NET microservice-composition CLI tool                                                                         |

**Caveat:** this search covered npm, PyPI, and GitHub only — it is not a
substitute for a formal trademark clearance. Before public launch,
separately verify: domain availability, social handle availability, and
no conflicting registered trademark (especially checking for confusion
with "Better Stack," the existing monitoring/observability company, and
"Trident," the existing storage product — neither applies to TriStack
directly, but both were close enough during brainstorming to be worth a
final gut-check before launch).

**Package/branding conventions going forward:**

- npm package: `create-tristack` (published via `npm create tristack@latest`)
- GitHub org/repo: `tristack` or `<your-handle>/tristack`
- Config file: `tristack.jsonc` (or `.tristackrc`) — mirrors Better-T-Stack's
  `bts.jsonc` pattern (Section 8)
- CLI binary name: `tristack`
