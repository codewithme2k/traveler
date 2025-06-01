import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Slide {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  image1: string;
  image2: string;
  image1Alt: string;
  image2Alt: string;
}

interface HeroSlideProps {
  slide: Slide;
}

export function HeroSlide({ slide }: HeroSlideProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
      {/* Content Section */}
      <div className="space-y-6">
        <div className="space-y-4">
          <p className="text-orange-500 font-medium text-lg">
            {slide.subtitle}
          </p>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            {slide.title}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
            {slide.description}
          </p>
        </div>

        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium text-sm tracking-wide">
          {slide.buttonText}
        </Button>
      </div>

      {/* Images Section */}
      <div className="relative flex justify-center lg:justify-end mr-10">
        <div className="relative">
          {/* Main large image */}
          <div className="relative w-80 h-96 lg:w-96 lg:h-[450px]">
            <div className="w-full h-full rounded-[40%] overflow-hidden shadow-2xl">
              <Image
                src={slide.image1 || "/placeholder.svg"}
                alt={slide.image1Alt}
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>

          {/* Smaller overlapping image */}
          <div className="absolute -bottom-8 -right-8 w-48 h-48 lg:w-56 lg:h-56">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src={slide.image2 || "/placeholder.svg"}
                alt={slide.image2Alt}
                fill
                className="object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
