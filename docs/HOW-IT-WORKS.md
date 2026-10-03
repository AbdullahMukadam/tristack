# How TriStack works

A plain walkthrough of what happens when someone runs the CLI, and where things live in the web app. For the deeper references, see `ARCHITECTURE.md` and `template-architecture.md`.

## The big picture

```
packages/types               the option catalog (frameworks, ORMs, ...) + validation schemas + runtime profile
packages/template-generator  the .hbs templates and the engine that turns a config into a file tree
apps/cli                     the `tristack` command: asks questions, validates, writes files, installs
apps/web                     tristack.space: docs, the Stack Builder, and the install scripts
```

The CLI and the web app both use the same generator and the same types, so a stack picked in the Stack Builder produces exactly the files the CLI would write.

## What happens when you run `tristack`

```
tristack my-api --language python --framework fastapi ...
   │
   1. apps/cli/src/cli.ts           entry point; calls createTristackCli().run()
   2. apps/cli/src/index.ts         defines the commands (trpc-cli): `create` (default) and `create-json`
   3. helpers/core/command-handlers.ts
        - checks the required tools exist (uv/pip/poetry, go, cargo)
        - resolves the project folder and handles "folder already exists"
        - turns flags into a config     (validation.ts: processAndValidateFlags)
        - asks for anything missing     (prompts/config-prompts.ts: gatherConfig)
          with --yes it uses defaults instead of asking
        - checks the combination        (validation.ts: validateResolvedConfigCompatibility)
          e.g. rejects Flask + Tortoise, Alembic without an ORM, an ORM without a database
   4. helpers/core/create-project.ts
        - generate(config)             builds the whole project in memory (see below)
        - writeTree(tree, dir)         writes it to disk
        - installs dependencies, runs prepare steps (migrations, sqlc), git init
        - prints the "next steps" (run command from the runtime profile)
```

`--dry-run` stops after validation and writes nothing. `--yolo` skips the compatibility checks.

## How the generator builds a project

`packages/template-generator/src/generator.ts` → `generate(config)`:

```
1. new VirtualFileSystem()                    an in-memory folder tree (core/virtual-fs.ts)
2. copy templates/base                        shared files for every language
3. copy the language's layers, in order       template-handlers/python.ts | go.ts | rust.ts
     base → core → framework/<fw> → orm/<orm> → migrations/<mig> → frontend/<fe> → addons/<addon>
   later layers can replace files from earlier ones (e.g. the HTMX main.py replaces the plain one)
4. write README.md                            processors/readme-generator.ts
5. write tristack.jsonc                       the exact command to recreate this stack
6. return the tree                            the CLI writes it; the web app just shows it
```

Each `.hbs` file is a Handlebars template. `{{#if (eq orm "sqlmodel")}} ... {{/if}}` picks the right code for the chosen stack, and `{{project_slug}}` becomes the project name. Two gotchas:

- Go and Python HTMX templates contain `{{ }}` for their own template engines, so those must be written as `\{{ }}` or Handlebars eats them.
- The CLI reads the **built** generator. After editing a `.hbs` file, run `bun run build` in `packages/template-generator`. That regenerates `src/templates.generated.ts` (never edit that file by hand) and rebuilds `dist/`.

### Embedded templates (`templates.generated.ts`)

At runtime the generator never reads the `templates/` folder. It reads `packages/template-generator/src/templates.generated.ts`, a single file holding every template already compiled.

```
templates/**/*            177 source files you edit (.hbs and plain files)
     │  bun run generate-templates   (scripts/generate-templates.ts; also runs on every `bun run build`)
     │    - finds every file, normalizes CRLF to LF
     │    - compiles each with Handlebars.precompile
     ▼
src/templates.generated.ts
     export const EMBEDDED_TEMPLATES = new Map([
       ["python/framework/fastapi/src/main.py.hbs", { kind: "precompiled", spec: {...} }],
       ...
     ])
     │  the language handlers look up paths in this map and render them with your config
     ▼
generated project files
```

Why it's built this way:

- The released CLI is one standalone binary (`bun build --compile`). There's no `templates/` folder on a user's machine, so the templates have to live inside the code.
- The web app runs on Cloudflare Workers, which has no normal file system. `api/preview` imports `EMBEDDED_TEMPLATES` to build the Stack Builder preview.
- Templates are compiled once at build time instead of on every generation.

So: edit `templates/`, rebuild, and commit `templates.generated.ts` together with the template change, so the embedded copy matches the source.

### Step by step: from the map to a file on disk

This follows one real file, `python/orm/sqlmodel/src/db.py.hbs`, for a FastAPI + SQLModel project. All paths are under `packages/template-generator/src/` unless they start with `apps/`.

**1. The map is built when the module loads.** `templates.generated.ts` runs `new Map([...])` with one entry per template file:

- **Key:** the path relative to `templates/`, with forward slashes, e.g. `"python/orm/sqlmodel/src/db.py.hbs"`.
- **Value:** either `{ kind: "precompiled", spec: {...} }` (the compiled Handlebars program), or `"[Binary file]"` for images and fonts.
- **Order:** entries are inserted alphabetically (the script sorts them), so iteration order is fixed and output is deterministic.
- **Which files count:** every non-binary file is precompiled, not just `.hbs` ones. `alembic.ini`, `script.py.mako` and `.gitkeep` all go through Handlebars too, so a `{{` in any of them is treated as template syntax.

**2. The caller passes the map in.** Nothing looks templates up globally; every caller hands the map to `generate()`:

| Caller      | Call                                                                                                           |
| ----------- | -------------------------------------------------------------------------------------------------------------- |
| CLI create  | `apps/cli/src/helpers/core/create-project.ts` → `generate({ config, templates: EMBEDDED_TEMPLATES, version })` |
| CLI tests   | `apps/cli/src/index.ts` → `createVirtual()` (same call, no disk write)                                         |
| Web preview | `apps/web/src/app/api/preview/route.ts` → `generate({ config, templates: EMBEDDED_TEMPLATES })`                |

**3. `generate()` (`generator.ts`) creates an empty in-memory disk.** `new VirtualFileSystem()` (`core/virtual-fs.ts`) wraps `memfs`. Then it calls the layer functions in order:

```
processBaseTemplate(vfs, templates, config)        template-handlers/base.ts   → copyTemplates(prefix "base")
processPythonTemplates(vfs, templates, config)     template-handlers/python.ts
    copyPythonBase   → copyTemplates("python/base", exclude pyproject-* and, for Django, /src/)
                       copyTemplate("python/base/pyproject-uv.toml.hbs", "pyproject.toml")
    copyPythonCore   → copyTemplates("python/core", ...)
    copyFramework    → copyTemplates("python/framework/fastapi", ...)
    copyOrm          → copyTemplates("python/orm/sqlmodel")          ← our file
    copyMigrations   → copyTemplates("python/migrations/<mig>")      (skipped when "none")
    copyFrontends    → copyTemplates("python/frontend/htmx/...")     (skipped when "none")
    copyAddons       → copyTemplates("python/addons/<addon>") for each addon
processReadme(vfs, config)                         processors/readme-generator.ts
writeTriStackConfigToVfs(...)                      tristack-config.ts (only when a version is passed)
```

**4. The lookup itself, `copyTemplates()` (`template-handlers/utils.ts`).** It is a prefix scan, not a key lookup. It loops over every entry in the map (`for (const [templatePath, content] of templates)`) and keeps the ones whose key starts with `prefix + "/"`. For `copyOrm` the prefix is `"python/orm/sqlmodel"`, so our key matches. For each match:

```
templatePath  = "python/orm/sqlmodel/src/db.py.hbs"
exclude?.(templatePath)                 the handler's filter, e.g. skip routes/items when orm is "none"
relativePath  = "src/db.py.hbs"         the key with the prefix cut off
resolvePathVars(relativePath)           replaces a literal "{{project_slug}}" in the *path* with the slug
transformFilename(...)  = "src/db.py"   (core/template-processor.ts) strips ".hbs";
                                        _gitignore → .gitignore, _dockerignore → .dockerignore
processFileContent(templatePath, content, config)   renders the content (step 5)
vfs.writeFile("src/db.py", rendered, templatePath)  stores it (step 6)
```

The other lookup helper, `copyTemplate(vfs, templates, config, key, outputPath)`, is an exact `templates.get(key)`, used when the output name differs from the template name (`pyproject-uv.toml.hbs` → `pyproject.toml`). If the key doesn't exist it silently does nothing, so a typo in a key produces a missing file, not an error.

**5. Rendering, `processFileContent()` → `processTemplateString()` (`core/template-processor.ts`).**

- `isBinaryFile(path)` checks the extension (png, jpg, ico, woff, ...). For binary files it returns the marker string `"[Binary file]"` instead of rendering.
- Otherwise it builds the render context `{ ...config, project_slug: toProjectSlug(config.projectName) }`. That's why templates can use `orm`, `framework`, `database`, `addons`, `projectName` and `project_slug`.
- `Handlebars.template(content.spec)` turns the precompiled spec back into a function, which is called with the context. The helpers it uses (`eq`, `ne`, `and`, `or`, `not`, `includes`) are registered once at the top of `template-processor.ts`, when the module is imported. A precompiled template looks helpers up by name at render time, so it only works if that module has been loaded.
- A trailing newline is added if the result doesn't end with one.

**6. Storing, `vfs.writeFile(path, content, sourcePath)` (`core/virtual-fs.ts`).**

- It creates parent folders (`mkdirSync` recursive) and writes into `memfs`.
- It records `path → templatePath` in a source map; binary files use it later.
- **Writing an existing path overwrites it.** This is how later layers replace earlier ones: `python/frontend/htmx/app/src/main.py.hbs` is copied after `python/framework/fastapi/src/main.py.hbs`, so the HTMX `main.py` wins.

**7. Turning it into a tree.** After all layers, `vfs.toTree(config.projectName)` walks the in-memory disk and returns nested `VirtualDirectory`/`VirtualFile` objects, each file with its `content` and `sourcePath`. `generate()` returns `{ root, fileCount, directoryCount, config }`.

**8. Where the tree goes.**

- **CLI:** `writeTree(tree, projectDir)` (`fs-writer.ts`) walks the tree recursively. For each node it:
  - calls `assertSafeWritePath()`, which refuses any path that would escape the project folder (`..`, absolute paths);
  - creates the folder;
  - writes the file. A file whose content is `"[Binary file]"` is instead copied from `templates-binary/<sourcePath>` (`copyBinaryFile`), where the generate script puts binary templates.
- **Web:** `api/preview/route.ts` converts the same tree to JSON (`transformTree`) for the file explorer. Nothing is written to disk.

Debugging tips that follow from this:

- **A file is missing:** check the handler's `copyTemplates` prefix and `exclude` callback, and for `copyTemplate` the exact key.
- **A file has the wrong content:** check whether a later layer overwrote it.
- **A change doesn't show up:** `templates.generated.ts` (and `dist/`) haven't been rebuilt.

### The runtime profile

`packages/types/src/runtime-profile.ts` is one place that knows, for any config, how to install, prepare, run, and health-check the generated project. Three things read it, so they can't drift apart:

- the CLI (install step and the "run this" hint),
- the generated README (setup commands),
- the boot test (`apps/cli/test/boot-matrix.test.ts`), which actually starts projects and calls their routes.

## Where options and rules live

| What                                          | File                                                                                                                                                                                |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Which frameworks/ORMs/etc. exist per language | `packages/types/src/constants.ts`                                                                                                                                                   |
| Shapes of a config                            | `packages/types/src/schemas.ts`                                                                                                                                                     |
| Which combinations are rejected               | `apps/cli/src/validation.ts` (CLI) and `apps/web/src/app/(home)/new/_components/utils.ts` (web); both must agree, and `apps/web/test/stack-builder-compatibility.test.ts` checks it |
| Interactive questions                         | `apps/cli/src/prompts/*.ts`                                                                                                                                                         |

## Tests

| Command                               | What it proves                                                              |
| ------------------------------------- | --------------------------------------------------------------------------- |
| `cd apps/cli && bun run test`         | Fast default suite: prompts, validation, generated file trees               |
| `cd apps/cli && bun run test:boot`    | Generates real projects, installs them, starts the server, calls the routes |
| `cd apps/cli && bun run test:quality` | Generated Python projects pass ruff, ruff format, mypy --strict, and pytest |
| `cd apps/web && bun test`             | Stack Builder rules match the CLI; installer and release-packaging checks   |

`test:boot` and `test:quality` are slow (real installs) and skip a case, with a logged reason, when a tool is missing.

## The web app (`apps/web`)

A Next.js app with Fumadocs for the docs, deployed to Cloudflare Workers through OpenNext (`wrangler.jsonc`, `bun run deploy`).

```
apps/web/
  content/docs/            the documentation pages (.mdx) shown at /docs
    cli/                   CLI reference (options, compatibility rules)
    guides/                quick starts per language
  public/
    install.sh             served at tristack.space/install.sh (macOS/Linux curl installer)
    install.ps1            served at tristack.space/install.ps1 (Windows PowerShell installer)
  src/
    app/
      (home)/              the marketing site; the folder name in () doesn't appear in URLs
        page.tsx           home page (/)
        new/               the Stack Builder (/new)
          _components/
            stack-builder/ the option picker UI
            utils.ts       compatibility rules (must match the CLI's validation.ts)
            preview-panel.tsx, file-explorer.tsx, code-viewer.tsx   the live file preview
        stack/             shareable stack page (/stack)
        about/ contact/ privacy/ sponsors/
      api/
        preview/route.ts   runs the real generator for the picked stack and returns the file tree
        search/            docs search
      docs/[[...slug]]/    renders content/docs
      llms.txt, llms-full.txt, llms.mdx/   plain-text docs for AI agents
      og/                  generated social-preview images
    components/            shared UI (ui/ is the component library)
    lib/
      constant.ts          the option catalog as the web sees it (StackState)
      stack-url-state.ts   keeps the picked stack in the URL so it can be shared
      install-commands.ts  builds the `uvx tristack ...` command shown to users
  test/                    bun tests (Stack Builder rules, install scripts)
```

How the Stack Builder works: you pick options → `utils.ts` adjusts incompatible picks and explains why → the URL updates (shareable) → `api/preview` calls the same `generate()` the CLI uses, with the templates bundled in → the file explorer shows the exact files you'd get → the page shows the matching CLI command.

## Releases and installers

- `.github/workflows/release.yaml` runs when a commit starting with `chore(release): X.Y.Z` lands on `main`. It compiles the CLI into a standalone binary per platform (`bun build --compile --target=...`), checks each one, publishes GitHub release assets and PyPI wheels (for `uvx tristack`), and tags the release.
- `install.sh` and `install.ps1` download the matching release asset. They go live when the web app is redeployed.
