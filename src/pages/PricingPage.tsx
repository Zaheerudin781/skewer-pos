import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, XCircle, Info, ArrowRight } from 'lucide-react';

const PricingPage = () => {
  return (
    <div className="pt-24 bg-white min-h-screen pb-32">
      <Helmet>
        <title>Restaurant POS Pricing | $8/Month Flat Fee — Zero Commissions | Skewer POS</title>
        <meta name="description" content="Simple, transparent pricing for Skewer POS. Flat rates, no hidden fees, no percentage cuts. Keep 100% of your restaurant's profits." />
      </Helmet>
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-sm font-medium mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span>War on Hidden Fees</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl tracking-tight md:text-7xl font-semibold text-[#0c2b47] mb-8"
        >
          Stop paying the <span className="text-red-500">30%</span> tax.<br />
          Keep your margins.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12"
        >
          Legacy POS systems and delivery apps drain your profits with percentage cuts, hardware fees, and forced processing contracts. We do one flat fee.
        </motion.p>
      </div>

      {/* Them vs Us Section */}
      <section className="pb-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* The Industry (Them) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 border border-slate-200 rounded-xl p-8 md:p-12 grayscale flex flex-col"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-slate-500" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-600">The Industry</h3>
              </div>
              
              <div className="space-y-6 flex-1">
                <div className="pb-6 border-b border-slate-200">
                  <div className="text-slate-500 font-medium mb-1">Monthly Software Fee</div>
                  <div className="text-3xl font-semibold text-slate-700">$99 - $299<span className="text-lg font-normal text-slate-400">/mo</span></div>
                </div>
                
                <ul className="space-y-4">
                  {[
                     '+ Up to 3.5% Credit Card Processing',
                     '+ $800+ Proprietary Hardware',
                     '+ $50/mo Extra for Kitchen Display',
                     '+ 30% Cut on Online Orders (DoorDash/Uber)'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-8 mt-8 border-t border-slate-200">
                <div className="text-slate-500 font-medium mb-2">Estimated Monthly Cost (1000 orders)</div>
                <div className="text-4xl font-semibold text-slate-800">$1,450+</div>
              </div>
            </motion.div>

            {/* Skewer POS (Us) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900 border border-blue-900 rounded-xl p-8 md:p-12 flex flex-col relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Skewer POS</h3>
                </div>
                <div className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider rounded-full border border-blue-500/30">
                  Premium
                </div>
              </div>
              
              <div className="space-y-6 flex-1 relative z-10">
                <div className="pb-6 border-b border-slate-700">
                  <div className="text-blue-200 font-medium mb-1">Monthly Flat Rate</div>
                  <div className="text-5xl font-semibold text-white">$8<span className="text-xl font-normal text-slate-400">/mo</span></div>
                </div>
                
                <ul className="space-y-4">
                  {[
                     'Bring Your Own Processor (Stripe, Square, etc)',
                     'Runs on ANY device (iPad, Android, PC)',
                     'Kitchen Sync (KDS) Included Free',
                     '0% Commission on Custom Online Orders',
                     'Automated Ledger & Bookkeeping Sync'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-200 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-8 mt-8 border-t border-slate-700 relative z-10">
                <div className="text-slate-400 font-medium mb-2">Estimated Monthly Cost (Unlimited orders)</div>
                <div className="text-4xl font-semibold text-white flex items-center gap-3">
                  $8
                  <span className="text-sm px-2 py-1 bg-green-500/20 text-green-400 rounded-md border border-green-500/30">Save $1,442/mo</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Grid of Features */}
      <section className="py-24 bg-slate-50 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-[#0c2b47] mb-4">Everything you need is included.</h2>
            <p className="text-slate-600">No add-ons, no modular pricing, no surprises.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Mobile-First POS', desc: 'Offline-ready ordering system for servers and counters.' },
              { title: 'Kitchen Sync (KDS)', desc: 'Digital routing for your back-of-house. No more lost tickets.' },
              { title: 'Zero-Commission Website', desc: 'A beautiful online ordering site on your custom domain.' },
              { title: 'QR Digital Menus', desc: 'Interactive table-side menus that customers can scan.' },
              { title: 'CEO Dashboard', desc: 'Real-time analytics and P&L tracking from anywhere.' },
              { title: 'Dynamic Floor Plans', desc: 'Drag-and-drop table management for any restaurant layout.' },
              { title: 'Automated Bookkeeping', desc: 'Built-in general ledger for tracking sales, labor, and taxes.' },
              { title: 'Staff PIN Security', desc: 'Secure role-based permissions and robust theft-prevention.' },
              { title: '24/7 Priority Support', desc: 'Always online, always ready to help you during the dinner rush.' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h4>
                <p className="text-slate-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#0c2b47]">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            {[
              { 
                q: 'Do I have to buy expensive hardware?', 
                a: 'Absolutely not. Skewer POS runs in the browser. You can use your existing iPads, Android tablets, laptops, or even smartphones. If it connects to the internet, it runs Skewer.' 
              },
              { 
                q: 'How do you process credit cards?', 
                a: 'We are processor-agnostic. We integrate seamlessly with Stripe and Square. You negotiate your own rates with them, and we take absolutely 0% cut of your transactions.' 
              },
              { 
                q: 'What happens if the internet goes down?', 
                a: 'Skewer is built with an offline-first architecture (PWA). If the WiFi drops, your staff can still take orders and cache them locally. Once the connection returns, everything syncs automatically.' 
              },
              { 
                q: 'Is the $8 really a flat fee?', 
                a: 'Yes. $8 a month covers the POS software, the KDS, the analytics dashboard, and the website builder. There are no surprise fees or add-on modules.' 
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-blue-100 p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-slate-800 mb-3 flex gap-3">
                  <Info className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-slate-600 ml-9 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#0c2b47] to-slate-900 rounded-[2rem] p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Stop bleeding margins. Start scaling.</h2>
              <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
                Your first 100 orders every single month are completely free. Start using the ecosystem today, risk-free.
              </p>
              <a 
                href="https://frontend-blush-seven-e1vr2indno.vercel.app" 
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center btn-solid btn-solid-blue text-white font-medium px-8 py-4 rounded-sm text-lg transition-colors shadow-xl hover:shadow-blue-500/20 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Claim Your Free Account
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PricingPage;
