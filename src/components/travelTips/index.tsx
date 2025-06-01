import { Camera, MapPin } from "lucide-react";
import TravelHeader from "./travelHeader";
import TravelCard from "./travelCard";
import DecorativeDots from "./decorativeDot";

const travelPosts = [
  {
    id: "1",
    image: "/TravelTips.jpg",
    tag: "Camera",
    tagIcon: <Camera className="w-4 h-4" />,
    date: "12. December 2023",
    title: "10 Sun Hats For Beach Days, Long Hikes, And",
    description:
      "Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit",
  },
  {
    id: "2",
    image: "/TravelTips2.jpg",
    tag: "Adventure",
    tagIcon: <MapPin className="w-4 h-4" />,
    date: "12. December 2023",
    title: "Cambodia In August: Island Hopping And Weather Tips",
    description:
      "Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit",
  },
];

export default function TravelTips() {
  return (
    <div className=" bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <DecorativeDots position="top-left" />
      <DecorativeDots position="bottom-right" />

      <div className="container mx-auto px-4 py-8 lg:py-16">
        <TravelHeader />

        {/* Travel Cards Layout */}
        <div className="relative max-w-6xl mx-auto space-y-12 lg:space-y-16">
          {/* First Card - Top Right */}
          <div className="lg:ml-auto lg:w-4/5">
            <TravelCard {...travelPosts[0]} className="relative z-10" />
          </div>

          {/* Second Card - Bottom Left with spacing */}
          <div className="lg:w-4/5">
            <TravelCard {...travelPosts[1]} className="relative z-20" />
          </div>
        </div>
      </div>
    </div>
  );
}
