import { Link } from "react-router-dom";

export default function Ameise() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-stone-200 hover:bg-stone-300 text-stone-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-stone-200 via-amber-100 to-orange-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🐜</div>
        <h1 className="text-3xl md:text-4xl font-black text-stone-900">Ameise</h1>
        <p className="text-stone-600 italic mt-1 text-base md:text-lg font-semibold">Formica rufa — Rote Waldameise</p>
      </div>

      <img
        src={import.meta.env.BASE_URL + "ameise.jpg"}
        alt="Ameise"
        className="w-full rounded-2xl shadow-md mb-8 object-cover max-h-96"
      />

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
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
        <p>
          Die Rote Waldameise ist die „Müllabfuhr des Waldes“: Sie räumt tote Insekten weg, lockert mit ihren Gängen die Erde und verbreitet sogar Pflanzensamen. So hält sie den Wald sauber und gesund — und genau deshalb steht sie unter Naturschutz. Wer einen Ameisenhügel findet, sollte ihn in Ruhe lassen und nicht darauftreten.
        </p>
      </div>
    </div>
  );
}
