import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { PageHeader } from "./page-header";
import { PageShell } from "./page-shell";

export const trustPageLinkClass =
  "builder-focus-ring underline decoration-fd-border underline-offset-4 transition-colors duration-150 hover:text-primary";

export function TrustPage({
  icon,
  title,
  description,
  children,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <PageShell>
      <PageHeader icon={icon} title={title} description={description} />
      <article className="grid gap-8 md:grid-cols-2">{children}</article>
    </PageShell>
  );
}

export function TrustSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-md border p-5">
      <h2 className="mb-4 text-sm font-semibold text-fd-foreground">{title}</h2>
      <div className="space-y-4 text-[13px] text-fd-foreground leading-[1.7]">{children}</div>
    </section>
  );
}
