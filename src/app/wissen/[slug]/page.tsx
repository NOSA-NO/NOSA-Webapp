import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/articles/article-page";
import { getArticleBySlug } from "@/lib/data";

interface ArticleRouteProps {
  params: Promise<{ slug: string }>;
}

export default async function WissenArticlePage({ params }: ArticleRouteProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return <ArticlePage article={article} />;
}
