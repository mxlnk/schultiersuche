import { Link } from "react-router-dom";

export default function Hundsrose() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-pink-100 hover:bg-pink-200 text-pink-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-pink-200 via-rose-100 to-fuchsia-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🌹</div>
        <h1 className="text-3xl md:text-4xl font-black text-pink-900">Hundsrose</h1>
        <p className="text-pink-600 italic mt-1 text-base md:text-lg font-semibold">Rosa canina</p>
      </div>

      <img
        src={import.meta.env.BASE_URL + "hundsrose.jpg"}
        alt="Hundsrose"
        className="w-full rounded-2xl shadow-md mb-8 object-cover max-h-96"
      />

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        <p>
          Die Hundsrose ist eine wilde Rose mit hübschen rosa Blüten. Im Herbst verwandeln sich ihre Blüten in rote Hagebutten — die stecken voller Nährstoffe und sind für viele Vögel ein wichtiges Winterfutter.
        </p>
        <p>
          Das dornige Gestrüpp der Hundsrose ist außerdem ein sicherer Nistplatz: Hier können Vögel ihre Nester bauen, ohne Angst vor Feinden zu haben. Eine Rose, die wirklich Leben schützt!
        </p>
      </div>
    </div>
  );
}
