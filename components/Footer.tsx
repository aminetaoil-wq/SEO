import Link from "next/link";
import { company } from "@/lib/company";
import { navItems } from "@/lib/navigation";
import { services } from "@/lib/services";
import Logo from "./Logo";
import {
  IconPhone,
  IconMail,
  IconPin,
  IconBolt,
  IconArrowRight,
} from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-ink-200">
      {/* Tweede contact-CTA strip */}
      <div className="border-b border-white/10">
        <div className="container flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Klaar om aan de slag te gaan?
            </h2>
            <p className="mt-1 text-ink-300">
              Vraag vrijblijvend een offerte aan of bel ons direct.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Offerte aanvragen <IconArrowRight width={18} height={18} />
            </Link>
            <a href={`tel:${company.phoneRaw}`} className="btn-ghost-light">
              <IconPhone width={18} height={18} /> {company.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Bedrijf + NAW */}
        <div className="space-y-4">
          <Logo light />
          <p className="text-sm leading-relaxed text-ink-300">
            {company.slogan}
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2.5">
              <IconPin width={18} height={18} className="mt-0.5 text-spark-400" />
              <span>
                {company.address.street}
                <br />
                {company.address.postalCode} {company.address.city}
              </span>
            </li>
            <li>
              <a
                href={`tel:${company.phoneRaw}`}
                className="flex items-center gap-2.5 hover:text-white"
              >
                <IconPhone width={18} height={18} className="text-spark-400" />
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2.5 hover:text-white"
              >
                <IconMail width={18} height={18} className="text-spark-400" />
                {company.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Diensten */}
        <nav aria-label="Diensten" className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Diensten
          </h3>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/diensten/${s.slug}`}
                  className="text-ink-300 transition-colors hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Navigatie */}
        <nav aria-label="Footernavigatie" className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Navigatie
          </h3>
          <ul className="space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-ink-300 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Storingsdienst + werkgebied */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            24/7 Storingsdienst
          </h3>
          <a
            href={`tel:${company.emergencyPhoneRaw}`}
            className="flex items-center gap-3 rounded-xl border border-spark-400/30 bg-spark-400/10 p-4 transition-colors hover:bg-spark-400/20"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-spark-400 text-ink-900">
              <IconBolt width={20} height={20} />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-wide text-spark-300">
                Spoed? Bel direct
              </span>
              <span className="block text-base font-semibold text-white">
                {company.emergencyPhone}
              </span>
            </span>
          </a>
          <p className="text-sm text-ink-300">
            Werkgebied: {company.region}.
          </p>
        </div>
      </div>

      {/* Onderbalk */}
      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-400 md:flex-row">
          <p>
            © {year} {company.legalName}. Alle rechten voorbehouden.
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span>KvK {company.kvk}</span>
            <span>BTW {company.btw}</span>
            {/* TODO: voeg links naar privacyverklaring / algemene voorwaarden toe */}
            <Link href="/privacy" className="hover:text-white">
              Privacyverklaring
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
