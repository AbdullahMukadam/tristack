#!/usr/bin/env bash
set -euo pipefail

# Usage: ./scripts/update-formula.sh <version>
# Downloads the release tarballs and updates the formula with real checksums.

VERSION="${1:?Usage: ./scripts/update-formula.sh <version>}"
REPO="tristack/tristack"
TEMPLATE="Formula/tristack.rb.template"
OUTPUT="Formula/tristack.rb"

if [ ! -f "$TEMPLATE" ]; then
  echo "Error: $TEMPLATE not found"
  exit 1
fi

echo "Updating formula for v${VERSION}..."

# Download each binary and compute SHA256
compute_sha() {
  local asset="$1"
  local url="https://github.com/${REPO}/releases/download/v${VERSION}/${asset}"
  echo "Downloading ${asset}..."
  curl -sL "$url" | sha256sum | cut -d' ' -f1
}

SHA_DARWIN_ARM64=$(compute_sha "tristack-macos-arm64.tar.gz")
SHA_DARWIN_X64=$(compute_sha "tristack-macos-x64.tar.gz")
SHA_LINUX_ARM64=$(compute_sha "tristack-linux-arm64.tar.gz")
SHA_LINUX_X64=$(compute_sha "tristack-linux-x64.tar.gz")

echo "  darwin-arm64: ${SHA_DARWIN_ARM64}"
echo "  darwin-x64:   ${SHA_DARWIN_X64}"
echo "  linux-arm64:  ${SHA_LINUX_ARM64}"
echo "  linux-x64:    ${SHA_LINUX_X64}"

# Substitute into template
sed \
  -e "s/VERSION/${VERSION}/g" \
  -e "s/SHA256_DARWIN_ARM64/${SHA_DARWIN_ARM64}/g" \
  -e "s/SHA256_DARWIN_X64/${SHA_DARWIN_X64}/g" \
  -e "s/SHA256_LINUX_ARM64/${SHA_LINUX_ARM64}/g" \
  -e "s/SHA256_LINUX_X64/${SHA_LINUX_X64}/g" \
  "$TEMPLATE" > "$OUTPUT"

echo "Updated $OUTPUT"
echo "To publish: create a PR to https://github.com/Homebrew/homebrew-core"
