"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import type { ImageType, SatelliteImage, SatelliteLocation } from "@/types/nosa";

const locations: { value: SatelliteLocation; label: string }[] = [
  { value: "braunschweig", label: "Braunschweig" },
  { value: "germany", label: "Deutschland" },
  { value: "europe", label: "Europa" },
];

const imageTypes: { value: ImageType; label: string }[] = [
  { value: "clouds", label: "Wolken" },
  { value: "infrared", label: "Infrarot" },
  { value: "temperature", label: "Temperatur" },
];

export function LiveViewer({ images }: { images: SatelliteImage[] }) {
  const [location, setLocation] = useState<SatelliteLocation>("braunschweig");
  const [imageType, setImageType] = useState<ImageType>("clouds");

  const filtered = useMemo(
    () => images.filter((image) => image.location === location && image.type === imageType),
    [imageType, images, location],
  );

  const active = filtered[0] ?? images[0];
  const hasExactMatch = filtered.length > 0;

  return (
    <div className="grid gap-5 lg:grid-cols-[320px_minmax(0,1fr)]">
      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">Ansicht einstellen</h2>
          <p className="text-sm leading-6 text-nosa-muted">
            Wähle den geografischen Ausschnitt und den Messkanal. Fehlt eine Kombination, zeigen wir
            die nächstliegende Demo-Szene.
          </p>
          <label className="block space-y-2">
            <span className="text-sm text-nosa-muted">Ort</span>
            <Select value={location} onChange={(e) => setLocation(e.target.value as SatelliteLocation)}>
              {locations.map((entry) => (
                <option key={entry.value} value={entry.value}>
                  {entry.label}
                </option>
              ))}
            </Select>
          </label>
          <label className="block space-y-2">
            <span className="text-sm text-nosa-muted">Bildtyp</span>
            <Select value={imageType} onChange={(e) => setImageType(e.target.value as ImageType)}>
              {imageTypes.map((entry) => (
                <option key={entry.value} value={entry.value}>
                  {entry.label}
                </option>
              ))}
            </Select>
          </label>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="space-y-4">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-nosa-border">
            <Image src={active.src} alt={active.title} fill sizes="(max-width: 1024px) 100vw, 70vw" className="object-cover" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{active.title}</h3>
            <p className="mt-1 text-nosa-muted">{active.description}</p>
            {!hasExactMatch ? (
              <p className="mt-3 text-sm text-nosa-sky">
                Für diese Filterkombination liegt noch keine eigene Aufnahme vor. Angezeigt wird eine
                Vergleichsszene.
              </p>
            ) : null}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
