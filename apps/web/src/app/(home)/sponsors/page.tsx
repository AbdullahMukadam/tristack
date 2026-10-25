export const dynamic = "force-static";

import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/metadata";
import { fetchSponsors } from "@/lib/sponsors";

import { SponsorsPage } from "./_components/sponsors-page";

export const metadata: Metadata = createPageMetadata({
  title: "Sponsors",
  description:
    "The companies and developers funding TriStack, the open-source scaffolding CLI for Python, Go, and Rust.",
  path: "/sponsors",
});

export default async function Sponsors() {
  const sponsorsData = await fetchSponsors();
  return <SponsorsPage sponsorsData={sponsorsData} />;
}
