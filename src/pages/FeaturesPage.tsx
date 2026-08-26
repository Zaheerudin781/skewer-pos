import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Smartphone, MonitorPlay, Globe, BarChart3, CheckCircle2, ShieldCheck, Sparkles, Grid } from 'lucide-react';

const FeaturesPage = () => {
  return (
    <div className="pt-24 bg-white min-h-screen pb-32">
      <Helmet>
        <title>Restaurant POS Features | Cloud POS, KDS, KOT, Inventory & Website Builder | Skewer POS</title>
        <meta name="description" content="Discover the full power of Skewer POS: Cloud based restaurant POS system, Kitchen Order Display System (KDS), digital KOT, and commission-free online ordering website builder." />
      </Helmet>
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-24 border-b border-blue-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold mb-6 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>(RMS) Restaurant Management System & Cloud POS</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#0c2b47] mb-8 tracking-tight"
        >
          Cloud Based Restaurant POS System & <span className="text-gradient">RMS Software</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
        >
          A unified <strong>digital restaurant management platform</strong> combining touch screen billing, wireless kitchen display screens, visual table layouts, and commission-free web ordering.
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
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-500/20">
                <Smartphone className="w-8 h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c2b47] mb-6 tracking-tight">
                Touch Screen POS System for Restaurant Table Service
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Take orders at tableside, process cash and card payments instantly, and route tickets to the kitchen without walking to stationary counter terminals. Built for rapid speed during peak rushes.
              </p>
              <ul className="space-y-4">
                {[
                  'Intuitive food billing software for restaurant waitstaff',
                  'Offline restaurant POS software (never lose a sale when WiFi drops)',
                  'Complex item modifiers, custom notes, and instant split-billing',
                  'Android restaurant billing app with printer support for 80mm thermal printers'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-50"
            >
              <img 
                src="/images/screenshots/touch_billing_screen.png" 
                alt="Touch screen POS system for restaurant food billing software"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
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
              className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-50"
            >
              <img 
                src="/images/screenshots/pos_orders_kds.png" 
                alt="Kitchen order display system KDS for restaurant cook screen order tickets"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center text-blue-400 mb-8 shadow-lg">
                <MonitorPlay className="w-8 h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c2b47] mb-6 tracking-tight">
                Kitchen Order Display System (KDS) & Digital KOT Software
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Eliminate lost paper tickets and kitchen shouting. Our integrated kitchen display system routes orders automatically, color-codes ticket wait times, and synchronizes line cooks with front-of-house servers.
              </p>
              <ul className="space-y-4">
                {[
                  'Digital kitchen order ticket (KOT) software updating in real time',
                  'Restaurant screen order display for cooks with color-coded timers',
                  'Station routing for Grill, Fryer, Bar, and Salad prep lines',
                  'Order dispatch and kitchen display system tracking dine-in and delivery'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg text-slate-700">{item}</span>
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
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-8 shadow-lg border border-blue-200">
                <Globe className="w-8 h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c2b47] mb-6 tracking-tight">
                Commission Free Online Ordering System & Website Builder
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Stop losing 30% on every delivery order. Launch a white-label restaurant ordering website in 5 minutes. Direct customer orders sync automatically into your POS and kitchen KDS.
              </p>
              <ul className="space-y-4">
                {[
                  'Free restaurant website builder with online ordering system',
                  'Web based restaurant ordering and billing system with 0% commissions',
                  'Online menu ordering system with POS integration',
                  'Restaurant e-commerce ordering system with customer data ownership'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-50"
            >
              <img 
                src="/images/screenshots/online_ordering_storefront.png" 
                alt="Commission free online ordering system for restaurants storefront"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 4: Table Management (Image Left, Text Right) */}
      <section className="py-24 md:py-32 bg-slate-50 border-y border-blue-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-50"
            >
              <img 
                src="/images/screenshots/table_floor_management.png" 
                alt="Interactive table management floor plan system for restaurant table service"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-8 shadow-md">
                <Grid className="w-8 h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c2b47] mb-6 tracking-tight">
                Table & Room Management for Full Service Dining
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Coordinate indoor dining, family halls, outdoor patios, and bar stools from one visual screen. Track occupied tables, active bills, and guest seating status in real time.
              </p>
              <ul className="space-y-4">
                {[
                  'Tablet POS system for restaurant table service',
                  'Color-coded occupancy: Available (Green), Occupied (Red), Bill Requested (Purple)',
                  'Multiple room partitions (Bar, Family Hall, Main Room, Patio)',
                  'One-tap table merging, check transferring, and item splitting'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Feature 5: Mobile Tablet & Analytics (Text Left, Image Right) */}
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
              <div className="w-16 h-16 bg-blue-900/50 rounded-xl flex items-center justify-center text-blue-400 mb-8 border border-blue-500/30">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Enterprise Restaurant Management System (RMS) & Analytics
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Oversee single or multi-branch restaurant operations from any smartphone or tablet. Track daily gross sales, live food costs (COGS), labor percentages, and shift profitability from anywhere.
              </p>
              <ul className="space-y-4">
                {[
                  'Multi branch restaurant management software with centralized menu control',
                  'Restaurant backend management software with recipe costing and inventory depletion',
                  'Live P&L tracking and Prime Cost margin calculations',
                  'Role-based PIN security for cashiers, managers, and admins'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-slate-800"
            >
              <img 
                src="/images/screenshots/mobile_tablet_pos.png" 
                alt="Mobile handheld tablet POS interface for restaurant table service and executive oversight"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Security & Reliability Section */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl text-blue-600 mb-6 shadow-sm">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c2b47] mb-6">
            Offline Restaurant POS Software with Android Tablet & Printer Support
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Every transaction is end-to-end encrypted. Role-based PIN access ensures staff only see what they need to. Our offline-first syncing means if the WiFi drops, your restaurant continues billing, printing receipts, and sending kitchen chits without missing a single order.
          </p>
          <a 
            href="https://frontend-blush-seven-e1vr2indno.vercel.app" 
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-lg text-base transition-all shadow-lg shadow-blue-600/30"
          >
            Start 100 Free Orders Now
          </a>
        </div>
      </section>

    </div>
  );
};

export default FeaturesPage;

