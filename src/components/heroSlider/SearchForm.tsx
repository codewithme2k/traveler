"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Calendar, Activity, DollarSign } from "lucide-react";

export function SearchForm() {
  const [destination, setDestination] = useState("");
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [priceRange, setPriceRange] = useState("");

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mx-auto max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        {/* Destination */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-orange-500" />
            Destination
          </label>
          <Select value={destination} onValueChange={setDestination}>
            <SelectTrigger className="border-gray-200">
              <SelectValue placeholder="Select destination" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="thailand">Thailand</SelectItem>
              <SelectItem value="vietnam">Vietnam</SelectItem>
              <SelectItem value="japan">Japan</SelectItem>
              <SelectItem value="korea">Korea</SelectItem>
              <SelectItem value="singapore">Singapore</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Activity */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Activity className="w-4 h-4 text-orange-500" />
            Activity
          </label>
          <Select value={activity} onValueChange={setActivity}>
            <SelectTrigger className="border-gray-200">
              <SelectValue placeholder="Select activity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="adventure">Adventure</SelectItem>
              <SelectItem value="cultural">Cultural</SelectItem>
              <SelectItem value="beach">Beach</SelectItem>
              <SelectItem value="mountain">Mountain</SelectItem>
              <SelectItem value="city">City Tour</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Duration */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-orange-500" />
            Duration
          </label>
          <Select value={duration} onValueChange={setDuration}>
            <SelectTrigger className="border-gray-200">
              <SelectValue placeholder="4 Days - 8 Days" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-3">1 - 3 Days</SelectItem>
              <SelectItem value="4-8">4 - 8 Days</SelectItem>
              <SelectItem value="9-15">9 - 15 Days</SelectItem>
              <SelectItem value="16+">16+ Days</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-orange-500" />
            Price Range
          </label>
          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger className="border-gray-200">
              <SelectValue placeholder="$250 - $900" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-250">$0 - $250</SelectItem>
              <SelectItem value="250-500">$250 - $500</SelectItem>
              <SelectItem value="500-1000">$500 - $1000</SelectItem>
              <SelectItem value="1000+">$1000+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium h-10">
          Find Now
        </Button>
      </div>
    </div>
  );
}
