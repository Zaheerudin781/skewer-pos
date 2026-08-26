import { motion } from 'framer-motion';

const RestaurantTypes = () => {
  const types = [
    {
      title: 'Fast Food QSR Point of Sale System',
      desc: 'Shave 45 seconds off counter transactions, build combo meals with one tap, and route tickets instantly to kitchen screen order displays for cooks.',
      img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Fine Dining Restaurant POS System',
      desc: 'Seamlessly manage complex dining room floor plans, multi-course pacing (Hold/Fire), seat-number ordering, and VIP guest preferences.',
      img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Bar and Pub POS System',
      desc: 'Keep high-tempo drink lines moving with fast open bar tabs, two-tap drink modifiers, group check splitting, and bottle inventory shrinkage control.',
      img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Cafe and Coffee Shop Billing Software',
      desc: 'Master the 8:00 AM rush with rapid espresso and syrup modifiers, bakery stock depletion alerts, and customer mobile pre-orders.',
      img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Food Truck POS and Billing Software',
      desc: 'Lightweight Android restaurant billing app with printer support. Runs offline with zero internet dependency and pairs with mobile Bluetooth printers.',
      img: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Pizza Shop POS and Delivery System',
      desc: 'Handle complex half-and-half toppings, size matrixes, crust modifiers, and delivery driver dispatching connected to online menu ordering.',
      img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Specialized Point of Sale (POS) Solutions for Every Food Business
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed"
          >
            Skewer POS delivers customized operational workflows tailored specifically for your food and beverage business model.
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
