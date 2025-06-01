import { Badge } from "../ui/badge";
import { ImageGallery } from "./ImageGallery";

const images = [
  {
    id: 1,
    src: "/Breathtaking1.jpg?height=200&width=300",
    alt: "Tropical beach with crystal clear water and palm trees",
  },
  {
    id: 2,
    src: "/Breathtaking2.jpg?height=200&width=300",
    alt: "Historic mosque with beautiful architecture at sunset",
  },
];

export function ContentSection() {
  return (
    <div className="space-y-6">
      {/* Header Content */}
      <div className="space-y-4">
        <Badge>
          <p className="text-orange-500 font-medium text-lg">Go & Discover</p>
        </Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          Breathtaking Cities
        </h2>
        <p className="text-foreground text-lg leading-relaxed">
          Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo,
          lacinia eget consectetur sed, convallis at tellus.
        </p>
      </div>

      {/* Image Gallery */}
      <ImageGallery images={images} />
    </div>
  );
}
