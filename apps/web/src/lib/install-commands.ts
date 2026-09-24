export type InstallCommand = {
  label: string;
  command: string;
};

export type InstallPlatform = {
  id: "windows" | "macos" | "linux" | "python";
  label: string;
  commands: InstallCommand[];
};

export const INSTALL_COMMANDS: InstallPlatform[] = [
  {
    id: "windows",
    label: "Windows",
    commands: [{ label: "PowerShell", command: "irm https://tristack.space/install.ps1 | iex" }],
  },
  {
    id: "macos",
    label: "macOS",
    commands: [{ label: "curl", command: "curl -fsSL https://tristack.space/install.sh | bash" }],
  },
  {
    id: "linux",
    label: "Linux",
    commands: [{ label: "curl", command: "curl -fsSL https://tristack.space/install.sh | bash" }],
  },
  {
    id: "python",
    label: "Python (any OS)",
    commands: [{ label: "Run on demand", command: "uvx tristack" }],
  },
];
