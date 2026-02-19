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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-violet-50 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-violet-800 mb-2">Größe</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Eine Hauskatze wird etwa 40 bis 50 Zentimeter lang, dazu kommt ein Schwanz von 25 bis 30 Zentimetern. Sie wiegt zwischen 3 und 8 Kilogramm. Kater sind meistens etwas größer und schwerer als weibliche Katzen.
          </p>
        </div>

        <div className="bg-violet-50 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-violet-800 mb-2">Aussehen</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Katzen haben ein weiches, dichtes Fell, das viele verschiedene Farben und Muster haben kann: getigert, schwarz, weiß, rot oder dreifarbig. Sie besitzen einziehbare Krallen an ihren Pfoten und lange Schnurrhaare, die ihnen bei der Orientierung helfen. Ihre Augen können im Dunkeln leuchten.
          </p>
        </div>

        <div className="bg-violet-50 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-violet-800 mb-2">Lebensraum</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Die Hauskatze ist das beliebteste Haustier in Deutschland. Katzen leben auf der ganzen Welt mit Menschen zusammen. Es gibt Wohnungskatzen, die nur drinnen leben, und Freigänger, die auch draußen herumstreifen. Wildkatzen leben in Wäldern und sind sehr scheu.
          </p>
        </div>

        <div className="bg-violet-50 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-violet-800 mb-2">Nahrung</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Katzen sind reine Fleischfresser. In der Natur jagen sie Mäuse, Vögel und Insekten. Als Haustiere bekommen sie spezielles Katzenfutter mit viel Fleisch. Katzen brauchen unbedingt die Aminosäure Taurin, die nur in Fleisch vorkommt. Milch vertragen viele Katzen nicht gut.
          </p>
        </div>

        <div className="bg-violet-50 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-violet-800 mb-2">Feinde</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Freilaufende Katzen können von Hunden, Füchsen und Greifvögeln angegriffen werden. Die größte Gefahr ist jedoch der Straßenverkehr. Auch Krankheiten und Parasiten können Katzen gefährlich werden. In der Wohnung gehaltene Katzen sind vor diesen Gefahren geschützt.
          </p>
        </div>

        <div className="bg-violet-50 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-violet-800 mb-2">Besonderheiten</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Katzen können im Dunkeln sechsmal besser sehen als Menschen. Sie landen fast immer auf ihren Pfoten, wenn sie fallen. Ihr Schnurren hat eine beruhigende Wirkung und kann sogar die Heilung von Knochen fördern. Katzen schlafen bis zu 16 Stunden am Tag und sind vor allem in der Dämmerung aktiv.
          </p>
        </div>

        <div className="bg-violet-50 rounded-lg p-4 md:col-span-2">
          <h2 className="text-lg font-semibold text-violet-800 mb-2">Vermehrung</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Eine Katze ist etwa 63 bis 65 Tage trächtig. Pro Wurf werden 3 bis 6 Kätzchen geboren. Die Kitten kommen blind und taub zur Welt und wiegen nur etwa 100 Gramm. Nach ungefähr 10 Tagen öffnen sie die Augen. Die Mutter säugt ihre Jungen etwa 6 bis 8 Wochen lang. Ab der 12. Woche sind die Kätzchen bereit für ein neues Zuhause.
          </p>
        </div>
      </div>
    </div>
  );
}
