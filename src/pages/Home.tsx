import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Wordmark from "../components/Wordmark";
import { categories, kingdoms, type EntryType } from "../data/entries";

const kingdomColors: Record<EntryType, string> = {
  tier: "bg-amber-100 border-amber-300 hover:bg-amber-200 text-amber-800",
  pflanze: "bg-emerald-100 border-emerald-300 hover:bg-emerald-200 text-emerald-800",
};

const buttonColors = [
  "bg-amber-100 border-amber-300 hover:bg-amber-200 text-amber-800",
  "bg-emerald-100 border-emerald-300 hover:bg-emerald-200 text-emerald-800",
  "bg-sky-100 border-sky-300 hover:bg-sky-200 text-sky-800",
  "bg-rose-100 border-rose-300 hover:bg-rose-200 text-rose-800",
  "bg-violet-100 border-violet-300 hover:bg-violet-200 text-violet-800",
];

export default function Home() {
  const [kingdom, setKingdom] = useState<EntryType | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-6">
      <div className="text-5xl md:text-7xl font-black mb-4 tracking-tight text-center">
        <Wordmark />
      </div>
      <p className="text-gray-500 text-lg md:text-xl mb-10 font-semibold">
        Entdecke Tiere und Pflanzen!
      </p>
      <SearchBar autoFocus />

      {kingdom === null ? (
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {kingdoms.map((k) => (
            <button
              key={k.id}
              onClick={() => setKingdom(k.id)}
              className={`border-2 rounded-2xl px-8 py-5 font-black text-xl md:text-2xl transition-all hover:scale-105 ${kingdomColors[k.id]}`}
            >
              <span className="mr-2 text-2xl md:text-3xl">{k.emoji}</span>
              {k.label}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center mt-8">
          <button
            onClick={() => setKingdom(null)}
            className="mb-5 text-gray-400 hover:text-violet-500 font-bold text-base transition-colors"
          >
            &larr; Zurück
          </button>
          <div className="flex flex-wrap justify-center gap-3">
            {categories
              .filter((cat) => cat.type === kingdom)
              .map((cat, i) => (
                <Link
                  key={cat.id}
                  to={`/suche?q=${encodeURIComponent(cat.label)}`}
                  className={`border-2 rounded-full px-5 py-2.5 font-bold text-base transition-all hover:scale-105 ${buttonColors[i % buttonColors.length]}`}
                >
                  <span className="mr-1.5">{cat.emoji}</span>
                  {cat.label}
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
