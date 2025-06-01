"use client";

import { useState, useEffect } from "react";
import { HeroSlide } from "./HeroSlide";
import { SearchForm } from "./SearchForm";
import { BackgroundDecorations } from "./BackgroundDecorations";
import { SliderNavigation } from "./SliderNavigation";

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

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-64px)] bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden">
      <BackgroundDecorations />

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className=" flex flex-col justify-center">
          <HeroSlide slide={slides[currentSlide]} />

          <SliderNavigation
            currentSlide={currentSlide}
            totalSlides={slides.length}
            onSlideChange={setCurrentSlide}
          />
        </div>

        <SearchForm />
      </div>
    </section>
  );
}
