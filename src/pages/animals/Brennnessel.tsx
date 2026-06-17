import { Link } from "react-router-dom";

export default function Brennnessel() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-green-200 via-emerald-100 to-lime-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🦋</div>
        <h1 className="text-3xl md:text-4xl font-black text-green-900">Brennnessel</h1>
        <p className="text-green-600 italic mt-1 text-base md:text-lg font-semibold">Urtica dioica</p>
      </div>

      <img
        src={import.meta.env.BASE_URL + "brennnessel.jpg"}
        alt="Brennnessel"
        className="w-full rounded-2xl shadow-md mb-8 object-cover max-h-96"
      />

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        <p>
          Die Brennnessel brennt bei Berührung und wird oft als Unkraut gezupft — dabei ist sie eine der wichtigsten Pflanzen für Schmetterlinge in Deutschland!
        </p>
        <p>
          Die Raupen des Tagpfauenauges, des Kleinen Fuchses und des Admirals fressen fast ausschließlich Brennnesseln. Ohne diese Pflanze könnten diese wunderschönen Schmetterlinge gar nicht überleben. Also: Brennnesseln stehen lassen!
        </p>
      </div>
    </div>
  );
}
