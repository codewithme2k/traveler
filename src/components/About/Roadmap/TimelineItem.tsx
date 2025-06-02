interface TimelineItemData {
  id: number;
  title: string;
  year: string;
  description: string;
  position: "left" | "right";
}

interface TimelineItemProps {
  item: TimelineItemData;
  index?: number;
  isMobile?: boolean;
}

export function TimelineItem({
  item,

  isMobile = false,
}: TimelineItemProps) {
  if (isMobile) {
    return (
      <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 relative">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
          <span className="text-lg font-medium text-gray-500">{item.year}</span>
        </div>
        <p className="text-gray-600 leading-relaxed">{item.description}</p>
      </div>
    );
  }

  const isLeft = item.position === "left";

  return (
    <div className="relative flex items-center">
      {/* Timeline Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
      </div>

      {/* Content */}
      <div className={`w-5/12 ${isLeft ? "pr-8" : "ml-auto pl-8"}`}>
        <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
            <span className="text-lg font-medium text-gray-500">
              {item.year}
            </span>
          </div>
          <p className="text-gray-600 leading-relaxed">{item.description}</p>
        </div>
      </div>

      {/* Connecting Line to Dot */}
      <div
        className={`absolute top-1/2 w-8 h-0.5 bg-orange-300 ${
          isLeft ? "right-1/2 mr-2" : "left-1/2 ml-2"
        } transform -translate-y-1/2`}
      ></div>
    </div>
  );
}
