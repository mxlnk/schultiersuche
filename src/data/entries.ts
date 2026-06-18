export type EntryType = "tier" | "pflanze";

export type CategoryId =
  // Tiere
  | "saeugetiere"
  | "insekten"
  | "voegel"
  | "reptilien"
  | "fische"
  | "amphibien"
  | "wuermer"
  // Pflanzen
  | "wildblumen"
  | "kraeuter"
  | "straeucher"
  | "baeume"
  | "graeser";

export interface Category {
  id: CategoryId;
  label: string;
  emoji: string;
  type: EntryType;
}

export interface Entry {
  name: string;
  link: string;
  category: CategoryId;
  emoji: string;
}

export const kingdoms: { id: EntryType; label: string; emoji: string }[] = [
  { id: "tier", label: "Tiere", emoji: "🐾" },
  { id: "pflanze", label: "Pflanzen", emoji: "🌿" },
];

export const categories: Category[] = [
  // Tiere
  { id: "saeugetiere", label: "Säugetiere", emoji: "🐾", type: "tier" },
  { id: "insekten", label: "Insekten", emoji: "🐛", type: "tier" },
  { id: "voegel", label: "Vögel", emoji: "🐦", type: "tier" },
  { id: "reptilien", label: "Reptilien", emoji: "🦎", type: "tier" },
  { id: "fische", label: "Fische", emoji: "🐟", type: "tier" },
  { id: "amphibien", label: "Amphibien", emoji: "🐸", type: "tier" },
  { id: "wuermer", label: "Würmer", emoji: "🪱", type: "tier" },
  // Pflanzen
  { id: "wildblumen", label: "Wildblumen", emoji: "🌼", type: "pflanze" },
  { id: "kraeuter", label: "Kräuter", emoji: "🌿", type: "pflanze" },
  { id: "straeucher", label: "Sträucher", emoji: "🪴", type: "pflanze" },
  { id: "baeume", label: "Bäume", emoji: "🌳", type: "pflanze" },
  { id: "graeser", label: "Gräser & Schilf", emoji: "🌾", type: "pflanze" },
];

export const entries: Entry[] = [
  // Tiere
  { name: "Hund", link: "/eintrag/hund", category: "saeugetiere", emoji: "🐕" },
  { name: "Katze", link: "/eintrag/katze", category: "saeugetiere", emoji: "🐱" },
  { name: "Hamster", link: "/eintrag/hamster", category: "saeugetiere", emoji: "🐹" },
  { name: "Wellensittich", link: "/eintrag/wellensittich", category: "voegel", emoji: "🦜" },
  { name: "Kaninchen", link: "/eintrag/kaninchen", category: "saeugetiere", emoji: "🐰" },
  { name: "Meerschweinchen", link: "/eintrag/meerschweinchen", category: "saeugetiere", emoji: "🐹" },
  { name: "Schildkröte", link: "/eintrag/schildkroete", category: "reptilien", emoji: "🐢" },
  { name: "Goldfisch", link: "/eintrag/goldfisch", category: "fische", emoji: "🐠" },
  { name: "Marienkäfer", link: "/eintrag/marienkaefer", category: "insekten", emoji: "🐞" },
  { name: "Rosenkäfer", link: "/eintrag/rosenkaefer", category: "insekten", emoji: "🪲" },
  { name: "Libelle", link: "/eintrag/libelle", category: "insekten", emoji: "🪻" },
  { name: "Distelfalter", link: "/eintrag/distelfalter", category: "insekten", emoji: "🦋" },
  { name: "Ameise", link: "/eintrag/ameise", category: "insekten", emoji: "🐜" },
  { name: "Hirschkäfer", link: "/eintrag/hirschkaefer", category: "insekten", emoji: "🪲" },
  { name: "Biene", link: "/eintrag/biene", category: "insekten", emoji: "🐝" },
  { name: "Hummel", link: "/eintrag/hummel", category: "insekten", emoji: "🐝" },
  { name: "Frosch", link: "/eintrag/frosch", category: "amphibien", emoji: "🐸" },
  { name: "Kröte", link: "/eintrag/kroete", category: "amphibien", emoji: "🐸" },
  { name: "Graureiher", link: "/eintrag/graureiher", category: "voegel", emoji: "🐦" },
  { name: "Höckerschwan", link: "/eintrag/hoeckerschwan", category: "voegel", emoji: "🦢" },
  { name: "Stockente", link: "/eintrag/stockente", category: "voegel", emoji: "🦆" },
  { name: "Meise", link: "/eintrag/meise", category: "voegel", emoji: "🐦" },
  { name: "Regenwurm", link: "/eintrag/regenwurm", category: "wuermer", emoji: "🪱" },
  // Pflanzen — wichtig für den Naturschutz
  { name: "Wilde Möhre", link: "/eintrag/wilde-moehre", category: "wildblumen", emoji: "🥕" },
  { name: "Kornblume", link: "/eintrag/kornblume", category: "wildblumen", emoji: "🌸" },
  { name: "Brennnessel", link: "/eintrag/brennnessel", category: "kraeuter", emoji: "🌱" },
  { name: "Schlehe", link: "/eintrag/schlehe", category: "straeucher", emoji: "🫐" },
  { name: "Weißdorn", link: "/eintrag/weissdorn", category: "straeucher", emoji: "🌳" },
  { name: "Hundsrose", link: "/eintrag/hundsrose", category: "straeucher", emoji: "🌹" },
  { name: "Schwarzer Holunder", link: "/eintrag/holunder", category: "straeucher", emoji: "🍇" },
  { name: "Weide", link: "/eintrag/weide", category: "baeume", emoji: "🌿" },
  { name: "Schilf", link: "/eintrag/schilf", category: "graeser", emoji: "🌾" },
];
