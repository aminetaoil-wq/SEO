# Map `public/` — statische bestanden & afbeeldingen

Plaats hier de echte beeldbestanden van het bedrijf. Onderstaande bestanden
worden door de site verwacht (nu nog als TODO/placeholder):

| Bestand            | Gebruikt voor                                  | Aanbevolen formaat        |
| ------------------ | ---------------------------------------------- | ------------------------- |
| `og-image.jpg`     | Social share-preview (Open Graph / Twitter)    | 1200 × 630 px (JPG/PNG)   |
| `logo.svg`         | Echt bedrijfslogo (vervangt het tekst-logo)    | SVG (of PNG met transparantie) |
| `projecten/*.jpg`  | Projectfoto's (zie `lib/projects.ts`)          | min. 1200 px breed        |
| `team.jpg`         | Teamfoto op de pagina "Over ons"               | min. 1200 px breed        |
| `keurmerken/*.svg` | Logo's van keurmerken (InstallQ, VCA, etc.)    | SVG                       |

## Belangrijk

- De code gebruikt momenteel **Unsplash-placeholders** als demobeelden. Vervang
  deze door eigen foto's en verwijder daarna het Unsplash-domein uit
  `next.config.mjs` als het niet meer nodig is.
- Het favicon staat als `app/icon.svg`. Vervang dit door je eigen icoon.
- Toon **alleen keurmerken die je daadwerkelijk bezit** (zie de TODO's in
  `components/sections/Certifications.tsx`).
