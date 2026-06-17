import { Link } from "react-router-dom";

export default function Biene() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-amber-100 hover:bg-amber-200 text-amber-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-amber-200 via-yellow-100 to-orange-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🐝</div>
        <h1 className="text-3xl md:text-4xl font-black text-amber-900">Biene</h1>
        <p className="text-amber-600 italic mt-1 text-base md:text-lg font-semibold">Apis mellifera — Honigbiene</p>
      </div>

      <img
        src={import.meta.env.BASE_URL + "biene.jpg"}
        alt="Biene"
        className="w-full rounded-2xl shadow-md mb-8 object-cover max-h-96"
      />

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        <p>Die Biene ist ein Insekt und einer der wichtigsten Bestäuber der Welt. Sie ist etwa so groß wie eine Weintraube, summt fröhlich von Blüte zu Blüte und sammelt dabei Nektar und Pollen. Zu Hause lebt sie in einem Bienenstock, wo ein ganzes „Volk" mit tausenden von Bienen gemeinsam arbeitet.</p>
        <p>Wenn eine Biene eine Blüte besucht, bleiben winzige Pollenkörner an ihr haften. Die trägt sie zur nächsten Blüte — und bestäubt sie so. Nur durch diese Bestäubung können Pflanzen Früchte und Samen bilden. Ohne Bienen gäbe es viel weniger Äpfel, Erdbeeren, Tomaten und bunte Blumen. Deshalb sind Bienen so schützenswert: Sie sichern den Fortbestand der gesamten Pflanzenwelt.</p>
        <p>Wusstest du, dass Bienen sogar „tanzen", um ihren Schwestern zu zeigen, wo es Nektar gibt? Mit dem sogenannten „Schwänzeltanz" erklären sie Richtung und Entfernung — ganz ohne Worte! Und aus dem gesammelten Nektar stellen sie Honig her, den Menschen seit Jahrtausenden lieben.</p>
      </div>
    </div>
  );
}
