import { Link } from "react-router-dom";

export default function Ameise() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/" className="text-stone-600 hover:underline text-sm">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-4 mb-8 bg-stone-800 rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold">Ameise</h1>
        <p className="text-stone-300 italic mt-1">Formica rufa — Rote Waldameise</p>
      </div>

      <div className="space-y-6">
        <section className="border-l-4 border-stone-400 pl-4">
          <h2 className="text-lg font-semibold text-stone-700 mb-1">Größe</h2>
          <p className="text-gray-700 leading-relaxed">
            Rote Waldameisen sind 4 bis 9 Millimeter klein. Die Königin ist mit bis zu 11 Millimetern die Größte im Volk. Die Arbeiterinnen sind am kleinsten, Soldaten etwas größer. Trotz ihrer geringen Größe sind Ameisen zusammen unglaublich stark — ein ganzes Volk kann mehrere Kilogramm Nahrung am Tag transportieren.
          </p>
        </section>

        <section className="border-l-4 border-stone-400 pl-4">
          <h2 className="text-lg font-semibold text-stone-700 mb-1">Aussehen</h2>
          <p className="text-gray-700 leading-relaxed">
            Ameisen haben einen dreiteiligen Körper: Kopf, Brust und Hinterleib. Zwischen Brust und Hinterleib sitzt eine schmale Wespentaille. Sie besitzen sechs Beine und zwei gebogene Fühler, mit denen sie riechen und tasten können. Rote Waldameisen haben einen rotbraunen Kopf und Brust, während der Hinterleib dunkelbraun bis schwarz gefärbt ist.
          </p>
        </section>

        <section className="border-l-4 border-stone-400 pl-4">
          <h2 className="text-lg font-semibold text-stone-700 mb-1">Lebensraum</h2>
          <p className="text-gray-700 leading-relaxed">
            Rote Waldameisen bauen große Ameisenhügel im Wald, die über einen Meter hoch werden können. Im Inneren herrscht ein ausgeklügeltes System aus Gängen und Kammern. Ameisen allgemein leben auf der ganzen Welt — in Wäldern, Wiesen, Wüsten und sogar in Städten. Nur in der Antarktis und auf einigen Inseln kommen sie nicht vor.
          </p>
        </section>

        <section className="border-l-4 border-stone-400 pl-4">
          <h2 className="text-lg font-semibold text-stone-700 mb-1">Nahrung</h2>
          <p className="text-gray-700 leading-relaxed">
            Waldameisen ernähren sich hauptsächlich vom Honigtau der Blattläuse — einem süßen Saft, den Blattläuse ausscheiden. Dafür „pflegen" und beschützen die Ameisen die Blattläuse sogar. Zusätzlich jagen sie kleine Insekten und fressen Pflanzensäfte, Samen und den Saft von Baumwunden. Ein großes Ameisenvolk kann am Tag bis zu 100.000 Insekten erbeuten.
          </p>
        </section>

        <section className="border-l-4 border-stone-400 pl-4">
          <h2 className="text-lg font-semibold text-stone-700 mb-1">Feinde</h2>
          <p className="text-gray-700 leading-relaxed">
            Der Grünspecht ist der größte Feind der Waldameise — er steckt seine lange, klebrige Zunge in den Ameisenhügel und frisst Tausende Ameisen am Tag. Auch Ameisenbären, Spitzmäuse und manche Käfer fressen Ameisen. Zur Verteidigung können Waldameisen Ameisensäure verspritzen, die Feinde abschreckt und auf der Haut brennt.
          </p>
        </section>

        <section className="border-l-4 border-stone-400 pl-4">
          <h2 className="text-lg font-semibold text-stone-700 mb-1">Besonderheiten</h2>
          <p className="text-gray-700 leading-relaxed">
            Ameisen können das 50-Fache ihres eigenen Körpergewichts tragen — das wäre so, als ob ein Mensch ein Auto hochheben könnte! Sie verständigen sich über Duftstoffe, sogenannte Pheromone, und legen damit Duftspuren, denen andere Ameisen folgen. Ein Waldameisenvolk kann bis zu 1 Million Tiere umfassen. Waldameisen stehen unter Naturschutz, weil sie wichtig für das Ökosystem des Waldes sind.
          </p>
        </section>

        <section className="border-l-4 border-stone-400 pl-4">
          <h2 className="text-lg font-semibold text-stone-700 mb-1">Vermehrung</h2>
          <p className="text-gray-700 leading-relaxed">
            Nur die Königin legt Eier — bis zu 300 Stück am Tag. Alle Arbeiterinnen im Volk sind Weibchen, die keine Eier legen. Einmal im Jahr schlüpfen geflügelte Männchen und junge Königinnen, die zum Hochzeitsflug ausschwärmen. Nach der Paarung in der Luft sterben die Männchen. Die befruchtete Königin wirft ihre Flügel ab und gründet ein neues Volk oder kehrt in den alten Bau zurück. Eine Ameisenkönigin kann über 20 Jahre alt werden.
          </p>
        </section>
      </div>
    </div>
  );
}
