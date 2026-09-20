"use client";

import { Check, Copy, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import {
  INSTALL_COMMANDS,
  type InstallCommand,
  type InstallPlatform,
} from "@/lib/install-commands";
import { cn } from "@/lib/utils";

import { SectionTitle } from "./section-header";

function CommandRow({ command }: { command: InstallCommand }) {
  const [copied, setCopied] = useState(false);

  const copyCommand = async (e?: React.MouseEvent) => {
    e?.stopPropagation();
    try {
      await navigator.clipboard.writeText(command.command);
      setCopied(true);
      toast.success("Install command copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy command");
    }
  };

  return (
    <div className="group relative flex flex-col gap-1.5 rounded-xl border border-zinc-800/80 bg-zinc-950 p-3.5 shadow-sm transition-all hover:border-zinc-700 hover:shadow-md dark:bg-zinc-950">
      {command.label && (
        <span className="text-[11px] font-medium tracking-wide text-zinc-400 uppercase">
          {command.label}
        </span>
      )}
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <span className="select-none font-mono text-xs text-zinc-500">$</span>
          <code className="min-w-0 flex-1 overflow-x-auto font-mono text-xs text-zinc-100 sm:text-sm">
            {command.command}
          </code>
        </div>

        <button
          type="button"
          onClick={copyCommand}
          aria-label={`Copy command: ${command.command}`}
          title="Copy command"
          className={cn(
            "relative inline-flex shrink-0 items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            copied
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
              : "border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-800 hover:text-zinc-100",
          )}
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-emerald-400" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="size-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export function InstallSection() {
  const [active, setActive] = useState<InstallPlatform["id"]>("windows");
  const platform = INSTALL_COMMANDS.find((item) => item.id === active) ?? INSTALL_COMMANDS[0];

  return (
    <section className="px-4 py-16 sm:py-24 max-md:px-0">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <SectionTitle accent="running.">Get up and</SectionTitle>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          TriStack installs as a standalone native binary for Windows, macOS, and Linux, or runs on
          demand with uv over Python.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl border border-border bg-card/50 p-2 shadow-xl backdrop-blur-sm sm:p-3">
        <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-xl bg-muted/60 p-1.5">
          {INSTALL_COMMANDS.map((item) => {
            const isActive = item.id === active;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                aria-pressed={isActive}
                className={cn(
                  "relative rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isActive
                    ? "bg-background text-foreground shadow-xs ring-1 ring-border/80"
                    : "text-muted-foreground hover:bg-background/50 hover:text-foreground",
                )}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-3 flex flex-col gap-2.5">
          {platform.commands.map((command) => (
            <CommandRow key={command.label || command.command} command={command} />
          ))}
        </div>
      </div>
    </section>
  );
}
