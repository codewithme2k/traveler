import Image from "next/image";

export function ImageSection() {
  return (
    <div className="relative flex justify-end">
      {/* Main Image */}
      <div className="relative aspect-square md:aspect-[4/3] w-full md:w-[90%] overflow-hidden rounded-[100px_0_0_0]">
        <Image
          src="/about1.jpg?height=600&width=600"
          alt="Beautiful tropical lagoon with limestone cliffs and boats"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Circular Overlapping Image */}
      <div className="absolute top-3/4 md:top-1/2 right-10 md:right-0 transform translate-x-1/4 -translate-y-1/2">
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-[10px] border-white shadow-lg">
          <Image
            src="/about2.jpg?height=200&width=200"
            alt="Traveler standing on a rock overlooking landscape"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-orange-100 rounded-full opacity-60 hidden md:block"></div>
      <div className="absolute top-1/4 -right-8 w-16 h-16 bg-teal-50 rounded-full opacity-40 hidden md:block"></div>
    </div>
  );
}
