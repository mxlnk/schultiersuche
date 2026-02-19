import { Link } from "react-router-dom";

export default function Wellensittich() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-green-100 via-emerald-50 to-lime-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🦜</div>
        <h1 className="text-3xl md:text-4xl font-black text-green-900">Wellensittich</h1>
        <p className="text-green-600 italic mt-1 text-base md:text-lg font-semibold">Melopsittacus undulatus</p>
      </div>

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        <p>
          Wellensittiche stammen aus dem trockenen Inneren Australiens. Dort leben sie in riesigen Schwärmen von Hunderten bis Tausenden Vögeln und ziehen auf der Suche nach Wasser und Futter umher. Als Haustiere sollten sie mindestens zu zweit gehalten werden, da sie sehr gesellige Tiere sind. Wellensittiche sind etwa 18 bis 20 Zentimeter lang und wiegen nur 30 bis 40 Gramm — das ist ungefähr so schwer wie ein Päckchen Taschentücher. Damit gehören sie zu den kleinsten Papageienarten der Welt.
        </p>
        <p>
          In der Natur sind Wellensittiche grün-gelb gefärbt mit dunklen Wellenmustern auf dem Kopf und den Flügeln — daher ihr Name. Als Haustiere gibt es sie auch in Blau, Weiß, Gelb und vielen weiteren Farbschlägen. Sie haben einen kleinen, gebogenen Schnabel und lange Schwanzfedern. Ihre Nasenhaut verrät das Geschlecht: Bei Männchen ist sie blau, bei Weibchen braun.
        </p>
        <p>
          In der Natur fressen Wellensittiche vor allem Grassamen und Körner. Als Haustiere bekommen sie spezielles Körnerfutter für Sittiche, dazu frisches Grünfutter wie Salatblätter, Gurke oder Kräuter. Ein Kalkstein im Käfig versorgt sie mit wichtigen Mineralien. In Australien werden sie von Greifvögeln wie Falken und Habichten gejagt, und auch Schlangen können ihnen gefährlich werden. Die Schwarmbildung ist ein wichtiger Schutz: Viele Augen sehen Feinde schneller.
        </p>
        <p>
          Wellensittiche können lernen, Wörter und ganze Sätze nachzusprechen. Ein Wellensittich namens Puck hält sogar den Weltrekord mit über 1.700 gelernten Wörtern! Sie sind sehr verspielte Vögel, die gerne klettern, schaukeln und mit Spielzeug spielen.
        </p>
        <p>
          Wellensittiche brüten in Höhlen, in der Natur meist in Baumhöhlen. Das Weibchen legt 4 bis 6 weiße Eier und brütet sie etwa 18 Tage lang aus. Die Küken schlüpfen nackt und blind. Nach ungefähr 5 Wochen sind die Jungvögel flügge und verlassen das Nest. Beide Eltern kümmern sich gemeinsam um die Aufzucht.
        </p>
      </div>
    </div>
  );
}
