/**
 * Referentieprojecten.
 * TODO (eigenaar): vervang door echte projecten en foto's (plaats foto's in
 * /public/projecten en pas `image` aan). De Unsplash-links zijn placeholders.
 */
export type Project = {
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "Complete installatie nieuwbouwwoning",
    category: "Elektrische installatie",
    location: "Utrecht",
    description:
      "Volledige elektrische installatie voor een vrijstaande nieuwbouwwoning, inclusief groepenkast, vloerverwarmingsregeling en buitenverlichting.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Laadpaal met load balancing",
    category: "Laadpalen",
    location: "Houten",
    description:
      "Installatie van een thuislaadpaal met dynamische load balancing, gekoppeld aan bestaande zonnepanelen.",
    image:
      "https://images.unsplash.com/photo-1647500666543-2b1c1c0b1c1c?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Groepenkast vervangen & verzwaard",
    category: "Meterkast",
    location: "Nieuwegein",
    description:
      "Verouderde meterkast vervangen door een moderne groepenkast met aardlekbeveiliging en uitbreiding naar 3-fasen.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Zonnepanelen & thuisbatterij",
    category: "Duurzame energie",
    location: "Zeist",
    description:
      "Elektrotechnische aansluiting van 18 zonnepanelen met omvormer en thuisbatterij voor maximale zelfvoorziening.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Lichtplan kantoorpand",
    category: "Verlichting",
    location: "Maarssen",
    description:
      "Energiezuinig LED-lichtplan met aanwezigheidsdetectie en daglichtregeling voor een kantoorpand van 600 m².",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Domotica-installatie woonhuis",
    category: "Domotica",
    location: "De Bilt",
    description:
      "Slim systeem voor verlichting, zonwering en klimaat, centraal bedienbaar via app en wandpanelen.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=70",
  },
];
