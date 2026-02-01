
import React from 'react';

const categories = [
  {
    name: 'Funko Pops',
    imageUrl: 'https://picsum.photos/id/1080/500/500',
    color: 'from-comic-blue/80 to-comic-blue/50',
  },
  {
    name: 'LEGO Sets',
    imageUrl: 'https://picsum.photos/id/160/500/500',
    color: 'from-comic-red/80 to-comic-red/50',
  },
  {
    name: 'Action Figures',
    imageUrl: 'https://picsum.photos/id/1072/500/500',
    color: 'from-comic-blue/80 to-comic-blue/50',
  },
  {
    name: 'Collectible Toys',
    imageUrl: 'https://picsum.photos/id/175/500/500',
    color: 'from-comic-red/80 to-comic-red/50',
  },
];

const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold font-fredoka text-comic-blue" style={{textShadow: '3px 3px 0px #FFF, 5px 5px 0px rgba(0,0,0,0.1)'}}>Our Awesome Collections</h3>
          <p className="mt-2 text-comic-black text-lg">So much cool stuff to check out!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <a href="#store" key={category.name} className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-3 border-4 border-comic-black">
              <div className="relative">
                <img src={category.imageUrl} alt={category.name} className="w-full h-64 object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} group-hover:opacity-75 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <h4 className="text-3xl font-bold font-fredoka text-white" style={{textShadow: '2px 2px 4px #000'}}>{category.name}</h4>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
