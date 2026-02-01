
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-comic-black border-t-4 border-comic-black">
      <div className="container mx-auto px-6 py-6 text-center text-comic-cream">
        <p>&copy; {new Date().getFullYear()} Pop Pavilion. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-comic-yellow transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-comic-yellow transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-comic-yellow transition-colors">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
