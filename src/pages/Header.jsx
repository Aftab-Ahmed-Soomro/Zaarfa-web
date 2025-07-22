import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import HeaderUpperPart from '../components/HeaderUpperPart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  return (
    <>
    <HeaderUpperPart />
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="px-4 sm:px-24">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              {/* Logo Icon */}
              <div className="flex items-center mr-3">
                <div className="relative">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 relative">
                    {/* Leaf elements */}
                    <div className="absolute top-0 left-1 w-3 h-6 lg:w-4 lg:h-7 bg-blue-500 rounded-full transform rotate-12"></div>
                    <div className="absolute top-1 left-3 w-3 h-5 lg:w-4 lg:h-6 bg-pink-500 rounded-full transform -rotate-12"></div>
                    <div className="absolute top-2 left-0 w-2.5 h-4 lg:w-3 lg:h-5 bg-teal-400 rounded-full transform rotate-45"></div>
                    <div className="absolute top-3 left-2 w-2 h-3 lg:w-2.5 lg:h-4 bg-green-500 rounded-full transform -rotate-30"></div>
                    <div className="absolute top-4 left-1 w-2 h-3 lg:w-2.5 lg:h-4 bg-yellow-400 rounded-full transform rotate-60"></div>
                  </div>
                </div>
              </div>
              
              {/* Logo Text */}
              <div className="text-xl lg:text-2xl font-semibold">
                <span className="text-orange-400">Zaarfa</span>
                <span className="text-[#0C4AA3] ml-1">Solutions</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2 lg:space-x-4">
              <a
                href="#home"
                className={`px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200 ${
                  activeLink === 'home' ? 'text-[#09307D]' : 'text-[#717275] hover:text-[#09307D]'
                }`}
                onClick={() => handleNavClick('home')}
              >
                Home
              </a>
              <a
                href="#about"
                className={`px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200 ${
                  activeLink === 'about' ? 'text-[#09307D]' : 'text-[#717275] hover:text-[#09307D]'
                }`}
                onClick={() => handleNavClick('about')}
              >
                About
              </a>
              <a
                href="#services"
                className={`px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200 ${
                  activeLink === 'services' ? 'text-[#09307D]' : 'text-[#717275] hover:text-[#09307D]'
                }`}
                onClick={() => handleNavClick('services')}
              >
                Services
              </a>
              <a
                href="#contact"
                className={`px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200 ${
                  activeLink === 'contact' ? 'text-[#09307D]' : 'text-[#717275] hover:text-[#09307D]'
                }`}
                onClick={() => handleNavClick('contact')}
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <a
                href="#home"
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  activeLink === 'home' ? 'text-[#09307D]' : 'text-[#717275] hover:text-[#09307D]'
                }`}
                onClick={() => handleNavClick('home')}
              >
                Home
              </a>
              <a
                href="#about"
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  activeLink === 'about' ? 'text-[#09307D]' : 'text-[#717275] hover:text-[#09307D]'
                }`}
                onClick={() => handleNavClick('about')}
              >
                About
              </a>
              <a
                href="#services"
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  activeLink === 'services' ? 'text-[#09307D]' : 'text-[#717275] hover:text-[#09307D]'
                }`}
                onClick={() => handleNavClick('services')}
              >
                Services
              </a>
              <a
                href="#contact"
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  activeLink === 'contact' ? 'text-[#09307D]' : 'text-[#717275] hover:text-[#09307D]'
                }`}
                onClick={() => handleNavClick('contact')}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Header;