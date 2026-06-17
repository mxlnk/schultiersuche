import { Link } from "react-router-dom";

export default function Schilf() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-teal-100 hover:bg-teal-200 text-teal-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-teal-200 via-cyan-50 to-emerald-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🌾</div>
        <h1 className="text-3xl md:text-4xl font-black text-teal-900">Schilf</h1>
        <p className="text-teal-600 italic mt-1 text-base md:text-lg font-semibold">Phragmites australis</p>
      </div>

      <img
        src={import.meta.env.BASE_URL + "schilf.jpg"}
        alt="Schilf"
        className="w-full rounded-2xl shadow-md mb-8 object-cover max-h-96"
      />

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        <p>
          Schilf ist ein hohes Gras, das direkt am Ufer von Seen und Teichen wächst. Für Frösche und Kröten ist es ein echtes Versteck: Im dichten Schilfgürtel sind sie sicher vor Feinden.
        </p>
        <p>
          Schilf kann sogar das Wasser sauber halten, weil es Schadstoffe aus dem Wasser filtert. Es schützt also gleich zwei Dinge auf einmal: die Amphibien und das Wasser.
        </p>
      </div>
    </div>
  );
}
