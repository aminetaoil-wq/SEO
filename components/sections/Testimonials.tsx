import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { IconStar } from "@/components/Icons";

/**
 * Klantbeoordelingen (placeholders).
 * TODO (eigenaar): vervang door echte reviews, bijv. uit Google. Gebruik
 * alleen beoordelingen die je daadwerkelijk hebt ontvangen.
 */
const testimonials = [
  {
    quote:
      "Snel, netjes en vakkundig onze meterkast vervangen. Duidelijke uitleg vooraf en een eerlijke prijs. Echt een aanrader!",
    name: "Marloes de Vries",
    location: "Utrecht",
  },
  {
    quote:
      "Laadpaal laten installeren voor de elektrische auto. Goed advies, keurig afgewerkt en binnen de afgesproken tijd geregeld.",
    name: "Johan Bakker",
    location: "Nieuwegein",
  },
  {
    quote:
      "'s Avonds een storing gehad, binnen het uur was er iemand. Probleem snel opgelost. Fijn dat je hierop kunt rekenen.",
    name: "Sandra Willemsen",
    location: "Houten",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-ink-50 py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Wat klanten zeggen"
          title="Beoordeeld met een dikke voldoende"
          intro="We zijn trots op de waardering van onze klanten. Een aantal van hun ervaringen."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-card">
                <div className="flex gap-0.5" aria-label="5 van de 5 sterren">
                  {Array.from({ length: 5 }).map((_, s) => (
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
