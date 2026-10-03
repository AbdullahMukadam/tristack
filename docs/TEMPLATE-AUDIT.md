# TriStack — Template Quality Audit

Audit of every file under `packages/template-generator/templates/` (177 files), run 2026-10-02. Work through it **one language at a time** in the order below; tick items off as they land and log anything non-obvious in `docs/JOURNAL.md`.

**Severity**

- **P0**: the generated project does not compile or does not start.
- **P1**: broken for a specific combination (database, addon, package manager), or unsafe.
- **P2**: works, but quality, lint, consistency, or parity problems.

**Evidence**

- **confirmed**: reproduced (rendered or compiled).
- **reviewed**: read in the template, high confidence.
- **likely**: needs a boot or build to confirm.

**Coverage reality:** `apps/cli/test/boot-matrix.test.ts` only boots Python + SQLite. No Go, Rust, Postgres, or MySQL combination has ever been booted by the harness, which is why most P0/P1 items below went unnoticed.

## Recommended order

1. **Python**: marked shipped (ROADMAP Phase 1) and already distributed via `uvx tristack`, so users hit these today. The boot harness exists, so every fix is verifiable.
2. **Go**: Phase 2 is in progress, and both P0s are small. Extend the harness with the Go rows from ROADMAP "Go boot coverage" as part of the work.
3. **Rust**: Phase 3 is planned. The largest job is that the canonical items Example is missing entirely, so it needs real feature work, not just fixes.

For each language: fix P0 → add boot-matrix cases that would have caught them → fix P1 → P2.

---

## Python

### P0

- [x] **PY-1 Litestar + HTMX regresses the 2026-09-30 Litestar fixes** (reviewed against JOURNAL). The Litestar fixes were applied to `framework/litestar/` but not to the HTMX overlay:
  - `frontend/htmx/app/src/main.py.hbs` passes `lifespan=` with an async context manager (needs `on_startup=[...]`).
  - The same file passes `middleware=[RequestLoggingMiddleware]` as a class (needs an instance).
  - `frontend/htmx/app/src/web.py.hbs` does `from litestar import Provide` and uses it as a parameter default (needs `litestar.di.Provide` inside `dependencies={...}`).
  - That handler is also an `async def` with `sync_to_thread=False`.
  - **Fixed 2026-10-02.** Boot cases `litestar-sqlmodel-htmx` and `litestar-tortoise-htmx` were added. Both fail on the old templates and pass on the new ones. The Python and Go HTMX runtime profiles now probe `/`, and probe `/web/items` only when an ORM exists (that route isn't registered without one).
- [x] **PY-2 mypy addon config is invalid** (confirmed: `Invalid python version '"3.12"'`). `addons/mypy/mypy.ini.hbs` is written in TOML syntax inside an INI file (`"3.12"`, `plugins = [...]`, `[[tool.mypy.overrides]]`). The `pydantic.mypy` plugin is also enabled for Django projects, which don't install pydantic.
  - **Fixed 2026-10-02.** The config is now valid INI. Non-Django projects use `pydantic.mypy`; Django projects use the `django-stubs` and `djangorestframework-stubs` plugins, which are added to the uv and pip dev dependencies. mypy now runs, and the code-level errors it reports are tracked in PY-23.

### P1

- [x] **PY-3 Flask turns every HTTP error into 500** (confirmed). The `errorhandler(Exception)` catch-all also caught Werkzeug `HTTPException`, and pydantic `ValidationError` became a 500.
  - **Fixed 2026-10-02.** The catch-all is gone. There are explicit handlers for `ValidationError` (422) and `HTTPException` (JSON body, original status), and the body is parsed with `ItemCreate.model_validate(request.get_json())`.
  - Verified by real requests: unknown route → 404, non-JSON → 415, missing field → 422, all as JSON.
- [x] **PY-4 Flask + async ORM across event loops** (confirmed on Neon Postgres: every DB request failed with `InterfaceError: cannot rollback; the transaction is in error state`). The asyncpg connection opened during `asyncio.run(init_db())` was pooled and then reused by later requests, each running in its own event loop.
  - **Fixed 2026-10-02 for SQLAlchemy and SQLModel.** Flask projects create the async engine with `poolclass=NullPool`, so each request opens its own connection in its own loop. Verified on Neon: POST, POST, GET all succeed.
  - **Flask + Tortoise is now rejected** (CLI validation, prompt filter, web Stack Builder rule, tests, and `cli/compatibility.mdx`). Tortoise keeps its startup connection (and, on SQLite, aiosqlite's non-daemon worker thread) alive, so the process can't exit (pytest hung after passing). Closing the connection after init breaks every request (`No TortoiseContext is currently active`).
- [x] **PY-5 Litestar exception and route kwargs** (confirmed: an unknown route returned 500).
  - **Fixed 2026-10-02.** The catch-all `Exception` handler is gone (Litestar already logs and returns a generic 500). The FastAPI-only `response_model=` kwarg is removed from the Litestar routes. Verified that unknown routes return 404.
- [ ] **PY-6 MySQL schema fails** (reviewed). `String` and `str` columns had no length.
  - **Partly fixed 2026-10-02.** The SQLAlchemy model uses `String(36)`/`String(255)`, and the SQLModel model uses `max_length=36`/`255`. Verified on Neon Postgres (`varchar(36)`, `varchar(255)`).
  - Still needs a real MySQL run to close (no MySQL server or Docker on this host).
- [x] **PY-7 SQLModel + Postgres datetime.** **Not reproducible** with current SQLModel (≥0.0.27 maps `datetime` to `timestamp with time zone`; tested on Neon with the old model). The model now declares `sa_column=Column(DateTime(timezone=True), nullable=False)` explicitly, so the behaviour no longer depends on the SQLModel version. Verified on Neon.
- [x] **PY-8 Django production safety.** **Fixed 2026-10-02:**
  - `wsgi.py`/`asgi.py` default to `config.settings.production` (`manage.py` stays on development).
  - `production.py` requires `DJANGO_SECRET_KEY` (fails fast) and filters empty `ALLOWED_HOSTS`/`CORS_ALLOWED_ORIGINS`.
  - Database settings read `DB_NAME`/`DB_USER`/`DB_PASSWORD`/`DB_HOST`/`DB_PORT` (listed in `env.example`; the unused `DJANGO_DEBUG` was removed).
  - The HTMX users fragment shows the username and join date instead of the email.
  - The README now says accurately that Django reads environment variables directly.
  - Verified: `import config.wsgi` without the key raises `KeyError`; with it, `DEBUG=False`, an allowed host returns 200 and any other host returns 400, and the `DB_*` values are honoured. ruff, format, mypy, and pytest are clean.
- [x] **PY-9 Dockerfile.** **Fixed 2026-10-02:**
  - uv projects copy `pyproject.toml` + `uv.lock*`, run `uv sync --no-dev --no-install-project`, and run from `.venv` (no `uv run`, so nothing re-syncs at start). `uv` is pinned to `ghcr.io/astral-sh/uv:0.12` (tag confirmed on the registry).
  - pip and Poetry projects use `pip install .` (both are PEP 517 builds).
  - The container runs as a non-root `app` user that owns `/app`, so SQLite can write.
  - `framework none` gets `CMD ["python", "-m", "src.main"]`.
  - `.dockerignore` excludes local `*.db`/`*.sqlite3`.
  - Verified without Docker (it isn't installed here): the uv steps leave only runtime packages and `uvicorn` serves `/health` and creates an item; `pip install .` installs runtime packages only. **The image itself has not been built.**
  - Flask still runs the Werkzeug dev server inside the container. Switching to a production server (gunicorn) is a follow-up.
- [x] **PY-10 CI assumes uv.** **Fixed 2026-10-02:** the workflow branches on the package manager (uv: `uv sync`/`uv run`; pip: `pip install -e ".[dev]"`; Poetry: `pipx install poetry`, `poetry install`, `poetry run`) and adds a `ruff format --check` step. pip dev extras follow the selected addons and include `httpx` (needed by the FastAPI/Litestar `TestClient`); Poetry gained an addon-aware `[tool.poetry.group.dev.dependencies]`.
  - Verified by running each path's commands locally: pip in a fresh 3.14 venv; Poetry via `uvx poetry` for FastAPI, Litestar + Tortoise + MySQL, Flask + Alembic, and Django. ruff, format, mypy, and pytest are clean in all of them. All rendered `ci.yml` files parse.
  - Poetry turned up three more bugs, all fixed:
    - `python = ">=3.12"` had no upper bound, so every Poetry + Litestar project failed to resolve (litestar requires `<4.0`). It is now `>=3.12,<4.0`.
    - `tortoise-orm = "^0.24"` resolved to 0.24.2, which lacks the `_enable_global_fallback` argument our `db.py` passes. It is now `^1.1`, matching the version the uv projects are tested with.
    - For Django, `mypy = "^2.4"` conflicted with the stubs' `compatible-mypy` extra (`mypy<2.4`), so mypy is now left to that extra.
- [ ] **PY-31 Flask + Postgres/MySQL without Alembic needs a reachable database at import** (known limitation). `create_app()` runs `init_db()` (create tables) at import, so even `pytest` needs the database up. The health tests for FastAPI/Litestar no longer enter the lifespan, so they don't need a database.
- [x] **PY-11 pytest + framework `none`.** **Fixed 2026-10-02:** the bare project gets `test_main` (it checks the greeting via `capsys`).
- [x] **PY-24 Poetry + SQLModel crashes at import** (confirmed). `sqlmodel = "^0.0.22"` pins exactly 0.0.22, which raises `PydanticUserError: Field 'id' requires a type annotation` with current pydantic (2.13). Bisected: 0.0.22–0.0.26 fail, 0.0.27+ work.
  - **Fixed 2026-10-02:** `sqlmodel = ">=0.0.27,<0.1"`. The Poetry Litestar floor is raised to `^2.23` for `NamedDependency`. Untested with Poetry itself (it isn't installed on this host).

- [x] **PY-25 Alembic without an ORM** (found by code review: `--orm none --migrations alembic` was accepted, and the generated `migrations/env.py` hit a `NameError` on `get_settings`/`target_metadata`, with sqlalchemy not even installed). **Fixed 2026-10-02:** rejected in CLI validation and the flag-driven migrations prompt; the web Stack Builder switches it to none and disables Alembic; tests added.
- [x] **PY-26 ORM without a database** (found by code review: `--orm sqlmodel --database none` was accepted, so `settings.database_url` didn't exist and the app crashed at import). The same combination also breaks Go and Rust (`databaseURL()` has no return branch). **Fixed 2026-10-02:** rejected for every language in CLI validation; the web Stack Builder switches the database to SQLite and disables `none`; tests added. The interactive prompts never offered it.

### P2

- [x] **PY-12 `ruff check` fails on generated code.** **Fixed 2026-10-02.**
- [x] **PY-13 Formatting** (one blank line between top-level definitions, stray blank lines after headers, missing final newlines). **Fixed 2026-10-02.**
- [x] **PY-14 SQLAlchemy model uses legacy `Column(...)`.** **Fixed 2026-10-02:** it uses `Mapped[...]`/`mapped_column`.
- [x] **PY-15 Dependency drift between package managers.** **Fixed and decided 2026-10-02:** the Poetry pins (PY-24, PY-10), the addon-aware pip/Poetry dev dependencies (PY-10), and `psycopg` only with Postgres are fixed. **Decision:** lockfiles are the pin. `pyproject.toml` keeps compatible ranges, and the `uv.lock`/`poetry.lock` written at install is what makes a project reproducible. The PRD wording now says this (D-3).
- [x] **PY-16 Package named `src`.** **Decided 2026-10-02: keep it.** `src` itself is the package (`from src.main import app`). ADR 0002 has an amendment and template-architecture §1/§4 are updated to match, instead of moving every template to `src/<pkg>/`. (`pythonpath` is now `["."]`.)
- [x] **PY-17 Lifecycle cleanup.** **Fixed 2026-10-02:** each ORM's `db.py` has `close_db()` (`engine.dispose()` / `Tortoise.close_connections()`), called after `yield` in the FastAPI lifespan and via `on_shutdown` in Litestar. Flask uses `NullPool`, so there's nothing to close. Verified: FastAPI and Litestar start up and shut down cleanly through the `TestClient` context.
- [x] **PY-18 Logging.** **Fixed 2026-10-02 by removal:** the request-logging middleware printed nothing in FastAPI and Flask (logging isn't configured) and duplicated uvicorn's access log in Litestar. The Litestar and Flask `middleware.py` files are gone; FastAPI's keeps only the CORS setup.
- [x] **PY-19 Django dead code and drift.** **Fixed 2026-10-02:**
  - The HTMX overlay's duplicate `settings/base.py` and `config/urls.py` were merged into the Django framework files (`{{#if (eq frontend "htmx")}}` for `apps.web` and the web URLs; `STATICFILES_DIRS` is always set) and deleted.
  - The empty `apps/core/utils.py` was deleted.
  - `UserListView` now uses `services.get_users()` (active users), so the selectors/services pattern is real rather than dead. The services file is kept because `generate-smoke.test.ts` asserts it.
- [x] **PY-20 Example parity with Go.** **Fixed 2026-10-02:** `ItemCreate.name` is stripped and limited to 1–200 characters (`StringConstraints`), and all three repositories list `created_at` newest first. Verified: blank and 201-character names are rejected (FastAPI/Flask 422, Litestar 400, its convention) and the list order is newest first.
- [x] **PY-21 Alembic leftovers.** **Fixed 2026-10-02:** `migrations/versions/README.md` (with its hard-coded `uv run`) was replaced by an empty `.gitkeep` (the generated README already documents the Alembic commands), and the leading blank line in `script.py.mako` was removed.
- [x] **PY-22 Stray `src/config.py` in Django projects** (confirmed; it also broke Django's pytest: with `pythonpath = ["src"]`, `config` resolved to the stray file → `No module named 'pydantic_settings'`).
  - **Fixed 2026-10-02:** the Python handler filter matched a stale `/{{project_slug}}/` path; it now excludes `/src/` for Django.
- [x] **PY-23 `mypy --strict` fails on fresh projects.** **Fixed 2026-10-02:**
  - `AsyncSession` is re-exported from each ORM's `db.py`.
  - FastAPI uses `Annotated` dependencies.
  - Litestar handlers and middleware are typed.
  - Litestar uses `NamedDependency` (removes the 3.0 deprecation warnings).
  - Django: generics and stubs.
  - Tests are typed.
- [x] **PY-27 Long project names break `ruff format`** (found by code review). The single-line Postgres `database_url` went past 100 characters once the slug was longer than about 20, and ruff collapses parentheses again when the line fits, so no single static layout works. **Fixed 2026-10-02:** `config.py` declares `DATABASE_NAME = "<slug>"` and builds the URL with an f-string (the longest variant is 97 characters for any slug). Guarded by the `q-postgres-with-a-long-project-name` quality case.
- [x] **PY-28 Comments in Python templates** (AGENTS.md rule; found by code review). There were `# noqa` comments in Django `settings/*.py`, Alembic `env.py`, and SQLModel `db.py`, and `# SQLite:`/`# Postgres:`/`# MySQL:` lines in `env.example`. **Fixed 2026-10-02:** imports are used directly (`Item.metadata`), Django star imports get a `[lint.per-file-ignores]` entry in the generated `ruff.toml`, and the `env.example` comment lines are removed. Go and Rust `env.example` still have the same comment lines (see X-4).
- **Guard:** `apps/cli/test/python-quality.test.ts` (`bun run test:quality`, gated on `BTS_QUALITY=1` and `uv`) generates 9 representative projects with ruff, mypy, and pytest and requires all four checks to pass. A wider 17-combination run passed too. Still untested: pip/Poetry variants (no Python 3.12 or Poetry on this host) and MySQL.
- Not ours: FastAPI's `TestClient` emits a Starlette deprecation warning (`httpx` → `httpx2`). Revisit when Starlette finalizes it.

---

## Go

### P0

- [ ] **GO-1 Every Go + HTMX app fails at startup** (confirmed by rendering). In `frontend/htmx/common/internal/web/templates/base.html.hbs:7` and `index.html.hbs:1`, the `{{end}}` isn't escaped, so Handlebars deletes it. The emitted `{{block "title" .}}{{.AppName}}</title>` has no closing `end`, and `template.ParseFS` fails. Fix: `\{{end}}`.
- [ ] **GO-2 sqlx `EnsureSchema` does not compile** (confirmed with `go build`: `undefined: db`). In the uncommitted `orm/sqlx/internal/db/db.go.hbs`, `db` is the package name, not a variable; take `*sqlx.DB` as a parameter. Only `framework/gin/cmd/api/main.go.hbs` calls it, so chi, echo, fiber, stdlib, and every HTMX `main.go` would still have no `items` table. ROADMAP "Go boot coverage" row 3 claims this path works.

### P1

- [ ] **GO-3 MySQL DSN format** (reviewed; also flagged by code review). This also applies to `goDatabaseURL` in `packages/types/src/runtime-profile.ts:174`, which feeds goose `GOOSE_DBSTRING` (needs the bare `user:pass@tcp(host:port)/db`) and golang-migrate (needs `mysql://user:pass@tcp(host:port)/db`). `go-sql-driver/mysql` and `gorm.io/driver/mysql` need `root:password@tcp(localhost:3306)/db?parseTime=true`, not `mysql://...`. Without `parseTime=true`, scanning into `time.Time` fails. Affects gorm, sqlx, sqlc, and `env.example`.
- [ ] **GO-4 MySQL rejects `id TEXT PRIMARY KEY`** (reviewed). Affects goose, golang-migrate, `orm/sqlc/schema/schema.sql.hbs`, and GORM's `string` primary key (`longtext`). Use `VARCHAR(36)`.
- [ ] **GO-5 golang-migrate driver mismatch** (reviewed; also flagged by code review). The same pairing exists in the CLI prepare step: `packages/types/src/runtime-profile.ts:202`, and `apps/cli/test/runtime-profile.test.ts:116` asserts the broken pair, so that test must change with the fix. If switching to the `postgres://` scheme, add `?sslmode=disable` for local servers without SSL. The Makefile builds with `-tags postgres` but the URL scheme is `pgx://`, which is registered only under the `pgx` tag. The `sqlite3` tag needs CGO (the mattn driver), while the app uses pure-Go modernc.
- [ ] **GO-6 goose `GOOSE_DBSTRING` defaults to `slug.db`** for Postgres and MySQL (`base/Makefile.hbs`).
- [ ] **GO-7 sqlc gaps.** With migrations `none` the table is never created. The Docker build doesn't run `sqlc generate`, so the image fails to build unless the code was generated locally. CI uses `sqlc@latest` while the Makefile uses `v1.27.0`.
- [ ] **GO-8 Docker + SQLite.** The distroless image runs as `nonroot`, but `/app` is owned by root, so the SQLite file can't be created.
- [ ] **GO-9 golangci-lint** (likely). The config is in v1 format and `golangci-lint-action@v6` is used without a pinned `version`. Pin both.

### P2

- [ ] **GO-10 Comments in a template.** `frontend/htmx/common/internal/web/web.go.hbs` has `//` doc comments, which violates the AGENTS.md "no comments in templates" rule.
- [ ] **GO-11 Catch-all route.** `mux.HandleFunc("GET /", ...)` in `web.go` serves the home page for every unknown path; use `"GET /{$}"`.
- [ ] **GO-12 CI:**
  - The gofmt check only runs when the `air` addon is selected.
  - `go mod tidy` mutates files in CI; use `go mod download` with `go mod verify`, or fail on a diff.
  - Go is `stable` in CI but `1.22` in the Dockerfile and `go.mod`.
- [ ] **GO-13 Makefile and gitignore.** `make fmt` only lists files. `.gitignore` has both `bin/` and `!bin/`.
- [ ] **GO-14 Small correctness items:**
  - `time.Now()` should be `time.Now().UTC()`.
  - No `http.MaxBytesReader` on request bodies.
  - `SetMaxOpenConns(25)` on SQLite invites `database is locked`.
  - Repositories return interfaces ("accept interfaces, return structs").
- [ ] **GO-15 Routes.** Go serves `/items`; PRD §7 and Python use `/api/v1/items`. Decide on one and record it.

---

## Rust

### P0

- [ ] **RS-1 actix tests don't compile** (reviewed). `framework/actix-web` and the HTMX actix `main.rs` pass a bare `App` to `test::call_service`; it needs `test::init_service(App::new()...).await`.
- [ ] **RS-2 Rocket + Diesel doesn't compile.** `framework/rocket/src/main.rs.hbs` and the HTMX Rocket file always do `db::connect().await`, but Diesel's `connect` is synchronous. The other frameworks already branch on this.
- [ ] **RS-3 Rocket + HTMX doesn't compile.** `rocket::response::content::Html` is `RawHtml` in Rocket 0.5.
- [ ] **RS-4 Loco doesn't compile and isn't Loco.** `#[tokio::main]` is used with no `tokio` dependency. `loco-rs = "0.4"` is years old. `main` never uses Loco. Either build a real Loco app or drop the option.
- [ ] **RS-5 CI workflow is invalid.** In `addons/github-actions`, `components: [rustfmt, clippy]` is a YAML list; action inputs must be strings (`components: rustfmt, clippy`).

### P1

- [ ] **RS-6 Rocket binds 127.0.0.1.** `..Default::default()` keeps the default address while the log says `0.0.0.0`, so it's unreachable from Docker. Set `address`.
- [ ] **RS-7 SQLite URLs:**
  - SeaORM gets `slug.db` with no scheme, so it can't pick a driver.
  - sqlx doesn't create a missing file.
  - Use `sqlite://slug.db?mode=rwc` (and match it in `env.example`).
- [ ] **RS-8 Database errors are swallowed.** Every `main.rs` connects, logs `database not ready`, drops the pool, and serves anyway. Fail fast and keep the pool in app state.
- [ ] **RS-9 Dockerfile:**
  - `rust:1.80` is likely too old for current crate MSRVs (there's no `Cargo.lock`).
  - The "cache" step builds twice and caches nothing.
  - The `debian-slim` runtime lacks `libpq5` and `libmysqlclient` for Diesel.
  - It runs as root.
- [ ] **RS-10 `cargo fmt --check` and clippy fail** on generated code: unsorted `use` lists in actix, and an unused `get` import that breaks `clippy -D warnings`.

### P2

- [ ] **RS-11 No items Example.** Rust only serves `/health` (plus `/web/now`). This violates template-architecture §5 ("one canonical Example"). It's the deferred `error.rs`/`state.rs`/`routes/` work in §7.
- [ ] **RS-12 Health content type.** Axum, Rocket, Salvo, and Warp return the JSON string as `text/plain`; use the framework's JSON responder.
- [ ] **RS-13 Inconsistencies:**
  - Salvo `index` reads `APP_NAME` directly instead of using `Config`.
  - Salvo has no test.
  - Warp `path("health")` has no `end()`.
  - `serde`/`serde_json` are unused dependencies.
- [ ] **RS-14 Empty addons.** `cargo-watch` and `clippy` produce no files (clippy only appears as a CI step).

---

## Cross-cutting

- [ ] **X-1 docker-compose.** There was no app service (only the database), and with SQLite or no database `services:` rendered empty, which is invalid. **Python fixed 2026-10-02:** there is always an `app` service built from the Dockerfile, wired to `db` with the right `DATABASE_URL`/`DB_HOST` when there is one; all rendered variants parse. Go and Rust are still open.
- [ ] **X-2 HTMX from unpkg without SRI** (all three HTMX base templates). Add `integrity` and `crossorigin`, or vendor it into `static/`.
- [ ] **X-4 Comments in Go and Rust `env.example`.** `# SQLite:`/`# Postgres:`/`# MySQL:` lines break the AGENTS.md no-comments rule (already removed from Python, PY-28).
- [ ] **X-3 Boot matrix coverage.** Add at least one Postgres and one MySQL case per language (service container in CI), plus the Go and Rust slices (ROADMAP B3/B4).

## Docs drift found during the audit

- [ ] **D-1** ROADMAP Phase 1 says "shipped", and its exit criterion is phrased as universal, but only SQLite was ever booted (see X-3, PY-6, PY-7).
- [ ] **D-2** ROADMAP "Go boot coverage" row 3 (`EnsureSchema` bootstrap) is listed as covered, but the working-tree code doesn't compile (GO-2).
- [x] **D-3** (fixed 2026-10-02: the PRD says lockfile-reproducible, per the PY-15 decision) PRD §1 and §6 promise "dependency-pinned" scaffolds; uv and pip output is unpinned (PY-15).
- [ ] **D-4** PRD §7 lists `/api/v1/items` for every stack. Go serves `/items` and Rust has no items routes (GO-15, RS-11).
- [ ] **D-5** template-architecture §1 shows Python `src/<pkg>/`, but templates use `src/` itself as the package. It shows Go `migrations/`, but golang-migrate writes `db/migrations/`. §4 suggests Tera/Maud for Rust; the templates use Askama. _Python part fixed 2026-10-02 (PY-16 decision); the Go `migrations/` vs `db/migrations/` and Rust Askama parts are still open._
- [ ] **D-6** `docs/agents/issue-tracker.md` points to `AbdullahMukadam/tristack`; AGENTS.md says `AmanVarshney01/create-better-t-stack`. Pick one.
- [ ] **D-7** ARCHITECTURE §1 still mentions a `create-tristack` command; AGENTS.md says the CLI is only `tristack` / `uvx tristack`.
