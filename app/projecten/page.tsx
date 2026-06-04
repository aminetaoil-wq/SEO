import type { Metadata } from "next";
import { company } from "@/lib/company";
import PageHero from "@/components/PageHero";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Projecten — een greep uit ons werk",
  description: `Bekijk uitgevoerde projecten van ${company.name} in ${company.region}: installaties, laadpalen, groepenkasten, zonnepanelen, verlichting en domotica.`,
  alternates: { canonical: "/projecten" },
};

export default function ProjectenPage() {
  return (
    <>
      <PageHero
        eyebrow="Projecten & referenties"
        breadcrumb="Projecten"
        title="Werk waar we trots op zijn"
        intro="Een selectie van recent uitgevoerde projecten voor particulieren en bedrijven in ons werkgebied."
      />
      <Projects />
      <Testimonials />
      <ContactSection />
    </>
  );
}
