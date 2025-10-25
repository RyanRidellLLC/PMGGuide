import React from 'react';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  const services = [
    'Outdoor walkways',
    'Patios',
    'Pool copings',
    'Mantel installations',
    'Countertops',
    'Stone replacement',
    'Bathroom tile',
    'Custom stone work'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About StoneCraft</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            StoneCraft's mission is to provide quality projects for everything around your house.
            Founded in Salt Lake City, Utah, and based out of Alpine, we are dedicated to exceptional craftsmanship.
            We seek to serve everyone in the Utah County area so that they can have the best homes possible.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-lg">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose StoneCraft</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Craftsmanship</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional installation with attention to detail for lasting, beautiful results that enhance your home.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Based in Alpine, serving all of Utah County with local knowledge and dedication to quality service.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Clock className="h-12 w-12 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Everything you need for your home improvement projects, from consultation to final installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">Contact us today for a free consultation and quote</p>
          <a
            href="/contact"
            className="inline-block bg-gray-900 text-white px-10 py-4 text-lg hover:bg-gray-800 transition-colors"
          >
            Get Free Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;