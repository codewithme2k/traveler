interface TimelineLineProps {
  itemCount: number;
}

export function TimelineLine({ itemCount }: TimelineLineProps) {
  console.log(itemCount);
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0">
      <div className="w-0.5 bg-orange-300 h-full"></div>
    </div>
  );
}
