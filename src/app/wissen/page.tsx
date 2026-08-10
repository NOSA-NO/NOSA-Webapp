import { ArticleCard } from "@/components/articles/article-card";
import { getArticles } from "@/lib/data";

export default function WissenPage() {
  const articles = getArticles();

  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold md:text-4xl">Wissen</h1>
      <p className="text-sky-700">Lerninhalte als wiederverwendbare Artikelkomponenten.</p>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
