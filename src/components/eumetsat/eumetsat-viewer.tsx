"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import {
  buildEumetsatProxyUrl,
  type EumetsatProduct,
  type EumetsatProductId,
  type EumetsatRegion,
  type EumetsatRegionId,
} from "@/lib/eumetsat";

interface EumetsatViewerProps {
  products: EumetsatProduct[];
  regions: EumetsatRegion[];
}

export function EumetsatViewer({ products, regions }: EumetsatViewerProps) {
  const [productId, setProductId] = useState<EumetsatProductId>(products[0].id);
  const [regionId, setRegionId] = useState<EumetsatRegionId>("europe");
  const [refreshKey, setRefreshKey] = useState(0);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  const product = useMemo(
    () => products.find((entry) => entry.id === productId) ?? products[0],
    [productId, products],
  );
  const region = useMemo(
    () => regions.find((entry) => entry.id === regionId) ?? regions[0],
    [regionId, regions],
  );

  const imageSrc = buildEumetsatProxyUrl(product.id, region.id, refreshKey);

  return (
    <div className="grid gap-5 lg:grid-cols-[340px_minmax(0,1fr)]">
      <div className="space-y-5">
        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-xl font-semibold">Ansicht wählen</h2>
            <label className="block space-y-2">
              <span className="text-sm text-nosa-muted">Produkt</span>
              <Select
                value={productId}
                onChange={(event) => {
                  setProductId(event.target.value as EumetsatProductId);
                  setStatus("loading");
                }}
              >
                {products.map((entry) => (
                  <option key={entry.id} value={entry.id}>
                    {entry.label}
                  </option>
                ))}
              </Select>
            </label>
            <label className="block space-y-2">
              <span className="text-sm text-nosa-muted">Ausschnitt</span>
              <Select
                value={regionId}
                onChange={(event) => {
                  setRegionId(event.target.value as EumetsatRegionId);
                  setStatus("loading");
                }}
              >
                {regions.map((entry) => (
                  <option key={entry.id} value={entry.id}>
                    {entry.label}
                  </option>
                ))}
              </Select>
            </label>
            <Button
              className="w-full"
              variant="outline"
              onClick={() => {
                setStatus("loading");
                setRefreshKey((value) => value + 1);
              }}
            >
              Neueste Szene laden
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.16em] text-nosa-accent uppercase">
              Was du siehst
            </p>
            <h3 className="text-lg font-semibold">{product.label}</h3>
            <p className="leading-6 text-nosa-muted">{product.summary}</p>
            <p className="text-sm text-nosa-muted">{region.description}</p>
            <p className="text-sm text-foreground/80">Satellit: {product.satellite}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="space-y-4">
          <div className="relative overflow-hidden rounded-2xl border border-nosa-border bg-nosa-bg">
            {status === "loading" ? (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-nosa-bg/70 text-sm text-nosa-muted">
                Bild wird geladen …
              </div>
            ) : null}
            {status === "error" ? (
              <div className="flex min-h-[420px] items-center justify-center p-8 text-center text-nosa-muted">
                Die EUMETSAT-Szene ist gerade nicht erreichbar. Bitte versuche es in wenigen Minuten erneut.
              </div>
            ) : (
              // External WMS frames change by query; a native img keeps the stream simple.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={imageSrc}
                src={imageSrc}
                alt={`${product.label} über ${region.label}`}
                className="max-h-[72vh] w-full object-contain"
                onLoad={() => setStatus("ready")}
                onError={() => setStatus("error")}
              />
            )}
          </div>
          <p className="text-sm text-nosa-muted">
            Quelle: EUMETView / EUMETSAT. Die Bilder stammen aus dem öffentlichen Web-Map-Dienst und
            werden regelmäßig aktualisiert.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
