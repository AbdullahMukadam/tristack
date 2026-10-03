import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const webRoot = join(import.meta.dir, "..");
const repoRoot = join(webRoot, "..", "..");

const installPs1 = readFileSync(join(webRoot, "public", "install.ps1"), "utf8");
const installSh = readFileSync(join(webRoot, "public", "install.sh"), "utf8");
const releaseWorkflow = readFileSync(
  join(repoRoot, ".github", "workflows", "release.yaml"),
  "utf8",
);

describe("release artifact packaging", () => {
  test("builds the windows zip with a zip-capable tool", () => {
    expect(releaseWorkflow).toContain("Compress-Archive");
    expect(releaseWorkflow).not.toContain("tar -a -c -f");
  });

  test("keeps gzip tarballs for the unix assets", () => {
    expect(releaseWorkflow).toContain("tar -czf");
  });
});

describe("windows installer", () => {
  test("verifies the downloaded asset is a zip before expanding it", () => {
    expect(installPs1).toContain("Test-ZipMagic");
    expect(installPs1).toContain("-eq 0x50");
  });

  test("guards every dereference that can be null on a bad release", () => {
    expect(installPs1).toContain("$tag = $release.tag_name");
    expect(installPs1).toContain("if (-not $tag)");
    expect(installPs1).toContain("if (-not $exe)");
  });

  test("surfaces failures through one catch instead of a bare runtime error", () => {
    expect(installPs1).toContain("function Write-Fail");
    expect(installPs1).toMatch(/^catch \{$/m);
    expect(installPs1).toContain("exit 1");
  });

  test("does not shadow the built-in Write-Error cmdlet", () => {
    expect(installPs1).not.toContain("function Write-Error");
  });

  test("prepends the install directory so an earlier tristack cannot win", () => {
    expect(installPs1).not.toContain("$currentPath;$InstallDir");
    expect(installPs1).toContain("@($Dir) + $filtered");
  });

  test("warns when another tristack already on PATH will take precedence", () => {
    expect(installPs1).toContain("Get-Command tristack -All");
    expect(installPs1).toContain("Show-ShadowWarning");
  });
});

describe("unix installer", () => {
  test("extracts the gzip tarballs the release actually publishes", () => {
    expect(installSh).toContain("tar -xzf");
    expect(installSh).not.toContain("tar -a ");
  });
});
