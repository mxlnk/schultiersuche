import { Link } from "react-router-dom";

export default function Schildkroete() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/" className="text-teal-600 hover:underline text-sm">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-4 mb-8 bg-teal-700 rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold">Schildkröte</h1>
        <p className="text-teal-200 italic mt-1">Testudines</p>
      </div>

      <div className="space-y-0">
        <section className="bg-teal-50 p-5 border-l-2 border-teal-300">
          <h2 className="text-lg font-semibold text-teal-800 mb-1">Größe</h2>
          <p className="text-gray-700 leading-relaxed">
            Die Größe von Schildkröten ist je nach Art sehr unterschiedlich. Kleine Arten wie die Griechische Landschildkröte werden etwa 20 Zentimeter lang. Die riesige Lederschildkröte, eine Meeresschildkröte, kann über 2 Meter lang werden und mehr als 700 Kilogramm wiegen. Europäische Landschildkröten werden als Haustiere meist 15 bis 30 Zentimeter groß.
          </p>
        </section>

        <section className="p-5 border-l-2 border-teal-300">
          <h2 className="text-lg font-semibold text-teal-800 mb-1">Aussehen</h2>
          <p className="text-gray-700 leading-relaxed">
            Das auffälligste Merkmal ist der harte Panzer, der aus einem Rückenpanzer und einem Bauchpanzer besteht. Der Panzer ist mit dem Skelett der Schildkröte verwachsen. Ihre Haut ist schuppig und ledrig. Landschildkröten haben kräftige Beine mit Krallen, Meeresschildkröten haben Flossen. Schildkröten haben keine Zähne, sondern scharfe Hornschnäbel.
          </p>
        </section>

        <section className="bg-teal-50 p-5 border-l-2 border-teal-300">
          <h2 className="text-lg font-semibold text-teal-800 mb-1">Lebensraum</h2>
          <p className="text-gray-700 leading-relaxed">
            Schildkröten kommen fast überall auf der Welt in warmen Gebieten vor. Landschildkröten leben in trockenen Gegenden, Waldgebieten und Steppen. Süßwasserschildkröten findet man in Seen, Flüssen und Teichen. Meeresschildkröten leben in tropischen Ozeanen. In Deutschland werden besonders Griechische und Russische Landschildkröten als Haustiere gehalten.
          </p>
        </section>

        <section className="p-5 border-l-2 border-teal-300">
          <h2 className="text-lg font-semibold text-teal-800 mb-1">Nahrung</h2>
          <p className="text-gray-700 leading-relaxed">
            Die Nahrung hängt von der Art ab. Europäische Landschildkröten fressen hauptsächlich Wildkräuter, Gräser und Blätter. Wasserschildkröten ernähren sich von Fischen, Schnecken und Wasserpflanzen. Meeresschildkröten fressen je nach Art Quallen, Algen oder Krebstiere. Landschildkröten als Haustiere brauchen vor allem Wildkräuter und kalkhaltiges Futter für ihren Panzer.
          </p>
        </section>

        <section className="bg-teal-50 p-5 border-l-2 border-teal-300">
          <h2 className="text-lg font-semibold text-teal-800 mb-1">Feinde</h2>
          <p className="text-gray-700 leading-relaxed">
            Erwachsene Schildkröten haben dank ihres Panzers wenige Feinde. Junge Schildkröten und Eier sind jedoch stark bedroht: Vögel, Waschbären, Füchse und Ratten fressen sie gerne. Meeresschildkröten-Babys werden auf dem Weg zum Meer oft von Möwen erbeutet. Die größte Bedrohung für viele Schildkrötenarten ist heute der Mensch durch Umweltverschmutzung und Lebensraumzerstörung.
          </p>
        </section>

        <section className="p-5 border-l-2 border-teal-300">
          <h2 className="text-lg font-semibold text-teal-800 mb-1">Besonderheiten</h2>
          <p className="text-gray-700 leading-relaxed">
            Schildkröten gehören zu den ältesten Tiergruppen der Erde — sie lebten schon vor über 220 Millionen Jahren, noch vor den Dinosauriern! Manche Riesenschildkröten werden über 200 Jahre alt. Der Panzer ist Teil des Skeletts und wächst das ganze Leben lang mit. Viele Landschildkröten halten in kühlen Monaten eine Winterstarre, bei der ihr Stoffwechsel fast zum Stillstand kommt.
          </p>
        </section>

        <section className="bg-teal-50 p-5 border-l-2 border-teal-300">
          <h2 className="text-lg font-semibold text-teal-800 mb-1">Vermehrung</h2>
          <p className="text-gray-700 leading-relaxed">
            Alle Schildkröten legen Eier. Die Weibchen graben eine Grube in Sand oder Erde und legen dort 2 bis 12 Eier hinein, bei Meeresschildkröten sogar bis zu 200 Eier. Die Eier werden von der Sonne ausgebrütet. Je nach Art und Temperatur dauert es 60 bis 120 Tage, bis die Jungtiere schlüpfen. Spannend: Bei vielen Arten entscheidet die Temperatur im Nest, ob Männchen oder Weibchen schlüpfen.
          </p>
        </section>
      </div>
    </div>
  );
}
