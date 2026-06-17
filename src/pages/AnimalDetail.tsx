import { useParams, Link } from "react-router-dom";
import Hund from "./animals/Hund";
import Katze from "./animals/Katze";
import Hamster from "./animals/Hamster";
import Wellensittich from "./animals/Wellensittich";
import Kaninchen from "./animals/Kaninchen";
import Meerschweinchen from "./animals/Meerschweinchen";
import Schildkroete from "./animals/Schildkroete";
import Goldfisch from "./animals/Goldfisch";
import Marienkaefer from "./animals/Marienkaefer";
import Rosenkaefer from "./animals/Rosenkaefer";
import Libelle from "./animals/Libelle";
import Distelfalter from "./animals/Distelfalter";
import Ameise from "./animals/Ameise";
import Hirschkaefer from "./animals/Hirschkaefer";
import WildeMoehre from "./animals/WildeMoehre";
import Kornblume from "./animals/Kornblume";
import Schilf from "./animals/Schilf";
import Schlehe from "./animals/Schlehe";
import Weissdorn from "./animals/Weissdorn";
import Hundsrose from "./animals/Hundsrose";
import Weide from "./animals/Weide";
import Holunder from "./animals/Holunder";
import Brennnessel from "./animals/Brennnessel";

const animalPages: Record<string, React.ComponentType> = {
  hund: Hund,
  katze: Katze,
  hamster: Hamster,
  wellensittich: Wellensittich,
  kaninchen: Kaninchen,
  meerschweinchen: Meerschweinchen,
  schildkroete: Schildkroete,
  goldfisch: Goldfisch,
  marienkaefer: Marienkaefer,
  rosenkaefer: Rosenkaefer,
  libelle: Libelle,
  distelfalter: Distelfalter,
  ameise: Ameise,
  hirschkaefer: Hirschkaefer,
  "wilde-moehre": WildeMoehre,
  kornblume: Kornblume,
  schilf: Schilf,
  schlehe: Schlehe,
  weissdorn: Weissdorn,
  hundsrose: Hundsrose,
  weide: Weide,
  holunder: Holunder,
  brennnessel: Brennnessel,
};

export default function AnimalDetail() {
  const { id } = useParams();
  const AnimalPage = id ? animalPages[id] : undefined;

  if (!AnimalPage) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Tier nicht gefunden</h1>
        <Link to="/" className="text-blue-600 hover:underline">
          Zurück zur Startseite
        </Link>
      </div>
    );
  }

  return <AnimalPage />;
}
