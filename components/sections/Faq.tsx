"use client";

import { useState } from "react";
import { faqs } from "@/lib/faq";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { IconChevronDown } from "@/components/Icons";

/**
 * Toegankelijke accordion: <button> + aria-expanded + aria-controls.
 * Toetsenbordbedienbaar en met zichtbare focus-states.
 */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ink-50 py-20 lg:py-28">
      <div className="container max-w-3xl">
        <SectionHeading
          centered
          eyebrow="Veelgestelde vragen"
          title="Antwoord op uw vragen"
          intro="Staat uw vraag er niet tussen? Neem gerust contact met ons op."
        />

        <ScrollReveal className="mt-12">
          <ul className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <li
                  key={i}
                  className="overflow-hidden rounded-xl border border-ink-100 bg-white"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-ink-900 transition-colors hover:bg-ink-50/50"
                    >
                      {faq.question}
                      <IconChevronDown
                        width={20}
                        height={20}
                        className={`shrink-0 text-ink-400 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    hidden={!isOpen}
                    className="px-5 pb-5 text-sm leading-relaxed text-ink-600"
                  >
                    {faq.answer}
                  </div>
                </li>
              );
            })}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
