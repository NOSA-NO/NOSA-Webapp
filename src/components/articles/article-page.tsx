import { PageIntro } from "@/components/layout/page-intro";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Article } from "@/types/nosa";

export function ArticlePage({ article }: { article: Article }) {
  return (
    <section className="space-y-8">
      <PageIntro
        eyebrow={article.topic}
        title={article.title}
        description={article.summary}
      />
      <Card>
        <CardContent className="space-y-4">
          <Badge>{article.topic}</Badge>
          <p className="max-w-3xl text-lg leading-8 text-foreground/90">{article.body}</p>
        </CardContent>
      </Card>
    </section>
  );
}
