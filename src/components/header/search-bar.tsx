"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  className?: string;
}

export function SearchBar({ className }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches] = useState<string[]>([
    "Paris tours",
    "Beach resorts",
    "Mountain hiking",
    "Safari adventures",
    "City breaks",
  ]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when search bar opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Close search bar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close search bar when pressing Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Here you would typically handle the search action
      console.log("Searching for:", searchQuery);
      // window.location.href = `/search-tours?q=${encodeURIComponent(searchQuery)}`
      alert(`Searching for: ${searchQuery}`);
      setIsOpen(false);
      setSearchQuery("");
    }
  };

  const handleRecentSearchClick = (search: string) => {
    setSearchQuery(search);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div ref={searchRef} className={cn("relative", className)}>
      {/* Search Icon Button */}
      {!isOpen && (
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-primary"
          onClick={() => setIsOpen(true)}
          aria-label="Open search"
        >
          <Search className="h-5 w-5" />
        </Button>
      )}

      {/* Search Bar */}
      {isOpen && (
        <div
          className={cn(
            "fixed inset-0 z-50 flex items-start justify-center bg-black/20 pt-16 md:pt-20",
            "md:absolute md:inset-auto md:right-0 md:top-0 md:pt-0 md:bg-transparent"
          )}
        >
          <div
            className={cn(
              "w-full max-w-md rounded-lg bg-background p-4 shadow-lg",
              "md:w-[500px] md:mt-2"
            )}
          >
            <form onSubmit={handleSearch} className="relative">
              <div className="flex items-center">
                <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                <Input
                  ref={inputRef}
                  type="search"
                  placeholder="Search tours..."
                  className="pl-9 mr-10 text-foreground dark:text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 h-9 bg-primary dark:bg-primary"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close search"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Recent Searches */}
              <div className="mt-3 space-y-2">
                <h4 className="text-xs font-medium text-muted-foreground">
                  Recent Searches
                </h4>
                <ul className="space-y-1">
                  {recentSearches.map((search, index) => (
                    <li key={index}>
                      <button
                        type="button"
                        className="w-full text-left text-sm py-1.5 px-2 rounded-sm hover:bg-muted flex items-center"
                        onClick={() => handleRecentSearchClick(search)}
                      >
                        <Search className="h-3 w-3 mr-2 text-muted-foreground" />
                        {search}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
