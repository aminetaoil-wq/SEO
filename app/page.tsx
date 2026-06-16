import type { Metadata } from "next";
import { company } from "@/lib/company";
import { absoluteUrl } from "@/lib/site";
import { faqs } from "@/lib/faq";
import { JsonLd } from "@/lib/schema";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Certifications from "@/components/sections/Certifications";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import ServiceArea from "@/components/sections/ServiceArea";
import Faq from "@/components/sections/Faq";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: `${company.name} | Erkend elektricien in ${company.address.city}`,
  description: company.shortIntro,
  // openGraph (incl. afbeelding + url) wordt geërfd van app/layout.tsx,
  // die al absoluteUrl("/") als og:url gebruikt — niet overschrijven.
  alternates: { canonical: absoluteUrl("/") },
};

/**
 * Homepage — conversiegerichte one-pager met alle kernsecties via ankerlinks.
 * Aparte, dieper uitgewerkte pagina's (Diensten, Over ons, Projecten, Contact)
 * vangen de SEO-zoekintentie en de "long tail" af.
 */
export default function HomePage() {
  // FAQPage-schema voor rich results in Google
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Certifications />
      <Projects limit={3} />
      <Testimonials />
      <ServiceArea />
      <Faq />
      <ContactSection />
      <JsonLd data={faqJsonLd} />
    </>
  );
}
