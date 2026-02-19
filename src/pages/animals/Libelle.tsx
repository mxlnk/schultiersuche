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

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          Libellen gibt es seit über 300 Millionen Jahren — sie flogen schon durch die Luft, als es noch keine Dinosaurier gab. Damals hatten manche Arten eine Flügelspannweite von 70 Zentimetern! Heute leben Libellen immer in der Nähe von Gewässern: an Teichen, Seen, Bächen und Sümpfen. Sie brauchen sauberes Wasser, denn ihre Larven entwickeln sich dort. Deshalb sind Libellen auch ein gutes Zeichen für Wasserqualität.
        </p>
        <p>
          Je nach Art werden Libellen 3 bis 12 Zentimeter lang. Die Große Königslibelle erreicht etwa 8 Zentimeter Körperlänge und 11 Zentimeter Flügelspannweite. Libellen haben einen langen, schlanken Hinterleib, einen breiten Kopf mit riesigen Facettenaugen und vier durchsichtige, fein geäderte Flügel. Ihre Farben sind atemberaubend: leuchtendes Blau, Smaragdgrün, Feuerrot oder metallisch schimmernd. Die großen Augen bestehen aus bis zu 30.000 Einzelaugen und ermöglichen eine fast vollständige Rundumsicht.
        </p>
        <p>
          Libellen sind wahre Flugkünstler: Sie können vorwärts, rückwärts und seitwärts fliegen, in der Luft stehen bleiben und blitzschnelle Wendungen machen. Sie erreichen Geschwindigkeiten von bis zu 50 Kilometern pro Stunde. Diese Fähigkeit macht sie zu geschickten Jägern, die ihre Beute — Mücken, Fliegen und andere kleine Insekten — im Flug fangen. Mit einer Fangquote von über 90 Prozent sind sie die erfolgreichsten Jäger der Tierwelt. Auch die Larven sind gefräßige Räuber und jagen im Wasser Mückenlarven, kleine Krebstiere und sogar Kaulquappen.
        </p>
        <p>
          Erwachsene Libellen werden von Vögeln wie Schwalben gejagt, und Spinnen fangen sie manchmal in ihren Netzen. Die Larven fallen Fischen und Fröschen zum Opfer. Trotzdem sind Libellen dank ihrer Flugkünste schwer zu erwischen.
        </p>
        <p>
          Das Weibchen legt seine Eier ins Wasser oder an Wasserpflanzen. Aus den Eiern schlüpfen Larven, die unter Wasser leben und durch Kiemen atmen. Die Larvenzeit dauert je nach Art 1 bis 5 Jahre, in der sich die Larve bis zu 15 Mal häutet. Wenn sie ausgewachsen ist, klettert sie an einem Pflanzenstiel aus dem Wasser, ihre Hülle platzt auf, und die fertige Libelle schlüpft heraus und breitet zum ersten Mal ihre Flügel aus. Dieses Schauspiel nennt man Schlupf.
        </p>
      </div>
    </div>
  );
}
