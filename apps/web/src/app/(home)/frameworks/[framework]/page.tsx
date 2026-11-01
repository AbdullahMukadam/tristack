import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  describeStack,
  FRAMEWORK_PAGES,
  getFrameworkPage,
  getFrameworkProject,
  getFrameworkStack,
} from "@/lib/framework-pages";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { generateStackCommand, generateStackUrlFromState } from "@/lib/stack-utils";

import { SectionDivider } from "../../_components/landing/section-divider";
import { FrameworkCard, Label, PageHeading } from "../_components/framework-ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return FRAMEWORK_PAGES.map((page) => ({ framework: page.id }));
}

function loadPage(id: string) {
  const page = getFrameworkPage(id);
  if (!page) notFound();
  const stack = getFrameworkStack(page);
  return { page, stack, parts: describeStack(stack) };
}

const andList = new Intl.ListFormat("en", { type: "conjunction" });

function includedSummary(parts: ReturnType<typeof describeStack>) {
  return andList.format(
    [parts.orm, parts.database, parts.migrations && `${parts.migrations} migrations`].filter(
      (item): item is string => Boolean(item),
    ),
  );
}

export async function generateMetadata(
  props: PageProps<"/frameworks/[framework]">,
): Promise<Metadata> {
  const { framework } = await props.params;
  const { page, parts } = loadPage(framework);
  const included = includedSummary(parts);

  return createPageMetadata({
    title: `${page.name} project generator`,
    description: `Generate a production-ready ${page.name} project${included ? ` with ${included}` : ""} in one command. Free, open-source ${page.languageName} starter template.`,
    path: `/frameworks/${page.id}`,
  });
}

export default async function FrameworkPage(props: PageProps<"/frameworks/[framework]">) {
  const { framework } = await props.params;
  const { page, stack, parts } = loadPage(framework);
  const project = await getFrameworkProject(stack);
  const command = generateStackCommand(stack);
  const builderUrl = generateStackUrlFromState(stack, "");
  const siblings = FRAMEWORK_PAGES.filter(
    (other) => other.language === page.language && other.id !== page.id,
  );
  const url = `${SITE_URL}/frameworks/${page.id}`;
  const included = [
    parts.orm && `${parts.orm} ORM`,
    parts.database && `${parts.database} database`,
    parts.migrations && `${parts.migrations} migrations`,
    `${parts.packageManager} for dependencies`,
    ...parts.addons,
  ].filter((item): item is string => Boolean(item));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: SITE_NAME, item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Frameworks", item: `${SITE_URL}/frameworks` },
      { "@type": "ListItem", position: 3, name: page.name, item: url },
    ],
  };

  return (
    <div className="mx-auto w-full max-w-6xl border-x border-border">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replaceAll("<", "\u003c") }}
      />
      <SectionDivider />

      <header className="flex flex-col gap-4 px-4 py-8 sm:px-6">
        <Link
          href="/frameworks"
          className="builder-focus-ring inline-flex w-fit items-center gap-1.5 rounded-md text-sm text-fd-muted-foreground transition-colors duration-150 hover:text-fd-foreground"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          All frameworks
        </Link>
        <PageHeading accent="Project Generator">{page.name}</PageHeading>
        <p className="max-w-2xl text-[15px] leading-relaxed text-fd-muted-foreground">
          Scaffold a ready-to-run {page.name} API for {page.languageName} with{" "}
          {andList.format(["a clean project structure", ...included.slice(0, 3)])} in one command.
          The code is yours, with no runtime dependency on TriStack.
        </p>
      </header>

      <div className="grid border-t lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="flex min-w-0 flex-col gap-8 px-4 py-6 sm:px-6">
          <section className="flex flex-col gap-3">
            <Label>Create the project</Label>
            <CodeBlock className="my-0">
              <Pre>{command}</Pre>
            </CodeBlock>
            <Link
              href={builderUrl}
              className="builder-focus-ring inline-flex w-fit items-center gap-1 rounded-md text-sm text-fd-muted-foreground transition-colors duration-150 hover:text-fd-foreground"
            >
              Customize this stack in the builder
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </section>

          <section className="flex flex-col gap-3">
            <Label>What&apos;s included</Label>
            <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-fd-muted-foreground">
              <li>{page.name} app with an items CRUD example and a health check</li>
              {included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <Label>Run it</Label>
            <CodeBlock className="my-0">
              <Pre>{[`cd ${stack.projectName}`, ...project.steps].join("\n")}</Pre>
            </CodeBlock>
            <ul className="space-y-1 font-mono text-xs text-fd-muted-foreground">
              {project.routes.map((route) => (
                <li key={route}>{route}</li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="min-w-0 border-t px-4 py-6 sm:px-6 lg:border-t-0 lg:border-l">
          <section className="flex flex-col gap-3">
            <Label>Project structure · {project.fileCount} files</Label>
            <CodeBlock className="my-0">
              <Pre>{project.tree}</Pre>
            </CodeBlock>
          </section>
        </aside>
      </div>

      {siblings.length > 0 && (
        <section className="flex flex-col gap-3 border-t px-4 py-6 sm:px-6">
          <Label>More {page.languageName} frameworks</Label>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {siblings.map((other) => (
              <li key={other.id}>
                <FrameworkCard page={other} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
