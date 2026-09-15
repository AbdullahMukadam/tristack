import { cn } from "@/lib/utils";

type SectionDividerProps = {
  className?: string;
  innerClassName?: string;
  /**
   * `center` (default): full-bleed band with a centered notched rail, used on the
   * landing rail. `stretch`: band width matches its container, rail spans the full
   * width — use inside columned layouts (e.g. docs articles) so notches stay aligned.
   */
  variant?: "center" | "stretch";
  /**
   * `md` (default): 3rem/4rem landing seam. `sm`: 2rem compact seam for tool chrome
   * (e.g. the stack builder).
   */
  size?: "sm" | "md";
};

export function SectionDivider({
  className,
  innerClassName,
  variant = "center",
  size = "md",
}: SectionDividerProps) {
  const notch = cn(
    "absolute rounded-[4px] border border-border bg-fd-background",
    size === "sm" ? "h-3 w-3" : "h-4 w-4 sm:h-5 sm:w-5 sm:rounded-sm",
  );
  const topOffset = size === "sm" ? "-top-1.5" : "-top-2";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative z-10 border-y bg-fd-background",
        size === "sm" ? "h-8" : "h-12 sm:h-16",
        variant === "center" && "md:left-1/2 md:w-screen md:-translate-x-1/2",
        className,
      )}
    >
      <div
        className={cn(
          "relative mx-auto h-full w-full max-w-96 border-x md:max-w-6xl",
          variant === "stretch" && "mx-0 max-w-none",
          innerClassName,
        )}
      >
        <div className={cn(notch, topOffset, "left-0 -translate-x-1/2")} />
        <div className={cn(notch, "bottom-0 left-0 -translate-x-1/2 translate-y-1/2")} />
        <div className={cn(notch, topOffset, "right-0 translate-x-1/2")} />
        <div className={cn(notch, "right-0 bottom-0 translate-x-1/2 translate-y-1/2")} />
      </div>
    </div>
  );
}
