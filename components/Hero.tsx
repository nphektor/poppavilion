
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-comic-cream overflow-hidden pb-12">
      <div className="absolute top-0 left-0 w-72 h-72 bg-comic-blue/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-comic-red/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-yellow-400/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{animationDelay: '4s'}}></div>

      <div className="container mx-auto px-6 py-20 md:py-32 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-extrabold font-fredoka text-comic-blue leading-tight" style={{textShadow: '4px 4px 0px #FFF, 6px 6px 0px rgba(0,0,0,0.2)'}}>
          Discover a World of Fun!
        </h2>
        <p className="mt-4 text-lg md:text-xl text-comic-black max-w-3xl mx-auto font-nunito font-semibold">
          Welcome to Pop Pavilion, the most joyful place for collectors! Find awesome Funko Pops, creative LEGO sets, and action figures that bring your favorites to life.
        </p>
        <div className="mt-8">
          <a
            href="#store"
            className="inline-block bg-comic-red text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-110 shadow-xl border-4 border-comic-black"
          >
            Let's Play!
          </a>
        </div>
      </div>
      
      <div className="absolute -bottom-1 left-0 w-full leading-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 64.5909C0 64.5909 360 128 720 64.5909C1080 1.18182 1440 64.5909 1440 64.5909V120H0V64.5909Z" fill="#f9d74a"/>
        </svg>
      </div>

    </section>
  );
};

export default Hero;
