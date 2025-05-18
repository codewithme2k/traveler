"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CurrencySwitcherProps {
  currencies: string[];
  currentCurrency: string;
  onCurrencyChange: (currency: string) => void;
  isMobile?: boolean;
}

export function CurrencySwitcher({
  currencies,
  currentCurrency,
  onCurrencyChange,
  isMobile = false,
}: CurrencySwitcherProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={isMobile ? "outline" : "ghost"}
          size="sm"
          className={cn(!isMobile && "hidden md:flex")}
        >
          {currentCurrency} <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {currencies.map((curr) => (
          <DropdownMenuItem
            key={curr}
            onClick={() => onCurrencyChange(curr)}
            className={cn(currentCurrency === curr && "font-bold")}
          >
            {curr}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
