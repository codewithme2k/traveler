import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star } from "lucide-react";

interface HolidayPackage {
  id: number;
  title: string;
  location: string;
  duration: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  featured: boolean;
  rating: number;
}

interface HolidayCardProps {
  package: HolidayPackage;
}

export function HolidayCard({ package: pkg }: HolidayCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={pkg.image || "/placeholder.svg"}
          alt={pkg.title}
          fill
          className="object-cover"
        />

        {/* Featured Badge */}
        {pkg.featured && (
          <div className="absolute top-3 left-3">
            <span className="bg-teal-500 text-white px-3 py-1 rounded-md text-xs font-medium">
              Featured
            </span>
          </div>
        )}

        {/* Discount Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-bold">
            {pkg.discount}% Off
          </span>
        </div>

        {/* Rating */}
        <div className="absolute bottom-3 right-3 bg-white rounded-md px-2 py-1">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{pkg.rating}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base font-bold text-gray-900 mb-3">{pkg.title}</h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="text-xs">{pkg.location}</span>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <Clock className="w-4 h-4 flex-shrink-0" />
          <span className="text-xs">{pkg.duration}</span>
        </div>

        {/* Price */}
        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold text-gray-900">
              ${pkg.price}
            </span>
            <span className="text-sm text-gray-500 line-through">
              ${pkg.originalPrice}
            </span>
          </div>

          {/* View Details Button */}
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium text-sm">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}
