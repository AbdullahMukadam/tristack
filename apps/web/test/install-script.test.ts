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

  test("cross-compiles every platform for its own target instead of the runner's", () => {
    expect(releaseWorkflow).toContain("--target=${{ matrix.target }}");
    expect(releaseWorkflow).toMatch(/platform: macos-x64[\s\S]*?target: bun-darwin-x64/);
  });

  test("verifies artifacts before publishing", () => {
    expect(releaseWorkflow).toContain('grep -q "${{ matrix.arch }}"');
    expect(releaseWorkflow).toContain("Verify Release Zip");
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

  test("never assigns the read-only $IsWindows automatic variable of PowerShell 7", () => {
    expect(installPs1).not.toMatch(/\$isWindows\s*=/i);
  });

  test("does not close the caller's session when run through irm | iex", () => {
    expect(installPs1).toContain("if ($MyInvocation.MyCommand.Path)");
  });

  test("extracts tar-in-zip releases with the tar.exe that ships with Windows", () => {
    expect(installPs1).toContain("System32\\tar.exe");
  });

  test("forces TLS 1.2 for Windows PowerShell 5.1", () => {
    expect(installPs1).toContain("[Net.SecurityProtocolType]::Tls12");
  });
});

describe("unix installer", () => {
  test("extracts the gzip tarballs the release actually publishes", () => {
    expect(installSh).toContain("tar -xzf");
    expect(installSh).not.toContain("tar -a ");
  });

  test("expands the temp dir when the cleanup trap is set, so set -u can't fail it", () => {
    expect(installSh).toContain(`trap "rm -rf '$tmp_dir'" EXIT`);
  });

  test("accepts a v-prefixed TRISTACK_VERSION", () => {
    expect(installSh).toContain('version="${version#v}"');
  });

  test("checks the binary runs before installing it", () => {
    expect(installSh).toContain("--version >/dev/null 2>&1");
  });
});
