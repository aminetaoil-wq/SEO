import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";
import { absoluteUrl } from "@/lib/site";
import { areas } from "@/lib/areas";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import ContactSection from "@/components/sections/ContactSection";
import { IconPin, IconArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Werkgebied — uw elektricien in de regio",
  description: `${company.name} is actief in ${company.region}. Bekijk in welke plaatsen onze erkende elektriciens werken en vraag een vrijblijvende offerte aan.`,
  alternates: { canonical: absoluteUrl("/werkgebied") },
};

export default function WerkgebiedPage() {
  return (
    <>
      <PageHero
        eyebrow="Werkgebied"
        breadcrumb="Werkgebied"
        title={`Uw elektricien in ${company.region}`}
        intro={`Wij werken in heel ${company.region}. Kies hieronder uw plaats voor meer informatie, of neem direct contact met ons op.`}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, i) => (
              <ScrollReveal key={area.slug} delay={(i % 3) * 60}>
                <Link
                  href={`/werkgebied/${area.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-ink-100 bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover focus-visible:-translate-y-1"
                >
                  <span className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink-50 text-volt-500 transition-colors group-hover:bg-spark-400 group-hover:text-ink-900">
                      <IconPin width={22} height={22} />
                    </span>
                    <span className="font-semibold text-ink-900">
                      Elektricien {area.name}
                    </span>
                  </span>
                  <IconArrowRight
                    width={18}
                    height={18}
                    className="text-ink-300 transition-transform group-hover:translate-x-1 group-hover:text-volt-600"
                  />
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <p className="mt-8 text-sm text-ink-500">
            Staat uw plaats er niet bij? Neem gerust contact op — vaak kunnen we
            ook daar van dienst zijn.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
