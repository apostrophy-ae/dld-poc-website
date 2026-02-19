"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const slides = [
  {
    title: "Investment starts here",
    subtitle: "Make the dream real by investing in Dubai",
    image: "/images/3d465937eb3b94dcd3755448bd8c44694069c0b5.png",
  },
  {
    title: "Smart city innovation",
    subtitle: "Building the future with blockchain and AI technologies",
    image: "/images/847d30360b326a3eda6329d177a34b092d6c9601.png",
  },
  {
    title: "Sustainable development",
    subtitle: "Creating a greener and more livable Dubai for everyone",
    image: "/images/c16bdea5affed70ac01deed3870c5b737da50017.png",
  },
];

const DRAG_THRESHOLD = 50;

export function InnovationSlider() {
  const [current, setCurrent] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));

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
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-3">
            <Badge className="w-fit rounded-full bg-dld-green-bg text-dld-black border-0 px-4 py-4 text-xs font-medium uppercase tracking-wider">
              Dubai Vision
            </Badge>
            <h2 className="text-3xl font-bold text-dld-black md:text-4xl lg:text-5xl leading-tight">
              Dubai&apos;s Innovative
              <br />
              Future Vision
            </h2>
          </div>
          <p className="max-w-md text-dld-text-secondary leading-relaxed lg:pt-8">
            DLD is not merely a department; it&apos;s a visionary force
            propelling Dubai&apos;s real estate sector into uncharted
            territories. We aspire to not only meet but exceed the goals set by
            the Dubai Government, harmonizing our strategies with the latest
            global practices to create a future where our landscapes are a
            testament to sustainable development, innovation, and unmatched
            quality of life.
          </p>
        </div>
      </div>
      {/* Image / Slide area */}
      <div
        className="relative overflow-hidden  cursor-grab active:cursor-grabbing"
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
            transform: `translateX(calc(-${current * 100}% + ${dragOffset}px))`,
            transition: dragging ? "none" : "transform 500ms",
            userSelect: "none",
          }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="relative min-w-full">
              {/* Slide background + image */}
              <div className="relative h-80 w-full bg-gradient-to-br from-dld-dark via-dld-dark/80 to-dld-blue/40 md:h-96 lg:h-[480px]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  draggable={false}
                  className="object-cover"
                  onError={() => {}}
                />
              </div>

              {/* Overlay text */}

              <div
                style={{ background: "rgba(217, 217, 217, 0.05)" }}
                className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] mx-auto bg-gradient-to-t from-dld-dark/90 via-dld-dark/50 to-transparent p-8 md:p-12"
              >
                <div className="w-full mx-auto max-w-7xl px-6 relative  items">
                  <h3 className="text-2xl font-bold text-dld-white md:text-3xl">
                    {slide.title}
                  </h3>
                  <p className="mt-2 text-dld-white/70 max-w-lg">
                    {slide.subtitle}
                  </p>

                  {/* Dots - bottom right */}
                  <div className="absolute bottom-6 right-8 flex items-center gap-2">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={cn(
                          "h-2.5 rounded-full transition-all",
                          i === current
                            ? "w-8 bg-dld-white"
                            : "w-2.5 bg-dld-white/40",
                        )}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
