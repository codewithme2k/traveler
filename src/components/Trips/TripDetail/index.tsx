"use client";

import { useState } from "react";
import Image from "next/image";
import { TripDetailHeader } from "./TripDetailHeader";
import { TripDetailTabs } from "./TripDetailTabs";
import { TripOverview } from "./TripOverview";
import { TripItinerary } from "./TripItinerary";
import { TripCost } from "./TripCost";
import { TripFAQs } from "./TripFAQs";
import { TripMap } from "./TripMap";
import { TripBooking } from "./TripBooking";
import { TripFeatures } from "./TripFeatures";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample trip data
const tripData = {
  id: "philippines-tour",
  title: "7 Days tour to Explore the Beauty of Philippines",
  days: 6,
  images: [
    "/about1.jpg?height=600&width=800",
    "/about2.jpg?height=600&width=800",
    "/blog1.jpg?height=600&width=800",
  ],
  priceAdult: 300,
  priceChild: 200,
  features: {
    accommodation: "3 Stars Hotels",
    transportation: "Bus, Airlines",
    maxAltitude: "5,416 metres",
    departureCity: "Kathmandu",
    bestSeason: "Feb, Mar, Apr & May",
    tourAvailability: "Available",
    meals: "All meals during the trip",
    language: "English, Spanish, French, Chinese",
    walkingHours: "5-6 Hours",
    wifi: "Available",
    minAge: "12",
    maxAge: "65",
  },
  overview: {
    description:
      "Travel is the movement of people between relatively distant geographical locations, and can involve travel by foot, bicycle, automobile, train, boat, bus, airplane, or other means, with or without luggage, and can be one way or round trip. Travel can also include relatively short stays between successive movements.",
    highlights: [
      "Trek to the world-famous Everest Base Camp",
      "Enjoy the amazing view of the Himalayas from Kala Patthar",
      "Travel through the Sherpa villages of Namche, Khumjung, Khunde, and Dingboche",
      "Visit Tengboche the biggest and oldest monastery in the region",
    ],
  },
  itinerary: [
    {
      day: 1,
      title:
        "Kathmandu to Pokhara (By flight or Bus), the city of Lakes, adventures and serenity",
      description: "Detailed description of day 1 activities...",
      isHighlighted: true,
    },
    {
      day: 2,
      title: "Drive to Nayapul and trek to Ulleri",
      description: "Detailed description of day 2 activities...",
      isHighlighted: false,
    },
    {
      day: 3,
      title: "Trek to Ghorepani",
      description: "Detailed description of day 3 activities...",
      isHighlighted: false,
    },
    {
      day: 4,
      title: "Early trek to Poon Hill, Back to Ghorepani and Trek to Tadapani",
      description: "Detailed description of day 4 activities...",
      isHighlighted: false,
    },
    {
      day: 5,
      title: "Tadapani to Chomrong",
      description: "Detailed description of day 5 activities...",
      isHighlighted: false,
    },
    {
      day: 6,
      title: "Chomrong to Dobhan (Dovan)",
      description: "Detailed description of day 6 activities...",
      isHighlighted: false,
    },
    {
      day: 7,
      title: "Dovan to Deurali",
      description: "Detailed description of day 7 activities...",
      isHighlighted: true,
    },
  ],
  costIncludes: [
    "Pick-up or Drop-off service from and to Airport(in our own vehicle)",
    "Transportation to and from!!",
    "Food all along the trip(Breakfast, Lunch, Dinner and a cup of coffee or tea) and accommodations during the trip in hotels with family environment",
    "Transportation, food, accommodation and insurance of Guide during the trip",
    "Down jacket, all-season sleeping bag, duffel bag and trekking map(in case if you don't have your own. Down jacket, sleeping bag and duffel bag must be returned after completion of the trip)",
    "First Aid Medical Kit(Your guide will carry the Medical Kit but we also advise to bring yourself for your own use, as far as possible)",
    "All the required permits and paperwork",
  ],
  costExcludes: [
    "International Airfare",
    "Visa Charges",
    "Hotel Expenses(In Kathmandu, some packages do include hotel expenses)",
    "Your travel and medical insurance",
    "Personal Expenses such as shopping, bar bills, hot shower, telephone, laundry, titbits etc",
    "Food and accommodations in Kathmandu",
    "Services not mentioned or not promised by the agent/agency",
    "Emergency expenses such as expenses on chartered helicopter.",
  ],
  faqs: [
    {
      question: "What is the best time to visit Philippines?",
      answer:
        "The best time to visit the Philippines is during the dry season from November to April. March and April are generally the hottest months, while December to February offers cooler temperatures ideal for exploring.",
    },
    {
      question: "Do I need a visa to visit Philippines?",
      answer:
        "Many countries can enter the Philippines visa-free for stays of 30 days or less. However, requirements vary by nationality, so it's best to check with the Philippine embassy or consulate in your country before traveling.",
    },
    {
      question: "What currency is used in Philippines?",
      answer:
        "The Philippine Peso (PHP) is the official currency. While major credit cards are accepted in hotels and larger establishments, it's advisable to carry cash for smaller vendors, especially in rural areas.",
    },
    {
      question: "Is it safe to travel to Philippines?",
      answer:
        "Most tourist destinations in the Philippines are safe for travelers. However, like any destination, it's important to stay aware of your surroundings, follow local advice, and take standard precautions with your belongings.",
    },
  ],
};

export default function TripDetailPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % tripData.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + tripData.images.length) % tripData.images.length
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content - 2/3 width on desktop */}
        <div className="lg:col-span-2">
          {/* Trip Header */}
          <TripDetailHeader title={tripData.title} days={tripData.days} />

          {/* Trip Image Carousel */}
          <div className="relative rounded-lg overflow-hidden mb-8">
            <div className="aspect-[16/9] relative">
              <Image
                src={tripData.images[currentImageIndex] || "/placeholder.jpg"}
                alt={tripData.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Gallery Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute bottom-4 right-4 bg-white/80 hover:bg-white rounded-md flex items-center gap-1"
            >
              <ImageIcon className="h-4 w-4" />
              <span>Gallery</span>
            </Button>
          </div>

          {/* Trip Features - Mobile Only */}
          <div className="lg:hidden mb-8">
            <TripFeatures features={tripData.features} />
          </div>

          {/* Trip Tabs */}
          <TripDetailTabs activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Tab Content */}
          <div className="mt-8">
            {activeTab === "overview" && (
              <TripOverview overview={tripData.overview} />
            )}
            {activeTab === "itinerary" && (
              <TripItinerary itinerary={tripData.itinerary} />
            )}
            {activeTab === "cost" && (
              <TripCost
                costIncludes={tripData.costIncludes}
                costExcludes={tripData.costExcludes}
              />
            )}
            {activeTab === "faqs" && <TripFAQs faqs={tripData.faqs} />}
            {activeTab === "map" && <TripMap />}
          </div>
        </div>

        {/* Sidebar - 1/3 width on desktop */}
        <div className="lg:col-span-1">
          {/* Trip Booking */}
          <TripBooking
            priceAdult={tripData.priceAdult}
            priceChild={tripData.priceChild}
          />

          {/* Trip Features - Desktop Only */}
          <div className="hidden lg:block mt-8">
            <TripFeatures features={tripData.features} />
          </div>
        </div>
      </div>
    </div>
  );
}
