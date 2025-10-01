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
              <span className="text-2xl font-light text-deep-navy tracking-widest">PMG GUIDE</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-12">
            <a href="#home" className="text-deep-navy hover:text-pastel-blue transition-colors text-sm font-light tracking-wide uppercase">Atelier</a>
            <Link to="/collections" className="text-deep-navy hover:text-pastel-blue transition-colors text-sm font-light tracking-wide uppercase">Collections</Link>
            <a href="#gallery" className="text-deep-navy hover:text-pastel-blue transition-colors text-sm font-light tracking-wide uppercase">Portfolio</a>
            <a href="#quote" className="text-deep-navy hover:text-pastel-blue transition-colors text-sm font-light tracking-wide uppercase">Consultation</a>
            <a href="#contact" className="text-deep-navy hover:text-pastel-blue transition-colors text-sm font-light tracking-wide uppercase">Atelier Direct</a>
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
              <a href="#home" className="text-deep-navy hover:text-pastel-blue transition-colors text-sm font-light tracking-wide uppercase">Atelier</a>
              <Link to="/collections" className="text-deep-navy hover:text-pastel-blue transition-colors text-sm font-light tracking-wide uppercase">Collections</Link>
              <a href="#gallery" className="text-deep-navy hover:text-pastel-blue transition-colors text-sm font-light tracking-wide uppercase">Portfolio</a>
              <a href="#quote" className="text-deep-navy hover:text-pastel-blue transition-colors text-sm font-light tracking-wide uppercase">Consultation</a>
              <a href="#contact" className="text-deep-navy hover:text-pastel-blue transition-colors text-sm font-light tracking-wide uppercase">Atelier Direct</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;