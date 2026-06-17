import { Link } from "react-router-dom";

export default function Kroete() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-lime-100 hover:bg-lime-200 text-lime-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-lime-200 via-stone-100 to-amber-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🐸</div>
        <h1 className="text-3xl md:text-4xl font-black text-lime-900">Kröte</h1>
        <p className="text-lime-700 italic mt-1 text-base md:text-lg font-semibold">Bufo bufo — Erdkröte</p>
      </div>

      <img
        src={import.meta.env.BASE_URL + "kroete.jpg"}
        alt="Kröte"
        className="w-full rounded-2xl shadow-md mb-8 object-cover max-h-96"
      />

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        <p>Die Kröte ist — genau wie der Frosch — ein „Lurch" und damit eine Amphibie. Sie verbringt den Großteil ihres Lebens an Land, geht aber jedes Jahr zum Eierlegen ins Wasser. Man erkennt sie leicht an ihrer warzigen, etwas trockeneren Haut und daran, dass sie eher gemächlich kriecht, statt weit zu springen — ein bisschen wie eine kleine, runde Wanderin auf kurzen Beinen.</p>
        <p>Die Kröte ist der beste Freund aller Gärtnerinnen und Gärtner: Jede Nacht frisst sie Schnecken, Käfer, Würmer und Insekten und schützt so Pflanzen und hält das Gleichgewicht im Ökosystem. Weil sie so nützlich ist und gleichzeitig selbst von vielen Tieren gefressen wird, ist sie ein wichtiges Glied in der Nahrungskette — und deshalb unbedingt schützenswert.</p>
        <p>Jedes Frühjahr passiert etwas Erstaunliches: Tausende Kröten machen sich gleichzeitig auf den Weg zu ihrem Geburtsgewässer — manchmal müssen sie dabei eine Straße überqueren. Zum Glück helfen viele Menschen ihnen dabei: Mit langen „Krötenzäunen" werden die Tiere aufgefangen und sicher auf die andere Seite getragen. Das nennt man „Krötenwanderung" — und man kann dabei sogar selbst mitmachen!</p>
      </div>
    </div>
  );
}
