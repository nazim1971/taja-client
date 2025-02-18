import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../ui/carousel";
  import Image from "next/image";
  
  const Hero = () => {
    const images = [
      "https://ghorerbazar.com/cdn/shop/files/Web_Banner_Crystal_Honey.png?v=1736946452&width=1500",
      "https://res.cloudinary.com/dfvgxf4dc/image/upload/v1738599041/foafvixt90gqfqzwf1gw.webp",
      "https://res.cloudinary.com/dfvgxf4dc/image/upload/v1738599200/b5frlcoxq6tuadpepvmo.png",
      "https://res.cloudinary.com/dfvgxf4dc/image/upload/v1738599156/rt5a9vu6lsewdfphyzvi.avif",
      "https://res.cloudinary.com/dfvgxf4dc/image/upload/v1738606127/dpwklji14tro6xwc4ubo.jpg",
    ];
  
    return (
      <div className="relative w-full">
        {/* Responsive Carousel */}
        <Carousel className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <CarouselContent className="h-[300px] md:h-[400px] lg:h-[500px]">
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-full">
                  {/* Image with layout fill */}
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
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
  