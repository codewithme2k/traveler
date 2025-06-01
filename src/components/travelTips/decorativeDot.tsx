interface DecorativeDotsProps {
  position: "top-left" | "bottom-right";
}

export default function DecorativeDots({ position }: DecorativeDotsProps) {
  const positionClasses = {
    "top-left": "absolute top-0 left-0 w-32 h-32 opacity-20",
    "bottom-right": "absolute bottom-0 right-0 w-32 h-32 opacity-20",
  };

  const transformClasses = {
    "top-left": "rotate-45 -translate-x-8 -translate-y-8",
    "bottom-right": "rotate-45 translate-x-8 translate-y-8",
  };

  return (
    <div className={positionClasses[position]}>
      <div className={`grid grid-cols-8 gap-1 ${transformClasses[position]}`}>
        {Array.from({ length: 64 }).map((_, i) => (
          <div key={i} className="w-1 h-1 bg-orange-400 rounded-full" />
        ))}
      </div>
    </div>
  );
}
