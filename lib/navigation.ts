/**
 * Navigatie-items. De homepage is een conversiegerichte one-pager met
 * ankerlinks naar de secties; daarnaast bestaan er aparte, dieper uitgewerkte
 * pagina's voor SEO (Diensten, Over ons, Projecten, Contact).
 *
 * Anker-links (#...) verwijzen naar secties op de homepage.
 */
export const navItems = [
  { label: "Diensten", href: "/diensten" },
  { label: "Werkgebied", href: "/werkgebied" },
  { label: "Werkwijze", href: "/#werkwijze" },
  { label: "Projecten", href: "/projecten" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
] as const;
