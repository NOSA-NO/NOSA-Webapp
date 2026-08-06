"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import type { SatelliteImage } from "@/types/nosa";

export function GalleryGrid({ images }: { images: SatelliteImage[] }) {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("date-desc");

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    const searched = term
      ? images.filter(
          (image) =>
            image.title.toLowerCase().includes(term) || image.satellite.toLowerCase().includes(term),
        )
      : images;

    const typed = filterType === "all" ? searched : searched.filter((image) => image.type === filterType);

    return [...typed].sort((a, b) => {
      if (sortBy === "likes") {
        return b.likes - a.likes;
      }

      if (sortBy === "date-asc") {
        return a.date.localeCompare(b.date);
      }

      return b.date.localeCompare(a.date);
    });
  }, [filterType, images, search, sortBy]);

  return (
    <div className="space-y-6">
      <div className="grid gap-3 md:grid-cols-3">
        <Input
          placeholder="Search title or satellite"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <Select value={filterType} onChange={(event) => setFilterType(event.target.value)}>
          <option value="all">All image types</option>
          <option value="clouds">Clouds</option>
          <option value="infrared">Infrared</option>
          <option value="temperature">Temperature</option>
        </Select>
        <Select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
          <option value="date-desc">Newest first</option>
          <option value="date-asc">Oldest first</option>
          <option value="likes">Most likes</option>
        </Select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((image) => (
          <Card key={image.id} className="overflow-hidden">
            <Link href={`/galerie/image/${image.id}`}>
              <div className="relative aspect-[4/3]">
                <Image src={image.src} alt={image.title} fill sizes="(max-width: 1200px) 50vw, 33vw" className="object-cover" />
              </div>
              <CardContent className="space-y-2">
                <h2 className="text-lg font-semibold text-slate-100">{image.title}</h2>
                <div className="flex flex-wrap gap-2">
                  <Badge>{image.date}</Badge>
                  <Badge>{image.satellite}</Badge>
                  <Badge>{image.type}</Badge>
                  <Badge>♥ {image.likes}</Badge>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
