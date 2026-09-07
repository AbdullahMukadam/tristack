# TriStack Architecture Addendum: Go CLI + TypeScript Web, Shared Templates

**Status:** Proposal — scoped addendum only. Does not modify or replace
`project-doc.md`. If adopted, `project-doc.md` Sections 6–9 and 12.1
should be updated to reference this document rather than duplicating it.

**Scope of this document:** the single decision to write the CLI in Go
while keeping the web Stack Builder in TypeScript (forked from
Better-T-Stack per the main doc's Section 7–8), sharing template _content_
and a _compatibility schema_ — not shared runtime code — between the two.
Everything else in the main project doc (language/framework matrix,
rollout phases, doc strategy, naming) is unaffected and not repeated here.

---

## 1. The Decision, Restated Precisely

- **CLI** (`tristack` binary): written in **Go**, compiled to a static,
  cross-platform binary, distributed via GitHub Releases + Homebrew +
  `go install` + a PyPI wrapper for Python users + a curl installer.
- **Web Stack Builder** (`tristack.dev/new`): stays **TypeScript/Next.js**,
  forked from Better-T-Stack's `apps/web`, keeping its existing
  `virtual-fs.ts`/`template-processor.ts` reuse case fully intact.
- **What is shared between them:** not code. Two things only:
  1. **Template files** — plain text files with placeholder syntax,
     living in one canonical directory in the repo.
  2. **A compatibility/options schema** — one JSON file describing valid
     languages, frameworks, ORMs, and which combinations are valid.
- **What is NOT shared:** the rendering engine, the prompt/UI logic, the
  file-tree-building logic. These are implemented twice, once in Go and
  once in TypeScript, deliberately.

This trades "one engine, zero drift risk by construction" (the original
all-TypeScript plan) for "two engines, drift risk managed by CI parity
tests" (Section 10 below) — in exchange for native Go distribution
(`go install`, smaller/faster binary, mature cross-compile tooling).

---

## 2. Repo Layout

```
tristack/
├── cli/                              # Go module — compiles to the binary
│   ├── go.mod
│   ├── cmd/
│   │   └── tristack/
│   │       └── main.go
│   ├── internal/
│   │   ├── prompts/                   # terminal UI (huh/bubbletea/survey)
│   │   │   ├── language.go
│   │   │   ├── framework.go
│   │   │   ├── orm.go
│   │   │   └── ...
│   │   ├── generator/                  # Go rendering engine
│   │   │   ├── render.go
│   │   │   ├── filetree.go
│   │   │   └── posthooks.go             # uv sync / go mod tidy / cargo ...
│   │   ├── compat/                       # loads + validates schema
│   │   │   └── compat.go
│   │   └── embed/
│   │       └── embed.go                   # go:embed directive lives here
│   └── templates/                          # BUILD ARTIFACT ONLY — copied
│                                             # in from packages/templates/
│                                             # right before `go build`.
│                                             # Never hand-edited here.
│                                             # .gitignore'd.
│
├── web/                                # Next.js app (unchanged from
│   └── ...                              # project-doc.md Sections 7–8)
│
├── packages/
│   ├── templates/                        # ★ SHARED SOURCE OF TRUTH ★
│   │   ├── base/
│   │   ├── python/
│   │   │   ├── fastapi/
│   │   │   ├── litestar/
│   │   │   └── ...
│   │   ├── go/
│   │   ├── rust/
│   │   ├── db/
│   │   └── addons/
│   │
│   └── stack-schema/                      # ★ SHARED SOURCE OF TRUTH ★
│       ├── schema.json                      # options + compatibility rules
│       └── schema.d.ts                       # generated TS types (from schema.json)
│                                              # Go side: schema.json unmarshaled
│                                              # directly into Go structs, no
│                                              # codegen needed (see 4.2)
│
├── scripts/
│   ├── sync-templates-for-go-build.sh     # cp packages/templates → cli/templates
│   └── parity-test.sh                      # Section 10
│
└── .github/workflows/
    ├── release-cli.yml                      # goreleaser, triggered on tag
    ├── deploy-web.yml                        # Vercel/Next deploy
    └── parity-check.yml                       # runs on every PR touching
                                                 # packages/templates or
                                                 # packages/stack-schema
```

---

## 3. Component Detail: The Go CLI

### 3.1 Prompt/UI layer

Use a maintained Go TUI library — `charmbracelet/huh` (form-style prompts,
closest UX match to Better-T-Stack's arrow-key `navigable.ts`) is the
recommended default; `AlecAivazis/survey` is a lighter-weight alternative
if `huh`'s styling requirements feel heavy. Prompt _sequencing_ and
_compatibility filtering_ logic should mirror Better-T-Stack's
`config-prompts.ts` orchestration pattern (main doc Section 8) — same
architecture, rewritten in Go, reading its option lists from
`stack-schema/schema.json` rather than hardcoding them.

### 3.2 Rendering engine

Go's stdlib `text/template` is capable but has a stricter syntax than
Handlebars/Mustache (notably: no built-in truthy conditionals on missing
keys the way JS templating engines default to, whitespace control needs
explicit `{{- -}}` trim markers). Two options:

- **Use `text/template` directly**, and constrain the _shared template
  syntax_ (Section 5 below) to the common subset both engines support
  cleanly.
- **Use a third-party Go Mustache implementation** (e.g. `cbroglie/mustache`)
  instead, which is closer in spirit/syntax to what a Handlebars-based JS
  renderer expects, reducing the "common subset" negotiation.

**Recommendation:** use a Mustache-compatible engine on the Go side
specifically to minimize the syntax gap with the TS side — this
directly reduces the risk surface in Section 10 (edge case: template
syntax divergence).

### 3.3 Embedding templates into the binary

```go
package embed

import "embed"

//go:embed all:templates
var TemplatesFS embed.FS
```

Requires `cli/templates/` to physically exist at build time — hence the
`sync-templates-for-go-build.sh` copy step (Section 2). `go:embed` does
**not** follow symlinks reliably across all platforms, so a real copy
(not a symlink) is required, run as a pre-build step in CI and documented
as a required local step for contributors (Section 11, edge case #7).

### 3.4 Compatibility schema loading

```go
//go:embed stack-schema/schema.json
var schemaJSON []byte

type StackSchema struct {
    Languages    []Language              `json:"languages"`
    Frameworks   map[string][]Framework  `json:"frameworks"`   // keyed by language
    Compatibility []CompatRule           `json:"compatibility"`
}
```

No code generation needed on the Go side — `encoding/json` unmarshals
directly into structs matching the schema shape. The TypeScript side
either imports the JSON directly (Next.js supports this natively) or
generates `.d.ts` types from it via a tool like `json-schema-to-typescript`
for stronger typing in the web app — either way, **both sides read the
exact same file**, never a hand-copied duplicate.

### 3.5 Post-generation hooks

Mirrors Better-T-Stack's `install-dependencies.ts` role (main doc Section
8), rewritten in Go:

```go
switch cfg.PackageManager {
case "uv":
    runCmd("uv", "sync")
case "poetry":
    runCmd("poetry", "install")
}
switch cfg.Language {
case "go":
    runCmd("go", "mod", "tidy")
case "rust":
    runCmd("cargo", "generate-lockfile")
}
```

This is CLI-only — the web builder cannot execute shell commands in a
browser sandbox (Section 11, edge case #1 covers the resulting UX
asymmetry this creates deliberately).

---

## 4. Component Detail: The Shared Contract

### 4.1 Template files (`packages/templates/`)

Plain files, e.g. `packages/templates/python/fastapi/main.py.tmpl`:

```python
from fastapi import FastAPI

app = FastAPI(title="{{project_name}}")

{{#if include_docker}}
# Dockerized — see Dockerfile
{{/if}}
```

Both the Go Mustache renderer and the TS/Handlebars renderer must be able
to parse this exact file identically. See Section 5 for the syntax
contract this implies.

### 4.2 Compatibility schema (`packages/stack-schema/schema.json`)

Single JSON file, structurally similar to what Better-T-Stack keeps in
`packages/types` (main doc Section 7.4) but framework-agnostic (plain
JSON, not TypeScript-only Zod schemas, so Go can read it too):

```json
{
  "languages": ["python", "go", "rust"],
  "frameworks": {
    "python": ["fastapi", "litestar", "django", "flask"],
    "go": ["gin", "fiber", "echo", "chi"],
    "rust": ["axum", "actix-web", "rocket", "loco"]
  },
  "compatibility": [
    {
      "if": { "framework": "django" },
      "then": { "orm": ["none"], "migrations": ["none"] },
      "note": "Django bundles its own ORM/migrations"
    },
    {
      "if": { "framework": "loco" },
      "then": { "orm": ["seaorm"] },
      "note": "Loco is opinionated about its ORM"
    }
  ]
}
```

This is the machine-readable version of main doc Section 4.1's
cross-cutting compatibility notes — same rules, now enforced in code by
both the Go CLI and the TS web app reading the identical file, rather
than hand-kept-in-sync logic in two languages.

---

## 5. The Shared Template Syntax Contract

This is the single most important compatibility surface in this
architecture, and it needs to be **explicitly restricted**, not left
implicit, or the two engines will silently diverge in behavior on edge
cases. Supported syntax, and _only_ this syntax, should be used across
every `.tmpl` file in `packages/templates/`:

| Feature                                    | Syntax                                                                              | Supported by Go (Mustache)    | Supported by TS (Handlebars)       |
| ------------------------------------------ | ----------------------------------------------------------------------------------- | ----------------------------- | ---------------------------------- |
| Variable substitution                      | `{{variable}}`                                                                      | ✅                            | ✅                                 |
| Conditional block                          | `{{#if flag}}...{{/if}}`                                                            | ✅ (Mustache section)         | ✅                                 |
| Inverted conditional                       | `{{^flag}}...{{/flag}}` (Mustache) vs `{{#unless flag}}...{{/unless}}` (Handlebars) | ⚠️ different syntax           | ⚠️ different syntax                |
| Loops                                      | `{{#each items}}...{{/each}}`                                                       | ⚠️ Mustache uses `{{#items}}` | ✅                                 |
| Comments                                   | `{{! comment }}`                                                                    | ✅                            | ✅ (different marker `{{!-- --}}`) |
| Nested property access                     | `{{user.name}}`                                                                     | ✅                            | ✅                                 |
| Custom helpers (e.g. `{{uppercase name}}`) | —                                                                                   | ❌ not in stdlib Mustache     | ✅ Handlebars-native               |

**Decision required before Phase 1 template-writing begins:** either (a)
restrict to the strict common subset (variable substitution + basic
`{{#if}}`/`{{/if}}` only, banning loops/helpers/inverted-conditionals
entirely across all templates), or (b) write a small **shared
preprocessor** that normalizes a slightly richer custom syntax into
each engine's native form before rendering (e.g. a build step that
transpiles `{{#unless x}}` into Go-Mustache's `{{^x}}` and leaves it as
`{{#unless x}}` for Handlebars). Option (a) is simpler and recommended
for Phase 1; option (b) can be added later if template authors find (a)
too limiting.

**No custom Handlebars helpers should be used anywhere** in
`packages/templates/` unless an equivalent is also implemented in the Go
renderer — this is a rule for contributors, not just an implementation
detail, and should be stated in `CONTRIBUTING.md`.

---

## 6. Delimiter Collision Handling

Both engines use `{{ }}` — which collides with real syntax in some
generated file types:

- GitHub Actions workflow YAML: `${{ github.sha }}`
- Jinja2 templates (for Python's htmx addon): `{{ variable }}`
- Go templates _inside_ generated Go code, if ever templating a file that
  itself contains Go template syntax as literal content (rare but
  possible for meta-tooling addons)

**Mitigation:** any template file whose _generated output_ needs literal
`{{ }}` must escape it in the source `.tmpl` file using each engine's
literal-escape mechanism (Mustache: `{{{expr}}}` triple-stache doesn't
help here since the issue is literal braces, not HTML-escaping — instead
use a documented escape token like `\{\{` that a shared pre-processing
step converts to a literal `{{` after rendering, run identically by both
engines). This needs a written convention in `CONTRIBUTING.md` and at
least one CI test file specifically exercising a GitHub Actions template
to catch regressions (Section 11, edge case #2).

---

## 7. Build & Embed Pipeline

```bash
# scripts/sync-templates-for-go-build.sh
rm -rf cli/templates
cp -r packages/templates cli/templates
```

Run automatically:

- In CI, before every `go build`/`goreleaser` invocation.
- Locally, via a `make dev` or `just dev` target — **must be documented**
  as a required step, since forgetting it silently builds against a
  stale template copy (Section 11, edge case #7).

Recommended: add a Go `go:generate` directive or a pre-commit hook that
refuses a `go build` if `cli/templates` is older (by file hash) than
`packages/templates`, to make the failure loud instead of silent.

---

## 8. Release & Distribution Pipeline

Use **goreleaser** (`.goreleaser.yml`) to handle cross-compilation,
GitHub Release asset upload, checksums, and Homebrew tap update in one
config, triggered by a `git tag`:

```yaml
builds:
  - main: ./cli/cmd/tristack
    goos: [linux, darwin, windows]
    goarch: [amd64, arm64]
    env: [CGO_ENABLED=0] # see edge case #5 — static binary, no CGO
brews:
  - repository:
      owner: your-org
      name: homebrew-tristack
```

**PyPI wrapper** (for `pip install tristack` / `uvx tristack`): a thin
Python package whose `pyproject.toml` build step downloads the matching
goreleaser-produced binary from the GitHub Release and bundles it into a
platform-specific wheel — same pattern as `ruff`'s PyPI distribution
(main doc Section 6.2), except now wrapping a genuinely native Go binary
instead of a compiled Bun/TS one. No functional difference to this
wrapper regardless of which language the wrapped binary is written in.

**`go install` support** — this is the concrete win from choosing Go:

```
go install github.com/your-org/tristack/cli/cmd/tristack@latest
```

works natively, no wrapper needed, because the module really is Go
source. This resolves main doc Section 12.1's open question for Go users
specifically (not for Rust, which remains a separate open question).

---

## 9. Code Signing (new concern introduced by shipping a native binary)

Not previously called out in the main doc. Both macOS and Windows flag
unsigned downloaded binaries:

- **macOS:** Gatekeeper blocks/warns on unsigned/unnotarized binaries.
  Requires an Apple Developer account, code-signing certificate, and
  `notarytool` submission as part of the release pipeline.
- **Windows:** SmartScreen warns on unsigned `.exe` files. Requires an
  Authenticode code-signing certificate.

**Impact if skipped:** users installing via the curl-installer or direct
GitHub Release download (not via Homebrew/PyPI, which mediate this
somewhat) will see a scary OS-level security warning on first run. This
is a real adoption-blocker for a brand-new, unknown tool and should be
budgeted as setup work before Phase 1's public release, not treated as
optional polish.

---

## 10. Parity Testing Strategy (this is what makes "two engines" safe)

Since template rendering logic now exists twice, CI must prove the two
outputs match, on every change to shared files:

```
# scripts/parity-test.sh (conceptual)
for each valid combination in packages/stack-schema/schema.json:
    output_go   = run compiled Go CLI with combination, capture file tree
    output_ts   = run headless Node script importing web app's generator
                  with same combination, capture file tree
    normalize both (line endings, trailing whitespace, timestamps)
    diff output_go vs output_ts
    fail CI if any difference found outside an explicit allowlist
      (see edge case #4 for what's allowed to legitimately differ)
```

Trigger: any PR touching `packages/templates/**` or
`packages/stack-schema/**`. This is the direct Go-CLI-era equivalent of
Better-T-Stack's own `test/matrix/` tests (main doc Section 7), extended
to compare _across_ two independent implementations rather than just
validating one.

---

## 11. Edge Cases and Mitigations

| #   | Edge case                                                                                                                                                                                                                                               | Why it happens                                                                                                                            | Mitigation                                                                                                                                                                                                                                                                                                             |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Web preview shows unresolved dependencies; CLI output has them resolved** (e.g. `uv sync` output, lockfile)                                                                                                                                           | Browser sandbox cannot execute shell commands (Section 3.5)                                                                               | Explicitly document this as an accepted asymmetry. Web builder UI should show a note: "Preview shows generated files only — dependency installation happens when you run the CLI locally." Do not attempt to fake a resolved lockfile in the browser.                                                                  |
| 2   | **Delimiter collisions** — GitHub Actions `${{ }}`, Jinja `{{ }}`, inside a `{{ }}`-based template engine                                                                                                                                               | Both chosen engines use the same delimiter as common YAML/Jinja syntax                                                                    | Documented escape convention (Section 6) + a dedicated CI test file exercising a GitHub Actions addon template specifically, so a regression is caught immediately, not discovered by a user.                                                                                                                          |
| 3   | **Custom Handlebars helper used in a template, silently breaks the Go renderer**                                                                                                                                                                        | Handlebars supports helpers Mustache doesn't; a contributor might use one without realizing the Go side can't render it                   | CI lint step: scan all `.tmpl` files for helper-call syntax patterns not in the allowlist (Section 5) and fail the PR with a clear message, rather than letting it surface as a runtime Go panic.                                                                                                                      |
| 4   | **Two renders produce byte-different but functionally-identical output** (e.g. different lockfile hash due to registry timestamp, or JSON key ordering)                                                                                                 | Non-deterministic external tool behavior, not a real logic bug                                                                            | Parity test (Section 10) needs an explicit "allowed to differ" allowlist — e.g. skip diffing `*.lock`/`uv.lock`/`go.sum`/`Cargo.lock` files entirely, diff only the templated source files.                                                                                                                            |
| 5   | **CGO dependency accidentally introduced in a Go library**, breaking static cross-compilation                                                                                                                                                           | Some Go libraries (e.g. certain SQLite drivers) require CGO, which breaks `CGO_ENABLED=0` static builds and complicates cross-compilation | Pin `CGO_ENABLED=0` in CI (Section 8) so any CGO-requiring dependency fails the build loudly at PR time, not silently at release time. Prefer pure-Go alternatives (e.g. `modernc.org/sqlite` over `mattn/go-sqlite3`) for any CLI-internal SQLite use.                                                                |
| 6   | **Windows path separator / line-ending mismatches** in generated files                                                                                                                                                                                  | Go's `filepath` vs JS's path handling differ by default on Windows; template files may have been saved with CRLF vs LF                    | Normalize all template source files to LF in the repo (`.gitattributes` enforcing `* text=auto eol=lf`); explicitly write output files with the correct native line ending per platform in both renderers, not whatever the source file happened to contain.                                                           |
| 7   | **Stale `cli/templates/` copy** — contributor edits `packages/templates/` but forgets to re-run the sync script before testing locally                                                                                                                  | Manual step easily forgotten (Section 7)                                                                                                  | Pre-build hash check (Section 7) that refuses to build silently against stale content; document the required step prominently in `CONTRIBUTING.md`; consider a `go generate`-triggered sync instead of a separate shell script, so `go build` alone always does the right thing.                                       |
| 8   | **Schema evolution breaks older installed CLI binaries** — a user has `tristack` v1.0 installed, but the web builder (always latest) now offers a new framework not in their binary's embedded schema                                                   | Web app deploys independently and more frequently than CLI releases (Section 8)                                                           | Web builder's generated CLI command/install instructions should include a minimum required CLI version when a newly-added option is selected (e.g. "requires tristack ≥ v1.3.0 — update with `brew upgrade tristack`"), read from a `min_version` field per schema entry.                                              |
| 9   | **Binary size bloat** from embedding every language/framework/addon template in one binary via `go:embed`, even though most users only use one language per run                                                                                         | All content is embedded unconditionally at compile time                                                                                   | Acceptable for Phase 1 scope (Python only, per main doc Section 10) — revisit if Phase 2–3 (Go, Rust templates added) pushes binary size to a genuinely inconvenient download size; Go binaries with embedded text assets are typically still in the low tens of MB, which is a non-issue for a one-time CLI download. |
| 10  | **Antivirus false positives** on a new, unsigned/low-reputation Go binary                                                                                                                                                                               | Common for any newly-published compiled tool with no download history yet                                                                 | Combined with code signing (Section 9), submit the binary to major AV vendors' false-positive reporting programs proactively around the first public release; expect some initial friction regardless.                                                                                                                 |
| 11  | **Contributor needs to test changes in both engines** — editing a shared template requires running both the Go CLI and the TS web app locally to be confident it renders correctly in both                                                              | Two independent renderers now exist                                                                                                       | The parity test script (Section 10) should be runnable locally with one command (`make parity-test` or similar), not CI-only, so contributors can self-check before opening a PR.                                                                                                                                      |
| 12  | **`{{#if}}` truthiness differs subtly between engines** — e.g. Go Mustache's handling of an empty string vs Handlebars' — a template that "works" in manual testing on one engine might silently render wrong on the other for an edge-case falsy value | Different template engines can implement "truthy" checks slightly differently even within the shared syntax subset                        | Add this specific case to the parity test suite (Section 10) with at least one schema combination that exercises an empty-string/zero/false boolean value for every conditional-bearing template, not just typical "happy path" combinations.                                                                          |
| 13  | **Go's `text/template`/Mustache library version drift** vs whatever npm package version the TS side uses for Handlebars — a library update changes rendering behavior on one side only                                                                  | Independent dependency update cadences                                                                                                    | Pin exact versions of both the Go Mustache library and the npm Handlebars package; bump them deliberately together with a parity-test run, not via automated dependency-update bots without review.                                                                                                                    |

---

## 12. How This Plugs Into the Existing Rollout Plan

No change to phase _scope_ (main doc Section 10) — Python still ships
first, Go and Rust templates still follow in Phases 2–3. What changes is
**how the CLI itself is built and released**, which is orthogonal to
which language's _templates_ are being added:

- **Phase 1 (Python templates) Definition of Done** gains two new
  required items: (a) the Go CLI skeleton exists and can render Python
  templates correctly, (b) the parity test (Section 10) passes for every
  valid Python combination.
- **Phase 2/3 (Go/Rust templates)** — no new CLI-architecture work needed;
  just add template content and schema entries, same as before. This is
  the direct payoff of the shared-schema approach: adding a language
  later is a content change, not an engine change, on both sides.

---

## 13. Open Questions Specific to This Addendum

- [ ] Final choice of Go templating library (stdlib `text/template` vs a
      Mustache implementation) — Section 3.2 recommends Mustache-style,
      but this should be validated against a real template file before
      being locked in.
- [ ] Whether to build the shared-syntax preprocessor (Section 5, option
      b) now or defer until the strict-subset approach (option a) proves
      too limiting in practice.
- [ ] Apple Developer Program enrollment and code-signing certificate
      acquisition (Section 9) — has a real cost and lead time, should be
      started early if this path is chosen.
- [ ] Whether `packages/stack-schema/schema.json` should be hand-written
      or generated from a higher-level source (e.g. keeping the existing
      TypeScript Zod schema as the source of truth and exporting plain
      JSON from it, so Zod's validation ergonomics aren't lost on the web
      side) — needs a decision before Section 4.2's schema is finalized.
