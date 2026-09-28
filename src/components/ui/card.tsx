import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-nosa-border/80 bg-nosa-surface/80 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm",
        className,
      )}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-5 md:p-6", className)} {...props} />;
}
