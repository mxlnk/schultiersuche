export default function Impressum() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Impressum</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Angaben gemäß § 5 DDG
        </h2>
        <p className="text-gray-600">
          Maximilian Link
          <br />
          Graf-Konrad-Str. 10
          <br />
          76229 Karlsruhe
        </p>
        <p className="text-gray-600 mt-2">
          E-Mail:{" "}
          <a href="mailto:website@mxlink.de" className="text-blue-600 hover:underline">
            website@mxlink.de
          </a>
        </p>
      </section>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">Datenschutzerklärung</h1>

      <section className="space-y-6 text-gray-600">
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Hosting</h2>
          <p>
            Diese Website wird über GitHub Pages gehostet (GitHub Inc., 88 Colin P. Kelly
            Jr. Street, San Francisco, CA 94107, USA). Beim Aufrufen der Seite werden
            automatisch Verbindungsdaten (z.&nbsp;B. Ihre IP-Adresse) durch den Hoster
            verarbeitet. Weitere Informationen finden Sie in der{" "}
            <a
              href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub Privacy Statement
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Datenverarbeitung auf dieser Website
          </h2>
          <p>
            Diese Website verarbeitet keine personenbezogenen Daten über das technisch
            notwendige Maß hinaus. Es werden keine Cookies gesetzt, kein Tracking
            eingesetzt und keine Daten an Dritte weitergegeben. Alle Funktionen der App
            laufen vollständig lokal in Ihrem Browser.
          </p>
        </div>
      </section>
    </div>
  );
}
