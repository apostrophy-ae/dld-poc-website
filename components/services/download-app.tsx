import Image from "next/image";
import { Button } from "@/components/ui/button";

export function DownloadApp() {
  return (
    <section className="bg-dld-white py-20 relative h-[691px]">
      <img
        className="absolute right-0 top-0"
        src={"/images/V6_Landing Page concept.png"}
      />
      <img
        className="absolute h-[809.596px] -top-15 right-1/2"
        src={"/images/iPhone 17 Pro.png"}
      />
    </section>
  );
}
