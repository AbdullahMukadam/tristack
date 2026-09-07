#!/usr/bin/env python3
"""
Build a platform-specific tristack wheel.

Usage:
    python scripts/build-wheel.py <binary-path> [version] [--tag PLATFORM_TAG]

```
Optionally re-tags the wheel for a target platform so pip installs it only
on the matching OS/arch. Without --tag the wheel is tagged py3-none-any.

Example:
    python scripts/build-wheel.py ./tristack-linux-x64 0.1.0 --tag manylinux_2_17_x86_64
"""
import argparse
import json
import re
import shutil
import subprocess
import sys
import zipfile
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
PY_PKG = REPO_ROOT / "packages" / "tristack-py"
PYPROJECT = PY_PKG / "pyproject.toml"
INIT = PY_PKG / "tristack" / "__init__.py"

# scratch metadata for re-tagging
TAG_RE = re.compile(r"^(?P<name>[^-]+)-(?P<ver>[^-]+)-(?P<py>[^-]+)-(?P<abi>[^-]+)-(?P<plat>[^-]+)\.whl$")


def re_tag_wheel(wheel: Path, platform_tag: str) -> Path:
    """Rewrite a pure-py wheel's tags to the target platform. Returns new path."""
    m = TAG_RE.match(wheel.name)
    if not m:
        raise RuntimeError(f"Cannot parse wheel filename: {wheel.name}")
    new_name = wheel.with_name(
        f"{m.group('name')}-{m.group('ver')}-{m.group('py')}-{m.group('abi')}-{platform_tag}.whl"
    )

    tmp = wheel.with_suffix(".whl.tmp")
    with zipfile.ZipFile(wheel) as zin, zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED) as zout:
        for item in zin.infolist():
            data = zin.read(item.filename)
            if item.filename.endswith("WHEEL") and item.filename.endswith(".dist-info/WHEEL"):
                text = data.decode("utf-8")
                text = re.sub(r"^Tag:.*$", f"Tag: {m.group('py')}-{m.group('abi')}-{platform_tag}", text, flags=re.MULTILINE)
                data = text.encode("utf-8")
            zout.writestr(item, data)
    wheel.unlink()
    tmp.rename(new_name)
    return new_name


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("binary")
    parser.add_argument("version", nargs="?", default=None)
    parser.add_argument("--tag", default=None, help="platform tag, e.g. manylinux_2_17_x86_64")
    args = parser.parse_args()

    binary_path = Path(args.binary).resolve()
    if not binary_path.exists():
        print(f"Binary not found: {binary_path}")
        sys.exit(1)

    version = args.version
    if version is None:
        match = re.search(r'^version\s*=\s*"([^"]+)"', PYPROJECT.read_text(), re.MULTILINE)
        if not match:
            print(f"Could not read version from {PYPROJECT}")
            sys.exit(1)
        version = match.group(1)
    print(f"Building wheel for tristack {version}")

    # Clean previous builds
    dist = PY_PKG / "dist"
    if dist.exists():
        shutil.rmtree(dist)

    bin_dir = PY_PKG / "tristack" / "bin"
    if bin_dir.exists():
        shutil.rmtree(bin_dir)
    bin_dir.mkdir(parents=True)

    # Copy binary
    target = bin_dir / ("tristack.exe" if sys.platform == "win32" else "tristack")
    shutil.copy2(binary_path, target)
    target.chmod(0o755)

    # Update version in pyproject.toml
    content = PYPROJECT.read_text()
    content = re.sub(r'^version\s*=\s*"[^"]+"', f'version = "{version}"', content, flags=re.MULTILINE)
    PYPROJECT.write_text(content)

    # Update version in __init__.py
    content = INIT.read_text()
    content = re.sub(r'__version__\s*=\s*"[^"]+"', f'__version__ = "{version}"', content)
    INIT.write_text(content)

    # Build wheel
    subprocess.run([sys.executable, "-m", "build", "--wheel"], cwd=str(PY_PKG), check=True)

    wheels = list((PY_PKG / "dist").glob("*.whl"))
    if not wheels:
        print("No wheel produced")
        sys.exit(1)
    wheel = wheels[0]

    if args.tag:
        wheel = re_tag_wheel(wheel, args.tag)
        print(f"Re-tagged wheel for {args.tag}")

    print(f"Built wheel: {wheel.name}")


if __name__ == "__main__":
    main()

