"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { getCategoryDisplayName } from "../utils";
import type { CategoryProgressItem } from "./use-stack-builder";

type CategoryNavProps = {
  progress: CategoryProgressItem[];
  idPrefix: string;
};

function getScrollViewport(el: HTMLElement) {
  return el.closest<HTMLElement>('[data-slot="scroll-area-viewport"]');
}

export function scrollToCategorySection(idPrefix: string, category: string, retryFrames = 60) {
  const section = document.getElementById(`${idPrefix}-${category}`);
  if (!section) {
    if (retryFrames > 0) {
      requestAnimationFrame(() => scrollToCategorySection(idPrefix, category, retryFrames - 1));
    }
    return;
  }
  const viewport = getScrollViewport(section);
  if (!viewport) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  const top =
    section.getBoundingClientRect().top -
    viewport.getBoundingClientRect().top +
    viewport.scrollTop -
    16;
  viewport.scrollTo({ top, behavior: "smooth" });
}

export function CategoryNav({ progress, idPrefix }: CategoryNavProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sections = progress
      .map(({ category }) => document.getElementById(`${idPrefix}-${category}`))
      .filter((el): el is HTMLElement => !!el);
    const viewport = sections[0] ? getScrollViewport(sections[0]) : null;
    if (!viewport) return;

    const onScroll = () => {
      if (viewport.clientHeight === 0) return;
      const atBottom = viewport.scrollTop + viewport.clientHeight >= viewport.scrollHeight - 2;
      if (atBottom) {
        setActiveCategory(progress[progress.length - 1]?.category ?? null);
        return;
      }
      const viewportTop = viewport.getBoundingClientRect().top;
      let current = progress[0]?.category ?? null;
      for (const section of sections) {
        if (section.getBoundingClientRect().top - viewportTop <= 80) {
          current = section.id.slice(idPrefix.length + 1) as typeof current;
        }
      }
      setActiveCategory(current);
    };

    onScroll();
    viewport.addEventListener("scroll", onScroll, { passive: true });
    return () => viewport.removeEventListener("scroll", onScroll);
  }, [progress, idPrefix]);

  useEffect(() => {
    const rail = railRef.current;
    if (!activeCategory || !rail) return;
    const chip = rail.querySelector<HTMLElement>(`[data-category="${activeCategory}"]`);
    if (!chip) return;
    const railRect = rail.getBoundingClientRect();
    const chipRect = chip.getBoundingClientRect();
    if (chipRect.left < railRect.left) {
      rail.scrollBy({ left: chipRect.left - railRect.left - 24, behavior: "smooth" });
    } else if (chipRect.right > railRect.right) {
      rail.scrollBy({ left: chipRect.right - railRect.right + 24, behavior: "smooth" });
    }
  }, [activeCategory]);

  return (
    <div
      ref={railRef}
      className="-my-1 flex items-center gap-1.5 overflow-x-auto overscroll-x-contain px-1 py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {progress.map(({ category, done, selected }) => {
        const isActive = category === activeCategory;
        return (
          <button
            key={category}
            type="button"
            data-category={category}
            onClick={() => scrollToCategorySection(idPrefix, category)}
            title={`Jump to ${getCategoryDisplayName(category)}`}
            className={cn(
              "builder-focus-ring relative pointer-coarse:min-h-8 flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors duration-200",
              isActive
                ? "text-foreground"
                : done
                  ? "text-foreground/85 hover:text-foreground hover:bg-muted/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
            )}
          >
            {isActive && (
              <motion.div
                layoutId="nav-active-pill"
                className="absolute inset-0 rounded-lg bg-primary/10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <span
                aria-hidden="true"
                className={cn(
                  "h-1.5 w-1.5 shrink-0 rounded-full transition-colors",
                  done ? "bg-primary" : "bg-muted-foreground/30",
                  isActive && !done && "bg-primary/50",
                )}
              />
              {getCategoryDisplayName(category)}
              {selected > 1 && <span className="tabular-nums opacity-60">({selected})</span>}
            </span>
          </button>
        );
      })}
    </div>
  );
}
