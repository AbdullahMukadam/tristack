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

describe("go setup commands work without a C compiler", () => {
  it("README uses plain go test and a shell-neutral sqlc command; Makefile disables cgo", async () => {
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
    const readme = findFile(result.value.root, "README.md") ?? "";
    expect(readme).toMatch(/^go test \.\/\.\.\. /m);
    expect(readme).not.toContain("go test -race");
    const readmeSqlc = readme.match(sqlcRun) ?? [];
    expect(readmeSqlc.length).toBeGreaterThan(0);
    for (const line of readmeSqlc) expect(line).toStartWith("go run");

    const makefile = findFile(result.value.root, "Makefile") ?? "";
    const makeSqlc = makefile.match(sqlcRun) ?? [];
    expect(makeSqlc.length).toBeGreaterThan(0);
    for (const line of makeSqlc) expect(line.trim()).toStartWith("CGO_ENABLED=0 go run");
  });
});
