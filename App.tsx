
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';
import WhyUs from './components/WhyUs';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-[#FFFDF5] min-h-screen text-gray-700 font-nunito">
      <Header logoUrl={logoUrl} onLogoUpload={handleLogoUpload} />
      <main>
        <Hero />
        <FeaturedCategories />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
