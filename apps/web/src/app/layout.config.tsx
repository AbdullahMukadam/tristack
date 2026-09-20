import type { BaseLayoutProps, LinkItemType } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

import xLogo from "@/public/icon/x.svg";
import tristackLogo from "@/public/tristack-logo.png";

export const logo = (
  <div className="flex items-center gap-2">
    <Image alt="TriStack logo" src={tristackLogo} className="h-6 w-auto" />
    <span className="text-sm font-bold tracking-tight">TriStack</span>
  </div>
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
    title: logo,
  },
  links: links,
  githubUrl: "https://github.com/AbdullahMukadam/tristack",
};
