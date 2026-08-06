import { StartExperience } from "@/components/start/start-experience";
import { getStartSlides } from "@/lib/data";

export default function StartPage() {
  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Welcome to NOSA</h1>
        <p className="max-w-3xl text-slate-300">
          A modern educational satellite platform built by a motivated school team.
        </p>
      </header>
      <StartExperience slides={getStartSlides()} />
    </div>
  );
}
