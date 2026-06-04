import { company } from "@/lib/company";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import {
  IconPhone,
  IconMail,
  IconClock,
  IconPin,
  IconBolt,
} from "@/components/Icons";

/**
 * Contact/offerte-sectie: formulier links, contactgegevens rechts.
 * Bevat losse vermelding van het 24/7 storingsnummer en openingstijden.
 */
export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          centered
          eyebrow="Contact & offerte"
          title="Vraag vrijblijvend een offerte aan"
          intro="Vul het formulier in of bel ons direct. We reageren zo snel mogelijk en denken graag met u mee."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Formulier */}
          <ScrollReveal className="lg:col-span-3">
            <ContactForm />
          </ScrollReveal>

          {/* Contactgegevens */}
          <ScrollReveal delay={80} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {/* Spoed / storingsdienst — prominent */}
              <a
                href={`tel:${company.emergencyPhoneRaw}`}
                className="flex items-center gap-4 rounded-2xl bg-ink-950 p-6 text-white transition-colors hover:bg-ink-900"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-spark-400 text-ink-900">
                  <IconBolt width={24} height={24} />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wide text-spark-300">
                    24/7 Storingsdienst — spoed
                  </span>
                  <span className="block text-xl font-bold">
                    {company.emergencyPhone}
                  </span>
                </span>
              </a>

              <ul className="grid gap-4 rounded-2xl border border-ink-100 bg-ink-50/50 p-6">
                <ContactRow
                  icon={<IconPhone width={20} height={20} />}
                  label="Telefoon"
                >
                  <a
                    href={`tel:${company.phoneRaw}`}
                    className="font-semibold text-ink-900 hover:text-volt-600"
                  >
                    {company.phone}
                  </a>
                </ContactRow>
                <ContactRow
                  icon={<IconMail width={20} height={20} />}
                  label="E-mail"
                >
                  <a
                    href={`mailto:${company.email}`}
                    className="font-semibold text-ink-900 hover:text-volt-600"
                  >
                    {company.email}
                  </a>
                </ContactRow>
                <ContactRow
                  icon={<IconPin width={20} height={20} />}
                  label="Adres"
                >
                  <span className="text-ink-700">
                    {company.address.street}
                    <br />
                    {company.address.postalCode} {company.address.city}
                  </span>
                </ContactRow>
                <ContactRow
                  icon={<IconClock width={20} height={20} />}
                  label="Openingstijden"
                >
                  <ul className="space-y-0.5 text-ink-700">
                    {company.openingHours.map((o) => (
                      <li key={o.days} className="flex justify-between gap-4">
                        <span>{o.days}</span>
                        <span className="font-medium">{o.hours}</span>
                      </li>
                    ))}
                  </ul>
                </ContactRow>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-volt-600 shadow-sm">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <span className="block text-xs font-medium uppercase tracking-wide text-ink-400">
          {label}
        </span>
        <div className="mt-0.5 text-sm">{children}</div>
      </div>
    </li>
  );
}
