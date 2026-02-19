import { Link } from "react-router-dom";

export default function Hirschkaefer() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/" className="text-amber-900 hover:underline text-sm">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-4 mb-8 bg-amber-950 rounded-lg p-6 text-white border-t-4 border-amber-600">
        <h1 className="text-3xl font-bold">Hirschkäfer</h1>
        <p className="text-amber-300 italic mt-1">Lucanus cervus</p>
      </div>

      <div className="space-y-0">
        <section className="p-5 border-b-2 border-amber-200">
          <h2 className="text-lg font-bold text-amber-900 mb-1">Größe</h2>
          <p className="text-gray-700 leading-relaxed">
            Der Hirschkäfer ist der größte Käfer Europas! Männchen werden mit ihrem Geweih 5 bis 8 Zentimeter lang — manche Exemplare sogar bis zu 9 Zentimeter. Das entspricht etwa der Länge eines Zeigefingers. Weibchen sind mit 3 bis 5 Zentimetern deutlich kleiner und haben nur kleine Zangen.
          </p>
        </section>

        <section className="bg-amber-50 p-5 border-b-2 border-amber-200">
          <h2 className="text-lg font-bold text-amber-900 mb-1">Aussehen</h2>
          <p className="text-gray-700 leading-relaxed">
            Männliche Hirschkäfer sind an ihrem beeindruckenden „Geweih" sofort zu erkennen: Die stark vergrößerten Oberkiefer sehen aus wie ein Hirschgeweih — daher der Name. Der Körper ist dunkelbraun bis schwarz gefärbt mit einem leichten rotbraunen Schimmer. Der Kopf der Männchen ist breit und kräftig, um das schwere Geweih zu tragen. Weibchen haben einen kleineren Kopf mit kurzen, aber kräftigen Zangen.
          </p>
        </section>

        <section className="p-5 border-b-2 border-amber-200">
          <h2 className="text-lg font-bold text-amber-900 mb-1">Lebensraum</h2>
          <p className="text-gray-700 leading-relaxed">
            Hirschkäfer leben in alten Laubwäldern, besonders in Eichenwäldern. Sie brauchen alte, morsche Bäume und Baumstümpfe, denn dort entwickeln sich ihre Larven. Man findet sie in Mittel- und Südeuropa, aber sie sind selten geworden, weil alte Wälder immer weniger werden. In manchen Regionen Deutschlands gibt es noch größere Bestände, besonders in Süddeutschland.
          </p>
        </section>

        <section className="bg-amber-50 p-5 border-b-2 border-amber-200">
          <h2 className="text-lg font-bold text-amber-900 mb-1">Nahrung</h2>
          <p className="text-gray-700 leading-relaxed">
            Erwachsene Hirschkäfer fressen kaum noch. Sie lecken gelegentlich an ausfließendem Baumsaft von Eichen oder saugen an überreifem, gärendem Obst. Ihre Hauptaufgabe als erwachsene Käfer ist die Fortpflanzung. Die Larven dagegen ernähren sich von morschem, pilzbefallenem Holz, das sie mit ihren kräftigen Kiefern zerkleinern.
          </p>
        </section>

        <section className="p-5 border-b-2 border-amber-200">
          <h2 className="text-lg font-bold text-amber-900 mb-1">Feinde</h2>
          <p className="text-gray-700 leading-relaxed">
            Krähen, Elstern, Eulen und Dohlen fressen Hirschkäfer. Auch Marder und Waschbären können ihnen gefährlich werden. Oft findet man am Waldboden nur noch das Geweih der Männchen — den Rest hat ein Vogel gefressen. Die im Boden lebenden Larven werden manchmal von Wildschweinen ausgegraben.
          </p>
        </section>

        <section className="bg-amber-50 p-5 border-b-2 border-amber-200">
          <h2 className="text-lg font-bold text-amber-900 mb-1">Besonderheiten</h2>
          <p className="text-gray-700 leading-relaxed">
            Männliche Hirschkäfer kämpfen mit ihrem Geweih um Weibchen — genau wie echte Hirsche! Sie versuchen, den Gegner vom Ast zu hebeln. Trotz ihrer Größe können Hirschkäfer fliegen, was an warmen Sommerabenden im Juni und Juli ein beeindruckendes Schauspiel ist. Der Hirschkäfer steht in Deutschland und ganz Europa unter strengem Naturschutz, da er vom Aussterben bedroht ist. Er wurde zum Insekt des Jahres 2012 gewählt.
          </p>
        </section>

        <section className="p-5">
          <h2 className="text-lg font-bold text-amber-900 mb-1">Vermehrung</h2>
          <p className="text-gray-700 leading-relaxed">
            Das Weibchen legt seine Eier an die Wurzeln toter oder sterbender Laubbäume, besonders Eichen. Die Larven, dicke weiße Engerlinge, leben im morschen Holz und brauchen erstaunliche 5 bis 8 Jahre für ihre Entwicklung — so lang wie ein Kind von der Einschulung bis zur weiterführenden Schule! Dann verpuppen sie sich in einer Kammer im Boden. Der erwachsene Käfer lebt danach nur wenige Wochen im Sommer. Der Hirschkäfer verbringt also fast sein gesamtes Leben als Larve unter der Erde.
          </p>
        </section>
      </div>
    </div>
  );
}
