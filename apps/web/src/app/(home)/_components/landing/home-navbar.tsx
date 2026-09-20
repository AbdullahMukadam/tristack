"use client";

import Link from "fumadocs-core/link";
import { SidebarCollapseTrigger, SidebarTrigger } from "fumadocs-ui/layouts/notebook/slots/sidebar";
import { Menu, Moon, PanelLeft, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ComponentProps } from "react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

import { GITHUB_REPO_URL, X_PROFILE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import tristackLogo from "@/public/tristack-logo.png";

import { BrandButton } from "./round-button";

const navLinks = [
  { href: "/docs", label: "Docs" },
  { href: "/new", label: "Builder" },
  { href: "/sponsors", label: "Sponsors" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(href));
}

type HomeNavbarProps = ComponentProps<"header"> & {
  variant?: "home" | "docs";
};

export function HomeNavbar({ variant = "home", className, ...props }: HomeNavbarProps) {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const isDocs = variant === "docs";

  return (
    <header
      id={isDocs ? "nd-subnav" : undefined}
      {...props}
      className={cn(
        isDocs
          ? "sticky top-(--fd-docs-row-1) z-20 border-b border-border bg-fd-background/85 backdrop-blur-lg [grid-area:header] layout:[--fd-header-height:--spacing(16)] max-md:layout:[--fd-header-height:--spacing(16)]"
          : "sticky top-0 z-40 border-b border-border bg-fd-background/85 backdrop-blur-lg",
        className,
      )}
    >
      <div
        className={cn(
          "flex h-12 items-stretch border-border",
          !isDocs && "mx-auto w-full max-w-6xl border-x",
        )}
      >
        {/* Brand cell */}
        <Link
          href="/"
          aria-label="TriStack home"
          className="group flex h-full shrink-0 items-center justify-start border-r border-border px-2 transition-colors hover:bg-fd-muted sm:px-2"
        >
          <div className="flex items-center gap-0">
            <Image
              alt="TriStack logo"
              src={tristackLogo}
              className="h-6 w-auto ml-[-10px] mr-[-5px]"
              priority
            />
            <span className="text-sm font-bold tracking-tight text-fd-foreground">TriStack</span>
          </div>
        </Link>

        {/* Nav links - desktop */}
        <nav
          aria-label="Main"
          className={cn("h-full items-stretch", isDocs ? "hidden md:flex" : "hidden sm:flex")}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex h-full items-center justify-center border-r border-border px-4 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-muted hover:text-fd-foreground max-md:px-3",
                isActive(pathname, link.href) && "text-fd-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="ml-auto flex h-full items-stretch">
          {/* Theme toggle */}
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="flex h-full w-10 items-center justify-center border-l border-border px-3 text-fd-muted-foreground transition-colors hover:bg-fd-muted hover:text-fd-foreground sm:w-[44px]"
          >
            {isDark ? <Moon className="size-4.5" /> : <Sun className="size-4.5" />}
          </button>

          {/* Social links */}
          <a
            href={X_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="flex h-full w-10 shrink-0 items-center justify-center border-l border-border text-fd-muted-foreground transition-colors hover:bg-fd-muted hover:text-fd-foreground sm:w-[44px]"
          >
            <FaXTwitter className="size-4" />
          </a>
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="flex h-full w-10 shrink-0 items-center justify-center border-l border-r border-border text-fd-muted-foreground transition-colors hover:bg-fd-muted hover:text-fd-foreground sm:w-[44px]"
          >
            <FaGithub className="size-4" />
          </a>

          {/* Sidebar controls - docs */}
          {isDocs ? (
            <>
              <SidebarCollapseTrigger className="hidden h-full w-10 shrink-0 items-center justify-center border-l border-r border-border text-fd-muted-foreground transition-colors hover:bg-fd-muted hover:text-fd-foreground sm:w-[44px] md:flex">
                <PanelLeft className="size-4.5" />
              </SidebarCollapseTrigger>
              <SidebarTrigger className="flex h-full w-10 shrink-0 items-center justify-center border-l border-border text-fd-muted-foreground transition-colors hover:bg-fd-muted hover:text-fd-foreground sm:w-[44px] md:hidden">
                <PanelLeft className="size-4.5" />
              </SidebarTrigger>
            </>
          ) : (
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="home-menu"
              onClick={() => setOpen(!open)}
              className="flex h-full w-10 items-center justify-center border-l border-border text-fd-muted-foreground transition-colors hover:bg-fd-muted hover:text-fd-foreground sm:hidden sm:w-[44px]"
            >
              {open ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
            </button>
          )}

          {/* CTA - desktop */}
          <div className={cn("p-2", isDocs ? "hidden md:block" : "hidden sm:block")}>
            <BrandButton
              href="https://github.com/sponsors/AbdullahMukadam"
              label={<>Sponsor us</>}
              className="h-8"
            />
          </div>
        </div>
      </div>

      {/* Mobile menu - home only */}
      <AnimatePresence>
        {!isDocs && open && (
          <motion.div
            id="home-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute inset-x-0 top-16 z-50 border-b border-border bg-fd-background px-4 py-3 shadow-lg sm:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-4 py-2.5 text-sm font-medium text-fd-muted-foreground transition-colors hover:bg-fd-muted hover:text-fd-foreground",
                    isActive(pathname, link.href) && "text-fd-foreground",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/new"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-1.5 rounded-md bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-brand-on-accent"
              >
                Build your stack
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function HomeNavbarDocs(props: ComponentProps<"header">) {
  return <HomeNavbar variant="docs" {...props} />;
}
