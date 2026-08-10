"use client";

import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { SatelliteImage } from "@/types/nosa";

const imageTypeLabels = {
  clouds: "Wolken",
  infrared: "Infrarot",
  temperature: "Temperatur",
};

const locationLabels = {
  braunschweig: "Braunschweig",
  germany: "Deutschland",
  europe: "Europa",
};

interface GalleryDetailProps {
  image: SatelliteImage;
  allowDownloads: boolean;
}

export function GalleryDetail({ image, allowDownloads }: GalleryDetailProps) {
  const [likes, setLikes] = useState(image.likes);
  const detailUrl = useMemo(() => `/galerie/image/${image.id}`, [image.id]);

  return (
    <div className="grid gap-5 lg:grid-cols-[2fr_1fr]">
      <Card>
        <CardContent className="space-y-4">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-700">
            <Image src={image.src} alt={image.title} fill sizes="(max-width: 1024px) 100vw, 66vw" className="object-cover" />
          </div>
          <h1 className="text-2xl font-bold text-slate-100">{image.title}</h1>
          <p className="text-slate-300">{image.description}</p>
          <div className="grid gap-1 text-sm text-slate-300 sm:grid-cols-2">
            <p>Datum: {image.date}</p>
            <p>Satellit: {image.satellite}</p>
            <p>Typ: {imageTypeLabels[image.type]}</p>
            <p>Ort: {locationLabels[image.location]}</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-lg font-semibold">Aktionen</h2>
          <Button className="w-full" onClick={() => setLikes((value) => value + 1)}>
            Bild gefällt mir (♥ {likes})
          </Button>
          <div className="rounded-xl border border-slate-700 bg-slate-950 p-3">
            <p className="mb-2 text-sm text-slate-300">QR-Code für diese Detailseite</p>
            <div className="inline-block rounded-lg bg-white p-2">
              <QRCodeSVG value={detailUrl} size={140} />
            </div>
            <p className="mt-2 text-xs text-slate-400">Verweist auf {detailUrl}</p>
          </div>
          <Button className="w-full" variant="secondary" disabled={!allowDownloads}>
            {allowDownloads ? "Bild herunterladen (vorbereitet)" : "Downloads sind im Ausstellungsmodus deaktiviert"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
