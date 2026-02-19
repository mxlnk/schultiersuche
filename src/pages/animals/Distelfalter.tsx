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

      <div className="space-y-5">
        <section className="pl-4 border-l-4 border-orange-300">
          <h2 className="text-lg font-semibold text-orange-800 mb-1">Größe</h2>
          <p className="text-gray-700 leading-relaxed">
            Der Distelfalter hat eine Flügelspannweite von 5 bis 6 Zentimetern. Sein Körper ist nur etwa 2 Zentimeter lang und dicht behaart. Damit gehört er zu den mittelgroßen Tagfaltern. Die Raupe wird bis zu 4 Zentimeter lang, bevor sie sich verpuppt.
          </p>
        </section>

        <section className="pl-4 border-l-4 border-rose-300">
          <h2 className="text-lg font-semibold text-rose-800 mb-1">Aussehen</h2>
          <p className="text-gray-700 leading-relaxed">
            Die Oberseite der Flügel ist orange-braun mit schwarzen Flecken und weißen Punkten an den Flügelspitzen. Die Unterseite ist dezenter gefärbt mit einem feinen Muster aus Braun, Beige und kleinen Augenflecken, das als Tarnung dient. Die Raupe ist dunkel mit hellen Streifen und hat verzweigte Dornen am Körper.
          </p>
        </section>

        <section className="pl-4 border-l-4 border-amber-300">
          <h2 className="text-lg font-semibold text-amber-800 mb-1">Lebensraum</h2>
          <p className="text-gray-700 leading-relaxed">
            Der Distelfalter ist der am weitesten verbreitete Schmetterling der Welt — er kommt auf allen Kontinenten vor, außer in der Antarktis und Südamerika. Er lebt auf offenen Wiesen, in Gärten, an Feldrändern und sogar in Gebirgen bis über 3.000 Meter Höhe. In Europa ist er vor allem im Sommer anzutreffen.
          </p>
        </section>

        <section className="pl-4 border-l-4 border-orange-300">
          <h2 className="text-lg font-semibold text-orange-800 mb-1">Nahrung</h2>
          <p className="text-gray-700 leading-relaxed">
            Erwachsene Distelfalter trinken mit ihrem langen Rüssel Nektar aus Blüten. Besonders gerne besuchen sie Disteln, Lavendel, Sommerflieder und Klee. Die Raupen fressen vor allem die Blätter von Disteln und Brennnesseln, aber auch Malven und andere Kräuter. Dank ihres Rüssels kommen sie auch an tief sitzenden Nektar heran.
          </p>
        </section>

        <section className="pl-4 border-l-4 border-rose-300">
          <h2 className="text-lg font-semibold text-rose-800 mb-1">Feinde</h2>
          <p className="text-gray-700 leading-relaxed">
            Vögel, Spinnen und Libellen jagen den Distelfalter. Schlupfwespen legen ihre Eier in die Raupen und töten sie dadurch. Die Raupen schützen sich durch ihre Dornen und bauen ein feines Gespinst um sich herum. Die Flügelunterseite dient als Tarnung: Wenn der Falter seine Flügel zusammenklappt, sieht er aus wie ein trockenes Blatt.
          </p>
        </section>

        <section className="pl-4 border-l-4 border-amber-300">
          <h2 className="text-lg font-semibold text-amber-800 mb-1">Besonderheiten</h2>
          <p className="text-gray-700 leading-relaxed">
            Der Distelfalter ist einer der größten Wanderer der Insektenwelt. Jedes Frühjahr fliegen Millionen von Distelfaltern von Nordafrika über das Mittelmeer nach Europa — eine Strecke von bis zu 3.000 Kilometern! Dabei überqueren sie sogar die Alpen. Diese Reise erstreckt sich über mehrere Generationen: Die Falter, die in Afrika starten, sind nicht dieselben, die in Nordeuropa ankommen. Ihre Nachkommen setzen die Reise fort.
          </p>
        </section>

        <section className="pl-4 border-l-4 border-orange-300">
          <h2 className="text-lg font-semibold text-orange-800 mb-1">Vermehrung</h2>
          <p className="text-gray-700 leading-relaxed">
            Das Weibchen legt einzelne, winzige Eier auf die Oberseite von Blättern, bevorzugt auf Disteln. Nach wenigen Tagen schlüpft eine kleine Raupe, die sich in ein schützendes Blattgespinst einspinnt und dort frisst und wächst. Nach mehreren Häutungen verpuppt sich die Raupe und bildet eine sogenannte Stürzpuppe, die frei an einem Faden hängt. Nach etwa 10 Tagen schlüpft der fertige Schmetterling. Vom Ei bis zum Falter dauert es nur etwa einen Monat.
          </p>
        </section>
      </div>
    </div>
  );
}
