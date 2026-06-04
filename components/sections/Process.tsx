import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    title: "Contact & intake",
    text: "U neemt contact op via telefoon of het offerteformulier. We bespreken uw wensen en de situatie.",
  },
  {
    title: "Inspectie & offerte",
    text: "Indien nodig komen we langs voor een opname. U ontvangt een heldere offerte met een vaste prijsafspraak.",
  },
  {
    title: "Uitvoering",
    text: "Onze monteurs voeren het werk vakkundig en netjes uit, op de afgesproken datum en volgens de geldende normen.",
  },
  {
    title: "Oplevering & nazorg",
    text: "We leveren veilig op, lichten u toe en ruimen netjes op. Vragen achteraf? We staan voor u klaar.",
  },
];

export default function Process() {
  return (
    <section id="werkwijze" className="bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Onze werkwijze"
          title="Van eerste contact tot oplevering — duidelijk geregeld"
          intro="Een vast stappenplan zorgt dat u altijd weet wat u kunt verwachten."
        />

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <ScrollReveal as="li" key={step.title} delay={i * 80}>
              <div className="relative h-full rounded-2xl border border-ink-100 bg-ink-50/50 p-6">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-ink-900 text-lg font-bold text-spark-400"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {step.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
