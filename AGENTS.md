# Repository Guidelines

> **Brand identity:** TriStack (not Better-T-Stack). The project is a fork of Better-T-Stack. The CLI command is `tristack` / `uvx tristack`, not `create-better-t-stack`. See `docs/agents/domain.md`.

## Project Structure & Module Organization

This repo is a Bun + Turborepo monorepo.

- `apps/cli`: the TriStack CLI (`tristack`), with source in `apps/cli/src` and tests in `apps/cli/test`.
- `apps/web`: Next.js docs/site (`apps/web/src`, `apps/web/content/docs`, `apps/web/public`).
- `packages/template-generator`: template generation engine used by the CLI.
- `packages/types`: shared schemas/types.

## Build, Test, and Development Commands

- `bun install`: install workspace dependencies.
- `bun dev:cli`: watch-build CLI package.
- `bun dev:web`: run web app locally (`next dev --port 3333`).
- `bun build`: build all packages/apps through Turbo.
- `bun build:cli`: build only the CLI target.
- `bun run check`: format + lint (`oxfmt . && oxlint .`).
- `cd apps/cli && bun run test`: run CLI tests.
- `cd apps/web && bun test`: run web tests.
- `cd apps/web && bunx next build`: build the web app for production.
- `cd apps/web && bunx tsc --noEmit`: type-check the web app.

## Coding Style & Naming Conventions

- Language: TypeScript (strict mode enabled across projects).
- Modules: ESM-first (`"type": "module"` where applicable).
- Formatting/linting: `oxfmt` and `oxlint`; run `bun run check` before committing.
- File naming: prefer kebab-case files (for example `database-setup.ts`).
- Symbols: `camelCase` for functions/variables, `PascalCase` for types/components.
- Keep feature logic near domain folders (`helpers`, `utils`, `template-handlers`).

## Error Handling Conventions

- In CLI code, prefer `better-result` over ad-hoc `try/catch` for recoverable flows.
- Return typed `Result<T, E>` and use `Result.ok`, `Result.err`, `Result.try`, and `Result.tryPromise`.
- Reuse domain errors from `apps/cli/src/utils/errors.ts` (`CLIError`, `ProjectCreationError`, `UserCancelledError`) and convert thrown prompt errors at boundaries.

## Key Project Notes

- **CLI runner mapping (language-aware):** Python → `uvx tristack`; Go/Rust → plain `tristack` (curl installer).
- **CLI distribution:** `tristack`/`uvx` for Python, `tristack` for Go/Rust (curl/PowerShell installers). No npm/npx distribution channel; packages are workspace-private (no `publishConfig`, no npm release scripts, no npm-publish CI steps).
- **Home page rail:** a single-pane init-only rail (sponsors/videos/tweets panes and the `StatusBar` footer removed). Hero is a centered, clean text wordmark ("TriStack"), NOT a terminal/ASCII banner.
- **Branding:** TriStack is a fork of Better-T-Stack (MIT). Attribution to Better-T-Stack is required in READMEs and LICENSE. The `SITE_DESCRIPTION` and all site copy are language-agnostic (Python Phase 1, Go Phase 2, Rust Phase 3).
- **`TRISTACK` wordmark:** the CLI keeps the ANSI Shadow banner (`apps/cli/src/utils/render-title.ts`); the web hero uses a plain sans-serif text wordmark. Do not reintroduce the old GoiStack/OWN STACK ASCII or the "type-safe TypeScript projects" tagline.
- **Web design language:** clean and simple, no terminal aesthetic. Use sans-serif UI text (mono reserved for actual commands/code), sentence case labels, `rounded-md`, no `$` prompts, no `.SH`/`.TXT`/`.ENV` micro-labels, no ASCII banners. `--font-mono` maps to Geist Mono (`--font-geist-mono`).
- **Pre-existing unrelated typecheck error:** `packages/template-generator/src/utils/add-deps.ts:13` (Go/Rust framework stubs missing) — existed before this work, do not fix unless scoped.
- **Never commit untracked `discord_backup_codes.txt`.**
- **Web git remote:** still `https://github.com/AmanVarshney01/create-better-t-stack.git` (intentional upstream, keep).

## Template Authoring (Handlebars)

- Templates live in `packages/template-generator/templates` and use helpers from `packages/template-generator/src/core/template-processor.ts` (`eq`, `ne`, `and`, `or`, `includes`).
- For conditional ORM-specific output, use helper form with quoted values:
  - `{{#if (eq orm "sqlalchemy")}}`
  - `{{else if (eq orm "sqlmodel")}}`
  - `{{/if}}`
  - Example: `packages/template-generator/templates/python/base/pyproject-uv.toml.hbs`.
- Canonical generated layouts per language and template-tree layering (base/core/framework/orm/migrations/dimensions/addons): see `docs/template-architecture.md` and `docs/adr/0002-canonical-template-layout-and-project-structure.md`.

## Testing Guidelines

- Framework: `bun:test`.
- Test files use `*.test.ts` naming (see `apps/cli/test` and `packages/template-generator/test`).
- Add or update tests with behavior changes, especially prompt flows, template output, and config validation.
- Keep tests deterministic; reuse shared setup utilities in `apps/cli/test/setup.ts`.

## Commit & Pull Request Guidelines

- Use Conventional Commits with scope, matching history:
  - `feat(cli): ...`, `fix(web): ...`, `docs(cli): ...`
- Open an issue/discussion before major feature work.
- PRs should include:
  - clear summary,
  - linked issue (if applicable),
  - verification steps run (`bun run check`, relevant tests),
  - screenshots/GIFs for web UI changes.

## Agent skills

### Issue tracker

Issues are tracked in GitHub Issues for `AmanVarshney01/create-better-t-stack` using the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

The canonical triage roles map directly to same-named GitHub labels. See `docs/agents/triage-labels.md`.

### Domain docs

This repo uses a single-context domain doc layout. See `docs/agents/domain.md`.
