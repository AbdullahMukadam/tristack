"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

import { REPOSITORY_URL, SUPPORT_EMAIL } from "@/lib/site";
import tristackLogo from "@/public/tristack-logo.png";

import { BrandButton } from "./round-button";

type LinkColumn = {
  heading: string;
  links: { label: string; href: string; external?: boolean }[];
};

const columns: LinkColumn[] = [
  {
    heading: "Project",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Sponsors", href: "/sponsors" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "Stack Builder", href: "/new" },
      { label: "Agent workflows", href: "/docs/cli/agent-workflows" },
      { label: "GitHub", href: REPOSITORY_URL, external: true },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "X", href: "https://x.com/abd_mukadam", external: true },
      { label: "Email", href: `mailto:${SUPPORT_EMAIL}`, external: true },
    ],
  },
];

const socialLinks = [
  {
    label: "X",
    href: "https://x.com/abd_mukadam",
    icon: <FaXTwitter />,
  },
  {
    label: "GitHub",
    href: REPOSITORY_URL,
    icon: <FaGithub />,
  },
];

export function LandingFooter() {
  return (
    <footer className="group relative overflow-hidden border-t border-border">
      <div className="mx-auto max-w-6xl border-x border-border">
        {/* CTA band */}
        <div className="relative overflow-hidden bg-brand-gradient">
          <div className="relative flex flex-col items-center justify-center gap-8 px-4 py-20 text-center sm:py-28 min-h-[320px]">
            {/* Content */}
            <h2 className="relative z-10 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              Ready to roll your own stack?
            </h2>

            <BrandButton
              href="/new"
              className="relative z-10 bg-black hover:scale-[1.02] shadow-md"
              innerClassName="bg-black text-brand ring-brand/40 [text-shadow:0_0_14px_var(--brand-glow)]"
              label={
                <>
                  Build your stack
                  <ArrowUpRight className="size-4" />
                </>
              }
            />
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-8 border-t border-border px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:pr-6">
            <div className="mb-4 flex items-center gap-2.5">
              <Image
                alt="TriStack logo"
                src={tristackLogo}
                className="ml-[-10px] mr-[-10px] h-6 w-auto"
              />
              <h3 className="text-base font-bold text-fd-foreground">TriStack</h3>
            </div>
            <p className="text-sm leading-relaxed text-fd-muted-foreground">
              Stack-composable scaffolding for Python, Go, and Rust projects.
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.heading}>
              <h3 className="mb-4 text-base font-bold text-fd-foreground">{column.heading}</h3>
              <ul className="space-y-2.5 text-sm text-fd-muted-foreground">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      className="inline-block transition-colors hover:text-fd-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-border px-4 py-6 sm:flex-row">
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="inline-flex size-9 items-center justify-center rounded-md border border-border text-fd-muted-foreground transition-colors hover:bg-fd-muted hover:text-fd-foreground"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-xs text-fd-muted-foreground sm:text-sm">
            © {new Date().getFullYear()} TriStack. Fork of Better-T-Stack (MIT).
          </p>
        </div>

        {/* Watermark */}
        <div
          aria-hidden
          className="flex w-full select-none items-end justify-center overflow-hidden"
        >
          <span className="translate-y-[18%] cursor-default text-[24vw] font-bold leading-none tracking-tighter text-foreground opacity-[0.04] transition-opacity duration-300 hover:opacity-[0.18]">
            TriStack
          </span>
        </div>
      </div>
    </footer>
  );
}
