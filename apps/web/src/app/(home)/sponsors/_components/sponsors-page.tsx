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
    <div className="flex items-center gap-3">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand shadow-sm ring-1 ring-brand/20">
        {icon}
      </div>
      <h2 className="text-lg font-semibold tracking-tight text-fd-foreground">{title}</h2>
      <span className="ml-auto rounded-full bg-fd-muted/50 px-2.5 py-0.5 text-xs font-medium text-fd-muted-foreground ring-1 ring-border/50">
        {count}
      </span>
    </div>
  );
}

function SponsorLinks({ sponsor, muted = false }: { sponsor: Sponsor; muted?: boolean }) {
  const sponsorUrl = getSponsorUrl(sponsor);
  const linkClass = muted
    ? "flex items-center gap-2 text-xs font-medium text-fd-muted-foreground/60 transition-colors duration-200 hover:text-fd-muted-foreground"
    : "flex items-center gap-2 text-xs font-medium text-fd-muted-foreground transition-colors duration-200 hover:text-fd-foreground";

  return (
    <div className="flex flex-col gap-1.5 mt-1">
      <a href={sponsor.githubUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
        <FaGithub aria-hidden="true" className="size-3.5 shrink-0" />
        <span className="truncate">{sponsor.githubId}</span>
      </a>
      {sponsor.websiteUrl && (
        <a href={sponsorUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <Globe aria-hidden="true" className="size-3.5 shrink-0" />
          <span className="truncate">{getSponsorUrlLabel(sponsor)}</span>
        </a>
      )}
    </div>
  );
}

function SpecialSponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-b from-fd-muted/10 to-transparent transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-center justify-between border-b border-border/40 px-4 py-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-1 text-xs font-semibold text-brand ring-1 ring-brand/20">
          <Star aria-hidden="true" className="size-3.5 fill-brand/20" />
          Special
        </span>
        <span className="text-xs font-medium text-fd-muted-foreground">
          since {sponsor.sinceWhen}
        </span>
      </div>

      <div className="flex flex-1 gap-5 p-5">
        <div className="relative shrink-0">
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-brand/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <Image
            src={sponsor.avatarUrl}
            alt={sponsor.name}
            width={112}
            height={112}
            className="relative size-20 sm:size-24 rounded-xl border border-border/50 bg-background object-cover shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
            unoptimized
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center gap-2">
          <div className="min-w-0">
            <h3 className="truncate text-base font-semibold tracking-tight text-fd-foreground transition-colors group-hover:text-brand">
              {sponsor.name}
            </h3>
            <p className="text-sm text-fd-muted-foreground">{sponsor.tierName}</p>
          </div>
          <SponsorLinks sponsor={sponsor} />
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-border/40 bg-fd-muted/5 px-4 py-3">
        <span className="text-xs font-medium text-fd-muted-foreground">Lifetime support</span>
        <span className="text-sm font-bold tracking-tight text-brand">
          {sponsor.formattedAmount}
        </span>
      </div>
    </div>
  );
}

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="group flex flex-col rounded-2xl border border-border/60 bg-fd-muted/5 transition-all duration-300 hover:border-border hover:bg-fd-muted/10 hover:shadow-md">
      <div className="flex items-center justify-end border-b border-border/40 px-4 py-2.5">
        <span className="text-xs font-medium text-fd-muted-foreground">
          since {sponsor.sinceWhen}
        </span>
      </div>

      <div className="flex flex-1 gap-4 p-5">
        <Image
          src={sponsor.avatarUrl}
          alt={sponsor.name}
          width={80}
          height={80}
          className="size-16 shrink-0 rounded-xl border border-border/50 bg-background object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
          unoptimized
        />

        <div className="flex min-w-0 flex-1 flex-col justify-center gap-2">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold tracking-tight text-fd-foreground">
              {sponsor.name}
            </h3>
            <p className="text-xs font-medium text-fd-muted-foreground">{sponsor.tierName}</p>
            {shouldShowLifetimeTotal(sponsor) && (
              <p className="mt-0.5 text-xs font-medium text-fd-muted-foreground/70">
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
      className="group flex items-center gap-3 rounded-full border border-border/60 bg-fd-muted/5 py-1.5 pl-1.5 pr-4 transition-all duration-300 hover:border-brand/30 hover:bg-brand/5 hover:shadow-sm"
    >
      <Image
        src={sponsor.avatarUrl}
        alt={sponsor.name}
        width={28}
        height={28}
        className="size-7 shrink-0 rounded-full border border-border/50 shadow-sm transition-transform duration-300 group-hover:scale-110"
        unoptimized
      />
      <div className="flex flex-col justify-center">
        <span className="truncate text-sm font-medium leading-tight text-fd-foreground transition-colors group-hover:text-brand">
          {sponsor.name}
        </span>
        <span className="text-[10px] font-medium uppercase tracking-wider text-fd-muted-foreground/70">
          {sponsor.tierName}
        </span>
      </div>
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
      className="group flex items-center gap-3 rounded-xl border border-border/40 bg-transparent px-3 py-2.5 transition-all duration-200 hover:border-border/80 hover:bg-fd-muted/10"
    >
      <Image
        src={sponsor.avatarUrl}
        alt={sponsor.name}
        width={36}
        height={36}
        className="size-9 shrink-0 rounded-lg border border-border/50 opacity-80 transition-all duration-200 group-hover:opacity-100"
        unoptimized
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="truncate text-sm font-medium text-fd-muted-foreground transition-colors group-hover:text-fd-foreground">
            {sponsor.name}
          </span>
          {wasSpecial && <Star aria-hidden="true" className="size-3.5 shrink-0 text-brand/70" />}
        </div>
        <span className="text-xs font-medium text-fd-muted-foreground/60">
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
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <PageHeader
            icon={Heart}
            title="Sponsors"
            description="The companies and developers funding TriStack"
            meta={`Last synced ${lastSync}`}
          />

          <SectionDivider />

          {activeCount === 0 && (
            <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border/60 bg-fd-muted/5 px-6 py-24 text-center">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-fd-muted/20 text-fd-muted-foreground ring-1 ring-border/50">
                <Heart aria-hidden="true" className="size-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-fd-foreground">
                No active sponsors yet
              </h3>
              <p className="mt-2 max-w-md text-sm text-fd-muted-foreground">
                Be the first to support this project. Every contribution helps keep TriStack free,
                actively maintained, and open source.
              </p>
            </div>
          )}

          {specialSponsors.length > 0 && (
            <section className="flex flex-col gap-6">
              <SectionHeader
                icon={<Star aria-hidden="true" className="size-4" />}
                title="Special sponsors"
                count={specialSponsors.length}
              />
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {specialSponsors.map((sponsor) => (
                  <SpecialSponsorCard key={sponsor.githubId} sponsor={sponsor} />
                ))}
              </div>
            </section>
          )}

          {(sponsors.length > 0 || backers.length > 0) && (
            <div className="flex flex-col gap-12">
              {sponsors.length > 0 && (
                <section className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {sponsors.map((sponsor) => (
                      <SponsorCard key={sponsor.githubId} sponsor={sponsor} />
                    ))}
                  </div>
                </section>
              )}

              {backers.length > 0 && (
                <section className="flex flex-col gap-6">
                  <SectionHeader
                    icon={<Users aria-hidden="true" className="size-4" />}
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
            </div>
          )}

          {pastSponsors.length > 0 && (
            <section className="flex flex-col gap-6 pt-8">
              <SectionDivider />
              <SectionHeader
                icon={<Archive aria-hidden="true" className="size-4" />}
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

          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-b from-fd-muted/10 to-fd-muted/5 px-6 py-16 sm:px-12 sm:py-20">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
            <div className="relative flex flex-col items-center gap-6 text-center">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold tracking-tight text-fd-foreground">
                  Support TriStack's Future
                </h3>
                <p className="mx-auto max-w-lg text-base text-fd-muted-foreground">
                  Sponsorship directly funds ongoing development, infrastructure, and maintenance.
                  One-time sponsorships count too: every $100 one-time equals a month of special
                  placement.
                </p>
              </div>

              <div className="mt-2">
                <BrandButton
                  href="https://github.com/sponsors/AbdullahMukadam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" transition-transform duration-300 hover:scale-105"
                  innerClassName="bg-black text-brand ring-brand/40 [text-shadow:0_0_14px_var(--brand-glow)] px-6 py-2.5"
                  label={
                    <span className="flex items-center gap-2 text-sm font-semibold">
                      <Heart aria-hidden="true" className="size-4 fill-brand/20" />
                      Become a sponsor
                    </span>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <LandingFooter />
    </>
  );
}
