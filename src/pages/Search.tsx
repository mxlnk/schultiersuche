import { useSearchParams, Link } from "react-router-dom";
import { animals } from "../data/animals";
import SearchBar from "../components/SearchBar";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const lowerQuery = query.toLowerCase();

  const results = animals.filter((animal) =>
    animal.name.toLowerCase().includes(lowerQuery)
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
          <Link key={animal.name} to={animal.link} className="block group">
            <h2 className="text-xl text-blue-700 group-hover:underline">
              {animal.name}
            </h2>
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
