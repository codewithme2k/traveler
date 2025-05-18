"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import type { NavigationItem } from "@/shared/types/navigation";

interface DesktopNavigationProps {
  items: NavigationItem[];
  pathname: string;
}

export function DesktopNavigation({ items, pathname }: DesktopNavigationProps) {
  return (
    <nav className="hidden md:flex items-center space-x-1">
      {items.map((item, index) => (
        <div key={index} className="relative group">
          {item.submenu ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {item.title}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {item.submenu.map((subItem, subIndex) =>
                  subItem.submenu ? (
                    <DropdownMenuSub key={subIndex}>
                      <DropdownMenuSubTrigger>
                        {subItem.title}
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent className="w-48">
                          {subItem.submenu.map((subSubItem, subSubIndex) => (
                            <DropdownMenuItem key={subSubIndex} asChild>
                              <Link href={subSubItem.href}>
                                {subSubItem.title}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  ) : (
                    <DropdownMenuItem key={subIndex} asChild>
                      <Link href={subItem.href}>{subItem.title}</Link>
                    </DropdownMenuItem>
                  )
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="ghost"
              asChild
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              <Link href={item.href}>{item.title}</Link>
            </Button>
          )}
        </div>
      ))}
    </nav>
  );
}
