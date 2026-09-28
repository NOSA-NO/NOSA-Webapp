import { ArticleCard } from "@/components/articles/article-card";
import { PageIntro } from "@/components/layout/page-intro";
import { getArticles } from "@/lib/data";

export default function WissenPage() {
  const articles = getArticles();

  return (
    <section className="space-y-8">
      <PageIntro
        eyebrow="Verstehen"
        title="Wissen"
        description="Kurze, klare Texte zu Antenne, Empfang, Software und EUMETSAT. Jeder Artikel erklärt eine Fähigkeit der Plattform — damit Technik nicht als Blackbox bleibt, sondern nachvollziehbar wird."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
