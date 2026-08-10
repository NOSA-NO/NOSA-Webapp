import { Timeline } from "@/components/timeline/timeline";
import { Card, CardContent } from "@/components/ui/card";
import { getTimeline } from "@/lib/data";

export default function AboutPage() {
  return (
    <section className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
      <Card>
        <CardContent className="space-y-3">
          <h1 className="text-3xl font-bold md:text-4xl">Das sind wir</h1>
          <p className="text-sky-400">
            NOSA, die NO Satelliten-Arbeitsgruppe, verbindet Hardware, Software und
            Wissenschaftsbegeisterung, um Wetter-Satellitendaten für alle sichtbar zu machen.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <h2 className="mb-4 text-2xl font-semibold text-sky-400">Projekt-Zeitstrahl</h2>
          <Timeline milestones={getTimeline()} />
        </CardContent>
      </Card>
    </section>
  );
}
