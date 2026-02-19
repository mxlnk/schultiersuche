import { Link } from "react-router-dom";

export default function Hund() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/" className="text-amber-700 hover:underline text-sm">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-4 mb-8 bg-amber-50 border-l-4 border-amber-600 rounded-r-lg p-6">
        <h1 className="text-3xl font-bold text-amber-900">Hund</h1>
        <p className="text-amber-700 italic mt-1">Canis lupus familiaris</p>
      </div>

      <div className="text-gray-700 leading-relaxed space-y-4">
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
