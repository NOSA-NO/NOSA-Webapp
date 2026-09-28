import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-nosa-accent/20 bg-nosa-accent/10 px-3 py-1 text-xs font-semibold tracking-wide text-nosa-accent uppercase">
      {children}
    </span>
  );
}
