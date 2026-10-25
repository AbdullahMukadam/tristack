export const dynamic = "force-static";

import { Newspaper } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { createPageMetadata } from "@/lib/metadata";
import { formatPostDate, getBlogPosts } from "@/lib/source";

import { PageHeader } from "../_components/page-header";
import { PageShell } from "../_components/page-shell";

const description =
  "Hands-on guides for building Python, Go, and Rust backends: project structure, ORMs, migrations, and deployment.";

export const metadata: Metadata = createPageMetadata({
  title: "Blog",
  description,
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getBlogPosts();

  return (
    <PageShell>
      <PageHeader icon={Newspaper} title="Blog" description={description} />
      <ul className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <li key={post.url}>
            <Link
              href={post.url}
              className="builder-focus-ring flex h-full flex-col gap-3 rounded-md border p-5 transition-colors duration-150 hover:bg-fd-muted/40"
            >
              <time dateTime={post.data.date} className="text-xs text-fd-muted-foreground">
                {formatPostDate(post.data.date)}
              </time>
              <h2 className="text-lg font-semibold leading-snug tracking-tight">
                {post.data.title}
              </h2>
              <p className="text-sm leading-[1.6] text-fd-muted-foreground">
                {post.data.description}
              </p>
              {post.data.tags.length > 0 && (
                <div className="mt-auto flex flex-wrap gap-2 pt-1">
                  {post.data.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border px-2 py-0.5 text-xs text-fd-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
