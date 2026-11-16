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
  const related = (content.siehe ?? []).flatMap((slug) =>
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

      {related.length > 0 && (
        <section className="mt-10">
          <h2 className={`text-2xl md:text-3xl font-black mb-4 ${theme.heading}`}>Mehr dazu</h2>
          <div className="flex flex-wrap gap-3">
            {related.map((r) => (
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
