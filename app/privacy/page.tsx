import type { Metadata } from "next";
import { company } from "@/lib/company";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: `Privacyverklaring van ${company.name}.`,
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

/**
 * TODO (eigenaar): dit is een beknopte placeholder-privacyverklaring.
 * Laat een definitieve, juridisch correcte versie opstellen die aansluit op
 * jullie verwerkingen (AVG/GDPR).
 */
export default function PrivacyPage() {
  return (
    <>
      <PageHero
        breadcrumb="Privacyverklaring"
        title="Privacyverklaring"
        intro="Hoe wij omgaan met uw persoonsgegevens."
      />
      <section className="bg-white py-16 lg:py-24">
        <div className="container max-w-2xl space-y-6 text-ink-600">
          <p className="rounded-lg border border-spark-400/40 bg-spark-50 p-4 text-sm text-ink-700">
            <strong>Let op (placeholder):</strong> deze tekst dient als voorbeeld.
            Vervang dit door een volledige, op uw situatie toegespitste
            privacyverklaring.
          </p>
          <div>
            <h2 className="text-xl font-semibold text-ink-900">
              Welke gegevens verzamelen wij?
            </h2>
            <p className="mt-2">
              Wanneer u het contact- of offerteformulier invult, verwerken wij uw
              naam, e-mailadres, telefoonnummer en de inhoud van uw bericht. Deze
              gegevens gebruiken wij uitsluitend om uw aanvraag te beantwoorden.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-ink-900">Bewaartermijn</h2>
            <p className="mt-2">
              Wij bewaren uw gegevens niet langer dan nodig is voor de afhandeling
              van uw aanvraag en de wettelijke bewaarplicht.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-ink-900">Contact</h2>
            <p className="mt-2">
              Vragen over uw gegevens? Mail naar{" "}
              <a
                href={`mailto:${company.email}`}
                className="font-medium text-volt-600 hover:underline"
              >
                {company.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
