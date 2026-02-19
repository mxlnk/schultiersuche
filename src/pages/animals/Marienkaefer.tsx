import { Link } from "react-router-dom";

export default function Marienkaefer() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/" className="text-red-600 hover:underline text-sm">
        &larr; Zurück zur Suche
      </Link>

      <div className="mt-4 mb-8 bg-red-600 rounded-2xl p-6 text-white text-center">
        <h1 className="text-3xl font-bold">Marienkäfer</h1>
        <p className="text-red-200 italic mt-1">Coccinella septempunctata</p>
      </div>

      <div className="space-y-4">
        <section className="bg-red-50 rounded-xl p-4 border border-red-100">
          <h2 className="text-lg font-semibold text-red-800 mb-1">Größe</h2>
          <p className="text-gray-700 leading-relaxed">
            Der Siebenpunkt-Marienkäfer wird nur 5 bis 8 Millimeter groß — etwa so groß wie ein Erbsenkorn. Damit passt er bequem auf eine Fingerspitze. Trotz seiner winzigen Größe ist er einer der bekanntesten und beliebtesten Käfer überhaupt.
          </p>
        </section>

        <section className="bg-red-50 rounded-xl p-4 border border-red-100">
          <h2 className="text-lg font-semibold text-red-800 mb-1">Aussehen</h2>
          <p className="text-gray-700 leading-relaxed">
            Der Siebenpunkt-Marienkäfer hat leuchtend rote Flügeldecken mit genau sieben schwarzen Punkten: drei auf jeder Seite und einer in der Mitte, der über beide Flügeldecken reicht. Sein Kopf und seine Beine sind schwarz. Der Körper ist halbkugelförmig und glänzend. Es gibt aber auch Marienkäferarten mit gelben, orangefarbenen oder sogar schwarzen Flügeldecken.
          </p>
        </section>

        <section className="bg-red-50 rounded-xl p-4 border border-red-100">
          <h2 className="text-lg font-semibold text-red-800 mb-1">Lebensraum</h2>
          <p className="text-gray-700 leading-relaxed">
            Marienkäfer leben in Gärten, auf Wiesen, an Waldrändern und in Parks in ganz Europa. Man findet sie überall dort, wo es Blattläuse gibt — also an Rosen, Obstbäumen und vielen anderen Pflanzen. Im Winter suchen sie sich geschützte Plätze wie Mauerritzen, Dachböden oder Laubhaufen und überwintern dort oft in großen Gruppen.
          </p>
        </section>

        <section className="bg-red-50 rounded-xl p-4 border border-red-100">
          <h2 className="text-lg font-semibold text-red-800 mb-1">Nahrung</h2>
          <p className="text-gray-700 leading-relaxed">
            Marienkäfer sind echte Nützlinge im Garten, denn sie fressen Blattläuse — und zwar jede Menge davon! Ein einziger Marienkäfer kann am Tag bis zu 150 Blattläuse vertilgen. In seinem ganzen Leben frisst er etwa 5.000 Blattläuse. Auch die Larven der Marienkäfer sind gefräßige Blattlausjäger. Gärtner schätzen Marienkäfer deshalb als natürliche Schädlingsbekämpfer.
          </p>
        </section>

        <section className="bg-red-50 rounded-xl p-4 border border-red-100">
          <h2 className="text-lg font-semibold text-red-800 mb-1">Feinde</h2>
          <p className="text-gray-700 leading-relaxed">
            Trotz ihrer auffälligen Farbe haben Marienkäfer nicht viele Feinde. Ihre rote Farbe ist nämlich eine Warnung: Sie schmecken bitter! Wenn ein Vogel oder eine Spinne sie angreift, sondern Marienkäfer eine gelbliche, übelriechende Flüssigkeit aus ihren Beingelenken ab. Manche Schlupfwespen legen allerdings ihre Eier in Marienkäfer hinein — dagegen können sie sich nicht wehren.
          </p>
        </section>

        <section className="bg-red-50 rounded-xl p-4 border border-red-100">
          <h2 className="text-lg font-semibold text-red-800 mb-1">Besonderheiten</h2>
          <p className="text-gray-700 leading-relaxed">
            Der Marienkäfer gilt in vielen Kulturen als Glücksbringer. Seinen Namen hat er vom Mittelalter, als die Menschen glaubten, die Jungfrau Maria habe ihn geschickt, um die Ernte vor Blattläusen zu schützen. Unter seinen harten Flügeldecken verbergen sich zarte, durchsichtige Flügel, die er zum Fliegen ausklappen kann. Es gibt weltweit über 5.000 verschiedene Marienkäferarten.
          </p>
        </section>

        <section className="bg-red-50 rounded-xl p-4 border border-red-100">
          <h2 className="text-lg font-semibold text-red-800 mb-1">Vermehrung</h2>
          <p className="text-gray-700 leading-relaxed">
            Das Weibchen legt im Frühling kleine, gelbe Eier an die Unterseite von Blättern, am liebsten dort, wo viele Blattläuse sitzen. Aus den Eiern schlüpfen nach wenigen Tagen Larven, die gar nicht wie Marienkäfer aussehen: Sie sind länglich, dunkel und stachelig. Die Larven fressen sich mehrere Wochen lang satt, verpuppen sich dann und schlüpfen schließlich als fertige Marienkäfer. Diese Verwandlung nennt man Metamorphose.
          </p>
        </section>
      </div>
    </div>
  );
}
