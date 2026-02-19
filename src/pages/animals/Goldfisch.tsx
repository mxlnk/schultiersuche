import { Link } from "react-router-dom";

export default function Goldfisch() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/" className="text-sky-600 hover:underline text-sm">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-4 mb-8 bg-gradient-to-r from-amber-100 to-sky-100 rounded-lg p-6">
        <h1 className="text-3xl font-bold text-amber-800">Goldfisch</h1>
        <p className="text-sky-700 italic mt-1">Carassius auratus</p>
      </div>

      <div className="space-y-0">
        <section className="bg-sky-50 p-5 rounded-t-lg">
          <h2 className="text-lg font-semibold text-sky-800 mb-1">Größe</h2>
          <p className="text-gray-700 leading-relaxed">
            Im Aquarium werden Goldfische meist 10 bis 15 Zentimeter lang. In einem großen Teich können sie aber bis zu 35 Zentimeter erreichen. Manche Zuchtformen bleiben kleiner, andere werden größer. Goldfische wachsen ihr ganzes Leben lang und passen ihre Größe an den verfügbaren Platz an.
          </p>
        </section>

        <section className="p-5">
          <h2 className="text-lg font-semibold text-amber-700 mb-1">Aussehen</h2>
          <p className="text-gray-700 leading-relaxed">
            Der klassische Goldfisch ist leuchtend orange-golden gefärbt — daher sein Name. Durch Zucht gibt es heute aber auch weiße, rote, schwarze und mehrfarbige Goldfische. Manche Zuchtformen haben Schleierschwänze, Glupschaugen oder Beulen auf dem Kopf. Der Körper ist seitlich abgeflacht und hat glänzende Schuppen.
          </p>
        </section>

        <section className="bg-sky-50 p-5">
          <h2 className="text-lg font-semibold text-sky-800 mb-1">Lebensraum</h2>
          <p className="text-gray-700 leading-relaxed">
            Goldfische stammen ursprünglich aus Ostasien und lebten dort in langsam fließenden Gewässern und Teichen. Vor über 1.000 Jahren begannen die Menschen in China, sie zu züchten. Heute leben sie als Haustiere in Aquarien und Gartenteichen auf der ganzen Welt. Ein Goldfischglas ist viel zu klein — sie brauchen mindestens ein 100-Liter-Aquarium.
          </p>
        </section>

        <section className="p-5">
          <h2 className="text-lg font-semibold text-amber-700 mb-1">Nahrung</h2>
          <p className="text-gray-700 leading-relaxed">
            Goldfische sind Allesfresser. In der Natur fressen sie Algen, Wasserpflanzen, kleine Insektenlarven und Würmer. Als Haustiere bekommen sie spezielles Goldfischfutter in Flocken- oder Granulatform. Ab und zu freuen sie sich über Leckerbissen wie gekochte Erbsen oder Mückenlarven. Wichtig: Goldfische sollten nur wenig auf einmal bekommen, da sie sehr gefräßig sind.
          </p>
        </section>

        <section className="bg-sky-50 p-5">
          <h2 className="text-lg font-semibold text-sky-800 mb-1">Feinde</h2>
          <p className="text-gray-700 leading-relaxed">
            Im Gartenteich werden Goldfische von Reihern, Katzen und Waschbären gejagt. In natürlichen Gewässern sind größere Raubfische, Eisvögel und Ringelnattern ihre Feinde. Im Aquarium sind sie vor Fressfeinden sicher, müssen aber vor schlechter Wasserqualität und Krankheiten geschützt werden.
          </p>
        </section>

        <section className="p-5">
          <h2 className="text-lg font-semibold text-amber-700 mb-1">Besonderheiten</h2>
          <p className="text-gray-700 leading-relaxed">
            Das Gerücht, Goldfische hätten nur ein 3-Sekunden-Gedächtnis, ist falsch! Wissenschaftler haben bewiesen, dass sie sich monatelang an Dinge erinnern können und sogar Tricks lernen. Goldfische können mehr Farben sehen als Menschen — sie nehmen auch ultraviolettes und infrarotes Licht wahr. Bei guter Pflege können sie über 30 Jahre alt werden. Der älteste bekannte Goldfisch wurde sogar 43 Jahre alt.
          </p>
        </section>

        <section className="bg-sky-50 p-5 rounded-b-lg">
          <h2 className="text-lg font-semibold text-sky-800 mb-1">Vermehrung</h2>
          <p className="text-gray-700 leading-relaxed">
            Im Frühling, wenn das Wasser wärmer wird, beginnt die Laichzeit. Das Weibchen legt Hunderte bis Tausende winziger Eier an Wasserpflanzen ab. Das Männchen befruchtet die Eier dann im Wasser. Nach 5 bis 7 Tagen schlüpfen die Larven. Die Jungfische sind anfangs dunkel gefärbt und bekommen erst nach einigen Monaten ihre goldene Farbe.
          </p>
        </section>
      </div>
    </div>
  );
}
