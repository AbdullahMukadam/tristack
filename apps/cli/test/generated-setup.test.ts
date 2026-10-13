import { describe, expect, it } from "bun:test";

import type { VirtualNode } from "@tristack/template-generator";

import { createVirtual } from "../src/index";

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

describe("sqlmodel projects can use async SQLAlchemy", () => {
  for (const packageManager of ["uv", "poetry", "pip"] as const) {
    it(`${packageManager} pyproject installs sqlalchemy[asyncio]`, async () => {
      const result = await createVirtual({
        language: "python",
        framework: "fastapi",
        orm: "sqlmodel",
        migrations: "alembic",
        database: "sqlite",
        packageManager,
        addons: [],
      });
      if (result.isErr()) throw result.error;

      const pyproject = findFile(result.value.root, "pyproject.toml");
      expect(pyproject).toContain(
        packageManager === "poetry"
          ? 'sqlalchemy = { extras = ["asyncio"]'
          : '"sqlalchemy[asyncio]"',
      );
    });
  }
});

describe("go README test commands", () => {
  it("lists a plain go test before the race detector", async () => {
    const result = await createVirtual({
      language: "go",
      framework: "gin",
      orm: "none",
      migrations: "none",
      database: "none",
      packageManager: "go",
      addons: [],
    });
    if (result.isErr()) throw result.error;

    const readme = findFile(result.value.root, "README.md") ?? "";
    const plain = readme.search(/^go test \.\/\.\.\. /m);
    const race = readme.search(/^go test -race \.\/\.\.\. .*C compiler/m);
    expect(plain).toBeGreaterThan(-1);
    expect(race).toBeGreaterThan(plain);
  });
});

describe("sqlc generation does not need a C compiler", () => {
  it("README and Makefile run sqlc with CGO_ENABLED=0", async () => {
    const result = await createVirtual({
      language: "go",
      framework: "gin",
      orm: "sqlc",
      migrations: "goose",
      database: "sqlite",
      packageManager: "go",
      addons: [],
    });
    if (result.isErr()) throw result.error;

    const sqlcRun = /^.*go run github\.com\/sqlc-dev\/sqlc\/cmd\/sqlc@\S+ generate.*$/gm;
    for (const name of ["README.md", "Makefile"]) {
      const content = findFile(result.value.root, name);
      const lines = content?.match(sqlcRun) ?? [];
      expect(lines.length).toBeGreaterThan(0);
      for (const line of lines) {
        expect(line).toContain("CGO_ENABLED=0 go run");
      }
    }
  });
});
