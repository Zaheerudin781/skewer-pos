import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

const BlogPage = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <Helmet>
        <title>Restaurant POS & Operations Blog | Skewer Restaurant POS</title>
        <meta name="description" content="World-class strategies for restaurant owners. Learn how to optimize profit margins, eliminate third-party fees, and automate your kitchen from zero to hero." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl tracking-tight text-[#0c2b47] mb-6">
              The <span className="text-blue-600">Zero to Hero</span> Restaurant Journal.
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl">
              Ruthless mathematical strategies, operations playbooks, and modern technology blueprints for restaurants that want to dominate their market.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-sm border border-blue-200 overflow-hidden hover:shadow-md transition-shadow group flex flex-col"
            >
              <Link to={`/blog/${blog.slug}`} className="block relative overflow-hidden h-60">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold tracking-tight text-[#0c2b47] rounded-sm">
                  {blog.category}
                </div>
                <img 
                  src={blog.imageUrl} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </Link>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                  <span>{blog.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span>{blog.readTime}</span>
                </div>
                
                <Link to={`/blog/${blog.slug}`} className="block mb-4">
                  <h2 className="text-2xl font-semibold text-[#0c2b47] tracking-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                </Link>
                
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                  {blog.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${blog.slug}`}
                  className="inline-flex items-center font-semibold text-sm text-blue-600 hover:text-blue-700 transition-colors mt-auto"
                >
                  Read the Playbook &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
