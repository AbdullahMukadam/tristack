"use client";

import { Check, Copy, Edit, Layers, Share2, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { ShareDialog } from "@/components/ui/share-dialog";
import { TechBadge } from "@/components/ui/tech-badge";
import type { LoadedStackState } from "@/lib/stack-url-state";
import {
  formatProjectName,
  generateStackCommand,
  generateStackSharingUrl,
  generateStackSummary,
  generateStackUrlFromState,
  getSelectedTechs,
} from "@/lib/stack-utils";
import { cn } from "@/lib/utils";

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
      svgl={tech.svgl}
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
    } catch {
      toast.error("Failed to copy command");
    }
  };

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(stackUrl);
      toast.success("Link copied to clipboard!");
    } catch {
      toast.error("Failed to copy link");
    }
  };

  return (
    <main className="container mx-auto min-h-svh">
      <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 pt-12 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 300, ease: "easeOut" }}
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4 sm:flex-nowrap">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Layers className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                  {stack.projectName || "my-tristack-app"}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {techBadges.length} technology{techBadges.length === 1 ? "" : "s"} selected
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={copyUrl}
                className="builder-focus-ring pointer-coarse:min-h-8 flex items-center gap-2 rounded-md border border-border bg-fd-background px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                title="Copy link"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Copy link</span>
              </button>
              <Link href={editUrl}>
                <button
                  type="button"
                  className="builder-focus-ring pointer-coarse:min-h-8 flex items-center gap-2 rounded-md border border-border bg-fd-background px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                >
                  <Edit className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Edit in builder</span>
                </button>
              </Link>
              <ShareDialog stackUrl={stackUrl} stackState={stackState}>
                <button
                  type="button"
                  className="builder-focus-ring pointer-coarse:min-h-8 flex items-center gap-2 rounded-md border border-border bg-fd-background px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                >
                  <Share2 className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Share</span>
                </button>
              </ShareDialog>
            </div>
          </div>

          <p className="text-base leading-[1.7] text-muted-foreground">{stackSummary}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 300, delay: 100, ease: "easeOut" }}
          className="rounded-lg border border-border bg-fd-background"
        >
          <div className="border-b border-border px-4 py-3 bg-muted/30">
            <h2 className="text-sm font-semibold text-foreground">Generated command</h2>
          </div>
          <div className="p-4">
            <button
              type="button"
              onClick={copyCommand}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  copyCommand();
                }
              }}
              className="builder-focus-ring w-full rounded-md border border-border bg-muted/30 p-3 text-left transition-colors hover:border-primary/30 hover:bg-primary/5"
              aria-label="Copy generated command"
              title="Click to copy command"
              tabIndex={0}
              role="button"
            >
              <div className="flex items-center justify-between gap-3">
                <code className="min-w-0 flex-1 truncate font-mono text-sm text-foreground break-all">
                  {command}
                </code>
                <span
                  className={cn(
                    "flex shrink-0 items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium transition-all",
                    copied
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                      : "border-border text-muted-foreground hover:border-primary/30 hover:bg-primary/5 hover:text-primary",
                  )}
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? "Copied" : "Copy"}
                </span>
              </div>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 300, delay: 200, ease: "easeOut" }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-foreground">
              Dependencies ({techBadges.length})
            </h2>
            {techBadges.length > 0 && (
              <span className="text-xs text-muted-foreground">Hover for details</span>
            )}
          </div>

          {techBadges.length > 0 ? (
            <div className="flex flex-wrap gap-2.5">
              {techBadges.map((badge, index) => (
                <motion.span
                  key={badge.key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 200, delay: index * 30 }}
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed bg-muted/30 p-8 text-center">
              <p className="text-sm text-muted-foreground">No technologies selected</p>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
