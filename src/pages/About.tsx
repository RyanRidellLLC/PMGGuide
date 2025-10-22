import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About StoneCraft</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            StoneCraft's mission is to provide quality projects for everything around your house. 
            Founded in Salt Lake City, Utah, and based out of Alpine, we are dedicated to exceptional craftsmanship. 
            We seek to serve everyone in the Utah County area so that they can have the best homes possible.
          </p>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">What We Do</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• Outdoor walkways</li>
                <li>• Patios</li>
                <li>• Pool copings</li>
                <li>• Mantel in your house</li>
              </ul>
              <ul className="space-y-3 text-lg text-gray-700">
                <li>• Countertops</li>
                <li>• Stone replacement</li>
                <li>• Tile for bathroom</li>
                <li>• Custom stone work</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Why Choose Us</h2>
          <div className="max-w-2xl mx-auto space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Local Expertise</h3>
              <p>Based in Alpine, serving all of Utah County with local knowledge and dedication to quality.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Craftsmanship</h3>
              <p>Professional installation with attention to detail for lasting, beautiful results.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Complete Service</h3>
              <p>Everything you need for your home improvement projects, from start to finish.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-6">Contact us today for a free consultation and quote</p>
          <a 
            href="/contact" 
            className="inline-block bg-gray-900 text-white px-8 py-3 hover:bg-gray-800 transition-colors"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;