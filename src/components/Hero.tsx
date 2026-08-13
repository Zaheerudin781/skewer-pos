import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const phrases = [
    "Run your restaurant in the future.",
    "Automate your kitchen operations.",
    "Own your customer data.",
    "Break free from delivery apps.",
    "Maximize your profit margins."
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 mt-12 md:mt-16">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-sm font-medium mb-6"
          >
            <Globe className="w-4 h-4" />
            <span>Includes Free Website Builder</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl tracking-tight font-semibold text-[#0c2b47] mb-6 md:mb-8 min-h-[180px] md:min-h-[180px]"
          >
            Stop paying for the past. <br className="hidden md:block" />
            <div className="relative inline-block w-full h-[120px] sm:h-[80px] md:h-[110px] mt-2 md:mt-4 overflow-visible">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentPhrase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-gradient absolute inset-x-0 mx-auto py-2 px-4"
                >
                  {phrases[currentPhrase]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-600 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4 md:px-0"
          >
            The ultimate, all-in-one seamless ecosystem for modern restaurants. 
            No bulky hardware. No hidden fees. Just sheer efficiency.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="https://frontend-blush-seven-e1vr2indno.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-blue-600 bg-transparent text-blue-600 font-medium px-6 py-2.5 rounded-sm text-sm btn-hollow btn-hollow-blue w-full sm:w-auto">
              Start 100 Free Orders Now
            </a>
            <Link to="/pricing" className="border border-slate-700 bg-transparent text-slate-700 font-medium px-6 py-2.5 rounded-sm text-sm btn-hollow btn-hollow-slate w-full sm:w-auto flex items-center justify-center">
              View Pricing
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="glass rounded-md p-2 md:p-8 relative">
            <div className="aspect-[4/5] md:aspect-[16/9] bg-slate-100 rounded-sm overflow-hidden relative flex items-center justify-center border border-blue-200/50">
              {/* Dummy images */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-slate-50 overflow-hidden">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              </div>
              
              <div className="relative z-10 w-[92%] h-[92%] md:w-[90%] md:h-[85%] bg-white rounded-sm md:rounded-md shadow-2xl border border-blue-200/60 overflow-hidden flex flex-col transform hover:scale-[1.02] transition-transform duration-500">
                {/* POS Top Bar */}
                <div className="h-12 md:h-14 border-b border-blue-200 flex items-center justify-between px-3 md:px-6 bg-slate-50/50">
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-sm md:rounded-sm bg-blue-600 flex items-center justify-center text-white font-medium text-[10px] md:text-xs">SP</div>
                    <div className="text-xs md:text-sm font-medium text-slate-800">Main Register</div>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="hidden md:flex h-8 px-3 rounded-full bg-green-100 text-green-700 text-xs font-medium items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      Online
                    </div>
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-200 border border-white shadow-sm overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" alt="User" width="30" height="30" />
                    </div>
                  </div>
                </div>

                {/* POS Main Content */}
                <div className="flex-1 flex flex-col md:flex-row bg-slate-50/30 overflow-hidden">
                  {/* Left: Menu Items */}
                  <div className="flex-1 p-3 md:p-6 border-b md:border-b-0 md:border-r border-blue-200 overflow-y-auto">
                    <div className="flex gap-2 mb-4 md:mb-6 overflow-x-auto pb-1 hide-scrollbar">
                      {['All', 'Burgers', 'Drinks', 'Sides'].map((cat, i) => (
                        <div key={cat} className={`px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-medium whitespace-nowrap ${i === 0 ? 'bg-blue-600 text-white' : 'bg-white text-slate-500 border border-blue-200'}`}>
                          {cat}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                      {[
                        { name: 'Classic Burger', price: '$12.00', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=200&q=80', color: 'from-orange-100 to-orange-50' },
                        { name: 'Cheese Fries', price: '$6.50', img: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=200&q=80', color: 'from-yellow-100 to-yellow-50' },
                        { name: 'Craft Cola', price: '$3.50', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=200&q=80', color: 'from-slate-200 to-slate-100' },
                        { name: 'Spicy Wings', price: '$9.00', img: 'https://images.unsplash.com/photo-1527477396000-e27163b4bbed?auto=format&fit=crop&w=200&q=80', color: 'from-red-100 to-red-50' }
                      ].map((item, i) => (
                        <div key={i} className="bg-white p-2 rounded-sm md:rounded-sm border border-blue-200 shadow-sm flex flex-col items-center text-center cursor-pointer hover:border-blue-300 transition-colors">
                          <div className={`w-full h-20 md:h-28 rounded-sm md:rounded-sm bg-gradient-to-br ${item.color} mb-2 md:mb-3 overflow-hidden p-1 md:p-2`}>
                            <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-sm md:rounded-sm shadow-sm" />
                          </div>
                          <div className="text-[10px] md:text-xs font-medium text-slate-800 mb-0.5">{item.name}</div>
                          <div className="text-[10px] md:text-xs font-medium text-blue-600">{item.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Right: Current Order */}
                  <div className="hidden md:flex w-64 bg-white p-5 flex-col">
                    <div className="text-sm font-medium text-slate-800 mb-4">Current Order <span className="text-slate-500 text-xs font-normal">#1042</span></div>
                    
                    <div className="flex-1 overflow-hidden flex flex-col gap-3">
                      <div className="flex justify-between items-start text-xs border-b border-blue-200 pb-3">
                        <div>
                          <div className="font-medium text-slate-800">1x Classic Burger</div>
                          <div className="text-slate-500 mt-0.5">No onions, extra sauce</div>
                        </div>
                        <div className="font-medium text-slate-800">$12.00</div>
                      </div>
                      <div className="flex justify-between items-start text-xs border-b border-blue-200 pb-3">
                        <div>
                          <div className="font-medium text-slate-800">2x Craft Cola</div>
                        </div>
                        <div className="font-medium text-slate-800">$7.00</div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-blue-200 border-dashed">
                      <div className="flex justify-between text-xs mb-2 text-slate-500">
                        <span>Subtotal</span>
                        <span>$19.00</span>
                      </div>
                      <div className="flex justify-between text-xs mb-4 text-slate-500">
                        <span>Tax (8%)</span>
                        <span>$1.52</span>
                      </div>
                      <div className="flex justify-between text-sm font-semibold text-[#0c2b47] mb-6">
                        <span>Total</span>
                        <span>$20.52</span>
                      </div>
                      <button className="w-full border border-blue-600 bg-transparent text-blue-600 font-medium px-6 py-2.5 rounded-sm text-sm btn-hollow btn-hollow-blue">
                        Charge $20.52
                      </button>
                    </div>
                  </div>
                  
                  {/* Mobile Mobile Charge Button */}
                  <div className="md:hidden bg-white p-3 border-t border-blue-200 flex justify-between items-center">
                    <div>
                      <div className="text-[10px] text-slate-500 font-medium">2 items</div>
                      <div className="text-sm font-semibold text-[#0c2b47]">$20.52</div>
                    </div>
                    <button className="border border-blue-600 bg-transparent text-blue-600 font-medium px-6 py-2.5 rounded-sm text-sm btn-hollow btn-hollow-blue">
                      Charge
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Notification Card */}
            <div className="hidden md:flex absolute -right-8 top-16 bg-white p-4 rounded-sm shadow-2xl border border-blue-200 z-20 items-center gap-4 animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div>
                <div className="text-xs font-medium text-[#0c2b47]">New Online Order</div>
                <div className="text-xs text-slate-500">Just received from Website</div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="hidden md:flex absolute -left-8 bottom-16 bg-white p-4 rounded-sm shadow-2xl border border-blue-200 z-20 flex-col gap-1 animate-bounce" style={{ animationDuration: '5s' }}>
              <div className="text-[10px] font-medium text-slate-400 uppercase tracking-tightr">Today's Sales</div>
              <div className="text-xl font-semibold text-[#0c2b47]">$4,285.00</div>
              <div className="text-xs font-medium text-green-500 flex items-center gap-1 mt-1">
                <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                +18.4% vs yesterday
              </div>
            </div>
          </div>
          
          {/* Caption for AI Crawlers / SEO Clarity */}
          <div className="mt-4 text-center text-xs text-slate-500 font-medium">
            Visual mockup of the Skewer POS merchant dashboard interface. The actual software runs natively on tablet and mobile hardware.
          </div>
          
          {/* Decorative background blurs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] bg-blue-400/20 blur-[100px] rounded-full -z-10 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
