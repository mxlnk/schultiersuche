import { Link } from "react-router-dom";

export default function Schildkroete() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-teal-100 hover:bg-teal-200 text-teal-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-teal-200 via-emerald-100 to-cyan-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🐢</div>
        <h1 className="text-3xl md:text-4xl font-black text-teal-900">Schildkröte</h1>
        <p className="text-teal-600 italic mt-1 text-base md:text-lg font-semibold">Testudines</p>
      </div>

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        <p>
          Schildkröten gehören zu den ältesten Tiergruppen der Erde — sie lebten schon vor über 220 Millionen Jahren, noch vor den Dinosauriern! Heute kommen sie fast überall auf der Welt in warmen Gebieten vor. Landschildkröten leben in trockenen Gegenden, Waldgebieten und Steppen, Süßwasserschildkröten findet man in Seen und Flüssen, und Meeresschildkröten durchqueren die tropischen Ozeane. In Deutschland werden besonders Griechische und Russische Landschildkröten als Haustiere gehalten.
        </p>
        <p>
          Die Größe von Schildkröten ist je nach Art sehr unterschiedlich. Kleine Arten wie die Griechische Landschildkröte werden etwa 20 Zentimeter lang, während die riesige Lederschildkröte über 2 Meter lang und mehr als 700 Kilogramm schwer werden kann. Das auffälligste Merkmal ist natürlich der harte Panzer, der aus einem Rückenpanzer und einem Bauchpanzer besteht und mit dem Skelett verwachsen ist. Ihre Haut ist schuppig und ledrig, und statt Zähnen haben sie scharfe Hornschnäbel. Landschildkröten besitzen kräftige Beine mit Krallen, Meeresschildkröten dagegen Flossen.
        </p>
        <p>
          Die Nahrung hängt von der Art ab: Europäische Landschildkröten fressen hauptsächlich Wildkräuter, Gräser und Blätter. Wasserschildkröten ernähren sich von Fischen, Schnecken und Wasserpflanzen, und Meeresschildkröten fressen je nach Art Quallen, Algen oder Krebstiere. Erwachsene Schildkröten haben dank ihres Panzers wenige natürliche Feinde, aber Eier und Jungtiere sind stark bedroht: Vögel, Waschbären, Füchse und Ratten fressen sie gerne. Die größte Bedrohung für viele Arten ist heute der Mensch durch Umweltverschmutzung.
        </p>
        <p>
          Manche Riesenschildkröten werden über 200 Jahre alt. Der Panzer wächst das ganze Leben lang mit, und viele Landschildkröten halten in kühlen Monaten eine Winterstarre, bei der ihr Stoffwechsel fast zum Stillstand kommt.
        </p>
        <p>
          Alle Schildkröten legen Eier. Die Weibchen graben eine Grube in Sand oder Erde und legen dort 2 bis 12 Eier hinein, bei Meeresschildkröten sogar bis zu 200. Die Eier werden von der Sonne ausgebrütet, und je nach Art und Temperatur dauert es 60 bis 120 Tage, bis die Jungtiere schlüpfen. Bei vielen Arten entscheidet sogar die Temperatur im Nest darüber, ob Männchen oder Weibchen schlüpfen.
        </p>
      </div>
    </div>
  );
}
