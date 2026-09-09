export const triPalette = {
  iris: "#9D82FF",
  teal: "#2DD4BF",
  success: "#28C780",
  warning: "#F5A623",
  error: "#F45B69",
} as const;

function rgb(hex: string, text: string | number): string {
  const r = Number.parseInt(hex.slice(1, 3), 16);
  const g = Number.parseInt(hex.slice(3, 5), 16);
  const b = Number.parseInt(hex.slice(5, 7), 16);
  return `\x1b[38;2;${r};${g};${b}m${text}\x1b[39m`;
}

export const accent = (text: string | number) => rgb(triPalette.iris, text);
export const teal = (text: string | number) => rgb(triPalette.teal, text);
export const success = (text: string | number) => rgb(triPalette.success, text);
export const warning = (text: string | number) => rgb(triPalette.warning, text);
export const error = (text: string | number) => rgb(triPalette.error, text);

export const bannerGradient = ["#E0C3FC", "#9D82FF", "#50D8D7", "#2DD4BF"];
