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

      <div className="space-y-6">
        <section className="border-l-4 border-amber-300 pl-4">
          <h2 className="text-lg font-semibold text-amber-800 mb-1">Größe</h2>
          <p className="text-gray-700 leading-relaxed">
            Hunde gibt es in vielen verschiedenen Größen. Die kleinste Rasse, der Chihuahua, wird nur etwa 15 Zentimeter hoch. Die größte Rasse, die Deutsche Dogge, kann eine Schulterhöhe von über 80 Zentimetern erreichen. Je nach Rasse wiegen Hunde zwischen 1 und 90 Kilogramm.
          </p>
        </section>

        <section className="border-l-4 border-amber-300 pl-4">
          <h2 className="text-lg font-semibold text-amber-800 mb-1">Aussehen</h2>
          <p className="text-gray-700 leading-relaxed">
            Hunde haben vier Beine, eine Schnauze und einen Schwanz. Ihr Fell kann kurz oder lang, glatt oder lockig sein. Es gibt Hunde in fast allen Farben: braun, schwarz, weiß, grau oder gefleckt. Manche Hunde haben Schlappohren, andere Stehohren. Die Form der Schnauze ist je nach Rasse unterschiedlich lang.
          </p>
        </section>

        <section className="border-l-4 border-amber-300 pl-4">
          <h2 className="text-lg font-semibold text-amber-800 mb-1">Lebensraum</h2>
          <p className="text-gray-700 leading-relaxed">
            Der Hund lebt seit über 15.000 Jahren an der Seite des Menschen und ist damit eines der ältesten Haustiere. Hunde kommen auf der ganzen Welt vor. Sie leben in Häusern und Wohnungen, auf Bauernhöfen und manchmal auch als Straßenhunde in Städten. Ursprünglich stammen sie vom Wolf ab.
          </p>
        </section>

        <section className="border-l-4 border-amber-300 pl-4">
          <h2 className="text-lg font-semibold text-amber-800 mb-1">Nahrung</h2>
          <p className="text-gray-700 leading-relaxed">
            Hunde sind Allesfresser, bevorzugen aber Fleisch. Als Haustiere bekommen sie spezielles Hundefutter, das alle wichtigen Nährstoffe enthält. Hunde dürfen keine Schokolade, Weintrauben oder Zwiebeln fressen, da diese Lebensmittel für sie giftig sind. Frisches Wasser sollte immer bereitstehen.
          </p>
        </section>

        <section className="border-l-4 border-amber-300 pl-4">
          <h2 className="text-lg font-semibold text-amber-800 mb-1">Feinde</h2>
          <p className="text-gray-700 leading-relaxed">
            Als Haustiere haben Hunde kaum natürliche Feinde. Die größten Gefahren sind der Straßenverkehr und Krankheiten. Wildlebende Hunde können von größeren Raubtieren wie Wölfen oder Bären angegriffen werden. Regelmäßige Besuche beim Tierarzt schützen Haushunde vor Krankheiten.
          </p>
        </section>

        <section className="border-l-4 border-amber-300 pl-4">
          <h2 className="text-lg font-semibold text-amber-800 mb-1">Besonderheiten</h2>
          <p className="text-gray-700 leading-relaxed">
            Hunde haben einen fantastischen Geruchssinn mit etwa 300 Millionen Riechzellen — Menschen haben nur 5 Millionen. Deshalb werden Hunde als Spürhunde bei der Polizei, als Rettungshunde und als Blindenführhunde eingesetzt. Hunde können die Stimmung von Menschen erkennen und gelten als beste Freunde des Menschen.
          </p>
        </section>

        <section className="border-l-4 border-amber-300 pl-4">
          <h2 className="text-lg font-semibold text-amber-800 mb-1">Vermehrung</h2>
          <p className="text-gray-700 leading-relaxed">
            Eine Hündin ist etwa 58 bis 68 Tage trächtig. Pro Wurf kommen 1 bis 12 Welpen zur Welt, je nach Rasse. Die Welpen werden blind und taub geboren und öffnen erst nach etwa zwei Wochen die Augen. In den ersten Wochen werden sie von der Mutter gesäugt. Mit etwa 8 Wochen können sie in ein neues Zuhause umziehen.
          </p>
        </section>
      </div>
    </div>
  );
}
