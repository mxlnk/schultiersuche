import { useParams, Link } from "react-router-dom";
import { entries } from "../data/entries";
import { getContent } from "../data/content";
import { themes } from "../data/themes";
import { CountryFacts, CountryHighlights } from "../components/CountryFacts";

export default function EntryDetail() {
  const { id } = useParams();
  const entry = entries.find((e) => e.link === `/eintrag/${id}`);
  const content = id ? getContent(id) : undefined;

  if (!entry || !content) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Seite nicht gefunden</h1>
        <Link to="/" className="text-blue-600 hover:underline">
          Zurück zur Startseite
        </Link>
      </div>
    );
  }

  const theme = themes[content.theme];
  const seeAlso = (content.siehe ?? []).flatMap((slug) =>
    entries.filter((e) => e.link === `/eintrag/${slug}`),
  );

  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link
        to="/"
        className={`inline-block px-4 py-2 rounded-full text-sm font-bold transition-colors ${theme.backLink}`}
      >
        &larr; Zurück zur Suche
      </Link>

      <div
        className={`mt-6 mb-8 bg-gradient-to-br ${theme.gradient} rounded-3xl p-6 md:p-8 text-center shadow-md`}
      >
        {entry.icon ? (
          <img
            src={import.meta.env.BASE_URL + entry.icon}
            alt=""
            className="mx-auto h-14 md:h-16 mb-3 rounded-md shadow-sm"
          />
        ) : (
          <div className="text-5xl md:text-6xl mb-2">{entry.emoji}</div>
        )}
        <h1 className={`text-3xl md:text-4xl font-black ${theme.heading}`}>{entry.name}</h1>
        {content.scientificName && (
          <p className={`italic mt-1 text-base md:text-lg font-semibold ${theme.scientific}`}>
            {content.scientificName}
          </p>
        )}
        {content.subtitle && (
          <p className={`mt-1 text-base md:text-lg font-semibold ${theme.scientific}`}>
            {content.subtitle}
          </p>
        )}
      </div>

      {content.land && <CountryFacts land={content.land} name={entry.name} theme={theme} />}

      <img
        src={import.meta.env.BASE_URL + content.image}
        alt={entry.name}
        className="mx-auto block max-w-full max-h-[28rem] rounded-2xl shadow-md mb-8"
      />

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        {content.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {content.land && <CountryHighlights land={content.land} theme={theme} />}

      {content.related && (
        <section className="mt-10">
          <h2 className={`text-2xl md:text-3xl font-black mb-2 ${theme.heading}`}>
            {content.related.heading}
          </h2>
          {content.related.intro && (
            <p className="text-gray-700 text-base md:text-lg mb-4">{content.related.intro}</p>
          )}
          <div className="border-t border-gray-300">
            {content.related.groups.map((group) => (
              <details key={group.title} className="group border-b border-gray-300">
                <summary className="flex cursor-pointer list-none items-center gap-2 py-3 text-xl md:text-2xl font-bold text-gray-800 [&::-webkit-details-marker]:hidden">
                  <svg
                    className="h-5 w-5 shrink-0 text-gray-500 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                  {group.title}
                </summary>
                <ul className="list-disc pl-10 pb-4 space-y-1 text-base md:text-lg">
                  {group.slugs.map((slug) => {
                    const target = entries.find((e) => e.link === `/eintrag/${slug}`);
                    if (!target) return null;
                    return (
                      <li key={slug}>
                        <Link
                          to={target.link}
                          className="text-blue-600 underline hover:text-blue-800 visited:text-purple-700"
                        >
                          {target.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </details>
            ))}
          </div>
        </section>
      )}

      {seeAlso.length > 0 && (
        <section className="mt-10">
          <h2 className={`text-2xl md:text-3xl font-black mb-4 ${theme.heading}`}>Mehr dazu</h2>
          <div className="flex flex-wrap gap-3">
            {seeAlso.map((r) => (
              <Link
                key={r.link}
                to={r.link}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-base transition-colors ${theme.backLink}`}
              >
                {r.icon ? (
                  <img src={import.meta.env.BASE_URL + r.icon} alt="" className="h-5 rounded-sm" />
                ) : (
                  <span>{r.emoji}</span>
                )}
                {r.name}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
