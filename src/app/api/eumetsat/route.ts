import { NextResponse } from "next/server";
import {
  buildEumetsatWmsUrl,
  getEumetsatProduct,
  getEumetsatRegion,
} from "@/lib/eumetsat";

export const revalidate = 180;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const product = getEumetsatProduct(searchParams.get("product") ?? "");
  const region = getEumetsatRegion(searchParams.get("region") ?? "");

  if (!product || !region) {
    return NextResponse.json(
      { error: "Unbekanntes Produkt oder unbekannte Region." },
      { status: 400 },
    );
  }

  const upstream = await fetch(buildEumetsatWmsUrl(product, region), {
    next: { revalidate: 180 },
    headers: { Accept: "image/jpeg" },
  });

  if (!upstream.ok || !upstream.body) {
    return NextResponse.json(
      { error: "EUMETSAT-Bild konnte nicht geladen werden." },
      { status: 502 },
    );
  }

  return new NextResponse(upstream.body, {
    headers: {
      "Content-Type": upstream.headers.get("Content-Type") ?? "image/jpeg",
      "Cache-Control": "public, s-maxage=180, stale-while-revalidate=600",
    },
  });
}
