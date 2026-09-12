"""TriStack — Scaffold backend projects in Python, Go, and Rust."""

__version__ = "0.1.4"

import os
import sys
import subprocess
from pathlib import Path


def _binary_path() -> Path:
    """Resolve the path to the bundled tristack binary."""
    here = Path(__file__).parent
    binary = here / "bin" / "tristack"

    if sys.platform == "win32":
        binary = here / "bin" / "tristack.exe"

    if not binary.exists():
        raise FileNotFoundError(
            f"Binary not found at {binary}. "
            "This may be a platform mismatch — check that you installed "
            "the correct wheel for your OS/arch."
        )

    return binary


def main() -> None:
    """Run the tristack binary, forwarding all arguments."""
    binary = _binary_path()
    try:
        result = subprocess.run([str(binary)] + sys.argv[1:])
        sys.exit(result.returncode)
    except KeyboardInterrupt:
        sys.exit(130)
    except Exception as e:
        print(f"Error running tristack: {e}", file=sys.stderr)
        sys.exit(1)
