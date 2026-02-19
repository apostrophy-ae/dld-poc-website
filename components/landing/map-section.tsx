"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { X } from "lucide-react";

const MAPS_KEY = "AIzaSyA6myHzS10YXdcazAFalmXvDkrYCp5cLc8";

interface AreaProperties {
  NAME_EN: string;
  NAME_AR: string;
  COMM_CODE: number;
  AREA_ID: number;
  SHAPE_AREA: number;
  SHAPE_LEN: number;
}

interface PolygonFeature {
  id: string;
  geometry: { coordinates: Array<{ lat: number; lng: number }> };
  properties: AreaProperties;
}

declare global {
  interface Window {
    polygonsJson: PolygonFeature[];
    google: any;
  }
}

function formatArea(sqMeters: number): string {
  const sqKm = sqMeters / 1_000_000;
  return sqKm >= 1
    ? `${sqKm.toFixed(2)} km²`
    : `${(sqMeters / 10_000).toFixed(1)} ha`;
}

// Deterministically derive pseudo-stats from the area code
function deriveStats(commCode: number) {
  const seed = commCode % 100;
  return {
    sold: 3 + (seed % 18),
    underOffer: 5 + ((seed * 3) % 22),
    schools: 1 + (seed % 9),
    hospitals: 1 + (seed % 5),
    clinics: 2 + ((seed * 2) % 8),
    markets: 3 + ((seed * 4) % 12),
  };
}

export function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [communityLoaded, setCommunityLoaded] = useState(false);
  const [mapsLoaded, setMapsLoaded] = useState(false);
  const [selectedArea, setSelectedArea] = useState<AreaProperties | null>(null);

  useEffect(() => {
    if (!communityLoaded || !mapsLoaded) return;
    if (!mapRef.current || !window.google || !window.polygonsJson) return;

    const { Map, Polygon, Marker, LatLngBounds } = window.google.maps;

    const map = new Map(mapRef.current, {
      center: { lat: 25.053562, lng: 55.2107925 },
      zoom: 10,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
      ],
    });

    window.polygonsJson.forEach((feat) => {
      const bounds = new LatLngBounds();
      feat.geometry.coordinates.forEach((c) => bounds.extend(c));

      const polygon = new Polygon({
        paths: feat.geometry.coordinates,
        strokeColor: "#006E20",
        strokeOpacity: 0.55,
        strokeWeight: 1.5,
        fillColor: "#006E20",
        fillOpacity: 0.06,
      });
      polygon.setMap(map);

      const marker = new Marker({
        position: bounds.getCenter(),
        map,
        title: feat.properties.NAME_EN,
        icon: {
          url: "/images/map-marker.svg",
          // SVG is 233×259. Pin tip sits at ~(116, 125) in SVG space.
          // Scale to 36px wide → height = 36 * 259/233 ≈ 40px
          // Tip anchor: x = 18 (center), y = 125 * (40/259) ≈ 19
          scaledSize: new window.google.maps.Size(108, 120),
          anchor: new window.google.maps.Point(54, 57),
        },
      });

      marker.addListener("click", () => {
        setSelectedArea(feat.properties);
        map.panTo(bounds.getCenter());
      });

      polygon.addListener("click", () => {
        setSelectedArea(feat.properties);
        map.panTo(bounds.getCenter());
      });
    });
  }, [communityLoaded, mapsLoaded]);

  const stats = selectedArea ? deriveStats(selectedArea.COMM_CODE) : null;

  return (
    <section className="bg-dld-surface py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-dld-black md:text-[56px]">
            Area Information
          </h2>
        </div>
      </div>

      <div className="relative overflow-hidden  border border-dld-border">
        {/* Map container */}
        <div ref={mapRef} className="h-[560px] w-full bg-dld-surface" />

        {/* Info card — shown on marker click */}
        {selectedArea && stats && (
          <div className="absolute top-6 right-6 w-72 rounded-2xl bg-dld-white p-5 shadow-[var(--dld-shadow-card)]">
            {/* Close */}
            <button
              onClick={() => setSelectedArea(null)}
              aria-label="Close"
              className="absolute right-4 top-4 flex size-7 items-center justify-center rounded-full bg-dld-surface hover:bg-dld-border transition-colors"
            >
              <X className="size-4 text-dld-text-secondary" />
            </button>

            {/* Area name */}
            <div className="pr-8">
              <h3 className="text-base font-bold leading-snug text-dld-black">
                {selectedArea.NAME_EN.split(" ")
                  .map((w) => w.charAt(0) + w.slice(1).toLowerCase())
                  .join(" ")}
              </h3>
              <p className="mt-0.5 text-xs text-dld-text-secondary" dir="rtl">
                {selectedArea.NAME_AR}
              </p>
              <p className="mt-1 text-xs text-dld-text-secondary">
                {formatArea(selectedArea.SHAPE_AREA)}
              </p>
            </div>

            {/* Property Sales */}
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-dld-text-secondary mb-2">
                Property Sales
              </p>
              <div className="flex gap-6">
                <div>
                  <span className="text-2xl font-bold text-dld-black">
                    {stats.sold}
                  </span>
                  <p className="text-xs text-dld-text-secondary">Sold</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-dld-black">
                    {stats.underOffer}
                  </span>
                  <p className="text-xs text-dld-text-secondary">Under Offer</p>
                </div>
              </div>
            </div>

            {/* Facilities */}
            <div className="mt-4 border-t border-dld-border pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-dld-text-secondary mb-3">
                Facilities
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Schools", value: stats.schools },
                  { label: "Hospitals", value: stats.hospitals },
                  { label: "Clinics", value: stats.clinics },
                  { label: "Markets", value: stats.markets },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-xs text-dld-text-secondary">
                      {label}
                    </span>
                    <span className="text-sm font-bold text-dld-black">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Community code */}
            <div className="mt-4 rounded-xl bg-dld-surface px-3 py-2 text-center">
              <span className="text-xs text-dld-text-secondary">
                Community #{selectedArea.COMM_CODE} · Area{" "}
                {selectedArea.AREA_ID}
              </span>
            </div>
          </div>
        )}

        {/* Empty state prompt */}
        {!selectedArea && (
          <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2">
            <div className="rounded-full bg-dld-white/90 px-5 py-2.5 shadow-md backdrop-blur-sm">
              <p className="text-sm font-medium text-dld-black">
                Click a marker to explore an area
              </p>
            </div>
          </div>
        )}
      </div>
      {/* Load polygon data first (just a global variable, no Google dependency) */}
      <Script
        src="/map/DLDCommunity.js"
        strategy="afterInteractive"
        onLoad={() => setCommunityLoaded(true)}
      />
      {/* Load Google Maps API */}
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${MAPS_KEY}&libraries=maps`}
        strategy="afterInteractive"
        onLoad={() => setMapsLoaded(true)}
      />
    </section>
  );
}
