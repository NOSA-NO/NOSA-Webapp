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
    title: "Wolkenfront über Europa",
    date: "2026-08-02",
    satellite: "NOAA-19",
    type: "clouds",
    likes: 41,
    location: "europe",
    src: "/demo/images/sat-1.jpg",
    description: "Weitläufiges Wolkensystem über Mitteleuropa.",
  },
  {
    id: "2",
    title: "Infrarotfeld über Deutschland",
    date: "2026-08-03",
    satellite: "MetOp-B",
    type: "infrared",
    likes: 28,
    location: "germany",
    src: "/demo/images/sat-2.jpg",
    description: "Infrarot-Platzhalter für nächtliche Wolkenaktivität.",
  },
  {
    id: "3",
    title: "Temperaturgradient über Braunschweig",
    date: "2026-08-04",
    satellite: "NOAA-18",
    type: "temperature",
    likes: 35,
    location: "braunschweig",
    src: "/demo/images/sat-3.jpg",
    description: "Platzhalter für eine Temperaturvisualisierung rund um Braunschweig.",
  },
  {
    id: "4",
    title: "Zyklonansicht über der Nordsee",
    date: "2026-08-04",
    satellite: "NOAA-19",
    type: "clouds",
    likes: 54,
    location: "europe",
    src: "/demo/images/sat-4.jpg",
    description: "Zyklonähnliches Muster über der Nordsee.",
  },
  {
    id: "5",
    title: "Feuchtigkeitsstrom über den Alpen",
    date: "2026-08-05",
    satellite: "MetOp-C",
    type: "infrared",
    likes: 21,
    location: "germany",
    src: "/demo/images/sat-5.jpg",
    description: "Platzhalter-Infrarotscan mit Feuchtigkeitsbewegung.",
  },
  {
    id: "6",
    title: "Wetterzug über dem Atlantik",
    date: "2026-08-06",
    satellite: "NOAA-18",
    type: "clouds",
    likes: 66,
    location: "europe",
    src: "/demo/images/sat-6.jpg",
    description: "Schnell ziehende Wolkenbänder vom Atlantik.",
  },
];

export const mockTimelapses: Timelapse[] = [
  {
    id: "tl-1",
    title: "Wolkendynamik (24 Std.)",
    period: "24h",
    type: "clouds",
    src: "/demo/videos/clouds-24h.mp4",
    description: "Demo-Zeitraffer von Wolken über 24 Stunden.",
  },
  {
    id: "tl-2",
    title: "Wolkenentwicklung (7 Tage)",
    period: "7d",
    type: "clouds",
    src: "/demo/videos/clouds-7d.mp4",
    description: "Demo-Zeitraffer von Wolken über 7 Tage.",
  },
  {
    id: "tl-3",
    title: "Temperaturverlauf (24 Std.)",
    period: "24h",
    type: "temperature",
    src: "/demo/videos/temperature-24h.mp4",
    description: "Demo-Zeitraffer für Temperatur-Platzhalterdaten.",
  },
  {
    id: "tl-4",
    title: "Infrarotarchiv",
    period: "all",
    type: "infrared",
    src: "/demo/videos/clouds-7d.mp4",
    description: "Platzhalter-Archiv für künftige Infrarotdatenströme.",
  },
];

export const mockArticles: Article[] = [
  {
    slug: "qfh-antenna",
    title: "Wie funktioniert eine QFH-Antenne?",
    summary: "Erfahre, warum QFH-Antennen ideal für Wettersatelliten sind.",
    topic: "Hardware",
    body: "Eine Quadrifilar-Helix-Antenne (QFH) empfängt zirkular polarisierte Signale von Wettersatelliten. Ihre Form sorgt bei unterschiedlichen Überflugwinkeln für einen stabilen Empfang.",
  },
  {
    slug: "satellite-reception",
    title: "Wie werden Satelliten empfangen?",
    summary: "Von der Antenne bis zum dekodierten Wetterbild.",
    topic: "Signalverarbeitung",
    body: "Die Empfangskette von NOSA beginnt an der Antenne, führt über einen SDR-Empfänger und wandelt Radiosignale mit Dekodierungssoftware in Bildzeilen um.",
  },
  {
    slug: "software-pipeline",
    title: "Wie funktioniert die Software-Pipeline?",
    summary: "Ein Blick auf Erfassung, Verarbeitung und Veröffentlichung.",
    topic: "Software",
    body: "Künftig gelangen NOSA-Bilder von Empfangssystemen in den Cloud-Speicher und anschließend in die Web-App. Dieses Projekt verwendet zunächst Beispieldaten, hält den Datenzugriff aber für einen einfachen Austausch abstrahiert.",
  },
];

export const mockPartners: Partner[] = [
  {
    id: "p-1",
    name: "Schulphysiklabor",
    description: "Unterstützt die Elektronik- und Antennenentwicklung.",
    logo: "/nosa-logo.png",
    url: "https://example.com/physics-lab",
  },
  {
    id: "p-2",
    name: "Lokaler Wetterverein",
    description: "Teilt Fachwissen zur Interpretation von Wetterkarten.",
    logo: "/nosa-logo.png",
    url: "https://example.com/weather-club",
  },
  {
    id: "p-3",
    name: "Open-Data-Initiative",
    description: "Berät zu offener Veröffentlichung und Bildungsstandards.",
    logo: "/nosa-logo.png",
    url: "https://example.com/open-data",
  },
];

export const teamTimeline: TeamMilestone[] = [
  {
    year: "2026",
    title: "Projektidee",
    description: "Das Team entstand aus einer schulischen Idee zum Satellitenempfang.",
  },
  {
    year: "2026",
    title: "Hardwareplanung",
    description: "Antennengeometrie, SDR-Aufbau und erste Testkomponenten.",
  },
  {
    year: "2026",
    title: "Erste Satellitenbilder",
    description: "Die erste Dekodierungspipeline erzeugte erste Wetterbilder.",
  },
  {
    year: "2026",
    title: "Öffentliche Web-App",
    description: "Die NOSA-Web-App ist für Ausstellungen und Online-Besucher vorbereitet.",
  },
];

export const countryGuessMaps: CountryGuessMap[] = [
  {
    id: "m-1",
    country: "Deutschland",
    acceptedAnswers: ["Deutschland", "Germany"],
    mapImage: "/demo/maps/germany.jpg",
    hint: "Mitteleuropa mit Zugang zu Nord- und Ostsee.",
  },
  {
    id: "m-2",
    country: "Frankreich",
    acceptedAnswers: ["Frankreich", "France"],
    mapImage: "/demo/maps/france.jpg",
    hint: "Westeuropa, bekannt für die Alpen und die Atlantikküste.",
  },
  {
    id: "m-3",
    country: "Spanien",
    acceptedAnswers: ["Spanien", "Spain"],
    mapImage: "/demo/maps/spain.jpg",
    hint: "Auf der Iberischen Halbinsel.",
  },
  {
    id: "m-4",
    country: "Italien",
    acceptedAnswers: ["Italien", "Italy"],
    mapImage: "/demo/maps/italy.jpg",
    hint: "Mittelmeerland in Form eines Stiefels.",
  },
  {
    id: "m-5",
    country: "Polen",
    acceptedAnswers: ["Polen", "Poland"],
    mapImage: "/demo/maps/poland.jpg",
    hint: "Ostmitteleuropa mit Ostseeküste.",
  },
];

export const startSlides: StartSlide[] = [
  {
    id: "s-1",
    title: "Live-Satellitenstrom",
    subtitle: "Prototypansicht mit wechselbaren Bildtypen",
    href: "/live",
    mediaType: "image",
    mediaSrc: "/demo/images/sat-1.jpg",
  },
  {
    id: "s-2",
    title: "Zeitraffer entdecken",
    subtitle: "Beobachte wechselnde Wolkensysteme im Zeitverlauf",
    href: "/zeitraffer",
    mediaType: "video",
    mediaSrc: "/demo/videos/clouds-24h.mp4",
  },
  {
    id: "s-3",
    title: "Galerie öffnen",
    subtitle: "Entdecke Aufnahmen, Metadaten und Bilddetails",
    href: "/galerie",
    mediaType: "image",
    mediaSrc: "/demo/images/sat-6.jpg",
  },
  {
    id: "s-4",
    title: "Die Wissenschaft entdecken",
    subtitle: "Verstehe Antennen, Satelliten und Verarbeitung",
    href: "/wissen",
    mediaType: "image",
    mediaSrc: "/demo/images/sat-3.jpg",
  },
  {
    id: "s-5",
    title: "Partner und Team kennenlernen",
    subtitle: "Lerne die Menschen hinter NOSA kennen",
    href: "/das-sind-wir",
    mediaType: "image",
    mediaSrc: "/demo/images/sat-5.jpg",
  },
];
