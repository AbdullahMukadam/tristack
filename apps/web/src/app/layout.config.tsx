import type { BaseLayoutProps, LinkItemType } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

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
    url: "https://x.com/abd_mukadam",
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
  githubUrl: "https://github.com/AbdullahMukadam/tristack",
};
