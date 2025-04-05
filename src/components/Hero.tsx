
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect } from 'react';
import { type CarouselApi } from "@/components/ui/carousel";

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Set up carousel slide tracking
  useEffect(() => {
    if (!api) return;
    
    const onChange = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", onChange);
    return () => {
      api.off("select", onChange);
    };
  }, [api]);
  
  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (!api) return;
    
    // Set up interval for auto-sliding
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    
    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [api]);

  // Slide-specific tag content
  const slideDetails = [
    {
      topTag: "Premium Print",
      bottomTag: "Digital Design"
    },
    {
      topTag: "Creative Solutions",
      bottomTag: "Brand Identity"
    },
    {
      topTag: "Quality Materials",
      bottomTag: "Professional Results"
    }
  ];
  
  return (
    <section id="home" className="h-screen max-h-[1080px] flex items-center bg-gradient-to-b from-white to-gray-50 pt-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-x-12 items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-brand-darkBlue">Transform Your Vision</span>
              <br />
              <span className="text-brand-orange">Into Print Reality</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Professional design and comprehensive printing solutions for all your business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#services" className="btn-primary inline-flex items-center">
                Explore Services <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#contact" className="btn-secondary inline-flex items-center">
                Request Quote
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative mt-10">
              <Carousel 
                className="w-full" 
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true // Enable infinite looping
                }}
              >
                <CarouselContent>
                  {/* First carousel item - original image */}
                  <CarouselItem>
                    <div className="rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02]">
                      <img 
                        src="https://plus.unsplash.com/premium_photo-1661382011487-cd3d6b1d9dff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                        alt="Professional Printing Services"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                  
                  {/* Second carousel item */}
                  <CarouselItem>
                    <div className="rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02]">
                      <img 
                        src="https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                        alt="Digital Design Services"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                  
                  {/* Third carousel item */}
                  <CarouselItem>
                    <div className="rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02]">
                      <img 
                        src="https://images.unsplash.com/photo-1693031630369-bd429a57f115?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                        alt="Print Media Solutions"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2 lg:-left-12" />
                <CarouselNext className="right-2 lg:-right-12" />
              </Carousel>
              
              {/* Floating design elements - dynamically change based on current slide */}
              <div className="absolute -bottom-6 -left-6 bg-brand-blue p-4 rounded-lg shadow-lg hidden md:block z-10">
                <span className="text-white font-bold">{slideDetails[current]?.bottomTag || "Digital Design"}</span>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-brand-orange p-4 rounded-lg shadow-lg hidden md:block z-10">
                <span className="text-white font-bold">{slideDetails[current]?.topTag || "Premium Print"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
