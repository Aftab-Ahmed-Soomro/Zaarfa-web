import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";

const HeaderUpperPart = () => {
  return (
    <header className="bg-[#09307D] text-white px-4 sm:px-20 py-3">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* Email Section */}
        <div className="flex items-center space-x-2">
          <AiOutlineMail className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-sm md:text-base font-medium">
            info@110-solutions.com.au
          </span>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-200"
            aria-label="LinkedIn"
          >
            <CiLinkedin className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-200"
            aria-label="Facebook"
          >
            <CiFacebook className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-200"
            aria-label="Instagram"
          >
            <CiInstagram className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </div>
      
      {/* Mobile-specific adjustments */}
      <style jsx>{`
        @media (max-width: 640px) {
          .email-text {
            font-size: 0.8rem;
          }
        }
        
        @media (max-width: 480px) {
          .email-text {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </header>
  );
};

export default HeaderUpperPart;