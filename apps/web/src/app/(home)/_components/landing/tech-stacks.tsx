"use client";

import Link from "fumadocs-core/link";

import { SvglIcon } from "@/components/ui/svgl-icon";

const languages = ["Python", "Go", "Rust"];
const tools = ["UV", "Docker", "PostgreSQL"];

function Square({ media, svgl }: { media: string; svgl: string }) {
  return (
    <Link
      href="/new"
      aria-label={media}
      className="group flex size-10 items-center justify-center rounded-lg border border-border bg-fd-muted/40 transition-colors hover:bg-fd-muted"
    >
      <SvglIcon
        svgl={svgl}
        name={media}
        className="size-5 opacity-90 contrast-125 grayscale transition-all duration-200 group-hover:opacity-100 group-hover:grayscale-0"
      />
    </Link>
  );
}

export function TechStacks() {
  return (
    <section className="flex w-full max-md:px-0 flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:gap-8 sm:py-8">
      <p className="text-sm text-fd-muted-foreground sm:max-w-xs">
        One command, every stack — best-practice defaults for{" "}
        <span className="font-medium text-fd-foreground">Python, Go, and Rust</span>.
      </p>

      <div className="flex items-center gap-2 sm:gap-0">
        <div className="flex items-center gap-2">
          {languages.map((name) => (
            <Square key={name} media={name} svgl={name} />
          ))}
        </div>

        <span aria-hidden className="mx-3 hidden h-10 w-px bg-border sm:block" />

        <div className="flex items-center gap-2">
          {tools.map((name) => (
            <Square key={name} media={name} svgl={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
