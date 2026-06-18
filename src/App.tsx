import { HashRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import EntryDetail from "./pages/EntryDetail";
import Impressum from "./pages/Impressum";
import Lizenzen from "./pages/Lizenzen";

// Alte /tier/-Links (vor der Verallgemeinerung zu /eintrag/) weiterleiten.
function LegacyTierRedirect() {
  const { id } = useParams();
  return <Navigate to={`/eintrag/${id}`} replace />;
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/suche" element={<Search />} />
          <Route path="/eintrag/:id" element={<EntryDetail />} />
          <Route path="/tier/:id" element={<LegacyTierRedirect />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/lizenzen" element={<Lizenzen />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
