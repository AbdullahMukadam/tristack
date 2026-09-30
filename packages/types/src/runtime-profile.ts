import type { ProjectConfig } from "./types";

export type Command = {
  bin: string;
  args: string[];
  label: string;
  env?: Record<string, string>;
};

export type Probe = {
  method: "GET" | "POST";
  path: string;
  expectStatus: number;
  body?: unknown;
};

export type RunOptions = {
  port?: number;
  dev?: boolean;
};

export type RuntimeProfile = {
  kind: "server" | "oneshot";
  install: Command;
  prepare: Command[];
  run: (opts?: RunOptions) => Command;
  probes: Probe[];
  expectStdout?: string;
};

function goMigrateTags(database: ProjectConfig["database"]): string {
  switch (database) {
    case "postgres":
      return "postgres";
    case "mysql":
      return "mysql";
    default:
      return "sqlite3";
  }
}

type PythonPrefix = {
  bin: string;
  args: string[];
  runLabel: string;
};

function pythonPrefix(packageManager: ProjectConfig["packageManager"]): PythonPrefix {
  switch (packageManager) {
    case "uv":
      return { bin: "uv", args: ["run"], runLabel: "uv run" };
    case "poetry":
      return { bin: "poetry", args: ["run"], runLabel: "poetry run" };
    default:
      return { bin: "", args: [], runLabel: "" };
  }
}

function pythonCommand(prefix: PythonPrefix, toolArgs: string[], displayArgs?: string[]): Command {
  const bin = prefix.bin || toolArgs[0];
  const args = [...prefix.args, ...(prefix.bin ? toolArgs : toolArgs.slice(1))];
  const label = [prefix.runLabel, ...(displayArgs ?? toolArgs)].filter(Boolean).join(" ");
  return { bin, args, label };
}

function installFor(config: ProjectConfig): Command {
  if (config.language === "go") return { bin: "go", args: ["mod", "tidy"], label: "go mod tidy" };
  if (config.language === "rust") return { bin: "cargo", args: ["build"], label: "cargo build" };
  switch (config.packageManager) {
    case "uv":
      return { bin: "uv", args: ["sync"], label: "uv sync" };
    case "poetry":
      return { bin: "poetry", args: ["install"], label: "poetry install" };
    default:
      return { bin: "pip", args: ["install", "-e", "."], label: "pip install -e ." };
  }
}

function pythonPrepare(config: ProjectConfig, prefix: PythonPrefix): Command[] {
  if (config.database === "none") return [];
  if (config.framework === "django") {
    return [pythonCommand(prefix, ["python", "manage.py", "migrate"])];
  }
  if (config.migrations === "alembic") {
    return [
      pythonCommand(
        prefix,
        ["alembic", "revision", "--autogenerate", "-m", "initial"],
        ["alembic", "revision", "--autogenerate", "-m", '"initial"'],
      ),
      pythonCommand(prefix, ["alembic", "upgrade", "head"]),
    ];
  }
  return [];
}

function pythonRunCommand(
  config: ProjectConfig,
  prefix: PythonPrefix,
): (opts?: RunOptions) => Command {
  return (opts) => {
    const dev = opts?.dev ?? true;
    const port = opts?.port;
    switch (config.framework) {
      case "django": {
        const args = ["python", "manage.py", "runserver"];
        if (port !== undefined) args.push(`127.0.0.1:${port}`);
        return pythonCommand(prefix, args);
      }
      case "flask": {
        const args = ["flask", "--app", "src.main", "run"];
        if (dev && port === undefined) args.push("--debug");
        if (port !== undefined) args.push("--port", String(port));
        return pythonCommand(prefix, args);
      }
      case "litestar": {
        const args = ["litestar", "run"];
        if (dev && port === undefined) args.push("--reload");
        if (port !== undefined) args.push("--port", String(port));
        return pythonCommand(prefix, args);
      }
      default: {
        const args = ["uvicorn", "src.main:app"];
        if (dev && port === undefined) args.push("--reload");
        if (port !== undefined) args.push("--port", String(port));
        return pythonCommand(prefix, args);
      }
    }
  };
}

function pythonProbes(config: ProjectConfig): Probe[] {
  if (config.framework === "django") {
    const probes: Probe[] = [{ method: "GET", path: "/api/health/", expectStatus: 200 }];
    if (config.frontend === "htmx") probes.push({ method: "GET", path: "/", expectStatus: 200 });
    return probes;
  }

  const probes: Probe[] = [{ method: "GET", path: "/health", expectStatus: 200 }];
  if (config.orm !== "none") {
    const items = config.framework === "litestar" ? "/api/v1/items" : "/api/v1/items/";
    probes.push(
      { method: "GET", path: items, expectStatus: 200 },
      { method: "POST", path: items, expectStatus: 201, body: { name: "boot-check" } },
    );
  }
  if (config.frontend === "htmx")
    probes.push({ method: "GET", path: "/web/items", expectStatus: 200 });
  return probes;
}

function goRunCommand(config: ProjectConfig): (opts?: RunOptions) => Command {
  return (opts) => {
    const port = opts?.port;
    const dev = opts?.dev ?? true;
    if (dev && port === undefined && config.addons.includes("air")) {
      return { bin: "air", args: [], label: "air" };
    }
    const env = port !== undefined ? { PORT: String(port) } : undefined;
    return { bin: "go", args: ["run", "./cmd/api"], label: "go run ./cmd/api", env };
  };
}

function goPrepare(config: ProjectConfig): Command[] {
  const prepare: Command[] = [];
  if (config.orm === "sqlc")
    prepare.push({ bin: "sqlc", args: ["generate"], label: "sqlc generate" });
  if (config.migrations === "goose") {
    prepare.push({
      bin: "go",
      args: ["run", "github.com/pressly/goose/v3/cmd/goose@latest", "-dir", "migrations", "up"],
      label: "go run github.com/pressly/goose/v3/cmd/goose@latest -dir migrations up",
    });
  } else if (config.migrations === "golang-migrate") {
    prepare.push({
      bin: "go",
      args: [
        "run",
        "-tags",
        `'${goMigrateTags(config.database)}'`,
        "github.com/golang-migrate/migrate/v4/cmd/migrate@latest",
        "-path",
        "db/migrations",
        "-database",
        "$DATABASE_URL",
        "up",
      ],
      label: `go run -tags '${goMigrateTags(config.database)}' github.com/golang-migrate/migrate/v4/cmd/migrate@latest -path db/migrations -database "$DATABASE_URL" up`,
    });
  }
  return prepare;
}

function goProbes(config: ProjectConfig): Probe[] {
  const probes: Probe[] = [{ method: "GET", path: "/health", expectStatus: 200 }];
  if (config.orm !== "none") {
    probes.push(
      { method: "GET", path: "/items", expectStatus: 200 },
      { method: "POST", path: "/items", expectStatus: 201, body: { name: "boot-check" } },
    );
  }
  if (config.frontend === "htmx")
    probes.push({ method: "GET", path: "/web/items", expectStatus: 200 });
  return probes;
}

function rustRunCommand(config: ProjectConfig): (opts?: RunOptions) => Command {
  return (opts) => {
    const port = opts?.port;
    const dev = opts?.dev ?? true;
    if (dev && port === undefined && config.addons.includes("cargo-watch")) {
      return { bin: "cargo", args: ["watch", "-x", "run"], label: "cargo watch -x run" };
    }
    const env = port !== undefined ? { PORT: String(port) } : undefined;
    return { bin: "cargo", args: ["run"], label: "cargo run", env };
  };
}

function rustProbes(config: ProjectConfig): Probe[] {
  const probes: Probe[] = [{ method: "GET", path: "/health", expectStatus: 200 }];
  if (config.frontend === "htmx")
    probes.push({ method: "GET", path: "/web/now", expectStatus: 200 });
  return probes;
}

export function getRuntimeProfile(config: ProjectConfig): RuntimeProfile {
  const install = installFor(config);

  if (config.language === "go") {
    if (config.framework === "none") {
      return {
        kind: "oneshot",
        install,
        prepare: [],
        run: () => ({ bin: "go", args: ["run", "./cmd/api"], label: "go run ./cmd/api" }),
        probes: [],
        expectStdout: `Hello from ${config.projectName}!`,
      };
    }
    return {
      kind: "server",
      install,
      prepare: goPrepare(config),
      run: goRunCommand(config),
      probes: goProbes(config),
    };
  }

  if (config.language === "rust") {
    if (config.framework === "none") {
      return {
        kind: "oneshot",
        install,
        prepare: [],
        run: () => ({ bin: "cargo", args: ["run"], label: "cargo run" }),
        probes: [],
        expectStdout: `Hello from ${config.projectName}!`,
      };
    }
    return {
      kind: "server",
      install,
      prepare: [],
      run: rustRunCommand(config),
      probes: rustProbes(config),
    };
  }

  const prefix = pythonPrefix(config.packageManager);
  if (config.framework === "none") {
    return {
      kind: "oneshot",
      install,
      prepare: [],
      run: () => pythonCommand(prefix, ["python", "-m", "src.main"]),
      probes: [],
      expectStdout: `Hello from ${config.projectName}!`,
    };
  }

  return {
    kind: "server",
    install,
    prepare: pythonPrepare(config, prefix),
    run: pythonRunCommand(config, prefix),
    probes: pythonProbes(config),
  };
}
