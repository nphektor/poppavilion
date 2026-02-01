
import React from 'react';

const events = [
  {
    month: 'JUL',
    day: '25',
    title: 'Collector\'s Swap Meet',
    description: 'Join us for a day of trading, selling, and showing off your most prized possessions. Special guests and exclusive deals!',
  },
  {
    month: 'AUG',
    day: '12',
    title: 'LEGO Master Build-Off',
    description: 'Think you have what it takes? Compete against other LEGO fans for a chance to win awesome prizes and ultimate bragging rights.',
  },
];

const UpcomingEvents: React.FC = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold font-fredoka text-comic-blue" style={{textShadow: '3px 3px 0px #FFF, 5px 5px 0px rgba(0,0,0,0.1)'}}>What's Happening!</h3>
          <p className="mt-2 text-comic-black text-lg">Don't miss out on our epic events!</p>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          {events.map((event, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center bg-comic-cream p-6 rounded-2xl shadow-lg border-4 border-comic-black transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 text-center">
                <div className="bg-comic-red text-white font-fredoka rounded-xl p-4 w-28 border-2 border-comic-black">
                  <span className="block text-xl">{event.month}</span>
                  <span className="block text-4xl font-bold">{event.day}</span>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-3xl font-bold font-fredoka text-comic-blue">{event.title}</h4>
                <p className="text-gray-700 mt-2">{event.description}</p>
                <a href="#store" className="inline-block mt-4 text-comic-red font-bold hover:underline text-lg">
                  Learn More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
