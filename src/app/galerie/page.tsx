import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { getImages } from "@/lib/data";

export default function GalleryPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold md:text-4xl">Galerie</h1>
      <p className="text-sky-700">
        Entdecke Satellitenaufnahmen mit Filtern, Sortierung und vorbereiteter Suche.
      </p>
      <GalleryGrid images={getImages()} />
    </section>
  );
}
