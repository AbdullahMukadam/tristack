import type { Metadata } from "next";
import { Suspense } from "react";

import { createPageMetadata } from "@/lib/metadata";

import { StackBuilder } from "./_components/stack-builder";

export const metadata: Metadata = createPageMetadata({
  title: "Stack builder",
  description:
    "Build your Python, Go, or Rust stack visually. Pick a framework, ORM, database, and addons, then copy a ready-to-run TriStack command.",
  path: "/new",
});

export default function FullScreenStackBuilder() {
  return (
    <Suspense>
      <div className="mx-auto w-full max-w-6xl border-x border-border">
        <StackBuilder />
      </div>
    </Suspense>
  );
}
