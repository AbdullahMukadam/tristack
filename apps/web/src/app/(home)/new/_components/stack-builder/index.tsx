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
  const [searchQuery, setSearchQuery] = useState("");

  const actionButtons = (
    <ActionButtons
      onReset={resetStack}
      onRandom={getRandomStack}
      onSave={saveCurrentStack}
      onLoad={loadSavedStack}
      hasSavedStack={!!lastSavedStack}
      onApplyPreset={applyPreset}
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

        <div className="hidden min-h-0 flex-1 grid-cols-[16rem_minmax(0,1fr)_16rem] overflow-hidden sm:grid md:grid-cols-[19rem_minmax(0,1fr)_16rem] lg:grid-cols-[20rem_minmax(0,1fr)_18rem]">
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

                  <div className="px-2">
                    <SectionDivider variant="stretch" size="sm" />
                  </div>

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
              <div className="@container p-2">{actionButtons}</div>
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
                      searchQuery={searchQuery}
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

          <aside className="flex min-h-0 flex-col border-l bg-fd-background/50 overflow-hidden lg:bg-fd-background">
            <ScrollArea className="min-h-0 flex-1">
              <div className="p-4 space-y-6">
                {/* SEARCH */}
                <div className="relative group">
                  <Input
                    type="search"
                    placeholder="Search tech..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-fd-muted/50 transition-colors focus-visible:bg-fd-background text-[13px] px-3 py-2 pl-9 rounded-lg shadow-sm"
                    aria-label="Search technologies"
                  />
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-fd-muted-foreground transition-colors group-focus-within:text-primary pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:flex items-center gap-0.5 opacity-50">
                    <kbd className="font-sans text-[10px] font-medium border border-border rounded px-1.5 py-0.5 bg-fd-background">
                      ⌘
                    </kbd>
                    <kbd className="font-sans text-[10px] font-medium border border-border rounded px-1.5 py-0.5 bg-fd-background">
                      K
                    </kbd>
                  </div>
                </div>

                {/* COMPATIBILITY CALLOUT */}
                {Object.values(compatibilityAnalysis.notes).some((n) => n.notes.length > 0) && (
                  <section className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 shadow-sm">
                    <h3 className="flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-400">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                      Compatibility Notes
                    </h3>
                    <ul
                      className="mt-2 space-y-1.5 list-disc pl-5 marker:text-amber-500/60"
                      role="list"
                    >
                      {Object.values(compatibilityAnalysis.notes)
                        .filter((n) => n.notes.length > 0)
                        .flatMap((n) => n.notes)
                        .map((note, i) => (
                          <li
                            key={i}
                            className="text-xs text-amber-800 dark:text-amber-200/90 leading-relaxed pr-1"
                          >
                            {note}
                          </li>
                        ))}
                    </ul>
                  </section>
                )}

                {/* QUICK TIPS */}
                <section className="space-y-3">
                  <h3 className="text-xs font-semibold text-fd-foreground tracking-tight uppercase text-muted-foreground">
                    Quick Tips
                  </h3>
                  <ul className="space-y-2.5 text-[13px] text-fd-muted-foreground" role="list">
                    {[
                      "Click a category in the sidebar to jump",
                      "Hover a tech for description",
                      <>
                        <strong className="font-medium text-foreground">"Flags"</strong> shows full
                        CLI command
                      </>,
                      <>
                        <strong className="font-medium text-foreground">YOLO mode</strong> skips
                        confirmations
                      </>,
                      <>
                        <strong className="font-medium text-foreground">Preview tab</strong> shows
                        generated file tree
                      </>,
                    ].map((tip, i) => (
                      <li key={i} className="flex items-start gap-2.5 leading-tight">
                        <span
                          className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50"
                          aria-hidden="true"
                        />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <SectionDivider variant="stretch" size="sm" className="opacity-50" />

                {/* NEXT STEPS */}
                <section className="space-y-4">
                  <h3 className="text-xs font-semibold text-fd-foreground tracking-tight uppercase text-muted-foreground">
                    Next Steps
                  </h3>

                  <div className="relative space-y-4">
                    {/* Step 1 */}
                    <div className="relative pl-8 md:pl-0">
                      <div className="md:hidden absolute left-0 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border bg-fd-background text-[11px] font-bold text-fd-foreground shadow-sm">
                        1
                      </div>
                      <p className="font-medium text-[13px] text-foreground mb-2">
                        Install the CLI
                      </p>
                      <div className="rounded-lg border bg-primary/10 p-3 shadow-inner overflow-x-auto">
                        <div className="space-y-2.5 font-mono text-[11px] text-zinc-300 whitespace-nowrap">
                          <div>
                            <span className="text-white block mb-0.5"># Python (uvx)</span>
                            <span className="text-primary/80">uvx</span> tristack create my-app
                          </div>
                          <div>
                            <span className="text-white block mb-0.5"># Go / Rust (curl)</span>
                            <span className="text-primary/80">curl</span> -fsSL
                            https://tristack.space/install.sh | bash
                          </div>
                          <div>
                            <span className="text-white block mb-0.5"># Windows (PowerShell)</span>
                            <span className="text-primary/80">irm</span> tristack.space/install.ps1
                            | iex
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative pl-8 md:pl-0">
                      <div className="md:hidden absolute left-0 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border bg-fd-background text-[11px] font-bold text-fd-foreground shadow-sm">
                        2
                      </div>
                      <p className="font-medium text-[13px] text-foreground mb-2">
                        Run the command
                      </p>
                      <div className="rounded-lg border bg-primary/10 p-3 shadow-inner">
                        <div className="font-mono text-[11px] text-zinc-300">
                          <span className="text-green-400">tristack</span> create my-app
                        </div>
                      </div>
                      <p className="mt-2 text-[11px] text-fd-muted-foreground leading-relaxed">
                        Or use the full command generated above with your selected stack flags.
                      </p>
                    </div>

                    {/* Step 3 (Dynamic) */}
                    {["python", "go", "rust"].includes(stack.language) && (
                      <div className="relative pl-8 md:pl-0">
                        <div className="md:hidden absolute left-0 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border bg-fd-background text-[11px] font-bold text-fd-foreground shadow-sm">
                          3
                        </div>
                        <p className="font-medium text-[13px] text-foreground mb-2">
                          {stack.language === "rust" ? "Build & run" : "Install deps & run"}
                        </p>
                        <div className="rounded-lg border bg-primary/10 p-3 shadow-inner">
                          <div className="space-y-1.5 font-mono text-[11px] text-zinc-300">
                            <div className="flex gap-2">
                              <span className="text-zinc-500">$</span>
                              <span>cd my-app</span>
                            </div>

                            {stack.language === "python" && (
                              <>
                                <div className="flex gap-2">
                                  <span className="text-zinc-500">$</span>
                                  <span className="text-primary/80">uv sync</span>
                                </div>
                                <div className="flex gap-2">
                                  <span className="text-zinc-500">$</span>
                                  <span className="text-green-400">uv run</span> python -m app
                                </div>
                              </>
                            )}

                            {stack.language === "go" && (
                              <>
                                <div className="flex gap-2">
                                  <span className="text-zinc-500">$</span>
                                  <span className="text-primary/80">go mod tidy</span>
                                </div>
                                <div className="flex gap-2">
                                  <span className="text-zinc-500">$</span>
                                  <span className="text-green-400">go run</span> .
                                </div>
                              </>
                            )}

                            {stack.language === "rust" && (
                              <>
                                <div className="flex gap-2">
                                  <span className="text-zinc-500">$</span>
                                  <span className="text-primary/80">cargo build</span>
                                </div>
                                <div className="flex gap-2">
                                  <span className="text-zinc-500">$</span>
                                  <span className="text-green-400">cargo run</span>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </section>

                {specialSponsors.length > 0 && (
                  <>
                    <SectionDivider variant="stretch" size="sm" className="opacity-50" />
                    <section>
                      <SpecialSponsorsPanel sponsors={specialSponsors} />
                    </section>
                  </>
                )}
              </div>
            </ScrollArea>
          </aside>
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
                    searchQuery={searchQuery}
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
