import { motion } from 'framer-motion';
import { Smartphone, MonitorPlay, QrCode, Grid, BarChart3, Calculator, Sparkles } from 'lucide-react';

const Features = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 overflow-hidden relative bg-white">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 blur-[120px] rounded-full -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Enterprise Feature Suite</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-bold text-[#0c2b47] mb-4"
          >
            All In One Restaurant Management System (RMS) & Cloud POS
          </motion.h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Everything your restaurant needs to automate billing, kitchen dispatch, online orders, and profit accounting in one unified cloud platform.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {/* 1. Touch Screen POS & Tablet Billing */}
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2 glass rounded-2xl p-8 flex flex-col justify-between group overflow-hidden relative border border-blue-200/80 shadow-md">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center text-white mb-6 shadow-md shadow-blue-500/20">
                <Smartphone className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#0c2b47] mb-3">Touch Screen POS System for Restaurant & Tablet Billing</h3>
              <p className="text-slate-600 text-base leading-relaxed">Take orders at tableside with handheld Android tablets or stationary touch screen terminals. Instant item search, rapid modifiers, split bills, and offline-first reliability.</p>
            </div>
            <div className="mt-6 rounded-xl border border-slate-200 overflow-hidden shadow-inner bg-slate-50">
              <img 
                src="/images/screenshots/touch_billing_screen.png" 
                alt="Touch screen POS system for restaurant food billing software"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" 
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* 2. Kitchen Order Display System (KDS) */}
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-1 glass rounded-2xl p-6 flex flex-col justify-between border border-blue-200/80 shadow-sm group">
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
              <div>
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-3">
                  <MonitorPlay className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0c2b47] mb-2">Kitchen Order Display System (KDS) & Digital KOT</h3>
                <p className="text-slate-600 text-sm">Replace paper chits with a live digital kitchen display screen for cooks with color-coded ticket timers.</p>
              </div>
            </div>
            <div className="mt-4 rounded-lg overflow-hidden border border-slate-200 shadow-sm max-h-48">
              <img 
                src="/images/screenshots/pos_orders_kds.png" 
                alt="Kitchen order display system KDS for restaurant cook screens"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* 3. Commission-Free Online Ordering Website */}
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-1 glass rounded-2xl p-6 flex flex-col justify-between border border-blue-200/80 shadow-sm group">
            <div>
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-3">
                <QrCode className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0c2b47] mb-2">Commission Free Online Ordering System & Website Builder</h3>
              <p className="text-slate-600 text-sm">Launch your own branded web-based restaurant ordering and billing storefront in minutes. Keep 100% of delivery profits.</p>
            </div>
            <div className="mt-4 rounded-lg overflow-hidden border border-slate-200 shadow-sm max-h-48">
              <img 
                src="/images/screenshots/online_ordering_storefront.png" 
                alt="Free restaurant website builder with online ordering system"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* 4. Table Management Floor Plan */}
          <motion.div variants={itemVariants} className="md:col-span-2 glass rounded-2xl p-6 border border-blue-200/80 shadow-sm group">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
              <Grid className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0c2b47] mb-2">Smart Table Management & Dynamic Floor Layout</h3>
            <p className="text-slate-600 text-sm mb-4">Visual floor plan manager with real-time occupancy status (Available, Occupied, Bill Requested) across rooms.</p>
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm">
              <img 
                src="/images/screenshots/table_floor_management.png" 
                alt="Interactive table management floor plan for full service dining"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* 5. Mobile & Tablet POS */}
          <motion.div variants={itemVariants} className="md:col-span-2 glass rounded-2xl p-6 border border-blue-200/80 shadow-sm group">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0c2b47] mb-2">Android Restaurant Billing App with Printer Support</h3>
            <p className="text-slate-600 text-sm mb-4">Run billing, KDS tickets, and shift reports natively on any Android smartphone, tablet, or POS terminal with ESC/POS thermal printers.</p>
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm">
              <img 
                src="/images/screenshots/mobile_tablet_pos.png" 
                alt="Mobile Android restaurant billing app interface"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* 6. Automated Bookkeeping */}
          <motion.div variants={itemVariants} className="md:col-span-4 glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-white to-blue-50/50 border border-blue-200/80 shadow-md">
             <div className="flex-1">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/20">
                <Calculator className="w-7 h-7" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0c2b47] mb-3">Restaurant Invoice and Billing Software with Automated Bookkeeping</h3>
              <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
                Your daily gross sales, sales tax liability, labor accruals, and supplier expenses flow directly into our built-in general ledger. Say goodbye to manual bookkeeping and messy spreadsheets.
              </p>
             </div>
             
             {/* Abstract Ledger UI */}
             <div className="w-full md:w-96 bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden flex-shrink-0">
               <div className="bg-slate-50 border-b border-slate-200 p-3 flex items-center justify-between">
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-red-400"></div>
                   <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                   <div className="w-2 h-2 rounded-full bg-green-400"></div>
                 </div>
                 <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Automated Ledger Sync</div>
               </div>
               <div className="p-4 space-y-3">
                 {[
                   { label: 'Daily Gross Sales Revenue', val: '+Rs. 48,250.00', color: 'text-green-600' },
                   { label: 'Sales Tax (5%)', val: '+Rs. 2,412.50', color: 'text-amber-600' },
                   { label: 'Kitchen Food Cost (COGS)', val: '-Rs. 14,200.00', color: 'text-red-600' }
                 ].map((row, i) => (
                   <div key={i} className="flex justify-between items-center text-xs p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                     <span className="font-semibold text-slate-700">{row.label}</span>
                     <span className={`font-bold ${row.color}`}>{row.val}</span>
                   </div>
                 ))}
                 <div className="pt-2 mt-2 border-t border-slate-100 flex justify-center">
                   <span className="text-xs text-green-600 font-semibold flex items-center gap-1.5">
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                     P&L Balanced & Synced
                   </span>
                 </div>
               </div>
             </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Features;

