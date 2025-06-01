"use client";

import { Button } from "@/components/ui/button";

interface SliderNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (index: number) => void;
}

export function SliderNavigation({
  currentSlide,
  totalSlides,
  onSlideChange,
}: SliderNavigationProps) {
  return (
    <div className="flex justify-center space-x-2 mb-8">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <Button
          key={index}
          variant="ghost"
          size="sm"
          className={`w-12 h-12 rounded-full p-0 ${
            index === currentSlide
              ? "bg-orange-500 text-white"
              : "bg-white text-orange-500 border border-orange-200"
          }`}
          onClick={() => onSlideChange(index)}
        >
          {index + 1}
        </Button>
      ))}
    </div>
  );
}
