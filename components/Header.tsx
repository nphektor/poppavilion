
import React from 'react';
import { logoImageData } from './logoImage';

const Header: React.FC = () => {
  return (
    <header className="bg-comic-cream/80 backdrop-blur-lg sticky top-0 z-50 shadow-md border-b-4 border-comic-black">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logoImageData} alt="Pop Pavilion Logo" className="h-12 w-auto object-contain" />
          <h1 className="text-3xl md:text-4xl font-fredoka text-transparent bg-clip-text bg-gradient-to-r from-comic-red to-comic-blue" style={{ textShadow: '1px 1px 0 #000' }}>
            Pop Pavilion
          </h1>
        </div>
        <a
          href="#store"
          className="hidden md:inline-block bg-comic-red text-white font-bold px-6 py-2 rounded-full hover:bg-red-700 transition-transform transform hover:scale-110 shadow-lg border-2 border-comic-black"
        >
          Go to Store
        </a>
      </div>
    </header>
  );
};

export default Header;
