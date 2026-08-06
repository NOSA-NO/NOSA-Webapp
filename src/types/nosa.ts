export type SatelliteLocation = "braunschweig" | "germany" | "europe";

export type ImageType = "clouds" | "infrared" | "temperature";

export type AppMode = "web" | "exhibition";

export interface SatelliteImage {
  id: string;
  title: string;
  date: string;
  satellite: string;
  type: ImageType;
  likes: number;
  location: SatelliteLocation;
  src: string;
  description: string;
}

export interface Timelapse {
  id: string;
  title: string;
  period: "24h" | "7d" | "all";
  type: ImageType;
  src: string;
  description: string;
}

export interface Article {
  slug: string;
  title: string;
  summary: string;
  body: string;
  topic: string;
}

export interface Partner {
  id: string;
  name: string;
  description: string;
  logo: string;
  url: string;
}

export interface TeamMilestone {
  year: string;
  title: string;
  description: string;
}

export interface CountryGuessMap {
  id: string;
  country: string;
  mapImage: string;
  hint: string;
}

export interface StartSlide {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  mediaType: "image" | "video";
  mediaSrc: string;
}
