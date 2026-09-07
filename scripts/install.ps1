# TriStack Installer (PowerShell)
# Usage: irm https://tristack.dev/install.ps1 | iex
#
# Installs the latest tristack binary to $env:LOCALAPPDATA\tristack\bin
# and adds it to your PATH.

$ErrorActionPreference = "Stop"

$Repo = "tristack/tristack"
$InstallDir = Join-Path $env:LOCALAPPDATA "tristack\bin"
$Channel = if ($env:TRISTACK_VERSION) { $env:TRISTACK_VERSION } else { "latest" }

function Write-Info  { Write-Host "▸ $args" -ForegroundColor Green }
function Write-Warn  { Write-Host "▸ $args" -ForegroundColor Yellow }
function Write-Error { Write-Host "▸ $args" -ForegroundColor Red }

function Get-Platform {
    $os = [System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture
    $arch = $os.ToString().ToLower()
    $isWindows = [System.Runtime.InteropServices.RuntimeInformation]::OSDescription -match "Windows"

    if ($isWindows) {
        if ($arch -eq "x64") { return "tristack-windows-x64.exe" }
        return $null
    }

    # This script is Windows-only; the bash installer covers macOS/Linux.
    return $null
}

Write-Info "Installing TriStack..."

$platform = Get-Platform
if (-not $platform) {
    Write-Error "This installer is for 64-bit Windows only."
    Write-Error "On macOS/Linux use: curl -fsSL https://tristack.dev/install.sh | bash"
    exit 1
}

# Get the latest version
Write-Info "Checking for the latest version..."
$release = Invoke-RestMethod -Uri "https://api.github.com/repos/$Repo/releases/latest" -Headers @{ "User-Agent" = "tristack-installer" }
$version = $release.tag_name.TrimStart("v")

if ($env:TRISTACK_VERSION) {
    $version = $env:TRISTACK_VERSION.TrimStart("v")
}

Write-Info "Platform: $platform"
Write-Info "Version:  v$version"

# Create install directory
New-Item -ItemType Directory -Force -Path $InstallDir | Out-Null
$binaryPath = Join-Path $InstallDir "tristack.exe"

# Download
$url = "https://github.com/$Repo/releases/download/v$version/$platform"
Write-Info "Downloading from $url..."
Invoke-WebRequest -Uri $url -OutFile $binaryPath -UseBasicParsing

# Add to PATH if not already there
$currentPath = [Environment]::GetEnvironmentVariable("Path", "User")
if ($currentPath -notlike "*$InstallDir*") {
    Write-Info "Adding $InstallDir to your PATH..."
    [Environment]::SetEnvironmentVariable("Path", "$currentPath;$InstallDir", "User")
}

Write-Info "Installed tristack v$version to $binaryPath"
Write-Info "Please restart your terminal, then run 'tristack --help'"
