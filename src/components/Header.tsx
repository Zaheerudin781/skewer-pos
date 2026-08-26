import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft, UtensilsCrossed, ChefHat } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith('/blog');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const mainNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
  ];

  const blogNavLinks = [
    { name: 'All Articles', path: '/blog' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
  ];

  // Header styling: on blog pages, starts 100% transparent and becomes white glass on scroll
  const headerClass = isBlogPage
    ? isScrolled
      ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-0'
      : 'bg-transparent border-b border-white/10 py-2'
    : isScrolled
      ? 'bg-white shadow-md py-0 border-b border-slate-100'
      : 'bg-white/80 backdrop-blur-md py-2 border-b border-slate-100/50';

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${headerClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3 md:gap-4">
            {isBlogPage ? (
              <Link to="/blog" className="flex items-center gap-2.5 sm:gap-3 group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform flex-shrink-0">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className={`text-lg sm:text-xl md:text-2xl font-bold tracking-tight transition-colors ${
                    isScrolled ? 'text-[#0c2b47] group-hover:text-blue-600' : 'text-white group-hover:text-amber-300'
                  }`}>
                    Restaurant Business
                  </span>
                  <span className={`text-[10px] uppercase font-semibold tracking-wider -mt-1 hidden sm:block ${
                    isScrolled ? 'text-amber-600' : 'text-amber-400/90'
                  }`}>
                    Editorial Journal
                  </span>
                </div>
              </Link>
            ) : (
              <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
                <img src="/logo.png" alt="Skewer POS — Restaurant POS System" width="40" height="40" className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105" />
                <span className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-[#0c2b47] group-hover:text-blue-600 transition-colors">
                  Skewer POS
                </span>
              </Link>
            )}
          </div>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {isBlogPage ? (
              <>
                {blogNavLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === link.path 
                        ? isScrolled ? 'text-blue-600 font-bold' : 'text-amber-400 font-bold'
                        : isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-slate-200 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </>
            ) : (
              mainNavLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`nav-drop text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-blue-600 active' : 'text-slate-500 hover:text-blue-600'}`}
                >
                  {link.name}
                </Link>
              ))
            )}
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Back to Skewer POS Navigation Button */}
            {isBlogPage && (
              <Link
                to="/"
                className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-full transition-all shadow-sm group ${
                  isScrolled
                    ? 'bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700'
                    : 'bg-white/10 hover:bg-white/20 border border-white/25 text-white backdrop-blur-sm'
                }`}
              >
                <ArrowLeft className={`w-4 h-4 group-hover:-translate-x-0.5 transition-transform ${isScrolled ? 'text-blue-600' : 'text-amber-300'}`} />
                <span className="hidden xs:inline font-normal">Back to</span>
                <span className="font-bold">Skewer POS</span>
              </Link>
            )}

            {/* Standard actions on non-blog pages */}
            {!isBlogPage && (
              <>
                <a 
                  href="https://wa.me/923466617785" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hidden lg:flex items-center justify-center gap-2 text-sm font-medium text-[#1a9e4a] bg-transparent border border-[#1a9e4a] px-5 py-2 rounded-sm btn-hollow btn-hollow-green"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
                <a 
                  href="https://frontend-blush-seven-e1vr2indno.vercel.app"
                  target="_blank" rel="noopener noreferrer"
                  className="hidden md:inline-flex text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors px-3 py-2"
                >
                  Log In
                </a>
              </>
            )}

            {/* Main Action CTA - Visible and Identical on Mobile & Desktop */}
            <a 
              href="https://frontend-blush-seven-e1vr2indno.vercel.app"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center text-xs sm:text-sm font-semibold px-3 sm:px-5 py-2 rounded-md transition-all cursor-pointer shadow-md bg-blue-600 hover:bg-blue-700 text-white border border-blue-600 hover:border-blue-700 active:scale-95"
            >
              Get Started
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className={`md:hidden p-2 focus:outline-none ${
                isBlogPage 
                  ? isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-amber-300'
                  : 'text-slate-600 hover:text-[#0c2b47]'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden shadow-2xl absolute top-full left-0 w-full py-5 px-5 flex flex-col gap-4 border-b bg-white/98 backdrop-blur-xl border-slate-200 text-slate-900">
          {isBlogPage && (
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 font-semibold text-sm mb-1"
            >
              <span className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4 text-blue-600" /> Back to Skewer POS
              </span>
              <ChefHat className="w-4 h-4 text-amber-500" />
            </Link>
          )}

          <nav className="flex flex-col gap-2">
            {(isBlogPage ? blogNavLinks : mainNavLinks).map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium py-2 px-1 rounded-md transition-colors ${
                  location.pathname === link.path 
                    ? 'text-blue-600 font-bold bg-blue-50/50' 
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="h-px my-1 bg-slate-100"></div>
          
          <a 
            href="https://wa.me/923466617785" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm font-semibold text-[#1a9e4a] bg-emerald-50/60 border border-[#1a9e4a]/40 px-6 py-2.5 rounded-md"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z"/>
            </svg>
            Helpline Support
          </a>
          <div className="flex gap-2 w-full mt-1">
            <a 
              href="https://frontend-blush-seven-e1vr2indno.vercel.app"
              target="_blank" rel="noopener noreferrer"
              className="w-1/2 flex items-center justify-center text-sm font-semibold px-4 py-2.5 rounded-md transition-colors border border-slate-300 text-slate-700 bg-slate-50"
            >
              Log In
            </a>
            <a 
              href="https://frontend-blush-seven-e1vr2indno.vercel.app"
              target="_blank" rel="noopener noreferrer"
              className="w-1/2 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-md transition-all shadow-md active:scale-95"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
