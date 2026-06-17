// Farb-Themes für die Detailseiten. Jeder Eintrag wählt eins über seinen
// Content (siehe src/data/content.ts). Die vollständigen Klassennamen stehen
// hier als Literale, damit Tailwind sie beim Build erkennt.

export type ThemeName =
  | "warm" // amber/orange/gelb — Säugetiere, Bienen
  | "gruen" // grün/smaragd — Pflanzen, Amphibien
  | "wasser" // himmelblau/cyan — Fische, Wasservögel
  | "rose" // rose/pink — Blüten
  | "violett" // violett/lila
  | "erde"; // stein/braun — Würmer, Käfer

export interface Theme {
  backLink: string;
  gradient: string;
  heading: string;
  scientific: string;
}

export const themes: Record<ThemeName, Theme> = {
  warm: {
    backLink: "bg-amber-100 hover:bg-amber-200 text-amber-800",
    gradient: "from-amber-100 via-orange-50 to-yellow-100",
    heading: "text-amber-900",
    scientific: "text-amber-600",
  },
  gruen: {
    backLink: "bg-green-100 hover:bg-green-200 text-green-800",
    gradient: "from-green-200 via-emerald-100 to-lime-100",
    heading: "text-green-900",
    scientific: "text-green-600",
  },
  wasser: {
    backLink: "bg-sky-100 hover:bg-sky-200 text-sky-800",
    gradient: "from-sky-200 via-cyan-100 to-blue-100",
    heading: "text-sky-900",
    scientific: "text-sky-600",
  },
  rose: {
    backLink: "bg-rose-100 hover:bg-rose-200 text-rose-800",
    gradient: "from-rose-200 via-pink-100 to-red-100",
    heading: "text-rose-900",
    scientific: "text-rose-600",
  },
  violett: {
    backLink: "bg-violet-100 hover:bg-violet-200 text-violet-800",
    gradient: "from-violet-200 via-purple-100 to-fuchsia-100",
    heading: "text-violet-900",
    scientific: "text-violet-600",
  },
  erde: {
    backLink: "bg-stone-100 hover:bg-stone-200 text-stone-800",
    gradient: "from-stone-200 via-amber-100 to-yellow-100",
    heading: "text-stone-900",
    scientific: "text-stone-600",
  },
};
