import { PartnerGrid } from "@/components/partner/partner-grid";
import { getPartners } from "@/lib/data";

export default function PartnerPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold md:text-4xl">Partner</h1>
      <p className="text-sky-700">Partnerkarten für echte Logos, Links und externe Daten.</p>
      <PartnerGrid partners={getPartners()} />
    </section>
  );
}
