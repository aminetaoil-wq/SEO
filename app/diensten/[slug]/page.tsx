import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { company } from "@/lib/company";
import { absoluteUrl } from "@/lib/site";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";
import { JsonLd, breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import {
  IconCheck,
  IconArrowRight,
  IconPin,
  IconPhone,
  IconEuro,
} from "@/components/Icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short
      ? `${service.title} in ${company.region}. ${service.short} ${company.name} — erkend, volgens NEN 1010. Vraag een vrijblijvende offerte aan.`
      : service.description,
    alternates: { canonical: absoluteUrl(`/diensten/${service.slug}`) },
  };
}

export default function DienstDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow="Dienst"
        parent={{ label: "Diensten", href: "/diensten" }}
        breadcrumb={service.title}
        title={service.title}
        intro={service.description}
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Diensten", url: absoluteUrl("/diensten") },
          { name: service.title, url: absoluteUrl(`/diensten/${service.slug}`) },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: service.title,
          description: service.description,
          path: `/diensten/${service.slug}`,
        })}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container grid gap-12 lg:grid-cols-[1.5fr,1fr] lg:items-start">
          {/* Body */}
          <div className="max-w-2xl space-y-4 text-ink-600">
            {service.body.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}

            <ul className="!mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {service.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-2 text-sm font-medium text-ink-800"
                >
                  <IconCheck width={18} height={18} className="text-spark-500" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="!mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Offerte aanvragen <IconArrowRight width={18} height={18} />
              </Link>
              <a href={`tel:${company.phoneRaw}`} className="btn-secondary">
                <IconPhone width={18} height={18} /> {company.phone}
              </a>
            </div>
          </div>

          {/* Zijbalk: prijs + werkgebied + verwante diensten */}
          <aside className="space-y-6">
            {service.priceFrom && (
              <div className="rounded-2xl border border-spark-400/40 bg-spark-400/10 p-6">
                <div className="flex items-center gap-2 text-sm font-medium text-ink-600">
                  <IconEuro width={18} height={18} className="text-volt-600" />
                  Richtprijs
                </div>
                <p className="mt-1 text-3xl font-bold text-ink-900">
                  vanaf €{service.priceFrom}
                </p>
                {service.priceNote && (
                  <p className="mt-1 text-sm text-ink-500">{service.priceNote}</p>
                )}
                <Link
                  href="/contact"
                  className="btn-primary mt-4 w-full text-sm"
                >
                  Vraag een exacte offerte <IconArrowRight width={16} height={16} />
                </Link>
              </div>
            )}

            <div className="rounded-2xl border border-ink-100 bg-ink-50/60 p-6">
              <h2 className="text-base font-semibold text-ink-900">
                In heel {company.region}
              </h2>
              <p className="mt-1.5 text-sm text-ink-500">
                Wij verzorgen {service.title.toLowerCase()} in onder andere:
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {areas.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/werkgebied/${a.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-ink-100 bg-white px-2.5 py-1.5 text-xs font-medium text-ink-700 transition-colors hover:border-ink-200 hover:text-ink-900"
                    >
                      <IconPin width={13} height={13} className="text-volt-500" />
                      {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-ink-100 p-6">
              <h2 className="text-base font-semibold text-ink-900">
                Andere diensten
              </h2>
              <ul className="mt-3 space-y-1">
                {related.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/diensten/${s.slug}`}
                      className="group flex items-center justify-between gap-2 rounded-lg px-2 py-2 text-sm text-ink-700 transition-colors hover:bg-ink-50 hover:text-ink-900"
                    >
                      {s.title}
                      <IconArrowRight
                        width={15}
                        height={15}
                        className="text-ink-300 transition-transform group-hover:translate-x-0.5 group-hover:text-volt-600"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
