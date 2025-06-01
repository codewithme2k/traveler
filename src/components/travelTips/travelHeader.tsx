import { Badge } from "@/components/ui/badge";

export default function TravelHeader() {
  return (
    <div className="text-center mb-12 lg:mb-16">
      <Badge
        variant="outline"
        className="mb-4 text-orange-500 border-orange-200 bg-orange-50 px-4 py-1"
      >
        Travel Essentials Tips
      </Badge>
      <h1 className="text-3xl lg:text-5xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
        Awesome Tips That Makes Your Travel Beautiful
      </h1>
    </div>
  );
}
