import { DocsLayout, type DocsLayoutProps } from "fumadocs-ui/layouts/notebook";
import { FullSearchTrigger } from "fumadocs-ui/layouts/shared/slots/search-trigger";
import type { ReactNode } from "react";

import { HomeNavbarDocs } from "@/app/(home)/_components/landing/home-navbar";
import { baseOptions } from "@/app/layout.config";
import { SpecialSponsorBanner } from "@/components/special-sponsor-banner";
import { source } from "@/lib/source";

const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  slots: {
    header: HomeNavbarDocs,
  },
  sidebar: {
    banner: (
      <div className="flex flex-col gap-4">
        <FullSearchTrigger className="w-full rounded-xl bg-fd-muted/5 transition-all hover:bg-fd-muted/10" />
        <SpecialSponsorBanner />
      </div>
    ),
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout {...docsOptions} nav={{ ...baseOptions.nav, mode: "top" }}>
      {children}
    </DocsLayout>
  );
}
