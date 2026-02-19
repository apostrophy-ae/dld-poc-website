import { Navbar } from "@/components/navbar";
import { RentHeader } from "@/components/how-to-rent/rent-header";
import { StepsCards } from "@/components/how-to-rent/steps-cards";

export default function HowToRentPage() {
  return (
    <main>
      <Navbar variant="transparent" />

      <RentHeader />
      <StepsCards />
    </main>
  );
}
