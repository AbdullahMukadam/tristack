import type { BaseLayoutProps, LinkItemType } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

import discordLogo from "@/public/icon/discord.svg";
import xLogo from "@/public/icon/x.svg";
import mainLogoDark from "@/public/logo-dark.svg";
import mainLogoLight from "@/public/logo-light.svg";

export const logo = (
  <>
    <Image alt="tristack" src={mainLogoLight} className="w-8 dark:hidden" />
    <Image alt="tristack" src={mainLogoDark} className="hidden w-8 dark:block" />
  </>
);

export const links: LinkItemType[] = [
  {
    text: "Docs",
    url: "/docs",
    active: "nested-url",
  },
  {
    text: "Builder",
    url: "/new",
  },
  {
    text: "Sponsors",
    url: "/sponsors",
  },
  {
    text: "X",
    icon: <Image src={xLogo} alt="x" className="size-4 invert dark:invert-0" />,
    label: "X",
    type: "icon",
    url: "https://x.com/amanvarshney01",
    external: true,
    secondary: true,
  },
  {
    text: "Discord",
    icon: <Image src={discordLogo} alt="discord" className="size-5 invert-0 dark:invert" />,
    label: "Discord",
    type: "icon",
    url: "https://discord.gg/ZYsbjpDaM5",
    external: true,
    secondary: true,
  },
];

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        {logo}
        <span className="inline shrink-0 whitespace-nowrap font-bold text-lg tracking-tight md:hidden xl:inline">
          TriStack
        </span>
      </>
    ),
  },
  links: links,
  githubUrl: "https://github.com/AmanVarshney01/create-better-t-stack",
};
