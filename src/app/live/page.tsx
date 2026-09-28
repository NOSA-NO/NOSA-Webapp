import { LiveViewer } from "@/components/live/live-viewer";
import { PageIntro } from "@/components/layout/page-intro";
import { getImages } from "@/lib/data";

export default function LivePage() {
  return (
    <section className="space-y-8">
      <PageIntro
        eyebrow="NOSA-Empfang"
        title="Live-Satellitenansicht"
        description="Hier siehst du, wie NOSA Wettersatelliten lokal empfängt: Ort und Bildtyp wählen, Szene betrachten. Wolken kommen aus Demo-Aufnahmen; Infrarot und Temperatur stehen als klare Vorschau bereit, bis der Live-Strom angebunden ist."
      />
      <LiveViewer images={getImages()} />
    </section>
  );
}
