export const dynamic = "force-static";

import { Info } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { REPOSITORY_URL, SITE_URL } from "@/lib/site";

import { TrustPage, TrustSection, trustPageLinkClass } from "../_components/trust-page";

const description =
  "How TriStack helps developers and coding agents create modern backend applications across languages.";

export const metadata: Metadata = {
  title: "About - TriStack",
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About - TriStack",
    description,
    url: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  return (
    <TrustPage icon={Info} title="About" description={description}>
      <TrustSection title="What it is">
        <p>
          TriStack is a free, MIT-licensed command-line tool for scaffolding backend applications
          across multiple languages. In the current Python phase, developers choose the framework
          (FastAPI, Litestar, Django, Flask), ORM, database, migrations, package manager, and
          optional addons that fit their project. Go and Rust phases extend the same flow to their
          own option sets. The generator then creates a focused codebase instead of forcing a fixed
          starter stack.
        </p>
        <p>
          Generated projects are ordinary source code under the developer's control. They do not
          depend on a required TriStack account, subscription, or hosted runtime after generation.
        </p>
      </TrustSection>

      <TrustSection title="Who it's for">
        <p>
          The project is intended for backend developers, teams, educators, automation tools, and
          coding agents that want a reproducible starting point. It supports interactive prompts,
          explicit CLI flags, and structured JSON commands via the CLI.
        </p>
        <p>
          Start with the{" "}
          <Link href="/docs" className={trustPageLinkClass}>
            documentation
          </Link>
          , configure a project in the{" "}
          <Link href="/new" className={trustPageLinkClass}>
            browser builder
          </Link>
          , or inspect the source repository.
        </p>
      </TrustSection>

      <TrustSection title="Open source">
        <p>
          Development happens publicly on GitHub. The repository contains the CLI, template
          generator, shared schemas, website, documentation, tests, and issue tracker. Bug reports,
          focused feature proposals, documentation improvements, and pull requests are welcome under
          the project contribution guidelines.
        </p>
        <p>
          Review the{" "}
          <Link href={REPOSITORY_URL} className={trustPageLinkClass}>
            source repository
          </Link>{" "}
          to understand exactly what is generated.
        </p>
      </TrustSection>

      <TrustSection title="Project values">
        <p>
          TriStack favors explicit choices, minimal templates, reproducible commands, and
          transparent compatibility rules. Its goal is to remove setup friction while leaving
          architecture decisions and long-term ownership with the people building the application.
        </p>
        <p>
          The project does not claim that one stack fits every team. It provides composable options
          and validation so developers can roll their own stack with fewer avoidable integration
          mistakes.
        </p>
      </TrustSection>
    </TrustPage>
  );
}
