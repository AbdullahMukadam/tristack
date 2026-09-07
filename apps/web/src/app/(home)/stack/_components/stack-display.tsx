"use client";

import { Check, Copy, Edit, Layers, Share2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { ShareDialog } from "@/components/ui/share-dialog";
import { TechBadge } from "@/components/ui/tech-badge";
import { stackSnapshot, track } from "@/lib/analytics";
import type { LoadedStackState } from "@/lib/stack-url-state";
import {
  formatProjectName,
  generateStackCommand,
  generateStackSharingUrl,
  generateStackSummary,
  generateStackUrlFromState,
  getSelectedTechs,
} from "@/lib/stack-utils";

type StackDisplayProps = {
  stackState: LoadedStackState;
};

export function StackDisplay({ stackState }: StackDisplayProps) {
  const [copied, setCopied] = useState(false);
  const [stackUrl, setStackUrl] = useState<string>("");
  const [editUrl, setEditUrl] = useState<string>("");

  useEffect(() => {
    setStackUrl(generateStackSharingUrl(stackState, window.location.origin));
    setEditUrl(generateStackUrlFromState(stackState, window.location.origin));
  }, [stackState]);

  const stack = stackState;
  const stackSummary = generateStackSummary(stack);

  const command = generateStackCommand({
    ...stackState,
    projectName: formatProjectName(stackState.projectName),
  });

  const techBadges = getSelectedTechs(stack).map((tech) => (
    <TechBadge
      key={`${tech.category}-${tech.id}`}
      icon={tech.icon}
      name={tech.name}
      category={tech.category}
    />
  ));

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      toast.success("Command copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
      track("stack_copy_command", stackSnapshot(stackState));
    } catch {
      toast.error("Failed to copy command");
    }
  };

  return (
    <main className="container mx-auto min-h-svh">
      <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 pt-12">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2 sm:flex-nowrap">
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold tracking-tight sm:text-xl">Your stack</span>
          </div>
          <div className="hidden h-px flex-1 bg-border sm:block" />
          <span className="w-full text-right text-muted-foreground text-xs sm:w-auto sm:text-left">
            {techBadges.length} technology selection{techBadges.length === 1 ? "" : "s"}
          </span>
        </div>

        <p className="text-[15px] leading-[1.6] text-muted-foreground">{stackSummary}</p>

        <div className="flex items-center gap-3">
          <Link href={editUrl} onClick={() => track("stack_edit", {})}>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-fd-background px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-muted-foreground/30 hover:bg-muted hover:text-foreground"
            >
              <Edit className="h-3 w-3" />
              <span>Edit in builder</span>
            </button>
          </Link>

          <ShareDialog stackUrl={stackUrl} stackState={stackState} page="stack">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-fd-background px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-muted-foreground/30 hover:bg-muted hover:text-foreground"
            >
              <Share2 className="h-3 w-3" />
              <span>Share</span>
            </button>
          </ShareDialog>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-foreground">Generated command</h2>

          <div
            role="button"
            tabIndex={0}
            className="flex cursor-pointer items-center justify-between gap-3 rounded-md border border-border bg-fd-background p-3"
            onClick={copyCommand}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                copyCommand();
              }
            }}
            aria-label="Copy generated command"
            title="Click to copy command"
          >
            <div className="min-w-0 flex-1 truncate font-mono text-sm text-foreground">
              {command}
            </div>
            <span
              className={
                copied
                  ? "flex shrink-0 items-center gap-1 rounded-md border border-green-500/20 bg-green-500/10 px-2 py-1 text-green-600 text-xs font-medium transition-colors dark:text-green-400"
                  : "flex shrink-0 items-center gap-1 rounded-md border border-border px-2 py-1 text-xs font-medium transition-colors"
              }
            >
              {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
              {copied ? "Copied" : "Copy"}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-foreground">
            Dependencies ({techBadges.length})
          </h2>

          {techBadges.length > 0 ? (
            <div className="flex flex-wrap gap-3">{techBadges}</div>
          ) : (
            <p className="text-sm text-muted-foreground">No technologies selected</p>
          )}
        </div>
      </div>
    </main>
  );
}
