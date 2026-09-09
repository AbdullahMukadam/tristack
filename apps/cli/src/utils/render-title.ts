import gradient from "gradient-string";

import { bannerGradient } from "./theme";

const TITLE_TEXT = `
 ████████╗██████╗ ██╗███████╗████████╗ █████╗  ██████╗██╗  ██╗
 ╚══██╔══╝██╔══██╗██║██╔════╝╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝
    ██║   ██████╔╝██║███████╗   ██║   ███████║██║     █████╔╝
    ██║   ██╔══██╗██║╚════██║   ██║   ██╔══██║██║     ██╔═██╗
    ██║   ██║  ██║██║███████║   ██║   ██║  ██║╚██████╗██║  ██╗
    ╚═╝   ╚═╝  ╚═╝╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
`;

export const renderTitle = () => {
  const terminalWidth = process.stdout.columns || 80;
  const titleLines = TITLE_TEXT.split("\n");
  const titleWidth = Math.max(...titleLines.map((line) => line.length));

  if (terminalWidth < titleWidth) {
    console.log(gradient(bannerGradient).multiline("TriStack"));
  } else {
    console.log(gradient(bannerGradient).multiline(TITLE_TEXT));
  }
};
