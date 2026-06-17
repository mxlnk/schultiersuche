import { Link } from "react-router-dom";

export default function Holunder() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-purple-100 hover:bg-purple-200 text-purple-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-purple-200 via-violet-100 to-fuchsia-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🍇</div>
        <h1 className="text-3xl md:text-4xl font-black text-purple-900">Schwarzer Holunder</h1>
        <p className="text-purple-600 italic mt-1 text-base md:text-lg font-semibold">Sambucus nigra</p>
      </div>

      <img
        src={import.meta.env.BASE_URL + "holunder.jpg"}
        alt="Schwarzer Holunder"
        className="w-full rounded-2xl shadow-md mb-8 object-cover max-h-96"
      />

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        <p>
          Der Schwarze Holunder ist ein großer Strauch, der gleich für zwei Tiergruppen wichtig ist. In seinen weißen Blütendolden sammeln Insekten Nektar, und im weichen Holz der alten Äste nisten kleine Insekten.
        </p>
        <p>
          Im Herbst hängen die Zweige voller schwarzer Beeren — und über 60 verschiedene Vogelarten fressen sie! Der Holunder ist wie ein riesiges, lebendiges Futterhaus mitten in der Natur.
        </p>
      </div>
    </div>
  );
}
