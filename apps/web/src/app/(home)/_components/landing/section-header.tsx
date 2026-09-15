import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-medium text-fd-muted-foreground">{children}</p>;
}

export function SectionTitle({ children, accent }: { children: ReactNode; accent?: ReactNode }) {
  return (
    <h2 className="max-w-2xl text-3xl leading-tight font-semibold tracking-tight text-primary sm:text-4xl lg:text-5xl lg:leading-tight">
      {children}
      {accent ? (
        <span className="ml-2 inline-block translate-y-1 font-gambarino text-4xl font-normal text-brand [text-shadow:0_0_16px_var(--brand-glow)] sm:text-5xl lg:text-6xl">
          {accent}
        </span>
      ) : null}
    </h2>
  );
}
