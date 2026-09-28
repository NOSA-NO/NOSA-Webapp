import * as React from "react";
import { cn } from "@/lib/utils";

export function Select({ className, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "w-full rounded-2xl border border-nosa-border bg-nosa-bg px-4 py-3 text-foreground outline-none ring-nosa-accent focus:ring-2",
        className,
      )}
      {...props}
    />
  );
}
