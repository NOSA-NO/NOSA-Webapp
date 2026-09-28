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
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-nosa-border">
            <Image src={image.src} alt={image.title} fill sizes="(max-width: 1024px) 100vw, 66vw" className="object-cover" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground">{image.title}</h2>
          <p className="text-nosa-muted">{image.description}</p>
          <div className="grid gap-1 text-sm text-nosa-muted sm:grid-cols-2">
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
          <p className="text-sm leading-6 text-nosa-muted">
            Likes, QR-Code und Download — zum Teilen am Stand oder zum Mitnehmen nach Hause.
          </p>
          <div className="rounded-2xl border border-nosa-border bg-nosa-bg p-3">
            <p className="mb-2 text-sm text-nosa-muted">QR-Code für diese Detailseite</p>
            <div className="inline-block rounded-lg bg-white p-2">
              <QRCodeSVG value={detailUrl} size={140} />
            </div>
            <p className="mt-2 text-xs text-nosa-muted">Verweist auf {detailUrl}</p>
          </div>
          <Button className="w-full" variant="secondary" disabled={!allowDownloads}>
            {allowDownloads ? "Bild herunterladen" : "Download im Ausstellungsmodus deaktiviert"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
