import type { ThemeName } from "./themes";

// Inhalt einer Detailseite. Pro Eintrag liegt eine Datei unter
// src/data/content/<slug>.ts, die ein EntryContent als Default exportiert.
// Der Dateiname (ohne .ts) ist der Slug und entspricht dem letzten Teil des
// Eintrags-Links (z. B. /eintrag/hund -> "hund").
// Kartenausschnitte, siehe src/data/maps/<region>.json (scripts/make-maps.py).
export type MapRegion =
  | "europa"
  | "russland"
  | "nordamerika"
  | "suedamerika"
  | "asien"
  | "afrika"
  | "ozeanien";

export interface Person {
  name: string;
  // Ein kurzer Satz: Wer ist das, wofür bekannt?
  info: string;
}

export interface CountryInfo {
  // ISO-Code in Kleinbuchstaben: Flagge (public/flaggen/<code>.png) und
  // Hervorhebung auf der Karte.
  code: string;
  karte: MapRegion;
  hauptstadt: string;
  einwohner: string;
  flaeche: string;
  // Größenvergleich, z. B. "etwa doppelt so groß wie Deutschland".
  groesse: string;
  sprachen: string;
  waehrung: string;
  kontinent: string;
  nachbarn: string;
  hoechsterBerg?: string;
  // So sagt man "Hallo", z. B. "Bonjour (sprich: bon-schuur)".
  hallo: string;
  essen: string;
  bekanntFuer: string[];
  personen: Person[];
}

export interface EntryContent {
  scientificName?: string;
  // Untertitel für Einträge ohne wissenschaftlichen Namen (z. B. Musik).
  subtitle?: string;
  theme: ThemeName;
  image: string;
  // Steckbrief für Länder (Flagge, Karte, Fakten, Persönlichkeiten).
  land?: CountryInfo;
  // Slugs verwandter Einträge ("Mehr dazu"), z. B. das Land einer Person.
  siehe?: string[];
  paragraphs: string[];
}

const modules = import.meta.glob<{ default: EntryContent }>("./content/*.ts", {
  eager: true,
});

const content: Record<string, EntryContent> = {};
for (const path in modules) {
  const slug = path.slice("./content/".length, -".ts".length);
  content[slug] = modules[path].default;
}

export function getContent(slug: string): EntryContent | undefined {
  return content[slug];
}
