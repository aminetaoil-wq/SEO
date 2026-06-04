import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import {
  IconShield,
  IconEuro,
  IconBolt,
  IconCheck,
} from "@/components/Icons";

const reasons = [
  {
    icon: IconShield,
    title: "Vakmanschap & veiligheid",
    text: "Gecertificeerde monteurs die werken volgens NEN 1010 en NEN 3140. Netjes afgewerkt en altijd veilig opgeleverd.",
  },
  {
    icon: IconEuro,
    title: "Transparante prijzen",
    text: "Vooraf een heldere offerte en een vaste prijsafspraak. Geen verrassingen achteraf — u weet precies waar u aan toe bent.",
  },
  {
    icon: IconBolt,
    title: "Snelle service",
    text: "Korte lijnen en snel ter plaatse. Voor spoed staat onze 24/7 storingsdienst dag en nacht voor u klaar.",
  },
  {
    icon: IconCheck,
    title: "Erkend & gecertificeerd",
    text: "Erkend InstallQ-installateur en VCA-gecertificeerd. Aangesloten bij de branche, met garantie op ons werk.",
  },
];

export default function WhyUs() {
  return (
    <section id="waarom-wij" className="bg-ink-50 py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Waarom voor ons kiezen"
          title="Betrouwbaar vakwerk waar u op kunt rekenen"
          intro="Wat ons onderscheidt is niet alleen de techniek, maar ook hoe we met u en uw woning of pand omgaan."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <ScrollReveal key={reason.title} delay={(i % 4) * 60}>
                <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-card">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-spark-400/15 text-spark-500">
                    <Icon width={26} height={26} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink-900">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {reason.text}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
