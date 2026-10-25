import { RootProvider } from "fumadocs-ui/provider/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import Providers from "@/components/providers";
import {
  AUTHOR_NAME,
  REPOSITORY_URL,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_OG_IMAGE_ALT,
  SITE_TAGLINE,
  SITE_URL,
  SUPPORT_EMAIL,
  X_HANDLE,
  X_PROFILE_URL,
} from "@/lib/site";

import "./global.css";
import { cn } from "@/lib/utils";

const geistSans = GeistSans;

const geistMono = GeistMono;

const gambarino = localFont({
  src: "./fonts/Gambarino-Regular.ttf",
  variable: "--font-gambarino",
  display: "swap",
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": `${SITE_URL}/#project`,
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/favicons/android-chrome-512x512.png`,
      sameAs: [REPOSITORY_URL, X_PROFILE_URL],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "project support",
        email: SUPPORT_EMAIL,
        url: `${SITE_URL}/contact`,
        availableLanguage: "English",
      },
    },
    {
      "@id": `${SITE_URL}/#software`,
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      alternateName: ["tristack", "uvx tristack"],
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      image: `${SITE_URL}${SITE_OG_IMAGE}`,
      keywords: SITE_KEYWORDS.join(", "),
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Linux, macOS, Windows",
      isAccessibleForFree: true,
      license: `${REPOSITORY_URL}/blob/main/LICENSE`,
      installUrl: `${SITE_URL}/docs`,
      softwareHelp: `${SITE_URL}/docs`,
      provider: {
        "@id": `${SITE_URL}/#project`,
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "Interactive and non-interactive project scaffolding",
        "JSON-first commands for coding agents and automation",
        "Reproducible tristack.jsonc configuration",
        "Python: FastAPI, Django, Flask, Litestar with SQLAlchemy, SQLModel or Tortoise",
        "Go: Gin, Echo, Fiber, Chi or net/http with GORM, sqlc or sqlx",
        "Rust: Axum, Actix Web, Rocket, Salvo or Warp with SeaORM, Diesel or SQLx",
        "PostgreSQL, MySQL and SQLite with migrations",
        "Docker, GitHub Actions and linting addons",
      ],
      author: {
        "@type": "Person",
        name: AUTHOR_NAME,
        url: X_PROFILE_URL,
      },
      sameAs: [REPOSITORY_URL],
    },
    {
      "@id": `${SITE_URL}/#website`,
      "@type": "WebSite",
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      publisher: {
        "@id": `${SITE_URL}/#project`,
      },
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME}: ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: SITE_KEYWORDS,
  authors: [{ name: AUTHOR_NAME, url: X_PROFILE_URL }],
  creator: AUTHOR_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: `${SITE_NAME}: ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: SITE_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_OG_IMAGE_ALT,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME}: ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    site: X_HANDLE,
    creator: X_HANDLE,
    images: [SITE_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  category: "Technology",
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicons/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicons/favicon.ico",
    apple: [{ url: "/favicons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0d" },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(geistSans.variable, geistMono.variable, gambarino.variable, "font-sans")}
      suppressHydrationWarning
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c"),
          }}
        />
        <RootProvider
          search={{
            options: {
              type: "static",
            },
          }}
          theme={{
            enableSystem: true,
            defaultTheme: "system",
          }}
        >
          <Providers>{children}</Providers>
        </RootProvider>
      </body>
    </html>
  );
}
