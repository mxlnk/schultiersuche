import { Link } from "react-router-dom";

export default function Regenwurm() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-stone-200 hover:bg-stone-300 text-stone-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-stone-200 via-amber-100 to-rose-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🪱</div>
        <h1 className="text-3xl md:text-4xl font-black text-stone-900">Regenwurm</h1>
        <p className="text-stone-600 italic mt-1 text-base md:text-lg font-semibold">Lumbricus terrestris</p>
      </div>

      <img
        src={import.meta.env.BASE_URL + "regenwurm.jpg"}
        alt="Regenwurm"
        className="w-full rounded-2xl shadow-md mb-8 object-cover max-h-96"
      />

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        <p>Der Regenwurm ist kein Insekt — er ist ein echter „Wurm"! Er hat keinen einzigen Knochen im Körper und lebt fast sein ganzes Leben tief im Boden. Mit seinem weichen, geringelten Körper kringelt er sich durch die Erde und kann dabei bis zu 30 Zentimeter lang werden — so lang wie ein großes Lineal.</p>
        <p>Der Regenwurm ist ein echter „Garten-Held" und deshalb unbedingt schützenswert. Er gräbt unzählige Gänge durch die Erde und lockert sie dabei auf, sodass Luft und Wasser bis zu den Pflanzenwurzeln gelangen können. Was er dabei frisst, verwandelt er in feine, nährstoffreiche Häufchen — das ist wie ein natürlicher Dünger, der die Pflanzen stark und gesund macht.</p>
        <p>Nach einem kräftigen Regen kommen Regenwürmer manchmal an die Oberfläche, weil ihre Gänge voll Wasser laufen. Auf einer einzigen Wiese können bis zu drei Millionen Regenwürmer leben — das ist eine ganze Armee fleißiger „Bodenarbeiter"! Ohne sie wäre die Erde hart, trocken und viel weniger fruchtbar.</p>
      </div>
    </div>
  );
}
