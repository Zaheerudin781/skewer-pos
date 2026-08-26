import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, ArrowRight, BookOpen, TrendingUp, ChefHat } from 'lucide-react';
import { blogs } from '../data/blogs';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Financial Strategy', 'Kitchen Operations', 'Marketing', 'Growth', 'POS & Tech'];

  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter(b => b.category.toLowerCase().includes(selectedCategory.toLowerCase()) || (selectedCategory === 'POS & Tech' && b.category.toLowerCase().includes('pos')));

  const featuredBlog = blogs[0]; // Spotlight article

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-200 selection:text-blue-900 font-sans">
      <Helmet>
        <title>Restaurant Business Journal | Profit Strategies & Operations Playbook</title>
        <meta name="description" content="World-class strategies for restaurant owners. Learn how to optimize profit margins, eliminate third-party fees, and automate your kitchen from zero to hero." />
      </Helmet>

      {/* ─── FULL SCREEN HERO ─── */}
      <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-end pb-16 pt-28 overflow-hidden">
        {/* Full-bleed Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/blog-images/blog_profit_margins_1785358621370.jpg" 
            alt="Restaurant Business Journal Background" 
            className="w-full h-full object-cover object-center transform scale-105"
          />
          {/* Multi-layer Cinematic Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Breadcrumb / Home Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white text-xs font-semibold backdrop-blur-md transition-all group"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-amber-400 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Skewer POS</span>
            </Link>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold backdrop-blur-sm">
              <ChefHat className="w-3.5 h-3.5" />
              Restaurant Business Journal
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200">Zero-to-Hero</span> Restaurant Playbook.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-200 max-w-3xl leading-relaxed mb-8 font-light">
              Mathematical models, kitchen automation frameworks, and ruthless operational blueprints to scale from 3% margins to 20%+ profitability.
            </p>

            {/* Featured Post Teaser in Hero */}
            {featuredBlog && (
              <div className="p-4 sm:p-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-amber-400/50 transition-all max-w-3xl group">
                <Link to={`/blog/${featuredBlog.slug}`} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                      <TrendingUp className="w-3.5 h-3.5" /> Featured Masterclass
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                      {featuredBlog.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber-300 group-hover:text-amber-200 whitespace-nowrap">
                    Read Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─── ARTICLES SECTION (Pure White Background & Crisp Black Text) ─── */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Section Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-200">
          <div>
            <div className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Comprehensive Archive
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0c2b47]">
              Latest Publications & Guides
            </h2>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0c2b47] text-white shadow-md font-bold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid (White Cards with Dark Text) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <Link to={`/blog/${blog.slug}`} className="block relative overflow-hidden aspect-[16/10] bg-slate-100">
                <div className="absolute top-3.5 left-3.5 z-10 bg-white/95 backdrop-blur-md px-3 py-1 text-[11px] font-bold tracking-tight text-[#0c2b47] rounded-full shadow-sm border border-slate-200/80">
                  {blog.category}
                </div>
                <img 
                  src={blog.imageUrl} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </Link>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs font-medium text-slate-500 mb-3">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-slate-400" /> {blog.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400" /> {blog.readTime}</span>
                </div>
                
                <Link to={`/blog/${blog.slug}`} className="block mb-3">
                  <h3 className="text-xl font-bold text-[#0c2b47] tracking-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                </Link>
                
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                  {blog.excerpt}
                </p>
                
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <span className="text-xs text-slate-500 font-medium">By {blog.author}</span>
                  <Link 
                    to={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-1 font-bold text-xs text-blue-600 group-hover:text-blue-700 transition-colors uppercase tracking-wider"
                  >
                    Read Playbook <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ─── CALL TO ACTION BANNER AT BOTTOM ─── */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0c2b47] text-white text-center relative overflow-hidden shadow-xl">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl"></div>
          <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold uppercase tracking-wider mb-4">
              Built for High-Margin Restaurants
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Stop bleeding 30% to delivery apps.
            </h3>
            <p className="text-slate-300 text-base mb-8 leading-relaxed">
              Take complete control with Skewer POS — Cloud POS, Kitchen Display System (KDS), Recipe Management, and free commission-free online ordering for just $8/month.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://frontend-blush-seven-e1vr2indno.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30"
              >
                Start 100 Free Orders Now
              </a>
              <Link 
                to="/" 
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4 text-amber-400" /> Explore Skewer POS
              </Link>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default BlogPage;

