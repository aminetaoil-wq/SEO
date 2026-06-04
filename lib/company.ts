/**
 * ──────────────────────────────────────────────────────────────────────────
 *  CENTRALE BEDRIJFSGEGEVENS  –  pas hier ALLES in één keer aan
 * ──────────────────────────────────────────────────────────────────────────
 *  Dit bestand is de single source of truth. Alle pagina's, de footer, de
 *  metadata én de JSON-LD schema.org-data lezen hieruit. Vervang de waarden
 *  hieronder met de echte gegevens van het bedrijf.
 *
 *  TODO (eigenaar): vervang alle placeholder-waarden hieronder.
 */

export const company = {
  // Basis
  name: "Fifth River Electric", // TODO: vervang door echte bedrijfsnaam
  legalName: "Fifth River Electric B.V.", // TODO
  slogan: "Uw elektrische installatie veilig en vakkundig geregeld", // TODO
  shortIntro:
    "Erkend elektrotechnisch installatiebedrijf voor particulieren en bedrijven. Van complete installaties tot laadpalen, zonnepanelen en 24/7 storingsdienst.", // TODO

  // Werkgebied
  region: "regio Utrecht en omstreken", // TODO
  serviceAreas: [
    "Utrecht",
    "Nieuwegein",
    "Houten",
    "Zeist",
    "IJsselstein",
    "Maarssen",
    "Bunnik",
    "De Bilt",
  ], // TODO: pas plaatsen aan op jouw werkgebied (belangrijk voor lokale SEO)

  // Contact
  phone: "030 - 123 45 67", // TODO
  phoneRaw: "+31301234567", // gebruikt in tel: links — internationaal formaat
  emergencyPhone: "06 - 12 34 56 78", // TODO: 24/7 storingsnummer
  emergencyPhoneRaw: "+31612345678",
  email: "info@fifthriverelectric.nl", // TODO

  // Adres
  address: {
    street: "Voorbeeldstraat 12", // TODO
    postalCode: "3500 AA", // TODO
    city: "Utrecht", // TODO
    country: "Nederland",
  },

  // Registratie
  kvk: "12345678", // TODO
  btw: "NL123456789B01", // TODO

  // Openingstijden (ma-zo) — gebruikt in tekst én JSON-LD
  openingHours: [
    { days: "Maandag t/m vrijdag", hours: "08:00 – 17:00" },
    { days: "Zaterdag", hours: "Op afspraak" },
    { days: "Zondag", hours: "Gesloten" },
  ],

  // Sociale media — laat leeg ("") om te verbergen. TODO: vul in.
  social: {
    facebook: "", // bijv. "https://facebook.com/voorbeeldelektro"
    instagram: "",
    linkedin: "",
  },

  // Vertrouwenscijfers voor de hero-balk (TODO: maak waarheidsgetrouw)
  stats: {
    rating: "4,9",
    reviewCount: "120+",
    projects: "750+",
    yearsExperience: "15+",
  },

  // Productie-URL (voor canonical, sitemap, Open Graph). TODO: zet je echte domein.
  url: "https://www.fifthriverelectric.nl",
} as const;

export type Company = typeof company;
