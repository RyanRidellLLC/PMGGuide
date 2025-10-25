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
      image: '/DSC02298.jpg',
      title: 'Image 1',
      description: 'StoneCraft project'
    },
    {
      id: 2,
      image: '/DSC02299.jpg',
      title: 'Image 2',
      description: 'StoneCraft project'
    },
    {
      id: 3,
      image: '/DSC02304.jpg',
      title: 'Image 3',
      description: 'StoneCraft project'
    },
    {
      id: 4,
      image: '/DSC02298.jpg',
      title: 'Image 4',
      description: 'StoneCraft project'
    },
    {
      id: 5,
      image: '/DSC02299.jpg',
      title: 'Image 5',
      description: 'StoneCraft project'
    },
    {
      id: 6,
      image: '/DSC02304.jpg',
      title: 'Image 6',
      description: 'StoneCraft project'
    },
    {
      id: 7,
      image: '/DSC02298.jpg',
      title: 'Image 7',
      description: 'StoneCraft project'
    },
    {
      id: 8,
      image: '/DSC02299.jpg',
      title: 'Image 8',
      description: 'StoneCraft project'
    },
    {
      id: 9,
      image: '/DSC02304.jpg',
      title: 'Image 9',
      description: 'StoneCraft project'
    },
    {
      id: 10,
      image: '/DSC02298.jpg',
      title: 'Image 10',
      description: 'StoneCraft project'
    },
    {
      id: 11,
      image: '/DSC02299.jpg',
      title: 'Image 11',
      description: 'StoneCraft project'
    },
    {
      id: 12,
      image: '/DSC02304.jpg',
      title: 'Image 12',
      description: 'StoneCraft project'
    },
    {
      id: 13,
      image: '/DSC02298.jpg',
      title: 'Image 13',
      description: 'StoneCraft project'
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
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => openLightbox(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative w-full h-full flex items-center justify-center">
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
                className="max-w-[90vw] max-h-[90vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;