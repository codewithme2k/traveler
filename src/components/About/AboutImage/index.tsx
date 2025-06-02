import { ImageSection } from "./ImageSection";
import { ContentSection } from "./ContentSection";
import { StatBox } from "./StatBox";

export function AboutTravel() {
  return (
    <section className="py-16 px-4 bg-background overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Image Section */}
          <div className="relative">
            <ImageSection />

            {/* Stats Boxes - Desktop */}
            <div className="hidden lg:block">
              <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 z-10  border-white">
                <StatBox
                  number="25"
                  text="Years"
                  subtext="Of Experience"
                  bgColor="bg-orange-500"
                  textColor="text-white"
                />
              </div>
              <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/4 z-10  border-white">
                <StatBox
                  number="20,000+"
                  text="Happy Clients"
                  bgColor="bg-teal-400"
                  textColor="text-white"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content Section */}
          <div className="lg:pl-16">
            <ContentSection />
          </div>

          {/* Stats Boxes - Mobile */}
          <div className="flex space-x-4 lg:hidden">
            <StatBox
              number="25"
              text="Years"
              subtext="Of Experience"
              bgColor="bg-orange-500"
              textColor="text-white"
              className="flex-1"
            />
            <StatBox
              number="20,000+"
              text="Happy Clients"
              bgColor="bg-teal-400"
              textColor="text-white"
              className="flex-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
