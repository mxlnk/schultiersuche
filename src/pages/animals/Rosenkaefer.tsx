import { Link } from "react-router-dom";

export default function Rosenkaefer() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/" className="text-emerald-600 hover:underline text-sm">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-4 mb-8 bg-emerald-800 rounded-lg p-6 text-white border-b-4 border-yellow-500">
        <h1 className="text-3xl font-bold">Rosenkäfer</h1>
        <p className="text-emerald-300 italic mt-1">Cetonia aurata</p>
      </div>

      <div className="space-y-5">
        <section className="border-t-2 border-emerald-300 pt-3">
          <h2 className="text-lg font-semibold text-emerald-800 mb-1">Größe</h2>
          <p className="text-gray-700 leading-relaxed">
            Der Goldglänzende Rosenkäfer wird 14 bis 20 Millimeter groß. Damit ist er deutlich größer als ein Marienkäfer, aber kleiner als ein Hirschkäfer. Sein breiter, flacher Körper ist von oben betrachtet fast rechteckig mit abgerundeten Ecken.
          </p>
        </section>

        <section className="border-t-2 border-emerald-300 pt-3">
          <h2 className="text-lg font-semibold text-emerald-800 mb-1">Aussehen</h2>
          <p className="text-gray-700 leading-relaxed">
            Der Rosenkäfer ist ein wahres Schmuckstück unter den Insekten. Seine Flügeldecken schimmern metallisch grün-golden und glänzen wie poliertes Metall. Je nach Lichteinfall schimmern sie auch kupfern oder bläulich. Dieses Leuchten entsteht nicht durch Farbpigmente, sondern durch die besondere Struktur der Oberfläche, die das Licht bricht. Auf der Unterseite ist er kupferfarben mit weißen Härchen.
          </p>
        </section>

        <section className="border-t-2 border-emerald-300 pt-3">
          <h2 className="text-lg font-semibold text-emerald-800 mb-1">Lebensraum</h2>
          <p className="text-gray-700 leading-relaxed">
            Rosenkäfer leben in Gärten, auf Wiesen und an Waldrändern in ganz Europa. Man findet sie besonders häufig an sonnigen Plätzen auf blühenden Rosen, Holunder und anderen Blütenpflanzen. Ihre Larven entwickeln sich in Komposthaufen, morschem Holz und in der Erde unter verrottendem Laub.
          </p>
        </section>

        <section className="border-t-2 border-emerald-300 pt-3">
          <h2 className="text-lg font-semibold text-emerald-800 mb-1">Nahrung</h2>
          <p className="text-gray-700 leading-relaxed">
            Erwachsene Rosenkäfer ernähren sich von Blütenpollen, Nektar und dem Saft reifer Früchte. Sie sitzen gerne tief in großen Blüten und fressen dort den Pollen. Die Larven, die Engerlinge genannt werden, fressen dagegen verrottende Pflanzenreste und Kompost. Damit helfen sie sogar beim Humusaufbau im Garten.
          </p>
        </section>

        <section className="border-t-2 border-emerald-300 pt-3">
          <h2 className="text-lg font-semibold text-emerald-800 mb-1">Feinde</h2>
          <p className="text-gray-700 leading-relaxed">
            Vögel wie Elstern und Krähen fressen gelegentlich Rosenkäfer. Auch Eidechsen und Igel können ihnen gefährlich werden. Die im Boden lebenden Larven werden manchmal von Maulwürfen und Spitzmäusen gefressen. Der metallische Glanz der Käfer könnte eine Rolle bei der Abschreckung spielen, da er Fressfeinde irritiert.
          </p>
        </section>

        <section className="border-t-2 border-emerald-300 pt-3">
          <h2 className="text-lg font-semibold text-emerald-800 mb-1">Besonderheiten</h2>
          <p className="text-gray-700 leading-relaxed">
            Der Rosenkäfer hat eine einzigartige Fähigkeit: Er kann fliegen, ohne seine harten Flügeldecken zu öffnen! Dafür hat er seitliche Spalten, durch die er seine Hinterflügel ausklappen kann. Das macht ihn zu einem besonders wendigen Flieger. Der Goldglänzende Rosenkäfer steht in Deutschland unter Naturschutz und darf nicht gefangen oder getötet werden. Sein schillernder Glanz hat Menschen schon im alten Ägypten fasziniert.
          </p>
        </section>

        <section className="border-t-2 border-emerald-300 pt-3">
          <h2 className="text-lg font-semibold text-emerald-800 mb-1">Vermehrung</h2>
          <p className="text-gray-700 leading-relaxed">
            Das Weibchen legt seine Eier in Komposthaufen oder verrottende Baumstümpfe. Die Larven — dicke, weiße Engerlinge mit braunem Kopf — brauchen erstaunliche 2 bis 3 Jahre für ihre Entwicklung. Sie verpuppen sich in einem stabilen Kokon aus Erde und Holzresten. Nach einigen Wochen schlüpft der fertige Käfer, der dann nur noch wenige Monate zu leben hat. Die meiste Zeit seines Lebens verbringt der Rosenkäfer also als Larve.
          </p>
        </section>
      </div>
    </div>
  );
}
