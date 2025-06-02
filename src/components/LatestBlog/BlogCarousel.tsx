"use client";

import { BlogCard } from "./BlogCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
}

interface BlogCarouselProps {
  posts: BlogPost[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function BlogCarousel({
  posts,
  autoPlay = true,
  autoPlayInterval = 4000,
}: BlogCarouselProps) {
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

  // Auto-play functionality
  useEffect(() => {
    if (!api || !autoPlay) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [api, autoPlay, autoPlayInterval]);

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {posts.map((post) => (
            <CarouselItem
              key={post.id}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="h-full">
                <BlogCard post={post} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Navigation Arrows */}
        <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 z-10 px-4">
          <Button
            onClick={() => api?.scrollPrev()}
            size="icon"
            variant="outline"
            className="h-12 w-12 rounded-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 shadow-md"
          >
            <span className="sr-only">Previous slide</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Button>
          <Button
            onClick={() => api?.scrollNext()}
            size="icon"
            variant="outline"
            className="h-12 w-12 rounded-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 shadow-md"
          >
            <span className="sr-only">Next slide</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Button>
        </div>
      </Carousel>

      {/* Dots Navigation */}
      <div className="flex justify-center space-x-2 mt-8">
        {Array.from({ length: Math.ceil(posts.length / 3) }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              Math.floor(current / 3) === index
                ? "bg-orange-500"
                : "bg-gray-300"
            }`}
            onClick={() => api?.scrollTo(index * 3)}
          />
        ))}
      </div>
    </div>
  );
}
