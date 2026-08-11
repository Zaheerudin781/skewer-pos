import { motion } from 'framer-motion';
import { Smartphone, MonitorPlay, QrCode, Grid, KeyRound, BarChart3, Calculator } from 'lucide-react';

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
    <section className="py-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 blur-[120px] rounded-full -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl tracking-tight font-medium text-[#0c2b47] mb-4"
          >
            Everything you need. <span className="text-gradient">Nothing you don't.</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {/* 1. Mobile-First POS (Large, spans 2 cols, 2 rows if we want, or just a nice big block) */}
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2 glass rounded-md p-8 flex flex-col justify-between group overflow-hidden relative">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-primary rounded-sm flex items-center justify-center text-white mb-6">
                <Smartphone className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-medium text-[#0c2b47] mb-3">Mobile-First POS</h3>
              <p className="text-slate-600 text-lg">Take orders at the table instantly. Beam them straight to the kitchen without missing a beat.</p>
            </div>
            <div className="mt-8 h-48 w-full bg-slate-100 rounded-t-2xl border-t border-x border-blue-200 shadow-inner overflow-hidden relative group-hover:translate-y-2 transition-transform duration-500">
               {/* Decorative UI element representing POS */}
               <div className="absolute inset-x-4 top-4 bottom-0 bg-white rounded-t-xl shadow-lg border border-blue-200 p-4">
                  <div className="w-full h-8 bg-slate-100 rounded-sm mb-3"></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-12 bg-slate-50 rounded-sm border border-blue-200"></div>
                    <div className="h-12 bg-slate-50 rounded-sm border border-blue-200"></div>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* 2. Kitchen Sync */}
          <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1 glass rounded-sm p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-sm flex items-center justify-center mb-4">
                <MonitorPlay className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-[#0c2b47] mb-2">Kitchen Sync (KDS)</h3>
              <p className="text-slate-600 text-sm">Digital display for chefs. No more lost paper tickets.</p>
            </div>
          </motion.div>

          {/* 3. QR Digital Menus */}
          <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1 glass rounded-sm p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-sm flex items-center justify-center mb-4">
                <QrCode className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-[#0c2b47] mb-2">QR Menus</h3>
              <p className="text-slate-600 text-sm">Breathtaking, interactive menus customers scan at the table.</p>
            </div>
          </motion.div>

          {/* 4. CEO Dashboard */}
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-1 glass rounded-sm p-6 flex items-center gap-6">
             <div className="flex-1">
              <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-sm flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-[#0c2b47] mb-2">CEO Dashboard</h3>
              <p className="text-slate-600">Real-time analytics, MRR, and lifecycle tracking right in your pocket.</p>
             </div>
             <div className="hidden md:block w-32 h-32 bg-slate-50 rounded-full border-4 border-white shadow-inner relative flex-shrink-0">
               {/* Abstract chart pie */}
               <div className="absolute inset-0 bg-gradient-primary rounded-full [clip-path:polygon(50%_50%,100%_0,100%_100%,50%_100%)] opacity-80" />
             </div>
          </motion.div>

          {/* 5. Dynamic Floor Plans */}
          <motion.div variants={itemVariants} className="md:col-span-1 glass rounded-sm p-6">
            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-sm flex items-center justify-center mb-4">
              <Grid className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-[#0c2b47] mb-2">Floor Plans</h3>
            <p className="text-slate-600 text-sm">Drag-and-drop table management for any layout.</p>
          </motion.div>

          {/* 6. Staff PIN Security */}
          <motion.div variants={itemVariants} className="md:col-span-1 glass rounded-sm p-6">
            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-sm flex items-center justify-center mb-4">
              <KeyRound className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-[#0c2b47] mb-2">PIN Security</h3>
            <p className="text-slate-600 text-sm">Secure authentication for every employee action.</p>
          </motion.div>

          {/* 7. Accounting & Bookkeeping */}
          <motion.div variants={itemVariants} className="md:col-span-4 glass rounded-sm p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-white to-blue-50/50">
             <div className="flex-1">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-sm flex items-center justify-center mb-6 shadow-lg shadow-green-500/20">
                <Calculator className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-medium text-[#0c2b47] mb-3">Automated Bookkeeping</h3>
              <p className="text-slate-600 text-lg max-w-xl">
                Your sales, labor costs, and tax liabilities sync instantly to your ledger. Say goodbye to manual data entry and end-of-month reconciliation headaches.
              </p>
             </div>
             
             {/* Abstract Ledger UI */}
             <div className="w-full md:w-96 bg-white rounded-sm border border-slate-200 shadow-xl overflow-hidden flex-shrink-0">
               <div className="bg-slate-50 border-b border-slate-200 p-3 flex items-center justify-between">
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-red-400"></div>
                   <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                   <div className="w-2 h-2 rounded-full bg-green-400"></div>
                 </div>
                 <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Ledger Sync</div>
               </div>
               <div className="p-4 space-y-3">
                 {[
                   { label: 'Daily Sales Revenue', val: '+$4,285.00', color: 'text-green-600' },
                   { label: 'Sales Tax Liability', val: '+$342.80', color: 'text-amber-600' },
                   { label: 'Payroll Accrual', val: '-$1,120.00', color: 'text-red-600' }
                 ].map((row, i) => (
                   <div key={i} className="flex justify-between items-center text-xs p-2 rounded-sm bg-slate-50 border border-slate-100">
                     <span className="font-medium text-slate-600">{row.label}</span>
                     <span className={`font-semibold ${row.color}`}>{row.val}</span>
                   </div>
                 ))}
                 <div className="pt-2 mt-2 border-t border-slate-100 flex justify-center">
                   <span className="text-[10px] text-green-500 font-medium flex items-center gap-1">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                     Synced Successfully
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
