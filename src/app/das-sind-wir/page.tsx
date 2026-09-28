import { Timeline } from "@/components/timeline/timeline";
import { Card, CardContent } from "@/components/ui/card";
import { PageIntro } from "@/components/layout/page-intro";
import { getTimeline } from "@/lib/data";

export default function AboutPage() {
  return (
    <section className="space-y-8">
      <PageIntro
        eyebrow="Team"
        title="Das sind wir"
        description="NOSA, die NO Satelliten-Arbeitsgruppe, verbindet Hardware, Software und Neugier. Wir empfangen Wettersatelliten, erklären die Bilder und bauen eine Plattform, die in der Schule und im Browser gleichermaßen funktioniert."
      />
      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-semibold">Unsere Idee</h2>
            <p className="leading-7 text-nosa-muted">
              Ein Schulteam empfängt echte Signale aus dem Orbit, dekodiert sie und macht daraus
              verständliche Bilder. Parallel zeigen wir europäische EUMETSAT-Daten, damit lokale
              Antenne und operationeller Satellitendienst zusammen lesbar werden.
            </p>
            <p className="leading-7 text-nosa-muted">
              Die Web-App ist so gebaut, dass Beispieldaten später durch Live-APIs, Speicher und
              Datenbanken ersetzt werden können — ohne die Seiten neu zu erfinden.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="mb-5 text-2xl font-semibold">Projekt-Zeitstrahl</h2>
            <Timeline milestones={getTimeline()} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
