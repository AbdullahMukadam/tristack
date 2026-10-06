import { describe, expect, it } from "bun:test";

import type { Framework, Frontend } from "@tristack/types";

import { createVirtual } from "../src/index";
import { collectFiles } from "./setup";

describe("Rust addons emission and behavior", () => {
  const frameworks: Framework[] = ["axum", "actix-web"];
  const frontends: Frontend[] = ["none", "htmx"];

  for (const framework of frameworks) {
    for (const frontend of frontends) {
      const suiteName = `${framework} (${frontend === "none" ? "API" : "HTMX"})`;

      describe(suiteName, () => {
        it("no addons: emits base files without any addon additions", async () => {
          const result = await createVirtual({
            projectName: "no-addons-app",
            language: "rust",
            framework,
            frontend,
            orm: "none",
            database: "none",
            migrations: "none",
            packageManager: "cargo",
            addons: [],
          });
          if (result.isErr()) throw result.error;
          const files = collectFiles(result.value.root, result.value.root.path);

          // Docker files absent
          expect(files.has(".dockerignore")).toBe(false);
          expect(files.has("Dockerfile")).toBe(false);
          expect(files.has("docker-compose.yml")).toBe(false);

          // GitHub actions absent
          expect(files.has(".github/workflows/ci.yml")).toBe(false);

          // Cargo.toml has no [lints.clippy]
          const cargoToml = files.get("Cargo.toml")!;
          expect(cargoToml).toBeDefined();
          expect(cargoToml).not.toContain("[lints.clippy]");
          expect(cargoToml.endsWith("\n")).toBe(true);

          // README has no cargo-watch install line and uses cargo run
          const readme = files.get("README.md")!;
          expect(readme).toBeDefined();
          expect(readme).not.toContain("cargo install cargo-watch");
          expect(readme).toContain("cargo run");
        });

        it("docker alone: emits docker files and leaves other addons inactive", async () => {
          const result = await createVirtual({
            projectName: "docker-app",
            language: "rust",
            framework,
            frontend,
            orm: "none",
            database: "none",
            migrations: "none",
            packageManager: "cargo",
            addons: ["docker"],
          });
          if (result.isErr()) throw result.error;
          const files = collectFiles(result.value.root, result.value.root.path);

          expect(files.has(".dockerignore")).toBe(true);
          expect(files.has("Dockerfile")).toBe(true);
          expect(files.has("docker-compose.yml")).toBe(true);
          expect(files.get(".dockerignore")!.endsWith("\n")).toBe(true);
          expect(files.get("Dockerfile")!.endsWith("\n")).toBe(true);
          expect(files.get("docker-compose.yml")!.endsWith("\n")).toBe(true);

          expect(files.has(".github/workflows/ci.yml")).toBe(false);
          expect(files.get("Cargo.toml")!).not.toContain("[lints.clippy]");
          expect(files.get("README.md")!).not.toContain("cargo install cargo-watch");
        });

        it("github-actions alone: emits valid workflow with components string and no clippy step", async () => {
          const result = await createVirtual({
            projectName: "ci-app",
            language: "rust",
            framework,
            frontend,
            orm: "none",
            database: "none",
            migrations: "none",
            packageManager: "cargo",
            addons: ["github-actions"],
          });
          if (result.isErr()) throw result.error;
          const files = collectFiles(result.value.root, result.value.root.path);

          expect(files.has(".github/workflows/ci.yml")).toBe(true);
          const ci = files.get(".github/workflows/ci.yml")!;
          expect(ci.endsWith("\n")).toBe(true);
          expect(ci).toContain("components: rustfmt, clippy");
          expect(ci).not.toContain("components: [rustfmt, clippy]");
          expect(ci).toContain("cargo build --all-targets");
          expect(ci).toContain("cargo test");
          expect(ci).toContain("cargo fmt -- --check");
          expect(ci).not.toContain("- name: Lint");
          expect(ci).not.toContain("cargo clippy");

          expect(files.has("Dockerfile")).toBe(false);
          expect(files.get("Cargo.toml")!).not.toContain("[lints.clippy]");
          expect(files.get("README.md")!).not.toContain("cargo install cargo-watch");
        });

        it("clippy alone: emits [lints.clippy] in Cargo.toml without emitting ci.yml", async () => {
          const result = await createVirtual({
            projectName: "clippy-app",
            language: "rust",
            framework,
            frontend,
            orm: "none",
            database: "none",
            migrations: "none",
            packageManager: "cargo",
            addons: ["clippy"],
          });
          if (result.isErr()) throw result.error;
          const files = collectFiles(result.value.root, result.value.root.path);

          const cargoToml = files.get("Cargo.toml")!;
          expect(cargoToml).toBeDefined();
          expect(cargoToml).toContain("[lints.clippy]");
          expect(cargoToml).toContain('all = { level = "warn", priority = -1 }');
          expect(cargoToml.endsWith("\n")).toBe(true);

          expect(files.has(".github/workflows/ci.yml")).toBe(false);
          expect(files.has("Dockerfile")).toBe(false);
          expect(files.get("README.md")!).not.toContain("cargo install cargo-watch");
        });

        it("cargo-watch alone: adds install line to README dev section without modifying Cargo.toml", async () => {
          const result = await createVirtual({
            projectName: "watch-app",
            language: "rust",
            framework,
            frontend,
            orm: "none",
            database: "none",
            migrations: "none",
            packageManager: "cargo",
            addons: ["cargo-watch"],
          });
          if (result.isErr()) throw result.error;
          const files = collectFiles(result.value.root, result.value.root.path);

          const readme = files.get("README.md")!;
          expect(readme).toBeDefined();
          expect(readme).toContain("cargo install cargo-watch");
          expect(readme).toContain("cargo watch -x run");

          expect(files.get("Cargo.toml")!).not.toContain("[lints.clippy]");
          expect(files.has(".github/workflows/ci.yml")).toBe(false);
          expect(files.has("Dockerfile")).toBe(false);
        });

        it("github-actions and clippy combined: activates clippy step in CI and lint table in Cargo.toml", async () => {
          const result = await createVirtual({
            projectName: "ci-clippy-app",
            language: "rust",
            framework,
            frontend,
            orm: "none",
            database: "none",
            migrations: "none",
            packageManager: "cargo",
            addons: ["github-actions", "clippy"],
          });
          if (result.isErr()) throw result.error;
          const files = collectFiles(result.value.root, result.value.root.path);

          const ci = files.get(".github/workflows/ci.yml")!;
          expect(ci).toContain("- name: Lint");
          expect(ci).toContain("cargo clippy --all-targets --all-features -- -D warnings");

          const cargoToml = files.get("Cargo.toml")!;
          expect(cargoToml).toContain("[lints.clippy]");
        });

        it("all four addons combined: emits all addon files cleanly with no conflicts", async () => {
          const result = await createVirtual({
            projectName: "all-addons-app",
            language: "rust",
            framework,
            frontend,
            orm: "seaorm",
            database: "sqlite",
            migrations: "none",
            packageManager: "cargo",
            addons: ["docker", "github-actions", "clippy", "cargo-watch"],
          });
          if (result.isErr()) throw result.error;
          const files = collectFiles(result.value.root, result.value.root.path);

          // Docker
          expect(files.has(".dockerignore")).toBe(true);
          expect(files.has("Dockerfile")).toBe(true);
          expect(files.has("docker-compose.yml")).toBe(true);

          // GitHub actions
          expect(files.has(".github/workflows/ci.yml")).toBe(true);
          const ci = files.get(".github/workflows/ci.yml")!;
          expect(ci).toContain("components: rustfmt, clippy");
          expect(ci).toContain("- name: Lint");
          expect(ci).toContain("cargo clippy --all-targets --all-features -- -D warnings");

          // Clippy
          const cargoToml = files.get("Cargo.toml")!;
          expect(cargoToml).toContain("[lints.clippy]");

          // Cargo-watch
          const readme = files.get("README.md")!;
          expect(readme).toContain("cargo install cargo-watch");
          expect(readme).toContain("cargo watch -x run");
        });
      });
    }
  }
});
