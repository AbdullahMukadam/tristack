import type { Metadata } from "next";

import { FRAMEWORK_PAGES } from "@/lib/framework-pages";
import { createPageMetadata } from "@/lib/metadata";

import { SectionDivider } from "../_components/landing/section-divider";
import { FrameworkCard, Label, PageHeading } from "./_components/framework-ui";

const description =
  "Project generators and starter templates for every Python, Go, and Rust web framework TriStack supports.";

export const metadata: Metadata = createPageMetadata({
  title: "Framework project generators",
  description,
  path: "/frameworks",
});

const languages = [...new Set(FRAMEWORK_PAGES.map((page) => page.languageName))];

export default function FrameworksPage() {
  return (
    <div className="mx-auto w-full max-w-6xl border-x border-border">
      <SectionDivider />
      <header className="flex flex-col gap-4 px-4 py-8 sm:px-6">
        <PageHeading accent="Generators">Framework Project</PageHeading>
        <p className="max-w-2xl text-[15px] leading-relaxed text-fd-muted-foreground">
          {description}
        </p>
      </header>
      {languages.map((language) => (
        <section key={language} className="flex flex-col gap-3 border-t px-4 py-6 sm:px-6">
          <Label>{language}</Label>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {FRAMEWORK_PAGES.filter((page) => page.languageName === language).map((page) => (
              <li key={page.id}>
                <FrameworkCard page={page} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
