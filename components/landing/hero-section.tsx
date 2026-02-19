"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { ArrowRight, Mic, Plus } from "lucide-react";

const suggestions = [
  "Understand the Renting process & market",
  "Official Rental Index explained",
  "Find a licensed Broker",
  "Learn how to get your Ejari registered",
  "Understand your rights & rental obligations",
];

export function HeroSection() {
  const stats = [
    { value: "137,013", label: "Transactions", caption: "YTD" },
    { value: "170.7 B", label: "Value (AED)", caption: "Q4 2025" },
    { value: "1.09 B", label: "Sq. Ft. Traded", caption: "19 FEB 2026" },
    { value: "73.29 M", label: "Revenue (AED)", caption: "+6.71%" },
  ];

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (item: string) => {
    setQuery(item);
    setOpen(false);
    router.push("/how-to-rent");
  };

  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bb6e4f8ccd4fce4a6729a894f33a486aae068754.png"
          alt="Dubai cityscape aerial view"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dld-dark/80 via-dld-dark/20 to-dld-dark/50" />

      {/* Main content */}
      <div className="text-center relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pt-24">
        <p className="text-2xl font-medium text-dld-white tracking-wide">
          Dubai Land Department
        </p>
        <h1 className="mt-4 text-5xl font-bold uppercase tracking-tight text-dld-white md:text-7xl lg:text-8xl leading-none">
          Where Land
          <br />
          Comes to Life
        </h1>

        <div className="mx-auto mt-12 max-w-2xl w-full">
          <div
            ref={containerRef}
            className="relative flex flex-col justify-center items-center w-[420px] mx-auto"
          >
            {/* Ask Malik label */}
            <div className="flex flex-row items-center relative -left-4 top-5">
              <img src="/images/malek-white.png" alt="Malik" />
              <span className="text-2xl text-white font-bold font-dubai relative -top-4">
                Ask Malik
              </span>
            </div>

            {/* Input row */}
            <div
              className="flex w-full min-w-0 items-center rounded-full px-4 py-2"
              style={{
                borderRadius: "100px",
                background: "rgba(255, 255, 255, 0.30)",
              }}
            >
              {/* Add button */}
              <button
                type="button"
                className="shrink-0 rounded-full p-2 transition-colors text-white"
                aria-label="Add attachment"
              >
                <Plus className="size-5" />
              </button>

              {/* Divider */}
              <div className="mx-1 h-5 w-px shrink-0 bg-dld-white/20" />

              {/* Text input */}
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setOpen(e.target.value.length > 0);
                }}
                onFocus={() => {
                  if (query.length > 0) setOpen(true);
                }}
                placeholder="Renew my Rental contract ..."
                className="w-full flex-1 bg-transparent text-white px-2 text-sm outline-none font-dubai placeholder:text-white"
                aria-label="Ask Malik a question"
                aria-expanded={open}
                aria-autocomplete="list"
              />

              {/* Mic button */}
              <button
                type="button"
                className="shrink-0 rounded-full p-2 transition-colors text-white"
                aria-label="Voice input"
              >
                <Mic className="size-5" />
              </button>

              {/* Send button */}
              <button
                type="button"
                onClick={() => query && router.push("/how-to-rent")}
                className="ml-1 flex size-11 shrink-0 items-center justify-center rounded-full bg-dld-white text-dld-blue"
                aria-label="Send question"
              >
                <ArrowRight className="size-5" />
              </button>
            </div>

            {/* Suggestion dropdown */}
            {open && (
              <div className="absolute top-full mt-3 w-full rounded-[30px] bg-dld-white shadow-xl py-3 z-50">
                {suggestions.map((item, i) => (
                  <button
                    key={i}
                    type="button"
                    onMouseDown={() => handleSelect(item)}
                    className={cn(
                      "w-full px-6 py-3 rounded-[30px]  text-left text-sm text-dld-black hover:bg-dld-surface transition-colors",
                      i < suggestions.length - 1 &&
                        "border-b border-dld-border/40",
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 w-full">
        <div
          style={{ background: "rgba(217, 217, 217, 0.20)" }}
          className="backdrop-blur-xs border-t border-dld-white/10"
        >
          <div className="mx-auto max-w-7xl px-6 py-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-1 text-center"
                >
                  <span className="text-[19.758px] text-dld-white">
                    {stat.caption}
                  </span>
                  <span className="text-3xl font-bold text-dld-white md:text-4xl">
                    {stat.value}
                  </span>
                  <span className="text-sm text-dld-white/60">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
