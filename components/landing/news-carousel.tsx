"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CARD_W = 337;
const GAP = 25;
const STEP = CARD_W + GAP;
const DRAG_THRESHOLD = 50;

const newsItems = [
  {
    tag: "Market Update",
    title: "Dubai Real Estate Market Hits Record High in 2024",
    image: "/images/3f14a27c079a7d8a262e6f390c0e2c5947c1d5dc.png",
  },
  {
    tag: "Innovation",
    title: "AI invoice upload feature introduced for developers",
    image: "/images/b7cad908f1260c73f553fb6f6ab084bd2a0752d0.png",
  },
  {
    tag: "Community",
    title: 'DLD launches "Women in Real Estate" initiative',
    image: "/images/b106529c1aaf9934f7067e4a89252ca335faa2ff.png",
  },
  {
    tag: "Market Update",
    title: "Dubai property transactions reach new record in Q3 2025",
    image: "/images/dacc77c515135f7e1cb0c69991b29d2a78c3ead3.png",
  },
  {
    tag: "Sustainability",
    title: "Green Building Standards updated for 2025",
    image: "/images/1839380a4475ccfdcbff4ad34b29583649b64959.png",
  },
  {
    tag: "People",
    title: "Meet the team behind Dubai's real estate transformation",
    image: "/images/df94f08416f5d529d03602a1eaf2a09e77b5f3cf.png",
  },
  {
    tag: "Investment",
    title:
      "DLD encourages Emirati citizens to join the Real Estate Broker Programme",
    image: "/images/a210fac0cd6b3d1dfa6734ba9c622c4e93fa9171.png",
  },
  {
    tag: "Development",
    title: "New sustainable housing developments announced across Dubai",
    image: "/images/3880bf58682a486a5aa4272d5694d20bcf5847cf.png",
  },
  {
    tag: "Smart City",
    title: "Building the future with blockchain and AI technologies",
    image: "/images/1325851a22016c025f7249a1b70ce5201b9cdbd3.png",
  },
  {
    tag: "Regulation",
    title: "New guidelines for sustainable property transactions in 2025",
    image: "/images/27d4692d979c0a130e1365c3606e19e4bdc92b0e.png",
  },
];

export function NewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [maxIndex, setMaxIndex] = useState(newsItems.length - 1);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);

  const calcMax = useCallback(() => {
    if (!wrapperRef.current) return;
    const containerWidth = wrapperRef.current.offsetWidth;
    const totalTrack = newsItems.length * CARD_W + (newsItems.length - 1) * GAP;
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

  const onDragStart = (clientX: number) => {
    dragStartX.current = clientX;
    setDragging(true);
    setDragOffset(0);
  };
  const onDragMove = (clientX: number) => {
    if (!dragging) return;
    setDragOffset(clientX - dragStartX.current);
  };
  const onDragEnd = () => {
    if (!dragging) return;
    setDragging(false);
    if (dragOffset < -DRAG_THRESHOLD) next();
    else if (dragOffset > DRAG_THRESHOLD) prev();
    setDragOffset(0);
  };

  return (
    <section className="bg-dld-surface py-20">
      {/* Title */}
      <div className="mx-auto mb-12 max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-dld-black md:text-5xl">
          Latest News
        </h2>
        <p className="mt-2 text-dld-text-secondary">
          Stay updated with the latest from Dubai real estate
        </p>
      </div>

      {/* Carousel — full width */}
      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous news"
          className="absolute left-8 top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-dld-white shadow-md transition-colors hover:bg-dld-surface disabled:opacity-40"
        >
          <ChevronLeft className="size-5" />
        </button>

        {/* Right arrow */}
        <button
          onClick={next}
          disabled={current >= maxIndex}
          aria-label="Next news"
          className="absolute right-8 top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-dld-white shadow-md transition-colors hover:bg-dld-surface disabled:opacity-40"
        >
          <ChevronRight className="size-5" />
        </button>

        {/* Track wrapper */}
        <div
          ref={wrapperRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseDown={(e) => onDragStart(e.clientX)}
          onMouseMove={(e) => {
            if (dragging) onDragMove(e.clientX);
          }}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
          onTouchEnd={onDragEnd}
        >
          <div
            className="flex ease-out"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(${dragOffset - current * STEP}px)`,
              transition: dragging ? "none" : "transform 500ms",
              userSelect: "none",
            }}
          >
            {newsItems.map((item, i) => (
              <article
                key={i}
                style={{ width: `${CARD_W}px` }}
                className="relative h-[453px] shrink-0 overflow-hidden rounded-3xl"
              >
                {/* Background image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  draggable={false}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Tag badge — top left */}
                <div className="absolute left-6 top-6">
                  <span className="rounded-full bg-dld-white px-4 py-2 text-sm font-medium text-dld-black shadow-sm">
                    {item.tag}
                  </span>
                </div>

                {/* Title — bottom, blurred backdrop */}
                <div className="absolute bottom-0 left-0 right-0 rounded-b-3xl backdrop-blur-[10px] bg-white/20 px-6 py-5">
                  <p className="text-lg font-bold leading-snug text-dld-white">
                    {item.title}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
