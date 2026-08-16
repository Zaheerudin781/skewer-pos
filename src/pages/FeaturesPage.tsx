import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Smartphone, MonitorPlay, Globe, BarChart3, CheckCircle2, Zap, ShieldCheck, Calculator } from 'lucide-react';

const FeaturesPage = () => {
  return (
    <div className="pt-24 bg-white min-h-screen pb-32">
      <Helmet>
        <title>Restaurant POS Features | Kitchen Display, KOT, Inventory & Website Builder | Skewer POS</title>
        <meta name="description" content="Deep dive into the Skewer POS ecosystem. Discover the Mobile-First POS, Kitchen Sync KDS, Zero-Commission Website Builder, and real-time CEO Dashboard." />
      </Helmet>
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-24 border-b border-blue-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-sm font-medium mb-6"
        >
          <Zap className="w-4 h-4" />
          <span>The Operating System for Hospitality</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl tracking-tight md:text-7xl font-semibold text-[#0c2b47] mb-8"
        >
          Built for <span className="text-gradient">Speed.</span><br />
          Engineered for <span className="text-gradient">Profit.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
        >
          We didn't just build a cash register. We built a complete ecosystem that eliminates friction, cuts third-party costs, and puts you back in control of your restaurant.
        </motion.p>
      </div>

      {/* Feature 1: POS (Text Left, Image Right) */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-md flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-500/20">
                <Smartphone className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#0c2b47] mb-6 tracking-tight">
                Lightning-Fast <br/>Mobile POS
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Take orders at the table, process payments instantly, and fire tickets to the kitchen without ever walking to a stationary terminal. Built to perform flawlessly even during the Friday night rush.
              </p>
              <ul className="space-y-4">
                {[
                  'Intuitive, zero-training interface for new staff',
                  'Offline-first architecture (never lose a sale)',
                  'Complex modifiers and split-billing handled instantly'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative lg:h-[500px] flex items-center justify-center py-12 lg:py-0"
            >
              {/* Abstract POS UI Mockup */}
              <div className="glass w-full max-w-[300px] aspect-[9/16] rounded-[2rem] p-3 flex flex-col relative overflow-hidden shadow-2xl border-[6px] border-slate-100">
                <div className="flex-1 bg-slate-50 rounded-xl overflow-hidden flex flex-col">
                  <div className="h-16 bg-white border-b border-blue-200 flex items-center px-4 justify-between">
                    <div className="font-semibold text-slate-800">Table 12</div>
                    <div className="text-blue-600 font-medium">$84.50</div>
                  </div>
                  <div className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="bg-white p-3 rounded-md border border-blue-100 shadow-sm flex justify-between items-center">
                        <div>
                          <div className="text-sm font-semibold text-slate-800">Signature Burger</div>
                          <div className="text-xs text-slate-500">No Onions, Extra Bacon</div>
                        </div>
                        <div className="font-medium">$18.00</div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-white border-t border-blue-200">
                    <div className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md text-center">Send to Kitchen</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[400px] bg-blue-400/20 blur-[100px] rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 2: KDS (Image Left, Text Right) */}
      <section className="py-24 md:py-32 bg-slate-50 border-y border-blue-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative lg:h-[500px] flex items-center justify-center"
            >
              {/* Abstract KDS UI Mockup */}
              <div className="glass w-full max-w-lg aspect-video rounded-xl p-3 flex flex-col relative overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-900">
                <div className="h-10 border-b border-slate-700 flex items-center px-4 justify-between mb-4">
                  <div className="font-medium text-slate-300">Kitchen Sync</div>
                  <div className="text-green-400 text-sm flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Routing Active</div>
                </div>
                <div className="flex-1 grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`bg-slate-800 rounded-md border p-3 flex flex-col ${i === 1 ? 'border-red-500/50' : 'border-slate-700'}`}>
                      <div className="flex justify-between items-center border-b border-slate-700 pb-2 mb-2">
                        <span className="text-white font-medium">T-12</span>
                        <span className={`${i === 1 ? 'text-red-400' : 'text-slate-400'} text-xs`}>{i === 1 ? '12m' : '3m'}</span>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="text-sm text-slate-200">1x Ribeye (MR)</div>
                        <div className="text-xs text-slate-400 pl-2 border-l-2 border-yellow-500">Sub Fries</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="w-16 h-16 bg-slate-800 rounded-md flex items-center justify-center text-blue-400 mb-8 shadow-lg">
                <MonitorPlay className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#0c2b47] mb-6 tracking-tight">
                Kitchen Sync (KDS)
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Kill the printer. Our Kitchen Display System routes courses automatically, tracks prep times, and keeps your back-of-house perfectly synchronized with the front.
              </p>
              <ul className="space-y-4">
                {[
                  'Color-coded ticket aging to prevent long waits',
                  'Station-specific routing (Grill, Bar, Salad)',
                  'One-tap ticket fulfillment and SMS customer alerts'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Feature 3: Website Builder (Text Left, Image Right) */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mb-8 shadow-lg border border-blue-200">
                <Globe className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#0c2b47] mb-6 tracking-tight">
                Zero-Commission <br/>Websites
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Stop paying 30% to delivery apps. Launch a beautifully branded website in 5 minutes. Orders flow directly from your custom domain into your POS and kitchen.
              </p>
              <ul className="space-y-4">
                {[
                  'SEO-optimized out of the box to dominate local search',
                  'Menu syncs instantly from POS to website',
                  'Keep 100% of your revenue and customer data'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative lg:h-[500px] flex items-center justify-center"
            >
              <div className="glass w-full max-w-lg aspect-video rounded-xl p-2 flex flex-col relative overflow-hidden shadow-2xl border border-blue-200 bg-white">
                <div className="h-8 border-b border-slate-100 flex items-center px-3 gap-2 bg-slate-50">
                   <div className="flex gap-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                   </div>
                   <div className="ml-2 flex-1 h-5 bg-white border border-slate-200 rounded-sm flex items-center px-2 text-[10px] text-slate-400">your-restaurant.com</div>
                </div>
                <div className="flex-1 bg-slate-900 relative flex flex-col items-center justify-center text-white overflow-hidden">
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-40"></div>
                   <h3 className="text-3xl font-semibold relative z-10 tracking-tight">The Rustic Grill</h3>
                   <div className="mt-4 px-6 py-2 bg-blue-600 rounded-sm text-sm font-medium relative z-10 cursor-pointer">Order Online Now</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 4: Accounting (Image Left, Text Right) */}
      <section className="py-24 md:py-32 bg-slate-50 border-y border-blue-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative lg:h-[500px] flex items-center justify-center"
            >
              {/* Abstract Ledger UI Mockup */}
              <div className="glass w-full max-w-lg aspect-video rounded-xl p-0 flex flex-col relative overflow-hidden shadow-2xl border border-slate-200 bg-white">
                <div className="h-12 border-b border-slate-200 bg-slate-100/50 flex items-center px-4 justify-between">
                  <div className="font-medium text-slate-700 flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-green-600" />
                    Ledger Sync
                  </div>
                  <div className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-sm font-medium">Built-in General Ledger</div>
                </div>
                <div className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto bg-slate-50/30">
                   {[
                     { date: 'Today, 10:00 PM', desc: 'Daily Sales Revenue', val: '+$4,285.00', color: 'text-green-600' },
                     { date: 'Today, 10:00 PM', desc: 'Sales Tax Liability', val: '+$342.80', color: 'text-amber-600' },
                     { date: 'Today, 10:00 PM', desc: 'Credit Card Processing Fees', val: '-$125.40', color: 'text-red-600' }
                   ].map((row, i) => (
                     <div key={i} className="bg-white p-3 rounded-md border border-slate-200 shadow-sm flex justify-between items-center">
                       <div>
                         <div className="text-sm font-semibold text-slate-800">{row.desc}</div>
                         <div className="text-xs text-slate-400">{row.date}</div>
                       </div>
                       <div className={`font-medium ${row.color}`}>{row.val}</div>
                     </div>
                   ))}
                </div>
                <div className="h-2 w-full bg-gradient-to-r from-green-400 to-green-500"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="w-16 h-16 bg-green-100 rounded-md flex items-center justify-center text-green-600 mb-8 shadow-lg border border-green-200">
                <Calculator className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#0c2b47] mb-6 tracking-tight">
                Automated <br/>Bookkeeping
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Never do manual data entry again. Your daily sales, taxes, labor costs, and processing fees flow directly into our built-in general ledger at the close of every business day.
              </p>
              <ul className="space-y-4">
                {[
                  'Fully integrated, native accounting system (no third-party apps needed)',
                  'Automated tip and payroll accrual tracking',
                  'Perfectly balanced books for end-of-month reconciliation'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Feature 5: Analytics (Text Left, Image Right) */}
      <section className="py-24 md:py-32 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-1"
            >
              <div className="w-16 h-16 bg-blue-900/50 rounded-md flex items-center justify-center text-blue-400 mb-8 border border-blue-500/30">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
                CEO Dashboard
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Run your restaurant from anywhere. Access real-time sales, labor costs, and inventory metrics from your phone. Know exactly where your margins are bleeding and where you're winning.
              </p>
              <ul className="space-y-4">
                {[
                  'Live P&L tracking and Prime Cost analysis',
                  'Detailed menu engineering reports (Stars vs Dogs)',
                  'Employee performance and theft-prevention metrics'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-2 relative lg:h-[500px] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
              <div className="glass-dark w-full max-w-lg aspect-[4/3] rounded-xl p-6 flex flex-col relative overflow-hidden">
                <div className="text-slate-400 text-sm font-medium mb-6">Today's Revenue</div>
                <div className="text-5xl font-semibold text-white mb-2">$8,459.20</div>
                <div className="text-green-400 text-sm font-medium flex items-center gap-1 mb-8">
                  +14.2% vs last Tuesday
                </div>
                
                {/* Dummy Chart */}
                <div className="flex-1 flex items-end gap-3 px-2">
                  {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-blue-600/50 to-blue-400 rounded-t-sm transition-all duration-700" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Security & Reliability Section */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full text-slate-600 mb-6">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0c2b47] mb-6">Bank-Grade Security. Bulletproof Reliability.</h2>
          <p className="text-lg text-slate-600 mb-10">
            Every transaction is end-to-end encrypted. Role-based PIN access ensures staff only see what they need to. Our offline-first syncing means if the WiFi goes down, your business keeps printing money.
          </p>
          <a 
            href="https://frontend-blush-seven-e1vr2indno.vercel.app" 
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center btn-solid btn-solid-blue text-white font-medium px-8 py-4 rounded-sm text-lg transition-colors shadow-lg"
          >
            <span className="relative z-10">Start Your Free Trial</span>
          </a>
        </div>
      </section>

    </div>
  );
};

export default FeaturesPage;
