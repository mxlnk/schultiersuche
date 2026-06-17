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
  { name: "Hund", link: "/tier/hund", category: "saeugetiere", emoji: "🐕" },
  { name: "Katze", link: "/tier/katze", category: "saeugetiere", emoji: "🐱" },
  { name: "Hamster", link: "/tier/hamster", category: "saeugetiere", emoji: "🐹" },
  { name: "Wellensittich", link: "/tier/wellensittich", category: "voegel", emoji: "🦜" },
  { name: "Kaninchen", link: "/tier/kaninchen", category: "saeugetiere", emoji: "🐰" },
  { name: "Meerschweinchen", link: "/tier/meerschweinchen", category: "saeugetiere", emoji: "🐹" },
  { name: "Schildkröte", link: "/tier/schildkroete", category: "reptilien", emoji: "🐢" },
  { name: "Goldfisch", link: "/tier/goldfisch", category: "fische", emoji: "🐠" },
  { name: "Marienkäfer", link: "/tier/marienkaefer", category: "insekten", emoji: "🐞" },
  { name: "Rosenkäfer", link: "/tier/rosenkaefer", category: "insekten", emoji: "🪲" },
  { name: "Libelle", link: "/tier/libelle", category: "insekten", emoji: "🪻" },
  { name: "Distelfalter", link: "/tier/distelfalter", category: "insekten", emoji: "🦋" },
  { name: "Ameise", link: "/tier/ameise", category: "insekten", emoji: "🐜" },
  { name: "Hirschkäfer", link: "/tier/hirschkaefer", category: "insekten", emoji: "🪲" },
  { name: "Biene", link: "/tier/biene", category: "insekten", emoji: "🐝" },
  { name: "Hummel", link: "/tier/hummel", category: "insekten", emoji: "🐝" },
  { name: "Frosch", link: "/tier/frosch", category: "amphibien", emoji: "🐸" },
  { name: "Kröte", link: "/tier/kroete", category: "amphibien", emoji: "🐸" },
  { name: "Graureiher", link: "/tier/graureiher", category: "voegel", emoji: "🐦" },
  { name: "Höckerschwan", link: "/tier/hoeckerschwan", category: "voegel", emoji: "🦢" },
  { name: "Stockente", link: "/tier/stockente", category: "voegel", emoji: "🦆" },
  { name: "Meise", link: "/tier/meise", category: "voegel", emoji: "🐦" },
  { name: "Regenwurm", link: "/tier/regenwurm", category: "wuermer", emoji: "🪱" },
  // Pflanzen — wichtig für den Naturschutz
  { name: "Wilde Möhre", link: "/tier/wilde-moehre", category: "wildblumen", emoji: "🥕" },
  { name: "Kornblume", link: "/tier/kornblume", category: "wildblumen", emoji: "🌸" },
  { name: "Brennnessel", link: "/tier/brennnessel", category: "kraeuter", emoji: "🌱" },
  { name: "Schlehe", link: "/tier/schlehe", category: "straeucher", emoji: "🫐" },
  { name: "Weißdorn", link: "/tier/weissdorn", category: "straeucher", emoji: "🌳" },
  { name: "Hundsrose", link: "/tier/hundsrose", category: "straeucher", emoji: "🌹" },
  { name: "Schwarzer Holunder", link: "/tier/holunder", category: "straeucher", emoji: "🍇" },
  { name: "Weide", link: "/tier/weide", category: "baeume", emoji: "🌿" },
  { name: "Schilf", link: "/tier/schilf", category: "graeser", emoji: "🌾" },
];
