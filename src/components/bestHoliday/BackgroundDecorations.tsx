import Image from "next/image";

export function BackgroundDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Airplane Icon */}
      <div className="absolute top-20 left-8 lg:left-16">
        <Image
          src={"/Plane.png"}
          className="  delay-1000 animate-rotateSlow"
          width={150}
          height={150}
          alt="plane"
        ></Image>
      </div>

      {/* Dotted Pattern Left */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 animate-rotateSlow ">
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-orange-300 rounded-full opacity-30"
            />
          ))}
        </div>
      </div>

      {/* Diagonal Lines Right */}
      <div className="absolute right-8 bottom-20 lg:right-16">
        <div className="space-y-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-px bg-orange-300 opacity-40"
              style={{ width: `${(i + 1) * 8}px` }}
            />
          ))}
        </div>
      </div>

      {/* Circular Decoration */}
      <div className="absolute bottom-8 right-4 lg:right-8">
        <div className="w-12 h-12 bg-teal-400 rounded-full opacity-60" />
      </div>

      {/* Additional Dots */}
      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-orange-400 rounded-full opacity-40" />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-teal-400 rounded-full opacity-50" />
    </div>
  );
}
