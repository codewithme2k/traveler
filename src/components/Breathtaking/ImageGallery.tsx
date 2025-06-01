import Image from "next/image";

interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8">
      {images.map((image) => (
        <div
          key={image.id}
          className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
      ))}
    </div>
  );
}
