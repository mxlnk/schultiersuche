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

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          Der Hirschkäfer ist der größte Käfer Europas und steht unter strengem Naturschutz, da er vom Aussterben bedroht ist. Er wurde zum Insekt des Jahres 2012 gewählt. Hirschkäfer leben in alten Laubwäldern, besonders in Eichenwäldern, denn sie brauchen alte, morsche Bäume und Baumstümpfe für die Entwicklung ihrer Larven. In manchen Regionen Deutschlands, besonders in Süddeutschland, gibt es noch größere Bestände, aber insgesamt sind sie selten geworden, weil alte Wälder immer weniger werden.
        </p>
        <p>
          Männchen werden mit ihrem beeindruckenden „Geweih" 5 bis 8 Zentimeter lang, manche Exemplare sogar bis zu 9 Zentimeter — etwa die Länge eines Zeigefingers. Weibchen sind mit 3 bis 5 Zentimetern deutlich kleiner und haben nur kleine Zangen. Die stark vergrößerten Oberkiefer der Männchen sehen aus wie ein Hirschgeweih, daher der Name. Der Körper ist dunkelbraun bis schwarz gefärbt mit einem leichten rotbraunen Schimmer, und der Kopf der Männchen ist breit und kräftig, um das schwere Geweih zu tragen.
        </p>
        <p>
          Erwachsene Hirschkäfer fressen kaum noch. Sie lecken gelegentlich an ausfließendem Baumsaft von Eichen oder saugen an überreifem, gärendem Obst. Ihre Hauptaufgabe als erwachsene Käfer ist die Fortpflanzung. Männliche Hirschkäfer kämpfen mit ihrem Geweih um Weibchen — genau wie echte Hirsche! Sie versuchen dabei, den Gegner vom Ast zu hebeln. Trotz ihrer Größe können Hirschkäfer fliegen, was an warmen Sommerabenden im Juni und Juli ein beeindruckendes Schauspiel ist.
        </p>
        <p>
          Krähen, Elstern, Eulen und Dohlen fressen Hirschkäfer. Auch Marder und Waschbären können ihnen gefährlich werden. Oft findet man am Waldboden nur noch das Geweih der Männchen — den Rest hat ein Vogel gefressen. Die im Boden lebenden Larven werden manchmal von Wildschweinen ausgegraben.
        </p>
        <p>
          Das Weibchen legt seine Eier an die Wurzeln toter oder sterbender Laubbäume, besonders Eichen. Die Larven, dicke weiße Engerlinge, leben im morschen Holz und brauchen erstaunliche 5 bis 8 Jahre für ihre Entwicklung — so lang wie ein Kind von der Einschulung bis zur weiterführenden Schule! Dann verpuppen sie sich in einer Kammer im Boden. Der erwachsene Käfer lebt danach nur wenige Wochen im Sommer. Der Hirschkäfer verbringt also fast sein gesamtes Leben als Larve unter der Erde.
        </p>
      </div>
    </div>
  );
}
