export const dynamic = "force-static";

import type { Metadata } from "next";

import { SITE_URL } from "@/lib/site";
import { fetchSponsors } from "@/lib/sponsors";

import { SponsorsPage } from "./_components/sponsors-page";

export const metadata: Metadata = {
  title: "Sponsors - TriStack",
  description: "The companies and developers funding TriStack development",
  alternates: {
    canonical: "/sponsors",
  },
  openGraph: {
    title: "Sponsors - TriStack",
    description: "The companies and developers funding TriStack development",
    url: `${SITE_URL}/sponsors`,
    images: [
      {
        url: `${SITE_URL}/og/site/sponsors.png`,
        width: 1200,
        height: 630,
        alt: "TriStack Sponsors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sponsors - TriStack",
    description: "The companies and developers funding TriStack development",
    images: [`${SITE_URL}/og/site/sponsors.png`],
  },
};

export default async function Sponsors() {
  const sponsorsData = await fetchSponsors();
  return <SponsorsPage sponsorsData={sponsorsData} />;
}
