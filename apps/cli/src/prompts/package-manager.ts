import type { Language, PackageManager } from "../types";
import { navigableSelect, preferValidInitial } from "./navigable";

const PYTHON_PACKAGE_MANAGERS: Array<{
  value: PackageManager;
  label: string;
  hint: string;
}> = [
  { value: "uv", label: "uv", hint: "Fast, modern, Python package manager" },
  { value: "poetry", label: "Poetry", hint: "Dependency management + packaging" },
  { value: "pip", label: "pip", hint: "Classic Python package installer" },
];

const GO_PACKAGE_MANAGERS: Array<{ value: PackageManager; label: string; hint: string }> = [
  { value: "go", label: "go", hint: "Go module tool" },
];

const RUST_PACKAGE_MANAGERS: Array<{ value: PackageManager; label: string; hint: string }> = [
  { value: "cargo", label: "cargo", hint: "Rust package manager and build tool" },
];

function optionsFor(language: Language) {
  switch (language) {
    case "python":
      return PYTHON_PACKAGE_MANAGERS;
    case "go":
      return GO_PACKAGE_MANAGERS;
    case "rust":
      return RUST_PACKAGE_MANAGERS;
  }
}

export async function getPackageManagerChoice(
  flag: PackageManager | undefined,
  language: Language,
  previousAnswer?: PackageManager,
): Promise<PackageManager | symbol> {
  const options = optionsFor(language);
  const initialValue = preferValidInitial(options, flag ?? previousAnswer, options[0].value);
  return navigableSelect<PackageManager>({
    message: "Which package manager do you want?",
    options,
    initialValue,
  });
}
