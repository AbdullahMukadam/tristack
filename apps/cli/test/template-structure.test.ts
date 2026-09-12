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

function findByPath(root: VirtualNode, parts: string[]): string | null {
  const [head, ...rest] = parts;
  const child = root.children.find((node) => node.name === head);
  if (!child) return null;
  if (rest.length === 0 && child.type === "file") return child.content;
  return findByPath(child, rest);
}

async function generate(config: {
  language: string;
  framework: string;
  orm: string;
  migrations: string;
  database: string;
  packageManager: string;
  addons: string[];
}) {
  const result = await createVirtual(config as never);
  expect(result.isOk()).toBe(true);
  if (result.isErr()) throw result.error;
  return result.value;
}

describe("python template structure verification", () => {
  it("fastapi + sqlmodel: layered structure present", async () => {
    const tree = await generate({
      language: "python",
      framework: "fastapi",
      orm: "sqlmodel",
      migrations: "none",
      database: "sqlite",
      packageManager: "uv",
      addons: [],
    });

    expect(findByPath(tree.root, ["src", "api", "v1", "routes", "items.py"])).not.toBeNull();
    expect(findByPath(tree.root, ["src", "schemas", "items.py"])).not.toBeNull();
    expect(findByPath(tree.root, ["src", "services", "items.py"])).not.toBeNull();
    expect(findByPath(tree.root, ["src", "repositories", "items.py"])).not.toBeNull();
    expect(findByPath(tree.root, ["src", "models.py"])).not.toBeNull();
    expect(findByPath(tree.root, ["src", "db.py"])).not.toBeNull();
    expect(findByPath(tree.root, ["src", "middleware.py"])).not.toBeNull();
    expect(findByPath(tree.root, ["src", "exceptions.py"])).not.toBeNull();
  });

  it("fastapi + no orm: persistence layers excluded", async () => {
    const tree = await generate({
      language: "python",
      framework: "fastapi",
      orm: "none",
      migrations: "none",
      database: "none",
      packageManager: "uv",
      addons: [],
    });

    expect(findByPath(tree.root, ["src", "schemas"])).toBeNull();
    expect(findByPath(tree.root, ["src", "services"])).toBeNull();
    expect(findByPath(tree.root, ["src", "repositories"])).toBeNull();
    expect(findByPath(tree.root, ["src", "models.py"])).toBeNull();
    expect(findByPath(tree.root, ["src", "db.py"])).toBeNull();
    expect(findByPath(tree.root, ["src", "main.py"])).not.toBeNull();
    const v1 = findByPath(tree.root, ["src", "api", "v1", "router.py"]);
    expect(v1).not.toBeNull();
    expect(v1).not.toContain("routes");
  });

  it("fastapi + sqlmodel + alembic: no init_db call in main.py", async () => {
    const tree = await generate({
      language: "python",
      framework: "fastapi",
      orm: "sqlmodel",
      migrations: "alembic",
      database: "sqlite",
      packageManager: "uv",
      addons: [],
    });

    const main = findByPath(tree.root, ["src", "main.py"]);
    expect(main).not.toBeNull();
    expect(main).not.toContain("init_db");
    expect(findByPath(tree.root, ["migrations", "env.py"])).not.toBeNull();
  });

  it("litestar + sqlmodel: layered structure present", async () => {
    const tree = await generate({
      language: "python",
      framework: "litestar",
      orm: "sqlmodel",
      migrations: "none",
      database: "sqlite",
      packageManager: "uv",
      addons: [],
    });

    expect(findByPath(tree.root, ["src", "schemas", "items.py"])).not.toBeNull();
    expect(findByPath(tree.root, ["src", "services", "items.py"])).not.toBeNull();
    expect(findByPath(tree.root, ["src", "repositories", "items.py"])).not.toBeNull();
    expect(findByPath(tree.root, ["src", "api", "v1", "routes", "items.py"])).not.toBeNull();
    expect(findByPath(tree.root, ["src", "config.py"])).not.toBeNull();
  });

  it("litestar + no orm: persistence layers excluded", async () => {
    const tree = await generate({
      language: "python",
      framework: "litestar",
      orm: "none",
      migrations: "none",
      database: "none",
      packageManager: "uv",
      addons: [],
    });

    expect(findByPath(tree.root, ["src", "schemas"])).toBeNull();
    expect(findByPath(tree.root, ["src", "services"])).toBeNull();
    expect(findByPath(tree.root, ["src", "repositories"])).toBeNull();
  });

  it("flask + sqlmodel: layered structure present", async () => {
    const tree = await generate({
      language: "python",
      framework: "flask",
      orm: "sqlmodel",
      migrations: "none",
      database: "sqlite",
      packageManager: "uv",
      addons: [],
    });

    expect(findByPath(tree.root, ["src", "api", "v1", "routes", "items.py"])).not.toBeNull();
    expect(findByPath(tree.root, ["src", "schemas", "items.py"])).not.toBeNull();
    expect(findByPath(tree.root, ["src", "services", "items.py"])).not.toBeNull();
    expect(findByPath(tree.root, ["src", "repositories", "items.py"])).not.toBeNull();
    expect(findByPath(tree.root, ["src", "models.py"])).not.toBeNull();
    expect(findByPath(tree.root, ["src", "config.py"])).not.toBeNull();
  });

  it("generate-smoke baseline still passes for fastapi+sqlmodel", async () => {
    const tree = await generate({
      language: "python",
      framework: "fastapi",
      orm: "sqlmodel",
      migrations: "alembic",
      database: "sqlite",
      packageManager: "uv",
      addons: ["docker", "ruff", "pytest"],
    });

    expect(findFile(tree.root, "main.py")).not.toBeNull();
    expect(findFile(tree.root, "pyproject.toml")).not.toBeNull();
    expect(findFile(tree.root, "Dockerfile")).not.toBeNull();
  });

  it("fastapi + tortoise: session-less routing and repository present", async () => {
    const tree = await generate({
      language: "python",
      framework: "fastapi",
      orm: "tortoise",
      migrations: "none",
      database: "sqlite",
      packageManager: "uv",
      addons: [],
    });

    expect(findByPath(tree.root, ["src", "models.py"])).not.toBeNull();
    expect(findByPath(tree.root, ["src", "db.py"])).not.toBeNull();
    expect(findByPath(tree.root, ["src", "repositories", "items.py"])).not.toBeNull();

    const routes = findByPath(tree.root, ["src", "api", "v1", "routes", "items.py"]);
    expect(routes).not.toBeNull();
    expect(routes).not.toContain("get_session");
    expect(routes).not.toContain("AsyncSession");
    expect(routes).not.toContain("Depends");

    const services = findByPath(tree.root, ["src", "services", "items.py"]);
    expect(services).not.toBeNull();
    expect(services).not.toContain("AsyncSession");

    const repos = findByPath(tree.root, ["src", "repositories", "items.py"]);
    expect(repos).not.toBeNull();
    expect(repos).toContain("Item.create");
    expect(repos).toContain("await Item.all()");

    const db = findByPath(tree.root, ["src", "db.py"]);
    expect(db).not.toBeNull();
    expect(db).toContain("Tortoise.init");
    expect(db).toContain("generate_schemas");
  });

  it("litestar + tortoise: no session injection in routes", async () => {
    const tree = await generate({
      language: "python",
      framework: "litestar",
      orm: "tortoise",
      migrations: "none",
      database: "sqlite",
      packageManager: "uv",
      addons: [],
    });

    const routes = findByPath(tree.root, ["src", "api", "v1", "routes", "items.py"]);
    expect(routes).not.toBeNull();
    expect(routes).not.toContain("Provide");
    expect(routes).not.toContain("get_session");
  });

  it("flask + no orm: router does not import items blueprint", async () => {
    const tree = await generate({
      language: "python",
      framework: "flask",
      orm: "none",
      migrations: "none",
      database: "none",
      packageManager: "uv",
      addons: [],
    });

    const router = findByPath(tree.root, ["src", "api", "v1", "router.py"]);
    expect(router).not.toBeNull();
    expect(router).not.toContain("items_bp");
    expect(findByPath(tree.root, ["src", "api", "v1", "routes", "items.py"])).toBeNull();
  });

  it("validation rejects tortoise + alembic migrations", async () => {
    const result = await createVirtual({
      language: "python",
      framework: "fastapi",
      orm: "tortoise",
      migrations: "alembic",
      database: "sqlite",
      packageManager: "uv",
      addons: [],
    } as never);
    expect(result.isErr()).toBe(true);
  });
});

describe("go template structure verification", () => {
  it("gin + gorm: cmd/api and layered internal structure present", async () => {
    const tree = await generate({
      language: "go",
      framework: "gin",
      orm: "gorm",
      migrations: "goose",
      database: "sqlite",
      packageManager: "go",
      addons: ["docker", "air", "golangci-lint"],
    });

    expect(findByPath(tree.root, ["cmd", "api", "main.go"])).not.toBeNull();
    expect(findByPath(tree.root, ["internal", "config", "config.go"])).not.toBeNull();
    expect(findByPath(tree.root, ["internal", "db", "db.go"])).not.toBeNull();
    expect(findByPath(tree.root, ["internal", "model", "item.go"])).not.toBeNull();
    expect(findByPath(tree.root, ["internal", "repository", "item.go"])).not.toBeNull();
    expect(findByPath(tree.root, ["internal", "service", "item_service.go"])).not.toBeNull();
    expect(findByPath(tree.root, ["internal", "handler", "handler.go"])).not.toBeNull();
    expect(findByPath(tree.root, ["migrations", "0001_create_items.sql"])).not.toBeNull();
    expect(findByPath(tree.root, ["Makefile"])).not.toBeNull();

    const main = findByPath(tree.root, ["cmd", "api", "main.go"]);
    expect(main).toContain(`r.GET("/items"`);
    expect(main).not.toContain("AutoMigrate");
    expect(main).toContain("config.Load()");

    const goMod = findFile(tree.root, "go.mod");
    expect(goMod).toContain("github.com/google/uuid");
  });

  it("gin + no orm: persistence and handler layers excluded", async () => {
    const tree = await generate({
      language: "go",
      framework: "gin",
      orm: "none",
      migrations: "none",
      database: "none",
      packageManager: "go",
      addons: [],
    });

    expect(findByPath(tree.root, ["internal", "handler"])).toBeNull();
    expect(findByPath(tree.root, ["internal", "service"])).toBeNull();
    expect(findByPath(tree.root, ["internal", "model"])).toBeNull();
    expect(findByPath(tree.root, ["internal", "repository"])).toBeNull();
    expect(findByPath(tree.root, ["internal", "db"])).toBeNull();
    expect(findByPath(tree.root, ["internal", "config", "config.go"])).not.toBeNull();

    const main = findByPath(tree.root, ["cmd", "api", "main.go"]);
    expect(main).not.toBeNull();
    expect(main).toContain("/health");
    expect(main).not.toContain("/items");
  });

  it("chi + sqlc: queries, schema, and Makefile generate target shipped", async () => {
    const tree = await generate({
      language: "go",
      framework: "chi",
      orm: "sqlc",
      migrations: "none",
      database: "postgres",
      packageManager: "go",
      addons: ["github-actions"],
    });

    expect(findByPath(tree.root, ["queries", "items.sql"])).not.toBeNull();
    expect(findByPath(tree.root, ["schema", "schema.sql"])).not.toBeNull();
    expect(findByPath(tree.root, ["sqlc.yaml"])).not.toBeNull();
    expect(findByPath(tree.root, ["internal", "model", "item.go"])).not.toBeNull();

    const repo = findByPath(tree.root, ["internal", "repository", "item.go"]);
    expect(repo).not.toBeNull();
    expect(repo).toContain("/internal/db/sqlc");

    const makefile = findByPath(tree.root, ["Makefile"]);
    expect(makefile).not.toBeNull();
    expect(makefile).toContain("sqlc generate");

    const ci = findByPath(tree.root, [".github", "workflows", "ci.yml"]);
    expect(ci).not.toBeNull();
    expect(ci).toContain("sqlc generate");
  });

  it("stdlib + gorm: method-pattern routes wired through handler", async () => {
    const tree = await generate({
      language: "go",
      framework: "stdlib",
      orm: "gorm",
      migrations: "golang-migrate",
      database: "mysql",
      packageManager: "go",
      addons: [],
    });

    const main = findByPath(tree.root, ["cmd", "api", "main.go"]);
    expect(main).not.toBeNull();
    expect(main).toContain(`HandleFunc("GET /items"`);

    const handler = findByPath(tree.root, ["internal", "handler", "handler.go"]);
    expect(handler).not.toBeNull();
    expect(handler).toContain("writeJSON");
  });

  it("gorm + no migrations: AutoMigrate runs; with migrations it does not", async () => {
    const auto = await generate({
      language: "go",
      framework: "gin",
      orm: "gorm",
      migrations: "none",
      database: "sqlite",
      packageManager: "go",
      addons: [],
    });
    const autoMain = findByPath(auto.root, ["cmd", "api", "main.go"]);
    expect(autoMain).toContain("AutoMigrate");
    const readme = findByPath(auto.root, ["README.md"]);
    expect(readme).toContain("auto-migrates");

    const manual = await generate({
      language: "go",
      framework: "gin",
      orm: "gorm",
      migrations: "goose",
      database: "sqlite",
      packageManager: "go",
      addons: [],
    });
    const manualMain = findByPath(manual.root, ["cmd", "api", "main.go"]);
    expect(manualMain).not.toContain("AutoMigrate");
  });

  it("go: service input validation sentinel, 400 mapping, and test file shipped", async () => {
    const tree = await generate({
      language: "go",
      framework: "fiber",
      orm: "sqlx",
      migrations: "none",
      database: "sqlite",
      packageManager: "go",
      addons: [],
    });

    const service = findByPath(tree.root, ["internal", "service", "item_service.go"]);
    expect(service).toContain("ErrInvalidInput");
    expect(service).toContain("validateName");

    const testFile = findByPath(tree.root, ["internal", "service", "item_service_test.go"]);
    expect(testFile).not.toBeNull();
    expect(testFile).toContain("TestValidateName");

    const handler = findByPath(tree.root, ["internal", "handler", "handler.go"]);
    expect(handler).toContain("ErrInvalidInput");
    expect(handler).toContain("StatusBadRequest");

    const makefile = findByPath(tree.root, ["Makefile"]);
    expect(makefile).toContain("go test -race ./...");
  });

  it("sqlc: make build/run depend on generate; golang-migrate uses database tags", async () => {
    const tree = await generate({
      language: "go",
      framework: "chi",
      orm: "sqlc",
      migrations: "golang-migrate",
      database: "postgres",
      packageManager: "go",
      addons: [],
    });

    const makefile = findByPath(tree.root, ["Makefile"]);
    expect(makefile).toContain("build: generate");
    expect(makefile).toContain("run: generate");
    expect(makefile).toContain("MIGRATE_TAGS := postgres");
    expect(makefile).toContain("-tags '$(MIGRATE_TAGS)'");

    const readme = findByPath(tree.root, ["README.md"]);
    expect(readme).toContain("sqlc generate");
    expect(readme).toContain("-tags 'postgres'");
    expect(readme).toContain("go run ./cmd/api");
    expect(readme).toContain("GET /items");
    expect(readme).toContain("internal/service/    business logic");
  });
});
