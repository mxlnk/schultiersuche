import { useSearchParams, Link } from "react-router-dom";
import { animals, categories } from "../data/animals";
import SearchBar from "../components/SearchBar";

function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
  return dp[m][n];
}

function fuzzyMatch(query: string, text: string): boolean {
  const q = query.toLowerCase();
  const t = text.toLowerCase();
  if (t.includes(q)) return true;
  if (q.length < 3) return false;
  const maxDist = q.length <= 4 ? 1 : 2;
  if (levenshtein(q, t) <= maxDist) return true;
  for (let i = 0; i <= t.length - q.length; i++) {
    if (levenshtein(q, t.slice(i, i + q.length)) <= maxDist) return true;
  }
  if (q.length < t.length) {
    for (let len = q.length - 1; len <= q.length + 1; len++) {
      if (len < 1 || len > t.length) continue;
      for (let i = 0; i <= t.length - len; i++) {
        if (levenshtein(q, t.slice(i, i + len)) <= maxDist) return true;
      }
    }
  }
  return false;
}

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

  const exactCategoryMatches = query
    ? categories.filter((c) => c.label.toLowerCase().includes(lowerQuery))
    : [];
  const exactResults = animals.filter((animal) =>
    animal.name.toLowerCase().includes(lowerQuery) ||
    exactCategoryMatches.some((c) => c.id === animal.category)
  );

  const results = exactResults.length > 0
    ? exactResults
    : animals.filter((animal) =>
        fuzzyMatch(query, animal.name) ||
        categories.filter((c) => fuzzyMatch(query, c.label))
          .some((c) => c.id === animal.category)
      );

  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-6 md:py-10">
      <Link to="/" className="inline-block text-2xl md:text-3xl font-black mb-6 tracking-tight hover:scale-105 transition-transform">
        <span className="text-rose-500">S</span>
        <span className="text-amber-500">c</span>
        <span className="text-emerald-500">h</span>
        <span className="text-sky-500">u</span>
        <span className="text-violet-500">l</span>
        <span className="text-rose-500">t</span>
        <span className="text-amber-500">i</span>
        <span className="text-emerald-500">e</span>
        <span className="text-sky-500">r</span>
        <span className="text-violet-500">s</span>
        <span className="text-rose-500">u</span>
        <span className="text-amber-500">c</span>
        <span className="text-emerald-500">h</span>
        <span className="text-sky-500">e</span>
      </Link>
      <div className="mb-8">
        <SearchBar defaultValue={query} />
      </div>

      <p className="text-base text-gray-500 mb-5 font-semibold">
        {results.length} Ergebnis{results.length !== 1 ? "se" : ""} für &quot;{query}&quot;
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
