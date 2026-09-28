import { CountryGuessGame } from "@/components/games/country-guess-game";
import { PageIntro } from "@/components/layout/page-intro";
import { getCountryGuessMaps } from "@/lib/data";

export default function SpielePage() {
  return (
    <section className="space-y-8">
      <PageIntro
        eyebrow="Spielerisch lernen"
        title="Spiele"
        description="Erkenne Länder anhand von Satellitenkarten. Ein Hinweis hilft, die Form bleibt die Herausforderung. So trainierst du den Blick, den du auch in Galerie und EUMETSAT-Ansicht brauchst."
      />
      <CountryGuessGame maps={getCountryGuessMaps()} />
    </section>
  );
}
