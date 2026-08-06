import type {
  Article,
  CountryGuessMap,
  Partner,
  SatelliteImage,
  StartSlide,
  TeamMilestone,
  Timelapse,
} from "@/types/nosa";

export const mockImages: SatelliteImage[] = [
  {
    id: "1",
    title: "Cloud Front over Europe",
    date: "2026-08-02",
    satellite: "NOAA-19",
    type: "clouds",
    likes: 41,
    location: "europe",
    src: "/demo/images/sat-1.jpg",
    description: "Wide cloud system crossing central Europe.",
  },
  {
    id: "2",
    title: "Infrared Field Germany",
    date: "2026-08-03",
    satellite: "MetOp-B",
    type: "infrared",
    likes: 28,
    location: "germany",
    src: "/demo/images/sat-2.jpg",
    description: "Infrared placeholder for night-time cloud activity.",
  },
  {
    id: "3",
    title: "Temperature Gradient Braunschweig",
    date: "2026-08-04",
    satellite: "NOAA-18",
    type: "temperature",
    likes: 35,
    location: "braunschweig",
    src: "/demo/images/sat-3.jpg",
    description: "Temperature visualization placeholder around Braunschweig.",
  },
  {
    id: "4",
    title: "North Sea Cyclone View",
    date: "2026-08-04",
    satellite: "NOAA-19",
    type: "clouds",
    likes: 54,
    location: "europe",
    src: "/demo/images/sat-4.jpg",
    description: "Cyclone-like pattern over the North Sea.",
  },
  {
    id: "5",
    title: "Alps Moisture Stream",
    date: "2026-08-05",
    satellite: "MetOp-C",
    type: "infrared",
    likes: 21,
    location: "germany",
    src: "/demo/images/sat-5.jpg",
    description: "Placeholder infrared scan with moisture movement.",
  },
  {
    id: "6",
    title: "Atlantic Weather Sweep",
    date: "2026-08-06",
    satellite: "NOAA-18",
    type: "clouds",
    likes: 66,
    location: "europe",
    src: "/demo/images/sat-6.jpg",
    description: "Fast-moving cloud bands coming from the Atlantic.",
  },
];

export const mockTimelapses: Timelapse[] = [
  {
    id: "tl-1",
    title: "Cloud Dynamics (24h)",
    period: "24h",
    type: "clouds",
    src: "/demo/videos/clouds-24h.mp4",
    description: "Demo 24-hour cloud timelapse.",
  },
  {
    id: "tl-2",
    title: "Cloud Evolution (7 days)",
    period: "7d",
    type: "clouds",
    src: "/demo/videos/clouds-7d.mp4",
    description: "Demo 7-day cloud timelapse.",
  },
  {
    id: "tl-3",
    title: "Temperature Drift (24h)",
    period: "24h",
    type: "temperature",
    src: "/demo/videos/temperature-24h.mp4",
    description: "Demo timelapse for temperature placeholder data.",
  },
  {
    id: "tl-4",
    title: "Infrared Archive",
    period: "all",
    type: "infrared",
    src: "/demo/videos/clouds-7d.mp4",
    description: "Placeholder archive stream for future infrared feeds.",
  },
];

export const mockArticles: Article[] = [
  {
    slug: "qfh-antenna",
    title: "How does a QFH antenna work?",
    summary: "Understand why QFH antennas are great for weather satellites.",
    topic: "Hardware",
    body: "A quadrifilar helix (QFH) antenna receives circularly polarized signals from weather satellites. Its shape helps maintain stable reception across different satellite pass angles.",
  },
  {
    slug: "satellite-reception",
    title: "How are satellites received?",
    summary: "From antenna to decoded weather imagery.",
    topic: "Signal Processing",
    body: "The NOSA receiving chain starts at the antenna, continues through an SDR receiver, and then decoding software converts radio signals into image lines.",
  },
  {
    slug: "software-pipeline",
    title: "How does the software pipeline work?",
    summary: "A look at ingestion, processing and publication.",
    topic: "Software",
    body: "In the future, NOSA images will move from edge receiver systems to cloud storage and then into the webapp. This project starts with mock data, but keeps data access abstracted for easy replacement.",
  },
];

export const mockPartners: Partner[] = [
  {
    id: "p-1",
    name: "School Physics Lab",
    description: "Supports electronics and antenna prototyping.",
    logo: "/nosa-logo.png",
    url: "https://example.com/physics-lab",
  },
  {
    id: "p-2",
    name: "Local Weather Club",
    description: "Shares expertise for interpreting weather maps.",
    logo: "/nosa-logo.png",
    url: "https://example.com/weather-club",
  },
  {
    id: "p-3",
    name: "Open Data Initiative",
    description: "Advises open publication and education standards.",
    logo: "/nosa-logo.png",
    url: "https://example.com/open-data",
  },
];

export const teamTimeline: TeamMilestone[] = [
  {
    year: "2026",
    title: "Project idea",
    description: "The team formed around a school satellite reception concept.",
  },
  {
    year: "2026",
    title: "Hardware planning",
    description: "Antenna geometry, SDR setup and first test components.",
  },
  {
    year: "2026",
    title: "First satellite images",
    description: "Initial decoding pipeline produced first weather visuals.",
  },
  {
    year: "2026",
    title: "Public webapp",
    description: "NOSA foundation web app prepared for exhibitions and online visitors.",
  },
];

export const countryGuessMaps: CountryGuessMap[] = [
  {
    id: "m-1",
    country: "Germany",
    mapImage: "/demo/maps/germany.jpg",
    hint: "Central Europe with access to North and Baltic Seas.",
  },
  {
    id: "m-2",
    country: "France",
    mapImage: "/demo/maps/france.jpg",
    hint: "Western Europe, famous for the Alps and Atlantic coast.",
  },
  {
    id: "m-3",
    country: "Spain",
    mapImage: "/demo/maps/spain.jpg",
    hint: "On the Iberian Peninsula.",
  },
  {
    id: "m-4",
    country: "Italy",
    mapImage: "/demo/maps/italy.jpg",
    hint: "Mediterranean country shaped like a boot.",
  },
  {
    id: "m-5",
    country: "Poland",
    mapImage: "/demo/maps/poland.jpg",
    hint: "Eastern Central Europe with Baltic coastline.",
  },
];

export const startSlides: StartSlide[] = [
  {
    id: "s-1",
    title: "Live satellite stream",
    subtitle: "Prototype live view with image type switching",
    href: "/live",
    mediaType: "image",
    mediaSrc: "/demo/images/sat-1.jpg",
  },
  {
    id: "s-2",
    title: "Explore timelapses",
    subtitle: "Watch changing cloud systems over time",
    href: "/zeitraffer",
    mediaType: "video",
    mediaSrc: "/demo/videos/clouds-24h.mp4",
  },
  {
    id: "s-3",
    title: "Open the gallery",
    subtitle: "Discover captures, metadata and image details",
    href: "/galerie",
    mediaType: "image",
    mediaSrc: "/demo/images/sat-6.jpg",
  },
  {
    id: "s-4",
    title: "Learn the science",
    subtitle: "Understand antennas, satellites and processing",
    href: "/wissen",
    mediaType: "image",
    mediaSrc: "/demo/images/sat-3.jpg",
  },
  {
    id: "s-5",
    title: "Meet partners and team",
    subtitle: "See the people behind NOSA",
    href: "/das-sind-wir",
    mediaType: "image",
    mediaSrc: "/demo/images/sat-5.jpg",
  },
];
