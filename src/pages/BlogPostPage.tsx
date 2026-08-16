import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
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
    <article className="pt-24 pb-20 min-h-screen bg-white">
      <Helmet>
        <title>{blog.title} | Skewer Restaurant POS</title>
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

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#0c2b47] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Journal
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-sm text-xs font-semibold tracking-tight uppercase mb-6">
            {blog.category}
          </div>
          <h1 className="text-4xl md:text-5xl tracking-tight text-[#0c2b47] mb-6 leading-tight">
            {blog.title}
          </h1>
          <p className="text-xl text-slate-500 mb-8 leading-relaxed">
            {blog.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" /> {blog.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {blog.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {blog.readTime}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
      >
        <img 
          src={blog.imageUrl} 
          alt={blog.title} 
          className="w-full h-[400px] md:h-[500px] object-cover rounded-sm shadow-sm border border-blue-200"
        />
      </motion.div>

      {/* Content Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg prose-slate max-w-none 
            prose-headings:text-[#0c2b47] prose-headings:tracking-tight prose-headings:font-semibold
            prose-a:text-blue-600 hover:prose-a:text-blue-700
            prose-img:rounded-sm prose-img:border prose-img:border-blue-200
            prose-strong:text-slate-900 prose-strong:font-semibold
            prose-li:marker:text-blue-500"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        
        <div className="mt-16 pt-10 border-t border-blue-200">
           <div className="bg-slate-50 border border-blue-200 rounded-sm p-8 text-center">
             <h3 className="text-2xl font-semibold text-[#0c2b47] tracking-tight mb-4">Stop bleeding 30% margins.</h3>
             <p className="text-slate-600 mb-6">Join hundreds of restaurant owners who have taken back control of their operations, eliminated third-party fees, and built massive profitability.</p>
             <button className="bg-blue-600 border border-blue-600 text-white text-sm font-semibold px-8 py-3 rounded-sm hover:bg-blue-700 transition-colors shadow-sm inline-flex items-center justify-center">
               Start 100 Free Orders Now
             </button>
           </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;
