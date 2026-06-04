# Website Elektrotechnisch Installatiebedrijf

Een complete, productieklare website voor een **erkend elektrotechnisch
installatiebedrijf**. Gebouwd om bezoekers om te zetten in offerteaanvragen en
telefoontjes: strak, snel, toegankelijk en geoptimaliseerd voor lokale SEO.

> Voorbeeld-/placeholdergegevens zijn ingevuld. Vervang ze door de echte
> bedrijfsgegevens — vrijwel alles staat centraal in **`lib/company.ts`**.

---

## Tech stack

- **Next.js 14** (App Router) + **React 18**
- **TypeScript** (strict)
- **Tailwind CSS** (eigen designsysteem)
- Geen extra UI-/animatielibraries → kleine bundel, snelle Lighthouse-scores
- `next/image`, `next/font` (Inter), JSON-LD schema.org, sitemap & robots

## Designsysteem (kort)

| Token            | Waarde                          | Gebruik                          |
| ---------------- | ------------------------------- | -------------------------------- |
| `ink` (basis)    | diep antraciet/donkerblauw      | tekst, donkere secties, footer   |
| `spark` (accent) | elektrisch geel/oranje `#ffb302`| CTA-knoppen, highlights          |
| `volt` (steun)   | helder blauw `#2f80ed`          | links, secundaire accenten       |
| Font             | **Inter** (sans-serif)          | alle tekst, duidelijke hiërarchie|

Knop-, eyebrow- en reveal-stijlen staan als herbruikbare classes in
`app/globals.css`. Kleuren/spacing in `tailwind.config.ts`.

## Structuur (kort)

Een **conversiegerichte one-pager** (`app/page.tsx`) met alle kernsecties via
ankerlinks, **plus** aparte, dieper uitgewerkte pagina's voor SEO/long-tail:
`/diensten`, `/over-ons`, `/projecten`, `/contact`. Zo combineren we een sterke
landingspagina met vindbaarheid op specifieke zoektermen.

```
app/
  layout.tsx          # Header/Footer, fonts, site-brede metadata + LocalBusiness JSON-LD
  page.tsx            # Homepage (one-pager met alle secties)
  diensten/           # Dienstenpagina (detail per dienst)
  over-ons/           # Over ons
  projecten/          # Projecten/referenties
  contact/            # Contact + offerteformulier
  privacy/            # Privacyverklaring (placeholder)
  sitemap.ts          # /sitemap.xml
  robots.ts           # /robots.txt
  icon.svg            # Favicon (placeholder)
  globals.css         # Designsysteem + utilities
components/
  Header.tsx, Footer.tsx, Logo.tsx
  PageHero.tsx, SectionHeading.tsx, ScrollReveal.tsx
  ContactForm.tsx, Icons.tsx
  sections/           # Hero, Services, WhyUs, Process, Certifications,
                      # Projects, Testimonials, ServiceArea, Faq, ContactSection
lib/
  company.ts          # ⭐ CENTRALE bedrijfsgegevens — pas hier alles aan
  services.ts, projects.ts, faq.ts, navigation.ts
  schema.tsx          # schema.org JSON-LD helper
public/               # afbeeldingen/og-image (zie public/README.md)
```

---

## Lokaal draaien

Vereist: **Node.js 18.17+** (Node 20 LTS aanbevolen).

```bash
npm install      # dependencies installeren
npm run dev      # dev-server op http://localhost:3000
```

Overige scripts:

```bash
npm run build    # productie-build
npm run start    # productie-build lokaal serveren
npm run lint     # ESLint
```

---

## Wat moet je nog invullen? (overzicht van alle `TODO`'s)

Zoek in de codebase op `TODO` voor alle plekken. De belangrijkste:

### 1. Bedrijfsgegevens — `lib/company.ts` ⭐

Naam, slogan, werkgebied, telefoon, **24/7 storingsnummer**, e-mail, adres,
KvK/BTW, openingstijden, social links, vertrouwenscijfers en de **productie-URL**
(`url`, gebruikt voor canonical/sitemap/Open Graph).

### 2. Teksten & content

- `lib/services.ts` — dienstomschrijvingen
- `lib/projects.ts` — projecten/referenties
- `lib/faq.ts` — veelgestelde vragen
- `app/over-ons/page.tsx` — "Ons verhaal"
- `app/privacy/page.tsx` — volledige privacyverklaring

### 3. Afbeeldingen — `public/` (zie `public/README.md`)

Nu staan er **Unsplash-placeholders** in de hero, projecten en "over ons".
Vervang door eigen foto's, plus `og-image.jpg` (1200×630) en je eigen favicon
(`app/icon.svg`). Verwijder daarna het Unsplash-domein uit `next.config.mjs`.

### 4. Keurmerken — `components/sections/Certifications.tsx` ⚠️

**Toon uitsluitend keurmerken die het bedrijf daadwerkelijk bezit**
(InstallQ, Techniek Nederland, VCA, NEN 1010/3140, landelijk zegelrecht).
Vervang de grijze placeholder-blokken door de echte logo's.

### 5. Formulier-backend — `components/ContactForm.tsx` ⚠️

Het offerteformulier valideert client-side en toont een succesmelding, maar
**verstuurt nog niets**. Koppel een verzending via één van:

- **Route Handler**: maak `app/api/contact/route.ts` en mail via bijv.
  [Resend](https://resend.com), Nodemailer of SendGrid. Pas in `ContactForm.tsx`
  de functie `submitForm` aan (de fetch-stub staat er al als comment).
- **Form-service**: [Formspree](https://formspree.io) of
  [Web3Forms](https://web3forms.com) — vul de action-URL in.

---

## SEO & toegankelijkheid (al ingebouwd)

- Per-pagina meta-titles/descriptions, **Open Graph** + **Twitter**-tags
- **LocalBusiness / Electrician** JSON-LD (NAW, openingstijden, werkgebied) +
  **FAQPage** JSON-LD op de homepage
- `sitemap.xml` en `robots.txt` (dynamisch gegenereerd)
- Eén `<h1>` per pagina, logische heading-structuur, breadcrumbs
- Semantische HTML, alt-teksten, focus-states, skip-link, toetsenbordnavigatie,
  `prefers-reduced-motion`, voldoende kleurcontrast (WCAG AA als doel)
- Klikbare `tel:` en `mailto:` links

---

## Deployen op Vercel

1. Push deze repository naar GitHub/GitLab/Bitbucket.
2. Ga naar [vercel.com](https://vercel.com) → **New Project** → importeer de repo.
3. Vercel detecteert Next.js automatisch. Klik **Deploy** (geen extra config nodig).
4. Voeg later eventueel een **custom domein** toe en zet dat domein ook in
   `lib/company.ts` (`url`).
5. Heb je een formulier-backend met API-keys (bijv. Resend)? Zet die als
   **Environment Variables** in de Vercel-projectinstellingen.

Alternatief lokaal/zelf hosten:

```bash
npm run build && npm run start
```

---

## Licentie / gebruik

Vrij te gebruiken en aan te passen voor het eigen bedrijf. Vergeet niet alle
placeholders en keurmerken naar waarheid in te vullen vóór livegang.
