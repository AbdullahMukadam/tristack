import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

/** The one page-heading shape shared by the sub-pages (e.g. /sponsors). */
export function PageHeader({
  icon: Icon,
  title,
  description,
  count,
  meta,
  actions,
}: {
  icon: LucideIcon;
  title: string;
  description?: string;
  count?: number;
  meta?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <h1 className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight">
          <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-primary" />
          {title}
        </h1>
        {count !== undefined && (
          <span className="text-sm text-fd-muted-foreground tabular-nums">{count}</span>
        )}
        {meta && <span className="text-sm text-fd-muted-foreground">{meta}</span>}
        {actions}
      </div>
      {description && (
        <p className="text-[15px] leading-[1.6] text-fd-muted-foreground">{description}</p>
      )}
    </div>
  );
}
