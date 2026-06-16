import Link from "next/link";
import { company } from "@/lib/company";
import { areas } from "@/lib/areas";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { IconPin } from "@/components/Icons";

/**
 * Werkgebied — tekst geoptimaliseerd voor lokale SEO ("elektricien [plaats]").
 * TODO (eigenaar): pas de plaatsenlijst (lib/company.ts → serviceAreas) aan.
 */
export default function ServiceArea() {
  return (
    <section id="werkgebied" className="bg-white py-20 lg:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Werkgebied"
            title={`Uw elektricien in ${company.region}`}
            intro={`Wij zijn actief in ${company.region}. Of het nu gaat om een nieuwe groepenkast, een laadpaal of een spoedstoring — wij staan voor u klaar in onder andere de onderstaande plaatsen.`}
          />

          <ScrollReveal className="mt-8">
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/werkgebied/${area.slug}`}
                    className="flex items-center gap-2 rounded-lg border border-ink-100 bg-ink-50/60 px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-ink-200 hover:text-ink-900"
                  >
                    <IconPin width={16} height={16} className="text-volt-500" />
                    Elektricien {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <p className="mt-6 text-sm text-ink-500">
            Staat uw plaats er niet bij? Neem gerust contact op — vaak kunnen we
            ook daar van dienst zijn.{" "}
            <Link
              href="/werkgebied"
              className="font-medium text-volt-600 hover:text-volt-700"
            >
              Bekijk het hele werkgebied
            </Link>
            .
          </p>
        </div>

        {/* Kaart-placeholder */}
        <ScrollReveal>
          {/* TODO: vervang door een echte (statische) kaart of een ingesloten
              Google Maps-iframe van het werkgebied. */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink-100 bg-ink-100">
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(15,27,45,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,27,45,0.06) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 grid place-items-center text-center">
              <div>
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-spark-400 text-ink-900 shadow-card">
                  <IconPin width={28} height={28} />
                </span>
                <p className="mt-3 text-sm font-semibold text-ink-700">
                  {company.address.city} &amp; omstreken
                </p>
                <p className="text-xs text-ink-400">
                  Kaart-placeholder — voeg hier een Google Maps-kaart toe
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
