"use client";

import { useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Filter, Grid3X3, List } from "lucide-react";
import { FilterSidebar } from "./FilterSidebar";
import { MobileFilterBar } from "./MobileFilterBar";
import { TripCard } from "./TripCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

// Sample trip data
const trips = [
  {
    id: 1,
    title: "Everest Base Camp Trek: See the Majestic Mt. Everest",
    image: "/placeholder.jpg?height=300&width=400",
    location: "Annapurna, France, India",
    duration: "4 Days",
    people: "1 Person",
    difficulty: "Hard",
    description:
      "Travel is the movement of people between relatively distant geographical locations, and can involve travel by foot, bicycle, automobile, train, boat, bus, airplane, or other means, with or without luggage.",
    price: 150,
    originalPrice: 350,
    discount: 30,
    nextDeparture: ["Jun 03", "Jun 04", "Jun 05"],
    availability: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  {
    id: 2,
    title: "Maldives: The Travel and Experience of the Lifetime",
    image: "/placeholder.jpg?height=300&width=400",
    location: "Colombo, England, France",
    duration: "8 Days",
    people: "1 Person",
    difficulty: "Medium",
    description:
      "Travel is the movement of people between relatively distant geographical locations, and can involve travel by foot, bicycle, automobile, train, boat, bus, airplane, or other means, with or without luggage.",
    price: 250,
    originalPrice: 350,
    discount: 30,
    nextDeparture: ["Jun 03", "Jun 04", "Jun 05"],
    availability: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  {
    id: 3,
    title: "Experience the Incredible India With travolo",
    image: "/placeholder.jpg?height=300&width=400",
    location: "Bhutan, Nepal, Peru, Srilanka",
    duration: "6 Days",
    people: "1 Person",
    difficulty: "Medium",
    description:
      "Travel is the movement of people between relatively distant geographical locations, and can involve travel by foot, bicycle, automobile, train, boat, bus, airplane, or other means, with or without luggage.",
    price: 250,
    originalPrice: 350,
    discount: 30,
    nextDeparture: ["Jun 03", "Jun 04", "Jun 05"],
    availability: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  {
    id: 4,
    title: "Experience the Incredible India With travolo",
    image: "/placeholder.jpg?height=300&width=400",
    location: "Bhutan, Nepal, Peru, Srilanka",
    duration: "6 Days",
    people: "1 Person",
    difficulty: "Medium",
    description:
      "Travel is the movement of people between relatively distant geographical locations, and can involve travel by foot, bicycle, automobile, train, boat, bus, airplane, or other means, with or without luggage.",
    price: 340,
    originalPrice: 350,
    discount: 30,
    nextDeparture: ["Jun 03", "Jun 04", "Jun 05"],
    availability: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  {
    id: 5,
    title: "A Experience the Incredible India With travolo",
    image: "/placeholder.jpg?height=300&width=400",
    location: "Bhutan, Nepal, Peru, Srilanka",
    duration: "6 Days",
    people: "1 Person",
    difficulty: "Medium",
    description:
      "Travel is the movement of people between relatively distant geographical locations, and can involve travel by foot, bicycle, automobile, train, boat, bus, airplane, or other means, with or without luggage.",
    price: 210,
    originalPrice: 350,
    discount: 30,
    nextDeparture: ["Jun 03", "Jun 04", "Jun 05"],
    availability: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
];

// Định nghĩa DestinationState ở TripsPage cho đồng nhất với FilterSidebar
const allDestinationKeys = [
  "Annapurna",
  "Bhutan",
  "Colombo",
  "England",
  "France",
  "Nepal",
  "Peru",
  "Srilanka",
  "India",
  "Other",
];
type DestinationState = Record<string, boolean>;

export default function TripsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState<string>("latest");
  const [filteredTrips, setFilteredTrips] = useState(trips);
  // State cho destination filter (giữ lại khi đóng mở sheet)
  const [destination, setDestination] = useState<DestinationState>(
    Object.fromEntries(
      allDestinationKeys.map((k) => [k, false])
    ) as DestinationState
  );
  // Thêm state priceRange ở TripsPage và truyền xuống FilterSidebar
  const [priceRange, setPriceRange] = useState<[number, number]>([250, 900]);

  // Sort logic
  const sortTrips = (tripsList: typeof trips, sortKey: string) => {
    let sorted = [...tripsList];
    if (sortKey === "name") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortKey === "low-to-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortKey === "high-to-low") {
      sorted.sort((a, b) => b.price - a.price);
    } else {
      // latest or default
      sorted = [...tripsList];
    }
    return sorted;
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setFilteredTrips((prev) => sortTrips(prev, value));
  };

  // Example filter: filter by difficulty/location (expand as needed)
  const handleFilterChange = (filter: {
    difficulty?: string;
    location?: string;
    priceRange?: [number, number];
  }) => {
    let filtered = trips;
    if (filter.difficulty) {
      filtered = filtered.filter((t) => t.difficulty === filter.difficulty);
    }
    if (filter.location) {
      filtered = filtered.filter((t) => t.location.includes(filter.location!));
    }
    if (filter.priceRange && Array.isArray(filter.priceRange)) {
      filtered = filtered.filter(
        (t) => t.price >= filter.priceRange![0] && t.price <= filter.priceRange![1]
      );
    }
    setFilteredTrips(sortTrips(filtered, sortBy));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Trips</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <FilterSidebar
            onFilterChange={handleFilterChange}
            destination={destination}
            setDestination={setDestination}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Mobile Filter Bar */}
          <div className="block lg:hidden mb-4">
            <Sheet open={mobileFilterOpen} onOpenChange={setMobileFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
                <div className="h-full overflow-auto py-6 px-4">
                  <h2 className="text-lg font-semibold mb-4">Filters</h2>
                  <FilterSidebar
                    onFilterChange={handleFilterChange}
                    destination={destination}
                    setDestination={setDestination}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                  />
                </div>
              </SheetContent>
            </Sheet>
            <MobileFilterBar
              tripCount={filteredTrips.length}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              onFilterClick={() => setMobileFilterOpen(true)}
              onSortChange={handleSortChange}
            />
          </div>

          {/* Desktop Filter Bar */}
          <div className="hidden lg:flex justify-between items-center mb-6">
            <div className="text-sm text-gray-600">
              {filteredTrips.length} trips found
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort:</span>
                <Select onValueChange={handleSortChange}>
                  <SelectTrigger className="w-[200px] text-sm">
                    <SelectValue placeholder="Latest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="latest">Latest</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="low-to-high">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="high-to-low">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="short-to-long">
                      Duration: Short to Long
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex border rounded-md overflow-hidden">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  className="rounded-none"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  className="rounded-none"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Trip Cards */}
          <div
            className={
              viewMode === "list"
                ? "space-y-6"
                : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            }
          >
            {filteredTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} viewMode={viewMode} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-8 text-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2">
              LOAD MORE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
