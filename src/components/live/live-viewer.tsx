"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import type { ImageType, SatelliteImage, SatelliteLocation } from "@/types/nosa";

const locations: { value: SatelliteLocation; label: string }[] = [
  { value: "braunschweig", label: "Braunschweig" },
  { value: "germany", label: "Germany" },
  { value: "europe", label: "Europe" },
];

const imageTypes: { value: ImageType; label: string }[] = [
  { value: "clouds", label: "Clouds" },
  { value: "infrared", label: "Infrared (placeholder)" },
  { value: "temperature", label: "Temperature (placeholder)" },
];

export function LiveViewer({ images }: { images: SatelliteImage[] }) {
  const [location, setLocation] = useState<SatelliteLocation>("braunschweig");
  const [imageType, setImageType] = useState<ImageType>("clouds");

  const filtered = useMemo(
    () => images.filter((image) => image.location === location && image.type === imageType),
    [imageType, images, location],
  );

  const active = filtered[0] ?? images[0];

  return (
    <div className="grid gap-4 lg:grid-cols-[320px_minmax(0,1fr)]">
      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">Live settings</h2>
          <label className="block space-y-2">
            <span className="text-sm text-slate-300">Location</span>
            <Select value={location} onChange={(e) => setLocation(e.target.value as SatelliteLocation)}>
              {locations.map((entry) => (
                <option key={entry.value} value={entry.value}>
                  {entry.label}
                </option>
              ))}
            </Select>
          </label>
          <label className="block space-y-2">
            <span className="text-sm text-slate-300">Image type</span>
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
          <div className="relative aspect-video overflow-hidden rounded-xl border border-slate-700">
            <Image src={active.src} alt={active.title} fill sizes="(max-width: 1024px) 100vw, 70vw" className="object-cover" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{active.title}</h3>
            <p className="text-slate-300">{active.description}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
