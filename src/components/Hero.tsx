import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const phrases = [
    "Cloud Based Restaurant POS System",
    "Restaurant Billing System Software",
    "Kitchen Order Display System (KDS)",
    "Commission Free Online Ordering System",
    "All in One Restaurant Management System (RMS)",
    "Touch Screen POS System for Restaurant",
    "Android Restaurant Billing App with Printer Support"
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 mt-12 md:mt-16">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Skewer Restaurant POS (Point of Sale) & (RMS) Restaurant Management System</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl tracking-tight font-semibold text-[#0c2b47] mb-6 md:mb-8 min-h-[180px] md:min-h-[180px]"
          >
            Point of Sale for Restaurant <br className="hidden md:block" />
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
            The #1 <strong>all in one restaurant management software</strong> and <strong>food billing software for restaurant</strong> operations. Integrated with digital kitchen order tickets (KOT), kitchen display systems (KDS), table management, and commission-free online ordering for a flat $8/month.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="https://frontend-blush-seven-e1vr2indno.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 font-semibold px-7 py-3 rounded-md text-sm transition-all shadow-lg shadow-blue-600/30 w-full sm:w-auto">
              Start 100 Free Orders Now
            </a>
            <Link to="/pricing" className="border border-slate-300 hover:border-slate-400 bg-white text-slate-800 font-semibold px-7 py-3 rounded-md text-sm shadow-sm transition-all w-full sm:w-auto flex items-center justify-center">
              View $8/Mo Pricing
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 relative mx-auto max-w-5xl"
        >
          <div className="glass rounded-xl p-2 md:p-4 relative shadow-2xl border border-blue-200/80">
            <div className="rounded-lg overflow-hidden relative border border-slate-200">
              <img 
                src="/images/screenshots/touch_billing_screen.png" 
                alt="Cloud based restaurant POS system and food billing software touch screen interface" 
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>            {/* Floating Notification Card */}
            <div className="hidden md:flex absolute -right-6 top-8 bg-white p-4 rounded-xl shadow-2xl border border-blue-200 z-20 items-center gap-4 animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div>
                <div className="text-xs font-bold text-[#0c2b47]">New Online Order #05</div>
                <div className="text-xs text-slate-500">Dine-In (B1) &bull; Rs. 192.95</div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="hidden md:flex absolute -left-6 bottom-8 bg-white p-4 rounded-xl shadow-2xl border border-blue-200 z-20 flex-col gap-1 animate-bounce" style={{ animationDuration: '5s' }}>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Today's Restaurant Sales</div>
              <div className="text-2xl font-bold text-[#0c2b47]">Rs. 48,250.00</div>
              <div className="text-xs font-semibold text-green-600 flex items-center gap-1 mt-1">
                <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                +24.5% vs yesterday
              </div>
            </div>
          </div>
          
          {/* Caption for AI Crawlers / SEO Clarity */}
          <div className="mt-4 text-center text-xs text-slate-500 font-medium">
            Live touch screen billing & kitchen order dispatch in Skewer POS — Cloud Based Restaurant POS System.
          </div>
          
          {/* Decorative background blurs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] bg-blue-400/20 blur-[100px] rounded-full -z-10 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

