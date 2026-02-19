import { Link } from "react-router-dom";

export default function Marienkaefer() {
  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto px-5 md:px-10 py-8 md:py-12">
      <Link to="/" className="inline-block bg-red-100 hover:bg-red-200 text-red-800 px-4 py-2 rounded-full text-sm font-bold transition-colors">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-6 mb-8 bg-gradient-to-br from-red-200 via-rose-100 to-orange-100 rounded-3xl p-6 md:p-8 text-center shadow-md">
        <div className="text-5xl md:text-6xl mb-2">🐞</div>
        <h1 className="text-3xl md:text-4xl font-black text-red-900">Marienkäfer</h1>
        <p className="text-red-600 italic mt-1 text-base md:text-lg font-semibold">Coccinella septempunctata</p>
      </div>

      <div className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose space-y-4 md:space-y-5">
        <p>
          Der Siebenpunkt-Marienkäfer ist einer der bekanntesten und beliebtesten Käfer überhaupt und gilt in vielen Kulturen als Glücksbringer. Seinen Namen hat er vom Mittelalter, als die Menschen glaubten, die Jungfrau Maria habe ihn geschickt, um die Ernte vor Blattläusen zu schützen. Er wird nur 5 bis 8 Millimeter groß — etwa so groß wie ein Erbsenkorn — und passt bequem auf eine Fingerspitze.
        </p>
        <p>
          Seine leuchtend roten Flügeldecken tragen genau sieben schwarze Punkte: drei auf jeder Seite und einen in der Mitte, der über beide Flügeldecken reicht. Der Kopf und die Beine sind schwarz, der Körper halbkugelförmig und glänzend. Es gibt aber auch Marienkäferarten mit gelben, orangefarbenen oder sogar schwarzen Flügeldecken — weltweit sind über 5.000 verschiedene Arten bekannt. Unter den harten Flügeldecken verbergen sich zarte, durchsichtige Flügel, die der Käfer zum Fliegen ausklappen kann.
        </p>
        <p>
          Marienkäfer leben in Gärten, auf Wiesen, an Waldrändern und in Parks in ganz Europa — überall dort, wo es Blattläuse gibt. Und genau diese Blattläuse sind ihre Hauptnahrung: Ein einziger Marienkäfer kann am Tag bis zu 150 Stück vertilgen, in seinem ganzen Leben etwa 5.000. Auch die Larven sind gefräßige Blattlausjäger, weshalb Gärtner Marienkäfer als natürliche Schädlingsbekämpfer schätzen. Im Winter suchen sie sich geschützte Plätze wie Mauerritzen oder Laubhaufen und überwintern dort oft in großen Gruppen.
        </p>
        <p>
          Trotz ihrer auffälligen Farbe haben Marienkäfer nicht viele Feinde, denn die rote Farbe ist eine Warnung: Sie schmecken bitter! Wenn ein Vogel oder eine Spinne sie angreift, sondern sie eine gelbliche, übelriechende Flüssigkeit aus ihren Beingelenken ab. Manche Schlupfwespen legen allerdings ihre Eier in Marienkäfer hinein — dagegen können sie sich nicht wehren.
        </p>
        <p>
          Das Weibchen legt im Frühling kleine, gelbe Eier an die Unterseite von Blättern, am liebsten dort, wo viele Blattläuse sitzen. Aus den Eiern schlüpfen nach wenigen Tagen Larven, die gar nicht wie Marienkäfer aussehen: Sie sind länglich, dunkel und stachelig. Die Larven fressen sich mehrere Wochen lang satt, verpuppen sich dann und schlüpfen schließlich als fertige Marienkäfer. Diese Verwandlung nennt man Metamorphose.
        </p>
      </div>
    </div>
  );
}
