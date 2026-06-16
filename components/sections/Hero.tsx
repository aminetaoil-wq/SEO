import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/company";
import {
  IconStar,
  IconPhone,
  IconArrowRight,
  IconCheck,
  IconShield,
} from "@/components/Icons";

/**
 * Hero — lokaal + vertrouwen-gedreven (CRO-variant A).
 * Kop noemt plaats + kernbelofte ("vaste prijs vooraf"), met een concrete
 * snelheidsbelofte en twee CTA's.
 *
 * De vertrouwens-pill toont alleen echte review-cijfers wanneer die in
 * lib/company.ts zijn ingevuld (reviews.show). Anders tonen we het keurmerk —
 * nooit verzonnen scores.
 *
 * TODO (eigenaar): vervang de Unsplash-placeholder door een echte foto van
 * jouw team aan het werk (plaats in /public en pas de src + alt aan).
 */
export default function Hero() {
  const showReviewPill = company.reviews.show && company.reviews.rating;

  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pt-16 lg:pt-[4.5rem]">
      {/* Achtergrondafbeelding + donkere overlay voor contrast/leesbaarheid */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2000&q=70"
          alt="" /* decoratief; informatie staat in de tekst */
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-950/90 to-ink-900/70" />
      </div>

      <div className="container grid items-center gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          {/* Vertrouwens-pill: echte reviews óf keurmerk (nooit verzonnen cijfers) */}
          {showReviewPill ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-sm text-white backdrop-blur-sm animate-fade-up">
              <span className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} width={15} height={15} className="text-spark-400" />
                ))}
              </span>
              <span className="font-medium">
                {company.reviews.rating} / 5
                {company.reviews.count && <> · {company.reviews.count} reviews</>}
              </span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-sm text-white backdrop-blur-sm animate-fade-up">
              <IconShield width={16} height={16} className="text-spark-400" />
              <span className="font-medium">Erkend InstallQ-installateur</span>
            </div>
          )}

          <h1
            className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white animate-fade-up sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "60ms" }}
          >
            Erkend elektricien in {company.address.city} — veilig geregeld,{" "}
            <span className="text-spark-400">vaste prijs vooraf</span>
          </h1>

          <p
            className="mt-5 max-w-xl text-lg leading-relaxed text-ink-200 animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            Van groepenkast en laadpaal tot zonnepanelen en spoedstoringen in{" "}
            {company.region}. InstallQ-erkend en volgens NEN 1010 — en altijd een
            prijs vóórdat we beginnen. {company.responseTime} op uw aanvraag.
          </p>

          <div
            className="mt-8 flex flex-col gap-3 animate-fade-up sm:flex-row sm:items-center"
            style={{ animationDelay: "180ms" }}
          >
            <Link href="/contact" className="btn-primary text-base">
              Gratis offerte aanvragen <IconArrowRight width={18} height={18} />
            </Link>
            <a
              href={`tel:${company.phoneRaw}`}
              className="btn-ghost-light text-base"
            >
              <IconPhone width={18} height={18} /> Bel direct: {company.phone}
            </a>
          </div>

          {/* Korte USP-lijst */}
          <ul
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-200 animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            {[
              "Erkend InstallQ + NEN 1010",
              "Vaste prijs vooraf",
              company.responseTime,
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <IconCheck width={18} height={18} className="text-spark-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Vertrouwensstatistieken-kaart */}
        <div className="lg:col-span-5">
          <div
            className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            {[
              { value: company.stats.yearsExperience, label: "Jaar ervaring" },
              { value: company.stats.projects, label: "Projecten" },
              { value: "Gratis", label: "Offerte & advies" },
              { value: "24/7", label: "Storingsdienst" },
            ].map((stat) => (
              <div key={stat.label} className="bg-ink-950/40 p-6 text-center">
                <div className="text-3xl font-bold text-spark-400 sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-ink-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
