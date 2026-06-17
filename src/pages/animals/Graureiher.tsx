import { Link } from "react-router-dom";

export default function Graureiher() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-slate-200 via-sky-100 to-blue-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🐦</div>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900">Graureiher</h1>
        <p className="text-slate-600 italic mt-1 text-base md:text-lg font-semibold">Ardea cinerea</p>
      </div>

      <img
        src={import.meta.env.BASE_URL + "graureiher.jpg"}
        alt="Graureiher"
        className="w-full rounded-2xl shadow-md mb-8 object-cover max-h-96"
      />

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        <p>Der Graureiher ist ein großer, grauer Wasservogel mit einem langen Hals, langen Beinen und einem spitzen Schnabel — fast wie ein lebendiger Speer! Er steht oft völlig reglos im flachen Wasser an Teichen, Flüssen und Seen, als wäre er eingefroren.</p>
        <p>Mit seinem Schnabel fängt der Graureiher Fische, Frösche und Insekten. Dabei frisst er besonders oft kranke oder schwache Tiere, und das ist richtig wichtig: So hält er den Bestand im Gleichgewicht und sorgt dafür, dass Teiche und Flüsse gesund bleiben. Ohne den Graureiher würden die Gewässer aus dem Lot geraten.</p>
        <p>Das Beeindruckendste am Graureiher ist seine Geduld: Er kann minutenlang wie eine Statue im Wasser stehen — und dann blitzt sein Schnabel in Sekundenbruchteilen ins Wasser, um einen Fisch zu schnappen. Wenn er fliegt, zieht er den langen Hals zu einem „S" ein, damit das Gewicht besser verteilt ist.</p>
      </div>
    </div>
  );
}
