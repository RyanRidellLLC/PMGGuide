import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About PMG Guide</h1>
        
        <div className="prose prose-lg mx-auto">
          <p className="text-xl text-gray-600 mb-8 text-center">
            Professional granite and stone services with years of experience.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Experience</h2>
              <p className="text-gray-600 mb-4">
                We specialize in high-quality granite installation and stone services for residential and commercial projects.
              </p>
              <p className="text-gray-600">
                Our team brings expertise and attention to detail to every project, ensuring beautiful and lasting results.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Do</h2>
              <ul className="text-gray-600 space-y-2">
                <li>• Kitchen countertop installation</li>
                <li>• Bathroom vanity surfaces</li>
                <li>• Commercial stone work</li>
                <li>• Custom granite fabrication</li>
                <li>• Stone repair and maintenance</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 p-8 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Quality Work</h3>
                <p className="text-gray-600 text-sm">Professional installation with attention to detail</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Fair Pricing</h3>
                <p className="text-gray-600 text-sm">Competitive rates for all projects</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Reliable Service</h3>
                <p className="text-gray-600 text-sm">On-time completion and excellent customer service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;