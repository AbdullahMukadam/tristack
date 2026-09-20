import { CheckCircle2, InfoIcon } from "lucide-react";
import { type KeyboardEvent, useRef } from "react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { StackState } from "@/lib/constant";
import { TECH_OPTIONS } from "@/lib/constant";
import { CATEGORY_ORDER } from "@/lib/stack-utils";
import type { TechCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

import { TechIcon } from "../tech-icon";
import {
  getCategoryDisplayName,
  getDisabledReason,
  getOptionsForStack,
  isOptionCompatible,
} from "../utils";

type TechCategoriesProps = {
  mode: "desktop" | "mobile";
  stack: StackState;
  compatibilityNotes: Record<string, { hasIssue: boolean; notes: string[] }>;
  onSelect: (category: keyof typeof TECH_OPTIONS, techId: string) => void;
  showAllCategories?: boolean;
  searchQuery?: string;
};

function getIsSelected(stack: StackState, category: keyof StackState, techId: string) {
  const currentValue = stack[category];

  if (category === "addons") {
    return ((currentValue as string[]) || []).includes(techId);
  }

  return currentValue === techId;
}

// Tech ids like "none" repeat across categories, so refs must be keyed per category.
function optionRefKey(categoryKey: string, techId: string) {
  return `${categoryKey}:${techId}`;
}

export function TechCategories({
  mode,
  stack,
  compatibilityNotes,
  onSelect,
  showAllCategories = false,
  searchQuery = "",
}: TechCategoriesProps) {
  const isDesktop = mode === "desktop";
  const categories = showAllCategories ? CATEGORY_ORDER : [CATEGORY_ORDER[0]];
  const query = searchQuery.toLowerCase().trim();
  const optionRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  // Options in a category that match the search query (includes disabled ones).
  const getFilteredOptions = (categoryKey: string) =>
    getOptionsForStack(stack, categoryKey as keyof typeof TECH_OPTIONS).filter(
      (tech) =>
        !query ||
        tech.name.toLowerCase().includes(query) ||
        tech.description.toLowerCase().includes(query),
    );

  // Options the keyboard can actually land on (matching + enabled).
  const getNavigableOptions = (categoryKey: string) =>
    getFilteredOptions(categoryKey).filter((tech) =>
      isOptionCompatible(stack, categoryKey as TechCategory, tech.id),
    );

  const visibleCategories = categories.filter(
    (categoryKey) => getFilteredOptions(categoryKey).length > 0,
  );
  const hasMatches = visibleCategories.length > 0;

  const focusOption = (categoryKey: string, techId: string) => {
    optionRefs.current.get(optionRefKey(categoryKey, techId))?.focus();
  };

  // Focuses the first enabled option in the nearest category in the given direction.
  // Returns false when there is nowhere to go.
  const moveToCategory = (fromIndex: number, step: 1 | -1) => {
    for (let i = fromIndex + step; i >= 0 && i < visibleCategories.length; i += step) {
      const categoryKey = visibleCategories[i];
      const first = getNavigableOptions(categoryKey)[0];
      if (first) {
        focusOption(categoryKey, first.id);
        return true;
      }
    }
    return false;
  };

  // Position is read from the focused button itself, so there is no index state
  // that can drift out of sync with filtering or disabled options.
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;

    const target = (e.target as HTMLElement).closest<HTMLElement>("[data-category][data-tech-id]");
    const categoryKey = target?.dataset.category;
    const techId = target?.dataset.techId;
    if (!categoryKey || !techId) return;

    const categoryIndex = visibleCategories.findIndex((key) => key === categoryKey);
    if (categoryIndex === -1) return;

    switch (e.key) {
      case "ArrowDown":
      case "ArrowUp": {
        e.preventDefault();
        const options = getNavigableOptions(categoryKey);
        const currentIndex = options.findIndex((tech) => tech.id === techId);
        const next = options[currentIndex + (e.key === "ArrowDown" ? 1 : -1)];
        if (next) focusOption(categoryKey, next.id);
        break;
      }
      case "ArrowRight":
      case "ArrowLeft": {
        e.preventDefault();
        moveToCategory(categoryIndex, e.key === "ArrowRight" ? 1 : -1);
        break;
      }
      case "Tab": {
        // Jump between categories; at either end fall through to native Tab.
        if (moveToCategory(categoryIndex, e.shiftKey ? -1 : 1)) {
          e.preventDefault();
        }
        break;
      }
      // Enter / Space are handled natively by the <button>, which fires onClick.
    }
  };

  return (
    <div onKeyDown={handleKeyDown}>
      {!hasMatches && query && (
        <div className="flex items-center justify-center py-12 text-center">
          <p className="text-sm text-fd-muted-foreground">No technologies match "{searchQuery}"</p>
        </div>
      )}
      {visibleCategories.map((categoryKey) => {
        const filteredOptions = getFilteredOptions(categoryKey);
        const categoryDisplayName = getCategoryDisplayName(categoryKey);

        return (
          <section
            key={`${mode}-${categoryKey}`}
            id={isDesktop ? `section-${categoryKey}` : `section-mobile-${categoryKey}`}
            className={cn("mb-6 scroll-mt-4", isDesktop && "sm:mb-8")}
          >
            <div className="mb-3 flex items-center gap-2 text-fd-muted-foreground">
              <h2 className="text-sm font-semibold tracking-tight text-fd-foreground">
                {categoryDisplayName}
              </h2>
              <span aria-hidden="true" className="h-px flex-1 bg-fd-border" />
              {compatibilityNotes[categoryKey]?.hasIssue && (
                <Tooltip delay={100}>
                  <TooltipTrigger
                    render={
                      <InfoIcon className="h-3.5 w-3.5 shrink-0 cursor-help text-fd-muted-foreground transition-colors duration-150 hover:text-fd-foreground" />
                    }
                  />
                  <TooltipContent side="top" align="start">
                    <ul className="list-disc space-y-1 pl-4 text-xs">
                      {compatibilityNotes[categoryKey].notes.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>

            <div
              className={cn(
                "grid gap-2",
                isDesktop ? "grid-cols-1 @md:grid-cols-2 @min-[864px]:grid-cols-3" : "grid-cols-1",
                isDesktop && "auto-rows-fr",
              )}
            >
              {filteredOptions.map((tech) => {
                const category = categoryKey as keyof StackState;
                const isSelected = getIsSelected(stack, category, tech.id);
                const isDisabled = !isOptionCompatible(stack, categoryKey as TechCategory, tech.id);
                const isExperimental = "experimental" in tech && tech.experimental;
                const disabledReason = getDisabledReason(
                  stack,
                  categoryKey as TechCategory,
                  tech.id,
                );

                const card = (
                  <button
                    ref={(el) => {
                      const refKey = optionRefKey(categoryKey, tech.id);
                      if (el) {
                        optionRefs.current.set(refKey, el);
                      } else {
                        optionRefs.current.delete(refKey);
                      }
                    }}
                    type="button"
                    data-category={categoryKey}
                    data-tech-id={tech.id}
                    disabled={isDisabled}
                    aria-disabled={isDisabled}
                    aria-pressed={isSelected}
                    aria-label={`${tech.name}${isExperimental ? ". Experimental" : ""}${isDisabled && disabledReason ? `. ${disabledReason}` : ""}`}
                    className={cn(
                      "builder-focus-ring group relative h-full w-full rounded-md border p-3 text-left transition-colors duration-150",
                      isDisabled
                        ? "cursor-not-allowed border-dashed opacity-60"
                        : isSelected
                          ? "border-brand/40 bg-primary/5"
                          : "border-fd-border bg-transparent hover:bg-primary/5",
                    )}
                    onClick={() => {
                      if (isDisabled) {
                        return;
                      }
                      onSelect(categoryKey as keyof typeof TECH_OPTIONS, tech.id);
                    }}
                  >
                    <div className="flex items-start">
                      <div className="min-w-0 grow">
                        <div
                          className={cn(
                            "flex items-center justify-between gap-2",
                            tech.default && !isSelected && "pr-14",
                          )}
                        >
                          <div className="flex min-w-0 items-center">
                            {(tech.icon !== "" || "svgl" in tech) && (
                              <TechIcon
                                icon={tech.icon}
                                svgl={"svgl" in tech ? tech.svgl : undefined}
                                name={tech.name}
                                className={cn(
                                  "mr-1.5 h-4 w-4 shrink-0",
                                  "className" in tech ? tech.className : undefined,
                                )}
                              />
                            )}
                            <span
                              className={cn(
                                "break-words text-[13px] font-medium leading-[1.55] transition-colors duration-150",
                                isSelected
                                  ? "text-fd-foreground"
                                  : "text-fd-muted-foreground group-hover:text-fd-foreground",
                              )}
                            >
                              {tech.name}
                            </span>
                            {isExperimental && (
                              <span className="ml-1.5 shrink-0 rounded-full border border-amber-500/30 bg-amber-500/10 px-1.5 py-0.5 text-[10px] text-amber-700 leading-none dark:text-amber-300">
                                Experimental
                              </span>
                            )}
                          </div>
                          {isSelected && (
                            <CheckCircle2
                              aria-hidden="true"
                              className="h-3.5 w-3.5 shrink-0 text-brand"
                            />
                          )}
                        </div>
                        <p className="mt-0.5 text-xs text-fd-muted-foreground leading-[1.5]">
                          {tech.description}
                        </p>
                        {isDisabled && disabledReason && (
                          <p className="mt-2 text-xs text-destructive/90 leading-tight">
                            {disabledReason}
                          </p>
                        )}
                      </div>
                    </div>
                    {tech.default && !isSelected && (
                      <span className="absolute top-2 right-2 ml-2 shrink-0 text-[10px] font-medium text-fd-muted-foreground">
                        Default
                      </span>
                    )}
                  </button>
                );

                if (isDesktop && disabledReason) {
                  return (
                    <Tooltip key={`${mode}-${categoryKey}-${tech.id}`} delay={100}>
                      <TooltipTrigger render={card} />
                      <TooltipContent side="top" align="center" className="max-w-xs">
                        <p className="text-xs">{disabledReason}</p>
                      </TooltipContent>
                    </Tooltip>
                  );
                }

                return (
                  <div key={`${mode}-${categoryKey}-${tech.id}`} className="h-full">
                    {card}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
      <div className="h-24" />
    </div>
  );
}
