import type { CountryInfo } from "../data/content";
import type { Theme } from "../data/themes";
import { Link } from "react-router-dom";
import { entries, type Entry } from "../data/entries";
import CountryMap from "./CountryMap";

// Gibt es zu einer Hauptstadt, Person oder einem Stichwort einen eigenen Artikel,
// verlinken wir ihn.
const capitals = new Map<string, Entry>();
const people = new Map<string, Entry>();
const bySlug = new Map<string, Entry>();
for (const e of entries) {
  bySlug.set(e.link.slice("/eintrag/".length), e);
  if (e.category === "hauptstaedte") capitals.set(e.name, e);
  else if (!e.icon) people.set(e.name, e);
}

interface CountryFactsProps {
  land: CountryInfo;
  name: string;
  theme: Theme;
}

// Steckbrief eines Landes: Flagge, Lagekarte und die wichtigsten Fakten.
export function CountryFacts({ land, name, theme }: CountryFactsProps) {
  const facts: { emoji: string; label: string; value: string; note?: string; link?: string }[] = [
    {
      emoji: "🏛️",
      label: "Hauptstadt",
      value: land.hauptstadt,
      link: capitals.get(land.hauptstadt)?.link,
    },
    { emoji: "👥", label: "Einwohner", value: land.einwohner },
    { emoji: "📏", label: "Fläche", value: land.flaeche, note: land.groesse },
    { emoji: "🗣️", label: "Sprachen", value: land.sprachen },
    { emoji: "👋", label: "„Hallo“ heißt", value: land.hallo },
    { emoji: "💰", label: "Geld", value: land.waehrung },
    { emoji: "🌍", label: "Kontinent", value: land.kontinent },
    { emoji: "🧭", label: "Nachbarländer", value: land.nachbarn },
    ...(land.hoechsterBerg
      ? [{ emoji: "⛰️", label: "Höchster Berg", value: land.hoechsterBerg }]
      : []),
    { emoji: "🍽️", label: "Typisches Essen", value: land.essen },
  ];

  return (
    <section className="mb-8 bg-white border-2 border-gray-100 rounded-3xl p-5 md:p-7 shadow-md">
      <h2 className={`text-2xl md:text-3xl font-black mb-5 ${theme.heading}`}>Steckbrief</h2>
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        <div className="space-y-5">
          <figure>
            <img
              src={`${import.meta.env.BASE_URL}flaggen/${land.code}.png`}
              alt={`Flagge von ${name}`}
              className="block max-h-36 max-w-full rounded-lg border border-gray-200 shadow-sm"
            />
            <figcaption className="mt-2 text-sm font-bold text-gray-500">Flagge</figcaption>
          </figure>
          <figure>
            <CountryMap region={land.karte} code={land.code} name={name} />
            <figcaption className="mt-2 text-sm font-bold text-gray-500">
              <span className="inline-block w-3 h-3 rounded-sm bg-orange-500 mr-1.5 align-baseline" />
              Hier liegt {name}
            </figcaption>
          </figure>
        </div>
        <dl className="space-y-3">
          {facts.map((f) => (
            <div key={f.label} className="flex gap-3">
              <span className="text-2xl leading-7 shrink-0" aria-hidden="true">
                {f.emoji}
              </span>
              <div>
                <dt className="text-sm font-bold text-gray-500">{f.label}</dt>
                <dd className="text-base md:text-lg font-bold text-gray-800 leading-snug">
                  {f.link ? (
                    <Link to={f.link} className="underline decoration-2 underline-offset-4 hover:text-violet-600">
                      {f.value} &rarr;
                    </Link>
                  ) : (
                    f.value
                  )}
                  {f.note && (
                    <span className="block text-sm md:text-base font-semibold text-gray-500">
                      {f.note}
                    </span>
                  )}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

// Wofür das Land bekannt ist und berühmte Persönlichkeiten.
export function CountryHighlights({ land, theme }: Omit<CountryFactsProps, "name">) {
  return (
    <div className="mt-10 space-y-8">
      {land.bekanntFuer.length > 0 && (
        <section>
          <h2 className={`text-2xl md:text-3xl font-black mb-4 ${theme.heading}`}>
            Dafür ist das Land bekannt
          </h2>
          <ul className="flex flex-wrap gap-2.5">
            {land.bekanntFuer.map((b) => {
              const link = bySlug.get(b.slug)?.link;
              return (
                <li key={b.label}>
                  {link ? (
                    <Link
                      to={link}
                      className={`block px-4 py-2 rounded-full font-bold text-base transition-colors ${theme.backLink}`}
                    >
                      {b.label} &rarr;
                    </Link>
                  ) : (
                    <span
                      className={`block px-4 py-2 rounded-full font-bold text-base ${theme.backLink.replace(/hover:\S+\s?/, "")}`}
                    >
                      {b.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      )}
      {land.personen.length > 0 && (
        <section>
          <h2 className={`text-2xl md:text-3xl font-black mb-4 ${theme.heading}`}>
            Berühmte Persönlichkeiten
          </h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {land.personen.map((p) => {
              const link = people.get(p.name)?.link;
              const body = (
                <>
                  <div className="font-black text-lg text-gray-800">
                    {p.name}
                    {link && <span className="text-violet-500"> &rarr;</span>}
                  </div>
                  <div className="text-gray-600 text-base leading-snug">{p.info}</div>
                </>
              );
              return (
                <li key={p.name}>
                  {link ? (
                    <Link
                      to={link}
                      className="block h-full bg-white border-2 border-violet-200 rounded-2xl p-4 shadow-sm hover:bg-violet-50 transition-colors"
                    >
                      {body}
                    </Link>
                  ) : (
                    <div className="h-full bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm">
                      {body}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}
