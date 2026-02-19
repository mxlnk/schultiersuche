import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-center gap-6 text-sm text-gray-600">
        <Link to="/impressum" className="hover:underline">
          Impressum & Datenschutz
        </Link>
        <Link to="/lizenzen" className="hover:underline">
          Lizenzen
        </Link>
      </div>
    </footer>
  );
}
