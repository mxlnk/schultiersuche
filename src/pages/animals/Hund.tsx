import { Link } from "react-router-dom";

export default function Hund() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-amber-100 hover:bg-amber-200 text-amber-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🐕</div>
        <h1 className="text-3xl md:text-4xl font-black text-amber-900">Hund</h1>
        <p className="text-amber-600 italic mt-1 text-base md:text-lg font-semibold">Canis lupus familiaris</p>
      </div>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Harzer_Fuchs_H%C3%BCndin_2.jpg/640px-Harzer_Fuchs_H%C3%BCndin_2.jpg"
        alt="Hund"
        className="w-full rounded-2xl shadow-md mb-8 object-cover max-h-96"
      />

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        <p>
          Der Hund ist eines der ältesten Haustiere der Welt und lebt seit über 15.000 Jahren an der Seite des Menschen. Er stammt vom Wolf ab und gehört zur Familie der Hundeartigen. Heute kommen Hunde auf der ganzen Welt vor — in Häusern und Wohnungen, auf Bauernhöfen und manchmal auch als Straßenhunde in Städten.
        </p>
        <p>
          Hunde gibt es in unglaublich vielen Größen und Formen. Die kleinste Rasse, der Chihuahua, wird nur etwa 15 Zentimeter hoch, während die größte Rasse, die Deutsche Dogge, eine Schulterhöhe von über 80 Zentimetern erreichen kann. Je nach Rasse wiegen Hunde zwischen 1 und 90 Kilogramm. Ihr Fell kann kurz oder lang, glatt oder lockig sein, und es gibt sie in fast allen Farben: braun, schwarz, weiß, grau oder gefleckt. Manche Hunde haben Schlappohren, andere Stehohren.
        </p>
        <p>
          Hunde sind Allesfresser, bevorzugen aber Fleisch. Als Haustiere bekommen sie spezielles Hundefutter, das alle wichtigen Nährstoffe enthält. Schokolade, Weintrauben und Zwiebeln sind für Hunde giftig und dürfen niemals gefüttert werden. Als Haustiere haben Hunde kaum natürliche Feinde — die größten Gefahren sind der Straßenverkehr und Krankheiten. Regelmäßige Besuche beim Tierarzt halten sie gesund.
        </p>
        <p>
          Besonders beeindruckend ist der Geruchssinn des Hundes: Mit etwa 300 Millionen Riechzellen riecht er ungefähr 60-mal besser als der Mensch. Deshalb werden Hunde als Spürhunde bei der Polizei, als Rettungshunde bei Katastrophen und als Blindenführhunde eingesetzt. Hunde können außerdem die Stimmung von Menschen erkennen und gelten als beste Freunde des Menschen.
        </p>
        <p>
          Eine Hündin ist etwa 58 bis 68 Tage trächtig. Pro Wurf kommen 1 bis 12 Welpen zur Welt, je nach Rasse. Die Welpen werden blind und taub geboren und öffnen erst nach etwa zwei Wochen die Augen. In den ersten Wochen werden sie von der Mutter gesäugt, und mit etwa 8 Wochen können sie in ein neues Zuhause umziehen.
        </p>
      </div>
    </div>
  );
}
