import type { Metadata } from "next";
import { Suspense } from "react";

import { SITE_URL } from "@/lib/site";

import { StackBuilder } from "./_components/stack-builder";

export const metadata: Metadata = {
  title: "Stack Builder - TriStack",
  description: "Interactive Ui to roll your own stack",
  alternates: {
    canonical: "/new",
  },
  openGraph: {
    title: "Stack Builder - TriStack",
    description: "Interactive Ui to roll your own stack",
    url: `${SITE_URL}/new`,
    images: [
      {
        url: `${SITE_URL}/og/site/new.png`,
        width: 1200,
        height: 630,
        alt: "TriStack Stack Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stack Builder - TriStack",
    description: "Interactive Ui to roll your own stack",
    images: [`${SITE_URL}/og/site/new.png`],
  },
};

export default function FullScreenStackBuilder() {
  return (
    <Suspense>
      <div className="mx-auto w-full max-w-6xl border-x border-border">
        <StackBuilder />
      </div>
    </Suspense>
  );
}
