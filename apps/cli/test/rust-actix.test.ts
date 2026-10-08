import { describe, expect, it } from "bun:test";

import type { Database, ORM } from "@tristack/types";

import { createVirtual } from "../src/index";
import { collectFiles } from "./setup";

function withDatabaseName(db: string | undefined): string {
  const name = /const DATABASE_NAME: &str = "(.*)";/.exec(db ?? "")?.[1] ?? "";
  return (db ?? "").replaceAll("{DATABASE_NAME}", name);
}

describe("Actix Web generated project", () => {
  for (const frontend of ["none", "htmx"] as const) {
    for (const orm of ["none", "seaorm", "diesel", "sqlx-rust"] as const) {
      it(`${frontend} with ${orm} emits Rust sources with final newlines`, async () => {
        const result = await createVirtual({
          projectName: "actix-example",
          language: "rust",
          framework: "actix-web",
          frontend,
          orm,
          database: orm === "none" ? "none" : "sqlite",
          migrations: "none",
          packageManager: "cargo",
          addons: [],
        });
        if (result.isErr()) throw result.error;
        const files = collectFiles(result.value.root, result.value.root.path);
        expect(files.has(".env.example")).toBe(true);
        expect(files.has("env.example")).toBe(false);
        const sources = [...files].filter(([path]) => path.endsWith(".rs"));
        expect(sources.length).toBeGreaterThan(0);
        for (const [path, content] of sources) {
          expect(content.endsWith("\n"), path).toBe(true);
        }
      });
    }
  }

  for (const orm of ["seaorm", "diesel", "sqlx-rust"] satisfies ORM[]) {
    it(`${orm} uses a matching SQLite URL in env and connection fallback`, async () => {
      const result = await createVirtual({
        projectName: "actix-example",
        language: "rust",
        framework: "actix-web",
        orm,
        database: "sqlite",
        migrations: "none",
        packageManager: "cargo",
        addons: [],
      });
      if (result.isErr()) throw result.error;
      const files = collectFiles(result.value.root, result.value.root.path);
      const expected = orm === "diesel" ? "actix_example.db" : "sqlite://actix_example.db?mode=rwc";
      expect(files.get(".env.example")).toContain(`DATABASE_URL=${expected}`);
      expect(withDatabaseName(files.get("src/db.rs"))).toContain(`"${expected}"`);
    });
  }
});

describe("Actix Web Cargo.toml dependencies", () => {
  for (const frontend of ["none", "htmx"] as const) {
    it(`declares actix-web = "4" with frontend ${frontend}`, async () => {
      const result = await createVirtual({
        projectName: "actix-example",
        language: "rust",
        framework: "actix-web",
        frontend,
        orm: "none",
        database: "none",
        migrations: "none",
        packageManager: "cargo",
        addons: [],
      });
      if (result.isErr()) throw result.error;
      const files = collectFiles(result.value.root, result.value.root.path);
      const cargo = files.get("Cargo.toml")!;
      expect(cargo).toContain('actix-web = "4"');
    });
  }

  it('declares askama = "0.14" only when frontend is htmx', async () => {
    const htmxResult = await createVirtual({
      projectName: "actix-example",
      language: "rust",
      framework: "actix-web",
      frontend: "htmx",
      orm: "none",
      database: "none",
      migrations: "none",
      packageManager: "cargo",
      addons: [],
    });
    if (htmxResult.isErr()) throw htmxResult.error;
    const htmxFiles = collectFiles(htmxResult.value.root, htmxResult.value.root.path);
    expect(htmxFiles.get("Cargo.toml")).toContain('askama = "0.14"');

    const apiResult = await createVirtual({
      projectName: "actix-example",
      language: "rust",
      framework: "actix-web",
      frontend: "none",
      orm: "none",
      database: "none",
      migrations: "none",
      packageManager: "cargo",
      addons: [],
    });
    if (apiResult.isErr()) throw apiResult.error;
    const apiFiles = collectFiles(apiResult.value.root, apiResult.value.root.path);
    expect(apiFiles.get("Cargo.toml")).not.toContain("askama");
  });

  const ormDriverCases: Array<{
    orm: ORM;
    database: Database;
    expectedSnippet: string;
  }> = [
    {
      orm: "seaorm",
      database: "sqlite",
      expectedSnippet:
        'sea-orm = { version = "1", features = ["sqlx-sqlite", "runtime-tokio-rustls"] }',
    },
    {
      orm: "seaorm",
      database: "postgres",
      expectedSnippet:
        'sea-orm = { version = "1", features = ["sqlx-postgres", "runtime-tokio-rustls"] }',
    },
    {
      orm: "seaorm",
      database: "mysql",
      expectedSnippet:
        'sea-orm = { version = "1", features = ["sqlx-mysql", "runtime-tokio-rustls"] }',
    },
    {
      orm: "diesel",
      database: "sqlite",
      expectedSnippet: 'diesel = { version = "2", features = ["sqlite", "r2d2", "chrono"] }',
    },
    {
      orm: "diesel",
      database: "postgres",
      expectedSnippet: 'diesel = { version = "2", features = ["postgres", "r2d2", "chrono"] }',
    },
    {
      orm: "diesel",
      database: "mysql",
      expectedSnippet: 'diesel = { version = "2", features = ["mysql", "r2d2", "chrono"] }',
    },
    {
      orm: "sqlx-rust",
      database: "sqlite",
      expectedSnippet:
        'sqlx = { version = "0.8", features = ["runtime-tokio", "sqlite", "chrono"] }',
    },
    {
      orm: "sqlx-rust",
      database: "postgres",
      expectedSnippet:
        'sqlx = { version = "0.8", features = ["runtime-tokio", "tls-rustls", "postgres", "chrono"] }',
    },
    {
      orm: "sqlx-rust",
      database: "mysql",
      expectedSnippet:
        'sqlx = { version = "0.8", features = ["runtime-tokio", "tls-rustls", "mysql", "chrono"] }',
    },
  ];

  for (const { orm, database, expectedSnippet } of ormDriverCases) {
    it(`declares driver dependency for ${orm} with ${database}`, async () => {
      const result = await createVirtual({
        projectName: "actix-example",
        language: "rust",
        framework: "actix-web",
        orm,
        database,
        migrations: "none",
        packageManager: "cargo",
        addons: [],
      });
      if (result.isErr()) throw result.error;
      const files = collectFiles(result.value.root, result.value.root.path);
      const cargo = files.get("Cargo.toml")!;
      expect(cargo).toContain(expectedSnippet);
      if (orm === "diesel" && database === "sqlite") {
        expect(cargo).toContain('libsqlite3-sys = { version = "0.32", features = ["bundled"] }');
      }
    });
  }
});

describe("Actix Web HTMX vs API frontend emission", () => {
  it("htmx frontend emits Askama template files and routes", async () => {
    const result = await createVirtual({
      projectName: "actix-example",
      language: "rust",
      framework: "actix-web",
      frontend: "htmx",
      orm: "none",
      database: "none",
      migrations: "none",
      packageManager: "cargo",
      addons: [],
    });
    if (result.isErr()) throw result.error;
    const files = collectFiles(result.value.root, result.value.root.path);
    expect(files.has("templates/index.html")).toBe(true);
    expect(files.has("templates/now.html")).toBe(true);
    expect(files.get("templates/index.html")).toContain('hx-get="/web/now"');
    expect(files.get("templates/now.html")).toContain("{{ now }}");

    expect(files.get("src/views.rs")).toContain("struct IndexTemplate");
    expect(files.get("src/views.rs")).toContain("struct NowTemplate");
    expect(files.has("src/pages.rs")).toBe(true);
    expect(files.has("src/api.rs")).toBe(false);
    expect(files.has("templates/items.html")).toBe(false);

    const main = files.get("src/main.rs")!;
    expect(main).toContain('cfg.route("/health", web::get().to(health));');
    expect(main).toContain('cfg.route("/", web::get().to(pages::index));');
    expect(main).toContain('cfg.route("/web/now", web::get().to(pages::now));');
  });

  it("api frontend (none) omits HTML templates and includes JSON health endpoint", async () => {
    const result = await createVirtual({
      projectName: "actix-example",
      language: "rust",
      framework: "actix-web",
      frontend: "none",
      orm: "none",
      database: "none",
      migrations: "none",
      packageManager: "cargo",
      addons: [],
    });
    if (result.isErr()) throw result.error;
    const files = collectFiles(result.value.root, result.value.root.path);
    expect(files.has("templates/index.html")).toBe(false);
    expect(files.has("templates/now.html")).toBe(false);

    expect(files.has("src/views.rs")).toBe(false);
    expect(files.has("src/pages.rs")).toBe(false);

    const main = files.get("src/main.rs")!;
    expect(main).not.toContain("/web/now");
    expect(main).toContain('cfg.route("/health", web::get().to(health));');
    expect(main).toContain('json!({ "status": "ok" })');
  });
});

describe("Actix Web server databases (PostgreSQL and MySQL)", () => {
  for (const orm of ["seaorm", "diesel", "sqlx-rust"] satisfies ORM[]) {
    it(`${orm} configures Postgres URL in env and db.rs with newline termination`, async () => {
      const result = await createVirtual({
        projectName: "actix-example",
        language: "rust",
        framework: "actix-web",
        orm,
        database: "postgres",
        migrations: "none",
        packageManager: "cargo",
        addons: [],
      });
      if (result.isErr()) throw result.error;
      const files = collectFiles(result.value.root, result.value.root.path);
      const expectedUrl = "postgres://postgres:postgres@localhost:5432/actix_example";
      expect(files.get(".env.example")).toContain(`DATABASE_URL=${expectedUrl}`);
      expect(withDatabaseName(files.get("src/db.rs"))).toContain(`"${expectedUrl}"`);

      const sources = [...files].filter(([path]) => path.endsWith(".rs"));
      expect(sources.length).toBeGreaterThan(0);
      for (const [path, content] of sources) {
        expect(content.endsWith("\n"), path).toBe(true);
      }
    });

    it(`${orm} configures MySQL URL in env and db.rs with newline termination`, async () => {
      const result = await createVirtual({
        projectName: "actix-example",
        language: "rust",
        framework: "actix-web",
        orm,
        database: "mysql",
        migrations: "none",
        packageManager: "cargo",
        addons: [],
      });
      if (result.isErr()) throw result.error;
      const files = collectFiles(result.value.root, result.value.root.path);
      const expectedUrl = "mysql://root:password@127.0.0.1:3306/actix_example";
      expect(files.get(".env.example")).toContain(`DATABASE_URL=${expectedUrl}`);
      expect(withDatabaseName(files.get("src/db.rs"))).toContain(`"${expectedUrl}"`);

      const sources = [...files].filter(([path]) => path.endsWith(".rs"));
      expect(sources.length).toBeGreaterThan(0);
      for (const [path, content] of sources) {
        expect(content.endsWith("\n"), path).toBe(true);
      }
    });
  }

  it("no orm omits DATABASE_URL from .env.example and omits src/db.rs", async () => {
    const result = await createVirtual({
      projectName: "actix-example",
      language: "rust",
      framework: "actix-web",
      orm: "none",
      database: "none",
      migrations: "none",
      packageManager: "cargo",
      addons: [],
    });
    if (result.isErr()) throw result.error;
    const files = collectFiles(result.value.root, result.value.root.path);
    const envContent = files.get(".env.example")!;
    expect(envContent).toContain("APP_NAME=actix-example");
    expect(envContent).toContain("PORT=8000");
    expect(envContent).not.toContain("DATABASE_URL");
    expect(files.has("src/db.rs")).toBe(false);
  });
});

describe("Rust Docker addon with Actix Web", () => {
  for (const database of ["none", "sqlite", "postgres", "mysql"] as const) {
    it(`${database} generates an app service and matching connection settings`, async () => {
      const orm = database === "none" ? "none" : "diesel";
      const result = await createVirtual({
        projectName: "docker-example",
        language: "rust",
        framework: "actix-web",
        frontend: "htmx",
        orm,
        database,
        migrations: "none",
        packageManager: "cargo",
        addons: ["docker"],
      });
      if (result.isErr()) throw result.error;
      const files = collectFiles(result.value.root, result.value.root.path);
      const compose = files.get("docker-compose.yml")!;
      const dockerfile = files.get("Dockerfile")!;
      expect(compose).toContain("  app:\n    build: .");
      expect(compose).toContain('PORT: "8000"');
      expect(dockerfile).toContain("FROM rust:1-slim-bookworm AS builder");
      expect(dockerfile).toContain("COPY . .\nRUN cargo build --release");
      expect(dockerfile).not.toContain("COPY src ./src");
      if (database === "postgres" || database === "mysql") {
        expect(compose).toContain("condition: service_healthy");
        expect(compose).toContain("    healthcheck:");
        expect(compose).toContain(
          database === "postgres"
            ? "DATABASE_URL: postgres://postgres:postgres@db:5432/docker_example"
            : "DATABASE_URL: mysql://root:password@db:3306/docker_example",
        );
        expect(dockerfile).toContain(
          database === "postgres" ? "libpq-dev" : "default-libmysqlclient-dev pkg-config",
        );
        expect(dockerfile).toContain(database === "postgres" ? "libpq5" : "libmariadb3");
      } else {
        expect(compose).not.toContain("  db:");
        if (database === "sqlite") {
          expect(compose).toContain("      - appdata:/data");
          expect(dockerfile).toContain("ENV DATABASE_URL=/data/docker_example.db");
        } else {
          expect(compose).not.toContain("volumes:");
        }
      }
    });
  }

  for (const orm of ["seaorm", "sqlx-rust"] as const) {
    it(`${orm} Docker service can create its SQLite database`, async () => {
      const result = await createVirtual({
        projectName: "docker-example",
        language: "rust",
        framework: "actix-web",
        orm,
        database: "sqlite",
        migrations: "none",
        packageManager: "cargo",
        addons: ["docker"],
      });
      if (result.isErr()) throw result.error;
      const files = collectFiles(result.value.root, result.value.root.path);
      expect(files.get("Dockerfile")).toContain(
        "ENV DATABASE_URL=sqlite:///data/docker_example.db?mode=rwc",
      );
    });

    it(`${orm} Dockerfile omits C client libraries for postgres and mysql`, async () => {
      for (const database of ["postgres", "mysql"] as const) {
        const result = await createVirtual({
          projectName: "docker-example",
          language: "rust",
          framework: "actix-web",
          orm,
          database,
          migrations: "none",
          packageManager: "cargo",
          addons: ["docker"],
        });
        if (result.isErr()) throw result.error;
        const files = collectFiles(result.value.root, result.value.root.path);
        const dockerfile = files.get("Dockerfile")!;
        expect(dockerfile).not.toContain("libpq-dev");
        expect(dockerfile).not.toContain("libpq5");
        expect(dockerfile).not.toContain("default-libmysqlclient-dev");
        expect(dockerfile).not.toContain("libmariadb3");
      }
    });
  }
});

describe("Actix Web configuration and validation error handling", () => {
  for (const orm of ["seaorm", "diesel", "sqlx-rust"] as const) {
    it(`rejects ${orm} when database is set to none`, async () => {
      const result = await createVirtual({
        projectName: "actix-example",
        language: "rust",
        framework: "actix-web",
        orm,
        database: "none",
        migrations: "none",
        packageManager: "cargo",
        addons: [],
      });
      expect(result.isErr()).toBe(true);
      if (result.isErr()) {
        expect(result.error.message).toContain("An ORM needs a database");
      }
    });
  }

  it("rejects incompatible ORM for the Rust language", async () => {
    const result = await createVirtual({
      projectName: "actix-example",
      language: "rust",
      framework: "actix-web",
      orm: "sqlalchemy" as any,
      database: "sqlite",
      migrations: "none",
      packageManager: "cargo",
      addons: [],
    });
    expect(result.isErr()).toBe(true);
    if (result.isErr()) {
      expect(result.error.message).toContain(
        'ORM "sqlalchemy" is not available for the "rust" language.',
      );
    }
  });

  it("rejects incompatible migrations tool for the Rust language", async () => {
    const result = await createVirtual({
      projectName: "actix-example",
      language: "rust",
      framework: "actix-web",
      orm: "seaorm",
      database: "sqlite",
      migrations: "alembic" as any,
      packageManager: "cargo",
      addons: [],
    });
    expect(result.isErr()).toBe(true);
    if (result.isErr()) {
      expect(result.error.message).toContain(
        'Migrations tool "alembic" is not available for the "rust" language.',
      );
    }
  });

  it("rejects incompatible frontend for the Rust language", async () => {
    const result = await createVirtual({
      projectName: "actix-example",
      language: "rust",
      framework: "actix-web",
      frontend: "react" as any,
      orm: "none",
      database: "none",
      migrations: "none",
      packageManager: "cargo",
      addons: [],
    });
    expect(result.isErr()).toBe(true);
    if (result.isErr()) {
      expect(result.error.message).toContain(
        'Frontend "react" is not available for the "rust" language.',
      );
    }
  });
});
