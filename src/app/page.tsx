import { BestHoliday } from "@/components/bestHoliday";
import { Breathtaking } from "@/components/Breathtaking";
import { HeroSlider } from "@/components/heroSlider";
import TravelTips from "@/components/travelTips";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSlider />
      <TravelTips />
      <BestHoliday />
      <Breathtaking />
    </div>
  );
}
