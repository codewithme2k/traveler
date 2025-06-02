import { SectionHeader } from "./SectionHeader";
import { TimelineItem } from "./TimelineItem";
import { TimelineLine } from "./TimelineLine";

const timelineData = [
  {
    id: 1,
    title: "Awesome",
    year: "2023",
    description:
      "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum ultricies ligula sed portga",
    position: "left" as const,
  },
  {
    id: 2,
    title: "Magnificant",
    year: "2022",
    description:
      "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum ultricies ligula sed portga",
    position: "right" as const,
  },
  {
    id: 3,
    title: "Established",
    year: "2020",
    description:
      "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum ultricies ligula sed portga",
    position: "left" as const,
  },
  {
    id: 4,
    title: "Marmong",
    year: "2019",
    description:
      "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum ultricies ligula sed portga",
    position: "right" as const,
  },
  {
    id: 5,
    title: "Marmong",
    year: "2018",
    description:
      "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum ultricies ligula sed portga",
    position: "left" as const,
  },
];

export function Roadmap() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <SectionHeader />

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <TimelineLine itemCount={timelineData.length} />

          <div className="space-y-2">
            {timelineData.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {timelineData.map((item) => (
            <TimelineItem key={item.id} item={item} isMobile />
          ))}
        </div>
      </div>
    </section>
  );
}
