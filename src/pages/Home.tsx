import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Award, Users, Clock } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            StoneCraft
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional granite and stone services for your home and business. 
            Quality craftsmanship and reliable service throughout Utah County.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/gallery" 
              className="bg-gray-900 text-white px-8 py-3 hover:bg-gray-800 transition-colors inline-flex items-center justify-center"
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-gray-900 text-gray-900 px-8 py-3 hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <img
                src="/DSC02292.jpg"
                alt="Professional granite installation"
                className="w-full h-80 object-cover shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <img
                src="/DSC02301.jpg"
                alt="Kitchen countertop detail"
                className="w-full h-36 object-cover shadow-lg"
              />
              <img
                src="/DSC02311.jpg"
                alt="Stone surface craftsmanship"
                className="w-full h-36 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose StoneCraft</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-gray-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Craftsmanship</h3>
              <p className="text-gray-600">Professional installation with attention to detail for lasting, beautiful results.</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-gray-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600">Based in Alpine, serving all of Utah County with local knowledge and dedication.</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-gray-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliable Service</h3>
              <p className="text-gray-600">On-time completion and professional service from consultation to final installation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kitchen Countertops</h3>
              <p className="text-gray-600">Beautiful granite countertops for your kitchen</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bathroom Surfaces</h3>
              <p className="text-gray-600">Elegant stone surfaces for bathrooms</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Projects</h3>
              <p className="text-gray-600">Professional installations for any space</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;