import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Article } from "@/types/nosa";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Card>
      <CardContent className="space-y-2">
        <Badge>{article.topic}</Badge>
        <h2 className="text-xl font-semibold text-foreground">{article.title}</h2>
        <p className="text-nosa-muted">{article.summary}</p>
        <Link href={`/wissen/${article.slug}`} className="inline-block text-nosa-accent hover:text-teal-200">
          Artikel lesen →
        </Link>
      </CardContent>
    </Card>
  );
}
