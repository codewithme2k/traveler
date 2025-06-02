import { Check, X } from "lucide-react";

interface TripCostProps {
  costIncludes: string[];
  costExcludes: string[];
}

export function TripCost({ costIncludes, costExcludes }: TripCostProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Cost</h2>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">The Cost Includes</h3>
        <ul className="space-y-3">
          {costIncludes.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="h-3 w-3 text-green-500" />
              </div>
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">The Cost Excludes</h3>
        <ul className="space-y-3">
          {costExcludes.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                <X className="h-3 w-3 text-red-500" />
              </div>
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
