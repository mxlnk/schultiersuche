#!/usr/bin/env python3
"""Erzeugt die Übersichtskarten für die Länder-Steckbriefe.

Quelle: Natural Earth (gemeinfrei), 1:10m Admin-0-Länder in der deutschen
Grenzdarstellung:
https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_0_countries_deu.geojson

Aufruf:  python3 scripts/make-maps.py <pfad/zur/geojson>
Ergebnis: src/data/maps/<region>.json mit
  { "w": Breite, "h": Höhe, "paths": { "<iso2>": "<svg path>" },
    "markers": { "<iso2>": [x, y] } }
"markers" enthält Länder, die auf der Karte so klein sind, dass sie einen
Kreis als Hinweis brauchen. Keine Abhängigkeiten außer Python 3.
"""
import json
import math
import os
import sys

WIDTH = 600.0
TOLERANCE = 0.35  # Vereinfachung in Pixeln
MIN_AREA = 1.5  # kleinere Inseln (px²) weglassen
MARKER_BELOW = 16.0  # Länder mit kleinerer Ausdehnung (px) bekommen einen Kreis

# Region -> (Mittelpunkt lon/lat, Punkte lon/lat, die im Bild liegen müssen)
REGIONS = {
    "europa": ((15, 53), [(-24, 63.5), (-9.5, 36.5), (34, 34.3), (45, 39), (27, 71.5), (42, 62)]),
    "russland": ((95, 62), [(19, 54), (-170, 66), (40, 41.5), (132, 42), (100, 78), (60, 80)]),
    "nordamerika": ((-98, 48), [(-166, 62), (-141, 70), (-53, 47), (-87, 13.5), (-75, 80), (-117, 30)]),
    "suedamerika": ((-60, -20), [(-82, -5), (-34, -7), (-68, -56), (-70, 13)]),
    "asien": ((103, 26), [(67, 24), (73, 38), (141, -9), (146, 44), (106, -11), (95, 5), (120, 54)]),
    "afrika": ((17, 2), [(-18, 15), (52, 12), (20, -35.5), (10, 38)]),
    "ozeanien": ((142, -28), [(112, -23), (179, -38), (167, -48), (142, -9)]),
}
PAD = 0.04  # Rand um die Pflichtpunkte, relativ zur Breite


def projector(lon0, lat0):
    """Flächentreue Azimutalprojektion (Lambert) um den Mittelpunkt."""
    l0, p0 = math.radians(lon0), math.radians(lat0)
    s0, c0 = math.sin(p0), math.cos(p0)

    def project(lon, lat):
        lam, phi = math.radians(lon) - l0, math.radians(lat)
        sp, cp, cl = math.sin(phi), math.cos(phi), math.cos(lam)
        k = math.sqrt(2.0 / max(1e-9, 1.0 + s0 * sp + c0 * cp * cl))
        return k * cp * math.sin(lam), -k * (c0 * sp - s0 * cp * cl)

    return project


def simplify(pts, tol):
    """Douglas-Peucker, iterativ."""
    if len(pts) < 3:
        return pts
    keep = [False] * len(pts)
    keep[0] = keep[-1] = True
    stack = [(0, len(pts) - 1)]
    while stack:
        a, b = stack.pop()
        ax, ay = pts[a]
        bx, by = pts[b]
        dx, dy = bx - ax, by - ay
        norm = math.hypot(dx, dy)
        best, idx = 0.0, -1
        for i in range(a + 1, b):
            px, py = pts[i]
            if norm == 0:
                d = math.hypot(px - ax, py - ay)
            else:
                d = abs(dx * (ay - py) - (ax - px) * dy) / norm
            if d > best:
                best, idx = d, i
        if best > tol and idx > 0:
            keep[idx] = True
            stack.append((a, idx))
            stack.append((idx, b))
    return [p for p, k in zip(pts, keep) if k]


def area(pts):
    s = 0.0
    for i in range(len(pts)):
        x1, y1 = pts[i]
        x2, y2 = pts[i - 1]
        s += x1 * y2 - x2 * y1
    return abs(s) / 2.0


def fmt(v):
    s = f"{v:.1f}"
    return s[:-2] if s.endswith(".0") else s


def build(features, center, must):
    project = projector(*center)
    pts = [project(lon, lat) for lon, lat in must]
    x0, x1 = min(p[0] for p in pts), max(p[0] for p in pts)
    y0, y1 = min(p[1] for p in pts), max(p[1] for p in pts)
    scale = WIDTH * (1 - 2 * PAD) / (x1 - x0)
    ox, oy = WIDTH * PAD - x0 * scale, WIDTH * PAD - y0 * scale
    height = round((y1 - y0) * scale + 2 * WIDTH * PAD)
    margin = WIDTH * 0.5  # weit außerhalb liegende Punkte werden hierhin geklemmt

    paths, markers = {}, {}
    for code, polygons in features:
        parts = []
        bx0 = by0 = float("inf")
        bx1 = by1 = float("-inf")
        best_area, best_center = 0.0, None
        for poly in polygons:
            ring = []
            for lon, lat in poly[0]:  # nur Außenring
                x, y = project(lon, lat)
                x = min(max(x * scale + ox, -margin), WIDTH + margin)
                y = min(max(y * scale + oy, -margin), height + margin)
                ring.append((x, y))
            rx0, rx1 = min(p[0] for p in ring), max(p[0] for p in ring)
            ry0, ry1 = min(p[1] for p in ring), max(p[1] for p in ring)
            if rx1 < 0 or ry1 < 0 or rx0 > WIDTH or ry0 > height:
                continue
            a = area(ring)
            if a > best_area:
                best_area = a
                best_center = ((rx0 + rx1) / 2, (ry0 + ry1) / 2)
            bx0, bx1 = min(bx0, rx0), max(bx1, rx1)
            by0, by1 = min(by0, ry0), max(by1, ry1)
            ring = simplify(ring, TOLERANCE)
            if len(ring) < 4 or a < MIN_AREA:
                continue
            parts.append((a, "M" + "L".join(f"{fmt(x)},{fmt(y)}" for x, y in ring[:-1]) + "Z"))
        if best_center is None:
            continue
        if not parts:
            # Zwergstaat: als kleiner Punkt, damit er trotzdem hervorgehoben werden kann
            cx, cy = best_center
            parts.append((0, f"M{fmt(cx - 1)},{fmt(cy)}a1,1 0 1,0 2,0a1,1 0 1,0 -2,0Z"))
        if max(bx1 - bx0, by1 - by0) < MARKER_BELOW:
            markers[code] = [round(best_center[0], 1), round(best_center[1], 1)]
        paths[code] = paths.get(code, "") + "".join(d for _, d in sorted(parts, reverse=True))
    return {"w": int(WIDTH), "h": height, "paths": paths, "markers": markers}


def main():
    src = sys.argv[1]
    out_dir = os.path.join(os.path.dirname(__file__), "..", "src", "data", "maps")
    os.makedirs(out_dir, exist_ok=True)
    merged = {}
    for f in json.load(open(src, encoding="utf-8"))["features"]:
        p, g = f["properties"], f["geometry"]
        code = p["ISO_A2_EH"]
        code = code.lower() if code != "-99" else "x-" + p["ADM0_A3"].lower()
        if code == "aq":
            continue
        polygons = g["coordinates"] if g["type"] == "MultiPolygon" else [g["coordinates"]]
        merged.setdefault(code, []).extend(polygons)  # Außengebiete zum Mutterland
    features = list(merged.items())
    for name, (center, must) in REGIONS.items():
        data = build(features, center, must)
        path = os.path.join(out_dir, name + ".json")
        with open(path, "w", encoding="utf-8") as fh:
            json.dump(data, fh, separators=(",", ":"), sort_keys=True)
        print(f"{name}: {data['w']}x{data['h']}, {len(data['paths'])} Länder, "
              f"{os.path.getsize(path) // 1024} KB, Marker: {sorted(data['markers'])}")


if __name__ == "__main__":
    main()
