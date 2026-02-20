"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SearchPropertyModal } from "@/components/how-to-rent/search-property-modal";

const steps = [
  {
    number: 1,
    title: "Find & Verify the Property",
    description:
      "Start by identifying your needs and finding the right property in Dubai.",
    details: [
      "Browse listings on Dubai REST app or trusted platforms",
      "Contact RERA-licensed real estate brokers only",
      "Schedule property viewings and inspections",
      "Verify property ownership through DLD",
    ],
    link: "Search for property",
    openModal: true,
    image: "/images/94bd3e783067df81147885fce6e41cf8c7a90714.png",
    gradient: "from-dld-green/25 via-dld-blue/15 to-dld-green/10",
  },
  {
    number: 2,
    title: "Check the Rental Value (RERA Index)",
    description:
      "Use the RERA Rental Index to ensure you're paying a fair price.",
    details: [
      "Access the RERA Rental Index calculator online",
      "Enter property details to check fair rental value",
      "Compare with similar properties in the area",
      "Understand annual rent increase caps",
    ],
    link: "RERA Index Explained",
    openModal: true,
    image: "/images/27d4692d979c0a130e1365c3606e19e4bdc92b0e.png",
    gradient: "from-dld-blue/25 via-dld-green/15 to-dld-blue/10",
  },
  {
    number: 3,
    title: "Agree Terms & Sign the Tenancy Contract",
    description:
      "Negotiate and finalize the tenancy agreement with your landlord.",
    details: [
      "Review all contract terms and conditions carefully",
      "Negotiate rent amount and payment schedule",
      "Agree on maintenance responsibilities",
      "Sign the unified tenancy contract",
    ],
    link: "Learn more",
    openModal: true,
    image: "/images/e6cd070f129dea7c6d6fed8e8c7e13bc02bc534c.png",
    gradient: "from-dld-green/20 via-dld-blue/20 to-dld-green/15",
  },
  {
    number: 4,
    title: "Register Ejari (Legal Registration)",
    description: "Register your tenancy contract through the Ejari system.",
    details: [
      "Prepare required documents (Emirates ID, passport, visa)",
      "Submit application online or at service center",
      "Pay the Ejari registration fee",
      "Receive your Ejari certificate",
    ],
    link: "Learn more",
    openModal: true,
    image: "/images/3880bf58682a486a5aa4272d5694d20bcf5847cf.png",
    gradient: "from-dld-blue/20 via-dld-green/15 to-dld-blue/15",
  },
  {
    number: 5,
    title: "Manage & Renew Your Tenancy",
    description: "Keep your tenancy in good standing and plan for renewal.",
    details: [
      "Set up DEWA (water and electricity) account",
      "Document property condition at move-in",
      "Understand your rights regarding renewals",
      "Plan renewal at least 90 days before expiry",
    ],
    link: "Learn more",
    openModal: false,
    image: "/images/1325851a22016c025f7249a1b70ce5201b9cdbd3.png",
    gradient: "from-dld-green/25 via-dld-green/15 to-dld-blue/10",
  },
];

export function StepsCards() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="bg-dld-surface py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group overflow-hidden rounded-2xl bg-dld-white shadow-[var(--dld-shadow-card)] transition-all hover:shadow-lg"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image with number overlay */}
                <div
                  className={`relative flex items-center justify-center bg-gradient-to-br ${step.gradient} lg:w-96 lg:shrink-0 h-64 lg:h-auto`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    onError={() => {}}
                  />
                  {/* Number overlay */}
                  <span className="absolute top-6 left-6 text-6xl font-bold text-dld-white drop-shadow-md z-10">
                    {step.number}
                  </span>
                  {/* Gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dld-dark/50 via-transparent to-dld-dark/20" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between gap-6 p-8 lg:flex-row lg:items-start">
                  <div className="flex-1">
                    <h3 className="text-[24px] font-bold text-dld-black mb-[32px]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[16px] font-medium text-dld-text-secondary">
                      {step.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {step.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-dld-text-body"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5  text-[16px] font-medium shrink-0 rounded-full bg-dld-black" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {step.openModal ? (
                    <button
                      onClick={() => setModalOpen(true)}
                      className="flex shrink-0 items-center gap-2 text-sm font-medium text-dld-green hover:underline whitespace-nowrap self-end"
                      aria-label={`Open property search guide: ${step.link}`}
                    >
                      {step.link}
                      <ArrowRight className="size-4" />
                    </button>
                  ) : (
                    <button className="flex shrink-0 items-center gap-2 text-sm font-medium text-dld-green hover:underline whitespace-nowrap">
                      {step.link}
                      <ArrowRight className="size-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SearchPropertyModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
}
