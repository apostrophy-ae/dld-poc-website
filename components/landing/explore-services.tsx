"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, LayoutGrid, List, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const filterOptions = ["Alphabetical", "Most Popular", "Newest"];

const services = [
  {
    title: "Create, find and download your Ejari",
    category: "Renting",
    image: "/images/022478435f0bf3d527947f1a54776a5575e658eb.png",
  },
  {
    title: "Register your property and download your Title Deed",
    category: "Buying",
    image: "/images/94bd3e783067df81147885fce6e41cf8c7a90714.png",
  },
  {
    title: "Pay with TouchPoints (Minimum 2,000 TPs, valued at AED 10)",
    category: "Developers",
    image: "/images/3a3314af5a42c147fe481c62fe1901bdb95729cb.png",
  },
];

export function ExploreServices() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Alphabetical");

  const filtered = services.filter((s) =>
    s.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="bg-dld-surface py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-8">
          <Badge className="rounded-full bg-dld-green-bg text-dld-black border-0 px-5 py-2 text-sm font-medium capitalize">
            Smart Service
          </Badge>
          <h2 className="text-center text-3xl font-bold text-dld-black md:text-[64px] leading-tight">
            Explore Services
            <br />
            and Guides
          </h2>
        </div>

        {/* Controls */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-8">
          {/* Search pill */}
          <div className="flex h-14 flex-1 items-center gap-3 rounded-full border border-dld-border bg-white/40 px-6 md:max-w-lg">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search here..."
              className="min-w-0 flex-1 bg-transparent text-base text-dld-black placeholder:text-dld-text-secondary outline-none font-dubai"
              aria-label="Search services"
            />
            <Search className="size-5 shrink-0 text-dld-text-secondary" />
          </div>

          <div className="flex items-center gap-4">
            {/* Filter dropdown */}
            <div className="relative flex h-14 w-64 items-center gap-2 rounded-full border border-dld-border bg-white/40 px-6">
              <div className="flex flex-1 flex-col">
                <span className="text-xs leading-none text-dld-text-secondary">
                  Filter by
                </span>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="mt-0.5 w-full appearance-none bg-transparent text-sm font-bold text-dld-black outline-none cursor-pointer"
                  aria-label="Filter services"
                >
                  {filterOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <ChevronDown className="size-5 shrink-0 text-dld-text-secondary pointer-events-none" />
            </div>

            {/* Grid / List toggle */}
            <div className="flex h-14 items-center gap-1 rounded-full border border-dld-border bg-white/40 px-4">
              <button
                onClick={() => setView("grid")}
                aria-label="Grid view"
                className={cn(
                  "rounded-full p-2 transition-colors",
                  view === "grid"
                    ? "bg-dld-white text-dld-black shadow-sm"
                    : "text-dld-text-secondary hover:text-dld-black",
                )}
              >
                <LayoutGrid className="size-5" />
              </button>
              <button
                onClick={() => setView("list")}
                aria-label="List view"
                className={cn(
                  "rounded-full p-2 transition-colors",
                  view === "list"
                    ? "bg-dld-white text-dld-black shadow-sm"
                    : "text-dld-text-secondary hover:text-dld-black",
                )}
              >
                <List className="size-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div
          className={cn(
            view === "grid"
              ? "grid gap-8 md:grid-cols-3"
              : "flex flex-col gap-4",
          )}
        >
          {filtered.map((service) => (
            <div
              key={service.title}
              className={cn(
                "flex rounded-3xl border border-dld-border bg-dld-white p-6 transition-all duration-300 hover:shadow-[var(--dld-shadow-card)]",
                view === "grid" ? "flex-col gap-8" : "flex-row items-center gap-6",
              )}
            >
              {/* Top row: circular image + category chip */}
              <div
                className={cn(
                  "flex items-center",
                  view === "grid" ? "justify-between" : "shrink-0 gap-4",
                )}
              >
                <div className="size-20 shrink-0 overflow-hidden rounded-full bg-dld-surface">
                  <Image
                    src={service.image}
                    alt={service.category}
                    width={80}
                    height={80}
                    className="size-full object-cover"
                  />
                </div>
                {view === "grid" && (
                  <span className="rounded-full bg-dld-surface px-3 py-1.5 text-sm font-bold text-dld-text-secondary">
                    {service.category}
                  </span>
                )}
              </div>

              {/* Title + list-mode badge */}
              <div className="flex flex-1 flex-col gap-2">
                {view === "list" && (
                  <span className="rounded-full bg-dld-surface px-3 py-1 text-xs font-bold text-dld-text-secondary w-fit">
                    {service.category}
                  </span>
                )}
                <p className="text-2xl font-medium leading-snug text-dld-black font-dubai">
                  {service.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
