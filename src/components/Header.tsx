import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ArchitecturalLogo from './ArchitecturalLogo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-cream border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              <ArchitecturalLogo className="h-12 w-12 text-deep-navy" />
              <span className="text-xl font-semibold">StoneCraft</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-12">
            <Link to="/" className="text-deep-navy hover:text-gray-600 transition-colors">Home</Link>
            <Link to="/about" className="text-deep-navy hover:text-gray-600 transition-colors">About</Link>
            <Link to="/gallery" className="text-deep-navy hover:text-gray-600 transition-colors">Gallery</Link>
            <Link to="/contact" className="text-deep-navy hover:text-gray-600 transition-colors">Contact</Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-deep-navy hover:text-gray-600 transition-colors">Home</Link>
              <Link to="/about" className="text-deep-navy hover:text-gray-600 transition-colors">About</Link>
              <Link to="/gallery" className="text-deep-navy hover:text-gray-600 transition-colors">Gallery</Link>
              <Link to="/contact" className="text-deep-navy hover:text-gray-600 transition-colors">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;