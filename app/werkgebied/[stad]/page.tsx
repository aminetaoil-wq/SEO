import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { company } from "@/lib/company";
import { absoluteUrl } from "@/lib/site";
import { areas, areaSlugs, getAreaBySlug } from "@/lib/areas";
import { services } from "@/lib/services";
import { JsonLd, breadcrumbJsonLd } from "@/lib/schema";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import ContactSection from "@/components/sections/ContactSection";
import Faq from "@/components/sections/Faq";
import { IconCheck, IconArrowRight, IconPin, IconPhone } from "@/components/Icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return areaSlugs.map((stad) => ({ stad }));
}

export function generateMetadata({
  params,
}: {
  params: { stad: string };
}): Metadata {
  const area = getAreaBySlug(params.stad);
  if (!area) return {};
  return {
    title: `Elektricien in ${area.name} | ${company.name}`,
    description: `Op zoek naar een erkende elektricien in ${area.name}? ${company.name} verzorgt installaties, groepenkasten, laadpalen, zonnepanelen en 24/7 storingsdienst in ${area.name} en omstreken. Vraag vrijblijvend een offerte aan.`,
    alternates: { canonical: absoluteUrl(`/werkgebied/${area.slug}`) },
  };
}

export default function WerkgebiedStadPage({
  params,
}: {
  params: { stad: string };
}) {
  const area = getAreaBySlug(params.stad);
  if (!area) notFound();

  // Andere plaatsen voor interne links.
  const otherAreas = areas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <PageHero
        eyebrow="Werkgebied"
        parent={{ label: "Werkgebied", href: "/werkgebied" }}
        breadcrumb={area.name}
        title={`Elektricien in ${area.name}`}
        intro={`Uw erkende elektrotechnisch installatiebedrijf voor ${area.name} en omstreken. Van een spoedstoring tot een complete installatie — wij staan voor u klaar.`}
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Werkgebied", url: absoluteUrl("/werkgebied") },
          { name: area.name, url: absoluteUrl(`/werkgebied/${area.slug}`) },
        ])}
      />

      {/* Lokale intro + USP's */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container grid gap-12 lg:grid-cols-[1.4fr,1fr] lg:items-start">
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow={area.name}
              title={`Vakkundig elektrawerk in ${area.name}`}
              intro={`${company.name} is actief in heel ${company.region}, waaronder ${area.name}. Of het nu gaat om een verouderde groepenkast, een nieuwe laadpaal, zonnepanelen of een acute storing: u bent verzekerd van veilig, gekeurd werk volgens NEN 1010.`}
            />
            <div className="mt-6 space-y-4 text-ink-600">
              <p>
                Door onze aanwezigheid in de regio zijn we snel bij u in{" "}
                {area.name} — ook bij spoed. We werken met vaste prijsafspraken,
                zodat u vooraf weet waar u aan toe bent.
              </p>
              <p>
                Benieuwd wat wij voor u kunnen betekenen in {area.name}? Vraag
                vrijblijvend een offerte aan of bel ons direct.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Offerte aanvragen <IconArrowRight width={18} height={18} />
              </Link>
              <a href={`tel:${company.phoneRaw}`} className="btn-secondary">
                <IconPhone width={18} height={18} /> {company.phone}
              </a>
            </div>
          </div>

          <ScrollReveal className="rounded-2xl border border-ink-100 bg-ink-50/60 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-ink-900">
              Waarom kiezen voor ons in {area.name}?
            </h2>
            <ul className="mt-4 space-y-3">
              {[
                "Erkend installatiebedrijf, werk volgens NEN 1010",
                `Snel ter plaatse in ${area.name} en omgeving`,
                "Vaste prijsafspraak vooraf, geen verrassingen",
                "24/7 bereikbaar bij spoed en storingen",
              ].map((u) => (
                <li key={u} className="flex items-start gap-2.5 text-ink-700">
                  <IconCheck
                    width={18}
                    height={18}
                    className="mt-0.5 shrink-0 text-spark-500"
                  />
                  <span className="text-sm">{u}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Diensten in deze plaats */}
      <section className="bg-ink-50 py-16 lg:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Onze diensten"
            title={`Onze diensten in ${area.name}`}
            intro={`Bekijk waarmee onze elektriciens u in ${area.name} van dienst kunnen zijn.`}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.slug} delay={(i % 4) * 60}>
                  <Link
                    href={`/diensten/${service.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover focus-visible:-translate-y-1"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink-50 text-ink-800 transition-colors group-hover:bg-spark-400 group-hover:text-ink-900">
                      <Icon width={24} height={24} />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-ink-900">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-500">
                      {service.short}
                    </p>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <Faq />

      {/* Andere plaatsen — interne links */}
      <section className="bg-white py-14">
        <div className="container">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-500">
            Ook actief in de regio
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {otherAreas.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/werkgebied/${a.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-ink-100 bg-ink-50/60 px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-ink-200 hover:text-ink-900"
                >
                  <IconPin width={15} height={15} className="text-volt-500" />
                  Elektricien {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
