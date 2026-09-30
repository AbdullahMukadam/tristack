# Domain Docs

How the engineering skills should consume this repo's domain documentation when exploring the codebase.

## Layout

This repo is configured as a single-context repo:

- `docs/CONTEXT.md` contains the shared domain glossary and project context.
- `docs/adr/` contains architectural decision records for the repo.
- `docs/` also holds the planning docs: `PRD.md`, `ARCHITECTURE.md`, `ROADMAP.md`, and `JOURNAL.md`.

## Before exploring, read these

- `docs/CONTEXT.md`, if it exists.
- `docs/adr/`, if it exists, focusing on ADRs that touch the area being changed.

If these files do not exist, proceed silently. Do not flag their absence or suggest creating them upfront. Producer workflows can create them later when terms or decisions need to be captured.

## Use the glossary's vocabulary

When output names a domain concept in an issue title, refactor proposal, hypothesis, or test name, use the term as defined in `docs/CONTEXT.md`. Do not drift to synonyms the glossary explicitly avoids.

If the concept is not in the glossary yet, treat that as a signal: either the work is inventing language the project does not use, or there is a real documentation gap to note for a domain-doc update.

## Flag ADR conflicts

If output contradicts an existing ADR, surface it explicitly rather than silently overriding it.
