import React from 'react';
import ArchitecturalLogo from './ArchitecturalLogo';

const Footer = () => {
  return (
    <footer className="bg-deep-navy text-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <ArchitecturalLogo className="h-12 w-12 text-pastel-blue" />
              <span className="text-2xl font-light tracking-widest">PMG GUIDE</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-light mb-6 tracking-wide uppercase">Collections</h3>
            <ul className="space-y-3 text-gray-300 font-light">
              <li><a href="#" className="hover:text-pastel-blue transition-colors">Midnight Collection</a></li>
              <li><a href="#" className="hover:text-pastel-blue transition-colors">Arctic Collection</a></li>
              <li><a href="#" className="hover:text-pastel-blue transition-colors">Storm Collection</a></li>
              <li><a href="#" className="hover:text-pastel-blue transition-colors">Sand Collection</a></li>
              <li><a href="#" className="hover:text-pastel-blue transition-colors">Signature Collection</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-light mb-6 tracking-wide uppercase">Services</h3>
            <ul className="space-y-3 text-gray-300 font-light">
              <li><a href="#" className="hover:text-pastel-blue transition-colors">Culinary Surfaces</a></li>
              <li><a href="#" className="hover:text-pastel-blue transition-colors">Private Retreats</a></li>
              <li><a href="#" className="hover:text-pastel-blue transition-colors">Architectural Features</a></li>
              <li><a href="#" className="hover:text-pastel-blue transition-colors">Commercial Elegance</a></li>
              <li><a href="#" className="hover:text-pastel-blue transition-colors">Maintenance Programs</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-light">
            © 2024 PMG Guide. All rights reserved. Licensed & Insured.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-pastel-blue transition-colors text-sm font-light">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-pastel-blue transition-colors text-sm font-light">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-pastel-blue transition-colors text-sm font-light">Warranty</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;