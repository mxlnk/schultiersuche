import { Link } from "react-router-dom";

export default function Katze() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/" className="text-violet-600 hover:underline text-sm">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-4 mb-8 bg-violet-50 rounded-xl p-6 text-center shadow-sm">
        <h1 className="text-3xl font-bold text-violet-900">Katze</h1>
        <p className="text-violet-600 italic mt-1">Felis catus</p>
      </div>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          Die Katze ist das beliebteste Haustier in Deutschland und lebt auf der ganzen Welt mit Menschen zusammen. Es gibt Wohnungskatzen, die nur drinnen leben, und Freigänger, die auch draußen herumstreifen. Wildkatzen leben in Wäldern und sind sehr scheu. Eine Hauskatze wird etwa 40 bis 50 Zentimeter lang, dazu kommt ein Schwanz von 25 bis 30 Zentimetern. Sie wiegt zwischen 3 und 8 Kilogramm, wobei Kater meistens etwas größer sind als weibliche Katzen.
        </p>
        <p>
          Katzen haben ein weiches, dichtes Fell, das viele verschiedene Farben und Muster haben kann: getigert, schwarz, weiß, rot oder dreifarbig. Sie besitzen einziehbare Krallen an ihren Pfoten und lange Schnurrhaare, die ihnen bei der Orientierung helfen. Ihre Augen können im Dunkeln leuchten, denn Katzen sehen bei Nacht sechsmal besser als Menschen. Sie landen fast immer auf ihren Pfoten, wenn sie fallen, und ihr Schnurren hat eine beruhigende Wirkung — es kann sogar die Heilung von Knochen fördern.
        </p>
        <p>
          Katzen sind reine Fleischfresser. In der Natur jagen sie Mäuse, Vögel und Insekten. Als Haustiere bekommen sie spezielles Katzenfutter mit viel Fleisch. Sie brauchen unbedingt die Aminosäure Taurin, die nur in Fleisch vorkommt. Milch vertragen viele Katzen übrigens nicht gut, auch wenn man das oft denkt. Katzen schlafen bis zu 16 Stunden am Tag und sind vor allem in der Dämmerung aktiv.
        </p>
        <p>
          Freilaufende Katzen können von Hunden, Füchsen und Greifvögeln angegriffen werden. Die größte Gefahr ist jedoch der Straßenverkehr. In der Wohnung gehaltene Katzen sind vor diesen Gefahren geschützt.
        </p>
        <p>
          Eine Katze ist etwa 63 bis 65 Tage trächtig. Pro Wurf werden 3 bis 6 Kätzchen geboren. Die Kitten kommen blind und taub zur Welt und wiegen nur etwa 100 Gramm. Nach ungefähr 10 Tagen öffnen sie die Augen, und die Mutter säugt ihre Jungen etwa 6 bis 8 Wochen lang. Ab der 12. Woche sind die Kätzchen bereit für ein neues Zuhause.
        </p>
      </div>
    </div>
  );
}
