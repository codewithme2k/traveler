interface FeatureListProps {
  features: string[];
}

export function FeatureList({ features }: FeatureListProps) {
  return (
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          </span>
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
  );
}
