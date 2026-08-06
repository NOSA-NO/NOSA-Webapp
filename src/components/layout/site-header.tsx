import Image from "next/image";
import Link from "next/link";
import { MainNav } from "@/components/layout/main-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link href="/start" className="flex items-center gap-3 rounded-xl px-2 py-1">
          <Image src="/nosa-logo.png" alt="NOSA logo" width={108} height={36} priority />
          <span className="text-sm font-semibold text-slate-200">School Satellite Project</span>
        </Link>
        <MainNav />
      </div>
    </header>
  );
}
