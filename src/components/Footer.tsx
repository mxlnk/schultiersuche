import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="max-w-4xl mx-auto px-6 py-5 flex justify-center gap-6 text-sm text-gray-400 font-semibold">
        <Link to="/impressum" className="hover:text-violet-500 transition-colors">
          Impressum & Datenschutz
        </Link>
        <Link to="/lizenzen" className="hover:text-violet-500 transition-colors">
          Lizenzen
        </Link>
      </div>
    </footer>
  );
}
