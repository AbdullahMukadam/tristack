import type {
  Addons,
  Database,
  Framework,
  Language,
  Migrations,
  ORM,
  PackageManager,
} from "@tristack/types";
import {
  DATABASE_VALUES,
  GO_ADDONS,
  GO_FRAMEWORKS,
  GO_MIGRATIONS,
  GO_ORMS,
  GO_PACKAGE_MANAGERS,
  PYTHON_ADDONS,
  PYTHON_FRAMEWORKS,
  PYTHON_MIGRATIONS,
  PYTHON_ORMS,
  PYTHON_PACKAGE_MANAGERS,
  RUST_ADDONS,
  RUST_FRAMEWORKS,
  RUST_MIGRATIONS,
  RUST_ORMS,
  RUST_PACKAGE_MANAGERS,
} from "@tristack/types";

import type { TechCategory } from "@/lib/types";

export const ICON_BASE_URL = "https://r2.tristack.dev/icons";

type TechOption = {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  default?: boolean;
  className?: string;
  experimental?: boolean;
  svgl?: string;
};

const LANGUAGE_META = {
  python: {
    id: "python",
    name: "Python",
    description: "Backend language",
    icon: "🐍",
    color: "from-sky-400 to-sky-600",
    default: true,
    svgl: "Python",
  },
  go: {
    id: "go",
    name: "Go",
    description: "Backend language",
    icon: "🐹",
    color: "from-cyan-400 to-sky-600",
    svgl: "Go",
  },
  rust: {
    id: "rust",
    name: "Rust",
    description: "Backend language",
    icon: "🦀",
    color: "from-orange-400 to-orange-600",
    svgl: "Rust",
  },
} satisfies Partial<Record<Language, TechOption>>;

const FRAMEWORK_META = {
  fastapi: {
    id: "fastapi",
    name: "FastAPI",
    description: "Modern, asynchronous Python web framework",
    icon: "⚡",
    color: "from-teal-400 to-emerald-600",
    default: true,
    svgl: "FastAPI",
  },
  litestar: {
    id: "litestar",
    name: "Litestar",
    description: "Lightweight, class-based ASGI framework",
    icon: "✨",
    color: "from-fuchsia-400 to-purple-600",
  },
  django: {
    id: "django",
    name: "Django",
    description: "Batteries-included web framework",
    icon: "🎸",
    color: "from-green-500 to-green-700",
    svgl: "Django",
  },
  flask: {
    id: "flask",
    name: "Flask",
    description: "Minimal, flexible microframework",
    icon: "🧪",
    color: "from-gray-500 to-gray-700",
    svgl: "Flask",
  },
  gin: {
    id: "gin",
    name: "Gin",
    description: "High-performance HTTP web framework",
    icon: "/icon/gin-original.svg",
    color: "from-sky-400 to-blue-600",
  },
  fiber: {
    id: "fiber",
    name: "Fiber",
    description: "Express-inspired web framework",
    icon: "/icon/fiber-original.svg",
    color: "from-teal-400 to-cyan-600",
    className: "dark:invert",
  },
  echo: {
    id: "echo",
    name: "Echo",
    description: "High performance, minimalist web framework",
    icon: "🔊",
    color: "from-indigo-400 to-violet-600",
  },
  chi: {
    id: "chi",
    name: "Chi",
    description: "Lightweight, idiomatic HTTP router",
    icon: "🛤️",
    color: "from-emerald-400 to-green-600",
  },
  stdlib: {
    id: "stdlib",
    name: "Go stdlib",
    description: "Routers with the standard library",
    icon: "⚙️",
    color: "from-gray-400 to-gray-600",
  },
  axum: {
    id: "axum",
    name: "Axum",
    description: "Modular, ergonomic web framework",
    icon: "🌳",
    color: "from-emerald-400 to-green-600",
  },
  "actix-web": {
    id: "actix-web",
    name: "Actix Web",
    description: "Powerful, pragmatic actor-based framework",
    icon: "/icon/actix-original.svg",
    color: "from-cyan-400 to-blue-600",
    className: "dark:invert",
  },
  rocket: {
    id: "rocket",
    name: "Rocket",
    description: "Productive, type-safe web framework",
    icon: "🚀",
    color: "from-orange-400 to-amber-600",
  },
  warp: {
    id: "warp",
    name: "Warp",
    description: "Composable, filter-based HTTP framework",
    icon: "/icon/warp-original.svg",
    color: "from-indigo-400 to-violet-600",
  },
  salvo: {
    id: "salvo",
    name: "Salvo",
    description: "Simple, powerful web server framework",
    icon: "⚡",
    color: "from-sky-400 to-blue-600",
  },
  loco: {
    id: "loco",
    name: "Loco",
    description: "Rails-like full web framework",
    icon: "🚂",
    color: "from-red-400 to-rose-600",
  },
} satisfies Partial<Record<Framework, TechOption>>;

const ORM_META = {
  sqlmodel: {
    id: "sqlmodel",
    name: "SQLModel",
    description: "SQL databases with Python objects",
    icon: "🗄️",
    color: "from-indigo-400 to-indigo-600",
    default: true,
  },
  sqlalchemy: {
    id: "sqlalchemy",
    name: "SQLAlchemy",
    description: "Python SQL toolkit & ORM",
    icon: "/icon/sqlalchemy-original.svg",
    color: "from-red-400 to-red-600",
  },
  tortoise: {
    id: "tortoise",
    name: "Tortoise ORM",
    description: "Async ORM inspired by Django",
    icon: "🐢",
    color: "from-green-400 to-green-600",
  },
  sqlc: {
    id: "sqlc",
    name: "sqlc",
    description: "Generate type-safe Go from SQL",
    icon: "🐘",
    color: "from-purple-400 to-purple-700",
  },
  gorm: {
    id: "gorm",
    name: "GORM",
    description: "Developer-friendly Go ORM",
    icon: "🎣",
    color: "from-red-400 to-rose-600",
  },
  sqlx: {
    id: "sqlx",
    name: "sqlx",
    description: "Extend database/sql with ergonomics",
    icon: "🧩",
    color: "from-sky-400 to-blue-600",
  },
  seaorm: {
    id: "seaorm",
    name: "SeaORM",
    description: "Production-ready async Rust ORM",
    icon: "🌊",
    color: "from-cyan-400 to-blue-600",
  },
  diesel: {
    id: "diesel",
    name: "Diesel",
    description: "Safe, extensible Rust ORM",
    icon: "⛽",
    color: "from-orange-400 to-amber-600",
  },
  "sqlx-rust": {
    id: "sqlx-rust",
    name: "sqlx",
    description: "Async SQL toolkit for Rust",
    icon: "🔌",
    color: "from-sky-400 to-blue-600",
  },
  none: {
    id: "none",
    name: "No ORM",
    description: "Skip ORM integration",
    icon: "",
    color: "from-gray-400 to-gray-600",
  },
} satisfies Partial<Record<ORM, TechOption>>;

const MIGRATIONS_META = {
  alembic: {
    id: "alembic",
    name: "Alembic",
    description: "Lightweight migrations for SQLAlchemy",
    icon: "📜",
    color: "from-amber-400 to-amber-600",
    default: true,
  },
  goose: {
    id: "goose",
    name: "Goose",
    description: "Database migrations for Go",
    icon: "/icon/goose-codename-original.svg",
    color: "from-amber-400 to-orange-600",
  },
  "golang-migrate": {
    id: "golang-migrate",
    name: "golang-migrate",
    description: "Database migrations written in Go",
    icon: "🗺️",
    color: "from-sky-400 to-blue-600",
  },
  none: {
    id: "none",
    name: "No Migrations",
    description: "Skip migration tooling",
    icon: "",
    color: "from-gray-400 to-gray-600",
  },
} satisfies Partial<Record<Migrations, TechOption>>;

const DATABASE_META = {
  sqlite: {
    id: "sqlite",
    name: "SQLite",
    description: "File-based SQL database",
    icon: `${ICON_BASE_URL}/sqlite.svg`,
    color: "from-blue-400 to-cyan-500",
    default: true,
    svgl: "SQLite",
  },
  postgres: {
    id: "postgres",
    name: "PostgreSQL",
    description: "Advanced SQL database",
    icon: `${ICON_BASE_URL}/postgres.svg`,
    color: "from-indigo-400 to-indigo-600",
    svgl: "PostgreSQL",
  },
  mysql: {
    id: "mysql",
    name: "MySQL",
    description: "Popular relational database",
    icon: `${ICON_BASE_URL}/mysql.svg`,
    color: "from-blue-500 to-blue-700",
    svgl: "MySQL",
  },
  none: {
    id: "none",
    name: "No Database",
    description: "Skip database integration",
    icon: "",
    color: "from-gray-400 to-gray-600",
  },
} satisfies Record<Database, TechOption>;

const PACKAGE_MANAGER_META = {
  uv: {
    id: "uv",
    name: "uv",
    description: "Fast Python package & project manager",
    icon: "☀️",
    color: "from-amber-400 to-amber-600",
    default: true,
    svgl: "UV",
  },
  poetry: {
    id: "poetry",
    name: "Poetry",
    description: "Dependency management & packaging",
    icon: "/icon/poetry-original.svg",
    color: "from-orange-400 to-orange-600",
  },
  pip: {
    id: "pip",
    name: "pip",
    description: "Python package installer",
    icon: "📦",
    color: "from-yellow-400 to-yellow-600",
  },
  go: {
    id: "go",
    name: "Go modules",
    description: "Go's built-in dependency system",
    icon: "🐹",
    color: "from-cyan-400 to-sky-600",
    svgl: "Go",
  },
  cargo: {
    id: "cargo",
    name: "Cargo",
    description: "Rust's official package manager",
    icon: "🚢",
    color: "from-amber-400 to-orange-600",
  },
} satisfies Partial<Record<PackageManager, TechOption>>;

const ADDONS_META = {
  docker: {
    id: "docker",
    name: "Docker",
    description: "Containerize your app for consistent deploys",
    icon: `${ICON_BASE_URL}/docker.svg`,
    color: "from-blue-500 to-blue-700",
    default: true,
    svgl: "Docker",
  },
  ruff: {
    id: "ruff",
    name: "Ruff",
    description: "Blazing-fast Python linter & formatter",
    icon: "🪶",
    color: "from-amber-400 to-amber-600",
    default: true,
  },
  mypy: {
    id: "mypy",
    name: "Mypy",
    description: "Static type checking for Python",
    icon: "/icon/mypy-original.svg",
    color: "from-sky-400 to-sky-600",
  },
  pytest: {
    id: "pytest",
    name: "Pytest",
    description: "Testing framework for Python",
    icon: "/icon/pytest-original.svg",
    color: "from-blue-400 to-blue-600",
    default: true,
  },
  "github-actions": {
    id: "github-actions",
    name: "GitHub Actions",
    description: "CI/CD pipelines in your repository",
    icon: "/icon/github-actions-original.svg",
    color: "from-gray-500 to-gray-700",
  },
  air: {
    id: "air",
    name: "Air",
    description: "Live-reloading for Go apps",
    icon: "🌬️",
    color: "from-sky-400 to-blue-600",
  },
  "golangci-lint": {
    id: "golangci-lint",
    name: "golangci-lint",
    description: "Fast Go linters runner",
    icon: "🧹",
    color: "from-purple-400 to-violet-600",
  },
  "cargo-watch": {
    id: "cargo-watch",
    name: "Cargo Watch",
    description: "Rerun your project on file changes",
    icon: "👁️",
    color: "from-sky-400 to-blue-600",
  },
  clippy: {
    id: "clippy",
    name: "Clippy",
    description: "Lints to catch common mistakes",
    icon: "📎",
    color: "from-teal-400 to-cyan-600",
  },
  fumadocs: {
    id: "fumadocs",
    name: "Fumadocs",
    description: "Build excellent documentation site",
    icon: `${ICON_BASE_URL}/fumadocs.svg`,
    color: "from-indigo-500 to-indigo-700",
  },
  starlight: {
    id: "starlight",
    name: "Starlight",
    description: "Build stellar docs with astro",
    icon: `${ICON_BASE_URL}/starlight.svg`,
    color: "from-teal-500 to-teal-700",
  },
  none: {
    id: "none",
    name: "No Addons",
    description: "Skip additional addons",
    icon: "",
    color: "from-gray-400 to-gray-600",
  },
} satisfies Partial<Record<Addons, TechOption>>;

function composeOptions<Id extends string>(
  ids: readonly Id[],
  meta: Partial<Record<Id, TechOption>>,
): TechOption[] {
  return ids.map((id) => meta[id] as TechOption);
}

function uniqueOptions(options: TechOption[]): TechOption[] {
  const seen = new Set<string>();
  return options.filter((option) => {
    if (seen.has(option.id)) return false;
    seen.add(option.id);
    return true;
  });
}

function unionOptions<Id extends string>(
  ...groups: Array<[readonly Id[], Partial<Record<Id, TechOption>>]>
): TechOption[] {
  return uniqueOptions(groups.flatMap(([ids, meta]) => composeOptions(ids, meta)));
}

export const TECH_OPTIONS = {
  language: composeOptions(["python", "go", "rust"], LANGUAGE_META),
  framework: unionOptions(
    [PYTHON_FRAMEWORKS, FRAMEWORK_META],
    [GO_FRAMEWORKS, FRAMEWORK_META],
    [RUST_FRAMEWORKS, FRAMEWORK_META],
  ),
  orm: unionOptions([PYTHON_ORMS, ORM_META], [GO_ORMS, ORM_META], [RUST_ORMS, ORM_META]),
  migrations: unionOptions(
    [PYTHON_MIGRATIONS, MIGRATIONS_META],
    [GO_MIGRATIONS, MIGRATIONS_META],
    [RUST_MIGRATIONS, MIGRATIONS_META],
  ),
  database: composeOptions(DATABASE_VALUES, DATABASE_META),
  packageManager: unionOptions(
    [PYTHON_PACKAGE_MANAGERS, PACKAGE_MANAGER_META],
    [GO_PACKAGE_MANAGERS, PACKAGE_MANAGER_META],
    [RUST_PACKAGE_MANAGERS, PACKAGE_MANAGER_META],
  ),
  addons: unionOptions(
    [PYTHON_ADDONS, ADDONS_META],
    [GO_ADDONS, ADDONS_META],
    [RUST_ADDONS, ADDONS_META],
  ),
  git: [
    {
      id: "true",
      name: "Git",
      description: "Initialize Git repository",
      icon: "/icon/git-original.svg",
      color: "from-gray-500 to-gray-700",
      default: true,
    },
    {
      id: "false",
      name: "No Git",
      description: "Skip Git initialization",
      icon: "",
      color: "from-red-400 to-red-600",
    },
  ],
  install: [
    {
      id: "true",
      name: "Install Dependencies",
      description: "Install packages automatically",
      icon: "",
      color: "from-green-400 to-green-600",
      default: true,
    },
    {
      id: "false",
      name: "Skip Install",
      description: "Skip dependency installation",
      icon: "",
      color: "from-yellow-400 to-yellow-600",
    },
  ],
} satisfies Record<TechCategory, TechOption[]>;

export const PRESET_TEMPLATES = [
  {
    id: "fastapi-sqlite",
    name: "FastAPI + SQLite",
    description: "FastAPI with SQLModel, Alembic, and SQLite",
    stack: {
      projectName: "my-api",
      language: "python",
      framework: "fastapi",
      orm: "sqlmodel",
      migrations: "alembic",
      database: "sqlite",
      packageManager: "uv",
      addons: ["docker", "ruff", "pytest"],
      git: "true",
      install: "true",
      yolo: "false",
    },
  },
  {
    id: "fastapi-postgres",
    name: "FastAPI + PostgreSQL",
    description: "FastAPI with SQLModel, Alembic, and PostgreSQL",
    stack: {
      projectName: "my-api",
      language: "python",
      framework: "fastapi",
      orm: "sqlmodel",
      migrations: "alembic",
      database: "postgres",
      packageManager: "uv",
      addons: ["docker", "ruff", "pytest"],
      git: "true",
      install: "true",
      yolo: "false",
    },
  },
  {
    id: "litestar-postgres",
    name: "Litestar + PostgreSQL",
    description: "Litestar with SQLAlchemy, Alembic, and PostgreSQL",
    stack: {
      projectName: "my-api",
      language: "python",
      framework: "litestar",
      orm: "sqlalchemy",
      migrations: "alembic",
      database: "postgres",
      packageManager: "uv",
      addons: ["docker", "ruff", "pytest"],
      git: "true",
      install: "true",
      yolo: "false",
    },
  },
  {
    id: "flask-minimal",
    name: "Flask Minimal",
    description: "Bare Flask skeleton with SQLite and pip",
    stack: {
      projectName: "my-api",
      language: "python",
      framework: "flask",
      orm: "sqlalchemy",
      migrations: "alembic",
      database: "sqlite",
      packageManager: "pip",
      addons: ["pytest"],
      git: "true",
      install: "true",
      yolo: "false",
    },
  },
  {
    id: "gin-sqlite",
    name: "Gin + SQLite",
    description: "Gin with GORM, Goose, and SQLite",
    stack: {
      projectName: "my-api",
      language: "go",
      framework: "gin",
      orm: "gorm",
      migrations: "goose",
      database: "sqlite",
      packageManager: "go",
      addons: ["docker", "air", "golangci-lint"],
      git: "true",
      install: "true",
      yolo: "false",
    },
  },
  {
    id: "axum-sqlite",
    name: "Axum + SQLite",
    description: "Axum with SeaORM and SQLite",
    stack: {
      projectName: "my-api",
      language: "rust",
      framework: "axum",
      orm: "seaorm",
      migrations: "none",
      database: "sqlite",
      packageManager: "cargo",
      addons: ["docker", "cargo-watch", "clippy"],
      git: "true",
      install: "true",
      yolo: "false",
    },
  },
];

export type StackState = {
  projectName: string | null;
  language: string;
  framework: string;
  orm: string;
  migrations: string;
  database: string;
  packageManager: string;
  addons: string[];
  git: string;
  install: string;
  yolo: string;
};

export const DEFAULT_STACK: StackState = {
  projectName: "my-tristack-app",
  language: "python",
  framework: "fastapi",
  orm: "sqlmodel",
  migrations: "alembic",
  database: "sqlite",
  packageManager: "uv",
  addons: ["docker", "ruff", "pytest"],
  git: "true",
  install: "true",
  yolo: "false",
};

export const isStackDefault = <K extends keyof StackState>(
  _stack: StackState,
  key: K,
  value: StackState[K],
): boolean => {
  const defaultValue = DEFAULT_STACK[key];

  if (Array.isArray(defaultValue) && Array.isArray(value)) {
    const sortedDefault = [...defaultValue].sort();
    const sortedValue = [...value].sort();
    return (
      sortedDefault.length === sortedValue.length &&
      sortedDefault.every((item, index) => item === sortedValue[index])
    );
  }

  return defaultValue === value;
};
