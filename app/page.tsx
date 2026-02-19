import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { ThreeCardsSection } from "@/components/landing/three-cards-section";
import { InnovationSlider } from "@/components/landing/innovation-slider";
import { ExploreServices } from "@/components/landing/explore-services";
import { MalikSection } from "@/components/landing/malik-section";
import { NewsCarousel } from "@/components/landing/news-carousel";
import { MapSection } from "@/components/landing/map-section";
import { PartnersCarousel } from "@/components/landing/partners-carousel";

export default function Page() {
  return (
    <main>
      <Navbar variant="transparent" />
      <HeroSection />
      <ThreeCardsSection />
      <InnovationSlider />
      <ExploreServices />
      <MalikSection />
      <NewsCarousel />
      <MapSection />
      <PartnersCarousel />
    </main>
  );
}
