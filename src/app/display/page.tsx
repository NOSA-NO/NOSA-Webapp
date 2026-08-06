import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function DisplayModePage() {
  return (
    <Card>
      <CardContent className="space-y-3">
        <h1 className="text-3xl font-bold">Display mode foundation</h1>
        <p className="text-slate-300">
          This route reserves architecture space for future guided exhibition behavior and rotating
          content sequences.
        </p>
        <Link href="/start" className="text-sky-300 hover:text-sky-200">
          Return to start page
        </Link>
      </CardContent>
    </Card>
  );
}
