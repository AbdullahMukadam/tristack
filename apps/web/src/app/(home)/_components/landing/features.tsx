import { BadgeCheck, Braces, FileJson, Layers, MonitorUp, Wand2 } from "lucide-react";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import { SectionTitle } from "./section-header";

const features = [
  {
    icon: Wand2,
    area: "md:[grid-area:1/1/2/13] lg:[grid-area:1/1/2/6]",
    title: "One command, many stacks",
    description:
      "A single CLI scaffolds Python, Go, and Rust projects with best-practice defaults — current best and the tooling already wired.",
  },
  {
    icon: Layers,
    area: "md:[grid-area:2/1/3/7] lg:[grid-area:1/6/2/9]",
    title: "Roll your own stack",
    description:
      "Pick frameworks, ORMs, databases, and tooling. TriStack generates a stack assembled from your choices, not a fixed recipe.",
  },
  {
    icon: MonitorUp,
    area: "md:[grid-area:2/7/3/13] lg:[grid-area:1/9/2/13]",
    title: "Preview in the browser",
    description:
      "The Stack Builder at /new previews your full stack with every dependency visible and a shareable link for your team.",
  },
  {
    icon: FileJson,
    area: "md:[grid-area:3/1/4/13] lg:[grid-area:2/1/3/5]",
    title: "Reproducible by default",
    description:
      "Every scaffold saves its exact stack to tristack.jsonc with a reproducible command, so the whole team can rebuild identical projects.",
  },
  {
    icon: Braces,
    area: "md:[grid-area:4/1/5/7] lg:[grid-area:2/5/3/8]",
    title: "Structured JSON commands",
    description:
      "Non-interactive, machine-readable JSON output makes TriStack the right tool for scripts and automation.",
  },
  {
    icon: BadgeCheck,
    area: "md:[grid-area:4/7/5/13] lg:[grid-area:2/8/3/13]",
    title: "Batteries included",
    description:
      "Typed configs, database setup, lint, format, and CI checked in from day one — consistent across every stack.",
  },
] satisfies { icon: typeof Wand2; area: string; title: string; description: string }[];

export function Features() {
  return (
    <section className="max-md:px-0 px-4 py-16 sm:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <SectionTitle accent="without the setup.">
          A solid starting point, rolled your way
        </SectionTitle>
        <p className="max-w-xl text-sm leading-relaxed text-fd-muted-foreground sm:text-base">
          Built for Python first, with Go and Rust on the way. Every scaffold shares the same
          defaults so moving between stacks feels familiar.
        </p>
      </div>

      <BentoGrid className="mt-10">
        {features.map((feature) => (
          <BentoGridItem
            key={feature.title}
            area={feature.area}
            icon={<feature.icon className="size-4" />}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
