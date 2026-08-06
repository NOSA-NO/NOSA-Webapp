import { PartnerGrid } from "@/components/partner/partner-grid";
import { getPartners } from "@/lib/data";

export default function PartnerPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold md:text-4xl">Partner</h1>
      <p className="text-slate-300">Partner cards prepared for real logos, links and external data.</p>
      <PartnerGrid partners={getPartners()} />
    </section>
  );
}
