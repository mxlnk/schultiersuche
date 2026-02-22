import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { categories } from "../data/animals";

const letters = [
  { char: "S", color: "text-rose-500" },
  { char: "c", color: "text-amber-500" },
  { char: "h", color: "text-emerald-500" },
  { char: "u", color: "text-sky-500" },
  { char: "l", color: "text-violet-500" },
  { char: "t", color: "text-rose-500" },
  { char: "i", color: "text-amber-500" },
  { char: "e", color: "text-emerald-500" },
  { char: "r", color: "text-sky-500" },
  { char: "s", color: "text-violet-500" },
  { char: "u", color: "text-rose-500" },
  { char: "c", color: "text-amber-500" },
  { char: "h", color: "text-emerald-500" },
  { char: "e", color: "text-sky-500" },
];

const buttonColors = [
  "bg-amber-100 border-amber-300 hover:bg-amber-200 text-amber-800",
  "bg-emerald-100 border-emerald-300 hover:bg-emerald-200 text-emerald-800",
  "bg-sky-100 border-sky-300 hover:bg-sky-200 text-sky-800",
  "bg-rose-100 border-rose-300 hover:bg-rose-200 text-rose-800",
  "bg-violet-100 border-violet-300 hover:bg-violet-200 text-violet-800",
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-6">
      <div className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
        {letters.map((l, i) => (
          <span key={i} className={`${l.color} inline-block hover:scale-125 transition-transform cursor-default`}>
            {l.char}
          </span>
        ))}
      </div>
      <p className="text-gray-500 text-lg md:text-xl mb-10 font-semibold">
        Finde dein Lieblingstier!
      </p>
      <SearchBar autoFocus />
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {categories.map((cat, i) => (
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
  );
}
