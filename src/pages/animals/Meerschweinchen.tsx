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

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          Meerschweinchen stammen aus den Anden in Südamerika, wo Wildmeerschweinchen in Graslandschaften und felsigen Gebieten in kleinen Gruppen leben. Schon vor über 3.000 Jahren wurden sie von den Inkas als Haustiere gehalten. Ihr Name kommt daher, dass sie „über das Meer" nach Europa kamen und quiekende Geräusche wie Schweinchen machen. Meerschweinchen werden 20 bis 35 Zentimeter lang und wiegen zwischen 700 und 1.200 Gramm. Einen sichtbaren Schwanz haben sie nicht.
        </p>
        <p>
          Meerschweinchen haben einen kompakten, runden Körper mit kurzen Beinen und großen, dunklen Augen. Ihr Fell kann kurz und glatt oder lang und lockig sein, je nach Rasse, und es gibt sie in vielen Farben: braun, schwarz, weiß, rot, dreifarbig oder gescheckt. Ihre kleinen runden Ohren stehen seitlich ab.
        </p>
        <p>
          Das Wichtigste im Speiseplan ist Heu — es sollte immer verfügbar sein. Dazu brauchen Meerschweinchen täglich frisches Gemüse und Kräuter. Besonders wichtig ist Vitamin C, denn genau wie Menschen können Meerschweinchen es nicht selbst herstellen. Paprika, Petersilie und Brokkoli sind gute Vitamin-C-Lieferanten. Als Haustiere brauchen sie unbedingt die Gesellschaft von Artgenossen, denn sie sind sehr soziale Tiere.
        </p>
        <p>
          Meerschweinchen sind wahre Plaudertaschen! Sie kommunizieren mit vielen verschiedenen Lauten: Quietschen bedeutet Aufregung, Gurren zeigt Wohlbefinden, und lautes Pfeifen heißt „Ich habe Hunger!". Wenn sie sich freuen, springen sie wild in die Luft — das nennt man „Popcornen". In Südamerika werden Wildmeerschweinchen von Greifvögeln, Schlangen, Füchsen und Wildkatzen gejagt. Als Fluchttiere sind sie sehr aufmerksam und erstarren bei Gefahr zunächst, bevor sie blitzschnell in ein Versteck flüchten.
        </p>
        <p>
          Meerschweinchen sind mit 59 bis 72 Tagen ungewöhnlich lange trächtig für so kleine Tiere. Dafür kommen die 1 bis 6 Jungen schon voll entwickelt zur Welt: Sie haben Fell, offene Augen und können sofort laufen und feste Nahrung fressen. Trotzdem werden sie noch etwa 3 Wochen von der Mutter gesäugt. Dieses sogenannte Nestflüchter-Verhalten ist für Nagetiere sehr ungewöhnlich.
        </p>
      </div>
    </div>
  );
}
