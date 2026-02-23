import { Link } from "react-router-dom";

export default function Goldfisch() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-sky-100 hover:bg-sky-200 text-sky-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-amber-100 via-sky-50 to-cyan-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🐠</div>
        <h1 className="text-3xl md:text-4xl font-black text-amber-800">Goldfisch</h1>
        <p className="text-sky-600 italic mt-1 text-base md:text-lg font-semibold">Carassius auratus</p>
      </div>

      <img
        src={import.meta.env.BASE_URL + "goldfisch.jpg"}
        alt="Goldfisch"
        className="w-full rounded-2xl shadow-md mb-8 object-cover max-h-96"
      />

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        <p>
          Der Goldfisch stammt ursprünglich aus Ostasien und lebte dort in langsam fließenden Gewässern und Teichen. Vor über 1.000 Jahren begannen die Menschen in China, ihn zu züchten, und heute lebt er als Haustier in Aquarien und Gartenteichen auf der ganzen Welt. Ein Goldfischglas ist übrigens viel zu klein — Goldfische brauchen mindestens ein 100-Liter-Aquarium.
        </p>
        <p>
          Im Aquarium werden Goldfische meist 10 bis 15 Zentimeter lang, in einem großen Teich können sie aber bis zu 35 Zentimeter erreichen. Der klassische Goldfisch ist leuchtend orange-golden gefärbt, durch Zucht gibt es heute aber auch weiße, rote, schwarze und mehrfarbige Goldfische. Manche Zuchtformen haben Schleierschwänze, Glupschaugen oder Beulen auf dem Kopf. Der Körper ist seitlich abgeflacht und hat glänzende Schuppen.
        </p>
        <p>
          Goldfische sind Allesfresser. In der Natur fressen sie Algen, Wasserpflanzen, kleine Insektenlarven und Würmer. Als Haustiere bekommen sie spezielles Goldfischfutter in Flocken- oder Granulatform. Ab und zu freuen sie sich über Leckerbissen wie gekochte Erbsen oder Mückenlarven. Im Gartenteich werden Goldfische von Reihern, Katzen und Waschbären gejagt, in natürlichen Gewässern von größeren Raubfischen und Eisvögeln.
        </p>
        <p>
          Das Gerücht, Goldfische hätten nur ein 3-Sekunden-Gedächtnis, ist falsch! Wissenschaftler haben bewiesen, dass sie sich monatelang an Dinge erinnern können und sogar Tricks lernen. Goldfische können außerdem mehr Farben sehen als Menschen — sie nehmen auch ultraviolettes und infrarotes Licht wahr. Bei guter Pflege können sie über 30 Jahre alt werden, der älteste bekannte Goldfisch wurde sogar 43 Jahre alt.
        </p>
        <p>
          Im Frühling, wenn das Wasser wärmer wird, beginnt die Laichzeit. Das Weibchen legt Hunderte bis Tausende winziger Eier an Wasserpflanzen ab, und das Männchen befruchtet sie im Wasser. Nach 5 bis 7 Tagen schlüpfen die Larven. Die Jungfische sind anfangs dunkel gefärbt und bekommen erst nach einigen Monaten ihre goldene Farbe.
        </p>
      </div>
    </div>
  );
}
