export const dynamic = "force-static";

import type { Metadata } from "next";

import { Faq } from "./_components/landing/faq";
import { Features } from "./_components/landing/features";
import { Hero } from "./_components/landing/hero";
import { LandingFooter } from "./_components/landing/landing-footer";
import { SectionDivider } from "./_components/landing/section-divider";
import { TechStacks } from "./_components/landing/tech-stacks";
import Terminal from "./_components/landing/terminal";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    types: {
      "text/markdown": "/llms.txt",
    },
  },
};

export default function HomePage() {
  return (
    <>
      <div className="mx-auto w-full max-w-6xl border-x border-border px-4 sm:px-6 md:px-0">
        <Hero />
        <SectionDivider />
        <TechStacks />
        <SectionDivider />
        <Terminal />
        <SectionDivider />
        <Features />
        <SectionDivider />
        <Faq />
        <SectionDivider />
      </div>
      <LandingFooter />
    </>
  );
}
