import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Low Cost Restaurant Management Software</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-bold text-[#0c2b47] mb-4"
          >
            Best Free POS System for Small Restaurant & Growing Chains ($8/Mo)
          </motion.h2>
          <p className="text-slate-600 text-lg">
            Flat pricing with zero commission fees, no expensive hardware bundles, and no locked payment processing contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          
          {/* Them */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-md p-8 md:p-10 border border-blue-200 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
          >
            <h3 className="text-2xl font-medium text-slate-500 mb-2">Them</h3>
            <div className="text-4xl tracking-tight font-medium text-slate-400 mb-8">$99<span className="text-xl font-normal text-slate-400">/mo</span></div>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-500 line-through">
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                + Setup fees
              </li>
              <li className="flex items-center gap-3 text-slate-500 line-through">
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                + Hardware costs
              </li>
              <li className="flex items-center gap-3 text-slate-500 line-through">
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                + Transaction cuts
              </li>
            </ul>
          </motion.div>

          {/* Us */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900 text-white rounded-md p-8 md:p-10 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full" />
            
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 bg-gradient-primary rounded-full text-xs font-medium tracking-tightr uppercase mb-4">
                Skewer POS Premium
              </div>
              <h3 className="text-2xl font-medium mb-2">Everything Included</h3>
              <div className="text-5xl font-semibold text-white mb-8">$8<span className="text-xl font-normal text-slate-400">/month flat</span></div>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-200">
                  <Check className="w-5 h-5 text-blue-400" />
                  Unlimited orders
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <Check className="w-5 h-5 text-blue-400" />
                  Complete control
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <Check className="w-5 h-5 text-blue-400" />
                  No hardware required
                </li>
              </ul>
            </div>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto bg-blue-50 border border-blue-100 rounded-sm p-6 text-center"
        >
          <p className="text-blue-900 font-medium">
            <span className="font-medium">Start completely risk-free.</span> Your first 100 orders every month are on us. No credit card required to start.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Pricing;
