"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Grid3X3, List } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface MobileFilterBarProps {
  tripCount: number;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
  onFilterClick: () => void;
  onSortChange?: (value: string) => void; // Optional callback if you want to handle sort value outside
}

export function MobileFilterBar({
  tripCount,
  viewMode,
  onViewModeChange,
  onSortChange,
}: MobileFilterBarProps) {
  const [sortValue, setSortValue] = useState("latest");

  const handleSortChange = (value: string) => {
    setSortValue(value);
    if (onSortChange) onSortChange(value); // Trigger callback if provided
  };

  return (
    <div className="flex items-center justify-between bg-white py-2 mb-4">
      <div className="text-sm text-gray-600">{tripCount} trips found</div>
      <div className="flex items-center gap-2">
        <Select value={sortValue} onValueChange={handleSortChange}>
          <SelectTrigger className="w-auto text-sm">
            <ArrowUpDown className="h-4 w-4 mr-1" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="low-to-high">Price: Low to High</SelectItem>
            <SelectItem value="high-to-low">Price: High to Low</SelectItem>
            <SelectItem value="short-to-long">
              Duration: Short to Long
            </SelectItem>
          </SelectContent>
        </Select>
        <Button
          className="text-xs px-3 py-1 bg-background hover:bg-orange-500 hover:text-white text-primary rounded"
          onClick={() => {
            setSortValue("latest");
            if (onSortChange) onSortChange("latest");
          }}
        >
          Clear Sort
        </Button>
        <div className="flex border rounded-md overflow-hidden">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="sm"
            className="rounded-none"
            onClick={() => onViewModeChange("grid")}
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="sm"
            className="rounded-none"
            onClick={() => onViewModeChange("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
