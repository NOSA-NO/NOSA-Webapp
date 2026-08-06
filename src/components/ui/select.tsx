import * as React from "react";
import { cn } from "@/lib/utils";

export function Select({ className, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "w-full rounded-xl border border-slate-600 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-sky-400 focus:ring-2",
        className,
      )}
      {...props}
    />
  );
}
