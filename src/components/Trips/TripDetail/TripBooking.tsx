import { Button } from "@/components/ui/button";

interface TripBookingProps {
  priceAdult: number;
  priceChild: number;
}

export function TripBooking({ priceAdult, priceChild }: TripBookingProps) {
  return (
    <div className="bg-background border border-gray-200 rounded-lg p-6">
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-primary p-4 rounded-md">
          <div className="text-sm text-foreground">From</div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold">${priceAdult}</span>
            <span className="text-sm text-foreground ml-1">/ Adult</span>
          </div>
        </div>
        <div className="bg-primary p-4 rounded-md">
          <div className="text-sm text-foreground">From</div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold">${priceChild}</span>
            <span className="text-sm text-foreground ml-1">/ Child</span>
          </div>
        </div>
      </div>

      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-foreground py-6 text-lg">
        CHECK AVAILABILITY
      </Button>

      <div className="text-center mt-4 text-sm">
        <span className="text-foreground">Need help with booking? </span>
        <a href="#" className="text-orange-500 hover:underline">
          Send Us A Message
        </a>
      </div>
    </div>
  );
}
