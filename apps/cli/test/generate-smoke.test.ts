import { describe, expect, it } from "bun:test";

import type { VirtualNode } from "@tristack/template-generator";

import { createVirtual } from "../src/index";
import { validateResolvedConfigCompatibility } from "../src/validation";

function findFile(root: VirtualNode, name: string): string | null {
  if (root.type !== "directory") {
    return root.name === name ? root.content : null;
  }
  for (const node of root.children) {
    if (node.name === name && node.type === "file") return node.content;
    const nested = findFile(node, name);
    if (nested !== null) return nested;
  }
  return null;
}

function findByPath(root: VirtualNode, parts: string[]): string | null {
  const [head, ...rest] = parts;
  const child = root.children.find((node) => node.name === head);
  if (!child) return null;
  if (rest.length === 0 && child.type === "file") return child.content;
  return findByPath(child, rest);
}

function rootFileNames(root: VirtualNode): string[] {
  if (root.type !== "directory") return [];
  return root.children.filter((node) => node.type === "file").map((node) => node.name);
}

describe("createVirtual - python fastapi scaffold", () => {
  it("generates a FastAPI + SQLModel project", async () => {
    const result = await createVirtual({
      language: "python",
      framework: "fastapi",
      orm: "sqlmodel",
      migrations: "alembic",
      database: "sqlite",
      packageManager: "uv",
      addons: ["docker", "ruff", "pytest"],
    });

    expect(result.isOk()).toBe(true);
    if (result.isErr()) throw result.error;

    const tree = result.value;
    expect(tree.fileCount).toBeGreaterThan(0);

    const main = findFile(tree.root, "main.py");
    expect(main).not.toBeNull();

    const pyproject = findFile(tree.root, "pyproject.toml");
    expect(pyproject).not.toBeNull();

    const dockerfile = findFile(tree.root, "Dockerfile");
    expect(dockerfile).not.toBeNull();

    expect(findFile(tree.root, "django")).toBeNull();
  });
});

describe("createVirtual - go scaffold", () => {
  it("generates a Gin + GORM project", async () => {
    const result = await createVirtual({
      language: "go",
      framework: "gin",
      orm: "gorm",
      migrations: "goose",
      database: "sqlite",
      packageManager: "go",
      addons: ["docker", "air", "golangci-lint"],
    });

    expect(result.isOk()).toBe(true);
    if (result.isErr()) throw result.error;

    const tree = result.value;
    expect(tree.fileCount).toBeGreaterThan(0);

    const main = findByPath(tree.root, ["cmd", "api", "main.go"]);
    expect(main).not.toBeNull();

    const goMod = findFile(tree.root, "go.mod");
    expect(goMod).not.toBeNull();
    expect(goMod).toContain("github.com/gin-gonic/gin");

    const dockerfile = findFile(tree.root, "Dockerfile");
    expect(dockerfile).not.toBeNull();

    expect(rootFileNames(tree.root)).not.toContain("db.go");

    const dbGo = findByPath(tree.root, ["internal", "db", "db.go"]);
    expect(dbGo).not.toBeNull();
    expect(dbGo).toContain("package db");
    expect(findByPath(tree.root, ["internal", "model", "item.go"])).not.toBeNull();

    expect(findByPath(tree.root, ["internal", "config", "config.go"])).not.toBeNull();
    expect(findByPath(tree.root, ["internal", "service", "item_service.go"])).not.toBeNull();
    expect(findByPath(tree.root, ["internal", "repository", "item.go"])).not.toBeNull();
    expect(findByPath(tree.root, ["internal", "handler", "handler.go"])).not.toBeNull();

    expect(rootFileNames(tree.root)).toContain("Makefile");
    expect(findByPath(tree.root, ["cmd", "api", "main.go"])).not.toBeNull();

    expect(findFile(tree.root, "fastapi")).toBeNull();
  });

  it("generates a stdlib + sqlx project with echo traffic avoided", async () => {
    const result = await createVirtual({
      language: "go",
      framework: "stdlib",
      orm: "sqlx",
      migrations: "golang-migrate",
      database: "postgres",
      packageManager: "go",
      addons: ["github-actions"],
    });

    expect(result.isOk()).toBe(true);
    if (result.isErr()) throw result.error;

    const goMod = findFile(result.value.root, "go.mod");
    expect(goMod).not.toBeNull();
    expect(goMod).toContain("github.com/jmoiron/sqlx");
    expect(goMod).not.toContain("gin");
  });
});

describe("createVirtual - django scaffold", () => {
  it("generates a Django + DRF project with the production layout", async () => {
    const result = await createVirtual({
      language: "python",
      framework: "django",
      orm: "none",
      migrations: "none",
      database: "sqlite",
      packageManager: "uv",
      addons: [],
    });

    expect(result.isOk()).toBe(true);
    if (result.isErr()) throw result.error;

    const tree = result.value;
    expect(tree.fileCount).toBeGreaterThan(0);

    const managePy = findFile(tree.root, "manage.py");
    expect(managePy).not.toBeNull();
    expect(managePy).toContain("config.settings.development");

    const pyproject = findFile(tree.root, "pyproject.toml");
    expect(pyproject).not.toBeNull();
    expect(pyproject).toContain("djangorestframework");

    expect(findFile(tree.root, "db.py")).toBeNull();
    expect(findFile(tree.root, "alembic.ini")).toBeNull();

    expect(findByPath(tree.root, ["config", "settings", "base.py"])).not.toBeNull();
    expect(findByPath(tree.root, ["config", "settings", "development.py"])).not.toBeNull();
    expect(findByPath(tree.root, ["config", "urls.py"])).not.toBeNull();

    expect(findByPath(tree.root, ["apps", "core", "views.py"])).not.toBeNull();
    expect(findByPath(tree.root, ["apps", "users", "models.py"])).not.toBeNull();
    expect(findByPath(tree.root, ["apps", "users", "services.py"])).not.toBeNull();
    expect(findByPath(tree.root, ["templates", "base.html"])).not.toBeNull();
    expect(findByPath(tree.root, ["static", "README.md"])).not.toBeNull();
    expect(findByPath(tree.root, ["media", "README.md"])).not.toBeNull();
  });
});

describe("createVirtual - rust scaffold", () => {
  it("generates an Axum + SeaORM project", async () => {
    const result = await createVirtual({
      language: "rust",
      framework: "axum",
      orm: "seaorm",
      migrations: "none",
      database: "sqlite",
      packageManager: "cargo",
      addons: ["docker", "clippy"],
    });

    expect(result.isOk()).toBe(true);
    if (result.isErr()) throw result.error;

    const tree = result.value;
    expect(tree.fileCount).toBeGreaterThan(0);

    const cargoToml = findFile(tree.root, "Cargo.toml");
    expect(cargoToml).not.toBeNull();
    expect(cargoToml).toContain("axum");
    expect(cargoToml).toContain("sea-orm");

    const main = findByPath(tree.root, ["src", "main.rs"]);
    expect(main).not.toBeNull();
    expect(main).toContain("mod db");

    const db = findByPath(tree.root, ["src", "db.rs"]);
    expect(db).not.toBeNull();
    expect(db).toContain("sea_orm");

    const dockerfile = findFile(tree.root, "Dockerfile");
    expect(dockerfile).not.toBeNull();

    expect(findFile(tree.root, "main.go")).toBeNull();
    expect(rootFileNames(tree.root)).not.toContain(".gitkeep");
  });

  it("generates an Actix-Web + diesel project", async () => {
    const result = await createVirtual({
      language: "rust",
      framework: "actix-web",
      orm: "diesel",
      migrations: "none",
      database: "postgres",
      packageManager: "cargo",
      addons: ["github-actions", "cargo-watch"],
    });

    expect(result.isOk()).toBe(true);
    if (result.isErr()) throw result.error;

    const tree = result.value;
    expect(tree.fileCount).toBeGreaterThan(0);

    const cargoToml = findFile(tree.root, "Cargo.toml");
    expect(cargoToml).not.toBeNull();
    expect(cargoToml).toContain("actix-web");
    expect(cargoToml).toContain("diesel");

    const main = findByPath(tree.root, ["src", "main.rs"]);
    expect(main).not.toBeNull();
    expect(main).toContain("db::connect");

    const db = findByPath(tree.root, ["src", "db.rs"]);
    expect(db).not.toBeNull();
    expect(db).toContain("PgConnection");

    const ci = findByPath(tree.root, [".github", "workflows", "ci.yml"]);
    expect(ci).not.toBeNull();
    expect(rootFileNames(tree.root)).not.toContain(".gitkeep");
  });
});

describe("createVirtual - no framework (bare)", () => {
  it("generates a bare Python project without a framework entrypoint", async () => {
    const result = await createVirtual({
      projectName: "bare smoke",
      language: "python",
      framework: "none",
      orm: "none",
      migrations: "none",
      database: "none",
      packageManager: "uv",
      addons: ["ruff"],
    });

    expect(result.isOk()).toBe(true);
    if (result.isErr()) throw result.error;

    const tree = result.value;
    expect(tree.fileCount).toBeGreaterThan(0);

    const pyproject = findFile(tree.root, "pyproject.toml");
    expect(pyproject).not.toBeNull();
    expect(pyproject).not.toContain("uvicorn");
    expect(pyproject).toContain('description = "bare smoke"');

    expect(rootFileNames(tree.root)).not.toContain("main.py");
    expect(findByPath(tree.root, ["src", "config.py"])).not.toBeNull();

    const main = findByPath(tree.root, ["src", "main.py"]);
    expect(main).not.toBeNull();
    expect(main).toContain("Hello from bare smoke!");

    const readme = findFile(tree.root, "README.md");
    expect(readme).not.toBeNull();
    expect(readme).not.toContain("uvicorn");
    expect(readme).toContain("no API scaffolded");
    expect(readme).toContain("uv run python -m src.main");
  });

  it("generates a bare Go project with a runnable entrypoint", async () => {
    const result = await createVirtual({
      language: "go",
      framework: "none",
      orm: "none",
      migrations: "none",
      database: "none",
      packageManager: "go",
      addons: [],
    });

    expect(result.isOk()).toBe(true);
    if (result.isErr()) throw result.error;

    const tree = result.value;
    const main = findByPath(tree.root, ["cmd", "api", "main.go"]);
    expect(main).not.toBeNull();
    expect(main).toContain("package main");

    expect(findByPath(tree.root, ["internal", "handler", "handler.go"])).toBeNull();
    expect(findByPath(tree.root, ["internal", "repository", "item.go"])).toBeNull();
    expect(rootFileNames(tree.root)).toContain("Makefile");
  });

  it("generates a bare Rust project with a runnable main", async () => {
    const result = await createVirtual({
      language: "rust",
      framework: "none",
      orm: "none",
      migrations: "none",
      database: "none",
      packageManager: "cargo",
      addons: [],
    });

    expect(result.isOk()).toBe(true);
    if (result.isErr()) throw result.error;

    const main = findByPath(result.value.root, ["src", "main.rs"]);
    expect(main).not.toBeNull();
    expect(main).toContain("fn main");

    const cargoToml = findFile(result.value.root, "Cargo.toml");
    expect(cargoToml).not.toBeNull();
    expect(cargoToml).not.toContain("axum");
  });
});

describe("validateResolvedConfigCompatibility", () => {
  it("accepts a valid python stack", () => {
    const base = {
      projectName: "x",
      projectDir: "/x",
      relativePath: "x",
      language: "python",
      framework: "fastapi",
      orm: "sqlmodel",
      migrations: "alembic",
      database: "sqlite",
      packageManager: "uv",
      addons: [],
      git: false,
      install: false,
    } as const;
    expect(
      validateResolvedConfigCompatibility({
        ...base,
        language: "python",
        framework: "fastapi",
        orm: "sqlmodel",
        migrations: "alembic",
        addons: [],
      }).isOk(),
    ).toBe(true);
  });

  it("rejects a Go framework used with the Python language", () => {
    const result = validateResolvedConfigCompatibility({
      projectName: "x",
      projectDir: "/x",
      relativePath: "x",
      language: "python",
      framework: "gin",
      orm: "sqlmodel",
      migrations: "alembic",
      database: "sqlite",
      packageManager: "uv",
      addons: [],
      git: false,
      install: false,
    });
    expect(result.isErr()).toBe(true);
  });

  it("rejects Django with a non-none ORM", () => {
    const result = validateResolvedConfigCompatibility({
      projectName: "x",
      projectDir: "/x",
      relativePath: "x",
      language: "python",
      framework: "django",
      orm: "sqlmodel",
      migrations: "none",
      database: "sqlite",
      packageManager: "uv",
      addons: [],
      git: false,
      install: false,
    });
    expect(result.isErr()).toBe(true);
  });

  it("rejects Django with a non-none migrations tool", () => {
    const result = validateResolvedConfigCompatibility({
      projectName: "x",
      projectDir: "/x",
      relativePath: "x",
      language: "python",
      framework: "django",
      orm: "none",
      migrations: "alembic",
      database: "sqlite",
      packageManager: "uv",
      addons: [],
      git: false,
      install: false,
    });
    expect(result.isErr()).toBe(true);
  });

  it("accepts Django with orm and migrations set to none", () => {
    const result = validateResolvedConfigCompatibility({
      projectName: "x",
      projectDir: "/x",
      relativePath: "x",
      language: "python",
      framework: "django",
      orm: "none",
      migrations: "none",
      database: "sqlite",
      packageManager: "uv",
      addons: [],
      git: false,
      install: false,
    });
    expect(result.isOk()).toBe(true);
  });

  it("accepts a no-framework stack with orm, migrations, and database set to none", () => {
    const result = validateResolvedConfigCompatibility({
      projectName: "x",
      projectDir: "/x",
      relativePath: "x",
      language: "python",
      framework: "none",
      orm: "none",
      migrations: "none",
      database: "none",
      packageManager: "uv",
      addons: [],
      git: false,
      install: false,
    });
    expect(result.isOk()).toBe(true);
  });

  it("rejects no-framework with a non-none ORM", () => {
    const result = validateResolvedConfigCompatibility({
      projectName: "x",
      projectDir: "/x",
      relativePath: "x",
      language: "python",
      framework: "none",
      orm: "sqlmodel",
      migrations: "none",
      database: "none",
      packageManager: "uv",
      addons: [],
      git: false,
      install: false,
    });
    expect(result.isErr()).toBe(true);
  });

  it("rejects no-framework with a non-none database", () => {
    const result = validateResolvedConfigCompatibility({
      projectName: "x",
      projectDir: "/x",
      relativePath: "x",
      language: "go",
      framework: "none",
      orm: "none",
      migrations: "none",
      database: "sqlite",
      packageManager: "go",
      addons: [],
      git: false,
      install: false,
    });
    expect(result.isErr()).toBe(true);
  });
});
