import SearchBar from "../components/SearchBar";

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
    </div>
  );
}
