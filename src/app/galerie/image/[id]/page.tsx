import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GalleryDetail } from "@/components/gallery/gallery-detail";
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

  return <GalleryDetail image={image} allowDownloads={getAppConfig().allowDownloads} />;
}
