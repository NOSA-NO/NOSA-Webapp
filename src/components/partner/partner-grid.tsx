import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import type { Partner } from "@/types/nosa";

export function PartnerGrid({ partners }: { partners: Partner[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {partners.map((partner) => (
        <Card key={partner.id}>
          <CardContent className="space-y-3">
            <Image src={partner.logo} alt={partner.name} width={144} height={50} />
            <h2 className="text-lg font-semibold text-slate-100">{partner.name}</h2>
            <p className="text-slate-300">{partner.description}</p>
            <Link href={partner.url} target="_blank" rel="noopener noreferrer" className="text-sky-300 hover:text-sky-200">
              Visit partner ↗
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
