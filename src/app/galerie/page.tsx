import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { getImages } from "@/lib/data";

export default function GalleryPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold md:text-4xl">Galerie</h1>
      <p className="text-slate-300">
        Explore satellite captures with filtering, sorting and prepared search architecture.
      </p>
      <GalleryGrid images={getImages()} />
    </section>
  );
}
