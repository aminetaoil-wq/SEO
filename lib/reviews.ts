/**
 * ──────────────────────────────────────────────────────────────────────────
 *  KLANTREVIEWS  —  single source of truth voor beoordelingen
 * ──────────────────────────────────────────────────────────────────────────
 *
 * ⚠️ BELANGRIJK: voeg hier UITSLUITEND echte, ontvangen reviews toe. Verzonnen
 * beoordelingen tonen is misleidend en juridisch riskant.
 *
 * Zolang deze lijst leeg is, wordt de reviews-sectie op de homepage automatisch
 * verborgen en verschijnt er geen review-pill in de hero. Vul de lijst met echte
 * citaten én zet in lib/company.ts `reviews.show` op `true` met de echte score.
 *
 * Voorbeeld van een review-item:
 *   {
 *     quote: "Snel, netjes en vakkundig onze meterkast vervangen.",
 *     name: "Voornaam A.",
 *     location: "Utrecht",
 *     rating: 5,
 *   }
 */

export type Review = {
  quote: string;
  name: string;
  location: string;
  /** Aantal sterren (1–5). */
  rating: number;
};

export const reviews: Review[] = [
  // TODO (eigenaar): plak hier je echte klantreviews. Zie het voorbeeld hierboven.
];
