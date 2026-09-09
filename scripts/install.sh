#!/usr/bin/env bash
set -euo pipefail

# TriStack Installer
# Usage: curl -fsSL https://tristack.dev/install.sh | bash
#
# Installs the latest tristack binary to /usr/local/bin.
# Supports macOS (arm64/x64) and Linux (x64/arm64).

REPO="AbdullahMukadam/tristack"
INSTALL_DIR="${TRISTACK_INSTALL_DIR:-/usr/local/bin}"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m'

info()  { echo -e "${GREEN}▸${NC} $*"; }
warn()  { echo -e "${YELLOW}▸${NC} $*"; }
error() { echo -e "${RED}▸${NC} $*" >&2; }

# Detect platform
detect_platform() {
  local os arch

  os="$(uname -s)"
  arch="$(uname -m)"

  case "$os" in
    Darwin)
      case "$arch" in
        arm64) echo "tristack-macos-arm64" ;;
        x86_64) echo "tristack-macos-x64" ;;
        *) error "Unsupported architecture: $arch"; exit 1 ;;
      esac
      ;;
    Linux)
      case "$arch" in
        x86_64) echo "tristack-linux-x64" ;;
        aarch64) echo "tristack-linux-arm64" ;;
        *) error "Unsupported architecture: $arch"; exit 1 ;;
      esac
      ;;
    *)
      error "Unsupported OS: $os"
      error "For Windows, use: irm https://tristack.dev/install.ps1 | iex"
      exit 1
      ;;
  esac
}

# Get latest version from GitHub API
get_latest_version() {
  local version
  version=$(curl -fsSL "https://api.github.com/repos/${REPO}/releases/latest" | grep '"tag_name"' | head -1 | sed -E 's/.*"v([^"]+)".*/\1/')
  if [ -z "$version" ]; then
    error "Failed to fetch latest version"
    exit 1
  fi
  echo "$version"
}

main() {
  info "Installing TriStack..."

  local platform version url tmp_dir
  platform="$(detect_platform)"
  version="${TRISTACK_VERSION:-$(get_latest_version)}"

  info "Platform: ${platform}"
  info "Version:  v${version}"

  # Create temp directory
  tmp_dir="$(mktemp -d)"
  trap 'rm -rf "$tmp_dir"' EXIT

  # Download
  url="https://github.com/${REPO}/releases/download/v${version}/${platform}.tar.gz"
  info "Downloading from ${url}..."
  curl -fsSL "$url" -o "${tmp_dir}/${platform}.tar.gz"

  # Extract
  info "Extracting..."
  tar -xzf "${tmp_dir}/${platform}.tar.gz" -C "$tmp_dir"

  # Install
  chmod +x "${tmp_dir}/${platform}"

  if [ -w "$INSTALL_DIR" ]; then
    mv "${tmp_dir}/${platform}" "${INSTALL_DIR}/tristack"
  else
    info "Installing to ${INSTALL_DIR} (may need sudo)..."
    sudo mv "${tmp_dir}/${platform}" "${INSTALL_DIR}/tristack"
  fi

  info "Installed tristack ${version} to ${INSTALL_DIR}/tristack"
  info "Run 'tristack --help' to get started"
}

main "$@"
