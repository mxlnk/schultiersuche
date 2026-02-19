import { Link } from "react-router-dom";

export default function Distelfalter() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/" className="text-orange-600 hover:underline text-sm">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-4 mb-8 bg-gradient-to-r from-orange-200 via-rose-100 to-amber-100 rounded-xl p-6 text-center">
        <h1 className="text-3xl font-bold text-orange-900">Distelfalter</h1>
        <p className="text-rose-700 italic mt-1">Vanessa cardui</p>
      </div>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          Der Distelfalter ist der am weitesten verbreitete Schmetterling der Welt — er kommt auf allen Kontinenten vor, außer in der Antarktis und Südamerika. Er lebt auf offenen Wiesen, in Gärten, an Feldrändern und sogar in Gebirgen bis über 3.000 Meter Höhe. In Europa ist er vor allem im Sommer anzutreffen. Mit einer Flügelspannweite von 5 bis 6 Zentimetern gehört er zu den mittelgroßen Tagfaltern.
        </p>
        <p>
          Die Oberseite seiner Flügel ist orange-braun mit schwarzen Flecken und weißen Punkten an den Flügelspitzen. Die Unterseite ist dezenter gefärbt mit einem feinen Muster aus Braun, Beige und kleinen Augenflecken, das als Tarnung dient. Wenn der Falter seine Flügel zusammenklappt, sieht er aus wie ein trockenes Blatt und ist für Feinde kaum zu erkennen. Die Raupe ist dunkel mit hellen Streifen und hat verzweigte Dornen am Körper, die sie vor Angreifern schützen.
        </p>
        <p>
          Erwachsene Distelfalter trinken mit ihrem langen Rüssel Nektar aus Blüten, besonders gerne von Disteln, Lavendel, Sommerflieder und Klee. Die Raupen fressen vor allem die Blätter von Disteln und Brennnesseln. Vögel, Spinnen und Libellen jagen den Distelfalter, und Schlupfwespen legen ihre Eier in die Raupen. Die Raupen bauen ein feines Gespinst um sich herum, das ihnen zusätzlichen Schutz bietet.
        </p>
        <p>
          Die größte Besonderheit des Distelfalters ist seine unglaubliche Wanderung. Jedes Frühjahr fliegen Millionen von Distelfaltern von Nordafrika über das Mittelmeer nach Europa — eine Strecke von bis zu 3.000 Kilometern! Dabei überqueren sie sogar die Alpen. Diese Reise erstreckt sich über mehrere Generationen: Die Falter, die in Afrika starten, sind nicht dieselben, die in Nordeuropa ankommen. Ihre Nachkommen setzen die Reise fort.
        </p>
        <p>
          Das Weibchen legt einzelne, winzige Eier auf die Oberseite von Blättern, bevorzugt auf Disteln. Nach wenigen Tagen schlüpft eine kleine Raupe, die sich in ein schützendes Blattgespinst einspinnt und dort frisst und wächst. Nach mehreren Häutungen verpuppt sich die Raupe und bildet eine sogenannte Stürzpuppe, die frei an einem Faden hängt. Nach etwa 10 Tagen schlüpft der fertige Schmetterling. Vom Ei bis zum Falter dauert es nur etwa einen Monat.
        </p>
      </div>
    </div>
  );
}
