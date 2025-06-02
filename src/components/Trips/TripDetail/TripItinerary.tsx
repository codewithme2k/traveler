"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MapPin } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  isHighlighted: boolean;
}

interface TripItineraryProps {
  itinerary: ItineraryDay[];
}

export function TripItinerary({ itinerary }: TripItineraryProps) {
  const [expandAll, setExpandAll] = useState(false);
  const [expandedDays, setExpandedDays] = useState<number[]>([]);

  const toggleDay = (day: number) => {
    if (expandedDays.includes(day)) {
      setExpandedDays(expandedDays.filter((d) => d !== day));
    } else {
      setExpandedDays([...expandedDays, day]);
    }
  };

  const handleExpandAllChange = (checked: boolean) => {
    setExpandAll(checked);
    if (checked) {
      setExpandedDays(itinerary.map((day) => day.day));
    } else {
      setExpandedDays([]);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Itinerary</h2>
        <div className="flex items-center space-x-2">
          <Label htmlFor="expand-all" className="text-sm text-gray-600">
            Expand all
          </Label>
          <Switch
            id="expand-all"
            checked={expandAll}
            onCheckedChange={handleExpandAllChange}
          />
        </div>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

        {/* Itinerary days */}
        <div className="space-y-4">
          {itinerary.map((day) => {
            const isExpanded = expandedDays.includes(day.day);
            return (
              <div key={day.day} className="relative pl-12">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-1.5 w-8 h-8 rounded-full flex items-center justify-center ${
                    day.isHighlighted
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <MapPin className="h-4 w-4" />
                </div>

                {/* Day content */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="flex justify-between items-center w-full text-left p-4"
                    onClick={() => toggleDay(day.day)}
                  >
                    <div>
                      <span className="font-medium">Day {day.day} : </span>
                      <span>{day.title}</span>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="p-4 pt-0 border-t border-gray-200 bg-gray-50">
                      <p className="text-gray-700">{day.description}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
