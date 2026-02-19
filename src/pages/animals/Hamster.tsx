import { Link } from "react-router-dom";

export default function Hamster() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/" className="text-orange-600 hover:underline text-sm">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-4 mb-8 bg-gradient-to-r from-orange-100 to-amber-50 rounded-lg p-6">
        <h1 className="text-3xl font-bold text-orange-900">Hamster</h1>
        <p className="text-orange-700 italic mt-1">Mesocricetus auratus</p>
      </div>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          Der Goldhamster stammt ursprünglich aus den trockenen Steppen Syriens, wo er in selbst gegrabenen Erdbauten mit mehreren Kammern lebt — für Vorräte, zum Schlafen und als Toilette. Als Haustiere brauchen Hamster ein geräumiges Gehege mit viel Einstreu zum Buddeln und Verstecken. Der Goldhamster wird etwa 12 bis 18 Zentimeter lang und wiegt zwischen 100 und 180 Gramm. Zwerghamster sind mit 7 bis 10 Zentimetern noch kleiner. Der Schwanz ist nur etwa 1 Zentimeter kurz und fällt kaum auf.
        </p>
        <p>
          Hamster haben einen rundlichen Körper mit großen Backentaschen, in denen sie Futter transportieren können — und zwar erstaunlich viel: bis zur Hälfte ihres eigenen Körpergewichts! Ihr Fell ist bei Goldhamstern goldbraun auf dem Rücken und weiß am Bauch. Die Augen sind groß und dunkel, die Ohren klein und rund. Der Name „Hamster" kommt übrigens vom Wort „hamstern", also Vorräte sammeln.
        </p>
        <p>
          Hamster fressen Samen, Körner, Nüsse und frisches Gemüse. In der Natur fressen sie auch kleine Insekten. Sie sammeln Futter in ihren Backentaschen und tragen es in ihre Vorratskammer. Als Haustiere bekommen sie spezielles Hamsterfutter, ergänzt durch frisches Gemüse wie Gurke und Möhre. Hamster sind Einzelgänger und sollten alleine gehalten werden. Sie sind nachtaktiv und werden erst in der Dämmerung richtig munter.
        </p>
        <p>
          In der Natur haben Hamster viele Feinde: Greifvögel wie Eulen und Bussarde jagen sie von oben, am Boden lauern Füchse, Wiesel und Schlangen. Durch ihre Erdbauten und ihre nachtaktive Lebensweise schützen sie sich vor vielen dieser Gefahren.
        </p>
        <p>
          Hamster haben eine der kürzesten Tragzeiten unter den Säugetieren: nur 16 bis 18 Tage. Pro Wurf kommen 4 bis 12 Junge zur Welt. Die Babys sind nackt, blind und wiegen nur wenige Gramm. Nach etwa zwei Wochen öffnen sie die Augen, und nach drei bis vier Wochen sind sie bereits selbstständig.
        </p>
      </div>
    </div>
  );
}
