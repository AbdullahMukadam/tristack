# tristack

Scaffold backend projects in **Python**, **Go**, and **Rust**.

`tristack` is an interactive CLI that scaffolds a production-ready backend
stack — framework, ORM, database migrations, and tooling — tailored to the
language you choose.

## Installation

```bash
pip install tristack
# or
uvx tristack
```

> Windows/macOS/Linux wheels include the platform binary, so no extra setup
> is required.

## Usage

```bash
tristack my-api          # interactive prompts
tristack my-api --yes    # use default configuration
```

## Support

- Operations: interactive prompts, `--yes`, `--yolo`, `--dry-run`, `--verbose`
- Languages: Python (FastAPI, Litestar, Django, Flask), Go (Gin, Fiber, Echo, Chi, stdlib), Rust (Axum, Actix-Web, Rocket, Warp, Salvo, Loco)
- ORMs/migrations: Python (SQLModel, SQLAlchemy, Tortoise, Alembic), Go (GORM, SQLC, SQLx, Goose), Rust (SeaORM, Diesel, SQLx)

## License

MIT
