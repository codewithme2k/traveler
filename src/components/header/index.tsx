"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DesktopNavigation } from "@/components/header/desktop-navigation";
import { MobileNavigation } from "@/components/header/mobile-navigation";
import { CurrencySwitcher } from "@/components/header/currency-switcher";
import { AuthButtons } from "@/components/header/auth-buttons";
import { mainNavItems } from "@/shared/constants/menu";
import { ModeToggle } from "../ModeToggle";
import { SearchBar } from "./search-bar";

export default function Header() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currencies = ["USD", "EUR", "CHF"];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background shadow-md" : "bg-transparent"
      )}
      // đổi màu nền khi cuộn ở trên
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">
                Travel <span className="text-blue-500">Tour</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <DesktopNavigation items={mainNavItems} pathname={pathname} />
          </div>
          {/* Right side items */}
          <div className="flex items-center space-x-2">
            {/* Search Bar */}
            <SearchBar />
            {/* Currency Switcher */}
            <CurrencySwitcher
              currencies={currencies}
              currentCurrency={currency}
              onCurrencyChange={setCurrency}
            />

            {/* Login/Signup Buttons */}
            <AuthButtons
              loginOpen={loginOpen}
              setLoginOpen={setLoginOpen}
              signupOpen={signupOpen}
              setSignupOpen={setSignupOpen}
            />
            <ModeToggle />

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <MobileNavigation
                  items={mainNavItems}
                  pathname={pathname}
                  currencies={currencies}
                  currentCurrency={currency}
                  onCurrencyChange={setCurrency}
                  onLoginClick={() => setLoginOpen(true)}
                  onSignupClick={() => setSignupOpen(true)}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
