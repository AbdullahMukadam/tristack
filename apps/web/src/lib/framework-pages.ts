import { EMBEDDED_TEMPLATES, generate, type VirtualNode } from "@tristack/template-generator";
import { getFrameworksForLanguage, getRuntimeProfile, type Language } from "@tristack/types";

import { analyzeStackCompatibility } from "@/app/(home)/new/_components/utils";

import { DEFAULT_STACK, type StackState, TECH_OPTIONS } from "./constant";
import { stackStateToConfig } from "./stack-config";

const LANGUAGES = ["python", "go", "rust"] as const satisfies readonly Language[];

const DEFAULT_ADDONS = {
  python: DEFAULT_STACK.addons,
  go: ["docker", "air", "golangci-lint"],
  rust: ["docker", "cargo-watch", "clippy"],
} satisfies Record<Language, string[]>;

type FrameworkDetails = {
  stack: Pick<StackState, "orm" | "migrations">;
  why: string;
  goodFor: string[];
};

const FRAMEWORK_DETAILS = {
  fastapi: {
    stack: { orm: "sqlmodel", migrations: "alembic" },
    why: "FastAPI builds request validation and OpenAPI docs from Python type hints, so the schema you write is the docs you ship. It is async-first and one of the most widely used Python API frameworks.",
    goodFor: [
      "JSON APIs that need interactive docs at /docs out of the box",
      "Teams already using Pydantic models",
      "Async I/O such as calls to other services",
    ],
  },
  litestar: {
    stack: { orm: "sqlmodel", migrations: "alembic" },
    why: "Litestar is an ASGI framework with class-based controllers, built-in dependency injection, and first-class support for SQLAlchemy and msgspec. It favors explicit structure over decorators on loose functions.",
    goodFor: [
      "Larger APIs that benefit from controller classes",
      "Projects that want dependency injection without extra libraries",
      "Teams coming from Django REST framework or NestJS",
    ],
  },
  django: {
    stack: { orm: "none", migrations: "none" },
    why: "Django ships its own ORM, migrations, admin, and auth, so TriStack keeps the ORM and migration choices on Django's built-ins. It is the most batteries-included option on the Python side.",
    goodFor: [
      "Apps that need an admin panel and user accounts early",
      "Teams that prefer one framework for everything",
      "Content-heavy or CRUD-heavy products",
    ],
  },
  flask: {
    stack: { orm: "sqlalchemy", migrations: "alembic" },
    why: "Flask is a small, synchronous microframework that leaves structure to you. TriStack pairs it with SQLAlchemy and Alembic, the most common Flask data stack, in a layered layout you can grow.",
    goodFor: [
      "Small services and internal tools",
      "Developers who want minimal framework magic",
      "Migrating or modernizing an existing Flask codebase",
    ],
  },
  gin: {
    stack: { orm: "gorm", migrations: "goose" },
    why: "Gin is the most popular Go web framework: a fast router with middleware, binding, and validation built in. This stack pairs it with GORM for data access and goose for SQL migrations.",
    goodFor: [
      "REST APIs that want a familiar, well-documented framework",
      "Teams that prefer an ORM over hand-written SQL",
      "Projects that need lots of community middleware",
    ],
  },
  fiber: {
    stack: { orm: "sqlx", migrations: "none" },
    why: "Fiber is built on fasthttp and modeled after Express, so its routing and middleware feel familiar to Node.js developers. This stack uses sqlx for thin, SQL-first data access.",
    goodFor: [
      "Developers moving from Express to Go",
      "High-throughput services where raw request speed matters",
      "Teams that want to write SQL directly",
    ],
  },
  echo: {
    stack: { orm: "gorm", migrations: "none" },
    why: "Echo is a minimalist Go framework with a clean API for routing, binding, and centralized error handling. This stack uses GORM with auto-migration on startup for the shortest path to a running API.",
    goodFor: [
      "APIs that want structured error handling from day one",
      "Prototypes that should start without a migration tool",
      "Teams that like a small, stable framework surface",
    ],
  },
  chi: {
    stack: { orm: "sqlc", migrations: "none" },
    why: "Chi is a lightweight router built on net/http, so handlers stay plain http.Handler functions. This stack uses sqlc, which generates type-safe Go code from your SQL queries.",
    goodFor: [
      "Developers who want idiomatic net/http code",
      "Type-safe queries without an ORM",
      "Services that may later drop the router entirely",
    ],
  },
  stdlib: {
    stack: { orm: "sqlx", migrations: "none" },
    why: "Since Go 1.22, the standard library's http.ServeMux supports methods and path parameters, so many APIs need no framework at all. This stack uses net/http with sqlx and zero routing dependencies.",
    goodFor: [
      "Minimal dependency footprints",
      "Learning Go web development from the standard library",
      "Long-lived services that should avoid framework churn",
    ],
  },
  axum: {
    stack: { orm: "sqlx-rust", migrations: "none" },
    why: "Axum comes from the Tokio team and builds on Tower, so it shares middleware with the wider Tokio ecosystem. This stack pairs it with SQLx for async, SQL-first data access.",
    goodFor: [
      "Async Rust APIs on Tokio",
      "Reusing Tower middleware such as tracing, timeouts, and CORS",
      "Teams that want SQL over an ORM",
    ],
  },
  "actix-web": {
    stack: { orm: "diesel", migrations: "none" },
    why: "Actix Web is a mature, high-performance Rust framework with a large feature set and a long track record in production. This stack uses Diesel, Rust's most established ORM and query builder.",
    goodFor: [
      "Throughput-sensitive services",
      "Teams that want a long-standing, battle-tested framework",
      "Query building with strong compile-time guarantees",
    ],
  },
  rocket: {
    stack: { orm: "seaorm", migrations: "none" },
    why: "Rocket focuses on ergonomics: attribute-based routes, typed parameters, and request guards for things like auth and validation. This stack pairs it with SeaORM, an async ORM with an ActiveRecord-style API.",
    goodFor: [
      "Developers new to Rust web development",
      "Readable, attribute-driven routing",
      "Async ORM workflows",
    ],
  },
  warp: {
    stack: { orm: "sqlx-rust", migrations: "none" },
    why: "Warp builds routes by composing filters, so extraction, validation, and routing are all the same building block. This stack uses SQLx for async SQL access.",
    goodFor: [
      "Small, composable APIs",
      "Developers who like functional-style composition",
      "Services that sit close to Hyper",
    ],
  },
  salvo: {
    stack: { orm: "seaorm", migrations: "none" },
    why: "Salvo uses a tree-based router where middleware and handlers share the same Handler trait, which keeps routing simple. This stack pairs it with SeaORM.",
    goodFor: [
      "APIs with deeply nested route trees",
      "Teams that want one abstraction for handlers and middleware",
      "Async ORM workflows",
    ],
  },
} satisfies Record<string, FrameworkDetails>;

export type FrameworkPage = {
  id: string;
  name: string;
  description: string;
  language: Language;
  languageName: string;
  icon: string;
  svgl?: string;
  iconClassName?: string;
  details?: FrameworkDetails;
};

function optionName(category: keyof typeof TECH_OPTIONS, id: string) {
  return TECH_OPTIONS[category].find((option) => option.id === id)?.name ?? id;
}

export const FRAMEWORK_PAGES: FrameworkPage[] = LANGUAGES.flatMap((language) =>
  getFrameworksForLanguage(language)
    .filter((id) => id !== "none")
    .map((id) => {
      const option = TECH_OPTIONS.framework.find((candidate) => candidate.id === id);
      return {
        id,
        name: option?.name ?? id,
        description: option?.description ?? "Web framework",
        language,
        languageName: optionName("language", language),
        icon: option?.icon ?? "",
        svgl: option && "svgl" in option ? option.svgl : undefined,
        iconClassName: option && "className" in option ? option.className : undefined,
        details:
          id in FRAMEWORK_DETAILS
            ? FRAMEWORK_DETAILS[id as keyof typeof FRAMEWORK_DETAILS]
            : undefined,
      };
    }),
);

export function getFrameworkPage(id: string) {
  return FRAMEWORK_PAGES.find((page) => page.id === id);
}

export function getFrameworkStack(page: FrameworkPage): StackState {
  const stack: StackState = {
    ...DEFAULT_STACK,
    projectName: `my-${page.id}-app`,
    language: page.language,
    framework: page.id,
    addons: DEFAULT_ADDONS[page.language],
    ...page.details?.stack,
  };
  return analyzeStackCompatibility(stack).adjustedStack ?? stack;
}

export function describeStack(stack: StackState) {
  return {
    orm: stack.orm === "none" ? null : optionName("orm", stack.orm),
    database: stack.database === "none" ? null : optionName("database", stack.database),
    migrations: stack.migrations === "none" ? null : optionName("migrations", stack.migrations),
    packageManager: optionName("packageManager", stack.packageManager),
    addons: stack.addons.filter((addon) => addon !== "none").map((id) => optionName("addons", id)),
  };
}

function treeLines(node: VirtualNode, prefix = ""): string[] {
  if (node.type === "file") return [];
  const children = [...node.children].sort((a, b) =>
    a.type === b.type ? a.name.localeCompare(b.name) : a.type === "directory" ? -1 : 1,
  );
  return children.flatMap((child, index) => {
    const last = index === children.length - 1;
    const name = child.type === "directory" ? `${child.name}/` : child.name;
    return [
      `${prefix}${last ? "└── " : "├── "}${name}`,
      ...treeLines(child, `${prefix}${last ? "    " : "│   "}`),
    ];
  });
}

export async function getFrameworkProject(stack: StackState) {
  const config = stackStateToConfig(stack);
  const result = await generate({ config, templates: EMBEDDED_TEMPLATES });
  if (result.isErr()) throw new Error(result.error.message);

  const profile = getRuntimeProfile(config);
  return {
    tree: [`${config.projectName}/`, ...treeLines(result.value.root)].join("\n"),
    fileCount: result.value.fileCount,
    steps: [profile.install, ...profile.prepare, profile.run()].map((command) => command.label),
    routes: [...new Set(profile.probes.map((probe) => `${probe.method} ${probe.path}`))],
  };
}
