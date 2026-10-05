import { describe, expect, it } from "bun:test";

import type { ORM } from "@tristack/types";

import { createVirtual } from "../src/index";
import { collectFiles } from "./setup";

describe("Axum generated project", () => {
  for (const frontend of ["none", "htmx"] as const) {
    for (const orm of ["none", "seaorm", "diesel", "sqlx-rust"] as const) {
      it(`${frontend} with ${orm} emits Rust sources with final newlines`, async () => {
        const result = await createVirtual({
          projectName: "axum-example",
          language: "rust",
          framework: "axum",
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
        projectName: "axum-example",
        language: "rust",
        framework: "axum",
        orm,
        database: "sqlite",
        migrations: "none",
        packageManager: "cargo",
        addons: [],
      });
      if (result.isErr()) throw result.error;
      const files = collectFiles(result.value.root, result.value.root.path);
      const expected = orm === "diesel" ? "axum_example.db" : "sqlite://axum_example.db?mode=rwc";
      expect(files.get(".env.example")).toContain(`DATABASE_URL=${expected}`);
      expect(files.get("src/db.rs")).toContain(`"${expected}"`);
    });

    it(`${orm} uses a matching MySQL URL in env and connection fallback with 127.0.0.1`, async () => {
      const result = await createVirtual({
        projectName: "axum-example",
        language: "rust",
        framework: "axum",
        orm,
        database: "mysql",
        migrations: "none",
        packageManager: "cargo",
        addons: [],
      });
      if (result.isErr()) throw result.error;
      const files = collectFiles(result.value.root, result.value.root.path);
      const expected = "mysql://root:password@127.0.0.1:3306/axum_example";
      expect(files.get(".env.example")).toContain(`DATABASE_URL=${expected}`);
      expect(files.get("src/db.rs")).toContain(`"${expected}"`);
    });
  }
});

describe("Rust Docker addon", () => {
  for (const database of ["none", "sqlite", "postgres", "mysql"] as const) {
    it(`${database} generates an app service and matching connection settings`, async () => {
      const orm = database === "none" ? "none" : "diesel";
      const result = await createVirtual({
        projectName: "docker-example",
        language: "rust",
        framework: "axum",
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
        expect(compose).not.toContain("volumes:");
        if (database === "sqlite") {
          expect(compose).toContain("DATABASE_URL: docker_example.db");
        }
      }
    });
  }

  for (const orm of ["seaorm", "sqlx-rust"] as const) {
    it(`${orm} Docker service can create its SQLite database`, async () => {
      const result = await createVirtual({
        projectName: "docker-example",
        language: "rust",
        framework: "axum",
        orm,
        database: "sqlite",
        migrations: "none",
        packageManager: "cargo",
        addons: ["docker"],
      });
      if (result.isErr()) throw result.error;
      const files = collectFiles(result.value.root, result.value.root.path);
      expect(files.get("docker-compose.yml")).toContain(
        "DATABASE_URL: sqlite://docker_example.db?mode=rwc",
      );
    });
  }
});
