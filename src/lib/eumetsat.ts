export type EumetsatRegionId = "disk" | "europe" | "germany" | "braunschweig";

export type EumetsatProductId =
  | "natural"
  | "natural-enhanced"
  | "truecolour"
  | "geocolour"
  | "airmass"
  | "dust"
  | "fog"
  | "convection"
  | "infrared"
  | "clouds";

export interface EumetsatRegion {
  id: EumetsatRegionId;
  label: string;
  description: string;
  bbox: [number, number, number, number];
  width: number;
  height: number;
}

export interface EumetsatProduct {
  id: EumetsatProductId;
  layer: string;
  label: string;
  summary: string;
  satellite: string;
}

export const EUMETSAT_WMS_ENDPOINT = "https://view.eumetsat.int/geoserver/wms";

export const eumetsatRegions: EumetsatRegion[] = [
  {
    id: "disk",
    label: "Volle Erdscheibe",
    description: "Die komplette Sicht von Meteosat über Afrika, Europa und dem Atlantik.",
    bbox: [-80, -80, 80, 80],
    width: 1024,
    height: 1024,
  },
  {
    id: "europe",
    label: "Europa",
    description: "Ein klarer Blick auf Wetterlagen von der Iberischen Halbinsel bis Skandinavien.",
    bbox: [30, -25, 72, 45],
    width: 1280,
    height: 900,
  },
  {
    id: "germany",
    label: "Deutschland",
    description: "Nahaufnahme für Fronten, Wolkenfelder und Temperaturmuster über Deutschland.",
    bbox: [47, 5, 55, 16],
    width: 1100,
    height: 900,
  },
  {
    id: "braunschweig",
    label: "Raum Braunschweig",
    description: "Regionale Ansicht rund um Braunschweig — passend zum NOSA-Empfangsort.",
    bbox: [51.4, 9.4, 53.1, 12.1],
    width: 1000,
    height: 800,
  },
];

export const eumetsatProducts: EumetsatProduct[] = [
  {
    id: "natural",
    layer: "msg_fes:rgb_natural",
    label: "Natürliche Farben",
    summary: "Wolken, Land und Ozean in vertrauten Farbtönen — ideal für den ersten Blick.",
    satellite: "Meteosat SEVIRI",
  },
  {
    id: "natural-enhanced",
    layer: "msg_fes:rgb_naturalenhncd",
    label: "Natürliche Farben, verstärkt",
    summary: "Dieselbe Szene mit kräftigerer Kontrastführung, damit Strukturen klarer hervortreten.",
    satellite: "Meteosat SEVIRI",
  },
  {
    id: "truecolour",
    layer: "mtg_fd:rgb_truecolour",
    label: "Echte Farben (MTG)",
    summary: "Hochauflösende Sicht des neuen Meteosat Third Generation — so nah an dem, was das Auge sähe.",
    satellite: "Meteosat Third Generation",
  },
  {
    id: "geocolour",
    layer: "mtg_fd:rgb_geocolour",
    label: "Geo-Farbe (MTG)",
    summary: "Eine interpretierte Farbkomposition, die Wetterprozesse besonders gut lesbar macht.",
    satellite: "Meteosat Third Generation",
  },
  {
    id: "airmass",
    layer: "msg_fes:rgb_airmass",
    label: "Luftmassen",
    summary: "Zeigt warme, kalte und feuchte Luftpakete — nützlich, um Fronten und Jetstreams zu erkennen.",
    satellite: "Meteosat SEVIRI",
  },
  {
    id: "dust",
    layer: "msg_fes:rgb_dust",
    label: "Staub",
    summary: "Hebt Wüstenstaub und Aerosole hervor, die sich über Nordafrika und Europa bewegen.",
    satellite: "Meteosat SEVIRI",
  },
  {
    id: "fog",
    layer: "msg_fes:rgb_fog",
    label: "Nebel & Niedrigwolken",
    summary: "Trennt flachen Nebel von höheren Wolken — besonders morgens und in Tälern interessant.",
    satellite: "Meteosat SEVIRI",
  },
  {
    id: "convection",
    layer: "msg_fes:rgb_convection",
    label: "Konvektion",
    summary: "Macht aufquellende Gewitterzellen und starke Aufwinde sichtbar.",
    satellite: "Meteosat SEVIRI",
  },
  {
    id: "infrared",
    layer: "msg_fes:ir108",
    label: "Infrarot 10,8 µm",
    summary: "Misst Wärmestrahlung: hohe, kalte Wolken erscheinen hell, warme Oberflächen dunkel.",
    satellite: "Meteosat SEVIRI",
  },
  {
    id: "clouds",
    layer: "msg_fes:clm",
    label: "Wolkenmaske",
    summary: "Klassifiziert wolkenfreie und bewölkte Pixel — eine klare Übersicht der Bedeckung.",
    satellite: "Meteosat SEVIRI",
  },
];

export const getEumetsatProducts = () => eumetsatProducts;

export const getEumetsatRegions = () => eumetsatRegions;

export const getEumetsatProduct = (id: string) =>
  eumetsatProducts.find((product) => product.id === id);

export const getEumetsatRegion = (id: string) => eumetsatRegions.find((region) => region.id === id);

export const buildEumetsatWmsUrl = (product: EumetsatProduct, region: EumetsatRegion) => {
  const params = new URLSearchParams({
    SERVICE: "WMS",
    VERSION: "1.3.0",
    REQUEST: "GetMap",
    LAYERS: product.layer,
    CRS: "EPSG:4326",
    BBOX: region.bbox.join(","),
    WIDTH: String(region.width),
    HEIGHT: String(region.height),
    FORMAT: "image/jpeg",
    TRANSPARENT: "FALSE",
    EXCEPTIONS: "INIMAGE",
  });

  return `${EUMETSAT_WMS_ENDPOINT}?${params.toString()}`;
};

export const buildEumetsatProxyUrl = (
  productId: EumetsatProductId,
  regionId: EumetsatRegionId,
  cacheKey?: number,
) => {
  const params = new URLSearchParams({
    product: productId,
    region: regionId,
  });

  if (cacheKey) {
    params.set("t", String(cacheKey));
  }

  return `/api/eumetsat?${params.toString()}`;
};
