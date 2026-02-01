
import React from 'react';

const items = [
  {
    name: 'Cosmic Crusader Figure',
    price: '$29.99',
    imageUrl: 'https://picsum.photos/id/25/500/500',
  },
  {
    name: 'Galactic Ranger LEGO Set',
    price: '$74.99',
    imageUrl: 'https://picsum.photos/id/2/500/500',
  },
  {
    name: 'Glow-in-the-Dark Funko',
    price: '$15.99',
    imageUrl: 'https://picsum.photos/id/10/500/500',
  },
];

const ItemShowcase: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold font-fredoka text-comic-blue" style={{textShadow: '3px 3px 0px #FFF, 5px 5px 0px rgba(0,0,0,0.1)'}}>Fan Favorites</h3>
          <p className="mt-2 text-comic-black text-lg">Check out what's flying off the shelves!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item) => (
            <div key={item.name} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1 border-4 border-comic-black">
              <img src={item.imageUrl} alt={item.name} className="w-full h-64 object-cover border-b-4 border-comic-black" />
              <div className="p-6 text-center">
                <h4 className="text-2xl font-bold font-fredoka text-comic-black">{item.name}</h4>
                <p className="text-2xl font-bold text-comic-red my-3">{item.price}</p>
                <a href="#store" className="inline-block w-full bg-comic-blue text-white font-bold px-6 py-3 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-md border-2 border-comic-black">
                  View Item
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemShowcase;
