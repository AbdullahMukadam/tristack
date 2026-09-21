"use client";

import { AlertTriangle, RefreshCw, Settings, Shuffle, Star } from "lucide-react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { StackState } from "@/lib/constant";
import { cn } from "@/lib/utils";

import { PresetDropdown } from "./preset-dropdown";

type ActionButtonsProps = {
  onReset: () => void;
  onRandom: () => void;
  onSave: () => void;
  onLoad: () => void;
  hasSavedStack: boolean;
  onApplyPreset: (presetId: string) => void;
  yolo: boolean;
  onYoloToggle: (yolo: string) => void;
};

const mutedActionClasses =
  "builder-focus-ring pointer-coarse:min-h-8 flex items-center justify-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium text-fd-muted-foreground transition-colors duration-150 hover:text-fd-foreground";

export function ActionButtons({
  onReset,
  onRandom,
  onSave,
  onLoad,
  hasSavedStack,
  onApplyPreset,
  yolo,
  onYoloToggle,
}: ActionButtonsProps) {
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-1.5">
        <button
          type="button"
          onClick={onRandom}
          className="builder-focus-ring pointer-coarse:min-h-8 flex items-center justify-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium text-primary transition-colors duration-150 hover:border-primary"
          title="Generate a random stack"
        >
          <Shuffle className="h-3 w-3" />
          Randomize
        </button>
        <PresetDropdown onApplyPreset={onApplyPreset} />
        <button
          type="button"
          onClick={onSave}
          className={mutedActionClasses}
          title="Save current preferences"
        >
          <Star className="h-3 w-3" />
          Save
        </button>
        {hasSavedStack && (
          <button
            type="button"
            onClick={onLoad}
            className={mutedActionClasses}
            title="Load saved preferences"
          >
            <Settings className="h-3 w-3" />
            Load
          </button>
        )}
        <button
          type="button"
          onClick={onReset}
          className={mutedActionClasses}
          title="Reset to defaults"
        >
          <RefreshCw className="h-3 w-3" />
          Reset
        </button>
        <Tooltip delay={100}>
          <TooltipTrigger
            render={
              <button
                type="button"
                onClick={() => onYoloToggle(yolo ? "false" : "true")}
                aria-pressed={yolo}
                className={cn(
                  "builder-focus-ring pointer-coarse:min-h-8 flex items-center justify-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors duration-150",
                  yolo
                    ? "border-destructive text-destructive"
                    : "text-fd-muted-foreground hover:text-fd-foreground",
                )}
              />
            }
          >
            <AlertTriangle className="h-3 w-3" />
            YOLO
          </TooltipTrigger>
          <TooltipContent side="top" align="end" className="max-w-xs">
            <p className="text-xs">
              {yolo ? "YOLO mode on — " : ""}Disables all validation and adds --yolo to the command.
              Use at your own risk!
            </p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
