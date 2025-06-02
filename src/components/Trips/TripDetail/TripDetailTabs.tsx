"use client";

interface TripDetailTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function TripDetailTabs({
  activeTab,
  onTabChange,
}: TripDetailTabsProps) {
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "itinerary", label: "Itinerary" },
    { id: "cost", label: "Cost" },
    { id: "faqs", label: "FAQs" },
    { id: "map", label: "Map" },
  ];

  return (
    <div className="border-b border-gray-200">
      <div className="flex overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 font-medium text-sm md:text-base whitespace-nowrap ${
              activeTab === tab.id
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-foreground hover:text-primary"
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
