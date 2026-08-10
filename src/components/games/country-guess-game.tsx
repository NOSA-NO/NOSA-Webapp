"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { CountryGuessMap } from "@/types/nosa";

function randomMap(maps: CountryGuessMap[]) {
  return maps[Math.floor(Math.random() * maps.length)];
}

export function CountryGuessGame({ maps }: { maps: CountryGuessMap[] }) {
  const [active, setActive] = useState<CountryGuessMap>(() => randomMap(maps));
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);

  const acceptedAnswers = useMemo(
    () => active.acceptedAnswers.map((answer) => answer.toLowerCase()),
    [active.acceptedAnswers],
  );

  const submit = () => {
    setResult(acceptedAnswers.includes(guess.trim().toLowerCase()) ? "correct" : "wrong");
  };

  const nextRound = () => {
    setActive(randomMap(maps));
    setGuess("");
    setResult(null);
  };

  return (
    <Card>
      <CardContent className="space-y-4">
        <div className="relative aspect-video overflow-hidden rounded-xl border border-slate-700">
          <Image src={active.mapImage} alt="Karte zum Länderraten" fill sizes="100vw" className="object-cover" />
        </div>
        <p className="text-slate-300">Hinweis: {active.hint}</p>
        <div className="flex flex-wrap gap-3">
          <Input
            value={guess}
            onChange={(event) => setGuess(event.target.value)}
            placeholder="Land eingeben"
            className="min-w-[220px] flex-1"
          />
          <Button onClick={submit}>Prüfen</Button>
          <Button variant="outline" onClick={nextRound}>
            Nächste Karte
          </Button>
        </div>
        {result && (
          <p className={result === "correct" ? "text-emerald-300" : "text-rose-300"}>
            {result === "correct"
              ? "Richtig! Großartiges Wissen über Satellitenkarten."
              : `Noch nicht. Die richtige Antwort lautet: ${active.country}`}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
