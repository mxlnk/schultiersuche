export type Category = "saeugetiere" | "insekten" | "voegel" | "reptilien" | "fische";

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
];
