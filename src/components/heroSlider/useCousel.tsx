"use client";

import React, { useState, useEffect } from "react";
import { HeroSlide } from "./HeroSlide";
import { SearchForm } from "./SearchForm";
import { BackgroundDecorations } from "./BackgroundDecorations";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { Button } from "../ui/button";
const slides = [
  {
    id: 1,
    subtitle: "Lets Go Now",
    title: "Explore World And Find The Beauty",
    description:
      "Cras ultrices ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisl, pretium ut lacinia convallis at tellus.",
    buttonText: "APPOINTMENT",
    image1: "/banner-img-1-1.jpg?height=400&width=400",
    image2: "/banner-img-1-2.jpg?height=300&width=300",
    image1Alt: "Tropical beach with traditional boat",
    image2Alt: "Woman with hat enjoying vacation",
  },
  {
    id: 2,
    subtitle: "Lets Go Now",
    title: "Uncovering Stories, One Trip At A Time",
    description:
      "Cras ultrices ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisl, pretium ut lacinia convallis at tellus.",
    buttonText: "READ MORE",
    image1: "/banner-img-2-1.jpg?height=400&width=400",
    image2: "/banner-img-2-2.jpg?height=300&width=300",
    image1Alt: "Beautiful coastal scenery",
    image2Alt: "Historic architecture",
  },
  {
    id: 3,
    subtitle: "Lets Go Now",
    title: "Explore Earth And Like The Supreme",
    description:
      "Cras ultrices ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisl, pretium ut lacinia convallis at tellus.",
    buttonText: "READ MORE",
    image1: "/banner-img-3-1.jpg?height=400&width=400",
    image2: "/banner-img-3-2.jpg?height=300&width=300",
    image1Alt: "Mountain hiking adventure",
    image2Alt: "Yellow luggage on mountain",
  },
];

export function HeroCousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden">
      <BackgroundDecorations />

      <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center">
        <div className="min-h-[calc(100vh-300px)] flex flex-col justify-center w-full">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {slides.map((slide) => (
                <CarouselItem
                  key={slide.id}
                  className="flex items-center justify-center"
                >
                  <div className="w-full">
                    <HeroSlide slide={slide} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 xl:-left-8 top-1/2 -translate-y-1/2 bg-background hover:bg-gray-50 border-gray-200 text-orange-500 hover:text-orange-500" />
            <CarouselNext className="absolute right-0  xl:-right-8 top-1/2 -translate-y-1/2 bg-background hover:bg-gray-50 border-gray-200 text-orange-500 hover:text-orange-500" />
          </Carousel>

          {/* Custom Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8 mb-8">
            {Array.from({ length: count }).map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`w-12 h-12 rounded-full p-0 ${
                  index === current
                    ? "bg-orange-500 text-white"
                    : "bg-white text-orange-500 border border-orange-200"
                }`}
                onClick={() => api?.scrollTo(index)}
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto  mb-16">
          <SearchForm />
        </div>
      </div>
    </section>
  );
}
