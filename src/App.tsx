import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import EntryDetail from "./pages/EntryDetail";
import Impressum from "./pages/Impressum";
import Lizenzen from "./pages/Lizenzen";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/suche" element={<Search />} />
          <Route path="/tier/:id" element={<EntryDetail />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/lizenzen" element={<Lizenzen />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
