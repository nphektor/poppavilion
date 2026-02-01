
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UpcomingEvents from './components/UpcomingEvents';
import FeaturedCategories from './components/FeaturedCategories';
import WhyUs from './components/WhyUs';
import ItemShowcase from './components/ItemShowcase';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div 
      className="bg-comic-yellow min-h-screen text-comic-black font-nunito"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)',
        backgroundSize: '6px 6px'
      }}
    >
      <Header />
      <main>
        <Hero />
        <UpcomingEvents />
        <FeaturedCategories />
        <WhyUs />
        <ItemShowcase />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
