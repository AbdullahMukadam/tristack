# TriStack — Roadmap

Phased plan across languages. Status legend: **Done** · **In progress** · **Planned** · **Gap**.

Feature planning flow: **GitHub Issue (proposal)** → **ADR (decision)** → **PRD section (requirements)** → **JOURNAL entry (shipped)**.

> **Template quality audit (2026-10-02):** the P0/P1 defects found in all three languages are closed (see `docs/TEMPLATE-AUDIT.md`). Remaining open items are verification gaps, not shipping defects: PY-6 (real MySQL run), PY-31 (documented limitation), X-1 (Compose probe replays) and X-3 (database coverage in CI).

## Phase 1 — Python (shipped)

- [x] Python scaffold across frameworks: FastAPI, Litestar, Django, Flask (plus `none`).
- [x] ORMs: SQLModel (default), SQLAlchemy, Tortoise (plus `none`) — live-verified end-to-end for the Tortoise path (context-scoped API, `tzdata` on Windows, UVU str coercion).
- [x] Migrations: Alembic (revision + upgrade) and `none` (auto-create via `create_all` / Tortoise `generate_schemas`).
- [x] Package managers: `uv`, `poetry`, `pip`.
- [x] Addons: docker, ruff, mypy, pytest, github-actions.
- [x] htmx frontend layer (home page + `/web/items` fragment).
- [x] ORM/framework-aware README generation (migrate vs auto-create vs Django `manage.py migrate`).
- [x] Distribution: `uvx tristack`, pip/pipx, uv tool.

Exit: fresh scaffold installs, boots, and serves `/health`, `/api/v1/items`, `/web/items`. Verified by the Python Matrix Smoke slice on SQLite plus manual Neon Postgres runs (PY-4/PY-7); the MySQL variants are the PY-6 open item.

## Phase 2 — Go (shipped)

- [x] Curl/PowerShell installers for the `tristack` binary (asset naming verified: `tristack-windows-x64.exe.zip`).
- [x] Template parity across frameworks: Gin, Fiber, Echo, Chi, stdlib (plus `none`).
- [x] ORMs: GORM, SQLC, SQLx (plus `none`).
- [x] Migrations: goose, golang-migrate, `none`.
- [x] Addons: docker, air, golangci-lint, github-actions.
- [x] htmx frontend layer (`/web/items`).

Exit: every option combination above scaffolds, builds (`go build ./cmd/api`), and serves the documented routes. Satisfied as of the template quality audit (2026-10-03/04): 13 Go boot cases pass and the `add-deps.ts` framework-stub gap is closed.

## Phase 3 — Rust (shipped)

- [x] Template parity across frameworks: Axum, Actix-Web, Rocket, Warp, Salvo (plus `none`).
- [x] ORMs: SeaORM, Diesel, SQLx (plus `none`).
- [x] Migrations: `none` (Rust option set has no standard tool yet).
- [x] Addons: docker, cargo-watch, clippy, github-actions.
- [x] htmx frontend layer (`/web/now` server-time fragment, plus `/web/items` with an ORM).

Exit: every combination above scaffolds, builds (`cargo build`), and serves the documented routes. Satisfied as of RS-11 (2026-10-08): 40 generated Rust projects verified in WSL, and every ORM additionally ran against Neon Postgres and MariaDB 11 by hand. Shipping those runs as persistent boot cases is the open Rust part of B4.

## Boot verification

Boot verification is the phase plan for proving a scaffolded project actually **boots** and serves its documented routes, not just that its tree generates. It reuses the shared runtime profile (`packages/types/src/runtime-profile.ts`) as the single source of truth for install, prepare, run, and probe commands, so the CLI, the generated README, and the harness never drift.

- [x] **B1 — shared runtime profile**: `getRuntimeProfile(config)` exposing `install`, `prepare`, `run`, `probes`, and `oneshot` kind, exported from `packages/types` and consumed by `readme-generator.ts`, `create-project.ts`, and `install-dependencies.ts`. Covered by `apps/cli/test/runtime-profile.test.ts`.
- [x] **B2 — Python Matrix Smoke**: `apps/cli/test/boot-matrix.test.ts` runs the **Matrix Smoke** tier over Python Core Stack combinations — generate → **Filesystem Scaffolding** → install → prepare → run → probe → kill process tree. Gate with `BTS_BOOT=1` so it never slows the **Default Suite**.
- [x] **B3 — Go + Rust slices on the shared harness**: Go and Rust boot cases run in the same Matrix Smoke (Go slice detailed below) and the template defects they exposed are fixed.
- [ ] **B4 — CI promotion + Rust Matrix Job**: run Matrix Smoke (with Postgres/MySQL service containers) in regular CI, then extend the harness to the Rust **Exhaustive Matrix** (separate job, toolchain-gated).

Current Python Matrix Smoke slice (11 cases): FastAPI SQLModel/SQLAlchemy/Tortoise with Alembic and with `none` plus htmx; Litestar SQLModel + Tortoise; Flask SQLAlchemy; Django; bare Python `none`; plus a `pip` and a `poetry` case. Cases declare `requiresTool` / `requiresPython` and **skip with a logged reason** when the host toolchain is absent (e.g. `poetry not installed`, `python 3.11 < 3.12`) rather than failing.

### Go boot coverage

Go's axes decompose into framework (gin, fiber, echo, chi, stdlib — each with its own routing/wiring), ORM (gorm, sqlx, sqlc — each with its own repository and `internal/db` package), migrations (goose, golang-migrate, `none`), database (sqlite, postgres, mysql), the htmx frontend overlay, and addons (docker, air, golangci-lint, github-actions). ORM is the highest-value axis because each ORM ships distinct data-access code; framework differences are confined to routing and all expose the same `/health`, `GET /api/v1/items`, `POST /api/v1/items`, and `PORT` contract. Addons and htmx are independent overlays and are exercised separately rather than crossed through every combination.

A minimal high-coverage manual set is 8 combinations:

| #   | framework | orm  | migrations     | db       | what it covers                                        |
| --- | --------- | ---- | -------------- | -------- | ----------------------------------------------------- |
| 1   | gin       | gorm | goose          | sqlite   | external migrations, modernc pin, `updated_at` column |
| 2   | gin       | gorm | none           | sqlite   | `AutoMigrate` on startup                              |
| 3   | gin       | sqlx | none           | sqlite   | `EnsureSchema` bootstrap                              |
| 4   | gin       | sqlx | golang-migrate | sqlite   | golang-migrate DSN and build tags                     |
| 5   | gin       | sqlc | goose          | postgres | codegen plus postgres DSN                             |
| 6   | fiber     | gorm | goose          | sqlite   | a second framework against the same ORM               |
| 7   | chi       | sqlc | none           | postgres | sqlc without migrations                               |
| 8   | none      | none | none           | none     | bare oneshot entrypoint                               |

The boot matrix also runs `chi-sqlx-none`, `chi-sqlc-none`, `gin-sqlx-migrate` (golang-migrate on the pure-Go `sqlite` tag, no CGO needed) and one HTMX case per framework (`stdlib-sqlx-htmx`, `gin-gorm-htmx`, `chi-sqlc-htmx`, `echo-gorm-htmx`, `fiber-sqlx-htmx`), all on SQLite.

If time is short, rows 1, 3, 5, and 8 cover gorm, sqlx, sqlc, and bare. Known host limit: the postgres rows need a live server to run — their `sqlc generate` step works regardless.

Exit: every Matrix Smoke case installs, boots, and returns the expected status for each probe; a missing toolchain is a skip, never a pass.

## Cross-cutting backlog

- [ ] **Agent / MCP surface**: expand the JSON-first `create-json` and any MCP tooling alongside the **Create Path** and **Add Path** (see `docs/CONTEXT.md`).
- [ ] **Add Path**: add capabilities to an existing TriStack project.
- [ ] New dimensions: auth libraries, observability (logging/tracing), jobs/task queues, docs generators — each in its own layered slot (see `docs/template-architecture.md`).
- [ ] Root `package.json` stale `"cli"` script (`node dist/cli.js` vs actual `dist/cli.mjs`).
- [ ] Matrix coverage expansion (Matrix Smoke in CI + Full Matrix Job).
- [ ] Web: expand docs site, addons catalog parity, Stack Builder enhancements.

## Progress notes

- Phase 1 shipped as of v0.1.x; subsequent fixes landed in the templates (Tortoise ORM context scoping, Windows `tzdata`, Pydantic v2 UUID→str, README migration steps, Django/Litestar run commands, Windows installer asset naming).
- Phase 2 shipped as of the boot-matrix work (2026-10-01 to 2026-10-04): all Go P0/P1/P2 audit items closed, 13 Go boot cases added, and the pre-existing `add-deps.ts` stub gap resolved.
- Phase 3 shipped across PRs #7, #10, #12 and the 2026-10-07/08 fixes: the canonical items Example landed for every framework/ORM, warp and salvo included, and 40+ Rust boot cases were verified in WSL.
- See `docs/JOURNAL.md` for the gotchas logged along the way.
