import { StartExperience } from "@/components/start/start-experience";
import { getStartSlides } from "@/lib/data";

export default function StartPage() {
  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Willkommen bei NOSA</h1>
        <p className="max-w-3xl text-sky-700">
          Eine moderne Satelliten-Bildungsplattform, entwickelt von einem engagierten Schulteam.
        </p>
      </header>
      <StartExperience slides={getStartSlides()} />
    </div>
  );
}
