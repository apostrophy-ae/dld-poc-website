import { Navbar } from "@/components/navbar";
import { ServicesHero } from "@/components/services/services-hero";
import { InfoCards } from "@/components/services/info-cards";
import { DownloadApp } from "@/components/services/download-app";
import { RentingServices } from "@/components/services/renting-services";
import { RentingNews } from "@/components/services/renting-news";

export default function ServicesPage() {
  return (
    <main>
      <Navbar variant="white" />
      <ServicesHero />
      <InfoCards />
      <DownloadApp />
      <RentingServices />
      <RentingNews />
    </main>
  );
}
