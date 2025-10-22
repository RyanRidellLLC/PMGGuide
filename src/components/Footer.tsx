import React from 'react';
import { Diamond } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Diamond className="h-8 w-8" />
            <span className="text-xl font-semibold">PMG Guide</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 PMG Guide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;