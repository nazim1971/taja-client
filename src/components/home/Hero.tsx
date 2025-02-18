import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* Responsive Carousel */}
      <Carousel className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="h-full">
                  <CardContent className="flex items-center justify-center p-6">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                      {index + 1}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Controls */}
        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2" />
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2" />
      </Carousel>
    </div>
  );
};

export default Hero;
