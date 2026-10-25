import { loader, type InferPageType } from "fumadocs-core/source";
import { blog as blogPosts, docs } from "fumadocs-mdx:collections/server";

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
});

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, "image.png"];

  return {
    segments,
    url: `/og/docs/${segments.join("/")}`,
  };
}

export const blog = loader({
  baseUrl: "/blog",
  source: blogPosts.toFumadocsSource(),
});

export type BlogPost = InferPageType<typeof blog>;

export function getBlogPosts() {
  return blog.getPages().sort((a, b) => b.data.date.localeCompare(a.data.date));
}

export function getBlogImage(post: BlogPost) {
  return `/og/blog/${post.slugs.join("/")}/image.png`;
}

export function formatPostDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
