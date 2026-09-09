"use client";

import { Check, Copy } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

import { buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { INSTALL_COMMANDS, type InstallCommand } from "@/lib/install-commands";
import { cn } from "@/lib/utils";

function Label({ children }: { children: string }) {
  return (
    <span className="text-xs font-medium text-fd-muted-foreground uppercase tracking-wide">
      {children}
    </span>
  );
}

function CommandBlock({ command }: { command: InstallCommand }) {
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
    <div className="flex flex-col items-stretch gap-1.5">
      <span className="text-xs text-fd-muted-foreground">{command.label}</span>
      <div
        role="button"
        tabIndex={0}
        className="flex cursor-pointer items-center justify-between gap-3 rounded-md border border-border bg-fd-background px-3 py-2.5 text-left transition-colors hover:border-muted-foreground/30 hover:bg-muted"
        onClick={copyCommand}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            copyCommand();
          }
        }}
        aria-label={`Copy command: ${command.command}`}
        title="Click to copy command"
      >
        <code className="min-w-0 flex-1 truncate font-mono text-sm text-fd-foreground">
          {command.command}
        </code>
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
  );
}

export default function InstallPane() {
  return (
    <div className="flex w-full max-w-[680px] flex-col items-center gap-6 text-center">
      <div className="flex flex-col items-center gap-2.5">
        <Label>install</Label>
        <p className="mx-auto max-w-[52ch] text-[14px] leading-[1.6] text-fd-muted-foreground">
          TriStack installs as a standalone native binary or over Python. Pick your platform.
        </p>
        <Tabs defaultValue="windows">
          <TabsList variant="line">
            {INSTALL_COMMANDS.map((platform) => (
              <TabsTrigger key={platform.id} value={platform.id}>
                {platform.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {INSTALL_COMMANDS.map((platform) => (
            <TabsContent key={platform.id} value={platform.id} className="pt-4">
              <div
                className={cn("flex flex-col gap-3", platform.commands.length > 1 && "text-left")}
              >
                {platform.commands.map((command) => (
                  <CommandBlock key={command.label} command={command} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a href="/docs" className={cn(buttonVariants({ size: "sm" }))}>
            Read the docs
          </a>
          <a
            href="/docs/cli/agent-workflows#mcp"
            className={cn(buttonVariants({ size: "sm", variant: "outline" }))}
          >
            Run as an MCP server
          </a>
        </div>
      </div>

      <span aria-hidden="true" className="h-px w-full bg-fd-border" />

      <div className="flex flex-col items-center gap-3">
        <Label>stack builder</Label>
        <p className="mx-auto max-w-[52ch] text-[14px] leading-[1.6] text-fd-muted-foreground">
          Configure every option in the browser, then copy the generated command.
        </p>
        <Link href="/new" className={cn(buttonVariants({ size: "default" }))}>
          Open the builder
        </Link>
      </div>
    </div>
  );
}
