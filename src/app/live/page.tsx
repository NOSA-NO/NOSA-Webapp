import { LiveViewer } from "@/components/live/live-viewer";
import { getImages } from "@/lib/data";

export default function LivePage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold md:text-4xl">Live satellite viewer</h1>
      <p className="text-slate-300">Prototype view with extensible location and image-type filtering.</p>
      <LiveViewer images={getImages()} />
    </section>
  );
}
