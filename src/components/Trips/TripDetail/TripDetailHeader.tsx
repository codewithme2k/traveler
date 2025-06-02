interface TripDetailHeaderProps {
  title: string;
  days: number;
}

export function TripDetailHeader({ title, days }: TripDetailHeaderProps) {
  return (
    <div className="flex justify-between items-start mb-6">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
        {title}
      </h1>
      <div className="bg-orange-500 text-foreground text-center p-2 rounded-md min-w-16">
        <div className="text-2xl font-bold">{days}</div>
        <div className="text-xs">Days</div>
      </div>
    </div>
  );
}
