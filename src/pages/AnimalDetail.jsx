import { useParams, Link } from "react-router-dom";
import { animals } from "../data/animals";

export default function AnimalDetail() {
  const { id } = useParams();
  const animal = animals.find((a) => a.id === id);

  if (!animal) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Tier nicht gefunden</h1>
        <Link to="/" className="text-blue-600 hover:underline">
          Zurück zur Startseite
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/" className="text-blue-600 hover:underline text-sm">
        &larr; Zurück zur Suche
      </Link>
      <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-6">{animal.name}</h1>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{animal.text}</p>
      {animal.tags.length > 0 && (
        <div className="mt-6 flex gap-2 flex-wrap">
          {animal.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
