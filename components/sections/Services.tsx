import Link from "next/link";
import { services } from "@/lib/services";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { IconArrowRight } from "@/components/Icons";

/**
 * Diensten-grid met iconen. Gebruikt op de homepage. Elke kaart linkt door
 * naar de detailsectie op /diensten.
 */
export default function Services() {
  return (
    <section id="diensten" className="bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Onze diensten"
          title="Alles op het gebied van elektra, onder één dak"
          intro="Van een enkele storing tot de complete installatie van een nieuwbouwwoning of bedrijfspand. Bekijk waarmee wij u van dienst kunnen zijn."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.slug} delay={(i % 4) * 60}>
                <Link
                  href={`/diensten/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-ink-200 hover:shadow-card-hover focus-visible:-translate-y-1"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink-50 text-ink-800 transition-colors group-hover:bg-spark-400 group-hover:text-ink-900">
                    <Icon width={26} height={26} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                    {service.short}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-volt-600">
                    Meer informatie
                    <IconArrowRight
                      width={16}
                      height={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
