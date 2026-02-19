"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AskMalik } from "../ask-malik";
import { ArrowRight, Mic, Plus } from "lucide-react";

function SendArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className={className}
    >
      <line x1="12" y1="19" x2="12" y2="5" strokeLinecap="round" />
      <polyline
        points="5 12 12 5 19 12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MalikSection() {
  const [query, setQuery] = useState("");

  return (
    <section className="relative overflow-hidden bg-dld-surface py-20 h-screen">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Malik BG.png"
          alt="Malik section background"
          fill
          className="object-cover object-object-bottom-right "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 flex flex-col items-start justify-center flex-1 h-full">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-start lg:gap-12">
          {/* Mascot */}
          <div className="relative shrink-0 h-30 w-36 lg:h-46 lg:w-35">
            <Image
              src="/images/malek-white.png"
              alt="Malik AI assistant mascot"
              fill
              className="object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <span className="text-dld-white">Malik Ai Assist</span>
            <h2 className="text-2xl font-bold text-dld-white md:text-3xl lg:text-[56px] leading-snug max-w-2xl">
              I can assist you with your Ejari, Title Deed or Off Plan Sales
              Agreement
            </h2>

            <div
              className={cn(
                "flex w-[400px] flex-1 items-center rounded-full px-4 py-2",
              )}
              style={{
                borderRadius: "100px",
                background: "rgba(255, 255, 255, 0.30)",
              }}
            >
              {/* Add button */}
              <button
                type="button"
                className={cn(
                  "shrink-0 rounded-full p-2 transition-colors",
                  "text-white ",
                )}
                aria-label="Add attachment"
              >
                <Plus className="size-5" />
              </button>

              {/* Divider */}
              <div
                className={cn("mx-1 h-5 w-px shrink-0", "bg-dld-white/20")}
              />

              {/* Text input */}
              <input
                // value={query}
                // onChange={(e) => setQuery(e.target.value)}
                placeholder={"Renew my Rentral contract ..."}
                className={cn(
                  "w-full flex-1 bg-transparent text-white px-2 text-sm outline-none font-dubai",
                  "placeholder:text-white",
                )}
                aria-label="Ask Malik a question"
              />

              {/* Mic button */}
              <button
                type="button"
                className={cn(
                  "shrink-0 rounded-full p-2 transition-colors",
                  "text-white",
                )}
                aria-label="Voice input"
              >
                <Mic className="size-5" />
              </button>

              {/* Send button */}
              <button
                type="button"
                className="ml-1 flex size-11 shrink-0 items-center justify-center rounded-full bg-dld-white text-dld-blue"
                aria-label="Send question"
              >
                <ArrowRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
