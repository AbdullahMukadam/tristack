import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";

import { OG_SIZE, OgShell, ogColors, ogFonts } from "@/lib/og";
import { blog, formatPostDate } from "@/lib/source";

export const revalidate = false;

export async function GET(_req: Request, { params }: RouteContext<"/og/blog/[...slug]">) {
  const { slug } = await params;
  const page = blog.getPage(slug.slice(0, -1));
  if (!page) notFound();

  return new ImageResponse(
    <OgShell
      path={`~/blog/${page.slugs.join("/")}`}
      section="blog"
      footerRight={formatPostDate(page.data.date)}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "48px 56px",
          flex: 1,
          justifyContent: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            fontSize: "54px",
            fontWeight: 500,
            color: ogColors.text,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {page.data.title}
        </div>

        <div
          style={{
            fontSize: "24px",
            color: ogColors.subtext,
            lineHeight: 1.5,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {page.data.description}
        </div>
      </div>
    </OgShell>,
    { ...OG_SIZE, fonts: await ogFonts() },
  );
}

export function generateStaticParams() {
  return blog.getPages().map((page) => ({
    slug: [...page.slugs, "image.png"],
  }));
}
