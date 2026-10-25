import * as TabsComponents from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { createPageMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { blog, formatPostDate, getBlogImage } from "@/lib/source";

import { PageShell } from "../../_components/page-shell";

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = blog.getPage([slug]);
  if (!post) notFound();

  const MDX = post.data.body;
  const url = `${SITE_URL}${post.url}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.data.title,
        description: post.data.description,
        datePublished: post.data.date,
        dateModified: post.data.date,
        author: {
          "@type": "Person",
          name: post.data.author.name,
          url: post.data.author.url,
        },
        publisher: { "@id": `${SITE_URL}/#project` },
        image: `${SITE_URL}${getBlogImage(post)}`,
        keywords: post.data.tags.join(", "),
        mainEntityOfPage: url,
        url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: SITE_NAME, item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.data.title, item: url },
        ],
      },
    ],
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replaceAll("<", "\\u003c"),
        }}
      />
      <article className="mx-auto flex w-full max-w-3xl flex-col gap-8">
        <header className="flex flex-col gap-4">
          <Link
            href="/blog"
            className="builder-focus-ring inline-flex w-fit items-center gap-1.5 text-sm text-fd-muted-foreground transition-colors duration-150 hover:text-fd-foreground"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Blog
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {post.data.title}
          </h1>
          <p className="text-lg leading-[1.6] text-fd-muted-foreground">{post.data.description}</p>
          <div className="flex flex-wrap items-center gap-2.5 text-sm text-fd-muted-foreground">
            {post.data.author.url ? (
              <Link
                href={post.data.author.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-fd-foreground transition-colors duration-150 hover:text-primary"
              >
                {post.data.author.name}
              </Link>
            ) : (
              <span className="font-medium text-fd-foreground">{post.data.author.name}</span>
            )}
            <span aria-hidden="true" className="size-1 rounded-full bg-fd-border" />
            <time dateTime={post.data.date}>{formatPostDate(post.data.date)}</time>
          </div>
        </header>
        <div className="prose max-w-none">
          <MDX components={{ ...defaultMdxComponents, ...TabsComponents }} />
        </div>
      </article>
    </PageShell>
  );
}

export function generateStaticParams() {
  return blog.getPages().map((post) => ({ slug: post.slugs[0] }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = blog.getPage([slug]);
  if (!post) notFound();

  const metadata = createPageMetadata({
    title: post.data.title,
    description: post.data.description,
    path: post.url,
    image: getBlogImage(post),
    type: "article",
  });

  return {
    ...metadata,
    authors: [{ name: post.data.author.name, url: post.data.author.url }],
    keywords: post.data.tags,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: post.data.date,
      authors: [post.data.author.name],
      tags: post.data.tags,
    },
  };
}
