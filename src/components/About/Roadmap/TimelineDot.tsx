interface TimelineDotProps {
  isActive?: boolean;
}

export function TimelineDot({ isActive = true }: TimelineDotProps) {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
      <div
        className={`w-4 h-4 rounded-full border-4 border-white shadow-lg ${
          isActive ? "bg-orange-500" : "bg-gray-300"
        }`}
      ></div>
    </div>
  );
}
