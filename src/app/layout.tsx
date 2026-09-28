import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import { ExhibitionGuard } from "@/components/layout/exhibition-guard";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getAppConfig } from "@/lib/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "NOSA — Satelliten sichtbar machen",
  description:
    "Die Bildungsplattform der NO Satelliten-Arbeitsgruppe: Live-Empfang, EUMETSAT-Daten, Galerie und Wissen rund um Wettersatelliten.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const config = getAppConfig();

  return (
    <html lang="de" className={`h-full antialiased ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-full bg-nosa-bg text-foreground">
        <ExhibitionGuard
          appMode={config.appMode}
          inactivityTimeoutMs={config.inactivityTimeoutMs}
          startRoute={config.startRoute}
        />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 md:px-8 md:py-10">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
