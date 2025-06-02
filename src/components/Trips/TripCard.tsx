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

  const isGrid = viewMode === "grid";

  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm ${
        isGrid ? "flex flex-col" : "flex flex-col md:flex-row"
      }`}
    >
      {/* Image */}
      <div className={isGrid ? "relative" : "md:w-2/5 relative"}>
        <div className="aspect-[4/3] relative">
          <Image
            src={trip.image || "/placeholder.svg"}
            alt={trip.title}
            fill
            className="object-cover"
          />
          {/* Badge */}
          <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
            Featured
          </div>
          {/* Heart Button */}
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
          {/* MapPin */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute bottom-2 right-2 bg-white/80 hover:bg-white rounded-full"
          >
            <MapPin className="h-5 w-5 text-gray-600" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 ${isGrid ? "" : "md:w-3/5"}`}>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{trip.title}</h3>

        <div className="flex items-center gap-1 text-orange-500 mb-4">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{trip.location}</span>
        </div>

        <div className="flex flex-wrap gap-4 mb-4 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{trip.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{trip.people}</span>
          </div>
          <div className="flex items-center gap-1">
            <BarChart3 className="h-4 w-4" />
            <span>{trip.difficulty}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{trip.description}</p>

        {/* Price and Next Departures */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <div>
            <div className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-1 rounded inline-block mb-1">
              {trip.discount}% Off
            </div>
            <div className="text-3xl font-bold text-gray-900">
              ${trip.price}
            </div>
            <div className="text-sm text-gray-500 line-through">
              ${trip.originalPrice}
            </div>
          </div>

          <div>
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
        </div>

        {/* View Details */}
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mb-4">
          View Details
        </Button>

        {/* Availability */}
        <div>
          <p className="text-sm text-gray-500 mb-2">
            Available throughout the year:
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
    </div>
  );
}
