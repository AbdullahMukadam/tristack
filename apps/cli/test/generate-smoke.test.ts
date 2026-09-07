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

    const main = findFile(tree.root, "main.go");
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
    expect(findByPath(tree.root, ["internal", "db", "models.go"])).not.toBeNull();

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
});
