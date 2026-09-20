import * as FilesComponents from "fumadocs-ui/components/files";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/layouts/notebook/page";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SectionDivider } from "@/app/(home)/_components/landing/section-divider";
import { LLMCopyButton, ViewOptions } from "@/components/ai/page-actions";
import { getDocumentationMarkdownUrl } from "@/lib/agent-content";
import { getPageImage, source } from "@/lib/source";

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = getDocumentationMarkdownUrl(page.url);

  return (
    <DocsPage toc={page.data.toc} tableOfContent={{ style: "clerk" }} full={page.data.full}>
      <div className="flex flex-col gap-2">
        <div>
          <DocsTitle className="text-3xl font-bold tracking-tight text-fd-foreground sm:text-4xl">
            {page.data.title}
          </DocsTitle>
          <DocsDescription className="mt-2 text-lg text-fd-muted-foreground">
            {page.data.description}
          </DocsDescription>

          {page.data.author && (
            <div className="mt-6 flex items-center gap-2.5 text-sm font-medium text-fd-muted-foreground">
              <span className="flex items-center gap-2">
                By
                {page.data.author.url ? (
                  <Link
                    href={page.data.author.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fd-foreground transition-colors duration-200 hover:text-brand"
                  >
                    {page.data.author.name}
                  </Link>
                ) : (
                  <span className="text-fd-foreground">{page.data.author.name}</span>
                )}
              </span>
              {page.data.date && (
                <>
                  <span className="size-1 rounded-full bg-border/80" />
                  <time dateTime={page.data.date} className="text-fd-muted-foreground/80">
                    {page.data.date}
                  </time>
                </>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 border-b border-border/40 pb-8">
          <LLMCopyButton markdownUrl={markdownUrl} />
          <ViewOptions
            markdownUrl={markdownUrl}
            githubUrl={`https://github.com/AbdullahMukadam/tristack/blob/main/apps/web/content/docs/${page.path}`}
          />
        </div>
      </div>

      <DocsBody className="mt-8 [&_:not(pre)>code]:wrap-break-word">
        <MDX components={{ ...defaultMdxComponents, ...TabsComponents, ...FilesComponents }} />
      </DocsBody>
      <SectionDivider variant="stretch" className="mt-16 opacity-40" />
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({
  params,
}: PageProps<"/docs/[[...slug]]">): Promise<Metadata> {
  const { slug = [] } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();

  const image = getPageImage(page);

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: page.url,
      types: {
        "text/markdown": getDocumentationMarkdownUrl(page.url),
      },
    },
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      type: "article",
      images: image.url,
    },
    twitter: {
      card: "summary_large_image",
      title: page.data.title,
      description: page.data.description,
      images: image.url,
    },
  };
}
