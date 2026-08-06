import { CountryGuessGame } from "@/components/games/country-guess-game";
import { getCountryGuessMaps } from "@/lib/data";

export default function SpielePage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold md:text-4xl">Spiele</h1>
      <p className="text-slate-300">
        Prototype country guessing game with local maps, ready for future cloud data and statistics.
      </p>
      <CountryGuessGame maps={getCountryGuessMaps()} />
    </section>
  );
}
