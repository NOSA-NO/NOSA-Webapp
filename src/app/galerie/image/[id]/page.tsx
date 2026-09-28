import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GalleryDetail } from "@/components/gallery/gallery-detail";
import { PageIntro } from "@/components/layout/page-intro";
import { getAppConfig } from "@/lib/config";
import { getImageById } from "@/lib/data";

interface GalleryImagePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: GalleryImagePageProps): Promise<Metadata> {
  const { id } = await params;
  const image = getImageById(id);

  if (!image) {
    return { title: "Bild nicht gefunden" };
  }

  return {
    title: `${image.title} | NOSA Galerie`,
    description: image.description,
  };
}

export default async function GalleryImagePage({ params }: GalleryImagePageProps) {
  const { id } = await params;
  const image = getImageById(id);

  if (!image) {
    notFound();
  }

  return (
    <section className="space-y-8">
      <PageIntro
        eyebrow="Bilddetail"
        title={image.title}
        description="Hier siehst du die Aufnahme in groß, mit Datum, Satellit, Typ und Ort. Likes, QR-Code und Download helfen beim Teilen — der Download bleibt in der Ausstellung ausgeschaltet."
      />
      <GalleryDetail image={image} allowDownloads={getAppConfig().allowDownloads} />
    </section>
  );
}
