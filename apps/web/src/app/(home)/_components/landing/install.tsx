"use client";

import { Check, Copy } from "lucide-react";
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

  const copyCommand = async () => {
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
    <div
      role="button"
      tabIndex={0}
      onClick={copyCommand}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          copyCommand();
        }
      }}
      aria-label={`Copy command: ${command.command}`}
      title="Click to copy command"
      className="group flex min-w-0 cursor-pointer items-center justify-between gap-3 rounded-lg border border-border bg-background px-3 py-2.5 text-left transition-colors hover:border-brand/40"
    >
      <code className="min-w-0 flex-1 truncate font-mono text-sm text-foreground">
        {command.command}
      </code>
      <span
        className={cn(
          "flex shrink-0 items-center gap-1.5 rounded-md border px-2 py-1 text-xs font-medium transition-colors",
          copied
            ? "border-brand/30 bg-brand-subtle text-brand-ink"
            : "border-border text-muted-foreground group-hover:text-foreground",
        )}
      >
        {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
        {copied ? "Copied" : "Copy"}
      </span>
    </div>
  );
}

export function InstallSection() {
  const [active, setActive] = useState<InstallPlatform["id"]>("windows");
  const platform = INSTALL_COMMANDS.find((item) => item.id === active) ?? INSTALL_COMMANDS[0];

  return (
    <section className="max-md:px-0 px-4 py-16 sm:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <SectionTitle accent="running.">Get up and</SectionTitle>
        <p className="max-w-xl text-sm leading-relaxed text-fd-muted-foreground sm:text-base">
          TriStack installs as a standalone native binary for Windows, macOS, and Linux, or runs on
          demand with uv over Python.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-border bg-fd-muted/10 p-2 sm:p-3">
        <div className="flex flex-wrap items-center justify-center gap-1 p-1">
          {INSTALL_COMMANDS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              aria-pressed={item.id === active}
              className={cn(
                "cursor-pointer rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                item.id === active
                  ? "bg-background text-foreground shadow-sm ring-1 ring-border"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2 p-1">
          {platform.commands.map((command) => (
            <CommandRow key={command.label} command={command} />
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="/docs"
          className="inline-flex h-9 items-center rounded-full border border-border bg-background px-5 text-sm font-medium text-fd-foreground transition-colors hover:bg-fd-muted"
        >
          Read the docs
        </a>
        <a
          href="/docs/cli/agent-workflows"
          className="inline-flex h-9 items-center rounded-full px-5 text-sm font-medium text-fd-muted-foreground transition-colors hover:text-fd-foreground"
        >
          Automate with agent workflows
        </a>
      </div>
    </section>
  );
}
