import {
  countryGuessMaps,
  mockArticles,
  mockImages,
  mockPartners,
  mockTimelapses,
  startSlides,
  teamTimeline,
} from "@/data/mock";
import type { ImageType, SatelliteLocation } from "@/types/nosa";

export const getImages = () => mockImages;

export const getImageById = (id: string) => mockImages.find((image) => image.id === id);

export const getLatestSatelliteImage = () => {
  return [...mockImages].sort((a, b) => b.date.localeCompare(a.date))[0];
};

export const getLiveImages = (location: SatelliteLocation, type: ImageType) => {
  return mockImages.filter((image) => image.location === location && image.type === type);
};

export const getTimelapses = () => mockTimelapses;

export const getArticles = () => mockArticles;

export const getArticleBySlug = (slug: string) =>
  mockArticles.find((article) => article.slug === slug);

export const getPartners = () => mockPartners;

export const getTimeline = () => teamTimeline;

export const getCountryGuessMaps = () => countryGuessMaps;

export const getStartSlides = () => startSlides;
