import Image from "next/image";
import { AskMalik } from "@/components/ask-malik";

export function RentHeader() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero with background image */}
      <div className="relative   min-h-[90px]">
        {/* Background image - cropped as per Figma */}
        <Image
          src="/images/94bd3e783067df81147885fce6e41cf8c7a90714.png"
          alt="Dubai real estate aerial background"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-dld-dark/70 via-dld-dark/50 to-dld-dark/80" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Content section */}
      <div className="bg-dld-surface py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto]">
            <div>
              <h1 className="text-4xl font-bold text-dld-black md:text-5xl leading-tight">
                How to Rent Safely in Dubai
              </h1>
              <p className="mt-4 max-w-lg text-lg text-dld-text-secondary leading-relaxed">
                Your step-by-step guide to renting
              </p>
            </div>
            <div className="w-full max-w-2xl self-center">
              <AskMalik variant="light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
