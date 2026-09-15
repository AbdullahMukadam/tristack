import Link from "fumadocs-core/link";
import { ArrowUpRight } from "lucide-react";

import { BadgeTag } from "@/components/badge-tag";

import HeroGlow from "./hero-glow";
import { BrandButton, NeutralButton } from "./round-button";

export function Hero() {
  return (
    <section className="relative flex max-md:px-0 items-center justify-center px-4 py-20">
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center">
        <Link href="/docs">
          <BadgeTag version={"v1.0.5"} text="Scaffolds for Python, Go & Rust" />
        </Link>

        <h1 className="text-center text-3xl font-gambarino leading-tight font-bold tracking-tight sm:text-5xl md:text-6xl">
          Your <span className="text-brand [text-shadow:0_0_14px_var(--brand-glow)]">Stack</span>,
          Scaffolds in{" "}
          <span className="text-brand [text-shadow:0_0_14px_var(--brand-glow)]">Seconds</span>
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-fd-muted-foreground sm:text-lg">
          Scaffold projects for Python, Go, and Rust. Choose your framework, ORM, and database, then
          ship instantly with zero lock-in.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <BrandButton
            href="/new"
            label={
              <>
                Build your stack
                <ArrowUpRight className="size-4" />
              </>
            }
          />
          <NeutralButton href="/docs" label="Read the docs" />
        </div>

        <p className="mt-1 text-xs text-fd-muted-foreground/70">
          or install the CLI with{" "}
          <code className="rounded-md bg-fd-muted px-1.5 py-0.5 font-mono text-[0.75rem] text-fd-foreground">
            uvx tristack
          </code>
        </p>
      </div>
      <HeroGlow />
    </section>
  );
}
