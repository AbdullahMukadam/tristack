# TriStack — What To Do Now

**Purpose of this doc:** a short, plain to-do list plus a simple
explanation of the distribution system. Written to be read by an AI
coding agent working on this repo — no background context assumed beyond
what's written here.

---

## 1. Current state (confirmed by direct testing, not assumed)

- Core engine works: CLI compiles via `bun build --compile` into a
  standalone binary, no Node/Bun needed to run it.
- Full interactive + non-interactive prompt flow already works
  end-to-end for Python.
- Web app's preview already calls the real generator (not a stub).
- Python: 25 templates exist. Go: 20 templates exist. Rust: 0 — not
  started (`generator.ts` has `case "rust": // Not yet implemented`).
- One known bug: Go's ORM templates (`db.go`, `package db`) and
  framework templates (`main.go`, `package main`) both land in the
  project's root folder → Go won't compile when an ORM is selected. Fix:
  put ORM output in `internal/db/` instead of root.
- No distribution pipeline exists yet — no published PyPI package, no
  npm package, no Homebrew formula, no installer script. This has been
  manually tested and confirmed to work, but nothing is automated or
  published yet.

---

## 2. To-do list, in order

### Fix first (blocking, small, unrelated to everything else)
1. Move Go ORM template output from project root into `internal/db/` so
   `db.go` (`package db`) stops colliding with `main.go` (`package
   main`).
2. Fix the pre-commit hook — it currently runs a full repo check on
   every staged file with no filter, which is slow and already caused a
   data-loss incident once. Scope it to only the file types that need
   checking.

### Finish Python (currently partial)
3. Add templates for: Litestar, Django + Django REST Framework, Flask.
4. Django needs a special rule: when Django is selected, don't ask the
   ORM or migrations questions at all (Django brings its own). Add this
   to the compatibility rules.

### Finish Go (currently partial)
5. Add templates for: Gin, Fiber, Echo, stdlib `net/http`, plus `sqlx`
   as an ORM-layer alternative if not already done.

### Build Rust (currently 0%)
6. Create `template-handlers/rust.ts` (doesn't exist yet — copy the
   pattern from `template-handlers/go.ts`).
7. Add templates for: Axum, Actix-web, Rocket, Warp, Salvo, Loco ×
   SeaORM, Diesel, sqlx.
8. Two special rules to add: (a) if Loco is selected, only offer SeaORM
   as the ORM choice — don't show the full ORM list. (b) if Diesel is
   selected, make sure an async adapter (`diesel-async` + a pool
   library) gets added automatically since Diesel is sync-only by
   default.
9. Wire the new `case "rust":` branch in `generator.ts` to call the new
   Rust handler.

### Set up real distribution (see Section 3 below for how it works)
10. Set up CI to build the binary for 5 platforms on every version tag.
11. Publish to PyPI (so `pip install tristack` and `uvx tristack` work).
12. Publish to npm as platform packages (so `npx create-tristack` works
    without downloading unnecessary platform binaries).
13. Set up a Homebrew formula.
14. Host a curl/PowerShell install script.
15. Get code-signing set up for macOS and Windows (this has real lead
    time — start it early, don't leave it for the end).

### Before calling it done
16. Run every valid stack combination through CI and confirm the
    generated project actually builds/runs, not just that files got
    written.
17. Make sure post-install steps (`uv sync`, `go mod tidy`, `cargo
    build`) fail gracefully with a helpful message if the user doesn't
    have that language's toolchain installed — never crash the whole
    scaffold over this.
18. Write real content for the docs site (currently just has the shell,
    no actual pages).
19. Give credit to Better-T-Stack clearly in the README before public
    launch, and consider messaging its maintainer beforehand.

---

## 3. How distribution works (plain explanation)

**The core idea: build once, hand out many times.**

You write the tool's code once (in TypeScript). You turn it into a
single file called a **binary** — a program that already has everything
it needs inside it, so it can run on someone else's computer without
them installing anything extra (no Node, no Bun, nothing).

```
your TypeScript code
        │
        ▼
  bun build --compile     ← this command does the turning-into-one-file part
        │
        ▼
  one binary file per operating system:
    - tristack-macos-arm64
    - tristack-macos-x64
    - tristack-linux-x64
    - tristack-linux-arm64
    - tristack-windows-x64.exe
```

You make these 5 files **once per release** (e.g. once per version
number, like v0.1.0, v0.2.0). Not once per user. Not once per day. Just
once, whenever you ship something new.

**Where these 5 files live:** you upload them to a "GitHub Release" —
this is just a page on GitHub where you can attach files to a specific
version tag. Think of it like a shared folder that anyone can download
from.

**The problem this section solves:** a Python developer doesn't think in
terms of "download a file from GitHub." They think in terms of `pip
install something`. A Go developer thinks `brew install something`. So
you need to make the *same* file available through the tool each kind of
developer already normally uses.

**How each one connects to the same 5 files:**

| What the user types | What it secretly does |
|---|---|
| `pip install tristack` | Downloads a small Python package. That package doesn't contain your real code — it just contains one of the 5 binary files, already tucked inside it. |
| `npx create-tristack` | Downloads a small npm package, which automatically pulls in whichever ONE of the 5 binary files matches the user's computer. |
| `brew install tristack` | Homebrew reads a small recipe file that just says "download this exact file from this exact GitHub link." |
| `curl ... \| sh` | A script you host yourself that does the same thing as Homebrew — figures out which of the 5 files matches the user's computer, downloads it directly. |

**The important part to understand:** none of these four options contain
a second copy of your actual program. They are all just different-shaped
"delivery boxes" wrapped around the exact same 5 files you built once.
If you fix a bug and rebuild, you only rebuild those 5 files — you don't
rewrite anything for pip, npm, or brew separately, you just point them at
the new files.

**What happens when the user actually runs the tool (no internet
needed):** every template for every language/framework is already baked
inside the binary file itself — this was proven by literally testing it
with no internet connection and it still worked. So generating a project
never needs to download anything. The *only* thing that ever needs
internet is a separate, later step — installing the *generated project's
own* dependencies (e.g. `uv sync` downloading FastAPI from PyPI), which
is normal for any project in any language and has nothing to do with
TriStack itself.

**One thing to remember if extending this:** whenever a new
language/framework/template gets added, it goes into the *one* TypeScript
codebase, then gets picked up automatically the next time the 5 binary
files are rebuilt. There is never a reason to write the same feature
twice for different install methods.
