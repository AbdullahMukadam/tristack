import type { Framework, ORM, Database, Migrations } from "@tristack/types";

export type AvailableDependencies = {
  fastapi: Record<string, boolean>;
};

export const dependencyVersionMap = {
  framework: {
    fastapi: { fastapi: true, "uvicorn[standard]": true },
    litestar: { litestar: true },
    django: { django: true, djangorestframework: true, "django-cors-headers": true },
    flask: { flask: true },
    gin: { "github.com/gin-gonic/gin": true },
    fiber: { "github.com/gofiber/fiber/v2": true },
    echo: { "github.com/labstack/echo/v4": true },
    chi: { "github.com/go-chi/chi/v5": true },
    stdlib: {},
    axum: {},
    "actix-web": {},
    rocket: {},
    warp: {},
    salvo: {},
    loco: {},
    none: {},
  } satisfies Record<Framework, Record<string, boolean>>,
  orm: {
    sqlmodel: { sqlmodel: true },
    sqlalchemy: { sqlalchemy: true },
    tortoise: { tortoise: true },
    sqlc: {},
    gorm: {},
    sqlx: {},
    seaorm: {},
    diesel: {},
    "sqlx-rust": {},
    none: {},
  } satisfies Record<ORM, Record<string, boolean>>,
  migrations: {
    alembic: { alembic: true },
    goose: {},
    "golang-migrate": {},
    none: {},
  } satisfies Record<Migrations, Record<string, boolean>>,
  database: {
    sqlite: {},
    postgres: { asyncpg: true },
    mysql: { asyncmy: true },
    none: {},
  } satisfies Record<Database, Record<string, boolean>>,
} as const;
