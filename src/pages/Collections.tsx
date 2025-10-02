import React, { useState } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

interface UploadedImage {
  id: string;
  file: File;
  preview: string;
  title: string;
  description: string;
  category: 'granite' | 'kitchen' | 'bathroom' | 'commercial';
}

const Collections = () => {
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Collections' },
    { value: 'granite', label: 'Granite Samples' },
    { value: 'kitchen', label: 'Kitchen Projects' },
    { value: 'bathroom', label: 'Bathroom Projects' },
    { value: 'commercial', label: 'Commercial Projects' }
  ];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files: FileList) => {
    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const newImage: UploadedImage = {
            id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
            file,
            preview: e.target?.result as string,
            title: file.name.replace(/\.[^/.]+$/, ""),
            description: '',
            category: 'granite'
          };
          setUploadedImages(prev => [...prev, newImage]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (id: string) => {
    setUploadedImages(prev => prev.filter(img => img.id !== id));
  };

  const updateImage = (id: string, updates: Partial<UploadedImage>) => {
    setUploadedImages(prev => 
      prev.map(img => img.id === id ? { ...img, ...updates } : img)
    );
  };

  const filteredImages = selectedCategory === 'all' 
    ? uploadedImages 
    : uploadedImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-thin text-deep-navy mb-8 tracking-widest">COLLECTIONS GALLERY</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Upload and manage your granite samples and completed project photos. 
            Showcase your finest work and stone selections.
          </p>
        </div>

        {/* Upload Area */}
        <div className="mb-12">
          <div
            className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
              dragActive 
                ? 'border-pastel-blue bg-blue-50' 
                : 'border-gray-300 hover:border-pastel-blue'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-light text-deep-navy mb-2 tracking-wide">
              Upload Project Photos
            </h3>
            <p className="text-gray-600 font-light">
              Drag and drop images here, or click to select files
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Supports JPG, PNG, WebP formats
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-3 text-sm font-light tracking-wide uppercase transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-deep-navy text-cream'
                    : 'bg-white text-deep-navy hover:bg-gray-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Images Grid */}
        {filteredImages.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map(image => (
              <div key={image.id} className="bg-white shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={image.preview}
                    alt={image.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => removeImage(image.id)}
                    className="absolute top-4 right-4 bg-red-500 text-white p-2 hover:bg-red-600 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-6">
                  <input
                    type="text"
                    value={image.title}
                    onChange={(e) => updateImage(image.id, { title: e.target.value })}
                    className="w-full text-lg font-light text-deep-navy mb-3 border-none outline-none bg-transparent border-b border-gray-200 focus:border-pastel-blue"
                    placeholder="Project title..."
                  />
                  <textarea
                    value={image.description}
                    onChange={(e) => updateImage(image.id, { description: e.target.value })}
                    className="w-full text-gray-600 font-light mb-4 border-none outline-none bg-transparent resize-none"
                    placeholder="Add description..."
                    rows={2}
                  />
                  <select
                    value={image.category}
                    onChange={(e) => updateImage(image.id, { category: e.target.value as UploadedImage['category'] })}
                    className="w-full px-3 py-2 border border-gray-200 focus:ring-1 focus:ring-pastel-blue focus:border-pastel-blue text-sm font-light"
                  >
                    <option value="granite">Granite Sample</option>
                    <option value="kitchen">Kitchen Project</option>
                    <option value="bathroom">Bathroom Project</option>
                    <option value="commercial">Commercial Project</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <ImageIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-light text-gray-500 mb-2">No images uploaded yet</h3>
            <p className="text-gray-400 font-light">
              Start building your collections by uploading granite samples and project photos
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collections;