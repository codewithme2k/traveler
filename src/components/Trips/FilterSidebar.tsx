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

export function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([250, 900]);
  const [durationRange, setDurationRange] = useState([4, 8]);

  return (
    <div className="space-y-1">
      <h2 className="text-lg font-semibold mb-4">Criteria</h2>

      <FilterSection title="Destination">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="destination-annapurna" />
              <label
                htmlFor="destination-annapurna"
                className="text-sm text-gray-700"
              >
                Annapurna
              </label>
            </div>
            <span className="text-xs text-gray-500">2</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="destination-bhutan" />
              <label
                htmlFor="destination-bhutan"
                className="text-sm text-gray-700"
              >
                Bhutan
              </label>
            </div>
            <span className="text-xs text-gray-500">1</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="destination-colombo" />
              <label
                htmlFor="destination-colombo"
                className="text-sm text-gray-700"
              >
                Colombo
              </label>
            </div>
            <span className="text-xs text-gray-500">1</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="destination-england" />
              <label
                htmlFor="destination-england"
                className="text-sm text-gray-700"
              >
                England
              </label>
            </div>
            <span className="text-xs text-gray-500">3</span>
          </div>
        </div>
        <button className="text-orange-500 text-sm mt-2 flex items-center">
          Show all 10
          <ChevronDown className="h-3 w-3 ml-1" />
        </button>
      </FilterSection>

      <FilterSection title="Price">
        <div className="space-y-4">
          <Slider
            value={priceRange}
            min={250}
            max={900}
            step={10}
            onValueChange={setPriceRange}
            className="mt-6"
          />
          <div className="flex items-center justify-between">
            <div className="bg-orange-100 text-orange-500 text-xs px-2 py-1 rounded">
              $250
            </div>
            <div className="bg-orange-100 text-orange-500 text-xs px-2 py-1 rounded">
              $900
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
              <Checkbox id="difficulty-easy" />
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
              <Checkbox id="difficulty-hard" />
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
              <Checkbox id="difficulty-medium" />
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
