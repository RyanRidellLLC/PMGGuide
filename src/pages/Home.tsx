import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            StoneCraft
          </h1>
          <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Professional granite and stone services for your home and business
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/gallery" 
              className="bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center text-lg"
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Simple Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Kitchen Countertops</h3>
              <p className="text-gray-600 text-lg">Beautiful granite countertops for your kitchen</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bathroom Surfaces</h3>
              <p className="text-gray-600 text-lg">Elegant stone surfaces for bathrooms</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Custom Projects</h3>
              <p className="text-gray-600 text-lg">Professional installations for any space</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;