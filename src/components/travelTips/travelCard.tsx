import type React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface TravelCardProps {
  image: string;
  tag: string;
  tagIcon: React.ReactNode;
  date: string;
  title: string;
  description: string;
  className?: string;
}

export default function TravelCard({
  image,
  tag,
  tagIcon,
  date,
  title,
  description,
  className = "",
}: TravelCardProps) {
  return (
    <Card
      className={`overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background ${className}`}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Image Section - Left */}
        <div className="relative lg:w-3/5 flex-shrink-0">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={600}
            height={400}
            className="w-full h-64 lg:h-80 object-cover"
          />
          <Badge
            variant="secondary"
            className="absolute top-4 left-4 bg-white text-orange-500 shadow-md border-0 rounded-full px-3 py-1"
          >
            <span className="mr-2">{tagIcon}</span>
            {tag}
          </Badge>
        </div>

        {/* Content Section - Right */}
        <CardContent className="p-6 lg:p-8 lg:w-2/5 flex flex-col justify-center">
          <div className="flex items-center text-orange-500 text-sm mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            {date}
          </div>

          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-4 leading-tight">
            {title}
          </h2>

          <p className="text-foreground mb-6 leading-relaxed text-sm lg:text-base">
            {description}
          </p>

          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium w-fit">
            READ MORE
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}
