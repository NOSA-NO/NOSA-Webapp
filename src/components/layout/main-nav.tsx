"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  ["/start", "Start"],
  ["/live", "Live"],
  ["/eumetsat", "EUMETSAT"],
  ["/galerie", "Galerie"],
  ["/zeitraffer", "Zeitraffer"],
  ["/wissen", "Wissen"],
  ["/partner", "Partner"],
  ["/das-sind-wir", "Das sind wir"],
  ["/spiele", "Spiele"],
] as const;

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex max-w-full items-center gap-1 overflow-x-auto pb-1">
      {navItems.map(([href, label]) => {
        const active = pathname === href || pathname.startsWith(`${href}/`);

        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nosa-accent",
              active
                ? "bg-nosa-accent/15 text-nosa-accent"
                : "text-nosa-muted hover:bg-nosa-elevated hover:text-foreground",
            )}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
