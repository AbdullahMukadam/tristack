"use client";

import { ChevronDown, Zap } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PRESET_TEMPLATES } from "@/lib/constant";
import { generateStackSummary } from "@/lib/stack-utils";

type PresetDropdownProps = {
  onApplyPreset: (presetId: string) => void;
};

export function PresetDropdown({ onApplyPreset }: PresetDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button
            type="button"
            className="builder-focus-ring pointer-coarse:min-h-8 flex items-center justify-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium text-fd-muted-foreground transition-colors duration-150 hover:text-fd-foreground"
          />
        }
      >
        <Zap className="h-3 w-3" />
        Presets
        <ChevronDown className="h-3 w-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72 bg-fd-background">
        {PRESET_TEMPLATES.map((preset) => (
          <DropdownMenuItem
            key={preset.id}
            onClick={() => onApplyPreset(preset.id)}
            className="flex flex-col items-start gap-1 p-3"
          >
            <div className="flex w-full items-center justify-between gap-2">
              <div className="text-[13px] font-medium leading-[1.55]">{preset.name}</div>
              <span className="rounded-full border px-1.5 py-0.5 text-[10px] font-medium text-fd-muted-foreground">
                {preset.stack.framework.charAt(0).toUpperCase() + preset.stack.framework.slice(1)}
              </span>
            </div>
            <div className="line-clamp-2 text-xs text-fd-muted-foreground leading-[1.5]">
              {preset.description}
            </div>
            <div className="line-clamp-1 w-full text-[10px] font-medium text-primary uppercase tracking-wide">
              {generateStackSummary(preset.stack)}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
