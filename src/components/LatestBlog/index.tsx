"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { SectionHeader } from "./SectionHeader";
import { BlogCard } from "./BlogCard";

const blogPosts = [
  {
    id: 1,
    title: "10 Sun Hats For Beach Days, Long",
    description:
      "Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.",
    date: "12. December 2023",
    image: "/blog1.jpg?height=300&width=400",
    slug: "10-sun-hats-for-beach-days",
  },
  {
    id: 2,
    title: "Cambodia In August: Island Hopping And Weather",
    description:
      "Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.",
    date: "12. December 2023",
    image: "/blog2.jpg?height=300&width=400",
    slug: "cambodia-august-island-hopping",
  },
  {
    id: 3,
    title: "Kenya vs Tanzania Safari: The Better African",
    description:
      "Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.",
    date: "12. December 2023",
    image: "/blog3.jpg?height=300&width=400",
    slug: "kenya-vs-tanzania-safari",
  },
  {
    id: 4,
    title: "Best Time to Visit Japan: Cherry Blossom Season",
    description:
      "Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.",
    date: "10. December 2023",
    image: "/blog4.jpg?height=300&width=400",
    slug: "best-time-visit-japan",
  },
  {
    id: 5,
    title: "Ultimate Guide to European Backpacking",
    description:
      "Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.",
    date: "08. December 2023",
    image: "/blog4.jpg?height=300&width=400",
    slug: "european-backpacking-guide",
  },
];

export function LatestBlog() {
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
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <SectionHeader />

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
              {blogPosts.map((post) => (
                <CarouselItem
                  key={post.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="h-full">
                    <BlogCard post={post} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Navigation Arrows */}
            <div className="hidden md:flex justify-between absolute top-1/4 -left-4 -right-4 -translate-y-1/2 z-10 px-4">
              <Button
                onClick={() => api?.scrollPrev()}
                size="icon"
                variant="outline"
                className="size-10 rounded-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 shadow-md"
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
                className="size-10 rounded-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 shadow-md"
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
            {Array.from({ length: Math.ceil(blogPosts.length / 3) }).map(
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

        <div className="text-center mt-12">
          <Button className="text-foreground text-white px-8 py-3 rounded-full font-medium">
            VIEW MORE
          </Button>
        </div>
      </div>
    </section>
  );
}
