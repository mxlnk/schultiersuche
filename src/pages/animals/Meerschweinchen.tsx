import { Link } from "react-router-dom";

export default function Meerschweinchen() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/" className="text-yellow-700 hover:underline text-sm">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-4 mb-8 bg-yellow-50 border-b-4 border-yellow-500 p-6">
        <h1 className="text-3xl font-bold text-yellow-900">Meerschweinchen</h1>
        <p className="text-yellow-700 italic mt-1">Cavia porcellus</p>
      </div>

      <div className="space-y-5">
        <section>
          <h2 className="text-lg font-bold text-yellow-800 inline">Größe: </h2>
          <p className="text-gray-700 leading-relaxed inline">
            Meerschweinchen werden 20 bis 35 Zentimeter lang und wiegen zwischen 700 und 1.200 Gramm. Einen sichtbaren Schwanz haben sie nicht. Sie sind damit deutlich größer als Hamster, aber kleiner als Kaninchen. Männchen werden etwas größer und schwerer als Weibchen.
          </p>
        </section>

        <hr className="border-yellow-200" />

        <section>
          <h2 className="text-lg font-bold text-yellow-800 inline">Aussehen: </h2>
          <p className="text-gray-700 leading-relaxed inline">
            Meerschweinchen haben einen kompakten, runden Körper mit kurzen Beinen und großen, dunklen Augen. Ihr Fell kann kurz und glatt oder lang und lockig sein, je nach Rasse. Es gibt sie in vielen Farben: braun, schwarz, weiß, rot, dreifarbig oder gescheckt. Ihre kleinen runden Ohren stehen seitlich ab.
          </p>
        </section>

        <hr className="border-yellow-200" />

        <section>
          <h2 className="text-lg font-bold text-yellow-800 inline">Lebensraum: </h2>
          <p className="text-gray-700 leading-relaxed inline">
            Meerschweinchen stammen aus den Anden in Südamerika. Dort leben Wildmeerschweinchen in Graslandschaften und felsigen Gebieten in kleinen Gruppen. Schon vor über 3.000 Jahren wurden sie von den Inkas als Haustiere gehalten. Als Haustiere brauchen sie ein geräumiges Gehege und die Gesellschaft von Artgenossen.
          </p>
        </section>

        <hr className="border-yellow-200" />

        <section>
          <h2 className="text-lg font-bold text-yellow-800 inline">Nahrung: </h2>
          <p className="text-gray-700 leading-relaxed inline">
            Das Wichtigste im Speiseplan ist Heu — es sollte immer verfügbar sein. Dazu brauchen Meerschweinchen täglich frisches Gemüse und Kräuter. Besonders wichtig ist Vitamin C, denn genau wie Menschen können Meerschweinchen es nicht selbst herstellen. Paprika, Petersilie und Brokkoli sind gute Vitamin-C-Lieferanten.
          </p>
        </section>

        <hr className="border-yellow-200" />

        <section>
          <h2 className="text-lg font-bold text-yellow-800 inline">Feinde: </h2>
          <p className="text-gray-700 leading-relaxed inline">
            In Südamerika werden Wildmeerschweinchen von Greifvögeln, Schlangen, Füchsen und Wildkatzen gejagt. Als Fluchttiere sind sie sehr aufmerksam und schreckhaft. Bei Gefahr erstarren sie zunächst und flüchten dann blitzschnell in ein Versteck. Auch als Haustiere behalten sie dieses vorsichtige Verhalten bei.
          </p>
        </section>

        <hr className="border-yellow-200" />

        <section>
          <h2 className="text-lg font-bold text-yellow-800 inline">Besonderheiten: </h2>
          <p className="text-gray-700 leading-relaxed inline">
            Meerschweinchen sind wahre Plaudertaschen! Sie kommunizieren mit vielen verschiedenen Lauten: Quietschen bedeutet Aufregung, Gurren zeigt Wohlbefinden, und lautes Pfeifen heißt „Ich habe Hunger!". Wenn sie sich freuen, springen sie wild in die Luft — das nennt man „Popcornen". Ihr Name kommt daher, dass sie „über das Meer" nach Europa kamen und quiekende Geräusche wie Schweinchen machen.
          </p>
        </section>

        <hr className="border-yellow-200" />

        <section>
          <h2 className="text-lg font-bold text-yellow-800 inline">Vermehrung: </h2>
          <p className="text-gray-700 leading-relaxed inline">
            Meerschweinchen sind mit 59 bis 72 Tagen ungewöhnlich lange trächtig für so kleine Tiere. Dafür kommen die 1 bis 6 Jungen schon voll entwickelt zur Welt: Sie haben Fell, offene Augen und können sofort laufen und feste Nahrung fressen. Trotzdem werden sie noch etwa 3 Wochen von der Mutter gesäugt. Dieses sogenannte Nestflüchter-Verhalten ist für Nagetiere sehr ungewöhnlich.
          </p>
        </section>
      </div>
    </div>
  );
}
