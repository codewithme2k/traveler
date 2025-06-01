import { MapPin, Plane, Camera, Compass } from "lucide-react";

export function BackgroundDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Decorative circles and patterns */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-orange-200 rounded-full opacity-30" />
      <div className="absolute top-40 right-20 w-24 h-24 border border-orange-300 rounded-full opacity-40" />
      <div className="absolute bottom-40 left-20 w-40 h-40 border-2 border-orange-200 rounded-full opacity-25" />
      <div className="absolute bottom-20 right-40 w-28 h-28 border border-orange-300 rounded-full opacity-35" />

      {/* Decorative lines */}
      <div className="absolute top-32 left-1/4 w-20 h-px bg-orange-300 opacity-40 rotate-45" />
      <div className="absolute bottom-32 right-1/4 w-16 h-px bg-orange-300 opacity-40 -rotate-45" />

      {/* Travel icons scattered around */}
      <div className="absolute top-16 right-1/4">
        <MapPin className="w-6 h-6 text-orange-400 opacity-30" />
      </div>
      <div className="absolute top-1/3 left-16">
        <Plane className="w-5 h-5 text-orange-400 opacity-25 rotate-45" />
      </div>
      <div className="absolute bottom-1/3 right-16">
        <Camera className="w-5 h-5 text-orange-400 opacity-30" />
      </div>
      <div className="absolute bottom-20 left-1/3">
        <Compass className="w-6 h-6 text-orange-400 opacity-25" />
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-1/2 left-8 w-2 h-2 bg-orange-400 rounded-full opacity-40" />
      <div className="absolute top-1/4 right-8 w-3 h-3 bg-orange-300 rounded-full opacity-30" />
      <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-orange-400 rounded-full opacity-35" />
    </div>
  );
}
