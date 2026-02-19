"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const cards = [
  {
    title: "Buy",
    description:
      "Find your dream property in Dubai with our comprehensive buying guides and services.",
    href: "/services",
    image: "/images/buy-card.png",
    gradient: "from-dld-green/30 via-dld-blue/20 to-dld-green/10",
  },
  {
    title: "Build",
    description:
      "Build your future with confidence using our development and construction services.",
    href: "/services",
    image: "/images/3a3314af5a42c147fe481c62fe1901bdb95729cb.png",
    gradient: "from-dld-blue/30 via-dld-green/20 to-dld-blue/10",
  },
  {
    title: "Rent",
    description:
      "Discover rental opportunities across Dubai with trusted rental services and guides.",
    href: "/services",
    image: "/images/rent-car.png",
    gradient: "from-dld-green/20 via-dld-blue/30 to-dld-green/15",
  },
];

export function ThreeCardsSection() {
  return (
    <section className="bg-dld-surface py-20">
      <div className="mx-auto max-w-7xl px-6 item-center">
        <h2 className="mb-10 text-start text-3xl font-bold text-dld-black md:text-[64px]">
          Where living starts in Dubai...
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group flex flex-col overflow-hidden rounded-3xl border border-dld-border bg-dld-white transition-all duration-300 hover:shadow-[var(--dld-shadow-card)] hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`}
                />
                <Image
                  src={card.image}
                  alt={`${card.title} property in Dubai`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={() => {}}
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-2xl font-bold text-dld-black">
                  {card.title}
                </h3>
                <p className="text-sm text-dld-text-secondary leading-relaxed">
                  {card.description}
                </p>
                <div className="mt-auto pt-4">
                  <Button className="rounded-full bg-dld-green text-dld-white hover:bg-dld-green/90 uppercase text-xs tracking-widest font-bold px-6">
                    Explore
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full py-4 mt-10 flex">
          <Button className="bg-transparent border border-dld-green text-dld-green rounded-3xl mx-auto px-6 py-4">
            VIEW ALL SERVICES
          </Button>
        </div>
      </div>
    </section>
  );
}
