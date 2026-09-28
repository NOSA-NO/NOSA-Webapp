import { StartExperience } from "@/components/start/start-experience";
import { PageIntro } from "@/components/layout/page-intro";
import { getStartSlides } from "@/lib/data";

export default function StartPage() {
  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow="Willkommen"
        title="NOSA macht Wetter aus dem All sichtbar"
        description="Diese Startseite führt dich durch die Plattform: Live-Empfang, europäische EUMETSAT-Szenen, Galerie, Zeitraffer und Wissen. Wähle eine Kachel und starte direkt — alles ist für Touch und Browser gebaut."
      />
      <StartExperience slides={getStartSlides()} />
    </div>
  );
}
