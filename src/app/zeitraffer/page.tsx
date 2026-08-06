import { TimelapseViewer } from "@/components/timelapse/timelapse-viewer";
import { getTimelapses } from "@/lib/data";

export default function TimelapsePage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold md:text-4xl">Zeitraffer</h1>
      <p className="text-slate-300">
        Flexible timelapse prototype prepared for cloud-hosted videos and generated future timelines.
      </p>
      <TimelapseViewer timelapses={getTimelapses()} />
    </section>
  );
}
