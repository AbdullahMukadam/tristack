import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

import { $ } from "bun";
import semver from "semver";

const ROOT = join(import.meta.dir, "..");

const CLI_JSON = join(ROOT, "apps/cli/package.json");
const ROOT_JSON = join(ROOT, "package.json");
const CONSTANTS_TS = join(ROOT, "apps/cli/src/constants.ts");
const PYPROJECT_TOML = join(ROOT, "packages/tristack-py/pyproject.toml");
const INIT_PY = join(ROOT, "packages/tristack-py/tristack/__init__.py");

async function readVersion(path: string): Promise<string> {
  const content = await readFile(path, "utf-8");
  return content.match(/^version\s*=\s*"([^"]+)"/m)?.[1] ?? "";
}

async function setVersion(path: string, version: string): Promise<boolean> {
  const file = await readFile(path, "utf-8");
  const next = file.replace(/^version\s*=\s*"[^"]+"/m, `version = "${version}"`);
  if (next === file) return false;
  await writeFile(path, next);
  return true;
}

async function main(): Promise<void> {
  const cliPackage = JSON.parse(await readFile(CLI_JSON, "utf-8"));
  const rootPackage = JSON.parse(await readFile(ROOT_JSON, "utf-8"));
  const constantsSrc = await readFile(CONSTANTS_TS, "utf-8");
  const pyVersion = await readVersion(PYPROJECT_TOML);
  const initVersion =
    (await readFile(INIT_PY, "utf-8")).match(/__version__\s*=\s*"([^"]+)"/)?.[1] ?? "";

  const version = cliPackage.version as string;
  if (!semver.valid(version)) {
    console.error(`❌ Invalid version "${version}" in apps/cli/package.json`);
    process.exit(1);
  }

  const cliConstVersion = constantsSrc.match(/CLI_VERSION\s*=\s*"([^"]+)"/)?.[1] ?? "";
  const known = [
    ["package.json", rootPackage.version],
    ["apps/cli/package.json", version],
    ["apps/cli/src/constants.ts", cliConstVersion],
    ["packages/tristack-py/pyproject.toml", pyVersion],
    ["packages/tristack-py/tristack/__init__.py", initVersion],
  ] as const;

  const mismatches = known
    .filter(([label, value]) => value !== version)
    .map(([label, value]) => `  ${label} -> ${value}`);
  if (mismatches.length > 0) {
    console.error("❌ Version files disagree:");
    mismatches.forEach((line) => console.error(line));
    process.exit(1);
  }

  const arg = process.argv[2];
  const target = arg ?? version;
  if (!semver.valid(target)) {
    console.error(`❌ Invalid target version "${target}"`);
    process.exit(1);
  }

  const branch = (await $`git rev-parse --abbrev-ref HEAD`).text();
  if (branch.trim() !== "main") {
    console.error(`❌ Must run on main, currently on "${branch.trim()}"`);
    process.exit(1);
  }

  const status = (await $`git status --porcelain`).text();
  if (status.trim() !== "") {
    console.error("❌ Working tree is dirty. Commit or stash changes first.");
    process.exit(1);
  }

  const remote = (await $`git ls-remote --heads origin main`).text();
  const head = (await $`git rev-parse HEAD`).text();
  if (!remote.includes(head.trim())) {
    console.error("❌ Local main is not up to date with origin/main");
    process.exit(1);
  }

  if (target !== version) {
    const json = JSON.parse(await readFile(CLI_JSON, "utf-8"));
    json.version = target;
    await writeFile(CLI_JSON, `${JSON.stringify(json, null, 2)}\n`);
    const root = JSON.parse(await readFile(ROOT_JSON, "utf-8"));
    root.version = target;
    await writeFile(ROOT_JSON, `${JSON.stringify(root, null, 2)}\n`);
    await writeFile(
      CONSTANTS_TS,
      constantsSrc.replace(/CLI_VERSION\s*=\s*"[^"]+"/, `CLI_VERSION = "${target}"`),
    );
    await setVersion(PYPROJECT_TOML, target);
    await setVersion(INIT_PY, target);
    await $`git add ${CLI_JSON} ${ROOT_JSON} ${CONSTANTS_TS} ${PYPROJECT_TOML} ${INIT_PY}`;
    console.log(`🔖 Bumped all version files to ${target}`);
  }

  console.log(`🚀 Releasing v${target}`);
  await $`git commit --allow-empty -m "chore(release): ${target}"`;
  await $`git push origin main`;

  console.log("✅ Pushed. The Release workflow will:");
  console.log("   1. build binary + wheel for all 5 platforms");
  console.log("   2. publish wheels to PyPI");
  console.log("   3. create the tag + GitHub Release + attach binaries (only if builds pass)");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
