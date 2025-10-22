import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About StoneCraft</h1>
        
        <div className="prose prose-lg mx-auto">
          <p className="text-xl text-gray-600 mb-8 text-center">
            Quality projects for everything around your house
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                StoneCraft's mission is to provide quality projects for everything around your house. Founded in Salt Lake City, Utah, and based out of Alpine, we are dedicated to exceptional craftsmanship.
              </p>
              <p className="text-gray-600">
                We seek to serve everyone in the Utah County area so that they can have the best homes possible through professional stone and granite installations.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Do</h2>
              <ul className="text-gray-600 space-y-2">
                <li>• Outdoor walkways</li>
                <li>• Patios</li>
                <li>• Pool copings</li>
                <li>• Mantel in your house</li>
                <li>• Countertops</li>
                <li>• Stone replacement</li>
                <li>• Tile for bathroom</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 p-8 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Local Expertise</h3>
                <p className="text-gray-600 text-sm">Based in Alpine, serving all of Utah County with local knowledge</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Quality Craftsmanship</h3>
                <p className="text-gray-600 text-sm">Professional installation with attention to detail for lasting results</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Complete Service</h3>
                <p className="text-gray-600 text-sm">Everything you need for your home improvement projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;