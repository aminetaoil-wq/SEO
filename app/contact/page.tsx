import type { Metadata } from "next";
import { company } from "@/lib/company";
import { absoluteUrl } from "@/lib/site";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import Faq from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Contact & offerte aanvragen",
  description: `Neem contact op met ${company.name} in ${company.address.city}. Vraag een vrijblijvende offerte aan, bel ons direct of gebruik de 24/7 storingsdienst.`,
  alternates: { canonical: absoluteUrl("/contact") },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        breadcrumb="Contact"
        title="Neem contact met ons op"
        intro={`Bel, mail of vraag online een offerte aan. Wij zijn er voor heel ${company.region} — en bij spoed dag en nacht.`}
      />
      <ContactSection />
      <Faq />
    </>
  );
}
