import { TimelapseViewer } from "@/components/timelapse/timelapse-viewer";
import { getTimelapses } from "@/lib/data";

export default function TimelapsePage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold md:text-4xl">Zeitraffer</h1>
      <p className="text-sky-700">
        Flexibler Zeitraffer-Prototyp für cloudgehostete Videos und künftig generierte Zeitachsen.
      </p>
      <TimelapseViewer timelapses={getTimelapses()} />
    </section>
  );
}
