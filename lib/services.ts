import type { ComponentType, SVGProps } from "react";
import {
  IconInstallation,
  IconMeterkast,
  IconLaadpaal,
  IconZonnepaneel,
  IconVerlichting,
  IconDomotica,
  IconInspectie,
  IconStoring,
} from "@/components/Icons";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  highlights: string[];
};

/**
 * Diensten — gedeeld tussen homepage-kaarten en de pagina /diensten.
 * TODO (eigenaar): pas teksten aan op jullie eigen aanbod en specialisaties.
 */
export const services: Service[] = [
  {
    slug: "elektrische-installaties",
    title: "Complete elektrische installaties",
    short: "Nieuwbouw & renovatie, van bedrading tot oplevering.",
    description:
      "Een veilige, toekomstbestendige installatie voor woning of bedrijfspand. Wij verzorgen het complete elektrawerk bij nieuwbouw en renovatie: bedrading, wandcontactdozen, schakelmateriaal en aansluiting op de meterkast — netjes weggewerkt en volgens NEN 1010.",
    icon: IconInstallation,
    highlights: ["Nieuwbouw & verbouw", "Volgens NEN 1010", "Strakke afwerking"],
  },
  {
    slug: "groepenkast-meterkast",
    title: "Groepenkast & meterkast",
    short: "Vervangen, uitbreiden en verzwaren van uw meterkast.",
    description:
      "Een verouderde groepenkast is een veelvoorkomende oorzaak van storingen en brandgevaar. Wij vervangen, breiden uit of verzwaren uw meterkast — inclusief aardlekschakelaars — zodat uw installatie weer veilig en bij de tijd is.",
    icon: IconMeterkast,
    highlights: ["Aardlekbeveiliging", "Verzwaren aansluiting", "Veilig & gekeurd"],
  },
  {
    slug: "laadpalen",
    title: "Laadpalen voor elektrische auto's",
    short: "Laadstations voor thuis en zakelijk, professioneel geïnstalleerd.",
    description:
      "Thuis of op de zaak slim en veilig laden. Wij adviseren over en installeren laadpalen en laadstations, inclusief de juiste groep, beveiliging en eventueel load balancing met zonnepanelen.",
    icon: IconLaadpaal,
    highlights: ["Thuis & zakelijk", "Load balancing", "Inclusief advies"],
  },
  {
    slug: "zonnepanelen-thuisbatterij",
    title: "Zonnepanelen & thuisbatterijen",
    short: "Opwekken én opslaan van uw eigen energie.",
    description:
      "Bespaar op uw energierekening en word energie-onafhankelijker. Wij verzorgen de elektrotechnische aansluiting van zonnepanelen en thuisbatterijen, inclusief omvormer, beveiliging en meterkast-aanpassingen.",
    icon: IconZonnepaneel,
    highlights: ["Aansluiting & omvormer", "Thuisbatterij", "Slim combineren"],
  },
  {
    slug: "verlichting",
    title: "Verlichting & lichtplannen",
    short: "Sfeervolle en functionele verlichting, binnen en buiten.",
    description:
      "Goede verlichting maakt het verschil. Wij ontwerpen en installeren lichtplannen voor binnen en buiten: van inbouwspots en LED tot tuinverlichting en bewegingssensoren — energiezuinig en op maat.",
    icon: IconVerlichting,
    highlights: ["Binnen & buiten", "LED & energiezuinig", "Lichtplan op maat"],
  },
  {
    slug: "domotica",
    title: "Domotica & slimme installaties",
    short: "Verlichting, zonwering en klimaat in één slim systeem.",
    description:
      "Bedien verlichting, zonwering, verwarming en beveiliging vanuit één app of slim systeem. Wij installeren en configureren domotica die comfort, veiligheid en energiebesparing combineert.",
    icon: IconDomotica,
    highlights: ["Slim wonen", "Eén app", "Comfort & besparing"],
  },
  {
    slug: "inspecties-keuringen",
    title: "Inspecties & keuringen",
    short: "NEN 1010 & NEN 3140 keuringen met rapportage.",
    description:
      "Zekerheid over de veiligheid van uw installatie. Wij voeren inspecties en keuringen uit volgens NEN 1010 (aanleg) en NEN 3140 (veilig werken aan installaties), met een duidelijk rapport en advies.",
    icon: IconInspectie,
    highlights: ["NEN 1010 & NEN 3140", "Heldere rapportage", "Voor woning & bedrijf"],
  },
  {
    slug: "storingsdienst",
    title: "24/7 storingsdienst",
    short: "Stroomstoring of kortsluiting? Wij staan voor u klaar.",
    description:
      "Een stroomstoring komt altijd ongelegen. Onze storingsdienst is dag en nacht bereikbaar voor spoed: kortsluiting, uitval, geen stroom of een doorgeslagen groep. Snel ter plaatse, snel opgelost.",
    icon: IconStoring,
    highlights: ["Dag & nacht", "Snel ter plaatse", "Spoedservice"],
  },
];
