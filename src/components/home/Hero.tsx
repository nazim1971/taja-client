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
      "https://res.cloudinary.com/dfvgxf4dc/image/upload/v1740417077/cover_photo_anwgjx.jpg",
      "https://res.cloudinary.com/dfvgxf4dc/image/upload/v1740417073/476643199_122137339370462526_8275283035389187208_n_dxefhw.jpg",
      "https://res.cloudinary.com/dfvgxf4dc/image/upload/v1740417133/mustrad_oil_txlo0e.jpg"
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
  