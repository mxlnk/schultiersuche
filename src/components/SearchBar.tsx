import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  defaultValue?: string;
  autoFocus?: boolean;
}

export default function SearchBar({ defaultValue = "", autoFocus = false }: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue);
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      navigate(`/suche?q=${encodeURIComponent(trimmed)}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl md:max-w-2xl">
      <div className="flex items-center bg-white border-2 border-violet-200 rounded-full px-5 md:px-6 py-3 md:py-4 shadow-lg hover:shadow-xl focus-within:shadow-xl focus-within:border-violet-400 transition-all">
        <svg
          className="w-6 h-6 md:w-7 md:h-7 text-violet-400 mr-3 md:mr-4 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus={autoFocus}
          placeholder="Welches Tier suchst du?"
          className="w-full outline-none text-gray-700 bg-transparent text-lg md:text-xl font-semibold placeholder:text-gray-400 placeholder:font-normal"
        />
      </div>
    </form>
  );
}
