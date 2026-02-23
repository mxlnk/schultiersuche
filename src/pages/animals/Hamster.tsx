import { Link } from "react-router-dom";

export default function Hamster() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-orange-100 hover:bg-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🐹</div>
        <h1 className="text-3xl md:text-4xl font-black text-orange-900">Hamster</h1>
        <p className="text-orange-600 italic mt-1 text-base md:text-lg font-semibold">Mesocricetus auratus</p>
      </div>

      <img
        src={import.meta.env.BASE_URL + "hamster.jpg"}
        alt="Hamster"
        className="w-full rounded-2xl shadow-md mb-8 object-cover max-h-96"
      />

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
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
