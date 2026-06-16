import Link from "next/link";
import { company } from "@/lib/company";
import { IconPhone, IconMail, IconArrowRight } from "@/components/Icons";

/**
 * Sticky conversie-balk onderaan het scherm op mobiel (verborgen op desktop).
 *
 * Spoed- en lokale klanten zoeken vooral mobiel; deze balk maakt bellen,
 * WhatsAppen of een offerte aanvragen altijd één tik weg. Dit is een van de
 * grootste conversie-winsten voor een lokale dienstverlener.
 *
 * WhatsApp-knop verschijnt alleen als company.whatsappRaw is ingevuld.
 */
export default function StickyMobileCTA() {
  const whatsappUrl = company.whatsappRaw
    ? `https://wa.me/${company.whatsappRaw}?text=${encodeURIComponent(
        company.whatsappMessage,
      )}`
    : null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink-100 bg-white/95 shadow-[0_-4px_20px_rgba(15,27,45,0.08)] backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-3 gap-px pb-[env(safe-area-inset-bottom)]">
        <a
          href={`tel:${company.phoneRaw}`}
          className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold text-ink-800 transition-colors hover:bg-ink-50"
          aria-label={`Bel ${company.name}`}
        >
          <IconPhone width={20} height={20} className="text-volt-600" />
          Bellen
        </a>

        {whatsappUrl ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold text-ink-800 transition-colors hover:bg-ink-50"
            aria-label="Stuur een WhatsApp-bericht"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-[#25D366]"
              aria-hidden="true"
            >
              <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.86 9.86 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7C17.18 3.04 14.69 2 12.04 2zm0 18.02h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.24-8.23 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.48-1.38-1.73-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42l-.48-.01c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
            </svg>
            WhatsApp
          </a>
        ) : (
          <a
            href={`mailto:${company.email}`}
            className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold text-ink-800 transition-colors hover:bg-ink-50"
            aria-label={`Mail ${company.name}`}
          >
            <IconMail width={20} height={20} className="text-volt-600" />
            Mailen
          </a>
        )}

        <Link
          href="/contact"
          className="flex flex-col items-center justify-center gap-1 bg-spark-400 py-3 text-xs font-semibold text-ink-900 transition-colors hover:bg-spark-300"
        >
          <IconArrowRight width={20} height={20} />
          Offerte
        </Link>
      </div>
    </div>
  );
}
