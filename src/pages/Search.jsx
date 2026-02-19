import { useSearchParams, Link } from "react-router-dom";
import { animals } from "../data/animals";
import SearchBar from "../components/SearchBar";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const lowerQuery = query.toLowerCase();

  const results = animals.filter(
    (animal) =>
      animal.name.toLowerCase().includes(lowerQuery) ||
      animal.text.toLowerCase().includes(lowerQuery) ||
      animal.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="mb-6">
        <SearchBar defaultValue={query} />
      </div>

      <p className="text-sm text-gray-500 mb-4">
        {results.length} Ergebnis{results.length !== 1 && "se"} für &quot;{query}&quot;
      </p>

      <div className="space-y-6">
        {results.map((animal) => (
          <Link key={animal.id} to={`/tier/${animal.id}`} className="block group">
            <h2 className="text-xl text-blue-700 group-hover:underline">
              {animal.name}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {animal.text.length > 200
                ? animal.text.slice(0, 200) + "..."
                : animal.text}
            </p>
          </Link>
        ))}

        {results.length === 0 && (
          <p className="text-gray-500">
            Keine Tiere gefunden. Versuche einen anderen Suchbegriff.
          </p>
        )}
      </div>
    </div>
  );
}
