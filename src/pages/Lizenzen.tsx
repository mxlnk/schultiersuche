import { useState, useEffect } from "react";

export default function Lizenzen() {
  const [text, setText] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "licenses.txt")
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.text();
      })
      .then(setText)
      .catch(() => setError(true));
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Open-Source-Lizenzen
      </h1>
      <p className="text-gray-600 mb-4">
        Diese Anwendung nutzt die folgenden Open-Source-Pakete:
      </p>

      {text === null && !error && (
        <p className="text-gray-400">Laden...</p>
      )}

      {error && (
        <p className="text-gray-500">
          Lizenzinformationen sind nur im Production-Build verfügbar.
        </p>
      )}

      {text && (
        <pre className="bg-gray-50 border border-gray-200 rounded p-4 text-xs text-gray-700 overflow-x-auto whitespace-pre-wrap">
          {text}
        </pre>
      )}
    </div>
  );
}
