import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Nunito lokal hosten statt vom Google-Fonts-CDN – sonst fehlt offline die Schrift.
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/800.css";
import "@fontsource/nunito/900.css";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
