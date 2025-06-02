"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Calendar, User, BarChart3 } from "lucide-react";
import { useState } from "react";

interface Trip {
  id: number;
  title: string;
  image: string;
  location: string;
  duration: string;
  people: string;
  difficulty: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  nextDeparture: string[];
  availability: string[];
}

interface TripCardProps {
  trip: Trip;
  viewMode: "grid" | "list";
}

export function TripCard({ trip, viewMode }: TripCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg overflow-hidden ${
        viewMode === "list"
          ? "flex flex-col md:flex-row"
          : "flex flex-col h-full"
      }`}
    >
      {/* Image */}
      <div className={viewMode === "list" ? "md:w-2/5 relative" : "relative"}>
        <div className="aspect-[4/3] relative">
          <Image
            src={trip.image || "/placeholder.svg"}
            alt={trip.title}
            fill
            className="object-cover"
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-2 right-2 bg-white/80 hover:bg-white rounded-full"
        >
          <MapPin className="h-5 w-5 text-gray-600" />
        </Button>
      </div>

      {/* Content */}
      <div className={`p-6 ${viewMode === "list" ? "md:w-3/5" : "flex-1"}`}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {trip.title}
            </h3>

            {/* Location */}
            <div className="flex items-center gap-1 text-orange-500 mb-4">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{trip.location}</span>
            </div>

            {/* Trip Details */}
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-1 text-gray-600">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{trip.duration}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <User className="h-4 w-4" />
                <span className="text-sm">{trip.people}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <BarChart3 className="h-4 w-4" />
                <span className="text-sm">{trip.difficulty}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-4 line-clamp-2">
              {trip.description}
            </p>

            {/* Availability */}
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-2">
                Available through out the year:
              </p>
              <div className="flex flex-wrap gap-2">
                {trip.availability.map((month) => (
                  <span
                    key={month}
                    className="text-xs text-gray-600 border border-gray-200 rounded px-2 py-1"
                  >
                    {month}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Price and Booking */}
          <div
            className={`${
              viewMode === "list"
                ? "md:w-48 flex-shrink-0 md:border-l border-gray-200 md:pl-4"
                : ""
            } border-t pt-4 ${viewMode === "list" ? "md:pt-0" : ""}`}
          >
            <div className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-1 rounded inline-block mb-2">
              {trip.discount}% Off
            </div>
            <div className="mb-4">
              <div className="text-3xl font-bold text-gray-900">
                ${trip.price}
              </div>
              <div className="text-sm text-gray-500 line-through">
                ${trip.originalPrice}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-1">
                Next Departure
              </p>
              {trip.nextDeparture.map((date) => (
                <div
                  key={date}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>{date}</span>
                </div>
              ))}
            </div>

            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              View Trip
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
