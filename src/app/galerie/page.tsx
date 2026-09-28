import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { PageIntro } from "@/components/layout/page-intro";
import { getImages } from "@/lib/data";

export default function GalleryPage() {
  return (
    <section className="space-y-8">
      <PageIntro
        eyebrow="Archiv"
        title="Galerie"
        description="Durchsuche Satellitenbilder nach Titel, Satellit oder Typ. Sortiere nach Datum oder Beliebtheit und öffne ein Bild für Details, Metadaten und einen QR-Code zur Seite."
      />
      <GalleryGrid images={getImages()} />
    </section>
  );
}
