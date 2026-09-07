export const dynamic = "force-static";

import type { Metadata } from "next";

import { ColophonFooter } from "./_components/rail/panes/colophon-footer";
import InitPane from "./_components/rail/panes/init-pane";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    types: {
      "text/markdown": "/llms.txt",
    },
  },
};

export default async function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <h1 className="sr-only">TriStack: roll your own stack</h1>
      <InitPane />
      <div className="mt-8 w-full max-w-[680px]">
        <ColophonFooter />
      </div>
    </div>
  );
}
