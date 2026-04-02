import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Flavors', href: '#flavors' },
    { name: 'Story', href: '#story' },
    { name: 'Experience', href: '#experience' },
    { name: 'Shop', href: '#shop' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-drp-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-drp-burgundy rounded-full flex items-center justify-center text-drp-cream font-display text-2xl tracking-wider group-hover:scale-105 transition-transform">
            DP
          </div>
          <span className="font-display text-3xl tracking-wide text-drp-cream hidden sm:block">
            Dr Pepper
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-drp-cream/80 hover:text-drp-cream font-medium text-sm uppercase tracking-widest transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-drp-red transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-drp-cream hover:text-drp-red transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <a
            href="#locator"
            className="bg-drp-burgundy hover:bg-drp-red text-drp-cream px-6 py-2.5 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(217,4,41,0.4)] hover:-translate-y-0.5"
          >
            Buy Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-drp-cream"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-drp-black border-t border-drp-burgundy/30 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display tracking-wider text-drp-cream hover:text-drp-red transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px w-full bg-drp-burgundy/30 my-2"></div>
              <a
                href="#locator"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-drp-burgundy text-center text-drp-cream px-6 py-4 rounded-full font-bold uppercase tracking-wider transition-colors"
              >
                Buy Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
