import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-nosa-border/80 bg-nosa-bg/70">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-nosa-muted md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-medium text-foreground">© {new Date().getFullYear()} NOSA</p>
          <p>NO Satelliten-Arbeitsgruppe — Bildung mit Blick aus dem Orbit.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/eumetsat" className="hover:text-nosa-accent">
            EUMETSAT-Daten
          </Link>
          <Link href="/wissen" className="hover:text-nosa-accent">
            Wissen
          </Link>
          <Link href="/das-sind-wir" className="hover:text-nosa-accent">
            Das sind wir
          </Link>
        </div>
      </div>
    </footer>
  );
}
