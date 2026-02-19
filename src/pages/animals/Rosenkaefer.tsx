import { Link } from "react-router-dom";

export default function Rosenkaefer() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-emerald-100 hover:bg-emerald-200 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-emerald-200 via-green-100 to-lime-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🪲</div>
        <h1 className="text-3xl md:text-4xl font-black text-emerald-900">Rosenkäfer</h1>
        <p className="text-emerald-600 italic mt-1 text-base md:text-lg font-semibold">Cetonia aurata</p>
      </div>

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        <p>
          Der Goldglänzende Rosenkäfer ist ein wahres Schmuckstück unter den Insekten. Seine Flügeldecken schimmern metallisch grün-golden und glänzen wie poliertes Metall. Je nach Lichteinfall schimmern sie auch kupfern oder bläulich. Dieses Leuchten entsteht nicht durch Farbpigmente, sondern durch die besondere Struktur der Oberfläche, die das Licht bricht — ähnlich wie bei einer Seifenblase. Auf der Unterseite ist er kupferfarben mit weißen Härchen. Der Rosenkäfer wird 14 bis 20 Millimeter groß und hat einen breiten, flachen Körper.
        </p>
        <p>
          Rosenkäfer leben in Gärten, auf Wiesen und an Waldrändern in ganz Europa. Man findet sie besonders häufig an sonnigen Plätzen auf blühenden Rosen, Holunder und anderen Blütenpflanzen, wo sie sich von Pollen, Nektar und dem Saft reifer Früchte ernähren. Sie sitzen gerne tief in großen Blüten und fressen dort den Pollen. Der Goldglänzende Rosenkäfer steht in Deutschland unter Naturschutz und darf nicht gefangen oder getötet werden.
        </p>
        <p>
          Der Rosenkäfer hat eine einzigartige Fähigkeit: Er kann fliegen, ohne seine harten Flügeldecken zu öffnen! Dafür hat er seitliche Spalten, durch die er seine Hinterflügel ausklappen kann. Das macht ihn zu einem besonders wendigen Flieger. Sein schillernder Glanz hat Menschen schon im alten Ägypten fasziniert. Vögel wie Elstern und Krähen fressen gelegentlich Rosenkäfer, und auch Eidechsen und Igel können ihnen gefährlich werden.
        </p>
        <p>
          Das Weibchen legt seine Eier in Komposthaufen oder verrottende Baumstümpfe. Die Larven — dicke, weiße Engerlinge mit braunem Kopf — brauchen erstaunliche 2 bis 3 Jahre für ihre Entwicklung. Sie ernähren sich von verrottenden Pflanzenresten und Kompost und helfen damit sogar beim Humusaufbau im Garten. Die Engerlinge verpuppen sich in einem stabilen Kokon aus Erde und Holzresten. Nach einigen Wochen schlüpft der fertige Käfer, der dann nur noch wenige Monate zu leben hat. Die meiste Zeit seines Lebens verbringt der Rosenkäfer also als Larve unter der Erde.
        </p>
      </div>
    </div>
  );
}
