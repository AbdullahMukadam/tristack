import Link from "next/link";
import type { ReactNode } from "react";

import type { FrameworkPage } from "@/lib/framework-pages";
import { cn } from "@/lib/utils";

import { TechIcon } from "../../new/_components/tech-icon";

export function FrameworkIcon({ page }: { page: FrameworkPage }) {
  return (
    <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-fd-muted/40">
      <TechIcon
        icon={page.icon}
        svgl={page.svgl}
        name={page.name}
        className={cn("size-5", page.iconClassName)}
      />
    </span>
  );
}

export function FrameworkCard({ page }: { page: FrameworkPage }) {
  return (
    <Link
      href={`/frameworks/${page.id}`}
      className="builder-focus-ring flex h-full items-center gap-3 rounded-md border border-border p-3 transition-colors duration-150 hover:bg-fd-muted/40"
    >
      <FrameworkIcon page={page} />
      <span className="flex min-w-0 flex-col">
        <span className="text-sm font-medium text-fd-foreground">{page.name}</span>
        <span className="truncate text-xs text-fd-muted-foreground">{page.description}</span>
      </span>
    </Link>
  );
}

export function PageHeading({ children, accent }: { children: ReactNode; accent: string }) {
  return (
    <h1 className="font-sans gambarino text-3xl font-normal tracking-tight sm:text-5xl">
      {children}{" "}
      <span className="text-brand [text-shadow:0_0_14px_var(--brand-glow)]">{accent}</span>.
    </h1>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return <h2 className="text-sm font-semibold text-fd-foreground">{children}</h2>;
}
