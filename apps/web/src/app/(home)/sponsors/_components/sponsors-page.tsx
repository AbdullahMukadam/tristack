import { Archive, Globe, Heart, Star, Users } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";

import {
  getSponsorUrl,
  getSponsorUrlLabel,
  isLifetimeSpecialSponsor,
  shouldShowLifetimeTotal,
} from "@/lib/sponsor-utils";
import type { Sponsor, SponsorsData } from "@/lib/types";

import { PageHeader } from "../../_components/page-header";
import { PageShell } from "../../_components/page-shell";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function SummaryTile({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="min-w-0 lg:border-l lg:pl-5 lg:first:border-l-0 lg:first:pl-0">
      <div className="text-xs font-medium text-fd-muted-foreground">{label}</div>
      <div className="mt-1 font-semibold text-[20px] tracking-[-0.02em] tabular-nums">{value}</div>
      <p className="mt-1 text-xs text-fd-muted-foreground/70">{detail}</p>
    </div>
  );
}
function SectionHeader({
  icon,
  title,
  count,
}: {
  icon: React.ReactNode;
  title: string;
  count: number;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
      <span className="flex shrink-0 items-center text-fd-muted-foreground">{icon}</span>
      <h2 className="text-sm font-semibold text-fd-foreground">{title}</h2>
      <span aria-hidden="true" className="h-px min-w-4 flex-1 bg-fd-border" />
      <span className="text-xs text-fd-muted-foreground tabular-nums">{count}</span>
    </div>
  );
}

function SponsorLinks({ sponsor, muted = false }: { sponsor: Sponsor; muted?: boolean }) {
  const sponsorUrl = getSponsorUrl(sponsor);
  const linkClass = muted
    ? "flex items-center gap-2 text-[13px] text-fd-muted-foreground/70 leading-[1.55] transition-colors duration-150 hover:text-fd-muted-foreground"
    : "flex items-center gap-2 text-[13px] text-fd-muted-foreground leading-[1.55] transition-colors duration-150 hover:text-primary";

  return (
    <div className="flex flex-col">
      <a href={sponsor.githubUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
        <FaGithub aria-hidden="true" className="size-3 shrink-0" />
        <span className="wrap-anywhere">{sponsor.githubId}</span>
      </a>
      {sponsor.websiteUrl && (
        <a href={sponsorUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <Globe aria-hidden="true" className="size-3 shrink-0" />
          <span className="wrap-anywhere">{getSponsorUrlLabel(sponsor)}</span>
        </a>
      )}
    </div>
  );
}

function SpecialSponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="@container flex flex-col rounded-md border">
      <div className="flex items-center gap-2 border-b px-3 py-2">
        <Star aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-primary" />
        <span className="ml-auto text-xs text-fd-muted-foreground">
          Special · since {sponsor.sinceWhen}
        </span>
      </div>
      <div className="flex flex-1 gap-4 p-4">
        <Image
          src={sponsor.avatarUrl}
          alt={sponsor.name}
          width={112}
          height={112}
          className="@2xs:size-24 @sm:size-28 size-20 shrink-0 self-start rounded-md border"
          unoptimized
        />
        <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
          <div className="min-w-0">
            <h3 className="wrap-anywhere text-[15px] font-medium text-fd-foreground leading-[1.5]">
              {sponsor.name}
            </h3>
            <p className="text-[13px] text-fd-muted-foreground leading-[1.55]">
              {sponsor.tierName}
            </p>
          </div>
          <SponsorLinks sponsor={sponsor} />
        </div>
      </div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t px-3 py-2">
        <span className="text-xs text-fd-muted-foreground">Lifetime support</span>
        <span className="text-[13px] font-medium text-fd-foreground tabular-nums">
          {sponsor.formattedAmount}
        </span>
      </div>
    </div>
  );
}

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="@container rounded-md border">
      <div className="flex items-center gap-2 border-b px-3 py-2">
        <span className="ml-auto text-xs text-fd-muted-foreground">since {sponsor.sinceWhen}</span>
      </div>
      <div className="flex gap-4 p-4">
        <Image
          src={sponsor.avatarUrl}
          alt={sponsor.name}
          width={100}
          height={100}
          className="@2xs:size-20 @xs:size-24 size-16 shrink-0 self-start rounded-md border"
          unoptimized
        />
        <div className="flex min-w-0 flex-1 flex-col justify-between gap-2">
          <div className="min-w-0">
            <h3 className="wrap-anywhere text-[13px] font-medium text-fd-foreground leading-[1.55]">
              {sponsor.name}
            </h3>
            <p className="text-[13px] text-fd-muted-foreground leading-[1.55]">
              {sponsor.tierName}
            </p>
            {shouldShowLifetimeTotal(sponsor) && (
              <p className="text-[13px] text-fd-muted-foreground leading-[1.55] tabular-nums">
                Total: {sponsor.formattedAmount}
              </p>
            )}
          </div>
          <SponsorLinks sponsor={sponsor} />
        </div>
      </div>
    </div>
  );
}

function BackerChip({ sponsor }: { sponsor: Sponsor }) {
  return (
    <a
      href={sponsor.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="builder-focus-ring group flex items-center gap-2 rounded-md border px-3 py-2"
    >
      <Image
        src={sponsor.avatarUrl}
        alt={sponsor.name}
        width={28}
        height={28}
        className="size-7 shrink-0 rounded-md border"
        unoptimized
      />
      <span className="wrap-anywhere text-[13px] text-fd-foreground leading-[1.55] transition-colors duration-150 group-hover:text-primary">
        {sponsor.name}
      </span>
      <span className="shrink-0 text-xs text-fd-muted-foreground">{sponsor.tierName}</span>
    </a>
  );
}

function PastSponsorRow({ sponsor }: { sponsor: Sponsor }) {
  const wasSpecial = isLifetimeSpecialSponsor(sponsor);
  return (
    <a
      href={sponsor.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="builder-focus-ring group flex items-center gap-3 rounded-md border px-3 py-2"
    >
      <Image
        src={sponsor.avatarUrl}
        alt={sponsor.name}
        width={36}
        height={36}
        className="size-9 shrink-0 rounded-md border"
        unoptimized
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="wrap-anywhere text-[13px] text-fd-muted-foreground leading-[1.55] transition-colors duration-150 group-hover:text-fd-foreground">
            {sponsor.name}
          </span>
          {wasSpecial && (
            <Star aria-hidden="true" className="size-3 shrink-0 text-fd-muted-foreground/60" />
          )}
        </div>
        <span className="text-xs text-fd-muted-foreground/70 tabular-nums">
          {sponsor.formattedAmount}
        </span>
      </div>
    </a>
  );
}

export function SponsorsPage({ sponsorsData }: { sponsorsData: SponsorsData }) {
  const { summary, specialSponsors, sponsors, pastSponsors, backers } = sponsorsData;
  const activeCount = specialSponsors.length + sponsors.length;
  const lastSync = sponsorsData.generated_at.slice(0, 10);

  return (
    <PageShell>
      <PageHeader
        icon={Heart}
        title="Sponsors"
        description="The companies and developers funding TriStack"
        meta={`Last synced ${lastSync}`}
        actions={
          <a
            href="https://github.com/sponsors/AbdullahMukadam"
            target="_blank"
            rel="noopener noreferrer"
            className="builder-focus-ring flex min-h-8 items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium text-primary transition-colors duration-150 hover:text-fd-foreground"
          >
            <Heart aria-hidden="true" className="h-3.5 w-3.5" />
            <span>Become a sponsor</span>
          </a>
        }
      />

      {activeCount === 0 && (
        <div className="rounded-md border p-10 text-center">
          <p className="mb-2 text-sm font-medium text-fd-foreground">No active sponsors yet</p>
          <p className="text-[13px] text-fd-muted-foreground leading-[1.55]">
            Be the first to support this project!
          </p>
        </div>
      )}

      {specialSponsors.length > 0 && (
        <section className="space-y-4">
          <SectionHeader
            icon={<Star aria-hidden="true" className="h-3.5 w-3.5" />}
            title="Special sponsors"
            count={specialSponsors.length}
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {specialSponsors.map((sponsor) => (
              <SpecialSponsorCard key={sponsor.githubId} sponsor={sponsor} />
            ))}
          </div>
        </section>
      )}

      <section className="space-y-4">
        <SectionHeader
          icon={<Heart aria-hidden="true" className="h-3.5 w-3.5" />}
          title="Active sponsors"
          count={sponsors.length}
        />

        {sponsors.length > 0 && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sponsors.map((sponsor) => (
              <SponsorCard key={sponsor.githubId} sponsor={sponsor} />
            ))}
          </div>
        )}

        {backers.length > 0 && (
          <section className="space-y-4">
            <SectionHeader
              icon={<Users aria-hidden="true" className="h-3.5 w-3.5" />}
              title="Backers"
              count={backers.length}
            />
            <div className="flex flex-wrap gap-3">
              {backers.map((sponsor) => (
                <BackerChip key={sponsor.githubId} sponsor={sponsor} />
              ))}
            </div>
          </section>
        )}
      </section>

      {pastSponsors.length > 0 && (
        <section className="space-y-4">
          <SectionHeader
            icon={<Archive aria-hidden="true" className="h-3.5 w-3.5" />}
            title="Past sponsors"
            count={pastSponsors.length}
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {pastSponsors.map((sponsor) => (
              <PastSponsorRow key={sponsor.githubId} sponsor={sponsor} />
            ))}
          </div>
        </section>
      )}

      <div className="rounded-md border p-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-2 text-[13px] leading-[1.55]">
            <span className="text-primary">$</span>
            <span className="text-fd-muted-foreground">
              Sponsorship funds development and infrastructure for TriStack
            </span>
          </div>
          <a
            href="https://github.com/sponsors/AbdullahMukadam"
            target="_blank"
            rel="noopener noreferrer"
            className="builder-focus-ring flex min-h-9 items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium text-primary transition-colors duration-150 hover:text-fd-foreground"
          >
            <Heart aria-hidden="true" className="h-3.5 w-3.5" />
            <span>Become a sponsor</span>
          </a>
          <p className="text-[13px] text-fd-muted-foreground leading-[1.55]">
            One-time sponsorships count too: every $100 one-time equals a month of special placement
          </p>
        </div>
      </div>
    </PageShell>
  );
}
