import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-200">
      {children}
    </span>
  );
}
