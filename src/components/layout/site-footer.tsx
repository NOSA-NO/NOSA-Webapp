export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-slate-300 md:px-8">
        <p>© {new Date().getFullYear()} NOSA — NO Satelliten-Arbeitsgruppe</p>
        <p>Entwickelt als erweiterbare Bildungsplattform mit Beispieldaten.</p>
      </div>
    </footer>
  );
}
