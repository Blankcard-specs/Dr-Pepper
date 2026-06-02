import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Check, Globe, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { products } from '../data';

interface CollectionProps {
  onAddToCart: (product: Product, quantity?: number, size?: string) => void;
  onViewProduct?: (product: Product) => void;
}

export default function Collection({ onAddToCart }: CollectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Outerwear');
  const [pdpProduct, setPdpProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  const categories = ['Outerwear', 'Knitwear', 'Shirting', 'Tailoring', 'Accessories'];

  // Filter products by active category
  const filteredProducts = products.filter(p => p.category === selectedCategory);

  const handlePdpAddToCart = (product: Product) => {
    onAddToCart(product, 1, selectedSize);
    setFeedbackMsg(`Successfully added to your bag (${selectedSize}).`);
    setTimeout(() => setFeedbackMsg(null), 3500);
  };

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, 1, 'M');
    
    // Smooth inline confirmation feedback
    const originalText = e.currentTarget.innerHTML;
    e.currentTarget.innerHTML = 'ADDED TO BAG';
    e.currentTarget.classList.add('bg-kv-gold', 'text-kv-navy');
    
    setTimeout(() => {
      if (e.currentTarget) {
        e.currentTarget.innerHTML = originalText;
        e.currentTarget.classList.remove('bg-kv-gold', 'text-kv-navy');
      }
    }, 2000);
  };

  return (
    <section id="collections" className="py-24 bg-kv-cream relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Category Navigation - Centered text links with wide spacing */}
        <div className="flex justify-center border-b border-kv-border pb-4 mb-16">
          <div className="flex justify-center flex-wrap gap-8 md:gap-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-2 text-[12px] uppercase tracking-[0.25em] font-sans font-medium transition-all duration-300 relative focus:outline-none ${
                  selectedCategory === cat ? 'text-kv-navy font-bold scale-105' : 'text-kv-muted hover:text-kv-charcoal'
                }`}
              >
                {cat}
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="activeCategoryBorder"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-kv-navy"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Spacious 2-Column Luxury Gallery Grid - Promotes Extensive Whitespace & Oversized Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-12">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer flex flex-col justify-between pb-8 border-b border-kv-border/45"
              onClick={() => setPdpProduct(product)}
            >
              <div>
                {/* Large Product Cover Block */}
                <div className="relative aspect-[3/4] bg-kv-cream-dark overflow-hidden border border-kv-border mb-8">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.16, 1, 0.3, 1] group-hover:scale-[1.04]"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Secondary Details Hover Effect */}
                  {product.hoverImage && (
                    <img
                      src={product.hoverImage}
                      alt={`${product.name} detail view`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-[1.5s] ease-[0.16, 1, 0.3, 1] group-hover:scale-[1.04]"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Category overlay */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-kv-cream/95 border border-kv-border text-kv-charcoal text-[9px] font-mono tracking-[0.3em] uppercase px-4 py-1.5 font-bold select-none shadow-sm">
                      {product.category}
                    </span>
                  </div>

                  {/* Quick-add overlay helper at bottom center */}
                  <div className="absolute bottom-6 left-6 right-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-kv-cream/95 backdrop-blur-sm border border-kv-border p-3 text-center text-[10px] font-sans tracking-[0.2em] uppercase text-kv-gold font-bold select-none">
                      Inspect & Coordinate Fitting
                    </div>
                  </div>
                </div>

                {/* Highly Spaced Information Plate */}
                <div className="text-left px-2">
                  <div className="flex justify-between items-baseline mb-3 gap-4">
                    <h3 className="font-display text-3xl md:text-3.5xl text-kv-charcoal font-light uppercase tracking-wide group-hover:text-kv-gold transition-colors duration-400">
                      {product.name}
                    </h3>
                    <span className="font-sans text-base font-semibold text-kv-navy tracking-wider select-none">
                      ${product.price}
                    </span>
                  </div>
                  
                  <p className="text-xs text-kv-muted font-sans font-light leading-relaxed mb-4 max-w-xl">
                    {product.description}
                  </p>

                  <div className="flex gap-4 text-[10px] font-mono tracking-widest uppercase text-kv-gold font-bold mb-6">
                    <span>{product.materials}</span>
                    <span>&bull;</span>
                    <span>{product.origin}</span>
                  </div>
                </div>
              </div>

              {/* Add to Wardrobe Button */}
              <div className="mt-4 px-2">
                <button
                  onClick={(e) => handleQuickAdd(product, e)}
                  className="w-full bg-kv-navy hover:bg-kv-gold hover:text-kv-navy text-kv-cream text-xs uppercase font-sans tracking-[0.25em] font-semibold py-4.5 transition-all duration-400 ease-in-out border border-kv-navy hover:border-kv-gold shadow-sm"
                >
                  Add To Bag
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* --- PRESTIGE CABINET: PRODUCT DETAIL PAGE (PDP) MODAL OVERLAY --- */}
      <AnimatePresence>
        {pdpProduct && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPdpProduct(null)}
              className="fixed inset-0 bg-kv-navy/35 backdrop-blur-md z-50"
              id="pdp-backdrop"
            />
            {/* Detail Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 25 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-6 md:inset-x-12 lg:inset-x-24 md:inset-y-12 bg-kv-cream rounded-none border border-kv-border shadow-2xl z-50 overflow-y-auto"
              id="pdp-modal"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
                
                {/* Left Side: Dynamic Luxury Showcase Gallery */}
                <div className="lg:col-span-7 bg-kv-cream-dark p-6 lg:p-12 border-b lg:border-r lg:border-b-0 border-kv-border flex flex-col justify-between relative min-h-[420px]">
                  {/* Close button for mobile inside media cover, hidden on desktop */}
                  <button
                    onClick={() => setPdpProduct(null)}
                    className="absolute top-4 right-4 text-kv-charcoal bg-kv-cream border border-kv-border p-2 rounded-full lg:hidden z-10 hover:bg-red-50 hover:text-red-700 transition"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center my-auto">
                    {/* Frame 1 */}
                    <div className="aspect-[3/4] border border-kv-border bg-kv-cream overflow-hidden">
                      <img
                        src={pdpProduct.image}
                        alt="Kingsley details photo"
                        className="w-full h-full object-cover hover:scale-105 transition duration-1000"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Frame 2 - Flat Lay */}
                    <div className="aspect-[3/4] border border-kv-border bg-kv-cream overflow-hidden hidden sm:block">
                      <img
                        src={pdpProduct.hoverImage || pdpProduct.image}
                        alt="Detailed flat lay visual"
                        className="w-full h-full object-cover hover:scale-105 transition duration-1000"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Sourcing credentials footer snippet */}
                  <div className="flex gap-4 items-center mt-6 text-[10px] text-kv-muted border-t border-kv-border/40 pt-4 font-sans tracking-widest uppercase">
                    <span className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-kv-gold" /> {pdpProduct.origin}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-kv-gold" /> Limited Atelier Series
                    </span>
                  </div>
                </div>

                {/* Right Side: Informational specifications panel */}
                <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between h-full bg-kv-cream relative">
                  {/* Desktop close trigger */}
                  <button
                    onClick={() => setPdpProduct(null)}
                    className="absolute top-8 right-8 text-kv-muted hover:text-kv-charcoal transition-colors hidden lg:block focus:outline-none"
                    aria-label="Close Product Gallery"
                  >
                    <X className="w-6 h-6 stroke-[1.5]" />
                  </button>

                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-kv-gold block mb-2 font-bold select-none">
                      KINGSLEY & VANCE &bull; ATELIER ARCHIVE
                    </span>
                    <h3 className="font-display text-3xl md:text-4.5xl text-kv-charcoal font-light leading-tight mb-4 uppercase tracking-wide">
                      {pdpProduct.name}
                    </h3>

                    {/* Highly legible minimal luxury price */}
                    <div className="font-sans text-lg font-semibold mb-6 text-kv-navy tracking-wider">
                      ${pdpProduct.price}
                    </div>

                    <div className="h-px bg-kv-border my-6"></div>

                    {/* Narrative Description of product story */}
                    <div className="mb-6">
                      <h4 className="text-[10px] uppercase font-mono tracking-widest text-kv-muted mb-2 font-bold select-none">Atelier Narrative</h4>
                      <p className="text-sm text-kv-charcoal leading-relaxed font-sans font-light">
                        {pdpProduct.description}
                      </p>
                    </div>

                    {/* Specifications list */}
                    <div className="mb-6">
                      <h4 className="text-[10px] uppercase font-mono tracking-widest text-kv-muted mb-3 font-bold select-none">Specifications & Tailoring</h4>
                      <ul className="space-y-2">
                        {pdpProduct.details.map((item, i) => (
                          <li key={i} className="text-xs text-kv-muted flex items-start gap-2 font-sans leading-relaxed">
                            <span className="text-kv-gold font-bold mt-1 select-none">&bull;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Material & Origin specifications block */}
                    <div className="bg-kv-cream-dark p-4 border border-kv-border rounded-none mb-8">
                      <p className="text-xs text-kv-charcoal"><strong className="font-semibold text-[10px] font-sans tracking-wide uppercase text-kv-muted block mb-1">Textiles</strong> {pdpProduct.materials}</p>
                      <p className="text-xs text-kv-charcoal mt-3"><strong className="font-semibold text-[10px] font-sans tracking-wide uppercase text-kv-muted block mb-1">Attribution</strong> {pdpProduct.origin}</p>
                    </div>

                    {/* Sizing Interactive Selection - Pure functional size block */}
                    <div className="mb-8">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] font-sans tracking-widest text-kv-muted font-bold uppercase select-none">Select Size</span>
                        <span className="text-[10px] font-sans tracking-widest text-kv-gold uppercase border-b border-kv-gold/30 pb-0.5 pointer-events-none select-none">Bespoke Fitting Standard</span>
                      </div>
                      <div className="flex gap-2">
                        {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`w-12 h-12 rounded-none text-xs font-mono border transition-all duration-300 focus:outline-none ${
                              selectedSize === size
                                ? 'border-kv-navy bg-kv-navy text-kv-cream font-bold'
                                : 'border-kv-border bg-transparent text-kv-muted hover:border-kv-gold hover:text-kv-charcoal'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Add to bag container */}
                  <div>
                    {feedbackMsg && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-50 border border-green-200 text-green-800 text-xs p-3 mb-4 rounded-none flex items-center gap-2 font-medium"
                      >
                        <Check className="w-4 h-4 text-green-600" /> {feedbackMsg}
                      </motion.div>
                    )}
                    <button
                      onClick={() => handlePdpAddToCart(pdpProduct)}
                      className="w-full bg-kv-navy hover:bg-kv-gold hover:text-kv-navy text-kv-cream text-xs uppercase tracking-[0.25em] font-semibold py-4 rounded-none transition-all duration-300 flex items-center justify-center gap-2 font-sans shadow-md"
                    >
                      <ShoppingBag className="w-4 h-4 stroke-[1.8]" /> Add to Bag &bull; ${pdpProduct.price}
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
