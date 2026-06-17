const WORDMARK = "Schul-Natur-Wiki";

const colors = [
  "text-rose-500",
  "text-amber-500",
  "text-emerald-500",
  "text-sky-500",
  "text-violet-500",
];

export default function Wordmark() {
  let colorIndex = 0;
  return (
    <>
      {WORDMARK.split("").map((char, i) => {
        if (char === "-") {
          return (
            <span key={i} className="text-gray-300">
              -
            </span>
          );
        }
        const color = colors[colorIndex % colors.length];
        colorIndex++;
        return (
          <span
            key={i}
            className={`${color} inline-block hover:scale-125 transition-transform`}
          >
            {char}
          </span>
        );
      })}
    </>
  );
}
