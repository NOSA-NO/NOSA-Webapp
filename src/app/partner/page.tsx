import { PartnerGrid } from "@/components/partner/partner-grid";
import { PageIntro } from "@/components/layout/page-intro";
import { getPartners } from "@/lib/data";

export default function PartnerPage() {
  return (
    <section className="space-y-8">
      <PageIntro
        eyebrow="Netzwerk"
        title="Partner"
        description="NOSA entsteht nicht allein. Hier findest du Schulen, Vereine und Initiativen, die Hardware, Wetterwissen oder offene Daten möglich machen. Die Karten sind vorbereitet für echte Logos und Links."
      />
      <PartnerGrid partners={getPartners()} />
    </section>
  );
}
