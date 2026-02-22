import { Link } from "react-router-dom";

export default function Meerschweinchen() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🐹</div>
        <h1 className="text-3xl md:text-4xl font-black text-yellow-900">Meerschweinchen</h1>
        <p className="text-yellow-700 italic mt-1 text-base md:text-lg font-semibold">Cavia porcellus</p>
      </div>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Meerschweinchen_2.jpg/640px-Meerschweinchen_2.jpg"
        alt="Meerschweinchen"
        className="w-full rounded-2xl shadow-md mb-8 object-cover max-h-96"
      />

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
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
