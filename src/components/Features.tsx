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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
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
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Everything your restaurant needs to automate billing, kitchen dispatch, online orders, and profit accounting in one unified cloud platform.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {/* 1. Touch Screen POS & Tablet Billing */}
          <motion.div variants={itemVariants} className="glass rounded-2xl p-6 flex flex-col justify-between border border-blue-200/80 shadow-sm hover:shadow-md transition-shadow group h-full">
            <div>
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0c2b47] mb-2">Touch Screen POS & Tablet Billing</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">Take orders at tableside with handheld Android tablets or stationary touch screen terminals with instant search and offline reliability.</p>
            </div>
            <div className="rounded-xl border border-slate-200 overflow-hidden shadow-inner bg-slate-50 h-48 w-full">
              <img 
                src="/images/screenshots/touch_billing_screen.png" 
                alt="Touch screen POS system for restaurant food billing software"
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500" 
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* 2. Kitchen Order Display System (KDS) */}
          <motion.div variants={itemVariants} className="glass rounded-2xl p-6 flex flex-col justify-between border border-blue-200/80 shadow-sm hover:shadow-md transition-shadow group h-full">
            <div>
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <MonitorPlay className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0c2b47] mb-2">Kitchen Order Display (KDS) & KOT</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">Replace paper chits with a live digital kitchen display screen for cooks with color-coded ticket timers and instant dispatch.</p>
            </div>
            <div className="rounded-xl border border-slate-200 overflow-hidden shadow-inner bg-slate-50 h-48 w-full">
              <img 
                src="/images/screenshots/pos_orders_kds.png" 
                alt="Kitchen order display system KDS for restaurant cook screens"
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500" 
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* 3. Commission-Free Online Ordering Website */}
          <motion.div variants={itemVariants} className="glass rounded-2xl p-6 flex flex-col justify-between border border-blue-200/80 shadow-sm hover:shadow-md transition-shadow group h-full">
            <div>
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <QrCode className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0c2b47] mb-2">Commission Free Online Ordering</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">Launch your own branded web-based restaurant ordering and billing storefront in minutes. Keep 100% of delivery profits.</p>
            </div>
            <div className="rounded-xl border border-slate-200 overflow-hidden shadow-inner bg-slate-50 h-48 w-full">
              <img 
                src="/images/screenshots/online_ordering_storefront.png" 
                alt="Free restaurant website builder with online ordering system"
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500" 
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* 4. Table Management Floor Plan */}
          <motion.div variants={itemVariants} className="glass rounded-2xl p-6 flex flex-col justify-between border border-blue-200/80 shadow-sm hover:shadow-md transition-shadow group h-full">
            <div>
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Grid className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0c2b47] mb-2">Smart Table & Floor Plan Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">Visual floor plan manager with real-time occupancy status (Available, Occupied, Bill Requested) across all dining rooms.</p>
            </div>
            <div className="rounded-xl border border-slate-200 overflow-hidden shadow-inner bg-slate-50 h-48 w-full">
              <img 
                src="/images/screenshots/table_floor_management.png" 
                alt="Interactive table management floor plan for full service dining"
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500" 
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* 5. Mobile & Tablet POS */}
          <motion.div variants={itemVariants} className="glass rounded-2xl p-6 flex flex-col justify-between border border-blue-200/80 shadow-sm hover:shadow-md transition-shadow group h-full">
            <div>
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0c2b47] mb-2">Android POS & Thermal Printer Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">Run billing, KDS tickets, and shift reports natively on any Android phone, tablet, or POS terminal with ESC/POS thermal printers.</p>
            </div>
            <div className="rounded-xl border border-slate-200 overflow-hidden shadow-inner bg-slate-50 h-48 w-full">
              <img 
                src="/images/screenshots/mobile_tablet_pos.png" 
                alt="Mobile Android restaurant billing app interface"
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500" 
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* 6. Automated Bookkeeping */}
          <motion.div variants={itemVariants} className="glass rounded-2xl p-6 flex flex-col justify-between border border-blue-200/80 shadow-sm hover:shadow-md transition-shadow group h-full">
            <div>
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0c2b47] mb-2">Automated Bookkeeping & Sales Ledger</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">Daily gross sales revenue, sales tax liability, and food expenses flow directly into our built-in general ledger.</p>
            </div>
            
            {/* Ledger UI Card */}
            <div className="w-full rounded-xl border border-slate-200 overflow-hidden shadow-inner bg-white h-48 flex flex-col justify-between p-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Automated Ledger Sync</div>
              </div>
              <div className="space-y-1.5">
                {[
                  { label: 'Daily Gross Sales', val: '+Rs. 48,250.00', color: 'text-green-600' },
                  { label: 'Sales Tax (5%)', val: '+Rs. 2,412.50', color: 'text-slate-700 font-semibold' },
                  { label: 'Kitchen Food Cost', val: '-Rs. 14,200.00', color: 'text-red-600' }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center text-xs px-2 py-1 rounded-md bg-slate-50 border border-slate-100">
                    <span className="text-slate-600">{row.label}</span>
                    <span className={`font-semibold ${row.color}`}>{row.val}</span>
                  </div>
                ))}
              </div>
              <div className="pt-1.5 border-t border-slate-100 flex justify-center">
                <span className="text-xs text-green-600 font-medium flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></div>
                  P&L Balanced & Synced
                </span>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Features;

