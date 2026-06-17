import { Link } from "react-router-dom";

export default function Schlehe() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-indigo-100 hover:bg-indigo-200 text-indigo-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-indigo-200 via-violet-50 to-slate-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🫐</div>
        <h1 className="text-3xl md:text-4xl font-black text-indigo-900">Schlehe</h1>
        <p className="text-indigo-600 italic mt-1 text-base md:text-lg font-semibold">Prunus spinosa</p>
      </div>

      <img
        src={import.meta.env.BASE_URL + "schlehe.jpg"}
        alt="Schlehe"
        className="w-full rounded-2xl shadow-md mb-8 object-cover max-h-96"
      />

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        <p>
          Die Schlehe ist ein dorniger Strauch, der im Frühling über und über mit weißen Blüten bedeckt ist. Im Herbst hängen dann kleine blaue Beeren daran — die Schlehen.
        </p>
        <p>
          Die spitzen Dornen machen das Gestrüpp so ungemütlich für Feinde, dass Vögel dort ganz sicher ihr Nest bauen können. Und wenn der Winter kommt, fressen sie die Beeren als Futter. Für Vögel ist die Schlehe wie ein Zuhause das ganze Jahr.
        </p>
      </div>
    </div>
  );
}
