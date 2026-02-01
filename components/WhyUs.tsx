
import React from 'react';
import { BoxIcon, ShieldCheckIcon, TruckIcon, StarIcon } from './Icons';

const features = [
  {
    Icon: BoxIcon,
    title: 'Huge Collection',
    description: 'We have tons of toys, from brand new stuff to super rare finds!',
    color: 'bg-comic-red',
    iconColor: 'text-white',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Perfect Condition',
    description: 'We treat every toy like a treasure so it gets to you looking amazing.',
    color: 'bg-comic-blue',
    iconColor: 'text-white',
  },
  {
    Icon: TruckIcon,
    title: 'Super-Fast Shipping',
    description: 'Vroom! Your new collectibles will be on their way to you in a flash.',
    color: 'bg-comic-red',
    iconColor: 'text-white',
  },
  {
    Icon: StarIcon,
    title: 'Made by Fans',
    description: 'We love collecting just as much as you do, so we know what\'s cool!',
    color: 'bg-comic-blue',
    iconColor: 'text-white',
  },
];

const WhyUs: React.FC = () => {
  return (
    <section className="bg-comic-cream py-16 md:py-24 m-4 md:m-8 border-4 border-comic-black rounded-2xl">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold font-fredoka text-comic-blue" style={{textShadow: '3px 3px 0px #FFF, 5px 5px 0px rgba(0,0,0,0.1)'}}>Why We're Awesome</h3>
          <p className="mt-2 text-comic-black text-lg">Here's what makes Pop Pavilion the best place for fun!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl transform transition-transform hover:scale-105 hover:-rotate-2 border-2 border-comic-black">
              <div className={`flex items-center justify-center h-20 w-20 mx-auto rounded-full ${feature.color} mb-4 border-2 border-comic-black`}>
                <feature.Icon className={`h-10 w-10 ${feature.iconColor}`} />
              </div>
              <h4 className="text-2xl font-bold font-fredoka text-comic-black mb-2">{feature.title}</h4>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
