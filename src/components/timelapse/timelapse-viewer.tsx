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

  return (
    <div className="grid gap-4 lg:grid-cols-[320px_minmax(0,1fr)]">
      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">Zeitraffer-Filter</h2>
          <label className="block space-y-2">
            <span className="text-sm text-slate-300">Zeitraum</span>
            <Select value={period} onChange={(event) => setPeriod(event.target.value)}>
              <option value="24h">24 Stunden</option>
              <option value="7d">7 Tage</option>
              <option value="all">Alle</option>
            </Select>
          </label>
          <label className="block space-y-2">
            <span className="text-sm text-slate-300">Bildtyp</span>
            <Select value={type} onChange={(event) => setType(event.target.value)}>
              <option value="clouds">Wolken</option>
              <option value="infrared">Infrarot (Platzhalter)</option>
              <option value="temperature">Temperatur (Platzhalter)</option>
            </Select>
          </label>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="space-y-4">
          <video
            className="w-full rounded-xl border border-slate-700"
            controls
            preload="metadata"
            src={active.src}
          />
          <div>
            <h3 className="text-lg font-semibold">{active.title}</h3>
            <p className="text-slate-300">{active.description}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
