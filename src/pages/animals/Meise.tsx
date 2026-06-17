import { Link } from "react-router-dom";

export default function Meise() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-sky-100 hover:bg-sky-200 text-sky-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-amber-100 via-yellow-50 to-sky-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🐦</div>
        <h1 className="text-3xl md:text-4xl font-black text-sky-900">Meise</h1>
        <p className="text-sky-700 italic mt-1 text-base md:text-lg font-semibold">Parus major — Kohlmeise</p>
      </div>

      <img
        src={import.meta.env.BASE_URL + "meise.jpg"}
        alt="Meise"
        className="w-full rounded-2xl shadow-md mb-8 object-cover max-h-96"
      />

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        <p>Die Meise ist ein kleiner, flinker Singvogel, der kaum größer als ein Tischtennisball ist — aber dafür umso bunter. Die Kohlmeise trägt ein gelbes Bäuchlein mit einem schwarzen Streifen in der Mitte, einen schwarzen Kopf und weiße Wangen. Im Garten oder am Futterhäuschen ist sie einer der häufigsten Besucher, und ihr helles „Zi-zi-bäh" hört man schon von weitem.</p>
        <p>Die Meise ist ein echter „Raupen-Staubsauger": Wenn eine Meisenfamilie ihre Küken füttert, frisst sie gemeinsam bis zu 1000 Raupen an einem einzigen Tag. Das klingt nach viel — und ist es auch! Ohne Meisen würden viele Raupen die Blätter unserer Bäume und Parks kahlfressen. Die Meise schützt also unsere Wälder und Gärten, ohne dass wir irgendetwas sprühen oder tun müssen.</p>
        <p>Meisen brüten sehr gern in kleinen Holzkästen — einem sogenannten „Nistkasten". Wer einen Nistkasten mit einem Einflugloch von etwa fünf Zentimetern in seinem Garten aufhängt, hilft der Meise direkt. Das ist Naturschutz, den jeder selbst machen kann — auch du!</p>
      </div>
    </div>
  );
}
