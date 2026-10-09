# Template Architecture & Project Structure Conventions

This reference defines how TriStack generates projects and how the template-authoring code must be organized. Follow it for every new framework, library, addon, or dimension so that generated output stays consistent across stacks and the template tree does not rot as the option catalog grows.

Applies to: `packages/template-generator/templates`, the template handlers in `packages/template-generator/src/template-handlers/`, the type/validation layer in `packages/types`, and the web builder option layer in `apps/web`.

## 1. Canonical generated layouts

Every generated project converges on one canonical skeleton per language. Frameworks, ORMs, migrations, addons, and other dimensions only fill predefined slots; they never invent new top-level shapes.

### Python — `src` package

```
pyproject.toml                 README.md  .gitignore  .dockerignore  env.example
ruff.toml                      Dockerfile docker-compose.yml         (alembic.ini if migrations)
migrations/                    env.py  script.py.mako  versions/           (per-migrations)
src/                           # the importable package itself (`from src.main import app`)
  __init__.py
  config.py                    # settings — always present
  db.py                        # session/engine — slot: orm
  exceptions.py                # slot: framework
  main.py                      # entrypoint — slot: framework
  middleware.py                # slot: framework (FastAPI only: CORS)
  models.py                    # slot: orm
  api/                         # slot: framework (router + v1/routes/<feature>)
  repositories/                # slot: orm
  schemas/                     # slot: core (framework-agnostic)
  services/                    # slot: core (framework-agnostic)
  core/                        # new: shared helpers, auth, logging
  jobs/                        # new: task queues
tests/                         # pytest at repo root (pythonpath = ["."])
static/  src/templates/         # htmx frontend only
```

Django projects use Django's own layout instead of `src/`: `manage.py`, `config/` (settings, urls, wsgi/asgi), `apps/<app>/`, `templates/`, `static/`.

### Go — Golang Standard Layout

```
go.mod  Makefile  README.md  .gitignore  .dockerignore  env.example
Dockerfile  docker-compose.yml          (air.toml if addon)
cmd/api/main.go                # slot: framework
internal/
  config/config.go             # always present (base)
  service/item_service.go      # core service example (+ co-located item_service_test.go)
  db/db.go                     # slot: orm
  model/item.go                # slot: orm
  repository/item.go           # slot: orm
  handler/handler.go           # slot: framework
  middleware/                  # new: per-framework/stack middleware
  auth/                        # new: auth libraries
  jobs/                        # new: task queues
  web/                         # new: server-rendered frontends (templ/htmx)
pkg/                           # optional shared libraries
migrations/                    # goose
db/migrations/                 # golang-migrate
queries/  schema/              # sqlc sources
```

Go tests are co-located next to the code they test (`foo_test.go` beside `foo.go`) — the Go idiom.

### Rust — Cargo module layout

```
Cargo.toml  README.md  .gitignore  .dockerignore  env.example
Dockerfile  docker-compose.yml
src/
  main.rs                      # entrypoint, AppState, /health, route wiring — slot: framework
  config.rs                    # settings — slot: core (build once, reuse)
  api.rs                       # /api/v1/items handlers — slot: framework (ORM projects only)
  pages.rs                     # htmx page handlers — slot: framework (htmx projects only)
  models.rs                    # Item — slot: items (ORM projects only)
  service.rs                   # validation + ServiceError — slot: items (ORM projects only)
  db.rs                        # connect (creates the items table), insert, list — slot: orm
  views.rs                     # Askama template structs — slot: frontend/htmx/common
templates/                     # Askama templates (index.html, now.html, items.html)
  auth/                        # new: auth libraries
  workers/                     # new: task queues
```

Rust core ships `src/config.rs`. ORM projects get the canonical items Example: `models.rs` and `service.rs` (the `rust/items` tree) are framework-agnostic, every `db.rs` exposes the same async `Db`/`Error`/`connect`/`insert_item`/`list_items` API (Diesel runs on `spawn_blocking`), and each framework only maps `ServiceError` to a status in `api.rs`. `connect()` creates the `items` table when it is missing, and `main.rs` exits with `database not ready` if it fails. A framework has a single `main.rs` for both frontends; the htmx variant adds `pages.rs`, so there is no separate htmx copy to drift.

## 2. Template directory layout

```
templates/
  <language>/
    base/                      # language plumbing, copied first
    core/                      # framework-agnostic app skeleton
    framework/<framework>      # thin: entrypoint + routing/wiring + exceptions
    orm/<orm>                  # data-access layer only
    migrations/<migration>     # migration tooling
    addons/<addon>             # optional single-purpose capabilities
    auth/<library>             # auth libraries
    frontend/<library>         # frontend/fullstack: htmx, reflex, leptos, ...
    jobs/<queue>               # task queues: arq, celery, machinery, ...
    observability/<tool>       # logging/tracing: logfire, structlog, zap, tracing
    docs/<generator>           # mkdocs, sphinx, ...
    _gitignore / _dockerignore # literal dot-files (leading underscore becomes a dot)
```

Copy order within a language handler: `base` → `core` → `framework` → `orm` → `migrations` → dimension layers (`auth`, `frontend`, `jobs`, `observability`, `docs`) → `addons`. Later layers may add files; they must not clobber files from earlier layers unless the convention for that slot says the later layer owns it (e.g. `main.py`, `handler.go`).

## 3. Layering rules

| Layer               | May import the web framework | Must own                                                                                     | Must never duplicate                            |
| ------------------- | ---------------------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `base`              | no                           | language plumbing (manifest, env, gitignore, config settings)                                | business code, any third-party framework import |
| `core`              | no                           | framework-agnostic code: Python `schemas/`/`services/`, Rust `config.rs` | framework imports                               |
| `framework/<fw>`    | yes                          | entrypoint, routing/wiring, middleware, exceptions                                           | schemas/services/models (belong to core/orm)    |
| `orm/<orm>`         | no                           | session/engine, models, repositories                                                         | routes, schemas                                 |
| `migrations/<mig>`  | no                           | migration tooling only                                                                       | anything else                                   |
| addons / dimensions | per-library, declared        | exactly one capability                                                                       | anything outside its declared slots             |

- **Python:** the `framework/` trees host only what differs (`main.py`, `api/`, `middleware.py`, `exceptions.py`, and the items route); the framework-agnostic `src/schemas/` and `src/services/` live once in `python/core/` and are shared by FastAPI, Litestar, and Flask.
- **Go:** framework trees are thin (`cmd/api/main.go` + `internal/handler/handler.go`); the shared items service Example lives once in `go/core/internal/service/` (base holds only plumbing).
- **Rust:** core owns `src/config.rs` (all frameworks share it and read settings via `config::Config::from_env()`); framework trees only wire up `main.rs`, `api.rs` and `pages.rs`. The framework-agnostic items Example (`models.rs`, `service.rs`) lives in `rust/items` and is copied only for ORM projects.

## 4. New dimensions (auth, frontend, jobs, observability, docs)

- Each library lives in `templates/<language>/<dimension>/<library>/`.
- Every file it contributes must target a documented slot from section 1:
  - Python auth → `src/core/auth.py`; Go auth → `internal/auth/`; Rust auth → `src/auth/`.
  - Task queues → `src/jobs/`, `internal/jobs/`, `src/workers/`.
  - Server-rendered frontends (htmx/templ) → Go `internal/web/` + `static/`; Python `static/` + `src/templates/` (Jinja2); Rust Askama templates in the project-root `templates/` dir with the structs in `src/views.rs` — always confirm the engine's actual layout.
  - Observability → a `logging`/`tracing` file in the language's config area.
- Compatibility rules between a library and the Core Stack (language, framework, orm, database) are declared in the shared type layer, enforced by:
  - `apps/cli/src/validation.ts` (`validateResolvedConfigCompatibility`),
  - `apps/cli/src/prompts/config-prompts.ts` (silent prompts + navigable groups),
  - `apps/web/src/app/(home)/new/_components/utils.ts` (`analyzeStackCompatibility`),
  - and covered by the parity test in `apps/web/test/stack-builder-compatibility.test.ts`.
    Examples of rules to model: `axum-login` requires framework `axum`; Reflex is standalone (no framework needed); Celery pairs with any Python framework but needs a broker; `tortoise` has no Alembic support (already modeled).

## 5. Template authoring conventions

- Files end in `.hbs`; a leading `_` renders as a dotfile (`.gitignore` → `_gitignore`).
- Use helpers from `packages/template-generator/src/core/template-processor.ts` (`eq`, `ne`, `and`, `or`, `includes`) with the quoted-helper form for ORM/library-specific blocks:
  ```
  {{#if (eq orm "sqlmodel")}} ... {{else if (eq orm "tortoise")}} ... {{/if}}
  ```
- Kebab-case file names; directory names follow the target language's convention (Go: `internal/`; Python: snake_case packages; Rust: snake_case modules).
- Keep **one canonical Example** (`items` CRUD) so the feature shape is identical across frameworks — a new framework must reproduce the items example in its own idiom, not invent a different sample.
- Generated projects must never reference `packages/`, `templates/`, or repo-internal paths.

## 6. Procedural notes

- After any template or handler change: `bun run build` in `packages/template-generator` (re-regenerates `src/templates.generated.ts`, then rebuilds `dist`). CLI and web resolve the built `dist`; the web dev server must be restarted to pick up changes.
- Add tests with behavior changes: `apps/cli/test/generate-smoke.test.ts` (createVirtual shape assertions) and `apps/web/test/stack-builder-compatibility.test.ts` (option parity + compat rules).
- Run `bunx tsc --noEmit` in `apps/cli` and `apps/web`, `bun run check` at the root, and `bun run test` in `apps/cli` before finishing.

## 7. Known tech debt (fix when touching the area)

> Resolved: the dead `copyDb` call in `python.ts` was removed (database handling lives in the base `env.example`); the shared Python `schemas/`/`services/` plus Go `internal/service` Example moved out of per-framework trees into `python/core/` and `go/core/` respectively; and the Rust frameworks no longer duplicate inline `PORT`/`APP_NAME` reading — they share `rust/core/src/config.rs`.
