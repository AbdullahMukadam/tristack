// Auto-generated - DO NOT EDIT
// Run 'bun run generate-templates' to regenerate

export const EMBEDDED_TEMPLATES: Map<string, string> = new Map([
  ["base/_gitignore", `node_modules
.pnp
.pnp.js
__pycache__/
*.py[cod]
.venv/
venv/
env/
dist
build
*.tsbuildinfo
target/
.env
.env*.local
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
.idea
*.swp
*.swo
*~
.DS_Store
logs
*.log
coverage
.nyc_output
.pytest_cache/
.mypy_cache/
.ruff_cache/
*.tgz
.cache
tmp
temp`],
  ["go/addons/air/air.toml.hbs", `root = "."
tmp_dir = "tmp"

[build]
  cmd = "go build -o ./tmp/{{project_slug}} ./cmd/api"
  bin = "./tmp/{{project_slug}}"
  include_ext = ["go", "html", "env"]
  exclude_dir = ["tmp", "bin", "vendor"]

[log]
  time = false

[misc]
  clean_on_exit = true`],
  ["go/addons/docker/_dockerignore", `.git
.gitignore
bin
vendor
.env
.env*.local
Dockerfile
.dockerignore`],
  ["go/addons/docker/docker-compose.yml.hbs", `services:
{{#if (eq database "postgres")}}
  db:
    image: postgres:16
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: {{project_slug}}
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data
{{else if (eq database "mysql")}}
  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: {{project_slug}}
    ports:
      - "3306:3306"
    volumes:
      - mysqldata:/var/lib/mysql
{{/if}}

volumes:
{{#if (eq database "postgres")}}
  pgdata:
{{else if (eq database "mysql")}}
  mysqldata:
{{/if}}`],
  ["go/addons/docker/Dockerfile.hbs", `# syntax=docker/dockerfile:1

FROM golang:1.22-alpine AS builder
WORKDIR /app

COPY go.mod go.sum* ./
RUN go mod download

COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -trimpath -ldflags="-s -w" -o /out/{{project_slug}} ./cmd/api

FROM gcr.io/distroless/static-debian12:nonroot
WORKDIR /app

COPY --from=builder /out/{{project_slug}} /usr/local/bin/{{project_slug}}

EXPOSE 8000
ENTRYPOINT ["/usr/local/bin/{{project_slug}}"]
`],
  ["go/addons/github-actions/.github/workflows/ci.yml.hbs", `name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-go@v5
        with:
          go-version: "stable"
          cache: true
      - name: Install dependencies
        run: go mod tidy
      {{#if (eq orm "sqlc")}}
      - name: Generate queries (sqlc)
        run: |
          go install github.com/sqlc-dev/sqlc/cmd/sqlc@latest
          sqlc generate
      {{/if}}
      {{#if (includes addons "air")}}
      - name: Verify formatting
        run: test -z "$(gofmt -l .)"
      {{/if}}
      {{#if (includes addons "golangci-lint")}}
      - name: Lint
        uses: golangci/golangci-lint-action@v6
      {{/if}}
      - name: Vet
        run: go vet ./...
      - name: Test
        run: go test -race ./...
`],
  ["go/addons/golangci-lint/.golangci.yml.hbs", `run:
  timeout: 5m
  tests: true

linters:
  enable:
    - gofmt
    - govet
    - staticcheck
    - errcheck
    - ineffassign
    - unused`],
  ["go/base/_gitignore", `*.exe
*.exe~
*.dll
*.so
*.dylib
bin/
!bin/
*.test
*.out
*.prof
vendor/
go.work
go.work.sum
tmp/
.env
.env.local
.idea
.vscode
*.swp`],
  ["go/base/.gitkeep", ``],
  ["go/base/env.example.hbs", `APP_NAME={{projectName}}
PORT=8000

{{#if (ne database "none")}}
# SQLite:  ./{{project_slug}}.db
# Postgres: postgres://postgres:postgres@localhost:5432/{{project_slug}}
# MySQL:   mysql://root:password@localhost:3306/{{project_slug}}
DATABASE_URL={{#if (eq database "sqlite")}}{{project_slug}}.db{{else if (eq database "postgres")}}postgres://postgres:postgres@localhost:5432/{{project_slug}}{{else if (eq database "mysql")}}mysql://root:password@localhost:3306/{{project_slug}}{{/if}}
{{/if}}`],
  ["go/base/go.mod.hbs", `module {{project_slug}}

go 1.22

{{#if (eq framework "gin")}}
require github.com/gin-gonic/gin v1.10.0
{{else if (eq framework "fiber")}}
require github.com/gofiber/fiber/v2 v2.52.5
{{else if (eq framework "echo")}}
require github.com/labstack/echo/v4 v4.12.0
{{else if (eq framework "chi")}}
require github.com/go-chi/chi/v5 v5.1.0
{{/if}}

{{#if (eq orm "gorm")}}
require gorm.io/gorm v1.25.12
{{#if (eq database "sqlite")}}
require github.com/glebarez/sqlite v1.11.0
{{else if (eq database "postgres")}}
require gorm.io/driver/postgres v1.5.9
{{else if (eq database "mysql")}}
require gorm.io/driver/mysql v1.5.7
{{/if}}
{{else if (eq orm "sqlx")}}
require github.com/jmoiron/sqlx v1.4.0
{{#if (eq database "sqlite")}}
require modernc.org/sqlite v1.34.1
{{else if (eq database "postgres")}}
require github.com/jackc/pgx/v5 v5.7.1
{{else if (eq database "mysql")}}
require github.com/go-sql-driver/mysql v1.8.1
{{/if}}
{{else if (eq orm "sqlc")}}
{{#if (eq database "sqlite")}}
require modernc.org/sqlite v1.34.1
{{else if (eq database "postgres")}}
require github.com/jackc/pgx/v5 v5.7.1
{{else if (eq database "mysql")}}
require github.com/go-sql-driver/mysql v1.8.1
{{/if}}
{{/if}}

{{#if (eq migrations "goose")}}
require github.com/pressly/goose/v3 v3.22.1
{{else if (eq migrations "golang-migrate")}}
require github.com/golang-migrate/migrate/v4 v4.18.1
{{/if}}

{{#if (ne orm "none")}}
require github.com/google/uuid v1.6.0
{{/if}}
`],
  ["go/base/internal/config/config.go.hbs", `package config

import "os"

type Config struct {
	AppName string
	Port    string
}

func Load() Config {
	return Config{
		AppName: getenv("APP_NAME", "{{projectName}}"),
		Port:    getenv("PORT", "8000"),
	}
}

func getenv(key, fallback string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return fallback
}`],
  ["go/base/Makefile.hbs", `.PHONY: build run test vet fmt generate migrate-up migrate-down

{{#if (eq orm "sqlc")}}
build: generate
run: generate
{{/if}}

build:
	go build -o ./bin/{{project_slug}} ./cmd/api

run:
	go run ./cmd/api

test:
	go test -race ./...

vet:
	go vet ./...

fmt:
	gofmt -l .

{{#if (eq orm "sqlc")}}

generate:
	sqlc generate
{{/if}}

{{#if (eq migrations "goose")}}

migrate-up:
	go run github.com/pressly/goose/v3/cmd/goose@latest -dir migrations up

migrate-down:
	go run github.com/pressly/goose/v3/cmd/goose@latest -dir migrations down
{{else if (eq migrations "golang-migrate")}}

{{#if (eq database "postgres")}}
MIGRATE_TAGS := postgres
{{else if (eq database "mysql")}}
MIGRATE_TAGS := mysql
{{else}}
MIGRATE_TAGS := sqlite3
{{/if}}

migrate-up:
	go run -tags '$(MIGRATE_TAGS)' github.com/golang-migrate/migrate/v4/cmd/migrate@latest -path db/migrations -database "$$DATABASE_URL" up

migrate-down:
	go run -tags '$(MIGRATE_TAGS)' github.com/golang-migrate/migrate/v4/cmd/migrate@latest -path db/migrations -database "$$DATABASE_URL" down
{{/if}}`],
  ["go/core/internal/service/item_service_test.go.hbs", `package service

import (
	"errors"
	"strings"
	"testing"
)

func TestValidateName(t *testing.T) {
	longName := strings.Repeat("a", 201)

	tests := []struct {
		name string
		want error
	}{
		{name: "abc", want: nil},
		{name: "  spaced name  ", want: nil},
		{name: "", want: ErrInvalidInput},
		{name: "   ", want: ErrInvalidInput},
		{name: longName, want: ErrInvalidInput},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := validateName(tt.name)
			if tt.want == nil {
				if err != nil {
					t.Errorf("validateName(%q) = %v, want nil", tt.name, err)
				}
				return
			}
			if !errors.Is(err, tt.want) {
				t.Errorf("validateName(%q) = %v, want %v", tt.name, err, tt.want)
			}
		})
	}
}`],
  ["go/core/internal/service/item_service.go.hbs", `package service

import (
	"context"
	"errors"
	"fmt"
	"strings"
	"time"

	"github.com/google/uuid"

	"{{project_slug}}/internal/model"
	"{{project_slug}}/internal/repository"
)

var ErrInvalidInput = errors.New("invalid input")

type ItemService struct {
	repo repository.ItemRepository
}

func NewItemService(repo repository.ItemRepository) *ItemService {
	return &ItemService{repo: repo}
}

func (s *ItemService) CreateItem(ctx context.Context, name string) (model.Item, error) {
	if err := validateName(name); err != nil {
		return model.Item{}, err
	}
	item := model.Item{
		ID:        uuid.NewString(),
		Name:      name,
		CreatedAt: time.Now(),
	}
	if err := s.repo.Create(ctx, &item); err != nil {
		return model.Item{}, fmt.Errorf("create item: %w", err)
	}
	return item, nil
}

func (s *ItemService) ListItems(ctx context.Context) ([]model.Item, error) {
	items, err := s.repo.List(ctx)
	if err != nil {
		return nil, fmt.Errorf("list items: %w", err)
	}
	return items, nil
}

func validateName(name string) error {
	if strings.TrimSpace(name) == "" {
		return fmt.Errorf("%w: name must not be empty", ErrInvalidInput)
	}
	if len([]rune(name)) > 200 {
		return fmt.Errorf("%w: name must be at most 200 characters", ErrInvalidInput)
	}
	return nil
}`],
  ["go/framework/chi/cmd/api/main.go.hbs", `package main

import (
	"context"
	"errors"
	"log"
	"net/http"
	"os/signal"
	"syscall"
	"time"

	"github.com/go-chi/chi/v5"

	"{{project_slug}}/internal/config"
{{#if (ne orm "none")}}
	"{{project_slug}}/internal/db"
	"{{project_slug}}/internal/handler"
	"{{project_slug}}/internal/repository"
	"{{project_slug}}/internal/service"
{{/if}}
)

func main() {
	cfg := config.Load()

{{#if (ne orm "none")}}
	conn, err := db.Connect()
	if err != nil {
		log.Fatalf("database not ready: %v", err)
	}
{{#if (and (eq orm "gorm") (eq migrations "none"))}}
	if err := db.AutoMigrate(conn); err != nil {
		log.Fatalf("auto-migrate failed: %v", err)
	}
{{/if}}
	repo := repository.NewItemRepository(conn)
	h := handler.NewHandler(service.NewItemService(repo))
{{/if}}

	r := chi.NewRouter()
	r.Get("/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte(\`{"status":"ok"}\`))
	})
{{#if (ne orm "none")}}
	r.Get("/items", h.ListItems)
	r.Post("/items", h.CreateItem)
{{/if}}

	srv := &http.Server{
		Addr:              ":" + cfg.Port,
		Handler:           r,
		ReadHeaderTimeout: 5 * time.Second,
		ReadTimeout:       10 * time.Second,
		WriteTimeout:      10 * time.Second,
		IdleTimeout:       60 * time.Second,
	}

	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
	defer stop()

	go func() {
		log.Printf("%s listening on %s", cfg.AppName, srv.Addr)
		if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			log.Fatalf("server error: %v", err)
		}
	}()

	<-ctx.Done()

	shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	if err := srv.Shutdown(shutdownCtx); err != nil {
		log.Fatalf("graceful shutdown failed: %v", err)
	}
	log.Printf("server stopped")
}`],
  ["go/framework/chi/internal/handler/handler.go.hbs", `package handler

import (
	"encoding/json"
	"errors"
	"net/http"

	"{{project_slug}}/internal/service"
)

type Handler struct {
	items *service.ItemService
}

func NewHandler(items *service.ItemService) Handler {
	return Handler{items: items}
}

func (h Handler) ListItems(w http.ResponseWriter, r *http.Request) {
	items, err := h.items.ListItems(r.Context())
	if err != nil {
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "could not list items"})
		return
	}
	writeJSON(w, http.StatusOK, items)
}

func (h Handler) CreateItem(w http.ResponseWriter, r *http.Request) {
	var body struct {
		Name string \`json:"name"\`
	}
	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
		writeJSON(w, http.StatusBadRequest, map[string]string{"error": "invalid request body"})
		return
	}
	item, err := h.items.CreateItem(r.Context(), body.Name)
	if err != nil {
		if errors.Is(err, service.ErrInvalidInput) {
			writeJSON(w, http.StatusBadRequest, map[string]string{"error": err.Error()})
			return
		}
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "could not create item"})
		return
	}
	writeJSON(w, http.StatusCreated, item)
}

func writeJSON(w http.ResponseWriter, status int, body any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(body)
}`],
  ["go/framework/echo/cmd/api/main.go.hbs", `package main

import (
	"context"
	"errors"
	"log"
	"net/http"
	"os/signal"
	"syscall"
	"time"

	"github.com/labstack/echo/v4"

	"{{project_slug}}/internal/config"
{{#if (ne orm "none")}}
	"{{project_slug}}/internal/db"
	"{{project_slug}}/internal/handler"
	"{{project_slug}}/internal/repository"
	"{{project_slug}}/internal/service"
{{/if}}
)

func main() {
	cfg := config.Load()

{{#if (ne orm "none")}}
	conn, err := db.Connect()
	if err != nil {
		log.Fatalf("database not ready: %v", err)
	}
{{#if (and (eq orm "gorm") (eq migrations "none"))}}
	if err := db.AutoMigrate(conn); err != nil {
		log.Fatalf("auto-migrate failed: %v", err)
	}
{{/if}}
	repo := repository.NewItemRepository(conn)
	h := handler.NewHandler(service.NewItemService(repo))
{{/if}}

	e := echo.New()
	e.GET("/health", func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]string{"status": "ok"})
	})
{{#if (ne orm "none")}}
	e.GET("/items", h.ListItems)
	e.POST("/items", h.CreateItem)
{{/if}}

	addr := ":" + cfg.Port
	e.Server = &http.Server{
		Handler:           e,
		ReadHeaderTimeout: 5 * time.Second,
		ReadTimeout:       10 * time.Second,
		WriteTimeout:      10 * time.Second,
		IdleTimeout:       60 * time.Second,
	}

	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
	defer stop()

	go func() {
		log.Printf("%s listening on %s", cfg.AppName, addr)
		if err := e.Start(addr); err != nil && !errors.Is(err, http.ErrServerClosed) {
			log.Fatalf("server error: %v", err)
		}
	}()

	<-ctx.Done()

	shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	if err := e.Shutdown(shutdownCtx); err != nil {
		log.Fatalf("graceful shutdown failed: %v", err)
	}
	log.Printf("server stopped")
}`],
  ["go/framework/echo/internal/handler/handler.go.hbs", `package handler

import (
	"errors"
	"net/http"

	"github.com/labstack/echo/v4"

	"{{project_slug}}/internal/service"
)

type Handler struct {
	items *service.ItemService
}

func NewHandler(items *service.ItemService) Handler {
	return Handler{items: items}
}

func (h Handler) ListItems(c echo.Context) error {
	items, err := h.items.ListItems(c.Request().Context())
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "could not list items"})
	}
	return c.JSON(http.StatusOK, items)
}

func (h Handler) CreateItem(c echo.Context) error {
	var body struct {
		Name string \`json:"name"\`
	}
	if err := c.Bind(&body); err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "invalid request body"})
	}
	item, err := h.items.CreateItem(c.Request().Context(), body.Name)
	if err != nil {
		if errors.Is(err, service.ErrInvalidInput) {
			return c.JSON(http.StatusBadRequest, map[string]string{"error": err.Error()})
		}
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "could not create item"})
	}
	return c.JSON(http.StatusCreated, item)
}`],
  ["go/framework/fiber/cmd/api/main.go.hbs", `package main

import (
	"context"
	"log"
	"os/signal"
	"syscall"
	"time"

	"github.com/gofiber/fiber/v2"

	"{{project_slug}}/internal/config"
{{#if (ne orm "none")}}
	"{{project_slug}}/internal/db"
	"{{project_slug}}/internal/handler"
	"{{project_slug}}/internal/repository"
	"{{project_slug}}/internal/service"
{{/if}}
)

func main() {
	cfg := config.Load()

{{#if (ne orm "none")}}
	conn, err := db.Connect()
	if err != nil {
		log.Fatalf("database not ready: %v", err)
	}
{{#if (and (eq orm "gorm") (eq migrations "none"))}}
	if err := db.AutoMigrate(conn); err != nil {
		log.Fatalf("auto-migrate failed: %v", err)
	}
{{/if}}
	repo := repository.NewItemRepository(conn)
	h := handler.NewHandler(service.NewItemService(repo))
{{/if}}

	app := fiber.New(fiber.Config{
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 10 * time.Second,
		IdleTimeout:  60 * time.Second,
	})
	app.Get("/health", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"status": "ok"})
	})
{{#if (ne orm "none")}}
	app.Get("/items", h.ListItems)
	app.Post("/items", h.CreateItem)
{{/if}}

	addr := ":" + cfg.Port

	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
	defer stop()

	go func() {
		log.Printf("%s listening on %s", cfg.AppName, addr)
		if err := app.Listen(addr); err != nil {
			log.Fatalf("server error: %v", err)
		}
	}()

	<-ctx.Done()

	if err := app.Shutdown(); err != nil {
		log.Fatalf("graceful shutdown failed: %v", err)
	}
	log.Printf("server stopped")
}`],
  ["go/framework/fiber/internal/handler/handler.go.hbs", `package handler

import (
	"errors"

	"github.com/gofiber/fiber/v2"

	"{{project_slug}}/internal/service"
)

type Handler struct {
	items *service.ItemService
}

func NewHandler(items *service.ItemService) Handler {
	return Handler{items: items}
}

func (h Handler) ListItems(c *fiber.Ctx) error {
	items, err := h.items.ListItems(c.UserContext())
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "could not list items"})
	}
	return c.JSON(items)
}

func (h Handler) CreateItem(c *fiber.Ctx) error {
	var body struct {
		Name string \`json:"name"\`
	}
	if err := c.BodyParser(&body); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid request body"})
	}
	item, err := h.items.CreateItem(c.UserContext(), body.Name)
	if err != nil {
		if errors.Is(err, service.ErrInvalidInput) {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": err.Error()})
		}
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "could not create item"})
	}
	return c.Status(fiber.StatusCreated).JSON(item)
}`],
  ["go/framework/gin/cmd/api/main.go.hbs", `package main

import (
	"context"
	"errors"
	"log"
	"net/http"
	"os/signal"
	"syscall"
	"time"

	"github.com/gin-gonic/gin"

	"{{project_slug}}/internal/config"
{{#if (ne orm "none")}}
	"{{project_slug}}/internal/db"
	"{{project_slug}}/internal/handler"
	"{{project_slug}}/internal/repository"
	"{{project_slug}}/internal/service"
{{/if}}
)

func main() {
	cfg := config.Load()

{{#if (ne orm "none")}}
	conn, err := db.Connect()
	if err != nil {
		log.Fatalf("database not ready: %v", err)
	}
{{#if (and (eq orm "gorm") (eq migrations "none"))}}
	if err := db.AutoMigrate(conn); err != nil {
		log.Fatalf("auto-migrate failed: %v", err)
	}
{{/if}}
	repo := repository.NewItemRepository(conn)
	h := handler.NewHandler(service.NewItemService(repo))
{{/if}}

	r := gin.Default()
	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"status": "ok"})
	})
{{#if (ne orm "none")}}
	r.GET("/items", h.ListItems)
	r.POST("/items", h.CreateItem)
{{/if}}

	srv := &http.Server{
		Addr:              ":" + cfg.Port,
		Handler:           r,
		ReadHeaderTimeout: 5 * time.Second,
		ReadTimeout:       10 * time.Second,
		WriteTimeout:      10 * time.Second,
		IdleTimeout:       60 * time.Second,
	}

	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
	defer stop()

	go func() {
		log.Printf("%s listening on %s", cfg.AppName, srv.Addr)
		if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			log.Fatalf("server error: %v", err)
		}
	}()

	<-ctx.Done()

	shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	if err := srv.Shutdown(shutdownCtx); err != nil {
		log.Fatalf("graceful shutdown failed: %v", err)
	}
	log.Printf("server stopped")
}`],
  ["go/framework/gin/internal/handler/handler.go.hbs", `package handler

import (
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"

	"{{project_slug}}/internal/service"
)

type Handler struct {
	items *service.ItemService
}

func NewHandler(items *service.ItemService) Handler {
	return Handler{items: items}
}

func (h Handler) ListItems(c *gin.Context) {
	items, err := h.items.ListItems(c.Request.Context())
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not list items"})
		return
	}
	c.JSON(http.StatusOK, items)
}

func (h Handler) CreateItem(c *gin.Context) {
	var body struct {
		Name string \`json:"name"\`
	}
	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid request body"})
		return
	}
	item, err := h.items.CreateItem(c.Request.Context(), body.Name)
	if err != nil {
		if errors.Is(err, service.ErrInvalidInput) {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not create item"})
		return
	}
	c.JSON(http.StatusCreated, item)
}`],
  ["go/framework/none/cmd/api/main.go.hbs", `package main

import "fmt"

func main() {
	fmt.Println("Hello from {{projectName}}!")
}`],
  ["go/framework/stdlib/cmd/api/main.go.hbs", `package main

import (
	"context"
	"errors"
	"log"
	"net/http"
	"os/signal"
	"syscall"
	"time"

	"{{project_slug}}/internal/config"
{{#if (ne orm "none")}}
	"{{project_slug}}/internal/db"
	"{{project_slug}}/internal/handler"
	"{{project_slug}}/internal/repository"
	"{{project_slug}}/internal/service"
{{/if}}
)

func main() {
	cfg := config.Load()

{{#if (ne orm "none")}}
	conn, err := db.Connect()
	if err != nil {
		log.Fatalf("database not ready: %v", err)
	}
{{#if (and (eq orm "gorm") (eq migrations "none"))}}
	if err := db.AutoMigrate(conn); err != nil {
		log.Fatalf("auto-migrate failed: %v", err)
	}
{{/if}}
	repo := repository.NewItemRepository(conn)
	h := handler.NewHandler(service.NewItemService(repo))
{{/if}}

	mux := http.NewServeMux()
	mux.HandleFunc("GET /health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte(\`{"status":"ok"}\`))
	})
{{#if (ne orm "none")}}
	mux.HandleFunc("GET /items", h.ListItems)
	mux.HandleFunc("POST /items", h.CreateItem)
{{/if}}

	srv := &http.Server{
		Addr:              ":" + cfg.Port,
		Handler:           mux,
		ReadHeaderTimeout: 5 * time.Second,
		ReadTimeout:       10 * time.Second,
		WriteTimeout:      10 * time.Second,
		IdleTimeout:       60 * time.Second,
	}

	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
	defer stop()

	go func() {
		log.Printf("%s listening on %s", cfg.AppName, srv.Addr)
		if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			log.Fatalf("server error: %v", err)
		}
	}()

	<-ctx.Done()

	shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	if err := srv.Shutdown(shutdownCtx); err != nil {
		log.Fatalf("graceful shutdown failed: %v", err)
	}
	log.Printf("server stopped")
}`],
  ["go/framework/stdlib/internal/handler/handler.go.hbs", `package handler

import (
	"encoding/json"
	"errors"
	"net/http"

	"{{project_slug}}/internal/service"
)

type Handler struct {
	items *service.ItemService
}

func NewHandler(items *service.ItemService) Handler {
	return Handler{items: items}
}

func (h Handler) ListItems(w http.ResponseWriter, r *http.Request) {
	items, err := h.items.ListItems(r.Context())
	if err != nil {
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "could not list items"})
		return
	}
	writeJSON(w, http.StatusOK, items)
}

func (h Handler) CreateItem(w http.ResponseWriter, r *http.Request) {
	var body struct {
		Name string \`json:"name"\`
	}
	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
		writeJSON(w, http.StatusBadRequest, map[string]string{"error": "invalid request body"})
		return
	}
	item, err := h.items.CreateItem(r.Context(), body.Name)
	if err != nil {
		if errors.Is(err, service.ErrInvalidInput) {
			writeJSON(w, http.StatusBadRequest, map[string]string{"error": err.Error()})
			return
		}
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "could not create item"})
		return
	}
	writeJSON(w, http.StatusCreated, item)
}

func writeJSON(w http.ResponseWriter, status int, body any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(body)
}`],
  ["go/migrations/golang-migrate/db/migrations/0001_create_items.down.sql.hbs", `DROP TABLE items;`],
  ["go/migrations/golang-migrate/db/migrations/0001_create_items.up.sql.hbs", `CREATE TABLE items (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);`],
  ["go/migrations/goose/migrations/0001_create_items.sql.hbs", `-- +goose Up
CREATE TABLE items (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- +goose Down
DROP TABLE items;`],
  ["go/orm/gorm/internal/db/db.go.hbs", `package db

import (
	"fmt"
	"os"
	"time"

	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	{{#if (eq database "sqlite")}}
	"github.com/glebarez/sqlite"
	{{else if (eq database "postgres")}}
	"gorm.io/driver/postgres"
	{{else if (eq database "mysql")}}
	"gorm.io/driver/mysql"
	{{/if}}

	"{{project_slug}}/internal/model"
)

func databaseURL() string {
	if dsn := os.Getenv("DATABASE_URL"); dsn != "" {
		return dsn
	}
	{{#if (eq database "sqlite")}}
	return "{{project_slug}}.db"
	{{else if (eq database "postgres")}}
	return "postgres://postgres:postgres@localhost:5432/{{project_slug}}"
	{{else if (eq database "mysql")}}
	return "mysql://root:password@localhost:3306/{{project_slug}}"
	{{/if}}
}

func Connect() (*gorm.DB, error) {
	{{#if (eq database "sqlite")}}
	db, err := gorm.Open(sqlite.Open(databaseURL()), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Warn),
	})
	{{else if (eq database "postgres")}}
	db, err := gorm.Open(postgres.Open(databaseURL()), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Warn),
	})
	{{else if (eq database "mysql")}}
	db, err := gorm.Open(mysql.Open(databaseURL()), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Warn),
	})
	{{/if}}
	if err != nil {
		return nil, fmt.Errorf("open database: %w", err)
	}

	sqlDB, err := db.DB()
	if err != nil {
		return nil, fmt.Errorf("access connection pool: %w", err)
	}

	sqlDB.SetMaxOpenConns(25)
	sqlDB.SetMaxIdleConns(25)
	sqlDB.SetConnMaxLifetime(5 * time.Minute)

	if err := sqlDB.Ping(); err != nil {
		return nil, fmt.Errorf("ping database: %w", err)
	}

	return db, nil
}

func AutoMigrate(db *gorm.DB) error {
	return db.AutoMigrate(&model.Item{})
}`],
  ["go/orm/gorm/internal/model/item.go.hbs", `package model

import "time"

type Item struct {
	ID        string    \`gorm:"primarykey" json:"id"\`
	Name      string    \`json:"name"\`
	CreatedAt time.Time \`json:"created_at"\`
	UpdatedAt time.Time \`json:"updated_at"\`
}`],
  ["go/orm/gorm/internal/repository/item.go.hbs", `package repository

import (
	"context"
	"fmt"

	"gorm.io/gorm"

	"{{project_slug}}/internal/model"
)

type ItemRepository interface {
	Create(ctx context.Context, item *model.Item) error
	List(ctx context.Context) ([]model.Item, error)
}

type gormItemRepository struct {
	db *gorm.DB
}

func NewItemRepository(db *gorm.DB) ItemRepository {
	return &gormItemRepository{db: db}
}

func (r *gormItemRepository) Create(ctx context.Context, item *model.Item) error {
	if err := r.db.WithContext(ctx).Create(item).Error; err != nil {
		return fmt.Errorf("insert item: %w", err)
	}
	return nil
}

func (r *gormItemRepository) List(ctx context.Context) ([]model.Item, error) {
	var items []model.Item
	if err := r.db.WithContext(ctx).Order("created_at DESC").Find(&items).Error; err != nil {
		return nil, fmt.Errorf("select items: %w", err)
	}
	return items, nil
}`],
  ["go/orm/sqlc/internal/db/db.go.hbs", `package db

import (
	"database/sql"
	"fmt"
	"os"
	"time"
	{{#if (eq database "sqlite")}}
	_ "modernc.org/sqlite"
	{{else if (eq database "postgres")}}
	_ "github.com/jackc/pgx/v5/stdlib"
	{{else if (eq database "mysql")}}
	_ "github.com/go-sql-driver/mysql"
	{{/if}}
)

func databaseURL() string {
	if dsn := os.Getenv("DATABASE_URL"); dsn != "" {
		return dsn
	}
	{{#if (eq database "sqlite")}}
	return "{{project_slug}}.db"
	{{else if (eq database "postgres")}}
	return "postgres://postgres:postgres@localhost:5432/{{project_slug}}"
	{{else if (eq database "mysql")}}
	return "mysql://root:password@localhost:3306/{{project_slug}}"
	{{/if}}
}

func Connect() (*sql.DB, error) {
	{{#if (eq database "sqlite")}}
	db, err := sql.Open("sqlite", databaseURL())
	{{else if (eq database "postgres")}}
	db, err := sql.Open("pgx", databaseURL())
	{{else if (eq database "mysql")}}
	db, err := sql.Open("mysql", databaseURL())
	{{/if}}
	if err != nil {
		return nil, fmt.Errorf("open database: %w", err)
	}

	db.SetMaxOpenConns(25)
	db.SetMaxIdleConns(25)
	db.SetConnMaxLifetime(5 * time.Minute)

	if err := db.Ping(); err != nil {
		return nil, fmt.Errorf("ping database: %w", err)
	}

	return db, nil
}`],
  ["go/orm/sqlc/internal/model/item.go.hbs", `package model

import "time"

type Item struct {
	ID        string    \`json:"id"\`
	Name      string    \`json:"name"\`
	CreatedAt time.Time \`json:"created_at"\`
}`],
  ["go/orm/sqlc/internal/repository/item.go.hbs", `package repository

import (
	"context"
	"database/sql"
	"fmt"

	"{{project_slug}}/internal/db/sqlc"
	"{{project_slug}}/internal/model"
)

type ItemRepository interface {
	Create(ctx context.Context, item *model.Item) error
	List(ctx context.Context) ([]model.Item, error)
}

type sqlcItemRepository struct {
	q *sqlc.Queries
}

func NewItemRepository(db *sql.DB) ItemRepository {
	return &sqlcItemRepository{q: sqlc.New(db)}
}

func (r *sqlcItemRepository) Create(ctx context.Context, item *model.Item) error {
	if err := r.q.CreateItem(ctx, sqlc.CreateItemParams{
		ID:        item.ID,
		Name:      item.Name,
		CreatedAt: item.CreatedAt,
	}); err != nil {
		return fmt.Errorf("insert item: %w", err)
	}
	return nil
}

func (r *sqlcItemRepository) List(ctx context.Context) ([]model.Item, error) {
	rows, err := r.q.ListItems(ctx)
	if err != nil {
		return nil, fmt.Errorf("select items: %w", err)
	}
	items := make([]model.Item, 0, len(rows))
	for _, row := range rows {
		items = append(items, model.Item{
			ID:        row.ID,
			Name:      row.Name,
			CreatedAt: row.CreatedAt,
		})
	}
	return items, nil
}`],
  ["go/orm/sqlc/queries/items.sql.hbs", `-- name: ListItems :many
SELECT id, name, created_at FROM items ORDER BY created_at DESC;

-- name: CreateItem :exec
INSERT INTO items (id, name, created_at)
VALUES ({{#if (eq database "postgres")}}$1, $2, $3{{else}}?, ?, ?{{/if}});`],
  ["go/orm/sqlc/schema/schema.sql.hbs", `CREATE TABLE items (
    id         TEXT      NOT NULL,
    name       TEXT      NOT NULL,
    created_at TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);`],
  ["go/orm/sqlc/sqlc.yaml.hbs", `version: "2"
sql:
  - engine: "{{#if (eq database "postgres")}}postgresql{{else if (eq database "mysql")}}mysql{{else}}sqlite{{/if}}"
    queries: "queries"
    schema: "schema"
    gen:
      go:
        package: "sqlc"
        out: "internal/db/sqlc"
        sql_package: "database/sql"
        emit_json_tags: true
        emit_prepared_queries: true
`],
  ["go/orm/sqlx/internal/db/db.go.hbs", `package db

import (
	"fmt"
	"os"
	"time"

	"github.com/jmoiron/sqlx"
	{{#if (eq database "sqlite")}}
	_ "modernc.org/sqlite"
	{{else if (eq database "postgres")}}
	_ "github.com/jackc/pgx/v5/stdlib"
	{{else if (eq database "mysql")}}
	_ "github.com/go-sql-driver/mysql"
	{{/if}}
)

func databaseURL() string {
	if dsn := os.Getenv("DATABASE_URL"); dsn != "" {
		return dsn
	}
	{{#if (eq database "sqlite")}}
	return "{{project_slug}}.db"
	{{else if (eq database "postgres")}}
	return "postgres://postgres:postgres@localhost:5432/{{project_slug}}"
	{{else if (eq database "mysql")}}
	return "mysql://root:password@localhost:3306/{{project_slug}}"
	{{/if}}
}

func Connect() (*sqlx.DB, error) {
	{{#if (eq database "sqlite")}}
	db, err := sqlx.Open("sqlite", databaseURL())
	{{else if (eq database "postgres")}}
	db, err := sqlx.Open("pgx", databaseURL())
	{{else if (eq database "mysql")}}
	db, err := sqlx.Open("mysql", databaseURL())
	{{/if}}
	if err != nil {
		return nil, fmt.Errorf("open database: %w", err)
	}

	db.SetMaxOpenConns(25)
	db.SetMaxIdleConns(25)
	db.SetConnMaxLifetime(5 * time.Minute)

	if err := db.Ping(); err != nil {
		return nil, fmt.Errorf("ping database: %w", err)
	}

	return db, nil
}`],
  ["go/orm/sqlx/internal/model/item.go.hbs", `package model

import "time"

type Item struct {
	ID        string    \`db:"id" json:"id"\`
	Name      string    \`db:"name" json:"name"\`
	CreatedAt time.Time \`db:"created_at" json:"created_at"\`
}`],
  ["go/orm/sqlx/internal/repository/item.go.hbs", `package repository

import (
	"context"
	"fmt"

	"github.com/jmoiron/sqlx"

	"{{project_slug}}/internal/model"
)

type ItemRepository interface {
	Create(ctx context.Context, item *model.Item) error
	List(ctx context.Context) ([]model.Item, error)
}

type sqlxItemRepository struct {
	db *sqlx.DB
}

func NewItemRepository(db *sqlx.DB) ItemRepository {
	return &sqlxItemRepository{db: db}
}

func (r *sqlxItemRepository) Create(ctx context.Context, item *model.Item) error {
	if _, err := r.db.ExecContext(ctx, r.db.Rebind("INSERT INTO items (id, name, created_at) VALUES (?, ?, ?)"),
		item.ID, item.Name, item.CreatedAt); err != nil {
		return fmt.Errorf("insert item: %w", err)
	}
	return nil
}

func (r *sqlxItemRepository) List(ctx context.Context) ([]model.Item, error) {
	var items []model.Item
	if err := r.db.SelectContext(ctx, &items, r.db.Rebind("SELECT id, name, created_at FROM items ORDER BY created_at DESC")); err != nil {
		return nil, fmt.Errorf("select items: %w", err)
	}
	return items, nil
}`],
  ["python/addons/docker/_dockerignore", `.git
.gitignore
.venv
venv
__pycache__
*.pyc
.pytest_cache
.mypy_cache
.ruff_cache
.env
.env*.local
Dockerfile
.dockerignore
`],
  ["python/addons/docker/docker-compose.yml.hbs", `services:
{{#if (eq database "postgres")}}
  db:
    image: postgres:16
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: {{project_slug}}
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data
{{else if (eq database "mysql")}}
  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: {{project_slug}}
    ports:
      - "3306:3306"
    volumes:
      - mysqldata:/var/lib/mysql
{{/if}}

volumes:
{{#if (eq database "postgres")}}
  pgdata:
{{else if (eq database "mysql")}}
  mysqldata:
{{/if}}
`],
  ["python/addons/docker/Dockerfile.hbs", `FROM python:3.12-slim

WORKDIR /app

COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

COPY pyproject.toml ./
RUN uv sync --no-install-project --no-dev

COPY . .

ENV PYTHONPATH=/app
EXPOSE 8000

{{#if (eq framework "fastapi")}}
CMD ["uv", "run", "uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
{{else if (eq framework "litestar")}}
CMD ["uv", "run", "uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
{{else if (eq framework "flask")}}
CMD ["uv", "run", "flask", "--app", "src.main", "run", "--host", "0.0.0.0", "--port", "8000"]
{{else if (eq framework "django")}}
CMD ["uv", "run", "gunicorn", "config.wsgi", "--bind", "0.0.0.0:8000"]
{{/if}}
`],
  ["python/addons/github-actions/.github/workflows/ci.yml.hbs", `name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: "3.12"
      - uses: astral-sh/setup-uv@v5
      - name: Install dependencies
        run: uv sync
      {{#if (includes addons "ruff")}}
      - name: Lint
        run: uv run ruff check .
      {{/if}}
      {{#if (includes addons "mypy")}}
      - name: Type check
        run: uv run mypy .
      {{/if}}
      {{#if (includes addons "pytest")}}
      - name: Test
        run: uv run pytest
      {{/if}}
`],
  ["python/addons/mypy/mypy.ini.hbs", `[mypy]
python_version = "3.12"
strict = true
warn_unused_configs = true
plugins = ["pydantic.mypy"]

[[tool.mypy.overrides]]
module = "src.*"
follow_imports = "normal"
`],
  ["python/addons/pytest/tests/test_health.py.hbs", `{{#if (eq framework "fastapi")}}
from fastapi.testclient import TestClient

from src.main import app

client = TestClient(app)

def test_health():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}
{{else if (eq framework "litestar")}}
from litestar.testing import TestClient

from src.main import app

client = TestClient(app)

def test_health():
    with client:
        response = client.get("/health")
        assert response.status_code == 200
        assert response.json() == {"status": "ok"}
{{else if (eq framework "flask")}}
from src.main import app

client = app.test_client()

def test_health():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.get_json() == {"status": "ok"}
{{else if (eq framework "django")}}
import os

import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings.development")
django.setup()

from django.test import Client

client = Client()

def test_health():
    response = client.get("/api/health/")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}
{{/if}}
`],
  ["python/addons/ruff/ruff.toml.hbs", `line-length = 100
target-version = "py312"

[lint]
select = ["E", "F", "I", "UP", "B"]
ignore = []

[lint.isort]
known-first-party = ["src"]
`],
  ["python/base/env.example.hbs", `{{#if (eq framework "django")}}
DJANGO_SECRET_KEY=django-insecure-change-me
DJANGO_DEBUG=true
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:3000
{{else}}
APP_NAME={{projectName}}
DEBUG=false

{{#if (ne database "none")}}
{{#if (eq orm "tortoise")}}
# SQLite:  sqlite://./{{project_slug}}.db
# Postgres: postgres://postgres:postgres@localhost:5432/{{project_slug}}
# MySQL:   mysql://root:password@localhost:3306/{{project_slug}}
DATABASE_URL={{#if (eq database "sqlite")}}sqlite://./{{project_slug}}.db{{else if (eq database "postgres")}}postgres://postgres:postgres@localhost:5432/{{project_slug}}{{else if (eq database "mysql")}}mysql://root:password@localhost:3306/{{project_slug}}{{/if}}
{{else}}
# SQLite:  sqlite+aiosqlite:///./{{project_slug}}.db
# Postgres: postgresql+asyncpg://postgres:postgres@localhost:5432/{{project_slug}}
# MySQL:   mysql+asyncmy://root:password@localhost:3306/{{project_slug}}
DATABASE_URL={{#if (eq database "sqlite")}}sqlite+aiosqlite:///./{{project_slug}}.db{{else if (eq database "postgres")}}postgresql+asyncpg://postgres:postgres@localhost:5432/{{project_slug}}{{else if (eq database "mysql")}}mysql+asyncmy://root:password@localhost:3306/{{project_slug}}{{/if}}
{{/if}}
{{/if}}
{{/if}}`],
  ["python/base/pyproject-pip.toml.hbs", `[project]
name = "{{project_slug}}"
version = "0.1.0"
description = {{#if (eq framework "none")}}"{{projectName}}"{{else}}"{{projectName}} - a {{framework}} project"{{/if}}
requires-python = ">=3.12"
dependencies = [
{{#if (ne framework "django")}}
    "pydantic-settings",
{{/if}}
{{#if (eq framework "fastapi")}}
    "fastapi",
    "uvicorn[standard]",
{{else if (eq framework "litestar")}}
    "litestar",
    "uvicorn[standard]",
{{else if (eq framework "django")}}
    "django",
    "djangorestframework",
    "django-cors-headers",
    "gunicorn",
{{else if (eq framework "flask")}}
    "flask",
{{/if}}
{{#if (eq framework "django")}}
    "psycopg[binary]",
{{else if (eq orm "sqlmodel")}}
    "sqlmodel",
{{else if (eq orm "sqlalchemy")}}
    "sqlalchemy[asyncio]",
{{else if (eq orm "tortoise")}}
    "tortoise-orm",
{{/if}}
{{#if (eq migrations "alembic")}}
    "alembic",
{{/if}}
{{#if (and (ne framework "django") (eq database "postgres"))}}
    "asyncpg",
{{else if (and (ne framework "django") (eq database "mysql"))}}
    "asyncmy",
{{else if (and (ne framework "django") (eq database "sqlite"))}}
    "aiosqlite",
{{else if (and (eq framework "django") (eq database "mysql"))}}
    "mysqlclient",
{{/if}}
]

[project.optional-dependencies]
dev = [
    "pytest",
    "ruff",
    "mypy",
]

[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

{{#if (eq framework "django")}}
[tool.hatch.build.targets.wheel]
packages = ["config", "apps"]

[tool.hatch.build.targets.wheel.force-include]
templates = "templates"
static = "static"
{{else}}
[tool.hatch.build.targets.wheel]
packages = ["src"]
{{/if}}

[tool.pytest.ini_options]
pythonpath = ["src"]`],
  ["python/base/pyproject-poetry.toml.hbs", `[tool.poetry]
name = "{{project_slug}}"
version = "0.1.0"
description = {{#if (eq framework "none")}}"{{projectName}}"{{else}}"{{projectName}} - a {{framework}} project"{{/if}}
authors = []
{{#if (eq framework "django")}}
packages = [
    { include = "config" },
    { include = "apps" },
    { include = "templates" },
    { include = "static" },
]
{{else}}
packages = [{ include = "src" }]
{{/if}}

[tool.poetry.dependencies]
python = ">=3.12"
{{#if (ne framework "django")}}
pydantic-settings = "^2.7"
{{/if}}
{{#if (eq framework "fastapi")}}
fastapi = "^0.115"
uvicorn = { extras = ["standard"], version = "^0.34" }
{{else if (eq framework "litestar")}}
litestar = "^2.14"
uvicorn = { extras = ["standard"], version = "^0.34" }
{{else if (eq framework "django")}}
django = "^5.1"
djangorestframework = "^3.15"
django-cors-headers = "^4.6"
gunicorn = "^23.0"
{{else if (eq framework "flask")}}
flask = "^3.1"
{{/if}}
{{#if (eq framework "django")}}
psycopg = { extras = ["binary"], version = "^3.2" }
{{else if (eq orm "sqlmodel")}}
sqlmodel = "^0.0.22"
{{else if (eq orm "sqlalchemy")}}
sqlalchemy = { extras = ["asyncio"], version = "^2.0" }
{{else if (eq orm "tortoise")}}
tortoise-orm = "^0.24"
{{/if}}
{{#if (eq migrations "alembic")}}
alembic = "^1.14"
{{/if}}
{{#if (and (ne framework "django") (eq database "postgres"))}}
asyncpg = "^0.30"
{{else if (and (ne framework "django") (eq database "mysql"))}}
asyncmy = "^0.2"
{{else if (and (ne framework "django") (eq database "sqlite"))}}
aiosqlite = "^0.20"
{{else if (and (eq framework "django") (eq database "mysql"))}}
mysqlclient = "^2.2"
{{/if}}

[build-system]
requires = ["poetry-core"]
build-backend = "poetry.core.masonry.api"`],
  ["python/base/pyproject-uv.toml.hbs", `[project]
name = "{{project_slug}}"
version = "0.1.0"
description = {{#if (eq framework "none")}}"{{projectName}}"{{else}}"{{projectName}} - a {{framework}} project"{{/if}}
requires-python = ">=3.12"
dependencies = [
{{#if (ne framework "django")}}
    "pydantic-settings",
{{/if}}
{{#if (eq framework "fastapi")}}
    "fastapi",
    "uvicorn[standard]",
{{else if (eq framework "litestar")}}
    "litestar",
    "uvicorn[standard]",
{{else if (eq framework "django")}}
    "django",
    "djangorestframework",
    "django-cors-headers",
    "gunicorn",
{{else if (eq framework "flask")}}
    "flask",
{{/if}}
{{#if (eq framework "django")}}
    "psycopg[binary]",
{{else if (eq orm "sqlmodel")}}
    "sqlmodel",
{{else if (eq orm "sqlalchemy")}}
    "sqlalchemy[asyncio]",
{{else if (eq orm "tortoise")}}
    "tortoise-orm",
{{/if}}
{{#if (eq migrations "alembic")}}
    "alembic",
{{/if}}
{{#if (and (ne framework "django") (eq database "postgres"))}}
    "asyncpg",
{{else if (and (ne framework "django") (eq database "mysql"))}}
    "asyncmy",
{{else if (and (ne framework "django") (eq database "sqlite"))}}
    "aiosqlite",
{{else if (and (eq framework "django") (eq database "mysql"))}}
    "mysqlclient",
{{/if}}
]

[dependency-groups]
dev = [
{{#if (includes addons "ruff")}}
    "ruff",
{{/if}}
{{#if (includes addons "mypy")}}
    "mypy",
{{/if}}
{{#if (includes addons "pytest")}}
    "pytest",
    "httpx",
{{/if}}
]

[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

{{#if (eq framework "django")}}
[tool.hatch.build.targets.wheel]
packages = ["config", "apps"]

[tool.hatch.build.targets.wheel.force-include]
templates = "templates"
static = "static"
{{else}}
[tool.hatch.build.targets.wheel]
packages = ["src"]
{{/if}}

[tool.pytest.ini_options]
pythonpath = ["src"]`],
  ["python/base/src/__init__.py.hbs", ``],
  ["python/base/src/config.py.hbs", `from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    app_name: str = "{{projectName}}"
    debug: bool = False
    cors_origins: list[str] = ["http://localhost:3000"]

    {{#if (eq database "sqlite")}}
    {{#if (eq orm "tortoise")}}
    database_url: str = "sqlite://./{{project_slug}}.db"
    {{else}}
    database_url: str = "sqlite+aiosqlite:///./{{project_slug}}.db"
    {{/if}}
    {{else if (eq database "postgres")}}
    {{#if (eq orm "tortoise")}}
    database_url: str = "postgres://postgres:postgres@localhost:5432/{{project_slug}}"
    {{else}}
    database_url: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/{{project_slug}}"
    {{/if}}
    {{else if (eq database "mysql")}}
    {{#if (eq orm "tortoise")}}
    database_url: str = "mysql://root:password@localhost:3306/{{project_slug}}"
    {{else}}
    database_url: str = "mysql+asyncmy://root:password@localhost:3306/{{project_slug}}"
    {{/if}}
    {{/if}}

@lru_cache
def get_settings() -> Settings:
    return Settings()
`],
  ["python/core/src/schemas/__init__.py.hbs", ``],
  ["python/core/src/schemas/items.py.hbs", `from datetime import datetime

from pydantic import BaseModel, ConfigDict

class ItemCreate(BaseModel):

    name: str

class ItemResponse(BaseModel):

    model_config = ConfigDict(from_attributes=True)

    id: str
    name: str
    created_at: datetime`],
  ["python/core/src/services/__init__.py.hbs", ``],
  ["python/core/src/services/items.py.hbs", `{{#if (eq orm "tortoise")}}
from ..repositories.items import (
    create_item as repo_create_item,
    list_items as repo_list_items,
)
from ..schemas.items import ItemCreate, ItemResponse

async def create_item(payload: ItemCreate) -> ItemResponse:

    return await repo_create_item(name=payload.name)

async def list_items() -> list[ItemResponse]:

    return await repo_list_items()
{{else}}
from sqlalchemy.ext.asyncio import AsyncSession

from ..repositories.items import (
    create_item as repo_create_item,
    list_items as repo_list_items,
)
from ..schemas.items import ItemCreate, ItemResponse

async def create_item(session: AsyncSession, payload: ItemCreate) -> ItemResponse:

    return await repo_create_item(session, name=payload.name)

async def list_items(session: AsyncSession) -> list[ItemResponse]:

    return await repo_list_items(session)
{{/if}}`],
  ["python/framework/django/apps/__init__.py.hbs", ``],
  ["python/framework/django/apps/core/__init__.py.hbs", ``],
  ["python/framework/django/apps/core/apps.py.hbs", `from django.apps import AppConfig

class CoreConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "apps.core"`],
  ["python/framework/django/apps/core/models.py.hbs", `from django.db import models`],
  ["python/framework/django/apps/core/urls.py.hbs", `from django.urls import path

from . import views

urlpatterns = [
    path("health/", views.health, name="health"),
]`],
  ["python/framework/django/apps/core/utils.py.hbs", ``],
  ["python/framework/django/apps/core/views.py.hbs", `from django.http import HttpRequest

from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(["GET"])
def health(request: HttpRequest) -> Response:
    return Response({"status": "ok"})`],
  ["python/framework/django/apps/users/__init__.py.hbs", ``],
  ["python/framework/django/apps/users/apps.py.hbs", `from django.apps import AppConfig

class UsersConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "apps.users"`],
  ["python/framework/django/apps/users/models.py.hbs", `from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):

    class Meta:
        db_table = "users"`],
  ["python/framework/django/apps/users/selectors.py.hbs", `from .models import User

def get_user_by_id(user_id: int) -> User | None:

    try:
        return User.objects.get(pk=user_id)
    except User.DoesNotExist:
        return None`],
  ["python/framework/django/apps/users/serializers.py.hbs", `from rest_framework import serializers

from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "first_name", "last_name"]
        read_only_fields = ["id"]`],
  ["python/framework/django/apps/users/services.py.hbs", `from django.db.models import QuerySet

from .models import User

def get_users() -> QuerySet[User]:

    return User.objects.filter(is_active=True)`],
  ["python/framework/django/apps/users/urls.py.hbs", `from django.urls import path

from . import views

app_name = "users"

urlpatterns = [
    path("", views.UserListView.as_view(), name="user-list"),
]`],
  ["python/framework/django/apps/users/views.py.hbs", `from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import User
from .serializers import UserSerializer

class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]`],
  ["python/framework/django/config/__init__.py.hbs", ``],
  ["python/framework/django/config/asgi.py.hbs", `import os

from django.core.asgi import get_asgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings.development")

application = get_asgi_application()
`],
  ["python/framework/django/config/settings/__init__.py.hbs", ``],
  ["python/framework/django/config/settings/base.py.hbs", `from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent.parent

SECRET_KEY = "django-insecure-change-me"

DEBUG = False

ALLOWED_HOSTS: list[str] = []

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "corsheaders",
    "rest_framework",
    "apps.core",
    "apps.users",
]

AUTH_USER_MODEL = "users.User"

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "config.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "config.wsgi.application"

{{#if (eq database "none")}}
DATABASES = {}
{{else if (eq database "sqlite")}}
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}
{{else if (eq database "postgres")}}
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "{{project_slug}}",
        "USER": "postgres",
        "PASSWORD": "postgres",
        "HOST": "localhost",
        "PORT": "5432",
    }
}
{{else if (eq database "mysql")}}
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.mysql",
        "NAME": "{{project_slug}}",
        "USER": "root",
        "PASSWORD": "password",
        "HOST": "localhost",
        "PORT": "3306",
    }
}
{{/if}}

AUTH_PASSWORD_VALIDATORS = [
    {"NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"},
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]

LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = True
USE_TZ = True

STATIC_URL = "static/"
STATIC_ROOT = BASE_DIR / "staticfiles"

MEDIA_URL = "media/"
MEDIA_ROOT = BASE_DIR / "media"

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

REST_FRAMEWORK = {}
`],
  ["python/framework/django/config/settings/development.py.hbs", `from .base import *  # noqa: F401,F403

DEBUG = True

ALLOWED_HOSTS = ["*"]

CORS_ALLOW_ALL_ORIGINS = True
`],
  ["python/framework/django/config/settings/production.py.hbs", `import os

from .base import *  # noqa: F401,F403

SECRET_KEY = os.environ.get("DJANGO_SECRET_KEY", SECRET_KEY)  # noqa: F405

ALLOWED_HOSTS = os.environ.get("ALLOWED_HOSTS", "").split(",")  # type: ignore[assignment]

CORS_ALLOW_ALL_ORIGINS = False
CORS_ALLOWED_ORIGINS = os.environ.get("CORS_ALLOWED_ORIGINS", "").split(",")  # type: ignore[assignment]
`],
  ["python/framework/django/config/urls.py.hbs", `from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("apps.core.urls")),
    path("api/users/", include("apps.users.urls")),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
`],
  ["python/framework/django/config/wsgi.py.hbs", `import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings.development")

application = get_wsgi_application()
`],
  ["python/framework/django/manage.py.hbs", `#!/usr/bin/env python

import os
import sys

def main():
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings.development")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed?",
        ) from exc
    execute_from_command_line(sys.argv)

if __name__ == "__main__":
    main()
`],
  ["python/framework/django/media/README.md", `User-uploaded media files directory.
`],
  ["python/framework/django/static/README.md", `Static assets directory — CSS, JS, images.
`],
  ["python/framework/django/templates/base.html.hbs", `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{% block title %}{{projectName}}{% endblock %}</title>
    {% block head %}{% endblock %}
</head>
<body>
    {% block content %}{% endblock %}
</body>
</html>`],
  ["python/framework/fastapi/src/api/__init__.py.hbs", ``],
  ["python/framework/fastapi/src/api/router.py.hbs", `from fastapi import APIRouter

from .v1.router import router as v1_router

api_router = APIRouter()
api_router.include_router(v1_router, prefix="/v1")`],
  ["python/framework/fastapi/src/api/v1/__init__.py.hbs", ``],
  ["python/framework/fastapi/src/api/v1/router.py.hbs", `from fastapi import APIRouter

{{#if (ne orm "none")}}
from .routes.items import router as items_router
{{/if}}

router = APIRouter()

@router.get("/health")
async def health() -> dict[str, str]:
    return {"status": "ok"}

{{#if (ne orm "none")}}
router.include_router(items_router, prefix="/items", tags=["items"])
{{/if}}`],
  ["python/framework/fastapi/src/api/v1/routes/__init__.py.hbs", ``],
  ["python/framework/fastapi/src/api/v1/routes/items.py.hbs", `from fastapi import APIRouter
{{#if (ne orm "tortoise")}}
from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession

from ....db import get_session
{{/if}}
from ....schemas.items import ItemCreate, ItemResponse
from ....services.items import create_item, list_items

router = APIRouter()

{{#if (eq orm "tortoise")}}
@router.get("/", response_model=list[ItemResponse])
async def list_items_endpoint() -> list[ItemResponse]:
    return await list_items()

@router.post("/", response_model=ItemResponse, status_code=201)
async def create_item_endpoint(payload: ItemCreate) -> ItemResponse:
    return await create_item(payload)
{{else}}
@router.get("/", response_model=list[ItemResponse])
async def list_items_endpoint(
    session: AsyncSession = Depends(get_session),
) -> list[ItemResponse]:
    return await list_items(session)

@router.post("/", response_model=ItemResponse, status_code=201)
async def create_item_endpoint(
    payload: ItemCreate,
    session: AsyncSession = Depends(get_session),
) -> ItemResponse:
    return await create_item(session, payload)
{{/if}}`],
  ["python/framework/fastapi/src/exceptions.py.hbs", `import logging

from fastapi import FastAPI, Request, status
from fastapi.responses import JSONResponse

logger = logging.getLogger(__name__)

class AppError(Exception):

    status_code = status.HTTP_400_BAD_REQUEST

class NotFoundError(AppError):
    status_code = status.HTTP_404_NOT_FOUND

def register_exception_handlers(app: FastAPI) -> None:

    @app.exception_handler(AppError)
    async def handle_app_error(request: Request, exc: AppError) -> JSONResponse:
        return JSONResponse(status_code=exc.status_code, content={"detail": str(exc)})

    @app.exception_handler(Exception)
    async def handle_unhandled(request: Request, exc: Exception) -> JSONResponse:
        logger.exception("Unhandled error: %s", exc)
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={"detail": "Internal server error"},
        )`],
  ["python/framework/fastapi/src/main.py.hbs", `from collections.abc import AsyncIterator
from contextlib import asynccontextmanager

from fastapi import FastAPI

from .config import get_settings
from .exceptions import register_exception_handlers
from .middleware import add_middleware

settings = get_settings()

{{#if (and (ne orm "none") (eq migrations "none"))}}
@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncIterator[None]:
    from .db import init_db

    await init_db()
    yield
{{else}}
@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncIterator[None]:
    yield
{{/if}}

def create_app() -> FastAPI:

    app = FastAPI(title=settings.app_name, lifespan=lifespan)

    add_middleware(app)
    register_exception_handlers(app)

    from .api.router import api_router

    app.include_router(api_router)

    return app

app = create_app()`],
  ["python/framework/fastapi/src/middleware.py.hbs", `import logging
from collections.abc import Awaitable, Callable

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import Response

from .config import get_settings

logger = logging.getLogger(__name__)

def add_middleware(app: FastAPI) -> None:

    settings = get_settings()

    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    app.add_middleware(BaseHTTPMiddleware, dispatch=request_logging)

async def request_logging(
    request: Request, call_next: Callable[[Request], Awaitable[Response]]
) -> Response:

    response = await call_next(request)
    logger.info("%s %s -> %s", request.method, request.url.path, response.status_code)
    return response`],
  ["python/framework/flask/src/api/__init__.py.hbs", ``],
  ["python/framework/flask/src/api/v1/__init__.py.hbs", ``],
  ["python/framework/flask/src/api/v1/router.py.hbs", `from flask import Blueprint, Flask, Response, jsonify

{{#if (ne orm "none")}}
from .routes.items import items_bp
{{/if}}

v1_bp = Blueprint("api_v1", __name__, url_prefix="/api/v1")

@v1_bp.get("/health")
def health() -> Response:
    return jsonify({"status": "ok"})

def register_v1_blueprints(app: Flask) -> None:

    {{#if (ne orm "none")}}
    v1_bp.register_blueprint(items_bp)
    {{/if}}
    app.register_blueprint(v1_bp)`],
  ["python/framework/flask/src/api/v1/routes/__init__.py.hbs", ``],
  ["python/framework/flask/src/api/v1/routes/items.py.hbs", `from flask import Blueprint, Response, jsonify, request

items_bp = Blueprint("items", __name__, url_prefix="/items")

@items_bp.get("/")
async def list_items_endpoint() -> Response:
    from ....services.items import list_items

    {{#if (eq orm "tortoise")}}
    items = await list_items()
    {{else}}
    from ....db import SessionLocal

    async with SessionLocal() as session:
        items = await list_items(session)
    {{/if}}
    return jsonify([item.model_dump(mode="json") for item in items])

@items_bp.post("/")
async def create_item_endpoint() -> Response:
    from ....schemas.items import ItemCreate
    from ....services.items import create_item

    data = ItemCreate(**request.get_json() or {})
    {{#if (eq orm "tortoise")}}
    item = await create_item(data)
    {{else}}
    from ....db import SessionLocal

    async with SessionLocal() as session:
        item = await create_item(session, data)
    {{/if}}
    return jsonify(item.model_dump(mode="json")), 201`],
  ["python/framework/flask/src/exceptions.py.hbs", `import logging

from flask import Flask, Response, jsonify

logger = logging.getLogger(__name__)

class AppError(Exception):

    status_code: int = 400

class NotFoundError(AppError):
    status_code: int = 404

def register_error_handlers(app: Flask) -> None:

    @app.errorhandler(AppError)
    def handle_app_error(exc: AppError) -> tuple[Response, int]:
        return jsonify({"detail": str(exc)}), exc.status_code

    @app.errorhandler(NotFoundError)
    def handle_not_found(exc: NotFoundError) -> tuple[Response, int]:
        return jsonify({"detail": str(exc)}), exc.status_code

    @app.errorhandler(Exception)
    def handle_unhandled(exc: Exception) -> tuple[Response, int]:
        logger.exception("Unhandled error: %s", exc)
        return jsonify({"detail": "Internal server error"}), 500`],
  ["python/framework/flask/src/main.py.hbs", `import asyncio

from flask import Flask

from .config import get_settings
from .exceptions import register_error_handlers
from .middleware import register_middleware

settings = get_settings()

def create_app() -> Flask:

    app = Flask(__name__)
    app.config["DEBUG"] = settings.debug

    register_middleware(app)
    register_error_handlers(app)

    {{#if (and (ne orm "none") (eq migrations "none"))}}
    from .db import init_db

    asyncio.run(init_db())
    {{/if}}

    from .api.v1.router import register_v1_blueprints

    register_v1_blueprints(app)

    return app

app = create_app()`],
  ["python/framework/flask/src/middleware.py.hbs", `from flask import Flask, request

def register_middleware(app: Flask) -> None:

    @app.before_request
    def log_request() -> None:
        app.logger.info("%s %s", request.method, request.path)`],
  ["python/framework/litestar/src/api/v1/__init__.py.hbs", ``],
  ["python/framework/litestar/src/api/v1/router.py.hbs", `from litestar import Router, get

{{#if (ne orm "none")}}
from .routes.items import create_item_endpoint, list_items_endpoint
{{/if}}

@get("/health", tags=["health"])
async def health() -> dict[str, str]:
    return {"status": "ok"}

{{#if (ne orm "none")}}
router = Router(
    path="/v1",
    route_handlers=[health, list_items_endpoint, create_item_endpoint],
)
{{else}}
router = Router(
    path="/v1",
    route_handlers=[health],
)
{{/if}}`],
  ["python/framework/litestar/src/api/v1/routes/__init__.py.hbs", ``],
  ["python/framework/litestar/src/api/v1/routes/items.py.hbs", `from litestar import get, post
{{#if (ne orm "tortoise")}}
from litestar import Provide
from sqlalchemy.ext.asyncio import AsyncSession

from ....db import get_session
{{/if}}
from ....schemas.items import ItemCreate, ItemResponse
from ....services.items import create_item, list_items

{{#if (eq orm "tortoise")}}
@get("/", path="/items", response_model=list[ItemResponse])
async def list_items_endpoint() -> list[ItemResponse]:
    return await list_items()

@post(
    "/",
    path="/items",
    response_model=ItemResponse,
    status_code=201,
)
async def create_item_endpoint(data: ItemCreate) -> ItemResponse:
    return await create_item(data)
{{else}}
@get("/", path="/items", response_model=list[ItemResponse])
async def list_items_endpoint(
    session: AsyncSession = Provide(get_session),
) -> list[ItemResponse]:
    return await list_items(session)

@post(
    "/",
    path="/items",
    response_model=ItemResponse,
    status_code=201,
)
async def create_item_endpoint(
    data: ItemCreate,
    session: AsyncSession = Provide(get_session),
) -> ItemResponse:
    return await create_item(session, data)
{{/if}}`],
  ["python/framework/litestar/src/exceptions.py.hbs", `import logging

from litestar import Request
from litestar.responses import JSONResponse
from litestar.status_codes import HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND, HTTP_500_INTERNAL_SERVER_ERROR

logger = logging.getLogger(__name__)

class AppError(Exception):

    status_code = HTTP_400_BAD_REQUEST

class NotFoundError(AppError):
    status_code = HTTP_404_NOT_FOUND

async def _handle_app_error(request: Request, exc: AppError) -> JSONResponse:
    return JSONResponse(status_code=exc.status_code, content={"detail": str(exc)})

async def _handle_unhandled(request: Request, exc: Exception) -> JSONResponse:
    logger.exception("Unhandled error: %s", exc)
    return JSONResponse(
        status_code=HTTP_500_INTERNAL_SERVER_ERROR,
        content={"detail": "Internal server error"},
    )

exception_handlers = {
    AppError: _handle_app_error,
    Exception: _handle_unhandled,
}`],
  ["python/framework/litestar/src/main.py.hbs", `from collections.abc import AsyncIterator
from contextlib import asynccontextmanager

from litestar import Litestar
from litestar.config.cors import CORSConfig

from .config import get_settings
from .exceptions import exception_handlers
from .middleware import RequestLoggingMiddleware

settings = get_settings()

{{#if (and (ne orm "none") (eq migrations "none"))}}
@asynccontextmanager
async def lifespan(app: Litestar) -> AsyncIterator[None]:
    from .db import init_db

    await init_db()
    yield
{{else}}
@asynccontextmanager
async def lifespan(app: Litestar) -> AsyncIterator[None]:
    yield
{{/if}}

def create_app() -> Litestar:

    from .api.v1.router import router as v1_router

    return Litestar(
        route_handlers=[v1_router],
        debug=settings.debug,
        cors_config=CORSConfig(allow_origins=settings.cors_origins),
        exception_handlers=exception_handlers,
        middleware=[RequestLoggingMiddleware],
        lifespan=lifespan,
    )

app = create_app()`],
  ["python/framework/litestar/src/middleware.py.hbs", `import logging
from typing import Any

from litestar.middleware import PureMiddleware
from litestar.types import ASGIApp, Receive, Scope, Send

logger = logging.getLogger(__name__)

class RequestLoggingMiddleware(PureMiddleware):

    def __init__(self, app: ASGIApp) -> None:
        self.app = app

    async def __call__(self, scope: Scope, receive: Receive, send: Send) -> None:
        if scope["type"] != "http":
            await self.app(scope, receive, send)
            return

        method = scope["method"]
        path = scope["path"]

        async def send_wrapper(message: dict[str, Any]) -> None:
            if message["type"] == "http.response.start":
                logger.info("%s %s -> %s", method, path, message.get("status", "??"))
            await send(message)

        await self.app(scope, receive, send_wrapper)`],
  ["python/framework/none/src/main.py.hbs", `def main() -> None:
    print("Hello from {{projectName}}!")


if __name__ == "__main__":
    main()`],
  ["python/migrations/alembic/alembic.ini", `[alembic]
script_location = migrations
prepend_sys_path = .
sqlalchemy.url =

[loggers]
keys = root,sqlalchemy,alembic

[handlers]
keys = console

[formatters]
keys = generic

[logger_root]
level = WARN
handlers = console
qualname =

[logger_sqlalchemy]
level = WARN
handlers =
qualname = sqlalchemy.engine

[logger_alembic]
level = INFO
handlers =
qualname = alembic

[handler_console]
class = StreamHandler
args = (sys.stderr,)
level = NOTSET
formatter = generic

[formatter_generic]
format = %(levelname)-5.5s [%(name)s] %(message)s
datefmt = %H:%M:%S
`],
  ["python/migrations/alembic/migrations/env.py.hbs", `import asyncio
from logging.config import fileConfig

from alembic import context
from sqlalchemy import pool
from sqlalchemy.engine import Connection
from sqlalchemy.ext.asyncio import async_engine_from_config

{{#if (eq orm "sqlmodel")}}
from sqlmodel import SQLModel

from src.config import get_settings
from src.models import Item  # noqa: F401
{{else if (eq orm "sqlalchemy")}}
from src.config import get_settings
from src.models import Base
{{/if}}

config = context.config

if config.config_file_name is not None:
    fileConfig(config.config_file_name)

{{#if (eq orm "sqlmodel")}}
target_metadata = SQLModel.metadata
{{else if (eq orm "sqlalchemy")}}
target_metadata = Base.metadata
{{/if}}

settings = get_settings()

def run_migrations_offline() -> None:
    context.configure(
        url=settings.database_url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
        compare_type=True,
    )

    with context.begin_transaction():
        context.run_migrations()

def do_run_migrations(connection: Connection) -> None:
    context.configure(connection=connection, target_metadata=target_metadata, compare_type=True)

    with context.begin_transaction():
        context.run_migrations()

async def run_async_migrations() -> None:
    configuration = config.get_section(config.config_ini_section, {})
    configuration["sqlalchemy.url"] = settings.database_url

    connectable = async_engine_from_config(
        configuration,
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    async with connectable.connect() as connection:
        await connection.run_sync(do_run_migrations)

    await connectable.dispose()

def run_migrations_online() -> None:
    asyncio.run(run_async_migrations())

if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
`],
  ["python/migrations/alembic/migrations/script.py.mako", `
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
\${imports if imports else ""}

revision: str = \${repr(up_revision)}
down_revision: Union[str, None] = \${repr(down_revision)}
branch_labels: Union[str, Sequence[str], None] = \${repr(branch_labels)}
depends_on: Union[str, Sequence[str], None] = \${repr(depends_on)}


def upgrade() -> None:
    \${upgrades if upgrades else "pass"}


def downgrade() -> None:
    \${downgrades if downgrades else "pass"}
`],
  ["python/migrations/alembic/migrations/versions/README.md", `# Alembic migration versions are generated with:

# uv run alembic revision --autogenerate -m "initial"

# Generated revisions are placed in this directory.
`],
  ["python/orm/sqlalchemy/src/db.py.hbs", `from collections.abc import AsyncIterator

from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine

from .config import get_settings

settings = get_settings()

engine = create_async_engine(settings.database_url, echo=settings.debug)
SessionLocal = async_sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)

async def get_session() -> AsyncIterator[AsyncSession]:

    async with SessionLocal() as session:
        yield session

{{#if (eq migrations "none")}}
async def init_db() -> None:

    from .models import Base

    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
{{/if}}`],
  ["python/orm/sqlalchemy/src/models.py.hbs", `from datetime import datetime, timezone

from sqlalchemy import Column, DateTime, String
from sqlalchemy.orm import DeclarativeBase

class Base(DeclarativeBase):
    pass

class Item(Base):
    __tablename__ = "items"

    id = Column(String, primary_key=True)
    name = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))`],
  ["python/orm/sqlalchemy/src/repositories/__init__.py.hbs", ``],
  ["python/orm/sqlalchemy/src/repositories/items.py.hbs", `from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from ..models import Item
from ..schemas.items import ItemResponse

async def create_item(session: AsyncSession, *, name: str) -> ItemResponse:
    item = Item(name=name)
    session.add(item)
    await session.commit()
    await session.refresh(item)
    return ItemResponse.model_validate(item)

async def list_items(session: AsyncSession) -> list[ItemResponse]:
    result = await session.execute(select(Item))
    items = result.scalars().all()
    return [ItemResponse.model_validate(i) for i in items]`],
  ["python/orm/sqlmodel/src/db.py.hbs", `from collections.abc import AsyncIterator

from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlmodel import SQLModel

from .config import get_settings

settings = get_settings()

engine = create_async_engine(settings.database_url, echo=settings.debug)
SessionLocal = async_sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)

async def get_session() -> AsyncIterator[AsyncSession]:

    async with SessionLocal() as session:
        yield session

{{#if (eq migrations "none")}}
async def init_db() -> None:

    from . import models  # noqa: F401

    async with engine.begin() as conn:
        await conn.run_sync(SQLModel.metadata.create_all)
{{/if}}
`],
  ["python/orm/sqlmodel/src/models.py.hbs", `from datetime import datetime, timezone
from uuid import uuid4

from sqlmodel import Field, SQLModel

def utcnow() -> datetime:
    return datetime.now(timezone.utc)

class Item(SQLModel, table=True):

    id: str = Field(default_factory=lambda: str(uuid4()), primary_key=True)
    name: str
    created_at: datetime = Field(default_factory=utcnow)
`],
  ["python/orm/sqlmodel/src/repositories/__init__.py.hbs", ``],
  ["python/orm/sqlmodel/src/repositories/items.py.hbs", `from sqlmodel import AsyncSession, select

from ..models import Item
from ..schemas.items import ItemResponse

async def create_item(session: AsyncSession, *, name: str) -> ItemResponse:
    item = Item(name=name)
    session.add(item)
    await session.commit()
    await session.refresh(item)
    return ItemResponse.model_validate(item)

async def list_items(session: AsyncSession) -> list[ItemResponse]:
    result = await session.exec(select(Item))
    items = result.all()
    return [ItemResponse.model_validate(i) for i in items]`],
  ["python/orm/tortoise/src/db.py.hbs", `from tortoise import Tortoise

from .config import get_settings

settings = get_settings()

async def init_db() -> None:

    await Tortoise.init(
        db_url=settings.database_url,
        modules={"models": ["src.models"]},
    )
    {{#if (eq migrations "none")}}
    await Tortoise.generate_schemas()
    {{/if}}`],
  ["python/orm/tortoise/src/models.py.hbs", `from tortoise import fields
from tortoise.models import Model

class Item(Model):

    id = fields.UUIDField(pk=True)
    name = fields.CharField(max_length=255)
    created_at = fields.DatetimeField(auto_now_add=True)

    class Meta:
        table = "items"`],
  ["python/orm/tortoise/src/repositories/__init__.py.hbs", ``],
  ["python/orm/tortoise/src/repositories/items.py.hbs", `from ..models import Item
from ..schemas.items import ItemResponse

async def create_item(*, name: str) -> ItemResponse:
    item = await Item.create(name=name)
    return ItemResponse.model_validate(item)

async def list_items() -> list[ItemResponse]:
    items = await Item.all()
    return [ItemResponse.model_validate(item) for item in items]`],
  ["rust/addons/docker/_dockerignore", `target/
.env
.env.local
.git
.gitignore
*.md
Dockerfile*`],
  ["rust/addons/docker/docker-compose.yml.hbs", `services:
{{#if (eq database "postgres")}}
  db:
    image: postgres:16
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: {{project_slug}}
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data
{{else if (eq database "mysql")}}
  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: {{project_slug}}
    ports:
      - "3306:3306"
    volumes:
      - mysqldata:/var/lib/mysql
{{/if}}

volumes:
{{#if (eq database "postgres")}}
  pgdata:
{{else if (eq database "mysql")}}
  mysqldata:
{{/if}}`],
  ["rust/addons/docker/Dockerfile.hbs", `# syntax=docker/dockerfile:1

FROM rust:1.80-slim AS builder
WORKDIR /app

COPY Cargo.toml Cargo.lock* ./
COPY src ./src
RUN cargo build --release

COPY . .
RUN cargo build --release

FROM debian:bookworm-slim
WORKDIR /app

COPY --from=builder /app/target/release/{{project_slug}} /usr/local/bin/{{project_slug}}

EXPOSE 8000
ENTRYPOINT ["/usr/local/bin/{{project_slug}}"]`],
  ["rust/addons/github-actions/.github/workflows/ci.yml.hbs", `name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: dtolnay/rust-toolchain@stable
        with:
          components: [rustfmt, clippy]
      - name: Build
        run: cargo build --all-targets
      - name: Test
        run: cargo test
      {{#if (includes addons "clippy")}}
      - name: Lint
        run: cargo clippy --all-targets --all-features -- -D warnings
      {{/if}}
      - name: Format check
        run: cargo fmt -- --check`],
  ["rust/base/_gitignore", `/target/
**/*.rs.bk
*.pdb
.env
.env.local
.idea
.vscode
*.swp
.DS_Store
Thumbs.db`],
  ["rust/base/.gitkeep", ``],
  ["rust/base/Cargo.toml.hbs", `[package]
name = "{{project_slug}}"
version = "0.1.0"
edition = "2021"

[dependencies]
serde = { version = "1", features = ["derive"] }
serde_json = "1"
dotenvy = "0.15"

{{#if (eq framework "axum")}}
axum = "0.8"
tokio = { version = "1", features = ["full"] }
{{else if (eq framework "actix-web")}}
actix-web = "4"
{{else if (eq framework "rocket")}}
rocket = "0.5"
{{else if (eq framework "warp")}}
warp = "0.3"
tokio = { version = "1", features = ["full"] }
{{else if (eq framework "salvo")}}
salvo = "0.75"
tokio = { version = "1", features = ["full"] }
{{else if (eq framework "loco")}}
loco-rs = "0.4"
{{/if}}

{{#if (eq orm "seaorm")}}
{{#if (eq database "sqlite")}}
sea-orm = { version = "1", features = ["sqlx-sqlite", "runtime-tokio-rustls"] }
{{else if (eq database "postgres")}}
sea-orm = { version = "1", features = ["sqlx-postgres", "runtime-tokio-rustls"] }
{{else if (eq database "mysql")}}
sea-orm = { version = "1", features = ["sqlx-mysql", "runtime-tokio-rustls"] }
{{/if}}
{{else if (eq orm "diesel")}}
{{#if (eq database "sqlite")}}
diesel = { version = "2", features = ["sqlite"] }
libsqlite3-sys = { version = "0.32", features = ["bundled"] }
{{else if (eq database "postgres")}}
diesel = { version = "2", features = ["postgres"] }
{{else if (eq database "mysql")}}
diesel = { version = "2", features = ["mysql"] }
{{/if}}
{{else if (eq orm "sqlx-rust")}}
{{#if (eq database "sqlite")}}
sqlx = { version = "0.8", features = ["runtime-tokio", "sqlite"] }
{{else if (eq database "postgres")}}
sqlx = { version = "0.8", features = ["runtime-tokio", "postgres"] }
{{else if (eq database "mysql")}}
sqlx = { version = "0.8", features = ["runtime-tokio", "mysql"] }
{{/if}}
{{/if}}`],
  ["rust/base/env.example.hbs", `APP_NAME={{projectName}}
PORT=8000

{{#if (ne database "none")}}
# SQLite:  ./{{project_slug}}.db
# Postgres: postgres://postgres:postgres@localhost:5432/{{project_slug}}
# MySQL:   mysql://root:password@localhost:3306/{{project_slug}}
DATABASE_URL={{#if (eq database "sqlite")}}{{project_slug}}.db{{else if (eq database "postgres")}}postgres://postgres:postgres@localhost:5432/{{project_slug}}{{else if (eq database "mysql")}}mysql://root:password@localhost:3306/{{project_slug}}{{/if}}
{{/if}}`],
  ["rust/core/src/config.rs.hbs", `pub struct Config {
    pub app_name: String,
    pub port: u16,
}

impl Config {
    pub fn from_env() -> Self {
        dotenvy::dotenv().ok();
        let app_name = std::env::var("APP_NAME").unwrap_or_else(|_| "{{projectName}}".to_string());
        let port: u16 = std::env::var("PORT")
            .unwrap_or_else(|_| "8000".to_string())
            .parse()
            .expect("PORT must be a valid u16");
        Self { app_name, port }
    }
}`],
  ["rust/framework/actix-web/src/main.rs.hbs", `use actix_web::{get, web, App, HttpServer, HttpResponse, Responder};

mod config;
{{#if (ne orm "none")}}
mod db;
{{/if}}
#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let app_config = config::Config::from_env();

{{#if (ne orm "none")}}
    {{#if (eq orm "diesel")}}
    if let Err(err) = db::connect() {
    {{else}}
    if let Err(err) = db::connect().await {
    {{/if}}
        eprintln!("database not ready: {err}");
    }
{{/if}}
    let addr = format!("0.0.0.0:{}", app_config.port);

    println!("{} listening on {}", app_config.app_name, addr);

    HttpServer::new(|| App::new().route("/health", web::get().to(health)))
        .bind(addr)?
        .run()
        .await
}

async fn health() -> impl Responder {
    HttpResponse::Ok()
        .content_type("application/json")
        .body("{\\"status\\":\\"ok\\"}")
}

#[cfg(test)]
mod tests {
    use super::*;

    #[actix_web::test]
    async fn health_returns_status_ok() {
        let app = App::new().route("/health", web::get().to(health));
        let request = actix_web::test::TestRequest::get()
            .uri("/health")
            .to_request();
        let response = actix_web::test::call_service(&app, request).await;
        assert!(response.status().is_success());
    }
}`],
  ["rust/framework/axum/src/main.rs.hbs", `use axum::{routing::get, Router};

mod config;
{{#if (ne orm "none")}}
mod db;
{{/if}}
#[tokio::main]
async fn main() {
    let app_config = config::Config::from_env();

{{#if (ne orm "none")}}
    {{#if (eq orm "diesel")}}
    if let Err(err) = db::connect() {
    {{else}}
    if let Err(err) = db::connect().await {
    {{/if}}
        eprintln!("database not ready: {err}");
    }
{{/if}}
    let router = Router::new().route("/health", get(health));

    let addr = format!("0.0.0.0:{}", app_config.port);

    println!("{} listening on {}", app_config.app_name, addr);

    let listener = tokio::net::TcpListener::bind(&addr)
        .await
        .expect("failed to bind");

    axum::serve(listener, router).await.expect("server error");
}

async fn health() -> &'static str {
    "{\\"status\\":\\"ok\\"}"
}

#[cfg(test)]
mod tests {
    use super::*;

    #[tokio::test]
    async fn health_returns_status_ok() {
        assert_eq!(health().await, "{\\"status\\":\\"ok\\"}");
    }
}`],
  ["rust/framework/loco/src/main.rs.hbs", `use loco_rs::prelude::*;

mod config;
{{#if (ne orm "none")}}
mod db;
{{/if}}
#[tokio::main]
async fn main() -> Result<()> {
    let app_config = config::Config::from_env();

{{#if (ne orm "none")}}
    {{#if (eq orm "diesel")}}
    if let Err(err) = db::connect() {
    {{else}}
    if let Err(err) = db::connect().await {
    {{/if}}
        eprintln!("database not ready: {err}");
    }
{{/if}}
    println!("{} initialized", app_config.app_name);

    Ok(())
}`],
  ["rust/framework/none/src/main.rs.hbs", `fn main() {
    println!("Hello from {{projectName}}!");
}`],
  ["rust/framework/rocket/src/main.rs.hbs", `#[macro_use]
extern crate rocket;

mod config;
{{#if (ne orm "none")}}
mod db;
{{/if}}
#[get("/health")]
fn health() -> &'static str {
    "{\\"status\\":\\"ok\\"}"
}

#[rocket::main]
async fn main() -> Result<(), rocket::Error> {
    let app_config = config::Config::from_env();

{{#if (ne orm "none")}}
    if let Err(err) = db::connect().await {
        eprintln!("database not ready: {err}");
    }
{{/if}}
    let config = rocket::Config {
        port: app_config.port,
        ..Default::default()
    };

    println!(
        "{} listening on 0.0.0.0:{}",
        app_config.app_name, config.port,
    );

    let _ = rocket::custom(config).mount("/", routes![health]).launch().await?;
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn health_returns_status_ok() {
        assert_eq!(health(), "{\\"status\\":\\"ok\\"}");
    }
}`],
  ["rust/framework/salvo/src/main.rs.hbs", `use salvo::prelude::*;

mod config;
{{#if (ne orm "none")}}
mod db;
{{/if}}
#[handler]
async fn health() -> &'static str {
    "{\\"status\\":\\"ok\\"}"
}

#[tokio::main]
async fn main() {
    let app_config = config::Config::from_env();

{{#if (ne orm "none")}}
    {{#if (eq orm "diesel")}}
    if let Err(err) = db::connect() {
    {{else}}
    if let Err(err) = db::connect().await {
    {{/if}}
        eprintln!("database not ready: {err}");
    }
{{/if}}
    let router = Router::new().path("health").get(health);

    let addr = format!("0.0.0.0:{}", app_config.port);

    println!("{} listening on {}", app_config.app_name, addr);

    let listener = TcpListener::bind(&addr).await.expect("failed to bind");
    Server::new(listener).serve(router).await;
}`],
  ["rust/framework/warp/src/main.rs.hbs", `use warp::{Filter, Rejection, Reply};

mod config;
{{#if (ne orm "none")}}
mod db;
{{/if}}
fn routes() -> impl Filter<Extract = impl Reply, Error = Rejection> {
    let health = warp::path("health").map(|| "{\\"status\\":\\"ok\\"}");
    health.with(warp::cors().allow_any_origin())
}

#[tokio::main]
async fn main() {
    let app_config = config::Config::from_env();

{{#if (ne orm "none")}}
    {{#if (eq orm "diesel")}}
    if let Err(err) = db::connect() {
    {{else}}
    if let Err(err) = db::connect().await {
    {{/if}}
        eprintln!("database not ready: {err}");
    }
{{/if}}

    println!(
        "{} listening on 0.0.0.0:{}",
        app_config.app_name, app_config.port,
    );

    warp::serve(routes()).run(([0, 0, 0, 0], app_config.port)).await;
}

#[cfg(test)]
mod tests {
    use super::*;

    #[tokio::test]
    async fn health_returns_status_ok() {
        let response = warp::test::request().path("/health").reply(routes()).await;
        assert_eq!(response.status(), warp::http::StatusCode::OK);
    }
}`],
  ["rust/orm/diesel/src/db.rs.hbs", `use diesel::{Connection, ConnectionError};

{{#if (eq database "sqlite")}}
use diesel::SqliteConnection;

pub type DbConnection = SqliteConnection;
{{else if (eq database "postgres")}}
use diesel::PgConnection;

pub type DbConnection = PgConnection;
{{else if (eq database "mysql")}}
use diesel::MysqlConnection;

pub type DbConnection = MysqlConnection;
{{/if}}

pub fn connect() -> Result<DbConnection, ConnectionError> {
    <DbConnection as Connection>::establish(&database_url())
}

fn database_url() -> String {
    std::env::var("DATABASE_URL").unwrap_or_else(|_| String::from(database_default()))
}

{{#if (eq database "sqlite")}}
fn database_default() -> &'static str {
    "{{project_slug}}.db"
}
{{else if (eq database "postgres")}}
fn database_default() -> &'static str {
    "postgres://postgres:postgres@localhost:5432/{{project_slug}}"
}
{{else if (eq database "mysql")}}
fn database_default() -> &'static str {
    "mysql://root:password@localhost:3306/{{project_slug}}"
}
{{/if}}`],
  ["rust/orm/seaorm/src/db.rs.hbs", `use sea_orm::{Database, DatabaseConnection, DbErr};

pub async fn connect() -> Result<DatabaseConnection, DbErr> {
    Database::connect(database_url()).await
}

fn database_url() -> String {
    std::env::var("DATABASE_URL").unwrap_or_else(|_| database_default())
}

{{#if (eq database "sqlite")}}
fn database_default() -> String {
    "{{project_slug}}.db".to_string()
}
{{else if (eq database "postgres")}}
fn database_default() -> String {
    "postgres://postgres:postgres@localhost:5432/{{project_slug}}".to_string()
}
{{else if (eq database "mysql")}}
fn database_default() -> String {
    "mysql://root:password@localhost:3306/{{project_slug}}".to_string()
}
{{/if}}`],
  ["rust/orm/sqlx-rust/src/db.rs.hbs", `use sqlx::Error;

{{#if (eq database "sqlite")}}
use sqlx::SqlitePool;

pub type OrmPool = SqlitePool;

pub async fn connect() -> Result<OrmPool, Error> {
    SqlitePool::connect(&database_url()).await
}
{{else if (eq database "postgres")}}
use sqlx::PgPool;

pub type OrmPool = PgPool;

pub async fn connect() -> Result<OrmPool, Error> {
    PgPool::connect(&database_url()).await
}
{{else if (eq database "mysql")}}
use sqlx::MySqlPool;

pub type OrmPool = MySqlPool;

pub async fn connect() -> Result<OrmPool, Error> {
    MySqlPool::connect(&database_url()).await
}
{{/if}}

fn database_url() -> String {
    std::env::var("DATABASE_URL").unwrap_or_else(|_| String::from(database_default()))
}

{{#if (eq database "sqlite")}}
fn database_default() -> &'static str {
    "{{project_slug}}.db"
}
{{else if (eq database "postgres")}}
fn database_default() -> &'static str {
    "postgres://postgres:postgres@localhost:5432/{{project_slug}}"
}
{{else if (eq database "mysql")}}
fn database_default() -> &'static str {
    "mysql://root:password@localhost:3306/{{project_slug}}"
}
{{/if}}`]
]);

export const TEMPLATE_COUNT = 145;
