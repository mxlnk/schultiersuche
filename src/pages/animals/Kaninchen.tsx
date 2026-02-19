import { Link } from "react-router-dom";

export default function Kaninchen() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/" className="text-pink-600 hover:underline text-sm">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-4 mb-8 bg-pink-50 rounded-2xl p-6 shadow-sm border border-pink-100">
        <h1 className="text-3xl font-bold text-pink-900">Kaninchen</h1>
        <p className="text-pink-600 italic mt-1">Oryctolagus cuniculus</p>
      </div>

      <div className="space-y-4">
        <section className="bg-pink-50 rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-pink-800 mb-1">Größe</h2>
          <p className="text-gray-700 leading-relaxed">
            Wildkaninchen werden etwa 35 bis 45 Zentimeter lang und wiegen 1 bis 2,5 Kilogramm. Hauskaninchen gibt es in vielen Größen: Zwergkaninchen wiegen nur etwa 1 Kilogramm, während Deutsche Riesen über 7 Kilogramm schwer werden können. Ihre Ohren sind 6 bis 8 Zentimeter lang.
          </p>
        </section>

        <section className="bg-pink-50 rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-pink-800 mb-1">Aussehen</h2>
          <p className="text-gray-700 leading-relaxed">
            Kaninchen haben lange Ohren, große dunkle Augen und ein weiches, dichtes Fell. Ihre kräftigen Hinterbeine ermöglichen weite Sprünge. Der kurze, flauschige Schwanz heißt „Blume". Wildkaninchen sind graubraun gefärbt, Hauskaninchen gibt es in allen Farben und mit verschiedenen Fellmustern.
          </p>
        </section>

        <section className="bg-pink-50 rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-pink-800 mb-1">Lebensraum</h2>
          <p className="text-gray-700 leading-relaxed">
            Wildkaninchen stammen ursprünglich von der Iberischen Halbinsel und leben heute in ganz Europa. Sie graben weitverzweigte unterirdische Bauten, die man Kaninchenbau nennt. Dort leben sie in großen Gruppen zusammen. Als Haustiere brauchen sie ein geräumiges Gehege mit Versteckmöglichkeiten und täglichem Auslauf.
          </p>
        </section>

        <section className="bg-pink-50 rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-pink-800 mb-1">Nahrung</h2>
          <p className="text-gray-700 leading-relaxed">
            Das wichtigste Futter für Kaninchen ist Heu — davon brauchen sie jeden Tag eine große Menge, denn es hält ihre Zähne und ihre Verdauung gesund. Dazu fressen sie frisches Gras, Kräuter und Gemüse wie Möhren, Fenchel und Salat. Brot und Getreide sind für Kaninchen ungesund und sollten nicht gefüttert werden.
          </p>
        </section>

        <section className="bg-pink-50 rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-pink-800 mb-1">Feinde</h2>
          <p className="text-gray-700 leading-relaxed">
            Wildkaninchen haben viele Feinde: Füchse, Marder, Greifvögel, Eulen und Wiesel jagen sie. Kaninchen schützen sich, indem sie blitzschnell in ihren Bau flüchten. Mit ihren langen Ohren hören sie Feinde schon von Weitem. Bei Gefahr klopfen sie mit den Hinterbeinen als Warnsignal.
          </p>
        </section>

        <section className="bg-pink-50 rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-pink-800 mb-1">Besonderheiten</h2>
          <p className="text-gray-700 leading-relaxed">
            Kaninchen können ihre Ohren in verschiedene Richtungen drehen und so Geräusche aus allen Richtungen wahrnehmen. Sie sind sehr soziale Tiere und sollten niemals allein gehalten werden. Kaninchen sind keine Nagetiere, sondern gehören zur Ordnung der Hasenartigen. Ihre Zähne wachsen das ganze Leben lang nach.
          </p>
        </section>

        <section className="bg-pink-50 rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-pink-800 mb-1">Vermehrung</h2>
          <p className="text-gray-700 leading-relaxed">
            Eine Häsin ist nur 28 bis 31 Tage trächtig. Pro Wurf kommen 4 bis 12 Junge zur Welt. Die Babys werden nackt und blind geboren und bleiben die ersten Wochen im Nest. Die Mutter säugt sie nur ein- bis zweimal am Tag, dafür ist ihre Milch besonders nahrhaft. Nach etwa 4 Wochen beginnen die Jungtiere, feste Nahrung zu fressen.
          </p>
        </section>
      </div>
    </div>
  );
}
