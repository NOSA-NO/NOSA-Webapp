import { LiveViewer } from "@/components/live/live-viewer";
import { getImages } from "@/lib/data";

export default function LivePage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold md:text-4xl">Live-Satellitenansicht</h1>
      <p className="text-sky-700">Prototypansicht mit erweiterbaren Filtern für Ort und Bildtyp.</p>
      <LiveViewer images={getImages()} />
    </section>
  );
}
