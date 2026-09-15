"use client";

import { Check, ChevronDown, ClipboardCopy, FolderTree, Settings2 } from "lucide-react";
import { startTransition, useState } from "react";

import { SectionDivider } from "@/app/(home)/_components/landing/section-divider";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TooltipProvider } from "@/components/ui/tooltip";
import { formatStackCommandForDisplay } from "@/lib/stack-utils";
import type { Sponsor } from "@/lib/types";
import { cn } from "@/lib/utils";

import { ActionButtons } from "../action-buttons";
import { PreviewPanel } from "../preview-panel";
import { SpecialSponsorsPanel } from "../special-sponsors-panel";
import { CategoryNav, scrollToCategorySection } from "./category-nav";
import { SelectedStackBadges } from "./selected-stack-badges";
import { TechCategories } from "./tech-categories";
import { useStackBuilder } from "./use-stack-builder";

type StackBuilderProps = {
  specialSponsors?: Sponsor[];
};

export function StackBuilder({ specialSponsors = [] }: StackBuilderProps) {
  const {
    applyPreset,
    categoryProgress,
    command,
    compatibilityAnalysis,
    copied,
    copyToClipboard,
    getRandomStack,
    getStackUrl,
    handleTechSelect,
    lastSavedStack,
    loadSavedStack,
    mobileTab,
    projectNameError,
    removeSelectedTech,
    resetStack,
    saveCurrentStack,
    scrollAreaRef,
    selectedFile,
    setMobileTab,
    setSelectedFile,
    setStack,
    setViewMode,
    stack,
    viewMode,
  } = useStackBuilder();
  const effectiveStack = compatibilityAnalysis.stack;
  const displayCommand = formatStackCommandForDisplay(command);
  const [commandExpanded, setCommandExpanded] = useState(false);
  const isCommandMultiline = displayCommand !== command;

  const actionButtons = (
    <ActionButtons
      onReset={resetStack}
      onRandom={getRandomStack}
      onSave={saveCurrentStack}
      onLoad={loadSavedStack}
      hasSavedStack={!!lastSavedStack}
      onApplyPreset={applyPreset}
      stackUrl={getStackUrl()}
      stackState={effectiveStack}
      yolo={stack.yolo === "true"}
      onYoloToggle={(yolo) => {
        setStack({ yolo });
      }}
    />
  );

  return (
    <TooltipProvider>
      <div className="flex h-full w-full flex-col overflow-hidden bg-fd-background text-fd-foreground">
        <div className="shrink-0 px-4 md:px-0">
          <SectionDivider variant="stretch" size="sm" />
        </div>
        <div className="sticky top-0 z-20 border-b bg-fd-background px-3 py-2 sm:hidden">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setMobileTab("build");
                }}
                className={cn(
                  "builder-focus-ring -m-2 flex items-center gap-1.5 p-2 text-sm font-medium transition-colors duration-150",
                  mobileTab === "build"
                    ? "text-brand"
                    : "text-fd-muted-foreground hover:text-fd-foreground",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-colors",
                    mobileTab === "build" ? "bg-brand" : "bg-fd-muted-foreground/40",
                  )}
                />
                Build
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileTab("preview");
                }}
                className={cn(
                  "builder-focus-ring -m-2 flex items-center gap-1.5 p-2 text-sm font-medium transition-colors duration-150",
                  mobileTab === "preview"
                    ? "text-brand"
                    : "text-fd-muted-foreground hover:text-fd-foreground",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-colors",
                    mobileTab === "preview" ? "bg-brand" : "bg-fd-muted-foreground/40",
                  )}
                />
                Preview
              </button>
            </div>
          </div>
          {mobileTab === "build" && (
            <div className="mt-2">
              <CategoryNav progress={categoryProgress} idPrefix="section-mobile" />
            </div>
          )}
        </div>

        <div className="hidden min-h-0 flex-1 grid-cols-[16rem_minmax(0,1fr)] overflow-hidden sm:grid md:grid-cols-[19rem_minmax(0,1fr)] lg:grid-cols-[24rem_minmax(0,1fr)]">
          <aside className="flex min-h-0 flex-col overflow-hidden border-r bg-fd-background">
            <ScrollArea className="min-h-0 flex-1">
              <div className="p-2">
                <div className="overflow-hidden">
                  <section className="border-b px-3 py-3">
                    <label className="flex flex-col">
                      <span className="mb-1 text-xs font-medium text-fd-muted-foreground">
                        Project name
                      </span>
                      <Input
                        type="text"
                        value={stack.projectName || ""}
                        onChange={(event) => {
                          setStack({ projectName: event.target.value });
                        }}
                        aria-invalid={!!projectNameError}
                        aria-describedby={projectNameError ? "project-name-error" : undefined}
                        className={cn(
                          "builder-focus-ring w-full border-fd-border px-2.5 py-1.5 text-[13px] focus:outline-none",
                          projectNameError
                            ? "border-destructive text-destructive"
                            : "focus:border-brand",
                        )}
                        placeholder="my-tristack-app"
                      />
                      {projectNameError && (
                        <p id="project-name-error" className="mt-1 text-xs text-destructive">
                          {projectNameError}
                        </p>
                      )}
                    </label>
                  </section>

                  <section className="border-b px-3 py-3">
                    <div className="flex flex-col gap-1.5">
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => copyToClipboard()}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            copyToClipboard();
                          }
                        }}
                        aria-label="Copy CLI command"
                        title="Click to copy command"
                        className="builder-focus-ring cursor-pointer rounded-lg border px-2.5 py-2 transition-colors duration-150 hover:border-brand/40"
                      >
                        <div className="flex min-w-0 items-start gap-1.5">
                          <code
                            className={cn(
                              "block min-w-0 flex-1 font-mono text-[12px] text-fd-foreground leading-[1.55]",
                              commandExpanded ? "whitespace-pre-wrap break-words" : "truncate",
                            )}
                          >
                            {commandExpanded ? displayCommand : command}
                          </code>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {isCommandMultiline && (
                          <button
                            type="button"
                            onClick={() => {
                              setCommandExpanded(!commandExpanded);
                            }}
                            className="builder-focus-ring flex items-center gap-1 rounded-md border px-2 py-1 text-xs text-fd-muted-foreground transition-colors duration-150 hover:text-fd-foreground"
                            title={commandExpanded ? "Collapse command" : "Show full command"}
                          >
                            <ChevronDown
                              className={cn(
                                "h-3 w-3 shrink-0 transition-transform",
                                commandExpanded && "rotate-180",
                              )}
                            />
                            {commandExpanded ? "Less" : "Flags"}
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => copyToClipboard()}
                          className={cn(
                            "builder-focus-ring flex items-center gap-1 rounded-md border px-2 py-1 text-xs transition-colors duration-150",
                            copied
                              ? "border-brand text-brand"
                              : "text-fd-muted-foreground hover:text-fd-foreground",
                          )}
                          title={copied ? "Copied!" : "Copy command"}
                        >
                          {copied ? (
                            <Check className="h-3 w-3 shrink-0" />
                          ) : (
                            <ClipboardCopy className="h-3 w-3 shrink-0" />
                          )}
                          {copied ? "Copied" : "Copy"}
                        </button>
                      </div>
                    </div>
                  </section>

                  <section className="px-3 py-3">
                    <SelectedStackBadges
                      stack={effectiveStack}
                      onRemove={removeSelectedTech}
                      onJump={(category) => {
                        if (viewMode !== "command") {
                          startTransition(() => {
                            setViewMode("command");
                          });
                        }
                        scrollToCategorySection("section", category);
                      }}
                    />
                  </section>
                </div>
              </div>
            </ScrollArea>

            <div className="border-t bg-fd-background p-2">
              <div className="@container p-2">
                <SpecialSponsorsPanel sponsors={specialSponsors} />
                {specialSponsors.length > 0 ? (
                  <span aria-hidden="true" className="my-3 block h-px w-full bg-fd-border" />
                ) : null}
                {actionButtons}
              </div>
            </div>
          </aside>

          <section className="flex min-h-0 flex-col overflow-hidden">
            <div className="sticky top-0 z-10 flex flex-col gap-2 border-b bg-fd-background px-3 py-2">
              <div className="flex w-fit items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    startTransition(() => {
                      setViewMode("command");
                    });
                  }}
                  className={cn(
                    "builder-focus-ring -m-2 flex items-center gap-1.5 p-2 text-sm font-medium transition-colors duration-150",
                    viewMode === "command"
                      ? "text-brand"
                      : "text-fd-muted-foreground hover:text-fd-foreground",
                  )}
                >
                  <Settings2 className="h-4 w-4" />
                  Configure
                </button>
                <button
                  type="button"
                  onClick={() => {
                    startTransition(() => {
                      setViewMode("preview");
                    });
                  }}
                  className={cn(
                    "builder-focus-ring -m-2 flex items-center gap-1.5 p-2 text-sm font-medium transition-colors duration-150",
                    viewMode === "preview"
                      ? "text-brand"
                      : "text-fd-muted-foreground hover:text-fd-foreground",
                  )}
                >
                  <FolderTree className="h-4 w-4" />
                  Preview
                </button>
              </div>
              {viewMode === "command" && (
                <CategoryNav progress={categoryProgress} idPrefix="section" />
              )}
            </div>

            {viewMode === "command" ? (
              <div ref={scrollAreaRef} className="min-h-0 flex-1">
                <ScrollArea className="h-full overflow-hidden scroll-smooth">
                  <main className="@container p-2 sm:p-4">
                    <TechCategories
                      mode="desktop"
                      stack={effectiveStack}
                      compatibilityNotes={compatibilityAnalysis.notes}
                      onSelect={handleTechSelect}
                      showAllCategories
                    />
                  </main>
                </ScrollArea>
              </div>
            ) : (
              <PreviewPanel
                stack={effectiveStack}
                selectedFilePath={selectedFile}
                onSelectFile={setSelectedFile}
              />
            )}
          </section>
        </div>

        <div className="flex flex-1 flex-col overflow-hidden sm:hidden">
          {mobileTab === "build" && (
            <div className="flex min-h-0 flex-1 flex-col">
              <ScrollArea className="h-full overflow-hidden scroll-smooth">
                <main className="p-2 pb-6">
                  <div className="mb-4 space-y-3 rounded-md border p-3">
                    <label className="flex flex-col">
                      <span className="mb-1 text-xs font-medium text-fd-muted-foreground">
                        Project name
                      </span>
                      <Input
                        type="text"
                        value={stack.projectName || ""}
                        onChange={(event) => {
                          setStack({ projectName: event.target.value });
                        }}
                        aria-invalid={!!projectNameError}
                        aria-describedby={
                          projectNameError ? "project-name-error-mobile" : undefined
                        }
                        className={cn(
                          "builder-focus-ring w-full border-fd-border px-2.5 py-1.5 text-[13px] focus:outline-none",
                          projectNameError
                            ? "border-destructive text-destructive"
                            : "focus:border-brand",
                        )}
                        placeholder="my-tristack-app"
                      />
                      {projectNameError && (
                        <p id="project-name-error-mobile" className="mt-1 text-xs text-destructive">
                          {projectNameError}
                        </p>
                      )}
                    </label>

                    <div className="flex flex-col gap-1.5">
                      <code
                        className={cn(
                          "builder-focus-ring block min-w-0 cursor-pointer rounded-lg border px-2.5 py-2 font-mono text-[12px] text-fd-foreground leading-[1.55] transition-colors duration-150",
                          commandExpanded ? "whitespace-pre-wrap break-words" : "truncate",
                          copied ? "border-brand" : "hover:border-brand/50",
                        )}
                        onClick={() => copyToClipboard()}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            copyToClipboard();
                          }
                        }}
                        role="button"
                        tabIndex={0}
                        aria-label="Copy command"
                        title="Click to copy command"
                      >
                        {commandExpanded ? displayCommand : command}
                      </code>
                      <div className="flex items-center gap-1.5">
                        {isCommandMultiline && (
                          <button
                            type="button"
                            onClick={() => {
                              setCommandExpanded(!commandExpanded);
                            }}
                            className="builder-focus-ring flex items-center gap-1 rounded-md border px-2 py-1 text-xs text-fd-muted-foreground transition-colors duration-150 hover:text-fd-foreground"
                            title={commandExpanded ? "Collapse command" : "Show full command"}
                          >
                            <ChevronDown
                              className={cn(
                                "h-3 w-3 shrink-0 transition-transform",
                                commandExpanded && "rotate-180",
                              )}
                            />
                            {commandExpanded ? "Less" : "Flags"}
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => copyToClipboard()}
                          className={cn(
                            "builder-focus-ring flex items-center gap-1 rounded-md border px-2 py-1 text-xs transition-colors duration-150",
                            copied
                              ? "border-brand text-brand"
                              : "text-fd-muted-foreground hover:text-fd-foreground",
                          )}
                          title={copied ? "Copied!" : "Copy command"}
                        >
                          {copied ? (
                            <Check className="h-3 w-3 shrink-0" />
                          ) : (
                            <ClipboardCopy className="h-3 w-3 shrink-0" />
                          )}
                          {copied ? "Copied" : "Copy"}
                        </button>
                      </div>
                    </div>
                  </div>

                  <TechCategories
                    mode="mobile"
                    stack={effectiveStack}
                    compatibilityNotes={compatibilityAnalysis.notes}
                    onSelect={handleTechSelect}
                    showAllCategories
                  />
                </main>
              </ScrollArea>

              <div className="border-t bg-fd-background p-2">
                <div className="@container p-2">
                  <SpecialSponsorsPanel sponsors={specialSponsors} compact />
                  {specialSponsors.length > 0 ? (
                    <span aria-hidden="true" className="my-3 block h-px w-full bg-fd-border" />
                  ) : null}
                  {actionButtons}
                </div>
              </div>
            </div>
          )}

          {mobileTab === "preview" && (
            <PreviewPanel
              stack={effectiveStack}
              selectedFilePath={selectedFile}
              onSelectFile={setSelectedFile}
            />
          )}
        </div>
      </div>
    </TooltipProvider>
  );
}
