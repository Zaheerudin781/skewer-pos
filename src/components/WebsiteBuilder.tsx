import { motion } from 'framer-motion';
import { LayoutTemplate, Sparkles } from 'lucide-react';

const WebsiteBuilder = () => {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-wider uppercase mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>White Label Restaurant Ordering Website Builder</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Free Restaurant Website Builder with Commission Free Online Ordering System
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Launch a beautifully branded <strong>web based restaurant ordering and billing system</strong> in under 5 minutes. Direct customer orders bypass 30% third-party aggregator fees and inject straight into your kitchen KDS at 0% commission.
            </p>
            
            <a 
              href="https://frontend-blush-seven-e1vr2indno.vercel.app"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-7 py-3.5 rounded-lg shadow-lg shadow-blue-600/30 transition-all"
            >
              <LayoutTemplate className="w-5 h-5" />
              Launch Your Free Online Storefront
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-dark rounded-2xl p-3 aspect-[4/3] flex items-center justify-center relative overflow-hidden shadow-2xl border border-white/10">
               {/* Browser window mockup with real online storefront screenshot */}
               <div className="absolute inset-0 bg-slate-900 flex flex-col">
                 <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-slate-950/80">
                   <div className="flex gap-1.5">
                     <div className="w-3 h-3 rounded-full bg-red-400"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                     <div className="w-3 h-3 rounded-full bg-green-400"></div>
                   </div>
                   <div className="ml-4 flex-1 h-6 bg-white/10 rounded-full flex items-center px-3 text-xs text-slate-300 font-medium">skewer-pos.vercel.app/order</div>
                 </div>
                 <div className="flex-1 w-full h-full bg-slate-900 overflow-hidden">
                   <img 
                    src="/images/screenshots/online_ordering_storefront.png" 
                    alt="Free restaurant website builder with online ordering system and menu customization" 
                    loading="lazy" 
                    className="w-full h-full object-cover opacity-95 hover:opacity-100 transition-opacity" 
                   />
                 </div>
               </div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass-dark p-4 rounded-xl flex items-center gap-3 border border-white/15 shadow-2xl"
            >
              <div className="w-10 h-10 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <div className="text-sm font-bold text-white">0% Commission Active</div>
                <div className="text-xs text-slate-300">100% Direct Profits Kept</div>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default WebsiteBuilder;

