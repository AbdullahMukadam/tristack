import { beforeAll, describe, expect, it } from "bun:test";
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { writeTree } from "@tristack/template-generator/fs-writer";
import type { Command, ProjectConfig } from "@tristack/types";
import { getRuntimeProfile } from "@tristack/types";
import { execa } from "execa";

import { createVirtual } from "../src/index";

const BOOT_ROOT = join(import.meta.dir, "..", ".smoke", "boot");
const FAILURE_ROOT = join(tmpdir(), "tristack-boot-failures");

const CASE_TIMEOUT_MS = 240_000;
const RUST_CASE_TIMEOUT_MS = 900_000;
const READY_TIMEOUT_MS = 60_000;
const BASE_PORT = 42_000;

type BootCase = {
  id: string;
  requiresTool?: string;
  timeoutMs?: number;
  requiresPython?: string;
  config: Pick<
    ProjectConfig,
    "language" | "framework" | "frontend" | "orm" | "migrations" | "database" | "packageManager"
  >;
};

const BOOT_CASES: BootCase[] = [
  {
    id: "fastapi-sqlmodel-alembic",
    config: {
      language: "python",
      framework: "fastapi",
      frontend: "none",
      orm: "sqlmodel",
      migrations: "alembic",
      database: "sqlite",
      packageManager: "uv",
    },
  },
  {
    id: "fastapi-sqlalchemy-alembic",
    config: {
      language: "python",
      framework: "fastapi",
      frontend: "none",
      orm: "sqlalchemy",
      migrations: "alembic",
      database: "sqlite",
      packageManager: "uv",
    },
  },
  {
    id: "fastapi-tortoise-none",
    config: {
      language: "python",
      framework: "fastapi",
      frontend: "none",
      orm: "tortoise",
      migrations: "none",
      database: "sqlite",
      packageManager: "uv",
    },
  },
  {
    id: "fastapi-sqlmodel-htmx",
    config: {
      language: "python",
      framework: "fastapi",
      frontend: "htmx",
      orm: "sqlmodel",
      migrations: "alembic",
      database: "sqlite",
      packageManager: "uv",
    },
  },
  {
    id: "litestar-sqlmodel-htmx",
    config: {
      language: "python",
      framework: "litestar",
      frontend: "htmx",
      orm: "sqlmodel",
      migrations: "none",
      database: "sqlite",
      packageManager: "uv",
    },
  },
  {
    id: "litestar-tortoise-htmx",
    config: {
      language: "python",
      framework: "litestar",
      frontend: "htmx",
      orm: "tortoise",
      migrations: "none",
      database: "sqlite",
      packageManager: "uv",
    },
  },
  {
    id: "litestar-sqlmodel-alembic",
    config: {
      language: "python",
      framework: "litestar",
      frontend: "none",
      orm: "sqlmodel",
      migrations: "alembic",
      database: "sqlite",
      packageManager: "uv",
    },
  },
  {
    id: "litestar-tortoise-none",
    config: {
      language: "python",
      framework: "litestar",
      frontend: "none",
      orm: "tortoise",
      migrations: "none",
      database: "sqlite",
      packageManager: "uv",
    },
  },
  {
    id: "flask-sqlalchemy-alembic",
    config: {
      language: "python",
      framework: "flask",
      frontend: "none",
      orm: "sqlalchemy",
      migrations: "alembic",
      database: "sqlite",
      packageManager: "uv",
    },
  },
  {
    id: "django-sqlite",
    config: {
      language: "python",
      framework: "django",
      frontend: "none",
      orm: "none",
      migrations: "none",
      database: "sqlite",
      packageManager: "uv",
    },
  },
  {
    id: "bare-python",
    config: {
      language: "python",
      framework: "none",
      frontend: "none",
      orm: "none",
      migrations: "none",
      database: "none",
      packageManager: "uv",
    },
  },
  {
    id: "fastapi-sqlmodel-alembic-pip",
    requiresPython: "3.12",
    config: {
      language: "python",
      framework: "fastapi",
      frontend: "none",
      orm: "sqlmodel",
      migrations: "alembic",
      database: "sqlite",
      packageManager: "pip",
    },
  },
  {
    id: "flask-sqlalchemy-alembic-poetry",
    requiresTool: "poetry",
    config: {
      language: "python",
      framework: "flask",
      frontend: "none",
      orm: "sqlalchemy",
      migrations: "alembic",
      database: "sqlite",
      packageManager: "poetry",
    },
  },
  {
    id: "gin-gorm-goose",
    requiresTool: "go",
    config: {
      language: "go",
      framework: "gin",
      frontend: "none",
      orm: "gorm",
      migrations: "goose",
      database: "sqlite",
      packageManager: "go",
    },
  },
  {
    id: "gin-gorm-none",
    requiresTool: "go",
    config: {
      language: "go",
      framework: "gin",
      frontend: "none",
      orm: "gorm",
      migrations: "none",
      database: "sqlite",
      packageManager: "go",
    },
  },
  {
    id: "gin-sqlc-goose",
    requiresTool: "go",
    config: {
      language: "go",
      framework: "gin",
      frontend: "none",
      orm: "sqlc",
      migrations: "goose",
      database: "sqlite",
      packageManager: "go",
    },
  },
  {
    id: "gin-sqlx-none",
    requiresTool: "go",
    config: {
      language: "go",
      framework: "gin",
      frontend: "none",
      orm: "sqlx",
      migrations: "none",
      database: "sqlite",
      packageManager: "go",
    },
  },
  {
    id: "chi-sqlx-none",
    requiresTool: "go",
    config: {
      language: "go",
      framework: "chi",
      frontend: "none",
      orm: "sqlx",
      migrations: "none",
      database: "sqlite",
      packageManager: "go",
    },
  },
  {
    id: "stdlib-sqlx-htmx",
    requiresTool: "go",
    config: {
      language: "go",
      framework: "stdlib",
      frontend: "htmx",
      orm: "sqlx",
      migrations: "none",
      database: "sqlite",
      packageManager: "go",
    },
  },
  {
    id: "gin-gorm-htmx",
    requiresTool: "go",
    config: {
      language: "go",
      framework: "gin",
      frontend: "htmx",
      orm: "gorm",
      migrations: "none",
      database: "sqlite",
      packageManager: "go",
    },
  },
  {
    id: "chi-sqlc-htmx",
    requiresTool: "go",
    config: {
      language: "go",
      framework: "chi",
      frontend: "htmx",
      orm: "sqlc",
      migrations: "goose",
      database: "sqlite",
      packageManager: "go",
    },
  },
  {
    id: "echo-gorm-htmx",
    requiresTool: "go",
    config: {
      language: "go",
      framework: "echo",
      frontend: "htmx",
      orm: "gorm",
      migrations: "goose",
      database: "sqlite",
      packageManager: "go",
    },
  },
  {
    id: "fiber-sqlx-htmx",
    requiresTool: "go",
    config: {
      language: "go",
      framework: "fiber",
      frontend: "htmx",
      orm: "sqlx",
      migrations: "none",
      database: "sqlite",
      packageManager: "go",
    },
  },
  {
    id: "gin-sqlx-migrate",
    requiresTool: "go",
    config: {
      language: "go",
      framework: "gin",
      frontend: "none",
      orm: "sqlx",
      migrations: "golang-migrate",
      database: "sqlite",
      packageManager: "go",
    },
  },
  {
    id: "chi-sqlc-none",
    requiresTool: "go",
    config: {
      language: "go",
      framework: "chi",
      frontend: "none",
      orm: "sqlc",
      migrations: "none",
      database: "sqlite",
      packageManager: "go",
    },
  },
  {
    id: "bare-go",
    requiresTool: "go",
    config: {
      language: "go",
      framework: "none",
      frontend: "none",
      orm: "none",
      migrations: "none",
      database: "none",
      packageManager: "go",
    },
  },
  {
    id: "rust-axum-sqlx-htmx",
    requiresTool: "cargo",
    timeoutMs: RUST_CASE_TIMEOUT_MS,
    config: {
      language: "rust",
      framework: "axum",
      frontend: "htmx",
      orm: "sqlx-rust",
      migrations: "none",
      database: "sqlite",
      packageManager: "cargo",
    },
  },
  {
    id: "rust-actix-diesel",
    requiresTool: "cargo",
    timeoutMs: RUST_CASE_TIMEOUT_MS,
    config: {
      language: "rust",
      framework: "actix-web",
      frontend: "none",
      orm: "diesel",
      migrations: "none",
      database: "sqlite",
      packageManager: "cargo",
    },
  },
  {
    id: "rust-rocket-seaorm-htmx",
    requiresTool: "cargo",
    timeoutMs: RUST_CASE_TIMEOUT_MS,
    config: {
      language: "rust",
      framework: "rocket",
      frontend: "htmx",
      orm: "seaorm",
      migrations: "none",
      database: "sqlite",
      packageManager: "cargo",
    },
  },
  {
    id: "rust-warp-sqlx",
    requiresTool: "cargo",
    timeoutMs: RUST_CASE_TIMEOUT_MS,
    config: {
      language: "rust",
      framework: "warp",
      frontend: "none",
      orm: "sqlx-rust",
      migrations: "none",
      database: "sqlite",
      packageManager: "cargo",
    },
  },
  {
    id: "rust-salvo-diesel-htmx",
    requiresTool: "cargo",
    timeoutMs: RUST_CASE_TIMEOUT_MS,
    config: {
      language: "rust",
      framework: "salvo",
      frontend: "htmx",
      orm: "diesel",
      migrations: "none",
      database: "sqlite",
      packageManager: "cargo",
    },
  },
  {
    id: "bare-rust",
    requiresTool: "cargo",
    timeoutMs: RUST_CASE_TIMEOUT_MS,
    config: {
      language: "rust",
      framework: "none",
      frontend: "none",
      orm: "none",
      migrations: "none",
      database: "none",
      packageManager: "cargo",
    },
  },
];

function hostPythonVersion(): string | undefined {
  if (Bun.which("python") === null) return undefined;
  const result = Bun.spawnSync(["python", "--version"]);
  if (!result.success) return undefined;
  const output = `${result.stdout.toString()}${result.stderr.toString()}`.trim();
  const match = /Python (\d+)\.(\d+)/.exec(output);
  if (!match) return undefined;
  return `${match[1]}.${match[2]}`;
}

function skipReason(bootCase: BootCase): string | undefined {
  if (bootCase.requiresTool !== undefined && Bun.which(bootCase.requiresTool) === null) {
    return `${bootCase.requiresTool} not installed`;
  }
  if (bootCase.requiresPython !== undefined) {
    const version = hostPythonVersion();
    if (version === undefined) return "python not available";
    const compare = (a: string, b: string) => {
      const [aMajor = 0, aMinor = 0] = a.split(".").map(Number);
      const [bMajor = 0, bMinor = 0] = b.split(".").map(Number);
      return aMajor === bMajor ? aMinor - bMinor : aMajor - bMajor;
    };
    if (compare(version, bootCase.requiresPython) < 0) {
      return `python ${version} < ${bootCase.requiresPython}`;
    }
  }
  return undefined;
}

async function cmdOutput(result: { stdout: string; stderr: string }, label: string) {
  return `${label}\n${result.stdout}${result.stderr}`;
}

async function runCommand(cmd: Command, cwd: string): Promise<{ ok: boolean; log: string }> {
  const subprocess = execa(cmd.bin, cmd.args, {
    cwd,
    env: { ...process.env, ...cmd.env },
    reject: false,
  });
  const result = await subprocess;
  const log = await cmdOutput(result, `$ ${[cmd.bin, ...cmd.args].join(" ")}`);
  return { ok: result.exitCode === 0, log };
}

async function killProcessTree(pid: number | undefined, detached: boolean) {
  if (pid === undefined) return;
  if (process.platform === "win32") {
    await execa("taskkill", ["/PID", String(pid), "/T", "/F"], { reject: false });
    return;
  }
  try {
    process.kill(pid, detached ? -pid : pid, "SIGKILL");
  } catch {
    // already gone
  }
}

async function fetchProbe(port: number, probe: { method: string; path: string; body?: unknown }) {
  const response = await fetch(`http://127.0.0.1:${port}${probe.path}`, {
    method: probe.method,
    headers: probe.body ? { "content-type": "application/json" } : undefined,
    body: probe.body ? JSON.stringify(probe.body) : undefined,
    signal: AbortSignal.timeout(10_000),
  });
  return { status: response.status, body: await response.text() };
}

async function waitForServer(
  port: number,
  probes: { method: string; path: string; expectStatus: number; body?: unknown }[],
  timeoutMs: number,
): Promise<void> {
  const first = probes[0];
  if (!first) throw new Error("No probes defined for server case");
  const deadline = performance.now() + timeoutMs;
  let lastError = "";
  while (performance.now() < deadline) {
    try {
      const result = await fetchProbe(port, first);
      if (result.status === first.expectStatus) return;
      lastError = `status ${result.status} (expected ${first.expectStatus})`;
    } catch (error) {
      lastError = error instanceof Error ? error.message : String(error);
    }
    await Bun.sleep(500);
  }
  throw new Error(
    `Server on port ${port} never ready; first probe ${first.method} ${first.path} expected ${first.expectStatus}; last: ${lastError}`,
  );
}

async function saveFailureArtifact(id: string, log: string, scaffoldDir: string) {
  const failureDir = join(FAILURE_ROOT, id);
  await rm(failureDir, { recursive: true, force: true });
  await mkdir(failureDir, { recursive: true });
  await writeFile(join(failureDir, "boot.log"), log);
  await cp(scaffoldDir, failureDir, { recursive: true }).catch(() => {});
}

describe.skipIf(process.env.BTS_BOOT !== "1")("boot matrix", () => {
  beforeAll(async () => {
    await mkdir(BOOT_ROOT, { recursive: true });
    await mkdir(FAILURE_ROOT, { recursive: true });
  });

  BOOT_CASES.forEach((bootCase, index) => {
    const reason = skipReason(bootCase);
    if (reason !== undefined) console.log(`[boot] skipping ${bootCase.id}: ${reason}`);
    it.skipIf(reason !== undefined)(
      bootCase.id,
      async () => {
        const scaffoldDir = join(BOOT_ROOT, bootCase.id);
        await rm(scaffoldDir, { recursive: true, force: true });
        await mkdir(scaffoldDir, { recursive: true });

        const config: ProjectConfig = {
          projectName: bootCase.id,
          projectDir: scaffoldDir,
          relativePath: bootCase.id,
          ...bootCase.config,
          addons: [],
          git: false,
          install: false,
        };

        const profile = getRuntimeProfile(config);
        let log = "";

        try {
          const treeResult = await createVirtual(config);
          expect(
            treeResult.isOk(),
            treeResult.isErr() ? `generate failed: ${treeResult.error.message}` : "",
          ).toBe(true);
          if (treeResult.isErr()) throw treeResult.error;

          const writeResult = await writeTree(treeResult.value, scaffoldDir);
          expect(writeResult.isOk(), writeResult.isErr() ? writeResult.error.message : "").toBe(
            true,
          );
          if (writeResult.isErr()) throw writeResult.error;

          const installResult = await runCommand(profile.install, scaffoldDir);
          log += installResult.log;
          expect(installResult.ok, `install failed:\n${installResult.log}`).toBe(true);
          if (config.language === "go") {
            const goMod = await readFile(join(scaffoldDir, "go.mod"), "utf8");
            expect(goMod, "go mod tidy raised the go directive").toMatch(/^go 1\.22(\.0)?$/m);
          }

          for (const prepareCmd of profile.prepare) {
            const prepareResult = await runCommand(prepareCmd, scaffoldDir);
            log += prepareResult.log;
            expect(prepareResult.ok, `prepare failed:\n${prepareResult.log}`).toBe(true);
          }

          if (profile.kind === "oneshot") {
            const runResult = await runCommand(profile.run(), scaffoldDir);
            log += runResult.log;
            expect(runResult.ok, `oneshot failed:\n${runResult.log}`).toBe(true);
            if (profile.expectStdout) {
              expect(runResult.log, `oneshot output missing expected stdout`).toContain(
                profile.expectStdout,
              );
            }
            return;
          }

          const port = BASE_PORT + index;
          const runSpec = profile.run({ port });
          const detached = process.platform !== "win32";
          const subprocess = execa(runSpec.bin, runSpec.args, {
            cwd: scaffoldDir,
            env: { ...process.env, ...runSpec.env },
            detached,
            stdout: "pipe",
            stderr: "pipe",
            reject: false,
          });
          let serverLog = "";
          const appendChunk = (chunk: Buffer) => (serverLog += chunk.toString());
          subprocess.stdout?.on("data", appendChunk);
          subprocess.stderr?.on("data", appendChunk);

          try {
            await waitForServer(port, profile.probes, READY_TIMEOUT_MS);
            for (const probe of profile.probes) {
              const result = await fetchProbe(port, probe);
              expect(
                result.status,
                `${probe.method} ${probe.path} -> ${result.status} (expected ${probe.expectStatus})\nbody: ${result.body}\n${serverLog}`,
              ).toBe(probe.expectStatus);
              if (probe.expectBodyIncludes !== undefined) {
                expect(result.body, `${probe.method} ${probe.path} body`).toContain(
                  probe.expectBodyIncludes,
                );
              }
            }
          } finally {
            await killProcessTree(subprocess.pid, detached);
            log += serverLog;
          }
        } catch (error) {
          await saveFailureArtifact(bootCase.id, log, scaffoldDir).catch(() => {});
          throw error;
        } finally {
          await rm(scaffoldDir, { recursive: true, force: true }).catch(() => {});
        }
      },
      bootCase.timeoutMs ?? CASE_TIMEOUT_MS,
    );
  });
});
