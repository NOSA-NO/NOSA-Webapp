import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";

interface PageIntroProps {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export function PageIntro({ eyebrow, title, description, children }: PageIntroProps) {
  return (
    <header className="max-w-3xl space-y-3">
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">{title}</h1>
      <p className="text-base leading-7 text-nosa-muted md:text-lg">{description}</p>
      {children}
    </header>
  );
}
