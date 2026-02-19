import { Link } from "react-router-dom";

export default function Kaninchen() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-pink-100 hover:bg-pink-200 text-pink-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-pink-100 via-rose-50 to-fuchsia-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🐰</div>
        <h1 className="text-3xl md:text-4xl font-black text-pink-900">Kaninchen</h1>
        <p className="text-pink-600 italic mt-1 text-base md:text-lg font-semibold">Oryctolagus cuniculus</p>
      </div>

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        <p>
          Kaninchen stammen ursprünglich von der Iberischen Halbinsel und leben heute in ganz Europa. Wildkaninchen graben weitverzweigte unterirdische Bauten, in denen sie in großen Gruppen zusammenleben. Als Haustiere brauchen sie ein geräumiges Gehege mit Versteckmöglichkeiten und täglichem Auslauf. Wildkaninchen werden etwa 35 bis 45 Zentimeter lang und wiegen 1 bis 2,5 Kilogramm. Bei Hauskaninchen gibt es viele Größen: Zwergkaninchen wiegen nur etwa 1 Kilogramm, während Deutsche Riesen über 7 Kilogramm schwer werden können.
        </p>
        <p>
          Kaninchen haben lange Ohren, große dunkle Augen und ein weiches, dichtes Fell. Ihre kräftigen Hinterbeine ermöglichen weite Sprünge, und der kurze, flauschige Schwanz heißt „Blume". Wildkaninchen sind graubraun gefärbt, Hauskaninchen gibt es dagegen in allen Farben und mit verschiedenen Fellmustern. Kaninchen sind übrigens keine Nagetiere — sie gehören zur Ordnung der Hasenartigen. Ihre Zähne wachsen das ganze Leben lang nach, deshalb brauchen sie viel Heu zum Kauen.
        </p>
        <p>
          Das wichtigste Futter für Kaninchen ist Heu, denn es hält ihre Zähne und ihre Verdauung gesund. Dazu fressen sie frisches Gras, Kräuter und Gemüse wie Möhren, Fenchel und Salat. Brot und Getreide sind für Kaninchen ungesund und sollten nicht gefüttert werden. Kaninchen können ihre Ohren in verschiedene Richtungen drehen und so Geräusche aus allen Richtungen wahrnehmen. Sie sind sehr soziale Tiere und sollten niemals allein gehalten werden.
        </p>
        <p>
          Wildkaninchen haben viele Feinde: Füchse, Marder, Greifvögel, Eulen und Wiesel jagen sie. Kaninchen schützen sich, indem sie blitzschnell in ihren Bau flüchten. Mit ihren langen Ohren hören sie Feinde schon von Weitem, und bei Gefahr klopfen sie mit den Hinterbeinen als Warnsignal für die ganze Gruppe.
        </p>
        <p>
          Eine Häsin ist nur 28 bis 31 Tage trächtig. Pro Wurf kommen 4 bis 12 Junge zur Welt. Die Babys werden nackt und blind geboren und bleiben die ersten Wochen im Nest. Die Mutter säugt sie nur ein- bis zweimal am Tag, dafür ist ihre Milch besonders nahrhaft. Nach etwa 4 Wochen beginnen die Jungtiere, feste Nahrung zu fressen.
        </p>
      </div>
    </div>
  );
}
