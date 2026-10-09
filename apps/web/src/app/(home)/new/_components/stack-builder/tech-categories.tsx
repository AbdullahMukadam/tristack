import { Check, InfoIcon } from "lucide-react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { StackState } from "@/lib/constant";
import { TECH_OPTIONS } from "@/lib/constant";
import { CATEGORY_ORDER } from "@/lib/stack-utils";
import type { TechCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

import { TechIcon } from "../tech-icon";
import { getDisabledReason, getOptionsForStack, isOptionCompatible } from "../utils";

const CATEGORY_META = {
  language: { label: "Language", hint: "What your project is written in" },
  framework: { label: "Framework", hint: "The web framework for your app" },
  frontend: { label: "Frontend", hint: "Optional server-rendered UI" },
  orm: { label: "ORM", hint: "How your code talks to the database" },
  migrations: { label: "Migrations", hint: "Keeps the database schema in sync" },
  database: { label: "Database", hint: "Where your data lives" },
  packageManager: { label: "Package manager", hint: "Installs and locks dependencies" },
  addons: { label: "Add-ons", hint: "Pick as many as you like" },
  git: { label: "Git", hint: "Initialize a repository" },
  install: { label: "Install", hint: "Install dependencies after creating" },
} satisfies Record<TechCategory, { label: string; hint: string }>;

type TechCategoriesProps = {
  stack: StackState;
  compatibilityNotes: Record<string, { hasIssue: boolean; notes: string[] }>;
  onSelect: (category: keyof typeof TECH_OPTIONS, techId: string) => void;
};

function getIsSelected(stack: StackState, category: keyof StackState, techId: string) {
  const currentValue = stack[category];
  if (category === "addons") {
    return ((currentValue as string[]) || []).includes(techId);
  }
  return currentValue === techId;
}

export function TechCategories({ stack, compatibilityNotes, onSelect }: TechCategoriesProps) {
  return (
    <div className="divide-y">
      {CATEGORY_ORDER.map((categoryKey) => {
        const category = categoryKey as TechCategory;
        const options = getOptionsForStack(stack, categoryKey);
        if (options.length === 0) return null;
        const meta = CATEGORY_META[category];
        const notes = compatibilityNotes[categoryKey];

        return (
          <section
            key={categoryKey}
            aria-labelledby={`category-${categoryKey}`}
            className="grid gap-2.5 py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-4"
          >
            <div>
              <h2
                id={`category-${categoryKey}`}
                className="flex items-center gap-1.5 text-sm font-medium text-fd-foreground"
              >
                {meta.label}
                {notes?.hasIssue && (
                  <Tooltip delay={100}>
                    <TooltipTrigger
                      render={
                        <InfoIcon
                          aria-label="Compatibility notes"
                          className="h-3.5 w-3.5 cursor-help text-amber-600 dark:text-amber-400"
                        />
                      }
                    />
                    <TooltipContent side="top" align="start" className="max-w-xs">
                      <ul className="list-disc space-y-1 pl-4 text-xs">
                        {notes.notes.map((note) => (
                          <li key={note}>{note}</li>
                        ))}
                      </ul>
                    </TooltipContent>
                  </Tooltip>
                )}
              </h2>
              <p className="mt-0.5 text-xs text-fd-muted-foreground">{meta.hint}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {options.map((tech) => {
                const isSelected = getIsSelected(stack, categoryKey as keyof StackState, tech.id);
                const isDisabled = !isOptionCompatible(stack, category, tech.id);
                const isExperimental = "experimental" in tech && tech.experimental;
                const disabledReason = isDisabled
                  ? getDisabledReason(stack, category, tech.id)
                  : null;
                const hasIcon = tech.icon !== "" || "svgl" in tech;

                return (
                  <Tooltip key={tech.id} delay={300}>
                    <TooltipTrigger
                      render={
                        <button
                          type="button"
                          aria-disabled={isDisabled}
                          aria-pressed={isSelected}
                          onClick={() => {
                            if (!isDisabled) onSelect(categoryKey, tech.id);
                          }}
                          className={cn(
                            "builder-focus-ring inline-flex h-8 items-center gap-2 whitespace-nowrap rounded-md border px-3 text-[13px] leading-none transition-colors duration-150",
                            isDisabled
                              ? "cursor-not-allowed border-dashed text-fd-muted-foreground/60"
                              : isSelected
                                ? "border-fd-foreground/20 bg-fd-muted text-fd-foreground"
                                : "border-border/60 text-fd-muted-foreground hover:bg-fd-muted/50 hover:text-fd-foreground",
                          )}
                        />
                      }
                    >
                      {hasIcon && (
                        <TechIcon
                          icon={tech.icon}
                          svgl={"svgl" in tech ? tech.svgl : undefined}
                          name={tech.name}
                          className={cn(
                            "className" in tech ? tech.className : undefined,
                            "size-4 shrink-0 text-sm leading-none",
                            isDisabled && "opacity-50 grayscale",
                          )}
                        />
                      )}
                      {tech.name}
                      {isExperimental && (
                        <span className="rounded-full bg-amber-500/10 px-1.5 py-0.5 text-[10px] text-amber-700 leading-none dark:text-amber-300">
                          Beta
                        </span>
                      )}
                      {isSelected && <Check aria-hidden="true" className="size-3 text-brand" />}
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-xs">
                      <p className="text-xs">{disabledReason ?? tech.description}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
