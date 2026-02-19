import { Link } from "react-router-dom";

export default function Libelle() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/" className="text-cyan-600 hover:underline text-sm">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-4 mb-8 bg-cyan-50 border border-cyan-200 rounded-lg p-6">
        <h1 className="text-3xl font-bold text-cyan-900">Libelle</h1>
        <p className="text-cyan-600 italic mt-1">Odonata</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-100">
          <h2 className="text-lg font-semibold text-cyan-800 mb-2">Größe</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Je nach Art werden Libellen 3 bis 12 Zentimeter lang. Die Große Königslibelle ist mit etwa 8 Zentimetern Körperlänge und 11 Zentimetern Flügelspannweite eine der größten einheimischen Libellen. Kleinlibellen sind dagegen zierlich und kaum fingerlang.
          </p>
        </div>

        <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-100">
          <h2 className="text-lg font-semibold text-cyan-800 mb-2">Aussehen</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Libellen haben einen langen, schlanken Hinterleib, einen breiten Kopf mit riesigen Facettenaugen und vier durchsichtige, fein geäderte Flügel. Ihre Farben sind atemberaubend: leuchtendes Blau, smaragdgrün, feuerrot oder metallisch schimmernd. Die großen Augen bestehen aus bis zu 30.000 Einzelaugen und ermöglichen eine fast vollständige Rundumsicht.
          </p>
        </div>

        <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-100">
          <h2 className="text-lg font-semibold text-cyan-800 mb-2">Lebensraum</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Libellen leben immer in der Nähe von Gewässern: an Teichen, Seen, Bächen, Flüssen und Sümpfen. Sie brauchen sauberes Wasser, denn ihre Larven entwickeln sich dort. Daher sind Libellen auch ein Zeichen für gute Wasserqualität. Auf Wiesen und Lichtungen in der Nähe jagen die erwachsenen Libellen.
          </p>
        </div>

        <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-100">
          <h2 className="text-lg font-semibold text-cyan-800 mb-2">Nahrung</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Libellen sind geschickte Jäger, die ihre Beute im Flug fangen. Sie fressen Mücken, Fliegen und andere kleine Insekten. Mit einer Fangquote von über 90 Prozent sind sie die erfolgreichsten Jäger der Tierwelt. Auch die Larven sind gefräßige Räuber: Im Wasser jagen sie Mückenlarven, kleine Krebstiere und sogar Kaulquappen.
          </p>
        </div>

        <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-100">
          <h2 className="text-lg font-semibold text-cyan-800 mb-2">Feinde</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Erwachsene Libellen werden von Vögeln wie Schwalben und Bienenfressern gejagt. Spinnen fangen sie manchmal in ihren Netzen. Die im Wasser lebenden Larven fallen Fischen, Fröschen und Wasservögeln zum Opfer. Trotzdem sind Libellen dank ihrer Flugkünste schwer zu fangen.
          </p>
        </div>

        <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-100">
          <h2 className="text-lg font-semibold text-cyan-800 mb-2">Besonderheiten</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Libellen sind wahre Flugkünstler: Sie können vorwärts, rückwärts und seitwärts fliegen, in der Luft stehen bleiben und blitzschnelle Wendungen machen. Sie erreichen Geschwindigkeiten von bis zu 50 Kilometern pro Stunde. Libellen gibt es seit über 300 Millionen Jahren — sie flogen schon durch die Luft, als es noch Dinosaurier gab. Damals hatten manche Arten eine Flügelspannweite von 70 Zentimetern!
          </p>
        </div>

        <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-100 md:col-span-2">
          <h2 className="text-lg font-semibold text-cyan-800 mb-2">Vermehrung</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Das Weibchen legt seine Eier ins Wasser oder an Wasserpflanzen. Aus den Eiern schlüpfen Larven, die unter Wasser leben und durch Kiemen atmen. Die Larvenzeit dauert je nach Art 1 bis 5 Jahre. In dieser Zeit häutet sich die Larve bis zu 15 Mal. Wenn sie ausgewachsen ist, klettert sie an einem Pflanzenstiel aus dem Wasser, ihre Hülle platzt auf, und die fertige Libelle schlüpft heraus und breitet ihre Flügel aus. Dieses Schauspiel nennt man Schlupf.
          </p>
        </div>
      </div>
    </div>
  );
}
