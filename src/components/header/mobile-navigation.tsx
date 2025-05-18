"use client";
import Link from "next/link";
import { LogIn, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { MobileAccordion } from "@/components/header/mobile-accordion";
import { CurrencySwitcher } from "@/components/header/currency-switcher";
import type { NavigationItem } from "@/shared/types/navigation";

interface MobileNavigationProps {
  items: NavigationItem[];
  pathname: string;
  currencies: string[];
  currentCurrency: string;
  onCurrencyChange: (currency: string) => void;
  onLoginClick: () => void;
  onSignupClick: () => void;
}

export function MobileNavigation({
  items,
  pathname,
  currencies,
  currentCurrency,
  onCurrencyChange,
  onLoginClick,
  onSignupClick,
}: MobileNavigationProps) {
  return (
    <nav className="flex flex-col gap-4 mt-8">
      {/* Mobile Search */}
      {/* <div className="mb-4">
        <SheetClose asChild>
          <Button
            variant="outline"
            className="w-full flex items-center justify-start h-10 px-3"
            onClick={() => (window.location.href = "#")}
          >
            <Search className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">
              Search destinations, tours...
            </span>
          </Button>
        </SheetClose>
      </div> */}

      {items.map((item, i) => (
        <div key={i} className="flex flex-col">
          {item.submenu ? (
            <MobileAccordion title={item.title} items={item.submenu} />
          ) : (
            <SheetClose asChild>
              <Link
                href={item.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.title}
              </Link>
            </SheetClose>
          )}
        </div>
      ))}

      <div className="mt-4 border-t pt-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium">Currency</span>
          <CurrencySwitcher
            currencies={currencies}
            currentCurrency={currentCurrency}
            onCurrencyChange={onCurrencyChange}
            isMobile={true}
          />
        </div>

        <div className="flex flex-col gap-2">
          <SheetClose asChild>
            <Button
              variant="outline"
              className="justify-start"
              onClick={onLoginClick}
            >
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              variant="outline"
              className="justify-start"
              onClick={onSignupClick}
            >
              <User className="mr-2 h-4 w-4" />
              Sign Up
            </Button>
          </SheetClose>
        </div>
      </div>
    </nav>
  );
}
