import type { Metadata } from "next";

import { SITE_NAME, SITE_OG_IMAGE, SITE_OG_IMAGE_ALT, X_HANDLE } from "./site";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
}

export function createPageMetadata({
  title,
  description,
  path,
  image = SITE_OG_IMAGE,
  imageAlt = image === SITE_OG_IMAGE ? SITE_OG_IMAGE_ALT : `${title} | ${SITE_NAME}`,
  type = "website",
}: PageMetadataOptions): Metadata {
  const socialTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      site: X_HANDLE,
      creator: X_HANDLE,
      images: [image],
    },
  };
}
