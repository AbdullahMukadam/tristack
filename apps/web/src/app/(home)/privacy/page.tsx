export const dynamic = "force-static";

import { ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { SITE_URL, SUPPORT_EMAIL } from "@/lib/site";

import { TrustPage, TrustSection, trustPageLinkClass } from "../_components/trust-page";

const description =
  "What the TriStack website and CLI collect, why it is used, and how to opt out.";

export const metadata: Metadata = {
  title: "Privacy - TriStack",
  description,
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy - TriStack",
    description,
    url: `${SITE_URL}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <TrustPage icon={ShieldCheck} title="Privacy" description={description}>
      <TrustSection title="Website analytics">
        <p>
          In its current phase the website does not load analytics scripts. The site displays
          externally hosted content such as videos, social posts, images, and sponsor information.
          Requests to those external services are governed by their own privacy practices and may
          expose ordinary connection information such as an IP address, browser headers, and the
          requested resource.
        </p>
        <p>
          TriStack does not provide user accounts on this website and does not sell personal
          information. Theme and interface preferences may be stored locally in the browser.
        </p>
      </TrustSection>

      <TrustSection title="CLI telemetry">
        <p>
          The CLI accepts a <code>--disable-analytics</code> flag and an optional
          <code>DO_NOT_TRACK=1</code> convention. In TriStack Phase 1 the CLI does not yet send
          telemetry; when it ships, one anonymous event per successful scaffold will cover selected
          stack options and basic environment fields: CLI version, language, package manager, and
          platform. This information is used to understand which integrations are used and to guide
          maintenance priorities.
        </p>
        <p>
          The telemetry payload is designed to omit project names, paths, file contents, secrets,
          environment variables, IP addresses, and persistent user or project identifiers.
        </p>
      </TrustSection>

      <TrustSection title="Choices and control">
        <p>
          Disable CLI telemetry for one command with{" "}
          <code className="rounded bg-fd-muted px-1.5 py-0.5">--disable-analytics</code>. The
          cross-tool <code className="rounded bg-fd-muted px-1.5 py-0.5">DO_NOT_TRACK=1</code>{" "}
          convention is honored as well. Either variable can be added to a shell profile when
          telemetry should remain disabled. Project generation continues to work when telemetry is
          off.
        </p>
        <p>
          See the{" "}
          <Link href="/docs/analytics" className={trustPageLinkClass}>
            analytics and telemetry documentation
          </Link>{" "}
          for the exact payload, public aggregates, and source-code links.
        </p>
      </TrustSection>

      <TrustSection title="Retention and contact">
        <p>
          Because the project does not currently send CLI events, there is no CLI data to retain.
          Aggregate website statistics do not contain persistent user identifiers. Infrastructure
          providers may retain operational logs under their own policies.
        </p>
        <p>
          Questions about this notice can be sent to{" "}
          <Link href={`mailto:${SUPPORT_EMAIL}`} className={trustPageLinkClass}>
            {SUPPORT_EMAIL}
          </Link>
          . This notice will be revised when collection or processing materially changes.
        </p>
      </TrustSection>
    </TrustPage>
  );
}
