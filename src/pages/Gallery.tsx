import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      image: '/DSC02292.jpg',
      title: 'Kitchen Countertop Installation',
      description: 'Beautiful granite countertop with custom edge work'
    },
    {
      id: 2,
      image: '/DSC02293.jpg',
      title: 'Bathroom Vanity Surface',
      description: 'Elegant stone surface for luxury bathroom'
    },
    {
      id: 3,
      image: '/DSC02295.jpg',
      title: 'Custom Stone Work',
      description: 'Professional installation with precision cuts'
    },
    {
      id: 4,
      image: '/DSC02301.jpg',
      title: 'Granite Kitchen Island',
      description: 'Large format granite installation'
    },
    {
      id: 5,
      image: '/DSC02308.jpg',
      title: 'Stone Surface Detail',
      description: 'Close-up of quality craftsmanship'
    },
    {
      id: 6,
      image: '/DSC02311.jpg',
      title: 'Bathroom Stone Installation',
      description: 'Premium stone work for residential project'
    },
    {
      id: 7,
      image: '/DSC02314.jpg',
      title: 'Kitchen Countertop Edge',
      description: 'Custom edge profile and finishing'
    },
    {
      id: 8,
      image: '/DSC02317.jpg',
      title: 'Stone Surface Application',
      description: 'Professional installation technique'
    },
    {
      id: 9,
      image: '/DSC02322.jpg',
      title: 'Granite Installation Process',
      description: 'Behind the scenes of quality work'
    },
    {
      id: 10,
      image: '/DSC02325.jpg',
      title: 'Finished Stone Project',
      description: 'Completed installation ready for use'
    }
  ];

  const openLightbox = (project: Project) => {
    setSelectedImage(project);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage) {
      const currentIndex = projects.findIndex(p => p.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % projects.length;
      setSelectedImage(projects[nextIndex]);
    }
  };

  const prevImage = () => {
    if (selectedImage) {
      const currentIndex = projects.findIndex(p => p.id === selectedImage.id);
      const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
      setSelectedImage(projects[prevIndex]);
    }
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Work</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          See examples of our professional granite and stone installations
        </p>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => openLightbox(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="h-8 w-8" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain"
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;