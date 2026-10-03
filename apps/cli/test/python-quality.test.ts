import { beforeAll, describe, expect, it } from "bun:test";
import { mkdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { writeTree } from "@tristack/template-generator/fs-writer";
import type { ProjectConfig } from "@tristack/types";
import { execa } from "execa";

import { createVirtual } from "../src/index";

const QUALITY_ROOT = join(tmpdir(), "tristack-quality");
const CASE_TIMEOUT_MS = 300_000;

type QualityCase = {
  id: string;
  config: Pick<ProjectConfig, "framework" | "frontend" | "orm" | "migrations" | "database">;
};

const QUALITY_CASES: QualityCase[] = [
  {
    id: "q-fastapi-sqlmodel-alembic",
    config: {
      framework: "fastapi",
      frontend: "none",
      orm: "sqlmodel",
      migrations: "alembic",
      database: "sqlite",
    },
  },
  {
    id: "q-fastapi-tortoise",
    config: {
      framework: "fastapi",
      frontend: "none",
      orm: "tortoise",
      migrations: "none",
      database: "sqlite",
    },
  },
  {
    id: "q-fastapi-htmx",
    config: {
      framework: "fastapi",
      frontend: "htmx",
      orm: "sqlalchemy",
      migrations: "none",
      database: "sqlite",
    },
  },
  {
    id: "q-litestar-sqlalchemy-alembic",
    config: {
      framework: "litestar",
      frontend: "none",
      orm: "sqlalchemy",
      migrations: "alembic",
      database: "sqlite",
    },
  },
  {
    id: "q-litestar-htmx",
    config: {
      framework: "litestar",
      frontend: "htmx",
      orm: "sqlmodel",
      migrations: "none",
      database: "sqlite",
    },
  },
  {
    id: "q-flask-sqlalchemy",
    config: {
      framework: "flask",
      frontend: "none",
      orm: "sqlalchemy",
      migrations: "none",
      database: "sqlite",
    },
  },
  {
    id: "q-flask-htmx",
    config: {
      framework: "flask",
      frontend: "htmx",
      orm: "sqlmodel",
      migrations: "none",
      database: "sqlite",
    },
  },
  {
    id: "q-django-htmx",
    config: {
      framework: "django",
      frontend: "htmx",
      orm: "none",
      migrations: "none",
      database: "sqlite",
    },
  },
  {
    id: "q-postgres-with-a-long-project-name",
    config: {
      framework: "fastapi",
      frontend: "none",
      orm: "sqlmodel",
      migrations: "alembic",
      database: "postgres",
    },
  },
  {
    id: "q-bare",
    config: {
      framework: "none",
      frontend: "none",
      orm: "none",
      migrations: "none",
      database: "none",
    },
  },
];

const CHECKS: { label: string; args: string[] }[] = [
  { label: "ruff check", args: ["run", "--no-sync", "ruff", "check", "."] },
  { label: "ruff format", args: ["run", "--no-sync", "ruff", "format", "--check", "."] },
  { label: "mypy", args: ["run", "--no-sync", "mypy", "."] },
  { label: "pytest", args: ["run", "--no-sync", "pytest", "-q", "-p", "no:cacheprovider"] },
];

describe.skipIf(process.env.BTS_QUALITY !== "1" || Bun.which("uv") === null)(
  "python generated-code quality",
  () => {
    beforeAll(async () => {
      await mkdir(QUALITY_ROOT, { recursive: true });
    });

    for (const qualityCase of QUALITY_CASES) {
      it(
        qualityCase.id,
        async () => {
          const dir = join(QUALITY_ROOT, qualityCase.id);
          await rm(dir, { recursive: true, force: true });
          await mkdir(dir, { recursive: true });

          const config: ProjectConfig = {
            projectName: qualityCase.id,
            projectDir: dir,
            relativePath: qualityCase.id,
            language: "python",
            packageManager: "uv",
            addons: ["ruff", "mypy", "pytest"],
            git: false,
            install: false,
            ...qualityCase.config,
          };

          const tree = await createVirtual(config);
          if (tree.isErr()) throw tree.error;
          const written = await writeTree(tree.value, dir);
          if (written.isErr()) throw written.error;

          const sync = await execa("uv", ["sync"], { cwd: dir, reject: false });
          expect(sync.exitCode, `uv sync failed:\n${sync.stderr}`).toBe(0);

          for (const check of CHECKS) {
            const result = await execa("uv", check.args, {
              cwd: dir,
              reject: false,
              timeout: 120_000,
            });
            expect(
              result.exitCode,
              `${check.label} failed in ${qualityCase.id}:\n${result.stdout}${result.stderr}`,
            ).toBe(0);
          }

          await rm(dir, { recursive: true, force: true });
        },
        CASE_TIMEOUT_MS,
      );
    }
  },
);
