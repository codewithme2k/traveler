import { BestHoliday } from "@/components/bestHoliday";
import { Breathtaking } from "@/components/Breathtaking";

import { HeroCousel } from "@/components/heroSlider/useCousel";
import TravelTips from "@/components/travelTips";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <HeroSlider /> */}
      <HeroCousel />
      <TravelTips />
      <BestHoliday />
      <Breathtaking />
    </div>
  );
}
