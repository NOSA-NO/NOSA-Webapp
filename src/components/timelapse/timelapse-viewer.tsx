"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import type { Timelapse } from "@/types/nosa";

export function TimelapseViewer({ timelapses }: { timelapses: Timelapse[] }) {
  const [period, setPeriod] = useState("24h");
  const [type, setType] = useState("clouds");

  const active = useMemo(() => {
    return timelapses.find((item) => item.period === period && item.type === type) ?? timelapses[0];
  }, [period, timelapses, type]);

  const exact = timelapses.some((item) => item.period === period && item.type === type);

  return (
    <div className="grid gap-5 lg:grid-cols-[320px_minmax(0,1fr)]">
      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">Zeitraum und Kanal</h2>
          <p className="text-sm leading-6 text-nosa-muted">
            Kürzere Filme zeigen den Tagesgang, längere den Zug ganzer Wettersysteme.
          </p>
          <label className="block space-y-2">
            <span className="text-sm text-nosa-muted">Zeitraum</span>
            <Select value={period} onChange={(event) => setPeriod(event.target.value)}>
              <option value="24h">24 Stunden</option>
              <option value="7d">7 Tage</option>
              <option value="all">Gesamtes Archiv</option>
            </Select>
          </label>
          <label className="block space-y-2">
            <span className="text-sm text-nosa-muted">Bildtyp</span>
            <Select value={type} onChange={(event) => setType(event.target.value)}>
              <option value="clouds">Wolken</option>
              <option value="infrared">Infrarot</option>
              <option value="temperature">Temperatur</option>
            </Select>
          </label>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="space-y-4">
          <video
            className="w-full rounded-2xl border border-nosa-border"
            controls
            preload="metadata"
            src={active.src}
          />
          <div>
            <h3 className="text-lg font-semibold">{active.title}</h3>
            <p className="mt-1 text-nosa-muted">{active.description}</p>
            {!exact ? (
              <p className="mt-3 text-sm text-nosa-sky">
                Für Filter ohne eigenen Clip läuft die nächstgelegene Demo-Sequenz.
              </p>
            ) : null}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
