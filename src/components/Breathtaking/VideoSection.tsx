"use client";

import Image from "next/image";
import { PlayButton } from "./PlayButton";

interface VideoSectionProps {
  onWatchVideo: () => void;
}

export function VideoSection({ onWatchVideo }: VideoSectionProps) {
  return (
    <div className="h-full relative">
      {/* Main Video Image */}
      <div className="h-full relative aspect-[4/3] rounded-2xl overflow-hidden">
        <Image
          src="/Breathtaking3.jpg"
          alt="Woman enjoying view of Cappadocia with hot air balloons"
          fill
          className="object-cover"
        />

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayButton onClick={onWatchVideo} />
        </div>

        {/* Watch Video Label */}
        <div className="absolute top-6 left-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-900">
              Watch Video
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-100 rounded-full opacity-60" />
      <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-orange-50 rounded-full opacity-40" />
    </div>
  );
}
