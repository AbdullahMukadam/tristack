# Canonical generated layouts and layered template tree

We will grow the template catalog (new frameworks, libraries, dimension layers) against a single reference convention: one canonical generated layout per language (Python src-layout, Go standard layout, Rust cargo module layout) plus a strict layering of the template tree (`base` → `core` → `framework` → `orm` → `migrations` → dimensions → `addons`) in which shared, framework-agnostic code lives only in `core` and framework trees stay thin. New library categories get fixed `templates/<language>/<dimension>/<library>` locations with compatibility rules declared once in the shared type layer and enforced by CLI validation, CLI prompts, and web builder compatibility analysis. The convention is documented first in `docs/template-architecture.md`; existing templates are migrated onto it incrementally as each area is next touched, not in one blocking refactor.

## Considered Options

- Keep the status quo: per-framework trees each carry the full app skeleton, duplicating `schemas/`, `services/`, and the items Example whenever a framework is added.
- Full immediate refactor of all existing Python/Go/Rust templates before any new library work.
- Adopt the canonical-layout + core/framework/dimension layering now, document it, and migrate existing templates incrementally while new features are built against the convention.

## Consequences

- Any new framework, addon, or dimension must place files per `docs/template-architecture.md` and reproduce the canonical items Example in its idiom.
- Python framework trees stop duplicating `src/schemas/` and `src/services/`; those move to `templates/python/core/` as each framework tree is next touched (FastAPI, Litestar, Flask migrated incrementally).
- Rust scaffolds converge on the canonical `src/` module skeleton (`config.rs`, `error.rs`, `state.rs`, `routes/`, `models/`, `services/`) built once in `core` instead of growing `main.rs`.
- New categories land in `templates/<language>/{auth,frontend,jobs,observability,docs}/<library>` with declared library↔Core Stack rules in `packages/types`, enforced by validation, prompts, and web compatibility (parity-tested in `apps/web/test/stack-builder-compatibility.test.ts`).
- Known drift gets a home before it is fixed: the dead `copyDb` call in the Python handler and the `base`-copy path filters are listed as tech debt in the doc and fixed when touched.
