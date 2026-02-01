
import React, { useRef } from 'react';
import { UploadIcon } from './Icons';

interface HeaderProps {
  logoUrl: string | null;
  onLogoUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ logoUrl, onLogoUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <header className="bg-comic-cream/80 backdrop-blur-lg sticky top-0 z-50 shadow-md border-b-4 border-comic-black">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <input
              type="file"
              ref={fileInputRef}
              onChange={onLogoUpload}
              className="hidden"
              accept="image/*"
            />
            {logoUrl ? (
              <img src={logoUrl} alt="Company Logo" className="h-12 w-auto object-contain cursor-pointer" onClick={handleUploadClick} />
            ) : (
              <button
                onClick={handleUploadClick}
                className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-300 transition-colors border-2 border-comic-black"
                aria-label="Upload Logo"
              >
                <UploadIcon className="h-6 w-6" />
              </button>
            )}
             <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-max bg-comic-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Click to upload logo
            </div>
          </div>
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
