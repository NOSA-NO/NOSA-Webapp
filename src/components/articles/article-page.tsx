import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Article } from "@/types/nosa";

export function ArticlePage({ article }: { article: Article }) {
  return (
    <Card>
      <CardContent className="space-y-4">
        <Badge>{article.topic}</Badge>
        <h1 className="text-3xl font-bold text-slate-100">{article.title}</h1>
        <p className="text-lg text-slate-300">{article.summary}</p>
        <p className="leading-7 text-slate-200">{article.body}</p>
      </CardContent>
    </Card>
  );
}
