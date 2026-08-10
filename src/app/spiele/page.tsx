import { CountryGuessGame } from "@/components/games/country-guess-game";
import { getCountryGuessMaps } from "@/lib/data";

export default function SpielePage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold md:text-4xl">Spiele</h1>
      <p className="text-sky-700">
        Prototyp eines Länderratespiels mit lokalen Karten, vorbereitet für künftige Cloud-Daten und Statistiken.
      </p>
      <CountryGuessGame maps={getCountryGuessMaps()} />
    </section>
  );
}
