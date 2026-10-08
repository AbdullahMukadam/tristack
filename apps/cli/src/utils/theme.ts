import pc from "picocolors";

export const triPalette = {
  brand: "#f6a510",
  brandBright: "#ffd36b",
  brandDeep: "#ff9600",
  success: "#28C780",
  warning: "#ff9600",
  error: "#ef4444",
} as const;

function rgb(hex: string, text: string | number): string {
  const r = Number.parseInt(hex.slice(1, 3), 16);
  const g = Number.parseInt(hex.slice(3, 5), 16);
  const b = Number.parseInt(hex.slice(5, 7), 16);
  return `\x1b[38;2;${r};${g};${b}m${text}\x1b[39m`;
}

export const accent = (text: string | number) => rgb(triPalette.brand, text);
export const brandBright = (text: string | number) => rgb(triPalette.brandBright, text);
export const brandDeep = (text: string | number) => rgb(triPalette.brandDeep, text);
export const success = (text: string | number) => rgb(triPalette.success, text);
export const warning = (text: string | number) => rgb(triPalette.warning, text);
export const error = (text: string | number) => rgb(triPalette.error, text);

export const bannerGradient = ["#ffd36b", "#f6a510", "#e07a00"];

const LOGO = [
  "████████╗██████╗ ██╗███████╗████████╗ █████╗  ██████╗██╗  ██╗",
  "╚══██╔══╝██╔══██╗██║██╔════╝╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝",
  "   ██║   ██████╔╝██║███████╗   ██║   ███████║██║     █████╔╝ ",
  "   ██║   ██╔══██╗██║╚════██║   ██║   ██╔══██║██║     ██╔═██╗ ",
  "   ██║   ██║  ██║██║███████║   ██║   ██║  ██║╚██████╗██║  ██╗",
  "   ╚═╝   ╚═╝  ╚═╝╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝",
];
const LOGO_WIDTH = 61;

function gradientAt(t: number): string {
  const scaled = t * (bannerGradient.length - 1);
  const i = Math.min(Math.floor(scaled), bannerGradient.length - 2);
  const f = scaled - i;
  const channel = (offset: number) => {
    const a = Number.parseInt(bannerGradient[i]!.slice(offset, offset + 2), 16);
    const b = Number.parseInt(bannerGradient[i + 1]!.slice(offset, offset + 2), 16);
    return Math.round(a + (b - a) * f)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${channel(1)}${channel(3)}${channel(5)}`;
}

export function renderLogo(
  columns = process.stdout.columns ?? 80,
  color = pc.isColorSupported,
): string {
  if (columns < LOGO_WIDTH + 2) {
    return color ? pc.bold(accent("TriStack")) : "TriStack";
  }
  return LOGO.map((line, row) =>
    color ? rgb(gradientAt(row / (LOGO.length - 1)), line) : line,
  ).join("\n");
}
