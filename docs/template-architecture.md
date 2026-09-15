# Template Architecture & Project Structure Conventions

This reference defines how TriStack generates projects and how the template-authoring code must be organized. Follow it for every new framework, library, addon, or dimension so that generated output stays consistent across stacks and the template tree does not rot as the option catalog grows.

Applies to: `packages/template-generator/templates`, the template handlers in `packages/template-generator/src/template-handlers/`, the type/validation layer in `packages/types`, and the web builder option layer in `apps/web`.

## 1. Canonical generated layouts

Every generated project converges on one canonical skeleton per language. Frameworks, ORMs, migrations, addons, and other dimensions only fill predefined slots; they never invent new top-level shapes.

### Python — src-layout

```
pyproject.toml                 README.md  .gitignore  .dockerignore  env.example
ruff.toml                      Dockerfile docker-compose.yml         (alembic.ini if migrations)
migrations/                    env.py  script.py.mako  versions/           (per-migrations)
src/<pkg>/
  __init__.py
  config.py                    # settings — always present
  db.py                        # session/engine — slot: orm
  exceptions.py                # slot: framework
  main.py                      # entrypoint — slot: framework
  middleware.py                # slot: framework
  models.py                    # slot: orm
  api/                         # slot: framework (router + v1/routes/<feature>)
  repositories/                # slot: orm
  schemas/                     # slot: core (framework-agnostic)
  services/                    # slot: core (framework-agnostic)
  core/                        # new: shared helpers, auth, logging
  jobs/                        # new: task queues
tests/                         # pytest at repo root
```

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
migrations/                    # goose / golang-migrate
queries/  schema/              # sqlc sources
```

Go tests are co-located next to the code they test (`foo_test.go` beside `foo.go`) — the Go idiom.

### Rust — Cargo module layout

```
Cargo.toml  README.md  .gitignore  .dockerignore  env.example
Dockerfile  docker-compose.yml
src/
  main.rs                      # entrypoint — slot: framework
  config.rs                    # settings — slot: core (build once, reuse)
  error.rs                     # shared error type — slot: core
  state.rs                     # app state — slot: framework (axum) / core
  db.rs                        # slot: orm
  routes/                      # slot: framework (mod.rs + health.rs + items.rs)
  models/                      # slot: orm
  services/                    # slot: core
  auth/                        # new: auth libraries
  workers/                     # new: task queues
tests/                         # integration tests
```

Rust core ships `src/config.rs` (env settings, shared by all frameworks since they already depend on `dotenvy`). The remaining skeleton — `error.rs`, `state.rs`, `routes/`, `models/`, `services/` — is framework- or ORM-dependent by nature, so it is folded in when the first route/auth/service work lands rather than forced now; do not scatter modules into `main.rs` when a new framework or addon needs a home.

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
| `core`              | no                           | framework-agnostic code: Python `schemas/`/`services/`, Rust `config.rs`/`error.rs`/services | framework imports                               |
| `framework/<fw>`    | yes                          | entrypoint, routing/wiring, middleware, exceptions                                           | schemas/services/models (belong to core/orm)    |
| `orm/<orm>`         | no                           | session/engine, models, repositories                                                         | routes, schemas                                 |
| `migrations/<mig>`  | no                           | migration tooling only                                                                       | anything else                                   |
| addons / dimensions | per-library, declared        | exactly one capability                                                                       | anything outside its declared slots             |

- **Python:** the `framework/` trees host only what differs (`main.py`, `api/`, `middleware.py`, `exceptions.py`, and the items route); the framework-agnostic `src/schemas/` and `src/services/` live once in `python/core/` and are shared by FastAPI, Litestar, and Flask.
- **Go:** framework trees are thin (`cmd/api/main.go` + `internal/handler/handler.go`); the shared items service Example lives once in `go/core/internal/service/` (base holds only plumbing).
- **Rust:** core owns `src/config.rs` (all frameworks share it and read settings via `config::Config::from_env()`); framework trees only wire up `main.rs` and routes. Deeper skeleton (`error.rs`, `services/`) lands with the first route/auth/service work.

## 4. New dimensions (auth, frontend, jobs, observability, docs)

- Each library lives in `templates/<language>/<dimension>/<library>/`.
- Every file it contributes must target a documented slot from section 1:
  - Python auth → `src/<pkg>/core/auth.py`; Go auth → `internal/auth/`; Rust auth → `src/auth/`.
  - Task queues → `src/<pkg>/jobs/`, `internal/jobs/`, `src/workers/`.
  - Server-rendered frontends (htmx/templ) → Go `internal/web/` + `static/`; Python `static/` + `src/<pkg>/templates/` (Jinja2); Rust under the engine's expected dir (`templates/` for Tera/Maud) — always confirm the engine's actual layout.
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

- Rust's deeper `core` skeleton is intentionally partial: `error.rs`, `state.rs`, `routes/`, `models/`, `services/` are framework-/ORM-dependent and are added as part of the first Rust route/auth/service work. Do not grow `main.rs` until then.

> Resolved: the dead `copyDb` call in `python.ts` was removed (database handling lives in the base `env.example`); the shared Python `schemas/`/`services/` plus Go `internal/service` Example moved out of per-framework trees into `python/core/` and `go/core/` respectively; and the Rust frameworks no longer duplicate inline `PORT`/`APP_NAME` reading — they share `rust/core/src/config.rs`.
