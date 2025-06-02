"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpDown, Grid3X3, List } from "lucide-react";

interface MobileFilterBarProps {
  tripCount: number;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
  onFilterClick: () => void;
}

export function MobileFilterBar({
  tripCount,
  viewMode,
  onViewModeChange,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFilterClick,
}: MobileFilterBarProps) {
  return (
    <div className="flex items-center justify-between bg-white py-2 mb-4">
      <div className="text-sm text-gray-600">{tripCount} trips found</div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1"
          onClick={() => {}}
        >
          <ArrowUpDown className="h-4 w-4" />
          <span>Sort</span>
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
