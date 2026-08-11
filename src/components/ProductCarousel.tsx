import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Globe, Smartphone, Calculator, Users } from 'lucide-react';

const ProductCarousel = () => {
  const [items, setItems] = useState([
    {
      id: 'website',
      title: 'Zero-Commission Website',
      desc: 'Launch a beautifully branded online ordering site in 5 minutes. Keep 100% of your revenue without relying on third-party delivery apps.',
      icon: <Globe className="w-6 h-6" />,
      bg: 'bg-[#fff8e7]',
      accent: 'text-amber-600',
      mockup: (
        <div className="w-full h-full rounded-t-xl overflow-hidden shadow-2xl border-t border-x border-amber-200/50 bg-white">
          <img src="/images/website.jpg" alt="Website Builder UI" className="w-full h-full object-cover object-top" />
        </div>
      )
    },
    {
      id: 'pos',
      title: 'Mobile-First POS',
      desc: 'Lightning-fast order entry at the table. Never lose a ticket, handle complex modifiers with ease, and work flawlessly even offline.',
      icon: <Smartphone className="w-6 h-6" />,
      bg: 'bg-[#e6f7ff]',
      accent: 'text-sky-600',
      mockup: (
        <div className="w-full h-full rounded-t-xl overflow-hidden shadow-2xl border-t border-x border-sky-200/50 bg-white">
          <img src="/images/pos.jpg" alt="Mobile POS UI" className="w-full h-full object-cover object-top" />
        </div>
      )
    },
    {
      id: 'accounting',
      title: 'Automated Bookkeeping',
      desc: 'Your daily sales, taxes, labor costs, and processing fees flow directly into our built-in general ledger at the close of every business day.',
      icon: <Calculator className="w-6 h-6" />,
      bg: 'bg-[#f0fdf4]',
      accent: 'text-green-600',
      mockup: (
        <div className="w-full h-full rounded-t-xl overflow-hidden shadow-2xl border-t border-x border-green-200/50 bg-white">
          <img src="/images/accounting.jpg" alt="Accounting Ledger UI" className="w-full h-full object-cover object-top" />
        </div>
      )
    },
    {
      id: 'staff',
      title: 'Staff Management',
      desc: 'Secure role-based PIN access, automated time-tracking, and shift scheduling to keep your team running smoothly and prevent theft.',
      icon: <Users className="w-6 h-6" />,
      bg: 'bg-[#f3e8ff]',
      accent: 'text-purple-600',
      mockup: (
        <div className="w-full h-full rounded-t-xl overflow-hidden shadow-2xl border-t border-x border-purple-200/50 bg-white">
          <img src="/images/staff.jpg" alt="Staff Management UI" className="w-full h-full object-cover object-top" />
        </div>
      )
    }
  ]);

  const handleNext = () => {
    setItems((prev) => [...prev.slice(1), prev[0]]);
  };

  const handlePrev = () => {
    setItems((prev) => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center overflow-hidden bg-white py-12">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8 md:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium text-[#0c2b47] mb-4"
          >
            The Complete Ecosystem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Everything you need to run your restaurant, natively built in one place.
          </motion.p>
        </div>

        <div className="relative">
          {/* Scrollable Container via Array Rotation */}
          <div className="flex gap-6 overflow-hidden pb-8 pt-4 px-4 -mx-4 items-center">
            <AnimatePresence mode="popLayout">
              {items.map((item, i) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, x: 100 }}
                  animate={{ 
                    opacity: i < 2 ? 1 : 0.4, 
                    scale: i === 0 ? 1 : 0.95,
                    x: 0
                  }}
                  exit={{ opacity: 0, scale: 0.8, x: -100 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`flex-shrink-0 w-[85vw] md:w-[600px] lg:w-[800px] h-[55vh] min-h-[500px] max-h-[700px] rounded-[2.5rem] ${item.bg} px-8 pt-8 md:px-12 md:pt-12 flex flex-col relative overflow-hidden shadow-sm`}
                >
                  {/* Content Top Half */}
                  <div className="max-w-xl relative z-10 shrink-0">
                    <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm ${item.accent}`}>
                      {item.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">{item.title}</h3>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">{item.desc}</p>
                    <a href="https://frontend-blush-seven-e1vr2indno.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors w-fit">
                      Get Started <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                  
                  {/* Mockup Bottom Half */}
                  <div className="w-full mt-8 flex-1 min-h-[200px] relative shrink-0">
                    <div className="absolute inset-x-0 top-0 bottom-[-20px]">
                      {item.mockup}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center md:justify-end gap-3 mt-2 pr-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-[#0c2b47] text-white flex items-center justify-center hover:bg-slate-800 transition-colors shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-[#0c2b47] text-white flex items-center justify-center hover:bg-slate-800 transition-colors shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
