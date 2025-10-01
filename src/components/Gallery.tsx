import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const projects = [
    {
      title: "Midnight Collection Kitchen",
      location: "Private Estate, Greenwich",
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Dramatic black granite with gold veining"
    },
    {
      title: "Arctic Collection Bathroom",
      location: "Penthouse, Manhattan",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Pure white granite with subtle crystalline patterns"
    },
    {
      title: "Storm Collection Fireplace",
      location: "Country Club, Hamptons",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Dramatic gray granite with natural movement"
    },
    {
      title: "Sand Collection Kitchen Island",
      location: "Private Residence, Napa Valley",
      image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Warm beige granite with golden undertones"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % projects.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="gallery" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-thin text-deep-navy mb-8 tracking-widest">PORTFOLIO</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            A curated selection of our most distinguished installations, 
            each representing the pinnacle of stone artistry and craftsmanship.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-96 md:h-[600px] overflow-hidden bg-gray-100">
            <img
              src={projects[currentImage].image}
              alt={projects[currentImage].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-light mb-2 tracking-wide">{projects[currentImage].title}</h3>
              <p className="text-sm font-light tracking-wide uppercase opacity-90">{projects[currentImage].location}</p>
              <p className="text-sm font-light mt-2 opacity-80">{projects[currentImage].description}</p>
            </div>
          </div>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-deep-navy p-3 transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-deep-navy p-3 transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 transition-all duration-300 ${
                  index === currentImage ? 'bg-deep-navy' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;