"use client";

import { ArrowUpRight, Check, Copy } from "lucide-react";
import Link from "next/link";
import { type ReactNode, startTransition, useState } from "react";

import { SectionDivider } from "@/app/(home)/_components/landing/section-divider";
import { SectionEyebrow } from "@/app/(home)/_components/landing/section-header";
import { Input } from "@/components/ui/input";
import { TooltipProvider } from "@/components/ui/tooltip";
import { INSTALL_COMMANDS } from "@/lib/install-commands";
import { formatProjectName, formatStackCommandForDisplay } from "@/lib/stack-utils";
import { cn } from "@/lib/utils";

import { ActionButtons } from "../action-buttons";
import { PreviewPanel } from "../preview-panel";
import { TechCategories } from "./tech-categories";
import { useStackBuilder } from "./use-stack-builder";

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="builder-focus-ring shrink-0 rounded p-1 text-fd-muted-foreground transition-colors hover:text-fd-foreground"
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
    </button>
  );
}

function CodeLine({ code }: { code: string }) {
  return (
    <div className="flex items-center gap-2 rounded-md border bg-fd-muted/40 py-1.5 pr-1.5 pl-3">
      <code className="min-w-0 flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden font-mono text-xs whitespace-nowrap">
        {code}
      </code>
      <CopyButton text={code} label={`Copy ${code}`} />
    </div>
  );
}

function PanelBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-2">
      <SectionEyebrow>{title}</SectionEyebrow>
      {children}
    </div>
  );
}

export function StackBuilder() {
  const {
    applyPreset,
    command,
    compatibilityAnalysis,
    copied,
    copyToClipboard,
    getRandomStack,
    handleTechSelect,
    lastSavedStack,
    loadSavedStack,
    projectNameError,
    resetStack,
    saveCurrentStack,
    selectedFile,
    setSelectedFile,
    setStack,
    setViewMode,
    stack,
    viewMode,
  } = useStackBuilder();
  const effectiveStack = compatibilityAnalysis.stack;
  const language = effectiveStack.language;
  const nativeInstall = INSTALL_COMMANDS.filter((p) => p.id === "macos" || p.id === "windows").map(
    (p) => ({
      label: p.id === "macos" ? "macOS / Linux" : "Windows",
      command: p.commands[0].command,
    }),
  );

  const tabClass = (active: boolean) =>
    cn(
      "builder-focus-ring rounded-md px-3 py-1 text-sm transition-colors duration-150",
      active
        ? "bg-fd-background font-medium text-fd-foreground ring-1 ring-border"
        : "text-fd-muted-foreground hover:text-fd-foreground",
    );

  const switchView = (mode: "command" | "preview") => {
    startTransition(() => {
      setViewMode(mode);
    });
  };

  return (
    <TooltipProvider>
      <SectionDivider />

      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-1 rounded-lg bg-fd-muted/60 p-1" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === "command"}
            onClick={() => switchView("command")}
            className={tabClass(viewMode === "command")}
          >
            Configure
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === "preview"}
            onClick={() => switchView("preview")}
            className={tabClass(viewMode === "preview")}
          >
            Preview files
          </button>
        </div>
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
      </div>

      <div className="grid border-t lg:grid-cols-[minmax(0,1fr)_21rem]">
        <div className="min-w-0 px-4 sm:px-6">
          {viewMode === "command" ? (
            <TechCategories
              stack={effectiveStack}
              compatibilityNotes={compatibilityAnalysis.notes}
              onSelect={handleTechSelect}
            />
          ) : (
            <div className="h-[70vh] min-h-[28rem] py-4">
              <PreviewPanel
                stack={effectiveStack}
                selectedFilePath={selectedFile}
                onSelectFile={setSelectedFile}
              />
            </div>
          )}
        </div>

        <aside className="border-t lg:border-t-0 lg:border-l">
          <div className="space-y-6 px-4 py-5 sm:px-6 lg:sticky lg:top-16">
            <PanelBlock title="Project name">
              <Input
                type="text"
                value={stack.projectName || ""}
                onChange={(event) => {
                  setStack({ projectName: event.target.value });
                }}
                aria-label="Project name"
                aria-invalid={!!projectNameError}
                className="h-9 rounded-md px-3 text-[13px]"
                placeholder="my-tristack-app"
              />
              {projectNameError && <p className="text-xs text-destructive">{projectNameError}</p>}
            </PanelBlock>

            <PanelBlock title="Command">
              <pre className="max-h-52 overflow-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-md border bg-fd-muted/40 px-3 py-2.5 font-mono text-xs leading-[1.7] whitespace-pre-wrap break-words">
                {formatStackCommandForDisplay(command)}
              </pre>
              <button
                type="button"
                onClick={() => copyToClipboard()}
                className="builder-focus-ring flex h-9 w-full items-center justify-center gap-1.5 rounded-md bg-brand-gradient text-sm font-semibold text-brand-on-accent ring-1 ring-brand-inset transition duration-200 [text-shadow:0_1px_2px_rgb(0_0_0/0.35)] hover:opacity-95 active:scale-[0.99]"
              >
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                {copied ? "Copied" : "Copy command"}
              </button>
            </PanelBlock>

            <span aria-hidden="true" className="block h-px bg-border" />

            <PanelBlock title={language === "python" ? "Requirements" : "Install the CLI"}>
              {language === "python" ? (
                <p className="text-xs leading-relaxed text-fd-muted-foreground">
                  The command runs through <code className="font-mono">uvx</code>, so you only need{" "}
                  <a
                    href="https://docs.astral.sh/uv/getting-started/installation/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-fd-foreground underline underline-offset-2"
                  >
                    uv
                  </a>
                  .
                </p>
              ) : (
                nativeInstall.map((item) => (
                  <div key={item.command} className="space-y-1">
                    <p className="text-[11px] text-fd-muted-foreground">{item.label}</p>
                    <CodeLine code={item.command} />
                  </div>
                ))
              )}
            </PanelBlock>

            <PanelBlock title="Then">
              <CodeLine code={`cd ${formatProjectName(stack.projectName)}`} />
              <p className="text-xs leading-relaxed text-fd-muted-foreground">
                The generated README has the commands to run, test, and migrate.
              </p>
            </PanelBlock>

            <Link
              href={`/docs/guides/${language}-quick-start`}
              className="builder-focus-ring inline-flex items-center gap-1 text-xs font-medium text-fd-foreground underline-offset-2 hover:underline"
            >
              {language === "go" ? "Go" : language === "rust" ? "Rust" : "Python"} quick start
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </aside>
      </div>

      <SectionDivider />
    </TooltipProvider>
  );
}
