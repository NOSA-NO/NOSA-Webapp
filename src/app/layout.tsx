import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ExhibitionGuard } from "@/components/layout/exhibition-guard";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getAppConfig } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOSA Webapp",
  description: "Educational satellite platform foundation for the NOSA school team.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const config = getAppConfig();

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-slate-950 text-slate-50">
        <ExhibitionGuard
          appMode={config.appMode}
          inactivityTimeoutMs={config.inactivityTimeoutMs}
          startRoute={config.startRoute}
        />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 md:px-8">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
