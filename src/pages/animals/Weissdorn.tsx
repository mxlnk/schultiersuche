import { Link } from "react-router-dom";

export default function Weissdorn() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-rose-100 hover:bg-rose-200 text-rose-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-rose-200 via-red-50 to-pink-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🌳</div>
        <h1 className="text-3xl md:text-4xl font-black text-rose-900">Weißdorn</h1>
        <p className="text-rose-600 italic mt-1 text-base md:text-lg font-semibold">Crataegus</p>
      </div>

      <img
        src={import.meta.env.BASE_URL + "weissdorn.jpg"}
        alt="Weißdorn"
        className="w-full rounded-2xl shadow-md mb-8 object-cover max-h-96"
      />

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        <p>
          Der Weißdorn ist ein dorniger Strauch mit weißen Blüten im Frühling und leuchtend roten Beeren im Herbst. Das dichte Dornengestrüpp ist für Vögel ein perfekter, sicherer Nistplatz — kein Fuchs oder Marder kommt da durch.
        </p>
        <p>
          Im Winter sind die roten Beeren wichtiges Futter für viele Vogelarten. Und im Frühling kommen auch Insekten zu den Blüten, um Nektar zu sammeln. Der Weißdorn hilft also gleich vielen Tieren.
        </p>
      </div>
    </div>
  );
}
