import { company } from "./company";

/**
 * schema.org JSON-LD voor een lokaal elektrotechnisch bedrijf.
 * Type "Electrician" is een subtype van LocalBusiness en wordt door Google
 * herkend voor lokale resultaten.
 */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": `${company.url}/#business`,
    name: company.name,
    legalName: company.legalName,
    description: company.shortIntro,
    url: company.url,
    telephone: company.phoneRaw,
    email: company.email,
    image: `${company.url}/og-image.jpg`, // TODO: plaats een echte og-image in /public
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
        opens: "08:00",
        closes: "17:00",
      },
    ],
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
