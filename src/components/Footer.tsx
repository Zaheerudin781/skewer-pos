import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl tracking-tight font-medium text-white mb-8"
          >
            Ready to upgrade your restaurant <br className="hidden md:block"/> in under 5 minutes?
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <a 
              href="https://frontend-blush-seven-e1vr2indno.vercel.app"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center btn-solid btn-solid-blue text-white font-medium px-8 py-4 rounded-sm text-lg transition-colors shadow-lg hover:shadow-blue-500/20"
            >
              Claim Your Free Account
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border-t border-slate-800 pt-12">
          <div className="col-span-2 lg:col-span-2">
            <span className="text-2xl font-semibold text-white tracking-tight">Skewer POS</span>
            <p className="mt-4 text-slate-500 max-w-sm">
              The ultimate, all-in-one seamless ecosystem for modern restaurants. Break free from predatory tech.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/features" className="hover:text-white transition-colors">Website Builder</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Who We Serve</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="hover:text-white transition-colors">Quick Service (QSR)</Link></li>
              <li><Link to="/features" className="hover:text-white transition-colors">Full Service Dining</Link></li>
              <li><Link to="/features" className="hover:text-white transition-colors">Bars & Nightclubs</Link></li>
              <li><Link to="/features" className="hover:text-white transition-colors">Cafes & Bakeries</Link></li>
              <li><Link to="/features" className="hover:text-white transition-colors">Food Trucks & Pop-ups</Link></li>
              <li><Link to="/features" className="hover:text-white transition-colors">Ghost Kitchens</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 text-center text-sm text-slate-600">
          &copy; {new Date().getFullYear()} Skewer POS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
