"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CARD_W = 200;
const GAP = 48;
const STEP = CARD_W + GAP;

const partners = [
  {
    name: "Dubai Economy and Tourism",
    logo: "/images/Economyandtourist.png",
    width: 140,
    height: 70,
  },
  {
    name: "DEWA",
    logo: "/images/Dewa.png",
    width: 86,
    height: 108,
  },
  {
    name: "Dubai Municipality",
    logo: "/images/dubai-municipality-logo 2.png",
    width: 132,
    height: 132,
  },
  {
    name: "Emirates NBD",
    logo: "/images/emiratednbd.png",
    width: 140,
    height: 70,
  },
  {
    name: "DEWA",
    logo: "/images/Dewa.png",
    width: 86,
    height: 108,
  },
  {
    name: "Dubai Municipality",
    logo: "/images/dubai-municipality-logo 2.png",
    width: 132,
    height: 132,
  },
];

export function PartnersCarousel() {
  const [current, setCurrent] = useState(0);
  const [maxIndex, setMaxIndex] = useState(partners.length - 1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const calcMax = useCallback(() => {
    if (!wrapperRef.current) return;
    const containerWidth = wrapperRef.current.offsetWidth;
    const totalTrack = partners.length * CARD_W + (partners.length - 1) * GAP;
    const maxPx = Math.max(0, totalTrack - containerWidth);
    setMaxIndex(Math.floor(maxPx / STEP));
  }, []);

  useEffect(() => {
    calcMax();
    window.addEventListener("resize", calcMax);
    return () => window.removeEventListener("resize", calcMax);
  }, [calcMax]);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <section className="bg-dld-surface py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-3xl font-bold text-dld-black md:text-[56px]">
          Partners
        </h2>

        <div className="flex items-center gap-6">
          {/* Left arrow */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-dld-border bg-dld-white text-dld-black hover:bg-dld-surface disabled:opacity-30 transition-colors"
            aria-label="Previous partners"
          >
            <ChevronLeft className="size-4" />
          </button>

          {/* Track */}
          <div ref={wrapperRef} className="flex-1 overflow-hidden">
            <div
              className="flex items-center transition-transform duration-500 ease-out"
              style={{
                gap: `${GAP}px`,
                transform: `translateX(-${current * STEP}px)`,
              }}
            >
              {partners.map((partner, i) => (
                <div
                  key={i}
                  className="shrink-0 flex items-center justify-center"
                  style={{ width: `${CARD_W}px`, height: "120px" }}
                >
                  <div
                    className="relative"
                    style={{
                      width: `${partner.width}px`,
                      height: `${partner.height}px`,
                    }}
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            disabled={current >= maxIndex}
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-dld-border bg-dld-white text-dld-black hover:bg-dld-surface disabled:opacity-30 transition-colors"
            aria-label="Next partners"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
