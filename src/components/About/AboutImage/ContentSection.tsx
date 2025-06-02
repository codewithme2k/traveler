import { Button } from "@/components/ui/button";
import { FeatureList } from "./FeatureList";

const features = [
  "Mei an periculaeuripidis.",
  "torquatos nec euls vis.",
  "Dienum phaed is in meis.",
  "pericu laeuri pidis Mei sm.",
  "Blienum nhaedrum tortos.",
  "Lorem ipsum dolor sit am.",
  "peric uripidis, fincartem.",
];

export function ContentSection() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-orange-500 font-medium mb-2">We Are Travolo</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          We Are The Best For Your Travel
        </h2>
      </div>

      <p className="text-gray-600">
        Blienum nhaedrum torquatos nec eul, vis detraxit periculis ex, nihil is
        in mei. Xei an periculaeuripidis, fincartem ei est. Dlienum phaed is in
        mei. Lei an Hericulaeuripidis, hincartem ei est.
      </p>

      <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
        <FeatureList features={features.slice(0, 4)} />
        <FeatureList features={features.slice(4)} />
      </div>

      <div className="pt-4">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium">
          View More
        </Button>
      </div>
    </div>
  );
}
