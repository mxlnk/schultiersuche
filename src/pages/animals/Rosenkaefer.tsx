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

      <div className="text-gray-700 leading-relaxed space-y-4">
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
