export type EntryType = "tier" | "pflanze" | "musik";

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
  | "graeser"
  // Musik
  | "musikarten"
  | "komponisten"
  | "mozart-werke";

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
  { id: "musik", label: "Musik", emoji: "🎵" },
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
  // Musik
  { id: "musikarten", label: "Musikarten", emoji: "🎼", type: "musik" },
  { id: "komponisten", label: "Komponisten", emoji: "🎹", type: "musik" },
  { id: "mozart-werke", label: "Stücke von Mozart", emoji: "🎶", type: "musik" },
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
  // Reptilien
  { name: "Zauneidechse", link: "/eintrag/zauneidechse", category: "reptilien", emoji: "🦎" },
  { name: "Blindschleiche", link: "/eintrag/blindschleiche", category: "reptilien", emoji: "🦎" },
  { name: "Ringelnatter", link: "/eintrag/ringelnatter", category: "reptilien", emoji: "🐍" },
  { name: "Mauereidechse", link: "/eintrag/mauereidechse", category: "reptilien", emoji: "🦎" },
  // Fische
  { name: "Bachforelle", link: "/eintrag/bachforelle", category: "fische", emoji: "🐟" },
  { name: "Karpfen", link: "/eintrag/karpfen", category: "fische", emoji: "🐟" },
  { name: "Hecht", link: "/eintrag/hecht", category: "fische", emoji: "🐟" },
  { name: "Flussbarsch", link: "/eintrag/flussbarsch", category: "fische", emoji: "🐟" },
  // Amphibien
  { name: "Feuersalamander", link: "/eintrag/feuersalamander", category: "amphibien", emoji: "🦎" },
  { name: "Bergmolch", link: "/eintrag/bergmolch", category: "amphibien", emoji: "🦎" },
  { name: "Laubfrosch", link: "/eintrag/laubfrosch", category: "amphibien", emoji: "🐸" },
  // Würmer
  { name: "Kompostwurm", link: "/eintrag/kompostwurm", category: "wuermer", emoji: "🪱" },
  { name: "Blutegel", link: "/eintrag/blutegel", category: "wuermer", emoji: "🪱" },
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
  // Weitere Wildblumen
  { name: "Margerite", link: "/eintrag/margerite", category: "wildblumen", emoji: "🌼" },
  { name: "Klatschmohn", link: "/eintrag/klatschmohn", category: "wildblumen", emoji: "🌺" },
  { name: "Löwenzahn", link: "/eintrag/loewenzahn", category: "wildblumen", emoji: "🌻" },
  // Weitere Kräuter
  { name: "Spitzwegerich", link: "/eintrag/spitzwegerich", category: "kraeuter", emoji: "🌿" },
  { name: "Bärlauch", link: "/eintrag/baerlauch", category: "kraeuter", emoji: "🧄" },
  { name: "Giersch", link: "/eintrag/giersch", category: "kraeuter", emoji: "🌿" },
  { name: "Gundermann", link: "/eintrag/gundermann", category: "kraeuter", emoji: "🌿" },
  // Weitere Sträucher
  { name: "Brombeere", link: "/eintrag/brombeere", category: "straeucher", emoji: "🫐" },
  // Bäume
  { name: "Rotbuche", link: "/eintrag/rotbuche", category: "baeume", emoji: "🌳" },
  { name: "Stiel-Eiche", link: "/eintrag/eiche", category: "baeume", emoji: "🌰" },
  { name: "Birke", link: "/eintrag/birke", category: "baeume", emoji: "🌳" },
  { name: "Linde", link: "/eintrag/linde", category: "baeume", emoji: "🌳" },
  // Weitere Gräser & Schilf
  { name: "Rohrkolben", link: "/eintrag/rohrkolben", category: "graeser", emoji: "🌾" },
  { name: "Lieschgras", link: "/eintrag/lieschgras", category: "graeser", emoji: "🌾" },
  { name: "Flatterbinse", link: "/eintrag/binse", category: "graeser", emoji: "🌾" },
  { name: "Pfeifengras", link: "/eintrag/pfeifengras", category: "graeser", emoji: "🌾" },
  // Musik — Musikarten
  { name: "Oper", link: "/eintrag/oper", category: "musikarten", emoji: "🎭" },
  { name: "Requiem", link: "/eintrag/requiem", category: "musikarten", emoji: "⛪" },
  { name: "Serenade", link: "/eintrag/serenade", category: "musikarten", emoji: "🌙" },
  // Musik — Komponisten
  { name: "Wolfgang Amadeus Mozart", link: "/eintrag/mozart", category: "komponisten", emoji: "🎹" },
  { name: "Ludwig van Beethoven", link: "/eintrag/beethoven", category: "komponisten", emoji: "🎼" },
  // Musik — Stücke von Mozart
  { name: "Die Zauberflöte", link: "/eintrag/zauberfloete", category: "mozart-werke", emoji: "🪄" },
  { name: "Eine kleine Nachtmusik", link: "/eintrag/kleine-nachtmusik", category: "mozart-werke", emoji: "🌃" },
  { name: "Mozarts Requiem", link: "/eintrag/mozart-requiem", category: "mozart-werke", emoji: "🕯️" },
  { name: "Die Hochzeit des Figaro", link: "/eintrag/figaro", category: "mozart-werke", emoji: "💍" },
  { name: "Don Giovanni", link: "/eintrag/don-giovanni", category: "mozart-werke", emoji: "🤺" },
  { name: "Die Entführung aus dem Serail", link: "/eintrag/entfuehrung-aus-dem-serail", category: "mozart-werke", emoji: "🏰" },
  { name: "Sinfonie Nr. 40", link: "/eintrag/sinfonie-40", category: "mozart-werke", emoji: "🎻" },
  { name: "Jupiter-Sinfonie", link: "/eintrag/jupiter-sinfonie", category: "mozart-werke", emoji: "🪐" },
  { name: "Türkischer Marsch", link: "/eintrag/tuerkischer-marsch", category: "mozart-werke", emoji: "🥁" },
  { name: "Klavierkonzert Nr. 21", link: "/eintrag/klavierkonzert-21", category: "mozart-werke", emoji: "🎹" },
  { name: "Klarinettenkonzert", link: "/eintrag/klarinettenkonzert", category: "mozart-werke", emoji: "🎶" },
  { name: "Ave verum corpus", link: "/eintrag/ave-verum", category: "mozart-werke", emoji: "🕊️" },
  { name: "Ah, vous dirai-je, Maman", link: "/eintrag/ah-vous-dirai-je-maman", category: "mozart-werke", emoji: "⭐" },
];
