import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-2xl border border-nosa-border bg-nosa-bg px-4 py-3 text-foreground outline-none ring-nosa-accent placeholder:text-nosa-muted/80 focus:ring-2",
        className,
      )}
      {...props}
    />
  );
}
