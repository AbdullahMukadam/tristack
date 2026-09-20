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
