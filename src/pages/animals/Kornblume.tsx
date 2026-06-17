import { Link } from "react-router-dom";

export default function Kornblume() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-sky-100 hover:bg-sky-200 text-sky-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🌸</div>
        <h1 className="text-3xl md:text-4xl font-black text-blue-900">Kornblume</h1>
        <p className="text-blue-600 italic mt-1 text-base md:text-lg font-semibold">Centaurea cyanus</p>
      </div>

      <img
        src={import.meta.env.BASE_URL + "kornblume.jpg"}
        alt="Kornblume"
        className="w-full rounded-2xl shadow-md mb-8 object-cover max-h-96"
      />

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        <p>
          Die Kornblume leuchtet strahlend blau am Feldrand — aber früher wuchs sie überall zwischen dem Getreide, heute ist sie selten geworden. Genau deshalb müssen wir sie schützen.
        </p>
        <p>
          Bienen, Hummeln und Schmetterlinge lieben ihre Blüten, weil sie viel Nektar verstecken. Wo Kornblumen wachsen, ist auch für Insekten gesorgt.
        </p>
      </div>
    </div>
  );
}
