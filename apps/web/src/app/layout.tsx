import { RootProvider } from "fumadocs-ui/provider/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import Providers from "@/components/providers";
import { REPOSITORY_URL, SITE_DESCRIPTION, SITE_NAME, SITE_URL, SUPPORT_EMAIL } from "@/lib/site";

import "./global.css";
import { cn } from "@/lib/utils";

const geistSans = GeistSans;

const geistMono = GeistMono;

const gambarino = localFont({
  src: "./fonts/Gambarino-Regular.ttf",
  variable: "--font-gambarino",
  display: "swap",
});

const ogImage = `${SITE_URL}/og/site/home.png`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": `${SITE_URL}/#project`,
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/favicons/android-chrome-512x512.png`,
      sameAs: [REPOSITORY_URL, "https://x.com/abd_mukadam"],
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
      alternateName: "create-tristack",
      description: SITE_DESCRIPTION,
      url: SITE_URL,
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
      ],
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
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  keywords: [
    "project scaffolding",
    "boilerplate",
    "Python",
    "Go",
    "Rust",
    "CLI",
    "stack builder",
    "TriStack",
    "create-tristack",
  ],
  authors: [{ name: "TriStack Team" }],
  creator: "TriStack",
  publisher: "TriStack",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "TriStack",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [ogImage],
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
