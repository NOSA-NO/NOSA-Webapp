import Image from "next/image";
import Link from "next/link";
import { MainNav } from "@/components/layout/main-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-nosa-border/80 bg-nosa-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between md:px-8">
        <Link href="/start" className="flex items-center gap-3 rounded-xl px-1 py-1">
          <Image src="/nosa-logo.png" alt="NOSA-Logo" width={36} height={40} priority />
          <div>
            <p className="text-sm font-semibold text-foreground">NOSA</p>
            <p className="text-xs text-nosa-muted">Satelliten-Arbeitsgruppe</p>
          </div>
        </Link>
        <MainNav />
      </div>
    </header>
  );
}
