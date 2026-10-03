# TriStack Installer (PowerShell)
# Usage: irm https://tristack.space/install.ps1 | iex
#
# Installs the latest tristack binary to $env:LOCALAPPDATA\tristack\bin
# and adds it to your PATH.

$ErrorActionPreference = "Stop"

$Repo = "AbdullahMukadam/tristack"
$InstallDir = Join-Path $env:LOCALAPPDATA "tristack\bin"
$ApiBase = "https://api.github.com/repos/$Repo"

function Write-Info { Write-Host "▸ $args" -ForegroundColor Green }
function Write-Warn { Write-Host "▸ $args" -ForegroundColor Yellow }

# Thrown rather than calling exit directly so every failure surfaces through the
# single catch below, which keeps one readable message when run via `irm | iex`.
function Write-Fail {
    param([Parameter(Mandatory = $true)][string]$Message)
    throw $Message
}

function Get-Platform {
    $os = [System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture
    $arch = $os.ToString().ToLower()
    $isWindows = [System.Runtime.InteropServices.RuntimeInformation]::OSDescription -match "Windows"

    if ($isWindows) {
        if ($arch -eq "x64") { return "tristack-windows-x64" }
        return $null
    }

    # This script is Windows-only; the bash installer covers macOS/Linux.
    return $null
}

# Expand-Archive fails cryptically on archives that are not zips. Releases built
# before the packaging fix shipped an uncompressed tar named .zip, so check the
# PK magic number first and report the mismatch ourselves.
function Test-ZipMagic {
    param([Parameter(Mandatory = $true)][string]$Path)

    $stream = [System.IO.File]::OpenRead($Path)
    try {
        $magic = [byte[]]::new(2)
        if ($stream.Read($magic, 0, 2) -lt 2) { return $false }
        return ($magic[0] -eq 0x50 -and $magic[1] -eq 0x4B)
    }
    finally {
        $stream.Dispose()
    }
}

function Add-InstallDirToPath {
    param([Parameter(Mandatory = $true)][string]$Dir)

    $normalized = $Dir.TrimEnd("\")
    $currentPath = [Environment]::GetEnvironmentVariable("Path", "User")

    $entries = @()
    if ($currentPath) {
        $entries = @($currentPath -split ";" | Where-Object { $_ -ne "" })
    }

    if ($entries.Count -gt 0 -and $entries[0].TrimEnd("\") -ieq $normalized) {
        return
    }

    # Prepend rather than append: a tristack installed by uv, pipx or another
    # manager usually sits earlier on PATH and would otherwise shadow this one.
    $filtered = @($entries | Where-Object { $_.TrimEnd("\") -ine $normalized })
    [Environment]::SetEnvironmentVariable("Path", ((@($Dir) + $filtered) -join ";"), "User")
}

function Show-ShadowWarning {
    param([Parameter(Mandatory = $true)][string]$InstalledPath)

    # The persisted PATH was just changed but this session still has the old one,
    # so anything found here is a binary that wins until the shell is restarted.
    $others = @(Get-Command tristack -All -ErrorAction SilentlyContinue |
        Where-Object { $_.Source -and $_.Source -ine $InstalledPath })

    if ($others.Count -eq 0) { return }

    Write-Warn "Another 'tristack' is on your PATH and takes precedence over this install:"
    foreach ($other in $others) {
        Write-Warn "  $($other.Source)"
    }
    Write-Warn "Remove it, or call $InstalledPath directly."
}

try {
    Write-Info "Installing TriStack..."

    $platform = Get-Platform
    if (-not $platform) {
        Write-Fail "This installer is for 64-bit Windows only. On macOS/Linux use: curl -fsSL https://tristack.space/install.sh | bash"
    }

    Write-Info "Checking for the latest version..."
    $release = Invoke-RestMethod -Uri "$ApiBase/releases/latest" -Headers @{ "User-Agent" = "tristack-installer" }
    $tag = $release.tag_name
    if (-not $tag) {
        Write-Fail "Could not read the latest release tag from GitHub. Check network access to api.github.com, or set `$TRISTACK_VERSION to pin a version."
    }

    $version = $tag.TrimStart("v")
    if ($env:TRISTACK_VERSION) {
        $version = $env:TRISTACK_VERSION.TrimStart("v")
    }

    Write-Info "Platform: $platform"
    Write-Info "Version:  v$version"

    New-Item -ItemType Directory -Force -Path $InstallDir | Out-Null
    $binaryPath = Join-Path $InstallDir "tristack.exe"

    $url = "https://github.com/$Repo/releases/download/v$version/$platform.exe.zip"
    $zipPath = Join-Path $env:TEMP "tristack-$version.zip"
    Write-Info "Downloading from $url..."
    Invoke-WebRequest -Uri $url -OutFile $zipPath -UseBasicParsing

    if (-not (Test-ZipMagic -Path $zipPath)) {
        Remove-Item -LiteralPath $zipPath -Force -ErrorAction SilentlyContinue
        Write-Fail "The downloaded asset is not a zip archive. Releases before the packaging fix shipped a tar file named .zip; install this version with: uv tool install tristack"
    }

    Write-Info "Extracting..."
    $tmpDir = Join-Path $env:TEMP "tristack-$version"
    if (Test-Path -LiteralPath $tmpDir) { Remove-Item -LiteralPath $tmpDir -Recurse -Force }
    Expand-Archive -Path $zipPath -DestinationPath $tmpDir -Force

    $exe = Get-ChildItem -LiteralPath $tmpDir -Filter "*.exe" -Recurse | Select-Object -First 1
    if (-not $exe) {
        Remove-Item -LiteralPath $zipPath, $tmpDir -Recurse -Force -ErrorAction SilentlyContinue
        Write-Fail "No .exe found inside $zipPath."
    }

    Move-Item -LiteralPath $exe.FullName -Destination $binaryPath -Force
    Remove-Item -LiteralPath $zipPath, $tmpDir -Recurse -Force -ErrorAction SilentlyContinue

    Add-InstallDirToPath -Dir $InstallDir
    Show-ShadowWarning -InstalledPath $binaryPath

    Write-Info "Installed tristack v$version to $binaryPath"
    Write-Info "Please restart your terminal, then run 'tristack --help'"
}
catch {
    Write-Host "▸ $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}