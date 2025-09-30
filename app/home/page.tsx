import FoodBanner from "@/components/FoodBanner";
import LandingPage from "@/components/LandingPage";
import StepsToOrder from "@/components/StepsToOrder";

export default function HomePage() {
  return (
    <main>
      <LandingPage />
      <StepsToOrder />
      <FoodBanner />
    </main>
  );
}
