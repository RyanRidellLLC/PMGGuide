import React from 'react';
import { MapPin, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About StoneCraft</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality projects for everything around your house
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              StoneCraft's mission is to provide quality projects for everything around your house. 
              Founded in Salt Lake City, Utah, and based out of Alpine, we are dedicated to exceptional craftsmanship. 
              We seek to serve everyone in the Utah County area so that they can have the best homes possible.
            </p>
          </div>
        </div>

        {/* Services and Values Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* What We Do */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">What We Do</h2>
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Outdoor walkways
              </div>
              <div className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Patios
              </div>
              <div className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Pool copings
              </div>
              <div className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Mantel in your house
              </div>
              <div className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Countertops
              </div>
              <div className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Stone replacement
              </div>
              <div className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Tile for bathroom
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Why Choose Us</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Local Expertise</h3>
                  <p className="text-gray-600 text-sm">Based in Alpine, serving all of Utah County with local knowledge and dedication</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Award className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Quality Craftsmanship</h3>
                  <p className="text-gray-600 text-sm">Professional installation with attention to detail for lasting, beautiful results</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Complete Service</h3>
                  <p className="text-gray-600 text-sm">Everything you need for your home improvement projects, from start to finish</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-6">Contact us today for a free consultation and quote</p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;