import Image from "next/image";
import { Button } from "@/components/ui/button";

export function DownloadApp() {
  return (
    <section className="bg-dld-white py-20 relative h-[700px] overflow-hidden w-full">
      <img
        className="absolute right-0 top-0 object-cover w-full h-full object-center"
        src={"/images/V6_Landing Page concept.png"}
      />
    </section>
  );
}
