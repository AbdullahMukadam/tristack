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

import { LandingFooter } from "../../_components/landing/landing-footer";
import { BrandButton } from "../../_components/landing/round-button";
import { SectionDivider } from "../../_components/landing/section-divider";
import { PageHeader } from "../../_components/page-header";

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
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-subtle text-brand-ink">
        {icon}
      </span>
      <h2 className="text-sm font-semibold text-fd-foreground">{title}</h2>
      <span className="ml-auto text-xs text-fd-muted-foreground tabular-nums">{count}</span>
    </div>
  );
}

function SponsorLinks({ sponsor, muted = false }: { sponsor: Sponsor; muted?: boolean }) {
  const sponsorUrl = getSponsorUrl(sponsor);
  const linkClass = muted
    ? "flex items-center gap-2 text-[13px] leading-[1.55] text-fd-muted-foreground/70 transition-colors duration-150 hover:text-fd-muted-foreground"
    : "flex items-center gap-2 text-[13px] leading-[1.55] text-fd-muted-foreground transition-colors duration-150 hover:text-fd-foreground";

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
    <div className="@container flex flex-col rounded-lg border border-border bg-fd-muted/10">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2">
        <span className="inline-flex items-center gap-1 rounded-md bg-brand-subtle px-1.5 py-0.5 text-xs font-medium text-brand-ink">
          <Star aria-hidden="true" className="size-3" />
          Special
        </span>
        <span className="ml-auto text-xs text-fd-muted-foreground">since {sponsor.sinceWhen}</span>
      </div>
      <div className="flex flex-1 gap-4 p-4">
        <Image
          src={sponsor.avatarUrl}
          alt={sponsor.name}
          width={112}
          height={112}
          className="@2xs:size-24 @sm:size-28 size-20 shrink-0 self-start rounded-lg border border-border"
          unoptimized
        />
        <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
          <div className="min-w-0">
            <h3 className="wrap-anywhere text-base font-medium leading-[1.5] text-fd-foreground">
              {sponsor.name}
            </h3>
            <p className="text-xs leading-[1.55] text-fd-muted-foreground">{sponsor.tierName}</p>
          </div>
          <SponsorLinks sponsor={sponsor} />
        </div>
      </div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-border px-3 py-2">
        <span className="text-xs text-fd-muted-foreground">Lifetime support</span>
        <span className="text-[13px] font-semibold text-brand tabular-nums">
          {sponsor.formattedAmount}
        </span>
      </div>
    </div>
  );
}

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="@container flex flex-col rounded-lg border border-border bg-fd-muted/10">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2">
        <span className="ml-auto text-xs text-fd-muted-foreground">since {sponsor.sinceWhen}</span>
      </div>
      <div className="flex flex-1 gap-4 p-4">
        <Image
          src={sponsor.avatarUrl}
          alt={sponsor.name}
          width={100}
          height={100}
          className="@2xs:size-20 @xs:size-24 size-16 shrink-0 self-start rounded-lg border border-border"
          unoptimized
        />
        <div className="flex min-w-0 flex-1 flex-col justify-between gap-2">
          <div className="min-w-0">
            <h3 className="wrap-anywhere text-[13px] font-medium leading-[1.55] text-fd-foreground">
              {sponsor.name}
            </h3>
            <p className="text-xs leading-[1.55] text-fd-muted-foreground">{sponsor.tierName}</p>
            {shouldShowLifetimeTotal(sponsor) && (
              <p className="text-xs leading-[1.55] text-fd-muted-foreground tabular-nums">
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
      className="group flex items-center gap-2 rounded-lg border border-border bg-fd-muted/10 px-3 py-2 transition-colors duration-150 hover:bg-fd-muted"
    >
      <Image
        src={sponsor.avatarUrl}
        alt={sponsor.name}
        width={28}
        height={28}
        className="size-7 shrink-0 rounded-md border border-border"
        unoptimized
      />
      <span className="wrap-anywhere text-[13px] leading-[1.55] text-fd-foreground transition-colors duration-150 group-hover:text-brand">
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
      className="group flex items-center gap-3 rounded-lg border border-border bg-fd-muted/10 px-3 py-2 transition-colors duration-150 hover:bg-fd-muted"
    >
      <Image
        src={sponsor.avatarUrl}
        alt={sponsor.name}
        width={36}
        height={36}
        className="size-9 shrink-0 rounded-lg border border-border"
        unoptimized
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="wrap-anywhere text-[13px] leading-[1.55] text-fd-muted-foreground transition-colors duration-150 group-hover:text-fd-foreground">
            {sponsor.name}
          </span>
          {wasSpecial && <Star aria-hidden="true" className="size-3 shrink-0 text-brand/70" />}
        </div>
        <span className="text-xs text-fd-muted-foreground/70 tabular-nums">
          {sponsor.formattedAmount}
        </span>
      </div>
    </a>
  );
}

export function SponsorsPage({ sponsorsData }: { sponsorsData: SponsorsData }) {
  const { specialSponsors, sponsors, pastSponsors, backers } = sponsorsData;
  const activeCount = specialSponsors.length + sponsors.length;
  const lastSync = sponsorsData.generated_at.slice(0, 10);

  return (
    <>
      <div className="mx-auto w-full max-w-6xl border-x border-border px-4 pt-16 pb-16 font-normal text-fd-foreground">
        <div className="flex flex-col">
          <PageHeader
            icon={Heart}
            title="Sponsors"
            description="The companies and developers funding TriStack"
            meta={`Last synced ${lastSync}`}
          />

          <SectionDivider />

          {activeCount === 0 && (
            <div className="rounded-xl border border-border m-4 md:m-6 bg-fd-muted/10 px-6 py-16 text-center">
              <span className="mx-auto flex size-10 items-center justify-center rounded-lg bg-brand-subtle text-brand-ink">
                <Heart aria-hidden="true" className="size-5" />
              </span>
              <p className="mt-4 mb-1 text-sm font-medium text-fd-foreground">
                No active sponsors yet
              </p>
              <p className="mx-auto max-w-sm text-[13px] leading-[1.55] text-fd-muted-foreground">
                Be the first to support this project — every contribution keeps TriStack free and
                open source.
              </p>
            </div>
          )}

          {specialSponsors.length > 0 && (
            <>
              <section className="space-y-4 m-6 pt-4 pb-6">
                <SectionHeader
                  icon={<Star aria-hidden="true" className="h-3.5 w-3.5" />}
                  title="Special sponsors"
                  count={specialSponsors.length}
                />
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {specialSponsors.map((sponsor) => (
                    <SpecialSponsorCard key={sponsor.githubId} sponsor={sponsor} />
                  ))}
                </div>
              </section>
            </>
          )}

          {(sponsors.length > 0 || backers.length > 0) && (
            <section className="space-y-6 pt-4 pb-6">
              {sponsors.length > 0 && (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {sponsors.map((sponsor) => (
                    <SponsorCard key={sponsor.githubId} sponsor={sponsor} />
                  ))}
                </div>
              )}

              {backers.length > 0 && (
                <section className="space-y-4 pt-4 pb-6">
                  <SectionHeader
                    icon={<Users aria-hidden="true" className="h-3.5 w-3.5" />}
                    title="Backers"
                    count={backers.length}
                  />
                  <div className="flex flex-wrap gap-4">
                    {backers.map((sponsor) => (
                      <BackerChip key={sponsor.githubId} sponsor={sponsor} />
                    ))}
                  </div>
                </section>
              )}
            </section>
          )}

          {pastSponsors.length > 0 && (
            <section className="space-y-4">
              <SectionDivider />
              <SectionHeader
                icon={<Archive aria-hidden="true" className="h-3.5 w-3.5" />}
                title="Past sponsors"
                count={pastSponsors.length}
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {pastSponsors.map((sponsor) => (
                  <PastSponsorRow key={sponsor.githubId} sponsor={sponsor} />
                ))}
              </div>
            </section>
          )}

          <SectionDivider />

          <div className="rounded-xl border border-border m-4 mb:m-6 bg-fd-muted/10 p-10 sm:p-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <p className="max-w-md text-[15px] leading-[1.6] text-fd-muted-foreground">
                Sponsorship funds development and infrastructure for TriStack.
              </p>
              <BrandButton
                href="https://github.com/sponsors/AbdullahMukadam"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black"
                innerClassName="bg-black text-brand ring-brand/40 [text-shadow:0_0_14px_var(--brand-glow)]"
                label={
                  <span className="flex items-center gap-2">
                    <Heart aria-hidden="true" className="size-4" />
                    Become a sponsor
                  </span>
                }
              />
              <p className="max-w-md text-[13px] leading-[1.55] text-fd-muted-foreground">
                One-time sponsorships count too: every $100 one-time equals a month of special
                placement.
              </p>
            </div>
          </div>
        </div>
      </div>
      <LandingFooter />
    </>
  );
}
