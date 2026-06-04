import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { company } from "@/lib/company";
import { absoluteUrl } from "@/lib/site";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import ContactSection from "@/components/sections/ContactSection";
import { IconCheck, IconPhone } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Diensten — elektrische installaties, laadpalen & meer",
  description:
    "Bekijk alle diensten van onze erkende elektricien: complete installaties, groepenkast vervangen, laadpalen, zonnepanelen, verlichting, domotica, inspecties en 24/7 storingsdienst.",
  alternates: { canonical: absoluteUrl("/diensten") },
};

export default function DienstenPage() {
  return (
    <>
      <PageHero
        eyebrow="Onze diensten"
        breadcrumb="Diensten"
        title="Vakkundig elektrawerk voor woning en bedrijf"
        intro={`Van een enkele klus tot complete projecten in ${company.region}. Bekijk hieronder waarmee wij u van dienst kunnen zijn.`}
      />

      <div className="bg-white py-16 lg:py-24">
        <div className="container space-y-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.slug}>
                <article
                  id={service.slug}
                  className="grid scroll-mt-24 gap-6 rounded-2xl border border-ink-100 bg-white p-6 shadow-card sm:grid-cols-[auto,1fr] sm:p-8 lg:grid-cols-[auto,1fr,auto] lg:items-center"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-ink-900 text-spark-400">
                    <Icon width={30} height={30} />
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-ink-900">
                      {service.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-ink-600">
                      {service.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                      {service.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-center gap-1.5 text-sm font-medium text-ink-700"
                        >
                          <IconCheck
                            width={16}
                            height={16}
                            className="text-spark-500"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:pl-4">
                    <Link href="/contact" className="btn-primary w-full lg:w-auto">
                      Offerte aanvragen
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Inline storings-CTA */}
        <div className="container mt-10">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-ink-50 p-6 text-center sm:flex-row sm:text-left">
            <p className="text-ink-700">
              <span className="font-semibold text-ink-900">
                Spoed of storing?
              </span>{" "}
              Onze 24/7 storingsdienst staat dag en nacht voor u klaar.
            </p>
            <a
              href={`tel:${company.emergencyPhoneRaw}`}
              className="btn-secondary shrink-0"
            >
              <IconPhone width={18} height={18} /> {company.emergencyPhone}
            </a>
          </div>
        </div>
      </div>

      <ContactSection />
    </>
  );
}
