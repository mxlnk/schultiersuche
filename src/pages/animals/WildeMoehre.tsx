import { Link } from "react-router-dom";

export default function WildeMoehre() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-lime-100 hover:bg-lime-200 text-lime-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-lime-200 via-green-50 to-emerald-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🥕</div>
        <h1 className="text-3xl md:text-4xl font-black text-green-900">Wilde Möhre</h1>
        <p className="text-green-600 italic mt-1 text-base md:text-lg font-semibold">Daucus carota</p>
      </div>

      <img
        src={import.meta.env.BASE_URL + "wilde-moehre.jpg"}
        alt="Wilde Möhre"
        className="w-full rounded-2xl shadow-md mb-8 object-cover max-h-96"
      />

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        <p>
          Die Wilde Möhre ist die Urform unserer Karotte — und eine echte Wildblume! Ihre weißen Blüten wachsen in einer Dolde zusammen, und in der Mitte sitzt oft ein einzelnes dunkles Blümchen.
        </p>
        <p>
          Für Bienen, Schwebfliegen und Käfer ist sie ein wichtiger Treffpunkt: Sie holen sich Nektar und Pollen von den vielen kleinen Blüten. Deshalb ist es so wichtig, dass die Wilde Möhre auf unseren Wiesen wachsen darf.
        </p>
      </div>
    </div>
  );
}
