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
  /** Uitgebreide content voor de dienst-detailpagina (/diensten/[slug]). */
  body: string[];
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  highlights: string[];
  /**
   * Optionele richtprijs ("vanaf"), bijv. "295". Toont op de detailpagina een
   * prijskaart — een sterke differentiator, want de meeste concurrenten tonen
   * géén prijzen. Laat leeg/weg als je (nog) geen prijs wilt tonen.
   * TODO (eigenaar): vul echte, waarheidsgetrouwe richtprijzen in.
   */
  priceFrom?: string;
  /** Optionele toelichting bij de richtprijs, bijv. "incl. montage en BTW". */
  priceNote?: string;
};

/**
 * Diensten — gedeeld tussen homepage-kaarten, /diensten en de detailpagina's
 * /diensten/[slug].
 * TODO (eigenaar): pas teksten aan op jullie eigen aanbod en specialisaties.
 */
export const services: Service[] = [
  {
    slug: "elektrische-installaties",
    title: "Complete elektrische installaties",
    short: "Nieuwbouw & renovatie, van bedrading tot oplevering.",
    description:
      "Een veilige, toekomstbestendige installatie voor woning of bedrijfspand. Wij verzorgen het complete elektrawerk bij nieuwbouw en renovatie: bedrading, wandcontactdozen, schakelmateriaal en aansluiting op de meterkast — netjes weggewerkt en volgens NEN 1010.",
    body: [
      "Een complete elektrische installatie is het fundament van een veilig en comfortabel pand. Of u nu nieuw bouwt, verbouwt of een verouderde installatie laat vervangen: wij verzorgen het hele traject, van het elektrotechnisch ontwerp en de aanleg van leidingen tot de aansluiting op de meterkast en de oplevering.",
      "We denken vooraf met u mee over het aantal groepen, de plaatsing van wandcontactdozen en schakelaars, en toekomstige uitbreidingen zoals een laadpaal of zonnepanelen. Zo voorkomt u dat u later opnieuw moet hakken en boren.",
      "Al ons werk voeren we uit volgens NEN 1010 en leveren we netjes en gekeurd op, met een duidelijke uitleg van wat er is aangelegd.",
    ],
    icon: IconInstallation,
    highlights: ["Nieuwbouw & verbouw", "Volgens NEN 1010", "Strakke afwerking"],
  },
  {
    slug: "groepenkast-meterkast",
    title: "Groepenkast & meterkast",
    short: "Vervangen, uitbreiden en verzwaren van uw meterkast.",
    description:
      "Een verouderde groepenkast is een veelvoorkomende oorzaak van storingen en brandgevaar. Wij vervangen, breiden uit of verzwaren uw meterkast — inclusief aardlekschakelaars — zodat uw installatie weer veilig en bij de tijd is.",
    body: [
      "De groepenkast is het hart van uw elektrische installatie. Een oude kast met te weinig groepen of zonder moderne aardlekbeveiliging zorgt voor overbelasting, storingen en in het ergste geval brandgevaar. Steeds meer apparaten, een inductiekookplaat of een laadpaal vragen bovendien om extra groepen.",
      "Wij vervangen, breiden uit en verzwaren groepenkasten — inclusief aardlekschakelaars en een correcte aarding. Voor het verzwaren van de aansluiting regelen we desgewenst de afstemming met de netbeheerder.",
      "Na afloop test en keuren we de installatie, zodat u zeker weet dat alles veilig en volgens de norm functioneert.",
    ],
    icon: IconMeterkast,
    highlights: ["Aardlekbeveiliging", "Verzwaren aansluiting", "Veilig & gekeurd"],
  },
  {
    slug: "laadpalen",
    title: "Laadpalen voor elektrische auto's",
    short: "Laadstations voor thuis en zakelijk, professioneel geïnstalleerd.",
    description:
      "Thuis of op de zaak slim en veilig laden. Wij adviseren over en installeren laadpalen en laadstations, inclusief de juiste groep, beveiliging en eventueel load balancing met zonnepanelen.",
    body: [
      "Een eigen laadpaal is de snelste en voordeligste manier om uw elektrische auto te laden. Wij adviseren over het juiste type laadpaal voor uw situatie — thuis of zakelijk — en verzorgen een veilige installatie op een eigen groep met de juiste beveiliging.",
      "Met load balancing voorkomen we overbelasting van uw aansluiting en laden we slim mee op de stroom van uw zonnepanelen. Voor bedrijven en VvE's installeren we ook meerdere laadpunten met verbruiksregistratie.",
      "Zo laadt u betrouwbaar, veilig en met een minimale belasting van uw meterkast.",
    ],
    icon: IconLaadpaal,
    highlights: ["Thuis & zakelijk", "Load balancing", "Inclusief advies"],
  },
  {
    slug: "zonnepanelen-thuisbatterij",
    title: "Zonnepanelen & thuisbatterijen",
    short: "Opwekken én opslaan van uw eigen energie.",
    description:
      "Bespaar op uw energierekening en word energie-onafhankelijker. Wij verzorgen de elektrotechnische aansluiting van zonnepanelen en thuisbatterijen, inclusief omvormer, beveiliging en meterkast-aanpassingen.",
    body: [
      "Zelf energie opwekken en opslaan maakt u minder afhankelijk van het net en de energieprijzen. Wij verzorgen de complete elektrotechnische kant van zonnepanelen en thuisbatterijen: van de aansluiting van de omvormer tot de benodigde aanpassingen in de meterkast.",
      "Een thuisbatterij slaat overdag opgewekte stroom op voor gebruik in de avond, en is slim te combineren met een laadpaal. We zorgen voor de juiste beveiliging en een veilige, genormeerde installatie.",
      "Heeft u al panelen liggen? Dan kunnen we de installatie uitbreiden of geschikt maken voor opslag.",
    ],
    icon: IconZonnepaneel,
    highlights: ["Aansluiting & omvormer", "Thuisbatterij", "Slim combineren"],
  },
  {
    slug: "verlichting",
    title: "Verlichting & lichtplannen",
    short: "Sfeervolle en functionele verlichting, binnen en buiten.",
    description:
      "Goede verlichting maakt het verschil. Wij ontwerpen en installeren lichtplannen voor binnen en buiten: van inbouwspots en LED tot tuinverlichting en bewegingssensoren — energiezuinig en op maat.",
    body: [
      "Goede verlichting bepaalt de sfeer én de functionaliteit van een ruimte. Wij ontwerpen en installeren lichtplannen op maat: inbouwspots, LED-stripverlichting, dimbare armaturen en accentverlichting, afgestemd op hoe u de ruimte gebruikt.",
      "Ook buiten zorgen we voor sfeer en veiligheid met tuin- en gevelverlichting, bewegingssensoren en schemerschakelaars. Alles energiezuinig uitgevoerd in LED.",
      "Van een enkel armatuur tot een compleet lichtplan voor woning of bedrijfspand — we adviseren over de beste oplossing voor uw budget.",
    ],
    icon: IconVerlichting,
    highlights: ["Binnen & buiten", "LED & energiezuinig", "Lichtplan op maat"],
  },
  {
    slug: "domotica",
    title: "Domotica & slimme installaties",
    short: "Verlichting, zonwering en klimaat in één slim systeem.",
    description:
      "Bedien verlichting, zonwering, verwarming en beveiliging vanuit één app of slim systeem. Wij installeren en configureren domotica die comfort, veiligheid en energiebesparing combineert.",
    body: [
      "Met domotica bedient u verlichting, zonwering, verwarming en beveiliging vanuit één app of slim systeem. Dat verhoogt het comfort, bespaart energie en maakt uw woning veiliger.",
      "Wij adviseren over een systeem dat bij u past — van losse slimme schakelaars tot een volledig geïntegreerde installatie — en zorgen voor een betrouwbare configuratie die intuïtief werkt voor het hele gezin.",
      "Of u nu nieuw bouwt of een bestaande woning slim wilt maken: we leggen de basis goed aan, zodat uitbreiden later eenvoudig blijft.",
    ],
    icon: IconDomotica,
    highlights: ["Slim wonen", "Eén app", "Comfort & besparing"],
  },
  {
    slug: "inspecties-keuringen",
    title: "Inspecties & keuringen",
    short: "NEN 1010 & NEN 3140 keuringen met rapportage.",
    description:
      "Zekerheid over de veiligheid van uw installatie. Wij voeren inspecties en keuringen uit volgens NEN 1010 (aanleg) en NEN 3140 (veilig werken aan installaties), met een duidelijk rapport en advies.",
    body: [
      "Een periodieke inspectie geeft zekerheid over de veiligheid van uw installatie en is voor bedrijven vaak verplicht voor de verzekering. Wij voeren keuringen uit volgens NEN 1010 (aanleg) en NEN 3140 (veilig werken aan en gebruik van installaties).",
      "Na de inspectie ontvangt u een helder rapport met geconstateerde gebreken en concreet advies. Eventuele herstelwerkzaamheden kunnen we direct voor u uitvoeren.",
      "Zo voldoet u aantoonbaar aan de normen en voorkomt u onnodige risico's en uitval.",
    ],
    icon: IconInspectie,
    highlights: ["NEN 1010 & NEN 3140", "Heldere rapportage", "Voor woning & bedrijf"],
  },
  {
    slug: "storingsdienst",
    title: "24/7 storingsdienst",
    short: "Stroomstoring of kortsluiting? Wij staan voor u klaar.",
    description:
      "Een stroomstoring komt altijd ongelegen. Onze storingsdienst is dag en nacht bereikbaar voor spoed: kortsluiting, uitval, geen stroom of een doorgeslagen groep. Snel ter plaatse, snel opgelost.",
    body: [
      "Een stroomstoring komt altijd ongelegen. Onze storingsdienst is dag en nacht bereikbaar voor spoed: kortsluiting, een doorgeslagen groep, geen stroom of een aardlekschakelaar die blijft uitschakelen.",
      "We achterhalen snel de oorzaak en lossen de storing ter plekke op, of zorgen voor een veilige tijdelijke oplossing tot een definitieve reparatie. Door onze lokale aanwezigheid zijn we vaak snel ter plaatse.",
      "Bel bij spoed direct ons storingsnummer — dan helpen we u zo snel mogelijk verder.",
    ],
    icon: IconStoring,
    highlights: ["Dag & nacht", "Snel ter plaatse", "Spoedservice"],
  },
];
