"use client";

import { Slot, Slottable } from "@radix-ui/react-slot";
import * as React from "react";

import { cn } from "@/lib/utils";

type BrandButtonProps = {
  href?: string;
  label: React.ReactNode;
  className?: string;
  innerClassName?: string;
  asChild?: boolean;
} & React.ComponentPropsWithoutRef<"a">;

const BrandButton = React.forwardRef<HTMLAnchorElement, BrandButtonProps>(
  ({ href, label, className, innerClassName, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
        ref={ref}
        href={href}
        className={cn(
          "inline-flex rounded-lg p-0.5 bg-brand-gradient shadow-[0_0_12px_var(--brand-glow)] transition duration-200 hover:shadow-[0_0_24px_var(--brand-glow)] hover:scale-[1.01] active:scale-[0.98]",
          className,
        )}
        {...props}
      >
        <Slottable>{children}</Slottable>
        <span
          className={cn(
            "inline-flex w-full items-center justify-center gap-1 rounded-md bg-brand-gradient px-1.5 py-1.5 text-xs font-semibold text-brand-on-accent ring-1 ring-brand-inset [text-shadow:0_1px_2px_rgb(0_0_0/0.35)] sm:px-3 sm:py-1.5 sm:text-sm",
            innerClassName,
          )}
        >
          {label}
        </span>
      </Comp>
    );
  },
);
BrandButton.displayName = "BrandButton";

type NeutralButtonProps = {
  href?: string;
  label: React.ReactNode;
  className?: string;
  innerClassName?: string;
  asChild?: boolean;
} & React.ComponentPropsWithoutRef<"a">;

const NeutralButton = React.forwardRef<HTMLAnchorElement, NeutralButtonProps>(
  ({ href, label, className, innerClassName, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
        ref={ref}
        href={href}
        className={cn(
          "inline-flex rounded-lg p-0.5 bg-fd-muted shadow-sm transition duration-200 hover:shadow-md hover:scale-[1.01] active:scale-[0.98]",
          className,
        )}
        {...props}
      >
        <Slottable>{children}</Slottable>
        <span
          className={cn(
            "inline-flex w-full items-center justify-center gap-1 rounded-md bg-fd-background px-1.5 py-1.5 text-xs font-medium text-fd-muted-foreground ring-1 ring-border sm:px-3 sm:py-1.5 sm:text-sm",
            innerClassName,
          )}
        >
          {label}
        </span>
      </Comp>
    );
  },
);
NeutralButton.displayName = "NeutralButton";

export { BrandButton, NeutralButton };
