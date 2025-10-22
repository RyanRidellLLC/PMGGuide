import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Premium Granite Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Professional granite installation and stone services for your home and business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/gallery" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/contact" 
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kitchen Countertops</h3>
              <p className="text-gray-600">Beautiful granite countertops for your kitchen.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bathroom Vanities</h3>
              <p className="text-gray-600">Elegant stone surfaces for bathrooms.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Commercial Projects</h3>
              <p className="text-gray-600">Professional installations for businesses.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;