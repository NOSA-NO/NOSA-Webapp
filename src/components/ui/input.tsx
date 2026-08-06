import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border border-slate-600 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-sky-400 placeholder:text-slate-400 focus:ring-2",
        className,
      )}
      {...props}
    />
  );
}
