import { Link } from "react-router-dom";

export default function Stockente() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-teal-100 hover:bg-teal-200 text-teal-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-teal-100 via-emerald-50 to-sky-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🦆</div>
        <h1 className="text-3xl md:text-4xl font-black text-teal-900">Stockente</h1>
        <p className="text-teal-600 italic mt-1 text-base md:text-lg font-semibold">Anas platyrhynchos</p>
      </div>

      <img
        src={import.meta.env.BASE_URL + "stockente.jpg"}
        alt="Stockente"
        className="w-full rounded-2xl shadow-md mb-8 object-cover max-h-96"
      />

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        <p>Die Stockente ist die bekannteste Wildente in Deutschland und lebt an fast jedem Teich, See oder Fluss. Das Männchen, der „Erpel", trägt einen prachtvoll glänzend grün-blauen Kopf, als hätte jemand Öl auf sein Federkleid gegossen. Das Weibchen dagegen ist braun und unscheinbar — das ist seine Tarnung, damit es ungestört auf dem Nest sitzen kann.</p>
        <p>Die Stockente ist wie ein „Staubsauger des Wassers": Sie frisst Algen, Wasserlinsen und winzige Pflanzen und hält das Wasser dadurch sauber. Das ist wichtig, weil zu viele Algen den Sauerstoff im Wasser aufbrauchen würden — und dann könnten die Fische nicht mehr atmen. Wer eine Stockente schützt, schützt also gleichzeitig das ganze Leben im und am Wasser.</p>
        <p>Besonders lustig sieht die Stockente aus, wenn sie „gründelt": Sie taucht den Kopf ins Wasser und streckt den Po in die Luft, um am Grund nach Futter zu suchen. Und ihre Küken? Die watscheln am ersten Lebenstag sofort hinter ihrer Mutter her — und können von Anfang an schwimmen!</p>
      </div>
    </div>
  );
}
