import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { IconCheck } from "@/components/Icons";

/**
 * Vertrouwen & certificeringen.
 *
 * ⚠️ TODO (eigenaar) — BELANGRIJK:
 * Toon UITSLUITEND keurmerken en certificeringen die het bedrijf ook
 * daadwerkelijk bezit. Onterecht voeren van keurmerken is misleidend en
 * niet toegestaan. Verwijder of vervang de items hieronder naar waarheid.
 * De "logo's" zijn nu placeholders — vervang ze door de echte logo's
 * (bijv. SVG/PNG in /public) zodra je gerechtigd bent ze te tonen.
 */
const certifications = [
  {
    name: "InstallQ",
    desc: "Erkend InstallQ-installateur — hét landelijke keurmerk voor erkende installatiebedrijven (voortgekomen uit Sterkin en KvINL).",
  },
  {
    name: "Techniek Nederland",
    desc: "Aangesloten bij de branchevereniging voor de installatiesector.",
  },
  {
    name: "VCA",
    desc: "VCA-gecertificeerd: aantoonbaar veilig werken op locatie.",
  },
  {
    name: "NEN 1010",
    desc: "Werken volgens de norm voor de aanleg van laagspanningsinstallaties.",
  },
  {
    name: "NEN 3140",
    desc: "Veilig werken aan en periodiek inspecteren van installaties.",
  },
  {
    name: "Landelijk zegelrecht",
    desc: "Bevoegd om verzegelingen in de meterkast zelfstandig te verbreken en opnieuw aan te brengen (sinds 1 mei 2026), indien van toepassing.",
  },
];

export default function Certifications() {
  return (
    <section id="certificeringen" className="bg-ink-950 py-20 text-white lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Vertrouwen & certificeringen"
          title={
            <span className="text-white">
              Erkend, gecertificeerd en aangesloten bij de branche
            </span>
          }
          intro={
            <span className="text-ink-300">
              Zekerheid over kwaliteit en veiligheid. Wij werken volgens de
              geldende normen en zijn aangesloten bij de relevante keurmerken.
            </span>
          }
        />

        {/* Logo-strip (placeholders) */}
        <ScrollReveal className="mt-12">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                /* TODO: vervang dit grijze placeholder-blok door het echte logo */
                className="grid h-20 place-items-center rounded-xl border border-white/10 bg-white/5 px-3 text-center text-sm font-semibold text-ink-200"
                title={cert.desc}
              >
                {cert.name}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        {/* Toelichting per keurmerk */}
        <div className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.name} delay={(i % 3) * 60}>
              <div className="flex items-start gap-3">
                <IconCheck
                  width={20}
                  height={20}
                  className="mt-0.5 shrink-0 text-spark-400"
                />
                <p className="text-sm leading-relaxed text-ink-300">
                  <span className="font-semibold text-white">{cert.name}</span>
                  {" — "}
                  {cert.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-8 text-xs text-ink-400">
          {/* Zichtbaar disclaimer-bewijs én reminder voor de eigenaar */}
          Registratie is verifieerbaar via EchteInstallateur.nl. Toon alleen
          keurmerken die daadwerkelijk in uw bezit zijn.
        </p>
      </div>
    </section>
  );
}
