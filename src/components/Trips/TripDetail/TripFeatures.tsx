import {
  Building,
  Bus,
  Mountain,
  MapPin,
  Calendar,
  CheckCircle,
  Utensils,
  Languages,
  Clock,
  Wifi,
  UserMinus,
  UserPlus,
} from "lucide-react";

interface TripFeaturesProps {
  features: {
    accommodation: string;
    transportation: string;
    maxAltitude: string;
    departureCity: string;
    bestSeason: string;
    tourAvailability: string;
    meals: string;
    language: string;
    walkingHours: string;
    wifi: string;
    minAge: string;
    maxAge: string;
  };
}

export function TripFeatures({ features }: TripFeaturesProps) {
  const featureItems = [
    {
      icon: <Building className="h-5 w-5 text-foreground" />,
      label: "Accommodation",
      value: features.accommodation,
    },
    {
      icon: <Bus className="h-5 w-5 text-foreground" />,
      label: "Transportation",
      value: features.transportation,
    },
    {
      icon: <Mountain className="h-5 w-5 text-foreground" />,
      label: "Maximum Altitude",
      value: features.maxAltitude,
    },
    {
      icon: <MapPin className="h-5 w-5 text-foreground" />,
      label: "Departure City",
      value: features.departureCity,
    },
    {
      icon: <Calendar className="h-5 w-5 text-foreground" />,
      label: "Best Season",
      value: features.bestSeason,
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-foreground" />,
      label: "Tour Availability",
      value: features.tourAvailability,
    },
    {
      icon: <Utensils className="h-5 w-5 text-foreground" />,
      label: "Meals",
      value: features.meals,
    },
    {
      icon: <Languages className="h-5 w-5 text-foreground" />,
      label: "Language",
      value: features.language,
    },
    {
      icon: <Clock className="h-5 w-5 text-foreground" />,
      label: "Walking Hours",
      value: features.walkingHours,
    },
    {
      icon: <Wifi className="h-5 w-5 text-foreground" />,
      label: "Wifi",
      value: features.wifi,
    },
    {
      icon: <UserMinus className="h-5 w-5 text-foreground" />,
      label: "Minimum Age",
      value: features.minAge,
    },
    {
      icon: <UserPlus className="h-5 w-5 text-foreground" />,
      label: "Maximum Age",
      value: features.maxAge,
    },
  ];

  return (
    <div className="bg-background border border-gray-200 rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featureItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="flex-shrink-0">{item.icon}</div>
            <div>
              <div className="text-sm text-foreground">{item.label}</div>
              <div className="font-medium">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
