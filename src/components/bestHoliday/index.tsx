"use client";
import { type CarouselApi } from "@/components/ui/carousel";
import { HolidayCard } from "./HolidayCard";
import { SectionHeader } from "./SectionHeader";
import { BackgroundDecorations } from "./BackgroundDecorations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

const holidayPackages = [
  {
    id: 1,
    title: "Romantic Sri Lanka Honeymoon Package",
    location: "England, Maldives, Srilanka",
    duration: "7 Days - 5 Nights",
    price: 900,
    originalPrice: 1200,
    discount: 25,
    image: "/BestHoliday5.jpg?height=300&width=400",
    featured: true,
    rating: 4.8,
  },
  {
    id: 2,
    title: "7 Days tour to Explore the Beauty of Philippines",
    location: "England, Maldives, Philippines",
    duration: "6 Days - 5 Nights",
    price: 300,
    originalPrice: 450,
    discount: 33,
    image: "/BestHoliday4.jpg?height=300&width=400",
    featured: true,
    rating: 4.9,
  },
  {
    id: 3,
    title: "Everest Base Camp Trek: See the Majestic Mt. Everest",
    location: "Annapurna, France, India",
    duration: "4 Days - 2 Nights",
    price: 250,
    originalPrice: 350,
    discount: 30,
    image: "/BestHoliday1.jpg?height=300&width=400",
    featured: true,
    rating: 4.7,
  },
  {
    id: 4,
    title: "Amazing Thailand Beach Adventure",
    location: "Bangkok, Phuket, Thailand",
    duration: "5 Days - 4 Nights",
    price: 450,
    originalPrice: 600,
    discount: 25,
    image: "/BestHoliday2.jpg?height=300&width=400",
    featured: true,
    rating: 4.6,
  },
  {
    id: 5,
    title: "Japan Cultural Experience Tour",
    location: "Tokyo, Kyoto, Osaka",
    duration: "8 Days - 7 Nights",
    price: 1200,
    originalPrice: 1500,
    discount: 20,
    image: "/BestHoliday3.jpg?height=300&width=400",
    featured: true,
    rating: 4.9,
  },
  {
    id: 6,
    title:
      "Japan Cultural Experience Tour Experience Tour Experience Tour Experience Tour",
    location: "Tokyo, Kyoto, Osaka",
    duration: "8 Days - 7 Nights",
    price: 1200,
    originalPrice: 1500,
    discount: 20,
    image: "/BestHoliday3.jpg?height=300&width=400",
    featured: true,
    rating: 4.9,
  },
];

export function BestHoliday() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-16 px-4 bg-background relative overflow-hidden">
      <BackgroundDecorations />

      <div className="container mx-auto relative z-10">
        <SectionHeader />

        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {holidayPackages.map((pkg) => (
                <CarouselItem
                  key={pkg.id}
                  className="pl-4 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <HolidayCard package={pkg} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Navigation */}
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 border-gray-200" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 border-gray-200" />
          </Carousel>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: Math.ceil(holidayPackages.length / 3) }).map(
              (_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    Math.floor(current / 3) === index
                      ? "bg-orange-500"
                      : "bg-gray-300"
                  }`}
                  onClick={() => api?.scrollTo(index * 3)}
                />
              )
            )}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium">
            VIEW MORE
          </Button>
        </div>
      </div>
    </section>
  );
}
