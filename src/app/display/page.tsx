import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function DisplayModePage() {
  return (
    <Card>
      <CardContent className="space-y-3">
        <h1 className="text-3xl font-bold">Grundlage für den Anzeigemodus</h1>
        <p className="text-sky-400">
          Diese Seite schafft die technische Grundlage für zukünftige geführte Ausstellungen und
          wechselnde Inhaltsfolgen.
        </p>
        <Link href="/start" className="text-sky-300 hover:text-sky-200">
          Zur Startseite
        </Link>
      </CardContent>
    </Card>
  );
}
