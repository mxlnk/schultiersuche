export type Category = "saeugetiere" | "insekten" | "voegel" | "reptilien" | "fische" | "amphibien" | "wuermer";

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
  { id: "amphibien", label: "Amphibien", emoji: "🐸" },
  { id: "wuermer", label: "Würmer", emoji: "🪱" },
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
  { name: "Biene", link: "/tier/biene", category: "insekten" },
  { name: "Hummel", link: "/tier/hummel", category: "insekten" },
  { name: "Frosch", link: "/tier/frosch", category: "amphibien" },
  { name: "Kröte", link: "/tier/kroete", category: "amphibien" },
  { name: "Graureiher", link: "/tier/graureiher", category: "voegel" },
  { name: "Höckerschwan", link: "/tier/hoeckerschwan", category: "voegel" },
  { name: "Stockente", link: "/tier/stockente", category: "voegel" },
  { name: "Meise", link: "/tier/meise", category: "voegel" },
  { name: "Regenwurm", link: "/tier/regenwurm", category: "wuermer" },
];
