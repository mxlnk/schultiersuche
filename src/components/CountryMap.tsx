import { useEffect, useState } from "react";
import type { MapRegion } from "../data/content";

interface MapData {
  w: number;
  h: number;
  paths: Record<string, string>;
  // Sehr kleine Länder: Mittelpunkt für einen Hinweis-Kreis.
  markers: Record<string, [number, number]>;
}

// Kartendaten werden erst beim Öffnen einer Länderseite nachgeladen
// (erzeugt mit scripts/make-maps.py aus Natural-Earth-Daten).
const loaders = import.meta.glob<{ default: MapData }>("../data/maps/*.json");

interface CountryMapProps {
  region: MapRegion;
  code: string;
  name: string;
}

export default function CountryMap({ region, code, name }: CountryMapProps) {
  const [map, setMap] = useState<MapData | null>(null);

  useEffect(() => {
    let active = true;
    setMap(null);
    const load = loaders[`../data/maps/${region}.json`];
    load?.()
      .then((m) => {
        if (active) setMap(m.default);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [region]);

  if (!map) {
    return <div className="aspect-[6/5] rounded-2xl bg-sky-100 animate-pulse" />;
  }

  const marker = map.markers[code];

  return (
    <svg
      viewBox={`0 0 ${map.w} ${map.h}`}
      role="img"
      aria-label={`Karte: Hier liegt ${name}`}
      className="block w-full h-auto rounded-2xl bg-sky-200 shadow-sm"
    >
      {Object.entries(map.paths).map(([c, d]) =>
        c === code ? null : (
          <path key={c} d={d} fill="#fef3c7" stroke="#d6d3d1" strokeWidth={0.7} />
        ),
      )}
      {map.paths[code] && (
        <path d={map.paths[code]} fill="#f97316" stroke="#9a3412" strokeWidth={0.9} />
      )}
      {marker && (
        <circle
          cx={marker[0]}
          cy={marker[1]}
          r={16}
          fill="none"
          stroke="#ea580c"
          strokeWidth={4}
        />
      )}
    </svg>
  );
}
