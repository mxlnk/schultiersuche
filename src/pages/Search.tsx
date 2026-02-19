import { useSearchParams, Link } from "react-router-dom";
import { animals } from "../data/animals";
import SearchBar from "../components/SearchBar";

const animalEmojis: Record<string, string> = {
  "/tier/hund": "🐕",
  "/tier/katze": "🐱",
  "/tier/hamster": "🐹",
  "/tier/wellensittich": "🦜",
  "/tier/kaninchen": "🐰",
  "/tier/meerschweinchen": "🐹",
  "/tier/schildkroete": "🐢",
  "/tier/goldfisch": "🐠",
  "/tier/marienkaefer": "🐞",
  "/tier/rosenkaefer": "🪲",
  "/tier/libelle": "🪻",
  "/tier/distelfalter": "🦋",
  "/tier/ameise": "🐜",
  "/tier/hirschkaefer": "🪲",
};

const cardColors = [
  "bg-rose-50 border-rose-200 hover:bg-rose-100",
  "bg-amber-50 border-amber-200 hover:bg-amber-100",
  "bg-emerald-50 border-emerald-200 hover:bg-emerald-100",
  "bg-sky-50 border-sky-200 hover:bg-sky-100",
  "bg-violet-50 border-violet-200 hover:bg-violet-100",
  "bg-pink-50 border-pink-200 hover:bg-pink-100",
  "bg-teal-50 border-teal-200 hover:bg-teal-100",
  "bg-orange-50 border-orange-200 hover:bg-orange-100",
];

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const lowerQuery = query.toLowerCase();

  const results = animals.filter((animal) =>
    animal.name.toLowerCase().includes(lowerQuery)
  );

  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-6 md:py-10">
      <div className="mb-8">
        <SearchBar defaultValue={query} />
      </div>

      <p className="text-base text-gray-500 mb-5 font-semibold">
        {results.length} Ergebnis{results.length !== 1 && "se"} für &quot;{query}&quot;
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map((animal, i) => (
          <Link
            key={animal.name}
            to={animal.link}
            className={`block border-2 rounded-2xl p-5 md:p-6 transition-all ${cardColors[i % cardColors.length]}`}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl md:text-4xl">{animalEmojis[animal.link] || "🐾"}</span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                {animal.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>

      {results.length === 0 && (
        <div className="text-center py-12">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-gray-500 text-lg font-semibold">
            Kein Tier gefunden. Versuch es mit einem anderen Namen!
          </p>
        </div>
      )}
    </div>
  );
}
