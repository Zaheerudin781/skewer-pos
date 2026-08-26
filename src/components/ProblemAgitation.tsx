import { motion } from 'framer-motion';
import { MonitorX, TrendingDown, ClockAlert } from 'lucide-react';

const ProblemAgitation = () => {
  const problems = [
    {
      title: 'Expensive Hardware',
      description: 'Thousands of dollars locked into clunky terminals you don\'t actually need.',
      icon: <MonitorX className="w-8 h-8 text-red-500" />,
    },
    {
      title: 'Predatory 30% Fees',
      description: 'Delivery apps and hidden processors eating your margins alive.',
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
    },
    {
      title: 'Outdated 90s Software',
      description: 'Slow, complicated, and crashes when you need it the most.',
      icon: <ClockAlert className="w-8 h-8 text-red-500" />,
    },
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-bold text-[#0c2b47] mb-6"
          >
            Tired of Expensive Legacy Hardware & Predatory 30% Delivery Fees? <br className="hidden md:block" />
            <span className="text-blue-600 font-semibold">It's time to upgrade to Skewer Cloud POS.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-sm p-8 shadow-sm border border-blue-200 hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-sm bg-red-50 flex items-center justify-center mb-6">
                {problem.icon}
              </div>
              <h3 className="text-xl font-medium text-[#0c2b47] mb-3">{problem.title}</h3>
              <p className="text-slate-600 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemAgitation;
