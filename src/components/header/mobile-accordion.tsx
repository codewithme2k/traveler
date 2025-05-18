"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";
import type { NavigationItem } from "@/shared/types/navigation";

interface MobileAccordionProps {
  title: string;
  items: NavigationItem[];
}

export function MobileAccordion({ title, items }: MobileAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b pb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-2 text-base font-medium text-muted-foreground hover:text-primary"
      >
        {title}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
        />
      </button>
      {isOpen && (
        <div className="mt-2 ml-4 flex flex-col space-y-2">
          {items.map((item, i) =>
            item.submenu ? (
              <MobileAccordion
                key={i}
                title={item.title}
                items={item.submenu}
              />
            ) : (
              <SheetClose key={i} asChild>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {item.title}
                </Link>
              </SheetClose>
            )
          )}
        </div>
      )}
    </div>
  );
}
