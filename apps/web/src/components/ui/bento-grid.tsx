"use client";

import * as React from "react";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

type BentoGridProps = {
  className?: string;
  children: React.ReactNode;
};

function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <ul className={cn("grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-4 lg:gap-4", className)}>
      {children}
    </ul>
  );
}

type BentoGridItemProps = {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
};

function BentoGridItem({ area, icon, title, description }: BentoGridItemProps) {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-2xl border border-border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          variant="brand"
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-fd-muted/10 p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="flex w-fit items-center justify-center rounded-md border border-border bg-brand-subtle p-2 text-brand-ink">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold tracking-tight text-balance text-fd-foreground md:text-2xl/[1.875rem]">
                {title}
              </h3>
              <p className="text-sm/[1.125rem] text-fd-muted-foreground md:text-base/[1.375rem]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export { BentoGrid, BentoGridItem };
