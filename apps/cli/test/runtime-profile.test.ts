import { describe, expect, test } from "bun:test";

import { getRuntimeProfile } from "@tristack/types";
import type { ProjectConfig } from "@tristack/types";

function profile(overrides: Partial<ProjectConfig> = {}): ReturnType<typeof getRuntimeProfile> {
  return getRuntimeProfile({
    language: "python",
    framework: "fastapi",
    orm: "sqlmodel",
    migrations: "none",
    database: "sqlite",
    frontend: "none",
    packageManager: "uv",
    addons: [],
    projectName: "profile-api",
    ...overrides,
  });
}

describe("getRuntimeProfile", () => {
  test("fastapi + sqlmodel: serves /health and items probes", () => {
    const runtime = profile();
    expect(runtime.kind).toBe("server");
    expect(runtime.install.label).toBe("uv sync");
    expect(runtime.prepare).toEqual([]);
    expect(runtime.run({ dev: true }).label).toBe("uv run uvicorn src.main:app --reload");
    expect(runtime.run({ port: 8000 }).label).toBe("uv run uvicorn src.main:app --port 8000");
    expect(runtime.probes).toEqual([
      { method: "GET", path: "/health", expectStatus: 200 },
      { method: "GET", path: "/api/v1/items/", expectStatus: 200 },
      { method: "POST", path: "/api/v1/items/", expectStatus: 201, body: { name: "boot-check" } },
    ]);
  });

  test("fastapi + htmx: adds the home page and /web/items probes", () => {
    const runtime = profile({ frontend: "htmx" });
    expect(runtime.probes.map((p) => p.path)).toEqual([
      "/health",
      "/api/v1/items/",
      "/api/v1/items/",
      "/",
      "/web/items",
    ]);
  });

  test("htmx without an orm: probes the home page but not /web/items", () => {
    const runtime = profile({ framework: "litestar", frontend: "htmx", orm: "none" });
    expect(runtime.probes.map((p) => p.path)).toEqual(["/health", "/"]);
  });

  test("litestar: items path has no trailing slash", () => {
    const runtime = profile({ framework: "litestar" });
    expect(runtime.run({ dev: true }).label).toBe("uv run litestar run --reload");
    expect(runtime.probes.map((p) => p.path)).toEqual([
      "/health",
      "/api/v1/items",
      "/api/v1/items",
    ]);
  });

  test("django: health uses /api/health/ and migrate is a prepare step", () => {
    const runtime = profile({ framework: "django", orm: "none", migrations: "none" });
    expect(runtime.run({ dev: true }).label).toBe("uv run python manage.py runserver");
    expect(runtime.prepare[0]?.label).toBe("uv run python manage.py migrate");
    expect(runtime.probes.map((p) => p.path)).toEqual(["/api/health/"]);
  });

  test("alembic: prepare ships revision + upgrade", () => {
    const runtime = profile({ migrations: "alembic" });
    expect(runtime.prepare.map((c) => c.label)).toEqual([
      `uv run alembic revision --autogenerate -m "initial"`,
      "uv run alembic upgrade head",
    ]);
  });

  test("pip: install command label stays pip install -e .", () => {
    const runtime = profile({ packageManager: "pip" });
    expect(runtime.install.label).toBe("pip install -e .");
    expect(runtime.install.args).toEqual(["install", "-e", "."]);
    expect(runtime.run({ dev: true }).label).toBe("uvicorn src.main:app --reload");
  });

  test("bare python is a oneshot expecting Hello from the projectName", () => {
    const runtime = profile({ framework: "none", orm: "none", database: "none" });
    expect(runtime.kind).toBe("oneshot");
    expect(runtime.run().label).toBe("uv run python -m src.main");
    expect(runtime.expectStdout).toBe("Hello from profile-api!");
  });

  test("go + gin + gorm + none: auto-migrate, PORT env, items probes", () => {
    const runtime = profile({
      language: "go",
      framework: "gin",
      orm: "gorm",
      migrations: "none",
      packageManager: "go",
    });
    expect(runtime.install.label).toBe("go mod tidy");
    expect(runtime.prepare).toEqual([]);
    expect(runtime.run({ port: 8765 }).env).toEqual({ PORT: "8765" });
    expect(runtime.probes.map((p) => p.path)).toEqual([
      "/health",
      "/api/v1/items",
      "/api/v1/items",
    ]);
  });

  test("go + sqlc + golang-migrate: prepare generates then migrates with tags and a real DSN", () => {
    const runtime = profile({
      language: "go",
      framework: "chi",
      orm: "sqlc",
      migrations: "golang-migrate",
      database: "postgres",
      packageManager: "go",
    });
    expect(runtime.prepare.map((c) => c.label)).toEqual([
      "go run github.com/sqlc-dev/sqlc/cmd/sqlc@v1.27.0 generate",
      "go run -tags postgres github.com/golang-migrate/migrate/v4/cmd/migrate@v4.18.1 -path db/migrations -database 'postgres://postgres:postgres@localhost:5432/profile_api?sslmode=disable' up",
    ]);
    expect(runtime.prepare[0]?.env).toEqual({ CGO_ENABLED: "0" });
  });

  test("go + goose: prepare passes driver, dbstring and dir through env", () => {
    const runtime = profile({
      language: "go",
      framework: "gin",
      orm: "gorm",
      migrations: "goose",
      packageManager: "go",
    });
    expect(runtime.prepare).toHaveLength(1);
    expect(runtime.prepare[0]?.label).toBe(
      "go run github.com/pressly/goose/v3/cmd/goose@v3.22.1 up",
    );
    expect(runtime.prepare[0]?.env).toEqual({
      GOOSE_DRIVER: "sqlite3",
      GOOSE_DBSTRING: "profile_api.db",
      GOOSE_MIGRATION_DIR: "migrations",
    });
  });

  test("go + mysql: goose gets the go-sql-driver DSN, golang-migrate the mysql:// form", () => {
    const go = { language: "go", framework: "gin", orm: "sqlx", database: "mysql" } as const;
    const goose = profile({ ...go, migrations: "goose", packageManager: "go" });
    expect(goose.prepare[0]?.env?.GOOSE_DBSTRING).toBe(
      "root:password@tcp(localhost:3306)/profile_api?parseTime=true",
    );
    const migrate = profile({ ...go, migrations: "golang-migrate", packageManager: "go" });
    expect(migrate.prepare[0]?.args).toContain(
      "mysql://root:password@tcp(localhost:3306)/profile_api",
    );
  });

  test("go + sqlite + golang-migrate: uses the pure-Go sqlite driver", () => {
    const runtime = profile({
      language: "go",
      framework: "gin",
      orm: "sqlx",
      migrations: "golang-migrate",
      packageManager: "go",
    });
    expect(runtime.prepare[0]?.args).toEqual(
      expect.arrayContaining(["-tags", "sqlite", "sqlite://profile_api.db"]),
    );
  });

  test("go bare is a oneshot like python", () => {
    const runtime = profile({
      language: "go",
      framework: "none",
      orm: "none",
      migrations: "none",
      database: "none",
      packageManager: "go",
    });
    expect(runtime.kind).toBe("oneshot");
    expect(runtime.run().label).toBe("go run ./cmd/api");
  });

  test("rust axum: cargo run + PORT env + htmx /web/now probe", () => {
    const runtime = profile({
      language: "rust",
      framework: "axum",
      orm: "none",
      packageManager: "cargo",
      frontend: "htmx",
    });
    expect(runtime.install.label).toBe("cargo build");
    expect(runtime.run({ port: 4000 }).env).toEqual({ PORT: "4000" });
    expect(runtime.probes.map((p) => p.path)).toEqual(["/health", "/web/now"]);
  });
});
