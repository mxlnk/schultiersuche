import { Link } from "react-router-dom";

export default function Hoeckerschwan() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-sky-100 hover:bg-sky-200 text-sky-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-sky-100 via-blue-50 to-slate-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🦢</div>
        <h1 className="text-3xl md:text-4xl font-black text-sky-900">Höckerschwan</h1>
        <p className="text-sky-600 italic mt-1 text-base md:text-lg font-semibold">Cygnus olor</p>
      </div>

      <img
        src={import.meta.env.BASE_URL + "hoeckerschwan.jpg"}
        alt="Höckerschwan"
        className="w-full rounded-2xl shadow-md mb-8 object-cover max-h-96"
      />

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        <p>Der Höckerschwan ist ein großer, strahlend weißer Wasservogel mit einem langen, eleganten Hals und einem orangen Schnabel — und genau über diesem Schnabel sitzt ein schwarzer „Höcker", der ihm seinen Namen gegeben hat. Er gehört zu den schwersten flugfähigen Vögeln überhaupt.</p>
        <p>Der Höckerschwan taucht seinen langen Hals ins Wasser und frisst Wasserpflanzen, Algen und kleine Wasserinsekten. Das klingt unscheinbar, ist aber richtig wichtig: Ohne ihn könnten Teiche und Seen von Pflanzen überwuchert werden. Indem er mitfrisst, hilft er dabei, das Gleichgewicht im Wasser zu erhalten.</p>
        <p>Schwäne sind für ihre Treue bekannt — sie bleiben ihrem Partner oft ein ganzes Leben lang zusammen. Die Jungvögel sind beim Schlüpfen noch grau gefärbt und sehen ganz anders aus als ihre weißen Eltern. Erst nach etwa zwei Jahren bekommen sie ihr schönes weißes Gefieder.</p>
      </div>
    </div>
  );
}
