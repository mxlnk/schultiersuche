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

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          Ameisen leben auf der ganzen Welt — in Wäldern, Wiesen, Wüsten und sogar in Städten. Nur in der Antarktis und auf einigen Inseln kommen sie nicht vor. Rote Waldameisen bauen große Ameisenhügel im Wald, die über einen Meter hoch werden können. Im Inneren herrscht ein ausgeklügeltes System aus Gängen und Kammern. Ein einziges Waldameisenvolk kann bis zu 1 Million Tiere umfassen. Waldameisen stehen unter Naturschutz, weil sie wichtig für das Ökosystem des Waldes sind.
        </p>
        <p>
          Rote Waldameisen sind nur 4 bis 9 Millimeter klein, die Königin wird mit bis zu 11 Millimetern die Größte im Volk. Ameisen haben einen dreiteiligen Körper: Kopf, Brust und Hinterleib, dazwischen sitzt eine schmale Wespentaille. Sie besitzen sechs Beine und zwei gebogene Fühler, mit denen sie riechen und tasten können. Rote Waldameisen haben einen rotbraunen Kopf und Brust, während der Hinterleib dunkelbraun bis schwarz gefärbt ist.
        </p>
        <p>
          Waldameisen ernähren sich hauptsächlich vom Honigtau der Blattläuse — einem süßen Saft, den Blattläuse ausscheiden. Dafür „pflegen" und beschützen die Ameisen die Blattläuse sogar. Zusätzlich jagen sie kleine Insekten und fressen Pflanzensäfte und Samen. Ein großes Ameisenvolk kann am Tag bis zu 100.000 Insekten erbeuten. Ameisen können das 50-Fache ihres eigenen Körpergewichts tragen — das wäre so, als ob ein Mensch ein Auto hochheben könnte! Sie verständigen sich über Duftstoffe, sogenannte Pheromone, und legen damit Duftspuren, denen andere Ameisen folgen.
        </p>
        <p>
          Der Grünspecht ist der größte Feind der Waldameise — er steckt seine lange, klebrige Zunge in den Ameisenhügel und frisst Tausende Ameisen am Tag. Auch Spitzmäuse und manche Käfer fressen Ameisen. Zur Verteidigung können Waldameisen Ameisensäure verspritzen, die Feinde abschreckt und auf der Haut brennt.
        </p>
        <p>
          Nur die Königin legt Eier — bis zu 300 Stück am Tag. Alle Arbeiterinnen im Volk sind Weibchen, die keine Eier legen. Einmal im Jahr schlüpfen geflügelte Männchen und junge Königinnen, die zum Hochzeitsflug ausschwärmen. Nach der Paarung in der Luft sterben die Männchen, und die befruchtete Königin wirft ihre Flügel ab und gründet ein neues Volk oder kehrt in den alten Bau zurück. Eine Ameisenkönigin kann über 20 Jahre alt werden.
        </p>
      </div>
    </div>
  );
}
