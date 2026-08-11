import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Is Skewer POS easy to set up?",
    answer: "Absolutely. Skewer POS is designed to be plug-and-play. You can set up your entire menu, table layout, and staff accounts in less than an hour. Our support team is also available 24/7 to help you if you need it."
  },
  {
    question: "Do I need special hardware?",
    answer: "No. Skewer POS is cloud-based and runs flawlessly on iPads, Android tablets, and any modern web browser. You can use your existing devices or purchase sleek hardware bundles directly from us."
  },
  {
    question: "How does the integrated website builder work?",
    answer: "With our Premium plan, you get access to a drag-and-drop website builder that is directly linked to your POS menu. When you update a price or add a dish in the POS, your website and online ordering system update instantly in real-time."
  },
  {
    question: "What happens if my internet goes down?",
    answer: "Skewer POS features a robust offline mode. You can continue taking orders, sending tickets to the kitchen, and processing cash payments. Once the connection is restored, everything syncs automatically to the cloud."
  },
  {
    question: "Are there any hidden fees or long-term contracts?",
    answer: "Never. We believe in transparent, flat-rate pricing. There are no hidden fees, no predatory payment processing markups, and you can cancel anytime. You only pay the flat monthly rate."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl tracking-tight md:text-5xl font-semibold text-[#0c2b47] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about Skewer POS. Can't find the answer you're looking for? Reach out to our support team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border border-blue-200 rounded-sm shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-[#0c2b47]">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-blue-200 pt-4 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
