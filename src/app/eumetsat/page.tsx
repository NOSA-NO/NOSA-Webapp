import { EumetsatViewer } from "@/components/eumetsat/eumetsat-viewer";
import { PageIntro } from "@/components/layout/page-intro";
import { getEumetsatProducts, getEumetsatRegions } from "@/lib/data";

export default function EumetsatPage() {
  return (
    <section className="space-y-8">
      <PageIntro
        eyebrow="Europäische Satellitendaten"
        title="EUMETSAT im Blick"
        description="Hier siehst du aktuelle Wetterbilder der europäischen Satellitenorganisation EUMETSAT. Wähle ein Produkt und einen Ausschnitt — von der vollen Erdscheibe bis zum Raum Braunschweig — und lies die Szene wie eine Wetterkarte aus dem Orbit."
      />
      <EumetsatViewer products={getEumetsatProducts()} regions={getEumetsatRegions()} />
    </section>
  );
}
