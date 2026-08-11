import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="pt-32 pb-24 min-h-[80vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl tracking-tight md:text-5xl font-medium text-[#0c2b47] mb-6"
          >
            Get in touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            Our team is here to help you upgrade your restaurant.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-md p-8 md:p-12 shadow-sm"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                <input type="text" className="w-full px-6 py-3 rounded-sm border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                <input type="text" className="w-full px-6 py-3 rounded-sm border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <input type="email" className="w-full px-6 py-3 rounded-sm border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50" placeholder="john@restaurant.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-6 py-3 rounded-sm border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 resize-none" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="w-full bg-gradient-primary text-white font-medium py-4 rounded-sm hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
