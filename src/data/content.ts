import type { ThemeName } from "./themes";

// Inhalt einer Detailseite. Pro Eintrag liegt eine Datei unter
// src/data/content/<slug>.ts, die ein EntryContent als Default exportiert.
// Der Dateiname (ohne .ts) ist der Slug und entspricht dem letzten Teil des
// Eintrags-Links (z. B. /tier/hund -> "hund").
export interface EntryContent {
  scientificName?: string;
  theme: ThemeName;
  image: string;
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
