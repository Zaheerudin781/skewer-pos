import { motion as fmotion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers 
} from 'lucide-react';

const productModules = [
  {
    id: 'pos',
    badge: 'Core Terminal',
    title: 'Touch Screen Cloud POS & Fast Billing Terminal',
    description: 'Designed for lightning-fast order entry during chaotic peak rushes. Staff can tap items, customize modifiers, split bills, and print thermal receipts in under 3 seconds.',
    image: '/images/screenshots/touch_billing_screen.png',
    alt: 'Touch screen cloud restaurant billing POS terminal interface',
    bullets: [
      'Split payments across cash, card, and digital wallets',
      'Works 100% offline — keeps billing even if WiFi drops',
      'Fast category grid with instant item search & variations',
      'Table, takeaway, and delivery order type switching'
    ]
  },
  {
    id: 'kds',
    badge: 'Kitchen Automation',
    title: 'Wireless Kitchen Display System (KDS) & Digital KOT',
    description: 'Eliminates lost paper tickets and kitchen miscommunication. Orders placed by cashiers, waiters, or online guests pop up instantaneously on station screens with live preparation timers.',
    image: '/images/screenshots/pos_orders_kds.png',
    alt: 'Digital kitchen order display system KDS tracking cooking tickets',
    bullets: [
      'Multi-station intelligent order routing (Grill, Fry, Bar, Salad)',
      'Color-coded urgency timers alerting expeditors to delayed orders',
      'One-tap ticket bumping and recall capabilities',
      'Item-level special instructions, modifier notes, and allergen warnings'
    ]
  },
  {
    id: 'storefront',
    badge: 'Direct Revenue',
    title: 'Commission-Free Online Ordering & Website Builder',
    description: 'Stop paying 30% aggregator commissions to third-party delivery apps. Launch your own branded ordering website and QR code digital menus where 100% of the profits stay in your bank account.',
    image: '/images/screenshots/online_ordering_storefront.png',
    alt: 'Direct customer online ordering digital storefront for restaurants',
    bullets: [
      '0% commission on all pickup and delivery orders',
      'Custom subdomain or connected custom domain',
      'Real-time automated menu and stock availability sync',
      'Mobile-optimized customer checkout experience'
    ]
  },
  {
    id: 'tables',
    badge: 'Floor Operations',
    title: 'Interactive Multi-Room Table & Floor Plan Management',
    description: 'Turn tables faster and eliminate dining room friction. Visual floor layouts give your host and floor managers real-time visibility over occupied, reserved, and open tables.',
    image: '/images/screenshots/table_floor_management.png',
    alt: 'Interactive dining room table management layout and occupancy tracker',
    bullets: [
      'Drag-and-drop table layout customizer for multi-floor venues',
      'Real-time seating duration and table turnover counters',
      'Seamless table merging and check transfers between servers',
      'Guest party size assignment and reservation seating'
    ]
  },
  {
    id: 'mobile',
    badge: 'Handheld Speed',
    title: 'Mobile Tableside Ordering for Handheld Android & Tablets',
    description: 'Free your servers from stationary counter terminals. Empower waitstaff to take orders directly at the dining table, send chits straight to the kitchen, and close bills on low-cost handheld tablets.',
    image: '/images/screenshots/mobile_tablet_pos.png',
    alt: 'Handheld tablet POS for waitstaff tableside ordering and fast checkout',
    bullets: [
      'Zero proprietary hardware lock-in — runs on any Android tablet or iPad',
      'Cuts server walking distance by over 60% per shift',
      'Instant kitchen dispatch while waitstaff is still talking with guests',
      'Staff PIN login with role-based feature security'
    ]
  },
  {
    id: 'accounting',
    badge: 'Financial Control',
    title: 'Automated Restaurant Accounting, Inventory & Recipe Costing',
    description: 'Replace complicated third-party accounting and inventory add-ons. Skewer POS automatically tracks ingredient yields, deducts inventory on sale, and produces automated daily P&L statements.',
    image: '/images/screenshots/pos_orders_kds.png',
    alt: 'Restaurant recipe costing and automated accounting general ledger',
    bullets: [
      'Automated General Ledger sync on every closed register shift',
      'Ingredient-level recipe costing and real-time margin tracking',
      'Tax, tip, discount, and payment processing fee reconciliation',
      'Daily profit and loss (P&L) reporting ready for tax season'
    ]
  }
];

const AboutPage = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <Helmet>
        <title>About Skewer Restaurant POS | Story & Complete Product Overview</title>
        <meta name="description" content="Learn about Skewer POS and explore our complete restaurant product suite: Touch billing POS, KDS, free website builder, table layouts, and automated accounting." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>The Skewer POS Story</span>
          </div>
          <fmotion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0c2b47] tracking-tight mb-6"
          >
            Skewer Restaurant POS (Point of Sale) & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              (RMS) Restaurant Management System
            </span>
          </fmotion.h1>
          <fmotion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
          >
            Built by real restaurant operators to end predatory 30% delivery aggregator commissions and clunky $3,000 legacy hardware lock-ins with a flat $8/month cloud platform.
          </fmotion.p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl tracking-tight font-medium text-[#0c2b47] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To empower independent restaurant owners with world-class, premium technology that doesn't exploit them. We are on a mission to democratize hospitality tech by providing a transparent, flat-rate, all-in-one ecosystem—eliminating predatory processing fees, hidden costs, and restrictive long-term contracts.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl tracking-tight font-medium text-[#0c2b47] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                </div>
                Our Vision
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We envision a future where every local restaurant, cafe, and food truck has access to the exact same powerful tools used by massive multi-national chains, but with complete financial sovereignty. We see a world where restaurant owners keep 100% of their hard-earned money and customer data, driving a thriving, diverse culinary landscape.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 rounded-md p-4 border border-blue-200 shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80" 
                alt="Restaurant Team" 
                className="rounded-sm w-full h-64 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-md p-6 border border-blue-100 flex flex-col justify-center">
                <div className="text-4xl tracking-tight font-semibold text-blue-600 mb-2">0%</div>
                <div className="text-sm font-medium text-slate-700">Hidden Fees & Markups</div>
              </div>
              <div className="bg-slate-900 rounded-md p-6 border border-slate-800 flex flex-col justify-center">
                <div className="text-4xl tracking-tight font-semibold text-white mb-2">100%</div>
                <div className="text-sm font-medium text-slate-400">Data Ownership</div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── COMPLETE PRODUCT OVERVIEW SECTION ─── */}
        <div className="my-28 pt-16 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Full Ecosystem Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c2b47] tracking-tight mb-6">
              The Complete All-In-One <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Restaurant Operating System
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Every tool required to operate a profitable modern food business—from high-tempo front-of-house order taking to real-time cookline dispatch and automated bookkeeping—unified in one cloud platform.
            </p>
          </div>

          {/* Product Cards Grid with Real Screenshots */}
          <div className="space-y-20">
            {productModules.map((module, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={module.id} 
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Text Content */}
                  <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider border border-blue-200/80">
                      <Sparkles className="w-3.5 h-3.5" />
                      {module.badge}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0c2b47] tracking-tight leading-snug">
                      {module.title}
                    </h3>

                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                      {module.description}
                    </p>

                    <div className="pt-2 space-y-3">
                      {module.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-slate-700 font-medium">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <a 
                        href="https://app.skewerpos.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors group"
                      >
                        <span>Launch live in terminal</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Visual Screenshot Mockup */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl p-2 bg-gradient-to-tr from-slate-200 via-blue-50 to-slate-100 border border-slate-200 shadow-2xl shadow-slate-200/70 overflow-hidden group">
                      <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
                        {/* Fake browser bar */}
                        <div className="h-8 bg-slate-950/80 border-b border-white/10 flex items-center px-3 gap-2">
                          <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></div>
                          </div>
                          <div className="text-[11px] text-slate-400 font-mono ml-2">app.skewerpos.com</div>
                        </div>
                        <img 
                          src={module.image} 
                          alt={module.alt} 
                          className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Unified Ecosystem vs Fragmented Stack Comparison Card */}
          <div className="mt-28 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 rounded-2xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">The Cost of Fragmentation</span>
              <h3 className="text-2xl sm:text-4xl font-bold mt-2 mb-4">
                Why Operators Choose One Unified Platform
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Most restaurant systems force you into paying for 5 different subscriptions with messy third-party integrations that break during dinner service. Skewer POS gives you everything natively.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Legacy Stack */}
              <div className="p-6 rounded-xl bg-white/5 border border-red-500/20 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-lg text-red-300">The Fragmented Legacy Stack</h4>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-red-500/20 text-red-300 font-semibold">$550+ / month</span>
                </div>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-red-400">✕</span> Toast / Square POS Subscription: $69 - $165/mo</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">✕</span> 7shifts Employee Scheduling: $40 - $70/mo</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">✕</span> ChowNow / Food App Ordering: $149/mo</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">✕</span> QuickBooks Restaurant Accounting: $60/mo</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">✕</span> Proprietary locked terminal hardware: $2,500+</li>
                </ul>
              </div>

              {/* Skewer POS */}
              <div className="p-6 rounded-xl bg-blue-600/15 border border-blue-400/40 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-lg text-emerald-300">Skewer POS Native Suite</h4>
                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">$8 / month flat</span>
                </div>
                <ul className="space-y-2.5 text-sm text-slate-200">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Cloud Touch POS & Tablet Billing: Included</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Kitchen Display KDS & Digital KOT: Included</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Commission-Free Online Ordering & Website: Included</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Automated Restaurant Accounting & GL: Included</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Bring your own hardware (Android, iPad, PC): $0</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CEO Message Section */}
        <div className="bg-slate-50 rounded-md p-8 md:p-16 mb-24 border border-blue-200">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2 relative">
              <div className="absolute inset-0 bg-blue-500 rounded-md translate-x-4 translate-y-4 opacity-20"></div>
              <img 
                src="/ceo-hamza.jpg" 
                alt="Zaheerudin Hamza, CEO of Skewer POS" 
                className="relative z-10 rounded-md w-full h-[450px] object-cover object-center shadow-xl"
              />
            </div>
            <div className="md:col-span-3">
              <svg className="w-12 h-12 text-blue-400 mb-6 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <h3 className="text-2xl md:text-3xl tracking-tight font-medium text-[#0c2b47] mb-6 leading-tight">
                "I didn't start this company because I love software. I started it because I love restaurants, and I was tired of watching my peers get bled dry."
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                As a restaurant operator myself, I know the sting of checking the end-of-month statements. Seeing thousands of dollars vanish to hidden processing markups, junk fees, and software that crashes during the Friday night rush. We pour our hearts, our sweat, and our life savings into our businesses, only to have tech monopolies treat us like ATMs.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                Skewer POS is my rebellion against that system. It's built by operators, for operators. We give you the absolute best tools on the market, at a fair, flat rate. No games. No hostage situations with your own data. Just pure, unadulterated empowerment.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center font-medium text-xl shadow-lg overflow-hidden border border-white">
                  <img src="/ceo-hamza.jpg" alt="Zaheerudin Hamza" className="w-full h-full object-cover object-center" />
                </div>
                <div>
                  <div className="font-medium text-[#0c2b47] text-lg">Zaheerudin Hamza</div>
                  <div className="text-blue-600 font-medium">CEO & Restaurant Operator</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join the Revolution CTA */}
        <div className="bg-slate-900 rounded-md p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl tracking-tight md:text-5xl font-medium mb-6">Ready to Experience Skewer POS?</h2>
            <p className="text-lg text-slate-300 mb-10">
              Join thousands of independent restaurants who have upgraded to our cloud platform and reclaimed their profits.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://app.skewerpos.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-8 py-3.5 rounded-md shadow-lg shadow-blue-600/30 transition-all"
              >
                Launch Free Terminal
              </a>
              <a 
                href="https://wa.me/923466617785" 
                target="_blank" 
                rel="noreferrer" 
                className="w-full sm:w-auto inline-flex items-center justify-center border border-slate-700 hover:border-slate-500 bg-white/5 text-white font-semibold text-sm px-8 py-3.5 rounded-md backdrop-blur-sm transition-all"
              >
                Talk with Zaheerudin (WhatsApp)
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
