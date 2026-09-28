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
    description: "Wärmebild der Nacht: Wolkenoberkanten leuchten hell, die Landmasse bleibt ruhig und dunkel."
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
    description: "Farbverlauf der Lufttemperatur rund um Braunschweig — kühle Täler, wärmere Stadtflächen."
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
    description: "Feuchte Luft gleitet über die Alpen; im Infrarot wird die Höhenstaffelung der Wolken lesbar."
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
    description: "Ein Tag in Farben: wie sich Wärme über Land und Wasser verschiebt."
  },
  {
    id: "tl-4",
    title: "Infrarotarchiv",
    period: "all",
    type: "infrared",
    src: "/demo/videos/clouds-7d.mp4",
    description: "Archivblick ins Infrarot — vorbereitet für längere Datenreihen aus dem Empfang."
  },
];

export const mockArticles: Article[] = [
  {
    slug: "qfh-antenna",
    title: "Wie funktioniert eine QFH-Antenne?",
    summary: "Warum eine schraubenförmige Antenne Wettersatelliten besonders ruhig empfängt.",
    topic: "Hardware",
    body: "Eine Quadrifilar-Helix-Antenne (QFH) ist für zirkular polarisierte Signale gebaut — genau die Polarisation, mit der viele Wettersatelliten senden. Zwei ineinander verschlungene Helices halten den Empfang stabil, selbst wenn der Satellit tief am Horizont steht oder schnell über den Himmel zieht. Für NOSA bedeutet das: weniger Rauschen, klarere Bildzeilen, reproduzierbare Überflüge. Die Geometrie ist bewusst einfach, damit sie in der Schule nachgebaut und verstanden werden kann.",
  },
  {
    slug: "satellite-reception",
    title: "Wie werden Satelliten empfangen?",
    summary: "Der Weg vom Radiosignal über den SDR bis zum sichtbaren Wetterbild.",
    topic: "Signalverarbeitung",
    body: "NOSA hört polarumlaufende Satelliten wie NOAA und MetOp. Die Antenne liefert ein schwaches Hochfrequenzsignal an einen Software-Defined Radio. Software synchronisiert die Zeilen, dekodiert das Bildformat und schreibt eine Datei. Jede Zeile entspricht einem schmalen Streifen der Erde; erst viele Zeilen ergeben die vertraute Karte. Fehler in dieser Kette — Timing, Doppler, Rauschen — sieht man später als Streifen oder Verzerrung im Bild.",
  },
  {
    slug: "software-pipeline",
    title: "Wie funktioniert die Software-Pipeline?",
    summary: "Von der Empfangsstation in die Web-App: Speichern, Ausliefern, Erklären.",
    topic: "Software",
    body: "Nach der Dekodierung wandern Bilder in einen Speicher, den die Web-App über eine schmale Datenschicht liest. Heute sind das Beispieldateien, morgen können es APIs und Objekt-Speicher sein — die Seiten bleiben dieselben. Metadaten wie Satellit, Typ und Ort machen Filter und Galerie möglich. So bleibt die Plattform erweiterbar, ohne dass jede Ansicht neu geschrieben werden muss.",
  },
  {
    slug: "eumetsat-daten",
    title: "Was liefert EUMETSAT — und warum zeigen wir es?",
    summary: "Europäische operationelle Satelliten neben dem schulischen Eigenempfang.",
    topic: "Daten",
    body: "EUMETSAT betreibt die Meteosat-Flotte über dem Äquator und liefert im Viertelstundentakt RGB-Komposite, Infrarot und abgeleitete Produkte. NOSA empfängt zusätzlich polarumlaufende Satelliten mit eigener Hardware. Beides gehört zusammen: Die Antenne zeigt, wie ein Signal entsteht. EUMETSAT zeigt, wie ein professioneller Dienst dieselbe Erde in standardisierten Produkten darstellt. In der EUMETSAT-Ansicht nutzt die App den öffentlichen WMS von EUMETView — ohne Login, mit klarer Quellenangabe.",
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
    title: "Live aus dem Empfang",
    subtitle: "Ort und Bildtyp wählen — so sieht der NOSA-Strom aus.",
    href: "/live",
    mediaType: "image",
    mediaSrc: "/demo/images/sat-1.jpg",
  },
  {
    id: "s-2",
    title: "EUMETSAT öffnen",
    subtitle: "Aktuelle Meteosat-Szenen: Farben, Staub, Luftmassen, Infrarot.",
    href: "/eumetsat",
    mediaType: "image",
    mediaSrc: "/demo/images/sat-4.jpg",
  },
  {
    id: "s-3",
    title: "Zeitraffer entdecken",
    subtitle: "Wolken und Wärme in 24 Stunden oder sieben Tagen.",
    href: "/zeitraffer",
    mediaType: "video",
    mediaSrc: "/demo/videos/clouds-24h.mp4",
  },
  {
    id: "s-4",
    title: "Galerie durchstöbern",
    subtitle: "Aufnahmen mit Datum, Satellit und kurzer Erklärung.",
    href: "/galerie",
    mediaType: "image",
    mediaSrc: "/demo/images/sat-6.jpg",
  },
  {
    id: "s-5",
    title: "Wissen nachlesen",
    subtitle: "Antenne, Empfang, Software und europäische Satellitendaten.",
    href: "/wissen",
    mediaType: "image",
    mediaSrc: "/demo/images/sat-3.jpg",
  },
  {
    id: "s-6",
    title: "Das Team kennenlernen",
    subtitle: "Wer NOSA baut — und warum der Blick nach oben zur Schule gehört.",
    href: "/das-sind-wir",
    mediaType: "image",
    mediaSrc: "/demo/images/sat-5.jpg",
  },
];
