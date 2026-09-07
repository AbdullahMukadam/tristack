import type { PackageManager } from "../types";

/**
 * Inferred package manager for a new project. TriStack is Python-first, so the
 * python toolchain default is `uv`; this value is just a sensible starting point
 * and can be changed at the package manager prompt.
 */
export const getUserPkgManager: () => PackageManager = () => {
  return "uv";
};
