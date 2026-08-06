import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  ["/start", "Start"],
  ["/live", "Live"],
  ["/galerie", "Galerie"],
  ["/zeitraffer", "Zeitraffer"],
  ["/wissen", "Wissen"],
  ["/partner", "Partner"],
  ["/das-sind-wir", "Das sind wir"],
  ["/spiele", "Spiele"],
] as const;

export function MainNav() {
  return (
    <nav className="flex flex-wrap items-center gap-2 md:gap-3">
      {navItems.map(([href, label]) => (
        <Link
          key={href}
          href={href}
          className={cn(
            "rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400",
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
