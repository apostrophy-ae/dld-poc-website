"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Card width matches Figma: 648px
const CARD_W = 648;
const GAP = 24;
const STEP = CARD_W + GAP;

const newsItems = [
  {
    date: "29 SEP",
    title:
      "Dubai Land Department continues its empowerment journey for national talents through the Third Real Estate Day for Emirati Employment",
    image: "/images/ef75f19b5b0f1a5a302b0055692234d1296e7c53.png",
  },
  {
    date: "23 JUN",
    title:
      "Dubai Land Department encourages Emirati citizens to join the Dubai Real Estate Broker Programme",
    image: "/images/a210fac0cd6b3d1dfa6734ba9c622c4e93fa9171.png",
  },
  {
    date: "PEOPLE",
    title: "Meet the team behind Dubai's real estate transformation",
    image: "/images/df94f08416f5d529d03602a1eaf2a09e77b5f3cf.png",
  },
  {
    date: "12 AUG",
    title:
      "Dubai Land Department releases new guidelines for sustainable property transactions in 2025",
    image: "/images/ef75f19b5b0f1a5a302b0055692234d1296e7c53.png",
  },
];

const DRAG_THRESHOLD = 50;

export function RentingNews() {
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

  // Shared drag start
  const onDragStart = (clientX: number) => {
    dragStartX.current = clientX;
    setDragging(true);
    setDragOffset(0);
  };

  // Shared drag move — live rubber-band feedback
  const onDragMove = (clientX: number) => {
    if (!dragging) return;
    setDragOffset(clientX - dragStartX.current);
  };

  // Shared drag end — snap to next/prev or stay
  const onDragEnd = () => {
    if (!dragging) return;
    setDragging(false);
    if (dragOffset < -DRAG_THRESHOLD) next();
    else if (dragOffset > DRAG_THRESHOLD) prev();
    setDragOffset(0);
  };

  // Mouse handlers
  const onMouseDown = (e: React.MouseEvent) => onDragStart(e.clientX);
  const onMouseMove = (e: React.MouseEvent) => {
    if (dragging) onDragMove(e.clientX);
  };
  const onMouseUp = () => onDragEnd();

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) =>
    onDragStart(e.touches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => onDragMove(e.touches[0].clientX);
  const onTouchEnd = () => onDragEnd();

  return (
    <section className="overflow-hidden bg-dld-surface py-20">
      {/* Title — stays in a content container */}
      <div className="mx-auto mb-16 max-w-7xl px-6">
        <h2 className="text-center text-5xl font-bold text-dld-black">
          Latest Renting News
        </h2>
      </div>

      {/* Carousel — full width, no outer padding */}
      <div className="relative">
        {/* Left arrow — absolute, vertically centred in card height */}
        <button
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous news"
          className="absolute left-28 top-1/2 z-10 flex size-16 -translate-y-1/2 items-center justify-center rounded-full bg-dld-white shadow-md transition-colors hover:bg-dld-surface disabled:opacity-40"
        >
          <ChevronLeft className="size-6" />
        </button>

        {/* Right arrow */}
        <button
          onClick={next}
          disabled={current >= maxIndex}
          aria-label="Next news"
          className="absolute right-28 top-1/2 z-10 flex size-16 -translate-y-1/2 items-center justify-center rounded-full bg-dld-white shadow-md transition-colors hover:bg-dld-surface disabled:opacity-40"
        >
          <ChevronRight className="size-6" />
        </button>

        {/* Track — cards go edge to edge */}
        <div
          ref={wrapperRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onDragEnd}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex gap-6 ease-out"
            style={{
              transform: `translateX(${dragOffset - current * STEP}px)`,
              transition: dragging ? "none" : "transform 500ms",
              userSelect: "none",
            }}
          >
            {newsItems.map((item, i) => (
              <article
                key={i}
                className="relative h-[432px] w-[648px] shrink-0 cursor-pointer overflow-hidden rounded-2xl"
              >
                {/* Photo */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  draggable={false}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Dark scrim */}
                <div className="absolute inset-0 bg-black/40" />
                {/* Gradient bottom fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Date — top left, large tracked text */}
                <div className="absolute left-9 top-9">
                  <span className="text-3xl font-normal uppercase tracking-[3.84px] text-dld-white">
                    {item.date}
                  </span>
                </div>

                {/* Caption — bottom left */}
                <div className="absolute bottom-9 left-9 right-9">
                  <p className="text-xl leading-relaxed text-dld-white">
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
