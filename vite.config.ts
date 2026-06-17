import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";
import license from "rollup-plugin-license";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/schultiersuche/",
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      // Service Worker aktualisiert sich automatisch, sobald wieder Internet da ist.
      registerType: "autoUpdate",
      // Registrierungs-Code wird automatisch in die index.html injiziert.
      injectRegister: "auto",
      manifest: {
        name: "Schul-Natur-Wiki",
        short_name: "Natur-Wiki",
        description:
          "Tiere und Pflanzen entdecken – offline nutzbar für draußen in der Natur.",
        lang: "de",
        // Pfade relativ zum manifest (liegt unter /schultiersuche/).
        start_url: ".",
        scope: ".",
        display: "standalone",
        orientation: "portrait",
        background_color: "#fef9f0",
        theme_color: "#a78bfa",
        icons: [
          { src: "pwa-192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-512.png", sizes: "512x512", type: "image/png" },
          {
            src: "pwa-maskable-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        // Standard-Glob deckt JPG NICHT ab – Tierbilder explizit einschließen,
        // damit beim ersten Laden wirklich alles offline verfügbar ist.
        globPatterns: [
          "**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,woff,woff2,txt}",
        ],
        // Größtes Bild ~0,5 MB; Puffer auf 4 MB für künftige Inhalte.
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
        // SPA mit HashRouter: alle Routen laufen über die index.html.
        navigateFallback: "index.html",
      },
    }),
  ],
  build: {
    rollupOptions: {
      plugins: [
        license({
          thirdParty: {
            output: path.resolve(__dirname, "dist", "licenses.txt"),
            includePrivate: false,
          },
        }),
      ],
    },
  },
});
