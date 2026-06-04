import type { Metadata } from "next";
import Image from "next/image";
import { company } from "@/lib/company";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import WhyUs from "@/components/sections/WhyUs";
import Certifications from "@/components/sections/Certifications";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Over ons — uw erkende elektrotechnisch installatiebedrijf",
  description: `Maak kennis met ${company.name}: een erkend elektrotechnisch installatiebedrijf in ${company.region}. Vakmanschap, veiligheid en transparante prijzen.`,
  alternates: { canonical: "/over-ons" },
};

export default function OverOnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Over ons"
        breadcrumb="Over ons"
        title={`Vakmanschap waar ${company.region} op vertrouwt`}
        intro="Een betrokken team, korte lijnen en werk dat klopt — tot in de meterkast."
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-100">
              {/* TODO: vervang door een echte teamfoto */}
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=70"
                alt={`Een monteur van ${company.name} aan het werk`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <span className="eyebrow">Ons verhaal</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900">
              Betrouwbaar elektrowerk, van klein tot groot
            </h2>
            {/* TODO (eigenaar): vervang onderstaande tekst door jullie eigen verhaal */}
            <div className="mt-4 space-y-4 text-ink-600">
              <p>
                {company.name} is een erkend elektrotechnisch installatiebedrijf
                actief in {company.region}. Of het nu gaat om een nieuwe
                groepenkast, een laadpaal, zonnepanelen of een complete
                installatie: wij leveren werk dat veilig is, netjes is afgewerkt
                en bij de tijd blijft.
              </p>
              <p>
                Met inmiddels {company.stats.yearsExperience} jaar ervaring en
                ruim {company.stats.projects} uitgevoerde projecten weten we hoe
                belangrijk duidelijkheid is. Daarom werken we met heldere offertes,
                vaste prijsafspraken en korte lijnen — zodat u altijd weet waar u
                aan toe bent.
              </p>
              <p>
                Veiligheid staat voorop. We werken volgens NEN 1010 en NEN 3140 en
                zijn een erkend installatiebedrijf, zodat u kunt rekenen op
                gecertificeerd vakwerk.
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-4">
              {[
                { v: company.stats.yearsExperience, l: "Jaar ervaring" },
                { v: company.stats.projects, l: "Projecten uitgevoerd" },
                { v: company.stats.rating, l: "Gemiddelde beoordeling" },
                { v: "24/7", l: "Bereikbaar bij spoed" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl border border-ink-100 bg-ink-50/50 p-4"
                >
                  <dt className="sr-only">{s.l}</dt>
                  <dd>
                    <span className="block text-2xl font-bold text-ink-900">
                      {s.v}
                    </span>
                    <span className="text-sm text-ink-500">{s.l}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>
      </section>

      <WhyUs />
      <Certifications />
      <ContactSection />
    </>
  );
}
