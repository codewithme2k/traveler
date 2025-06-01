"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface PlayButtonProps {
  onClick: () => void;
}

export function PlayButton({ onClick }: PlayButtonProps) {
  return (
    <Button
      onClick={onClick}
      size="icon"
      className="size-10 rounded-full bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    >
      <Play className="size-3 ml-1" fill="currentColor" />
    </Button>
  );
}
