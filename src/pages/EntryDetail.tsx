import { useParams, Link } from "react-router-dom";
import { entries } from "../data/entries";
import { getContent } from "../data/content";
import { themes } from "../data/themes";

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
        <div className="text-5xl md:text-6xl mb-2">{entry.emoji}</div>
        <h1 className={`text-3xl md:text-4xl font-black ${theme.heading}`}>{entry.name}</h1>
        {content.scientificName && (
          <p className={`italic mt-1 text-base md:text-lg font-semibold ${theme.scientific}`}>
            {content.scientificName}
          </p>
        )}
      </div>

      <img
        src={import.meta.env.BASE_URL + content.image}
        alt={entry.name}
        className="w-full rounded-2xl shadow-md mb-8 object-cover max-h-96"
      />

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        {content.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}
