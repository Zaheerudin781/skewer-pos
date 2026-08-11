import { motion } from 'framer-motion';
import { LayoutTemplate, Sparkles } from 'lucide-react';

const WebsiteBuilder = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Standout Feature</span>
            </div>
            
            <h2 className="text-4xl tracking-tight md:text-5xl font-medium mb-6">
              Go beyond the POS.
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Launch a beautifully branded, fully integrated website for your restaurant in minutes. Zero coding required. Own your online presence and stop relying on third-party aggregators.
            </p>
            
            <a 
              href="https://frontend-blush-seven-e1vr2indno.vercel.app"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-blue-400 bg-transparent text-blue-400 font-medium text-sm px-6 py-2.5 rounded-sm btn-hollow btn-hollow-light"
            >
              <LayoutTemplate className="w-5 h-5" />
              See Website Examples
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-dark rounded-md p-2 aspect-[4/3] flex items-center justify-center relative overflow-hidden">
               {/* Browser window mockup with dummy image */}
               <div className="absolute inset-0 bg-slate-800/50 flex flex-col">
                 <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-slate-900/80">
                   <div className="flex gap-1.5">
                     <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                     <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                   </div>
                   <div className="ml-4 flex-1 h-6 bg-white/5 rounded-sm flex items-center px-3 text-xs text-slate-400 font-medium">skewer-pos.com</div>
                 </div>
                 <div className="flex-1 w-full h-full bg-slate-900 overflow-hidden">
                   <img src="/website_mockup.jpg" alt="Restaurant Website Mockup" loading="lazy" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                 </div>
               </div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass-dark p-4 rounded-sm flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center font-medium">
                ✓
              </div>
              <div>
                <div className="text-sm font-medium text-white">Domain Connected</div>
                <div className="text-xs text-slate-400">Just now</div>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default WebsiteBuilder;
