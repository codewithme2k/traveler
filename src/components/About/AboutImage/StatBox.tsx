interface StatBoxProps {
  number: string;
  text: string;
  subtext?: string;
  bgColor: string;
  textColor: string;
  className?: string;
}

export function StatBox({
  number,
  text,
  subtext,
  bgColor,
  textColor,
  className = "",
}: StatBoxProps) {
  return (
    <div
      className={`${bgColor} ${textColor} p-6 rounded-2xl shadow-lg w-50 relative z-10 border-[8px] border-white ${className}`}
    >
      <div className="space-y-1">
        <p className="text-3xl md:text-4xl font-bold">{number}</p>
        <div>
          <p className="text-lg font-medium">{text}</p>
          {subtext && <p className="text-sm opacity-90">{subtext}</p>}
        </div>
      </div>
    </div>
  );
}
