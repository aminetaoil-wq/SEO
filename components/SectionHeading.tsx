import type { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

/**
 * Consistente sectie-koptekst met optioneel "eyebrow"-label.
 * `as` bepaalt het heading-niveau (standaard h2) voor een logische hiërarchie.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  centered = false,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  centered?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <ScrollReveal
      className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Heading className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
        {title}
      </Heading>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-ink-500">{intro}</p>
      )}
    </ScrollReveal>
  );
}
