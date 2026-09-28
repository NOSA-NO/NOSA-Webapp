import { TimelapseViewer } from "@/components/timelapse/timelapse-viewer";
import { PageIntro } from "@/components/layout/page-intro";
import { getTimelapses } from "@/lib/data";

export default function TimelapsePage() {
  return (
    <section className="space-y-8">
      <PageIntro
        eyebrow="Bewegung im Orbit"
        title="Zeitraffer"
        description="Wetter ändert sich in Stunden. Diese Seite verdichtet 24 Stunden oder eine ganze Woche zu einem Film — damit Fronten, Wirbel und Temperaturmuster sichtbar werden, ohne dass du stundenlang zuschauen musst."
      />
      <TimelapseViewer timelapses={getTimelapses()} />
    </section>
  );
}
