import { BestHoliday } from "@/components/bestHoliday";
import { Breathtaking } from "@/components/Breathtaking";

import { HeroCousel } from "@/components/heroSlider/useCousel";
import { LatestBlog } from "@/components/LatestBlog";
import TravelTips from "@/components/travelTips";

export default function Home() {
  return (
    <div className="wapper">
      {/* <HeroSlider /> */}
      <HeroCousel />
      <TravelTips />
      <BestHoliday />
      <Breathtaking />
      <LatestBlog />
    </div>
  );
}
