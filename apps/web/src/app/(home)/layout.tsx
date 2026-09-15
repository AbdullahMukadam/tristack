import type { ReactNode } from "react";

import { HomeNavbar } from "./_components/landing/home-navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-background overflow-hidden">
      <HomeNavbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
