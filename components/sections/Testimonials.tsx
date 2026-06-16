import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { company } from "@/lib/company";
import { reviews } from "@/lib/reviews";
import { IconStar, IconArrowRight } from "@/components/Icons";

/**
 * Klantbeoordelingen — volledig data-gedreven (lib/reviews.ts).
 *
 * Eerlijk by design: zolang er geen echte reviews zijn ingevuld, rendert deze
 * sectie niets. Zo staan er nooit verzonnen beoordelingen op de site.
 */
export default function Testimonials() {
  if (reviews.length === 0) return null;

  const { show, rating, count, source, sourceUrl } = company.reviews;
  const showAggregate = show && rating;

  return (
    <section id="reviews" className="bg-ink-50 py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Wat klanten zeggen"
          title="Beoordeeld met een dikke voldoende"
          intro="We zijn trots op de waardering van onze klanten. Een aantal van hun ervaringen."
        />

        {showAggregate && (
          <ScrollReveal className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-ink-100 bg-white px-5 py-2.5 shadow-card">
              <span className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, s) => (
                  <IconStar key={s} width={18} height={18} className="text-spark-400" />
                ))}
              </span>
              <span className="text-sm font-semibold text-ink-900">
                {rating} / 5{count && <> · {count} reviews</>}
              </span>
              {sourceUrl ? (
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-volt-600 hover:text-volt-700"
                >
                  op {source} <IconArrowRight width={14} height={14} />
                </a>
              ) : (
                <span className="text-sm text-ink-500">op {source}</span>
              )}
            </div>
          </ScrollReveal>
        )}

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map((t, i) => (
            <ScrollReveal key={`${t.name}-${i}`} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-card">
                <div
                  className="flex gap-0.5"
                  aria-label={`${t.rating} van de 5 sterren`}
                >
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <IconStar
                      key={s}
                      width={18}
                      height={18}
                      className="text-spark-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-ink-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-5">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-full bg-ink-900 text-sm font-semibold text-spark-400"
                    aria-hidden="true"
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink-900">
                      {t.name}
                    </span>
                    <span className="block text-sm text-ink-500">
                      {t.location}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
