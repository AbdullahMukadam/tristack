"use client";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

function Label({ children }: { children: string }) {
  return (
    <span className="text-xs font-medium text-fd-muted-foreground uppercase tracking-wide">
      {children}
    </span>
  );
}

export default function InstallPane() {
  return (
    <div className="flex w-full max-w-[680px] flex-col items-center gap-6 text-center">
      <div className="flex flex-col items-center gap-2.5">
        <Label>install</Label>
        <p className="mx-auto max-w-[52ch] text-[14px] leading-[1.6] text-fd-muted-foreground">
          TriStack runs as a standalone native binary. Python devs use{" "}
          <code className="text-sm font-semibold text-fd-foreground">uvx tristack</code>; Go and
          Rust devs use the standalone{" "}
          <code className="text-sm font-semibold text-fd-foreground">tristack</code>.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a href="/docs" className={cn(buttonVariants({ size: "sm" }))}>
            Read the docs
          </a>
          <a
            href="/docs/cli/agent-workflows#mcp"
            onClick={() => track("home_cta", { target: "mcp-docs" })}
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
        <Link
          href="/new"
          onClick={() => track("home_cta", { target: "builder" })}
          className={cn(buttonVariants({ size: "default" }))}
        >
          Open the builder
        </Link>
      </div>
    </div>
  );
}
