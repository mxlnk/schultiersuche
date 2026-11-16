export type EntryType = "tier" | "pflanze" | "musik" | "land" | "mensch";

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
  | "mozart-werke"
  // Länder
  | "mitteleuropa"
  | "westeuropa"
  | "nordeuropa"
  | "suedeuropa"
  | "suedosteuropa"
  | "osteuropa"
  | "amerika"
  | "asien"
  | "afrika"
  | "ozeanien"
  | "hauptstaedte"
  // Berühmte Menschen
  | "forscher"
  | "entdecker"
  | "schriftsteller"
  | "kuenstler"
  | "sportler"
  | "vorbilder";

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
  // Optionales Bild statt Emoji (z. B. Flaggen – Flaggen-Emojis fehlen unter Windows).
  icon?: string;
}

export const kingdoms: { id: EntryType; label: string; emoji: string }[] = [
  { id: "tier", label: "Tiere", emoji: "🐾" },
  { id: "pflanze", label: "Pflanzen", emoji: "🌿" },
  { id: "musik", label: "Musik", emoji: "🎵" },
  { id: "land", label: "Länder", emoji: "🌍" },
  { id: "mensch", label: "Berühmte Menschen", emoji: "🌟" },
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
  // Länder
  { id: "mitteleuropa", label: "Mitteleuropa", emoji: "🏰", type: "land" },
  { id: "westeuropa", label: "Westeuropa", emoji: "🗼", type: "land" },
  { id: "nordeuropa", label: "Nordeuropa", emoji: "❄️", type: "land" },
  { id: "suedeuropa", label: "Südeuropa", emoji: "☀️", type: "land" },
  { id: "suedosteuropa", label: "Südosteuropa", emoji: "⛰️", type: "land" },
  { id: "osteuropa", label: "Osteuropa", emoji: "🌲", type: "land" },
  { id: "amerika", label: "Amerika", emoji: "🗽", type: "land" },
  { id: "asien", label: "Asien", emoji: "🏯", type: "land" },
  { id: "afrika", label: "Afrika", emoji: "🦁", type: "land" },
  { id: "ozeanien", label: "Australien & Ozeanien", emoji: "🦘", type: "land" },
  { id: "hauptstaedte", label: "Hauptstädte", emoji: "🏙️", type: "land" },
  // Berühmte Menschen
  { id: "forscher", label: "Forscher & Erfinder", emoji: "🔬", type: "mensch" },
  { id: "entdecker", label: "Entdecker & Raumfahrer", emoji: "🚀", type: "mensch" },
  { id: "schriftsteller", label: "Schriftsteller", emoji: "📚", type: "mensch" },
  { id: "kuenstler", label: "Künstler", emoji: "🎨", type: "mensch" },
  { id: "sportler", label: "Sportler", emoji: "⚽", type: "mensch" },
  { id: "vorbilder", label: "Vorbilder & Geschichte", emoji: "🕊️", type: "mensch" },
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
  // Länder — Mitteleuropa
  { name: "Deutschland", link: "/eintrag/deutschland", category: "mitteleuropa", emoji: "🇩🇪", icon: "flaggen/de.png" },
  { name: "Österreich", link: "/eintrag/oesterreich", category: "mitteleuropa", emoji: "🇦🇹", icon: "flaggen/at.png" },
  { name: "Schweiz", link: "/eintrag/schweiz", category: "mitteleuropa", emoji: "🇨🇭", icon: "flaggen/ch.png" },
  { name: "Liechtenstein", link: "/eintrag/liechtenstein", category: "mitteleuropa", emoji: "🇱🇮", icon: "flaggen/li.png" },
  { name: "Polen", link: "/eintrag/polen", category: "mitteleuropa", emoji: "🇵🇱", icon: "flaggen/pl.png" },
  { name: "Tschechien", link: "/eintrag/tschechien", category: "mitteleuropa", emoji: "🇨🇿", icon: "flaggen/cz.png" },
  { name: "Slowakei", link: "/eintrag/slowakei", category: "mitteleuropa", emoji: "🇸🇰", icon: "flaggen/sk.png" },
  { name: "Ungarn", link: "/eintrag/ungarn", category: "mitteleuropa", emoji: "🇭🇺", icon: "flaggen/hu.png" },
  { name: "Slowenien", link: "/eintrag/slowenien", category: "mitteleuropa", emoji: "🇸🇮", icon: "flaggen/si.png" },
  // Länder — Westeuropa
  { name: "Frankreich", link: "/eintrag/frankreich", category: "westeuropa", emoji: "🇫🇷", icon: "flaggen/fr.png" },
  { name: "Belgien", link: "/eintrag/belgien", category: "westeuropa", emoji: "🇧🇪", icon: "flaggen/be.png" },
  { name: "Niederlande", link: "/eintrag/niederlande", category: "westeuropa", emoji: "🇳🇱", icon: "flaggen/nl.png" },
  { name: "Luxemburg", link: "/eintrag/luxemburg", category: "westeuropa", emoji: "🇱🇺", icon: "flaggen/lu.png" },
  { name: "Vereinigtes Königreich (Großbritannien)", link: "/eintrag/vereinigtes-koenigreich", category: "westeuropa", emoji: "🇬🇧", icon: "flaggen/gb.png" },
  { name: "Irland", link: "/eintrag/irland", category: "westeuropa", emoji: "🇮🇪", icon: "flaggen/ie.png" },
  { name: "Monaco", link: "/eintrag/monaco", category: "westeuropa", emoji: "🇲🇨", icon: "flaggen/mc.png" },
  // Länder — Nordeuropa
  { name: "Dänemark", link: "/eintrag/daenemark", category: "nordeuropa", emoji: "🇩🇰", icon: "flaggen/dk.png" },
  { name: "Schweden", link: "/eintrag/schweden", category: "nordeuropa", emoji: "🇸🇪", icon: "flaggen/se.png" },
  { name: "Norwegen", link: "/eintrag/norwegen", category: "nordeuropa", emoji: "🇳🇴", icon: "flaggen/no.png" },
  { name: "Finnland", link: "/eintrag/finnland", category: "nordeuropa", emoji: "🇫🇮", icon: "flaggen/fi.png" },
  { name: "Island", link: "/eintrag/island", category: "nordeuropa", emoji: "🇮🇸", icon: "flaggen/is.png" },
  { name: "Estland", link: "/eintrag/estland", category: "nordeuropa", emoji: "🇪🇪", icon: "flaggen/ee.png" },
  { name: "Lettland", link: "/eintrag/lettland", category: "nordeuropa", emoji: "🇱🇻", icon: "flaggen/lv.png" },
  { name: "Litauen", link: "/eintrag/litauen", category: "nordeuropa", emoji: "🇱🇹", icon: "flaggen/lt.png" },
  // Länder — Südeuropa
  { name: "Italien", link: "/eintrag/italien", category: "suedeuropa", emoji: "🇮🇹", icon: "flaggen/it.png" },
  { name: "Spanien", link: "/eintrag/spanien", category: "suedeuropa", emoji: "🇪🇸", icon: "flaggen/es.png" },
  { name: "Portugal", link: "/eintrag/portugal", category: "suedeuropa", emoji: "🇵🇹", icon: "flaggen/pt.png" },
  { name: "Griechenland", link: "/eintrag/griechenland", category: "suedeuropa", emoji: "🇬🇷", icon: "flaggen/gr.png" },
  { name: "Malta", link: "/eintrag/malta", category: "suedeuropa", emoji: "🇲🇹", icon: "flaggen/mt.png" },
  { name: "Zypern", link: "/eintrag/zypern", category: "suedeuropa", emoji: "🇨🇾", icon: "flaggen/cy.png" },
  { name: "Andorra", link: "/eintrag/andorra", category: "suedeuropa", emoji: "🇦🇩", icon: "flaggen/ad.png" },
  { name: "San Marino", link: "/eintrag/san-marino", category: "suedeuropa", emoji: "🇸🇲", icon: "flaggen/sm.png" },
  { name: "Vatikanstadt", link: "/eintrag/vatikanstadt", category: "suedeuropa", emoji: "🇻🇦", icon: "flaggen/va.png" },
  { name: "Türkei", link: "/eintrag/tuerkei", category: "suedeuropa", emoji: "🇹🇷", icon: "flaggen/tr.png" },
  // Länder — Südosteuropa
  { name: "Kroatien", link: "/eintrag/kroatien", category: "suedosteuropa", emoji: "🇭🇷", icon: "flaggen/hr.png" },
  { name: "Bosnien und Herzegowina", link: "/eintrag/bosnien-und-herzegowina", category: "suedosteuropa", emoji: "🇧🇦", icon: "flaggen/ba.png" },
  { name: "Serbien", link: "/eintrag/serbien", category: "suedosteuropa", emoji: "🇷🇸", icon: "flaggen/rs.png" },
  { name: "Montenegro", link: "/eintrag/montenegro", category: "suedosteuropa", emoji: "🇲🇪", icon: "flaggen/me.png" },
  { name: "Kosovo", link: "/eintrag/kosovo", category: "suedosteuropa", emoji: "🇽🇰", icon: "flaggen/xk.png" },
  { name: "Albanien", link: "/eintrag/albanien", category: "suedosteuropa", emoji: "🇦🇱", icon: "flaggen/al.png" },
  { name: "Nordmazedonien", link: "/eintrag/nordmazedonien", category: "suedosteuropa", emoji: "🇲🇰", icon: "flaggen/mk.png" },
  { name: "Bulgarien", link: "/eintrag/bulgarien", category: "suedosteuropa", emoji: "🇧🇬", icon: "flaggen/bg.png" },
  { name: "Rumänien", link: "/eintrag/rumaenien", category: "suedosteuropa", emoji: "🇷🇴", icon: "flaggen/ro.png" },
  // Länder — Osteuropa
  { name: "Russland", link: "/eintrag/russland", category: "osteuropa", emoji: "🇷🇺", icon: "flaggen/ru.png" },
  { name: "Ukraine", link: "/eintrag/ukraine", category: "osteuropa", emoji: "🇺🇦", icon: "flaggen/ua.png" },
  { name: "Belarus", link: "/eintrag/belarus", category: "osteuropa", emoji: "🇧🇾", icon: "flaggen/by.png" },
  { name: "Moldau (Moldawien)", link: "/eintrag/moldau", category: "osteuropa", emoji: "🇲🇩", icon: "flaggen/md.png" },
  // Länder — Amerika
  { name: "USA (Vereinigte Staaten)", link: "/eintrag/usa", category: "amerika", emoji: "🇺🇸", icon: "flaggen/us.png" },
  { name: "Kanada", link: "/eintrag/kanada", category: "amerika", emoji: "🇨🇦", icon: "flaggen/ca.png" },
  { name: "Mexiko", link: "/eintrag/mexiko", category: "amerika", emoji: "🇲🇽", icon: "flaggen/mx.png" },
  { name: "Brasilien", link: "/eintrag/brasilien", category: "amerika", emoji: "🇧🇷", icon: "flaggen/br.png" },
  { name: "Argentinien", link: "/eintrag/argentinien", category: "amerika", emoji: "🇦🇷", icon: "flaggen/ar.png" },
  { name: "Peru", link: "/eintrag/peru", category: "amerika", emoji: "🇵🇪", icon: "flaggen/pe.png" },
  // Länder — Asien
  { name: "China", link: "/eintrag/china", category: "asien", emoji: "🇨🇳", icon: "flaggen/cn.png" },
  { name: "Japan", link: "/eintrag/japan", category: "asien", emoji: "🇯🇵", icon: "flaggen/jp.png" },
  { name: "Indien", link: "/eintrag/indien", category: "asien", emoji: "🇮🇳", icon: "flaggen/in.png" },
  { name: "Südkorea", link: "/eintrag/suedkorea", category: "asien", emoji: "🇰🇷", icon: "flaggen/kr.png" },
  { name: "Thailand", link: "/eintrag/thailand", category: "asien", emoji: "🇹🇭", icon: "flaggen/th.png" },
  { name: "Indonesien", link: "/eintrag/indonesien", category: "asien", emoji: "🇮🇩", icon: "flaggen/id.png" },
  // Länder — Afrika
  { name: "Ägypten", link: "/eintrag/aegypten", category: "afrika", emoji: "🇪🇬", icon: "flaggen/eg.png" },
  { name: "Marokko", link: "/eintrag/marokko", category: "afrika", emoji: "🇲🇦", icon: "flaggen/ma.png" },
  { name: "Kenia", link: "/eintrag/kenia", category: "afrika", emoji: "🇰🇪", icon: "flaggen/ke.png" },
  { name: "Südafrika", link: "/eintrag/suedafrika", category: "afrika", emoji: "🇿🇦", icon: "flaggen/za.png" },
  { name: "Nigeria", link: "/eintrag/nigeria", category: "afrika", emoji: "🇳🇬", icon: "flaggen/ng.png" },
  // Länder — Australien & Ozeanien
  { name: "Australien", link: "/eintrag/australien", category: "ozeanien", emoji: "🇦🇺", icon: "flaggen/au.png" },
  { name: "Neuseeland", link: "/eintrag/neuseeland", category: "ozeanien", emoji: "🇳🇿", icon: "flaggen/nz.png" },
  // Menschen — Forscher & Erfinder
  { name: "Leonardo da Vinci", link: "/eintrag/leonardo-da-vinci", category: "forscher", emoji: "🎨" },
  { name: "Galileo Galilei", link: "/eintrag/galileo-galilei", category: "forscher", emoji: "🔭" },
  { name: "Isaac Newton", link: "/eintrag/isaac-newton", category: "forscher", emoji: "🍎" },
  { name: "Charles Darwin", link: "/eintrag/charles-darwin", category: "forscher", emoji: "🐢" },
  { name: "Marie Curie", link: "/eintrag/marie-curie", category: "forscher", emoji: "⚗️" },
  { name: "Nikolaus Kopernikus", link: "/eintrag/nikolaus-kopernikus", category: "forscher", emoji: "☀️" },
  { name: "Johannes Gutenberg", link: "/eintrag/johannes-gutenberg", category: "forscher", emoji: "📖" },
  { name: "Thomas Edison", link: "/eintrag/thomas-edison", category: "forscher", emoji: "💡" },
  { name: "Nikola Tesla", link: "/eintrag/nikola-tesla", category: "forscher", emoji: "⚡" },
  { name: "Alfred Nobel", link: "/eintrag/alfred-nobel", category: "forscher", emoji: "🏅" },
  { name: "Louis Pasteur", link: "/eintrag/louis-pasteur", category: "forscher", emoji: "🧫" },
  { name: "Louis Braille", link: "/eintrag/louis-braille", category: "forscher", emoji: "⠃" },
  { name: "Maria Montessori", link: "/eintrag/maria-montessori", category: "forscher", emoji: "🧒" },
  { name: "Pythagoras", link: "/eintrag/pythagoras", category: "forscher", emoji: "📐" },
  { name: "Ernő Rubik", link: "/eintrag/erno-rubik", category: "forscher", emoji: "🧩" },
  { name: "Ole Kirk Christiansen", link: "/eintrag/ole-kirk-christiansen", category: "forscher", emoji: "🧱" },
  // Menschen — Entdecker & Raumfahrer
  { name: "Neil Armstrong", link: "/eintrag/neil-armstrong", category: "entdecker", emoji: "🌕" },
  { name: "Juri Gagarin", link: "/eintrag/juri-gagarin", category: "entdecker", emoji: "🚀" },
  { name: "Walentina Tereschkowa", link: "/eintrag/walentina-tereschkowa", category: "entdecker", emoji: "🚀" },
  { name: "Roald Amundsen", link: "/eintrag/roald-amundsen", category: "entdecker", emoji: "🧊" },
  { name: "Edmund Hillary", link: "/eintrag/edmund-hillary", category: "entdecker", emoji: "🏔️" },
  { name: "Vasco da Gama", link: "/eintrag/vasco-da-gama", category: "entdecker", emoji: "⛵" },
  { name: "Fernão de Magalhães", link: "/eintrag/magellan", category: "entdecker", emoji: "🧭" },
  { name: "Leif Eriksson", link: "/eintrag/leif-eriksson", category: "entdecker", emoji: "🛶" },
  { name: "Ibn Battuta", link: "/eintrag/ibn-battuta", category: "entdecker", emoji: "🐪" },
  // Menschen — Schriftsteller
  { name: "Astrid Lindgren", link: "/eintrag/astrid-lindgren", category: "schriftsteller", emoji: "📚" },
  { name: "Hans Christian Andersen", link: "/eintrag/hans-christian-andersen", category: "schriftsteller", emoji: "🧜‍♀️" },
  { name: "Jacob und Wilhelm Grimm", link: "/eintrag/brueder-grimm", category: "schriftsteller", emoji: "🐺" },
  { name: "J. K. Rowling", link: "/eintrag/j-k-rowling", category: "schriftsteller", emoji: "🪄" },
  { name: "Roald Dahl", link: "/eintrag/roald-dahl", category: "schriftsteller", emoji: "🍫" },
  { name: "Jules Verne", link: "/eintrag/jules-verne", category: "schriftsteller", emoji: "🎈" },
  { name: "Antoine de Saint-Exupéry", link: "/eintrag/saint-exupery", category: "schriftsteller", emoji: "🌹" },
  { name: "Tove Jansson", link: "/eintrag/tove-jansson", category: "schriftsteller", emoji: "📚" },
  { name: "Johanna Spyri", link: "/eintrag/johanna-spyri", category: "schriftsteller", emoji: "🐐" },
  { name: "Carlo Collodi", link: "/eintrag/carlo-collodi", category: "schriftsteller", emoji: "🤥" },
  { name: "Christine Nöstlinger", link: "/eintrag/christine-noestlinger", category: "schriftsteller", emoji: "📚" },
  { name: "Selma Lagerlöf", link: "/eintrag/selma-lagerloef", category: "schriftsteller", emoji: "🪿" },
  // Menschen — Künstler
  { name: "Vincent van Gogh", link: "/eintrag/vincent-van-gogh", category: "kuenstler", emoji: "🌻" },
  { name: "Pablo Picasso", link: "/eintrag/pablo-picasso", category: "kuenstler", emoji: "🎨" },
  { name: "Frida Kahlo", link: "/eintrag/frida-kahlo", category: "kuenstler", emoji: "🌺" },
  { name: "Michelangelo", link: "/eintrag/michelangelo", category: "kuenstler", emoji: "🗿" },
  { name: "Antoni Gaudí", link: "/eintrag/antoni-gaudi", category: "kuenstler", emoji: "⛪" },
  { name: "Hergé", link: "/eintrag/herge", category: "kuenstler", emoji: "✏️" },
  { name: "Hayao Miyazaki", link: "/eintrag/hayao-miyazaki", category: "kuenstler", emoji: "🎬" },
  { name: "Edvard Munch", link: "/eintrag/edvard-munch", category: "kuenstler", emoji: "🖼️" },
  // Musik — weitere Komponisten
  { name: "Frédéric Chopin", link: "/eintrag/chopin", category: "komponisten", emoji: "🎹" },
  { name: "Pjotr Tschaikowski", link: "/eintrag/tschaikowski", category: "komponisten", emoji: "🩰" },
  { name: "Franz Schubert", link: "/eintrag/schubert", category: "komponisten", emoji: "🎼" },
  { name: "Edvard Grieg", link: "/eintrag/grieg", category: "komponisten", emoji: "🎻" },
  // Menschen — Sportler
  { name: "Lionel Messi", link: "/eintrag/lionel-messi", category: "sportler", emoji: "⚽" },
  { name: "Cristiano Ronaldo", link: "/eintrag/cristiano-ronaldo", category: "sportler", emoji: "⚽" },
  { name: "Pelé", link: "/eintrag/pele", category: "sportler", emoji: "⚽" },
  { name: "Diego Maradona", link: "/eintrag/diego-maradona", category: "sportler", emoji: "⚽" },
  { name: "Kylian Mbappé", link: "/eintrag/kylian-mbappe", category: "sportler", emoji: "⚽" },
  { name: "Robert Lewandowski", link: "/eintrag/robert-lewandowski", category: "sportler", emoji: "⚽" },
  { name: "Steffi Graf", link: "/eintrag/steffi-graf", category: "sportler", emoji: "🎾" },
  { name: "Roger Federer", link: "/eintrag/roger-federer", category: "sportler", emoji: "🎾" },
  { name: "Rafael Nadal", link: "/eintrag/rafael-nadal", category: "sportler", emoji: "🎾" },
  { name: "Simone Biles", link: "/eintrag/simone-biles", category: "sportler", emoji: "🤸" },
  { name: "Michael Jordan", link: "/eintrag/michael-jordan", category: "sportler", emoji: "🏀" },
  { name: "Eliud Kipchoge", link: "/eintrag/eliud-kipchoge", category: "sportler", emoji: "🏃" },
  // Menschen — Vorbilder & Geschichte
  { name: "Nelson Mandela", link: "/eintrag/nelson-mandela", category: "vorbilder", emoji: "✊" },
  { name: "Mahatma Gandhi", link: "/eintrag/mahatma-gandhi", category: "vorbilder", emoji: "🕊️" },
  { name: "Martin Luther King", link: "/eintrag/martin-luther-king", category: "vorbilder", emoji: "🕊️" },
  { name: "Mutter Teresa", link: "/eintrag/mutter-teresa", category: "vorbilder", emoji: "🤍" },
  { name: "Wangari Maathai", link: "/eintrag/wangari-maathai", category: "vorbilder", emoji: "🌳" },
  { name: "Kleopatra", link: "/eintrag/kleopatra", category: "vorbilder", emoji: "👑" },
  { name: "Tutanchamun", link: "/eintrag/tutanchamun", category: "vorbilder", emoji: "🏺" },
  { name: "Konfuzius", link: "/eintrag/konfuzius", category: "vorbilder", emoji: "📜" },
  { name: "Sokrates", link: "/eintrag/sokrates", category: "vorbilder", emoji: "🏛️" },
  // Länder — Hauptstädte
  { name: "Berlin", link: "/eintrag/berlin", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Wien", link: "/eintrag/wien", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Bern", link: "/eintrag/bern", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Paris", link: "/eintrag/paris", category: "hauptstaedte", emoji: "🏙️" },
  { name: "London", link: "/eintrag/london", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Rom", link: "/eintrag/rom", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Madrid", link: "/eintrag/madrid", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Lissabon", link: "/eintrag/lissabon", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Athen", link: "/eintrag/athen", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Amsterdam", link: "/eintrag/amsterdam", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Brüssel", link: "/eintrag/bruessel", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Kopenhagen", link: "/eintrag/kopenhagen", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Stockholm", link: "/eintrag/stockholm", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Oslo", link: "/eintrag/oslo", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Helsinki", link: "/eintrag/helsinki", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Warschau", link: "/eintrag/warschau", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Prag", link: "/eintrag/prag", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Budapest", link: "/eintrag/budapest", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Dublin", link: "/eintrag/dublin", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Ankara", link: "/eintrag/ankara", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Moskau", link: "/eintrag/moskau", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Kiew", link: "/eintrag/kiew", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Washington, D.C.", link: "/eintrag/washington", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Peking", link: "/eintrag/peking", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Tokio", link: "/eintrag/tokio", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Neu-Delhi", link: "/eintrag/neu-delhi", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Kairo", link: "/eintrag/kairo", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Canberra", link: "/eintrag/canberra", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Brasília", link: "/eintrag/brasilia", category: "hauptstaedte", emoji: "🏙️" },
  { name: "Mexiko-Stadt", link: "/eintrag/mexiko-stadt", category: "hauptstaedte", emoji: "🏙️" },
];
