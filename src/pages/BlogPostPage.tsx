import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, BookOpen, Sparkles } from 'lucide-react';
import { blogs } from '../data/blogs';
import { useEffect } from 'react';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find(b => b.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  // Generate Article Schema for SEO & AI ingestion
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.title,
    "image": [blog.imageUrl],
    "datePublished": new Date(blog.date).toISOString(),
    "author": [{
        "@type": "Person",
        "name": blog.author
    }],
    "description": blog.excerpt,
    "keywords": blog.seoKeywords.join(", ")
  };

  return (
    <article className="min-h-screen bg-white text-slate-900 selection:bg-blue-200 selection:text-blue-900 font-sans">
      <Helmet>
        <title>{blog.title} | Restaurant Business Journal</title>
        <meta name="description" content={blog.excerpt} />
        <meta name="keywords" content={blog.seoKeywords.join(', ')} />
        {/* Open Graph Tags */}
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:image" content={blog.imageUrl} />
        <meta property="og:type" content="article" />
        {/* Schema Markup for AI Overviews / Search */}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      {/* ─── FULL SCREEN HERO FOR EVERY BLOG POST ─── */}
      <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-end pb-16 pt-28 overflow-hidden">
        {/* Full-bleed Background Cover Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={blog.imageUrl} 
            alt={blog.title} 
            className="w-full h-full object-cover object-center transform scale-105"
          />
          {/* Deep Cinematic Gradients for Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/45"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Top Breadcrumb & Navigation */}
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

            <Link 
              to="/blog" 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-slate-200 hover:text-white text-xs font-medium backdrop-blur-sm transition-all"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>All Articles</span>
            </Link>

            <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-bold tracking-tight uppercase backdrop-blur-sm">
              {blog.category}
            </span>
          </motion.div>
          
          {/* Article Title & Lead Excerpt */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
              {blog.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed font-light max-w-4xl">
              {blog.excerpt}
            </p>
            
            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium text-slate-300 pt-6 border-t border-white/15">
              <div className="flex items-center gap-2 text-white">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-slate-950 font-bold text-xs">
                  {blog.author.charAt(0)}
                </div>
                <span>By {blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400" /> {blog.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" /> {blog.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── ARTICLE CONTENT BODY (Pure White Background & High Contrast Black Text) ─── */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          
          {/* Main Article Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg prose-slate max-w-none 
              prose-headings:text-[#0c2b47] prose-headings:tracking-tight prose-headings:font-bold
              prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-3
              prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:text-blue-600 prose-h3:mt-8
              prose-p:text-slate-800 prose-p:leading-relaxed prose-p:text-lg
              prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-a:underline
              prose-img:rounded-xl prose-img:border prose-img:border-slate-200 prose-img:shadow-lg
              prose-strong:text-slate-900 prose-strong:font-bold
              prose-ul:text-slate-800 prose-li:marker:text-blue-600"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          
          {/* ─── AUTHOR & PUBLICATION SIGN-OFF ─── */}
          <div className="mt-16 p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-slate-950 font-bold text-xl flex-shrink-0 shadow-md">
              {blog.author.charAt(0)}
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-bold text-[#0c2b47] mb-1">{blog.author}</h4>
              <p className="text-xs uppercase tracking-wider text-amber-600 font-semibold mb-2">CEO & Restaurant Operator — Skewer POS</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Writing practical, no-nonsense financial and operational guides for restaurant owners fighting to eliminate extortionate commissions and scale profitable businesses.
              </p>
            </div>
          </div>

          {/* ─── BOTTOM CTA: RETURN TO SKEWER POS ─── */}
          <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0c2b47] text-white text-center relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Skewer POS Platform
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                Put these strategies to work in your restaurant.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                Cloud POS billing, real-time Kitchen Display (KDS), Recipe Management, and free commission-free online ordering for a flat $8/month.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://frontend-blush-seven-e1vr2indno.vercel.app"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30"
                >
                  Start 100 Free Orders Now
                </a>
                <Link 
                  to="/" 
                  className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4 text-amber-400" /> Back to Skewer POS Home
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation to Other Articles */}
          <div className="mt-12 flex items-center justify-between pt-8 border-t border-slate-200">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> All Journal Articles
            </Link>
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#0c2b47] transition-colors"
            >
              <span>Skewer POS Home</span> &rarr;
            </Link>
          </div>

        </div>
      </section>
    </article>
  );
};

export default BlogPostPage;

