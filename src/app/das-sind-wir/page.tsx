import { Timeline } from "@/components/timeline/timeline";
import { Card, CardContent } from "@/components/ui/card";
import { getTimeline } from "@/lib/data";

export default function AboutPage() {
  return (
    <section className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
      <Card>
        <CardContent className="space-y-3">
          <h1 className="text-3xl font-bold md:text-4xl">Das sind wir</h1>
          <p className="text-slate-300">
            NOSA is a school team combining hardware, software and science curiosity to make weather
            satellite data visible for everyone.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <h2 className="mb-4 text-2xl font-semibold">Project timeline</h2>
          <Timeline milestones={getTimeline()} />
        </CardContent>
      </Card>
    </section>
  );
}
