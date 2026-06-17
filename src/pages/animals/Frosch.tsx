import { Link } from "react-router-dom";

export default function Frosch() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-green-200 via-emerald-100 to-lime-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🐸</div>
        <h1 className="text-3xl md:text-4xl font-black text-green-900">Frosch</h1>
        <p className="text-green-600 italic mt-1 text-base md:text-lg font-semibold">Rana temporaria — Grasfrosch</p>
      </div>

      <img
        src={import.meta.env.BASE_URL + "frosch.jpg"}
        alt="Frosch"
        className="w-full rounded-2xl shadow-md mb-8 object-cover max-h-96"
      />

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        <p>Der Frosch ist ein „Lurch" — das bedeutet, er ist eine Amphibie und lebt sowohl im Wasser als auch an Land. Er beginnt sein Leben als winzige Kaulquappe im Teich, bekommt dann Beine und klettert irgendwann ans Ufer. Mit seiner feuchten Haut, den kräftigen Hinterbeinen und seinem lauten Quaken ist er einer der bekanntesten Bewohner unserer Wiesen und Gewässer.</p>
        <p>Frösche sind echte Helfer der Natur: Sie fressen jede Menge Mücken, Fliegen, Schnecken und Insekten und halten so das Gleichgewicht im Ökosystem. Gleichzeitig sind sie wichtiges Futter für Störche, Reiher und viele andere Tiere. Weil Frösche sauberes Wasser zum Leben brauchen, zeigen sie uns, wie es um unsere Natur steht — verschwinden sie, stimmt etwas nicht.</p>
        <p>Ein toller Trick des Frosches: Seine Zunge schnellt so blitzschnell hervor, dass eine Fliege gar keine Chance hat. Und springen kann er so weit wie kaum ein anderes Tier seiner Größe — manchmal über einen Meter in einem einzigen Satz! Im Winter schläft er tief vergraben im Schlamm und wartet einfach auf den Frühling.</p>
      </div>
    </div>
  );
}
