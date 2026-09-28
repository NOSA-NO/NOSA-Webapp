import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { PageIntro } from "@/components/layout/page-intro";

export default function DisplayModePage() {
  return (
    <section className="space-y-8">
      <PageIntro
        eyebrow="Ausstellung"
        title="Anzeigemodus"
        description="Diese Seite ist die Grundlage für geführte Ausstellungen: Inhalte laufen in einer klaren Folge, der Bildschirm bleibt ruhig, Downloads bleiben aus. Später können hier Playlists und Vollbild-Szenen andocken."
      />
      <Card>
        <CardContent className="space-y-4">
          <p className="leading-7 text-nosa-muted">
            Im Ausstellungsbetrieb kehrt die App nach einer Pause automatisch zur Startseite
            zurück. So bleibt der nächste Gast immer am Anfang — ohne dass jemand den Stand
            zurücksetzen muss.
          </p>
          <Link href="/start" className="inline-flex text-nosa-accent hover:text-teal-200">
            Zur Startseite
          </Link>
        </CardContent>
      </Card>
    </section>
  );
}
