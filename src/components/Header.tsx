
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white z-50 shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-brand-blue font-playfair">4P</span>
              <span className="text-2xl font-bold text-brand-orange font-playfair">Packages</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-brand-blue transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-brand-blue transition-colors">Services</a>
            <a href="#gallery" className="text-gray-700 hover:text-brand-blue transition-colors">Gallery</a>
            <a href="#about" className="text-gray-700 hover:text-brand-blue transition-colors">About</a>
            <a href="#contact" className="btn-primary">Contact Us</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-brand-blue transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#home" onClick={toggleMenu} className="text-gray-700 hover:text-brand-blue transition-colors">Home</a>
              <a href="#services" onClick={toggleMenu} className="text-gray-700 hover:text-brand-blue transition-colors">Services</a>
              <a href="#gallery" onClick={toggleMenu} className="text-gray-700 hover:text-brand-blue transition-colors">Gallery</a>
              <a href="#about" onClick={toggleMenu} className="text-gray-700 hover:text-brand-blue transition-colors">About</a>
              <a href="#contact" onClick={toggleMenu} className="btn-primary w-full text-center">Contact Us</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
