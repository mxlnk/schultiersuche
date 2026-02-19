import { Link } from "react-router-dom";

export default function Wellensittich() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/" className="text-green-600 hover:underline text-sm">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-4 mb-8 bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
        <h1 className="text-3xl font-bold text-green-900">Wellensittich</h1>
        <p className="text-green-600 italic mt-1">Melopsittacus undulatus</p>
      </div>

      <div className="space-y-5">
        <section className="border-t-2 border-green-400 pt-3">
          <h2 className="text-lg font-semibold text-green-800 mb-1">Größe</h2>
          <p className="text-gray-700 leading-relaxed">
            Wellensittiche sind etwa 18 bis 20 Zentimeter lang, einschließlich ihrer langen Schwanzfedern. Sie wiegen nur 30 bis 40 Gramm — das ist ungefähr so schwer wie ein Päckchen Taschentücher. Damit gehören sie zu den kleinsten Papageienarten der Welt.
          </p>
        </section>

        <section className="border-t-2 border-green-400 pt-3">
          <h2 className="text-lg font-semibold text-green-800 mb-1">Aussehen</h2>
          <p className="text-gray-700 leading-relaxed">
            In der Natur sind Wellensittiche grün-gelb gefärbt mit dunklen Wellenmustern auf dem Kopf und den Flügeln — daher ihr Name. Als Haustiere gibt es sie auch in Blau, Weiß, Gelb und vielen weiteren Farbschlägen. Sie haben einen kleinen, gebogenen Schnabel und lange Schwanzfedern.
          </p>
        </section>

        <section className="border-t-2 border-green-400 pt-3">
          <h2 className="text-lg font-semibold text-green-800 mb-1">Lebensraum</h2>
          <p className="text-gray-700 leading-relaxed">
            Wellensittiche stammen aus dem trockenen Inneren Australiens. Dort leben sie in riesigen Schwärmen von Hunderten bis Tausenden Vögeln und ziehen auf der Suche nach Wasser und Futter umher. Als Haustiere sollten sie mindestens zu zweit gehalten werden, da sie sehr gesellige Tiere sind.
          </p>
        </section>

        <section className="border-t-2 border-green-400 pt-3">
          <h2 className="text-lg font-semibold text-green-800 mb-1">Nahrung</h2>
          <p className="text-gray-700 leading-relaxed">
            In der Natur fressen Wellensittiche vor allem Grassamen und Körner. Als Haustiere bekommen sie spezielles Körnerfutter für Sittiche. Dazu brauchen sie frisches Grünfutter wie Salatblätter, Gurke oder Kräuter. Ein Kalkstein im Käfig versorgt sie mit wichtigen Mineralien.
          </p>
        </section>

        <section className="border-t-2 border-green-400 pt-3">
          <h2 className="text-lg font-semibold text-green-800 mb-1">Feinde</h2>
          <p className="text-gray-700 leading-relaxed">
            In Australien werden Wellensittiche von Greifvögeln wie Falken und Habichten gejagt. Auch Schlangen können ihnen und ihren Eiern gefährlich werden. Die Schwarmbildung ist ein wichtiger Schutz: Viele Augen sehen Feinde schneller. Als Haustiere müssen sie vor Katzen und offenen Fenstern geschützt werden.
          </p>
        </section>

        <section className="border-t-2 border-green-400 pt-3">
          <h2 className="text-lg font-semibold text-green-800 mb-1">Besonderheiten</h2>
          <p className="text-gray-700 leading-relaxed">
            Wellensittiche können lernen, Wörter und ganze Sätze nachzusprechen. Ein Wellensittich namens Puck hält sogar den Weltrekord mit über 1.700 gelernten Wörtern! Sie sind sehr verspielte Vögel, die gerne klettern, schaukeln und mit Spielzeug spielen. Ihre Nasenhaut verrät das Geschlecht: Bei Männchen ist sie blau, bei Weibchen braun.
          </p>
        </section>

        <section className="border-t-2 border-green-400 pt-3">
          <h2 className="text-lg font-semibold text-green-800 mb-1">Vermehrung</h2>
          <p className="text-gray-700 leading-relaxed">
            Wellensittiche brüten in Höhlen, in der Natur meist in Baumhöhlen. Das Weibchen legt 4 bis 6 weiße Eier und brütet sie etwa 18 Tage lang aus. Die Küken schlüpfen nackt und blind. Nach ungefähr 5 Wochen sind die Jungvögel flügge und verlassen das Nest. Beide Eltern kümmern sich um die Aufzucht.
          </p>
        </section>
      </div>
    </div>
  );
}
