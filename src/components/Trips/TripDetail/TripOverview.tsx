import { Check } from "lucide-react";

interface TripOverviewProps {
  overview: {
    description: string;
    highlights: string[];
  };
}

export function TripOverview({ overview }: TripOverviewProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-foreground leading-relaxed">
          {overview.description}
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Highlights</h3>
        <ul className="space-y-3">
          {overview.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                <Check className="h-3 w-3 text-orange-500" />
              </div>
              <span className="text-foreground">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
