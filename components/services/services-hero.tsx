import Image from "next/image";
import Link from "next/link";
import { AskMalik } from "@/components/ask-malik";

const cards = [
  {
    title: "How to Invest & Buy Property in Dubai",
    href: "/how-to-rent",
    image: "/images/27d4692d979c0a130e1365c3606e19e4bdc92b0e.png",
    badge: null,
  },
  {
    title: "How to Rent Safely in Dubai",
    href: "/how-to-rent",
    image: "/images/94bd3e783067df81147885fce6e41cf8c7a90714.png",
    badge: null,
  },
];

export function ServicesHero() {
  return (
    <section className="bg-dld-surface py-20 pt-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          {/* Left text */}
          <div className="flex flex-1 flex-col justify-center lg:pt-8">
            <p className="text-2xl font-bold text-dld-green">Rent</p>
            <h1 className="mt-3 text-5xl font-bold uppercase tracking-tight text-dld-black md:text-7xl lg:text-8xl leading-none">
              Live. Belong.
              <br />
              Dubai.
            </h1>
            <p className="mt-6 max-w-md text-lg text-dld-text-secondary leading-relaxed">
              Supporting confident renting through clear regulation, transparent
              pricing, and secure digital tenancy services.
            </p>
          </div>

          {/* Right cards */}
          <div className="flex flex-col gap-6 lg:w-[700px]">
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide justify-end flex-row-reverse">
              {cards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group relative flex shrink-0 flex-col justify-end overflow-hidden rounded-[28px] min-w-[400px] h-[272px] lg:w-48 lg:h-[400px]"
                >
                  {/* Background image */}
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 scale-125 group-hover:scale-150"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dld-dark/80 via-dld-blue/30 to-transparent" />

                  {/* Popular badge */}
                  {card.badge && (
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-dld-white px-4 py-1.5 text-xs font-semibold text-dld-black shadow-sm">
                        {card.badge}
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <div className="relative px-5 pb-5">
                    <h3 className="text-sm font-bold uppercase leading-snug tracking-wide text-dld-white">
                      {card.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            <AskMalik />
          </div>
        </div>
      </div>
    </section>
  );
}
