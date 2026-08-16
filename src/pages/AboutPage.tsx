import { motion as fmotion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <Helmet>
        <title>About Skewer Restaurant POS | Built for Restaurant Operators</title>
        <meta name="description" content="Skewer POS is built by restaurant operators, for restaurant operators. Our mission is to end predatory pricing in restaurant tech with the best POS and website maker." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <fmotion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl tracking-tight md:text-6xl font-semibold text-[#0c2b47] tracking-tight mb-6"
          >
            Built for Restaurants, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Not for Investors
            </span>
          </fmotion.h1>
          <fmotion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            Skewer POS was born out of frustration with predatory legacy systems that trap restaurants in bad contracts and charge hidden fees.
          </fmotion.p>
        </div>

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

        <div className="bg-slate-900 rounded-md p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl tracking-tight md:text-5xl font-medium mb-6">Join the Revolution</h2>
            <p className="text-lg text-slate-300 mb-10">
              Thousands of independent restaurants are breaking free from predatory tech. It's time to take control of your business.
            </p>
            <a href="https://wa.me/923466617785" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center border border-blue-400 bg-transparent text-blue-400 font-medium text-sm px-6 py-2.5 rounded-sm btn-hollow btn-hollow-light">
              Talk to Our Team Today
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
