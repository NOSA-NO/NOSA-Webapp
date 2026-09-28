import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-60 min-h-11 px-5",
  {
    variants: {
      variant: {
        default: "bg-nosa-accent text-nosa-bg hover:bg-teal-300",
        secondary: "bg-nosa-elevated text-foreground hover:bg-nosa-border",
        ghost: "text-foreground hover:bg-nosa-elevated/80",
        outline: "border border-nosa-border text-foreground hover:bg-nosa-elevated",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant }), className)} {...props} />;
}
