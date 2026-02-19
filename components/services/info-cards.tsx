import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const infoCards = [
  {
    title: "Rental Index",
    caption:
      "Check the official rental range for your area and property type. Use the RERA Rental Index to understand fair market value and ensure you’re paying the right rent.",
  },
  {
    title: "Find a Broker",
    caption:
      "Search for licensed RERA-approved brokers and agencies. Verify credentials to ensure you’re working with trusted professionals.",
  },
  {
    title: "Dubai REST",
    caption:
      "Access the official platform to register, manage, and renew your tenancy. Secure your Ejari, track contracts, and handle disputes in one place.",
  },
  {
    title: "Ejari Explained",
    caption:
      "Understand what Ejari is, why it’s required, and how it protects your tenancy. Learn how registration makes your contract legally recognised in Dubai.",
  },
];

export function InfoCards() {
  return (
    <section className="bg-dld-surface py-20  relative mb-50">
      <div
        style={{
          backgroundImage:
            'url("/images/b2bfe6cdb05c5239b33b718f9a107143a7209324.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 29%",
          height: 300,
        }}
        className="absolute w-full   z-0"
      />
      <div className="mx-auto max-w-7xl px-6  z-1 relative top-35">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="group flex h-[270px] flex-col gap-4 rounded-3xl border border-dld-border bg-dld-white p-6 shadow-[var(--dld-shadow-card)] transition-all hover:border-dld-green"
            >
              <h3 className="text-2xl font-bold text-dld-black">
                {card.title}
              </h3>
              <p className="text-sm text-dld-text-secondary leading-relaxed">
                {card.caption}
              </p>
              <Button className="py-5 items-center justify-center mt-auto w-fit rounded-full bg-dld-green text-dld-white hover:bg-dld-green/90 uppercase text-xs tracking-widest font-bold px-5 gap-2">
                Explore
                <ArrowRight className="size-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
