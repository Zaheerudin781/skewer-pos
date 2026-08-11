import { motion } from 'framer-motion';

const RestaurantTypes = () => {
  const types = [
    {
      title: 'Quick Service (QSR)',
      desc: 'Speed up your counter service, manage heavy lines with ease, and automate your kitchen routing for maximum throughput.',
      img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Full Service Dining',
      desc: 'Seamlessly manage complex floor plans, multi-course coursing, split checks, and elevate your guest experience.',
      img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Bars & Nightclubs',
      desc: 'Keep the drinks flowing with lightning-fast tab management, quick reordering, and offline-first reliability during peak hours.',
      img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Cafes & Bakeries',
      desc: 'Streamline your morning rush, handle complex modifiers perfectly, and keep your inventory synced in real-time.',
      img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Food Trucks & Pop-ups',
      desc: 'Mobile, offline-ready POS that works anywhere. Compact hardware and lightning-fast processing for massive lines.',
      img: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Ghost Kitchens',
      desc: 'Maximize delivery volume, manage multiple virtual brands, and aggregate orders seamlessly on one KDS screen.',
      img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section className="py-24 bg-[#fcfdfa] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium text-slate-800 mb-6 tracking-tight"
          >
            Restaurant Types We Serve
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed"
          >
            Skewer POS offers total control with an end-to-end workflow tailored for your entire restaurant business in one place.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {types.map((type, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 shadow-sm border border-slate-200 bg-slate-100">
                <img 
                  src={type.img} 
                  alt={type.title} 
                  loading="lazy"
                  width="600"
                  height="336"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{type.title}</h3>
              <p className="text-slate-600 leading-relaxed px-2">{type.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantTypes;
