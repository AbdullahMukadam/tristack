import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { $ } from "bun";
import semver from "semver";

const ROOT = join(import.meta.dir, "..");
const CLI_JSON = join(ROOT, "apps/cli/package.json");
const ROOT_JSON = join(ROOT, "package.json");
const PYPROJECT_TOML = join(ROOT, "packages/tristack-py/pyproject.toml");

async function main(): Promise<void> {
  const cliPackage = JSON.parse(await readFile(CLI_JSON, "utf-8"));
  const rootPackage = JSON.parse(await readFile(ROOT_JSON, "utf-8"));
  const pyproject = await readFile(PYPROJECT_TOML, "utf-8");

  const version = cliPackage.version as string;
  if (!semver.valid(version)) {
    console.error(`❌ Invalid version "${version}" in apps/cli/package.json`);
    process.exit(1);
  }

  const arg = process.argv[2];
  if (arg && semver.valid(arg) && arg !== version) {
    console.error(
      `❌ Version mismatch: expected "${arg}" but apps/cli/package.json has "${version}"`,
    );
    process.exit(1);
  }

  const rootMatch = rootPackage.version === version;
  const pyMatch = new RegExp(`^version\\s*=\\s*"${version}"`, "m").test(pyproject);

  if (!rootMatch || !pyMatch) {
    console.error("❌ Version files disagree:");
    console.error(`  apps/cli/package.json      -> ${version}`);
    console.error(`  package.json               -> ${rootPackage.version}`);
    const pyVersion = pyproject.match(/^version\s*=\s*"([^"]+)"/m)?.[1];
    console.error(`  tristack-py/pyproject.toml -> ${pyVersion ?? "missing"}`);
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

  console.log(`🚀 Releasing v${version}`);
  console.log(`   Tag + release + binaries + PyPI handled by GitHub Actions`);

  await $`git commit --allow-empty -m "chore(release): ${version}"`;
  await $`git push origin main`;

  console.log("✅ Pushed. Watch Actions: release -> build-binaries -> publish-pypi");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
