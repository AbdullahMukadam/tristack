import { CheckCircle2, InfoIcon } from "lucide-react";

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
};

function getIsSelected(stack: StackState, category: keyof StackState, techId: string) {
  const currentValue = stack[category];

  if (category === "addons") {
    return ((currentValue as string[]) || []).includes(techId);
  }

  return currentValue === techId;
}

export function TechCategories({
  mode,
  stack,
  compatibilityNotes,
  onSelect,
  showAllCategories = false,
}: TechCategoriesProps) {
  const isDesktop = mode === "desktop";
  const categories = showAllCategories ? CATEGORY_ORDER : [CATEGORY_ORDER[0]];

  return (
    <>
      {categories.map((categoryKey) => {
        const categoryOptions = getOptionsForStack(stack, categoryKey as keyof typeof TECH_OPTIONS);
        const categoryDisplayName = getCategoryDisplayName(categoryKey);

        if (categoryOptions.length === 0) return null;

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
              {categoryOptions.map((tech) => {
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
                    type="button"
                    disabled={isDisabled}
                    aria-disabled={isDisabled}
                    aria-pressed={isSelected}
                    aria-label={`${tech.name}${isExperimental ? ". Experimental" : ""}${isDisabled && disabledReason ? `. ${disabledReason}` : ""}`}
                    className={cn(
                      "builder-focus-ring group relative h-full w-full rounded-md border p-3 text-left transition-colors duration-150",
                      isDisabled
                        ? "cursor-not-allowed border-dashed opacity-60"
                        : isSelected
                          ? "border-fd-border bg-primary/5"
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
                            {tech.icon !== "" && (
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
                              className="h-3.5 w-3.5 shrink-0 text-primary"
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
    </>
  );
}
