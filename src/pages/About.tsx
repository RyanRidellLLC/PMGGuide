import React from 'react';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';
import aboutContent from '../content/about.json';

const About = () => {
  const services = aboutContent.services;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {aboutContent.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {aboutContent.mission}
          </p>
        </div>
      </section>
      {/* What We Do Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What We Do
          </h2>
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-x-24 gap-y-5">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="text-green-500 mt-1" />
                  <span className="text-lg text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
