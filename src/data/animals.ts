export type Category =
  | "saeugetiere"
  | "insekten"
  | "voegel"
  | "reptilien"
  | "fische"
  | "wildblumen"
  | "schilf"
  | "straeucher"
  | "weiden"
  | "holunder"
  | "brennnessel";

export interface Animal {
  name: string;
  link: string;
  category: Category;
}

export const categories: { id: Category; label: string; emoji: string }[] = [
  { id: "saeugetiere", label: "Säugetiere", emoji: "🐾" },
  { id: "insekten", label: "Insekten", emoji: "🐛" },
  { id: "voegel", label: "Vögel", emoji: "🐦" },
  { id: "reptilien", label: "Reptilien", emoji: "🦎" },
  { id: "fische", label: "Fische", emoji: "🐟" },
  { id: "wildblumen", label: "Wildblumen", emoji: "🌼" },
  { id: "schilf", label: "Schilf", emoji: "🌾" },
  { id: "straeucher", label: "Sträucher", emoji: "🌳" },
  { id: "weiden", label: "Weiden", emoji: "🌿" },
  { id: "holunder", label: "Holunder", emoji: "🫐" },
  { id: "brennnessel", label: "Brennnessel", emoji: "🦋" },
];

export const animals: Animal[] = [
  { name: "Hund", link: "/tier/hund", category: "saeugetiere" },
  { name: "Katze", link: "/tier/katze", category: "saeugetiere" },
  { name: "Hamster", link: "/tier/hamster", category: "saeugetiere" },
  { name: "Wellensittich", link: "/tier/wellensittich", category: "voegel" },
  { name: "Kaninchen", link: "/tier/kaninchen", category: "saeugetiere" },
  { name: "Meerschweinchen", link: "/tier/meerschweinchen", category: "saeugetiere" },
  { name: "Schildkröte", link: "/tier/schildkroete", category: "reptilien" },
  { name: "Goldfisch", link: "/tier/goldfisch", category: "fische" },
  { name: "Marienkäfer", link: "/tier/marienkaefer", category: "insekten" },
  { name: "Rosenkäfer", link: "/tier/rosenkaefer", category: "insekten" },
  { name: "Libelle", link: "/tier/libelle", category: "insekten" },
  { name: "Distelfalter", link: "/tier/distelfalter", category: "insekten" },
  { name: "Ameise", link: "/tier/ameise", category: "insekten" },
  { name: "Hirschkäfer", link: "/tier/hirschkaefer", category: "insekten" },
  // Pflanzen — wichtig für den Naturschutz
  { name: "Wilde Möhre", link: "/tier/wilde-moehre", category: "wildblumen" },
  { name: "Kornblume", link: "/tier/kornblume", category: "wildblumen" },
  { name: "Schilf", link: "/tier/schilf", category: "schilf" },
  { name: "Schlehe", link: "/tier/schlehe", category: "straeucher" },
  { name: "Weißdorn", link: "/tier/weissdorn", category: "straeucher" },
  { name: "Hundsrose", link: "/tier/hundsrose", category: "straeucher" },
  { name: "Weide", link: "/tier/weide", category: "weiden" },
  { name: "Schwarzer Holunder", link: "/tier/holunder", category: "holunder" },
  { name: "Brennnessel", link: "/tier/brennnessel", category: "brennnessel" },
];
