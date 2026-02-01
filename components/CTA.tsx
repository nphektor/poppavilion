
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-comic-blue">
      <div className="container mx-auto px-6 py-16 md:py-20 text-center">
        <h3 className="text-4xl md:text-5xl font-bold font-fredoka text-white" style={{textShadow: '3px 3px 0px rgba(0,0,0,0.2)'}}>Ready for an Adventure?</h3>
        <p className="mt-4 text-comic-cream max-w-2xl mx-auto text-lg">
          The Pavilion is open! Come on in, look around, and find your next favorite collectible!
        </p>
        <div className="mt-8">
          <a
            href="#store"
            className="inline-block bg-comic-yellow text-comic-black font-bold text-lg px-10 py-4 rounded-full hover:bg-yellow-300 transition-transform transform hover:scale-110 shadow-2xl border-4 border-comic-black"
          >
            Explore The Store!
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
