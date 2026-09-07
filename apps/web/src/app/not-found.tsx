"use client";

import { FileQuestion } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto min-h-svh">
      <main className="mx-auto max-w-2xl px-4 pt-16 pb-24">
        <div className="mb-8 flex flex-col items-center text-center">
          <FileQuestion className="mb-4 h-10 w-10 text-primary" />
          <p className="mb-2 text-3xl font-bold tracking-tight">This page could not be found</p>
          <p className="mb-6 text-[15px] text-muted-foreground">
            The URL may have changed or the page may no longer exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Return to homepage
          </Link>
        </div>

        <nav aria-label="Recovery links" className="rounded-md border border-border p-4">
          <p className="mb-3 text-sm text-fd-muted-foreground">Try a project index instead:</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/docs"
              className="underline decoration-fd-border underline-offset-4 transition-colors hover:text-primary"
            >
              Documentation
            </Link>
            <Link
              href="/llms.txt"
              className="underline decoration-fd-border underline-offset-4 transition-colors hover:text-primary"
            >
              Agent instructions
            </Link>
            <Link
              href="/sitemap.xml"
              className="underline decoration-fd-border underline-offset-4 transition-colors hover:text-primary"
            >
              Sitemap
            </Link>
          </div>
        </nav>
      </main>
    </div>
  );
}
