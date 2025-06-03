"use client";

import type React from "react";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function FilterSection({
  title,
  children,
  defaultOpen = true,
}: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex items-center justify-between w-full text-left font-medium text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );
}

export interface DestinationState {
  [key: string]: boolean;
}

interface FilterSidebarProps {
  onFilterChange?: (filter: {
    difficulty?: string;
    location?: string;
    priceRange?: [number, number];
  }) => void;
  destination: DestinationState;
  setDestination: React.Dispatch<React.SetStateAction<DestinationState>>;
  priceRange: [number, number];
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
}

export function FilterSidebar({
  onFilterChange,
  destination,
  setDestination,
  priceRange,
  setPriceRange,
}: FilterSidebarProps) {
  const [durationRange, setDurationRange] = useState([4, 8]);
  // State để kiểm soát việc show full destination list
  const [showAllDestinations, setShowAllDestinations] = useState(false);

  type DestinationKey = keyof typeof destination;

  const handleDestinationChange = (name: DestinationKey) => {
    setDestination((prev) => {
      const updated = { ...prev, [name]: !prev[name] };
      if (onFilterChange) {
        const selected = (Object.keys(updated) as DestinationKey[]).find(
          (k) => updated[k]
        );
        onFilterChange({
          location: typeof selected === "string" ? selected : undefined,
        });
      }
      return updated;
    });
  };

  // Handler for difficulty filter
  const handleDifficultyClick = (difficulty: string) => {
    if (onFilterChange) onFilterChange({ difficulty });
  };

  // Handler for price filter
  const handlePriceChange = (range: [number, number]) => {
    setPriceRange(range);
    if (onFilterChange) onFilterChange({ priceRange: range });
  };

  // Danh sách destination mở rộng
  const allDestinations = [
    { key: "Annapurna", label: "Annapurna" },
    { key: "Bhutan", label: "Bhutan" },
    { key: "Colombo", label: "Colombo" },
    { key: "England", label: "England" },
    { key: "France", label: "France" },
    { key: "Nepal", label: "Nepal" },
    { key: "Peru", label: "Peru" },
    { key: "Srilanka", label: "Srilanka" },
    { key: "India", label: "India" },
    { key: "Other", label: "Other" },
  ];
  const visibleDestinations = showAllDestinations
    ? allDestinations
    : allDestinations.slice(0, 4);

  return (
    <div className="space-y-1">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold mb-4">Criteria</h2>
        <button
          className="mb-4 ml-2 py-1 bg-background hover:bg-orange-500 hover:text-white text-primary text-xs rounded"
          onClick={() => {
            setPriceRange([250, 900]);
            setDurationRange([4, 8]);
            setDestination({
              Annapurna: false,
              Bhutan: false,
              Colombo: false,
              England: false,
            });
            if (onFilterChange) onFilterChange({});
          }}
        >
          Clear Filter
        </button>
      </div>

      <FilterSection title="Destination">
        <div className="space-y-2">
          {visibleDestinations.map((dest) => (
            <div className="flex items-center justify-between" key={dest.key}>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`destination-${dest.key.toLowerCase()}`}
                  checked={!!destination[dest.key]}
                  onCheckedChange={() =>
                    handleDestinationChange(dest.key as DestinationKey)
                  }
                />
                <label
                  htmlFor={`destination-${dest.key.toLowerCase()}`}
                  className="text-sm text-gray-700"
                >
                  {dest.label}
                </label>
              </div>
              <span className="text-xs text-gray-500">2</span>
            </div>
          ))}
        </div>
        {!showAllDestinations && (
          <button
            className="text-orange-500 text-sm mt-2 flex items-center"
            onClick={() => setShowAllDestinations(true)}
          >
            Show all 10
            <ChevronDown className="h-3 w-3 ml-1" />
          </button>
        )}
      </FilterSection>

      <FilterSection title="Price">
        <div className="space-y-4">
          <Slider
            value={priceRange}
            min={250}
            max={900}
            step={10}
            onValueChange={handlePriceChange}
            className="mt-6"
          />
          <div className="flex items-center justify-between">
            <div className="bg-orange-100 text-orange-500 text-xs px-2 py-1 rounded">
              ${priceRange[0]}
            </div>
            <div className="bg-orange-100 text-orange-500 text-xs px-2 py-1 rounded">
              ${priceRange[1]}
            </div>
          </div>
        </div>
      </FilterSection>

      <FilterSection title="Duration">
        <div className="space-y-4">
          <Slider
            value={durationRange}
            min={1}
            max={14}
            step={1}
            onValueChange={setDurationRange}
            className="mt-6"
          />
          <div className="flex items-center justify-between">
            <div className="bg-orange-100 text-orange-500 text-xs px-2 py-1 rounded">
              {durationRange[0]} Days
            </div>
            <div className="bg-orange-100 text-orange-500 text-xs px-2 py-1 rounded">
              {durationRange[1]} Days
            </div>
          </div>
        </div>
      </FilterSection>

      <FilterSection title="Activities">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="activity-boating" />
              <label
                htmlFor="activity-boating"
                className="text-sm text-gray-700"
              >
                Boating
              </label>
            </div>
            <span className="text-xs text-gray-500">5</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="activity-city-tour" />
              <label
                htmlFor="activity-city-tour"
                className="text-sm text-gray-700"
              >
                City Tour
              </label>
            </div>
            <span className="text-xs text-gray-500">3</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="activity-cycling" />
              <label
                htmlFor="activity-cycling"
                className="text-sm text-gray-700"
              >
                Cycling
              </label>
            </div>
            <span className="text-xs text-gray-500">4</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="activity-hiking" />
              <label
                htmlFor="activity-hiking"
                className="text-sm text-gray-700"
              >
                Hiking
              </label>
            </div>
            <span className="text-xs text-gray-500">4</span>
          </div>
        </div>
        <button className="text-orange-500 text-sm mt-2 flex items-center">
          Show all 5
          <ChevronDown className="h-3 w-3 ml-1" />
        </button>
      </FilterSection>

      <FilterSection title="Trip Types">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="type-budget" />
              <label htmlFor="type-budget" className="text-sm text-gray-700">
                Budget Travel
              </label>
            </div>
            <span className="text-xs text-gray-500">2</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="type-child-friendly" />
              <label
                htmlFor="type-child-friendly"
                className="text-sm text-gray-700"
              >
                Child-friendly
              </label>
            </div>
            <span className="text-xs text-gray-500">4</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="type-cultural" />
              <label htmlFor="type-cultural" className="text-sm text-gray-700">
                Cultural
              </label>
            </div>
            <span className="text-xs text-gray-500">4</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="type-dog-friendly" />
              <label
                htmlFor="type-dog-friendly"
                className="text-sm text-gray-700"
              >
                Dog-friendly
              </label>
            </div>
            <span className="text-xs text-gray-500">3</span>
          </div>
        </div>
        <button className="text-orange-500 text-sm mt-2 flex items-center">
          Show all 5
          <ChevronDown className="h-3 w-3 ml-1" />
        </button>
      </FilterSection>

      <FilterSection title="Difficulties">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="difficulty-easy"
                onClick={() => handleDifficultyClick("Easy")}
              />
              <label
                htmlFor="difficulty-easy"
                className="text-sm text-gray-700"
              >
                Easy
              </label>
            </div>
            <span className="text-xs text-gray-500">1</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="difficulty-hard"
                onClick={() => handleDifficultyClick("Hard")}
              />
              <label
                htmlFor="difficulty-hard"
                className="text-sm text-gray-700"
              >
                Hard
              </label>
            </div>
            <span className="text-xs text-gray-500">3</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="difficulty-medium"
                onClick={() => handleDifficultyClick("Medium")}
              />
              <label
                htmlFor="difficulty-medium"
                className="text-sm text-gray-700"
              >
                Medium
              </label>
            </div>
            <span className="text-xs text-gray-500">3</span>
          </div>
        </div>
      </FilterSection>
    </div>
  );
}
