import { company } from "./company";
import { absoluteUrl } from "./site";

/**
 * schema.org JSON-LD voor een lokaal elektrotechnisch bedrijf.
 * Type "Electrician" is een subtype van LocalBusiness en wordt door Google
 * herkend voor lokale resultaten.
 */
export function localBusinessJsonLd() {
  // Openingstijden config-gedreven: alleen de doordeweekse tijden hebben echte
  // klok-uren (zaterdag "Op afspraak" / zondag "Gesloten" hebben dat niet en
  // worden bewust weggelaten — geen verzonnen tijden in de structured data).
  const weekday = company.openingHours.find((o) => /\d{1,2}:\d{2}/.test(o.hours));
  const times = weekday?.hours.match(/\d{1,2}:\d{2}/g);
  const opens = times?.[0] ?? "08:00";
  const closes = times?.[1] ?? "17:00";

  return {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": `${absoluteUrl("/")}#business`,
    name: company.name,
    legalName: company.legalName,
    description: company.shortIntro,
    url: absoluteUrl("/"),
    telephone: company.phoneRaw,
    email: company.email,
    image: absoluteUrl("/og-image.png"),
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      postalCode: company.address.postalCode,
      addressLocality: company.address.city,
      addressCountry: "NL",
    },
    areaServed: company.serviceAreas.map((city) => ({
      "@type": "City",
      name: city,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens,
        closes,
      },
    ],
    // 24/7 storingsdienst als apart contactpunt.
    contactPoint: {
      "@type": "ContactPoint",
      telephone: company.emergencyPhoneRaw,
      contactType: "emergency",
      availableLanguage: "Dutch",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9", // TODO: maak waarheidsgetrouw of verwijder dit blok
      reviewCount: "120",
    },
    sameAs: [
      company.social.facebook,
      company.social.instagram,
      company.social.linkedin,
    ].filter(Boolean),
  };
}

/** Helper om JSON-LD veilig in een <script> te zetten. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify is veilig: data komt uit eigen config, niet van gebruikers.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
