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

  // WhatsApp — gebruikt voor de mobiele sticky-balk en contact-CTA's.
  // Laat whatsappRaw leeg ("") om de WhatsApp-knoppen te verbergen.
  // TODO: vul je eigen WhatsApp-nummer in (internationaal, zonder +, spaties of streepjes).
  whatsappRaw: "31612345678", // bijv. "31612345678"
  whatsappMessage:
    "Hallo, ik heb een vraag over elektrawerk en zou graag een offerte aanvragen.",

  // Concrete snelheidsbelofte — krachtige conversie-trigger. Houd dit waar.
  // TODO: pas aan naar wat je écht kunt waarmaken.
  responseTime: "Binnen 24 uur reactie", // reactietijd op aanvragen
  emergencyResponse: "Bij spoed snel ter plaatse", // TODO: bijv. "Binnen 2 uur ter plaatse"

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

  /**
   * Reviews / beoordelingen.
   *
   * ⚠️ BELANGRIJK: toon nooit verzonnen review-cijfers — dat is misleidend en
   * juridisch riskant (oneerlijke handelspraktijk). Zolang `show: false` staat,
   * worden er nergens op de site beoordelingsscores of -citaten getoond.
   *
   * TODO (eigenaar): verzamel echte reviews (bijv. via Google), zet hieronder
   * `show: true`, vul de echte score, het aantal en de bron-URL in, en voeg de
   * citaten toe in lib/reviews.ts. Dan verschijnen de review-pill in de hero én
   * de klantbeoordelingen-sectie automatisch.
   */
  reviews: {
    show: false,
    rating: "", // bijv. "4,9"
    count: "", // bijv. "120+"
    source: "Google", // platform waar de reviews vandaan komen
    sourceUrl: "", // link naar je reviewprofiel
  },

  // Productie-URL (voor canonical, sitemap, Open Graph). TODO: zet je echte domein.
  url: "https://www.fifthriverelectric.nl",
} as const;

export type Company = typeof company;

/**
 * Web3Forms access key voor het contactformulier (components/ContactForm.tsx).
 * Deze key is per ontwerp publiek/client-side en mag veilig in de repo staan.
 *
 * TODO (eigenaar): maak een gratis key aan op https://web3forms.com (vul je
 * e-mailadres in) en plak hem hieronder. Zolang dit leeg is, toont het formulier
 * een nette foutmelding in plaats van een aanvraag te versturen.
 */
export const web3formsAccessKey = "";
