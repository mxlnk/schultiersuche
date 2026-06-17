import { Link } from "react-router-dom";

export default function Hummel() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-yellow-200 via-amber-100 to-stone-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🐝</div>
        <h1 className="text-3xl md:text-4xl font-black text-yellow-900">Hummel</h1>
        <p className="text-yellow-700 italic mt-1 text-base md:text-lg font-semibold">Bombus</p>
      </div>

      <img
        src={import.meta.env.BASE_URL + "hummel.jpg"}
        alt="Hummel"
        className="w-full rounded-2xl shadow-md mb-8 object-cover max-h-96"
      />

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        <p>Die Hummel ist ein pelziges Insekt und ein besonders fleißiger Bestäuber. Mit ihrem dicken, kuschelig aussehenden Körper und ihrem lauten „Brumm-Brumm" ist sie leicht zu erkennen. Im Gegensatz zur Honigbiene wirkt sie fast ein bisschen wie ein fliegender Teddybär.</p>
        <p>Wie die Biene bestäubt die Hummel unzählige Blüten und sichert so den Fortbestand der Pflanzenwelt. Doch sie hat eine ganz besondere Stärke: Hummeln fliegen schon früh im Jahr und sogar bei Kälte und Regen, wenn Bienen noch gemütlich im Nest bleiben. Deshalb sind Hummeln besonders wertvoll und schützenswert — ohne sie würden viele Pflanzen gar nicht bestäubt werden.</p>
        <p>Hummeln können sich vor dem Abflug „aufwärmen", indem sie ihre Flugmuskeln zittern lassen — wie ein kleines Wärmekraftwerk! Obwohl sie einen Stachel haben, sind Hummeln sehr friedlich und stechen fast nie. Man kann sie also ganz entspannt beim Blütenbesuch beobachten.</p>
      </div>
    </div>
  );
}
