import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Trash2, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  onRemoveFromCart: (id: string) => void;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  currentView: 'home' | 'collections' | 'heritage';
  onViewChange: (view: 'home' | 'collections' | 'heritage') => void;
}

export default function Navbar({
  cart,
  onRemoveFromCart,
  cartOpen,
  setCartOpen,
  currentView,
  onViewChange,
}: NavbarProps) {
  const [checkoutStep, setCheckoutStep] = useState<'idle' | 'processing' | 'confirmed'>('idle');
  const [emailForm, setEmailForm] = useState('');

  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const startCheckout = () => {
    setCheckoutStep('processing');
    setTimeout(() => {
      setCheckoutStep('confirmed');
    }, 2000);
  };

  const resetCheckout = () => {
    setCheckoutStep('idle');
    setEmailForm('');
  };

  return (
    <>
      {/* Global Navigation Header - Spacious Multi-Tier Luxury Layout */}
      <header className="sticky top-0 left-0 right-0 z-40 bg-kv-cream border-b border-kv-border transition-all duration-300">
        
        {/* Upper Tier: Majestic Centered Brand Hallmark */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-7 pb-5 text-center flex flex-col items-center justify-center border-b border-kv-border/25">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onViewChange('home');
            }}
            className="inline-block group focus:outline-none"
          >
            <span className="font-display text-3.5xl md:text-5.5xl text-kv-gold tracking-[0.28em] font-normal uppercase transition-colors duration-500 select-none block hover:text-kv-navy">
              Kingsley & Vance
            </span>
          </a>
          <span className="text-[9px] tracking-[0.45em] uppercase text-kv-muted/75 font-sans mt-3 block select-none">
            London &bull; New York &bull; Mayfair
          </span>
        </div>

        {/* Lower Tier: Pristine Symmetrical Navigation Ribbon */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-5">
          
          {/* Left spacer on desktop to assist center symmetry */}
          <div className="hidden sm:block w-36"></div>

          {/* Centered primary navigation links with glorious spacing */}
          <nav className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
            <a
              href="#heritage"
              onClick={(e) => {
                e.preventDefault();
                onViewChange('heritage');
              }}
              className={`font-sans text-xs tracking-[0.25em] uppercase transition-colors relative group font-semibold ${
                currentView === 'heritage' ? 'text-kv-gold font-bold' : 'text-kv-charcoal hover:text-kv-gold'
              }`}
            >
              Our Heritage
              <span className={`absolute -bottom-1.5 left-0 h-[1.5px] bg-kv-gold transition-all duration-300 ${
                currentView === 'heritage' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
            <a
              href="#collections"
              onClick={(e) => {
                e.preventDefault();
                onViewChange('collections');
              }}
              className={`font-sans text-xs tracking-[0.25em] uppercase transition-colors relative group font-semibold ${
                currentView === 'collections' ? 'text-kv-gold font-bold' : 'text-kv-charcoal hover:text-kv-gold'
              }`}
            >
              Collections
              <span className={`absolute -bottom-1.5 left-0 h-[1.5px] bg-kv-gold transition-all duration-300 ${
                currentView === 'collections' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
            <a
              href="#journal"
              onClick={(e) => {
                e.preventDefault();
                onViewChange('home');
              }}
              className={`font-sans text-xs tracking-[0.25em] uppercase transition-colors relative group font-semibold ${
                currentView === 'home' ? 'text-kv-gold font-bold' : 'text-kv-charcoal hover:text-kv-gold'
              }`}
            >
              Journal
              <span className={`absolute -bottom-1.5 left-0 h-[1.5px] bg-kv-gold transition-all duration-300 ${
                currentView === 'home' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
          </nav>

          {/* Right Floating Wardrobe Bag with premium action weight */}
          <div className="flex sm:justify-end items-center w-full sm:w-36 justify-center">
            <button
              onClick={() => {
                resetCheckout();
                setCartOpen(true);
              }}
              className="relative text-kv-charcoal hover:text-kv-gold transition-colors flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-sans font-semibold focus:outline-none"
              id="cart-trigger"
              aria-label="View Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 text-kv-charcoal stroke-[1.8]" />
              <span className="font-mono tracking-widest text-[11px]">Bag</span>
              <span className="text-kv-gold">({cartItemCount})</span>
            </button>
          </div>

        </div>
      </header>

      {/* Slide-out Sidebar Shopping Bag (Premium Minimalist Drawer) */}
      <AnimatePresence>
        {cartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 bg-kv-navy/30 backdrop-blur-md z-50"
              id="cart-backdrop"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 24, stiffness: 180 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-kv-cream shadow-2xl z-50 p-6 md:p-8 flex flex-col justify-between border-l border-kv-border"
              id="cart-drawer"
            >
              {/* Header */}
              <div>
                <div className="flex justify-between items-center mb-10 pb-4 border-b border-kv-border">
                  <span className="font-display text-2xl tracking-wide font-light text-kv-charcoal uppercase">
                    Your Wardrobe Bag
                  </span>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="text-kv-muted hover:text-kv-charcoal transition-colors focus:outline-none"
                  >
                    <X className="w-5 h-5 stroke-[1.5]" />
                  </button>
                </div>

                {checkoutStep === 'idle' && (
                  <>
                    {cart.length === 0 ? (
                      <div className="text-center py-24 flex flex-col items-center justify-center">
                        <ShoppingBag className="w-10 h-10 text-kv-gold/40 mb-6 stroke-[1.1]" />
                        <p className="font-display text-lg text-kv-muted italic mb-8">The bag is currently vacant.</p>
                        <button
                          onClick={() => setCartOpen(false)}
                          className="text-xs uppercase tracking-[0.2em] font-medium text-kv-navy border-b border-kv-navy pb-1 hover:text-kv-gold hover:border-kv-gold transition-colors font-sans"
                        >
                          Browse Collections
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-6 max-h-[55vh] overflow-y-auto pr-2 custom-scrollbar">
                        {cart.map((item) => (
                          <div key={`${item.product.id}-${item.size}`} className="flex gap-4 border-b border-kv-border/50 pb-6 items-start">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-16 h-20 object-cover rounded-none bg-kv-cream-dark border border-kv-border/45"
                              referrerPolicy="no-referrer"
                            />
                            <div className="flex-grow">
                              <span className="text-[9px] uppercase font-mono tracking-widest text-kv-gold">
                                {item.product.category}
                              </span>
                              <h4 className="font-display text-base font-medium text-kv-charcoal leading-snug">
                                {item.product.name}
                              </h4>
                              <p className="text-xs text-kv-muted mt-1 font-sans">Size: {item.size} &bull; Qty: {item.quantity}</p>
                              <span className="font-sans text-xs font-semibold mt-2 block text-kv-navy">
                                ${item.product.price}
                              </span>
                            </div>
                            <button
                              onClick={() => onRemoveFromCart(item.product.id)}
                              className="text-kv-muted hover:text-red-700 transition-colors p-1 self-center"
                              title="Remove item"
                            >
                              <Trash2 className="w-4 h-4 stroke-[1.5]" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {checkoutStep === 'processing' && (
                  <div className="py-24 text-center">
                    <div className="w-12 h-12 border-2 border-kv-gold border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                    <h4 className="font-display text-xl text-kv-charcoal tracking-wide mb-2">Connecting Private Gateway</h4>
                    <p className="text-xs text-kv-muted max-w-xs mx-auto leading-relaxed">
                      Securing your bespoke order placement. Tailoring registries are being formulated in our ateliers.
                    </p>
                  </div>
                )}

                {checkoutStep === 'confirmed' && (
                  <div className="py-24 text-center">
                    <div className="w-12 h-12 bg-kv-navy text-kv-gold rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-current stroke-[2]">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h4 className="font-display text-2xl text-kv-charcoal tracking-wide mb-3">Order Requested</h4>
                    <p className="text-xs text-kv-muted max-w-xs mx-auto leading-relaxed mb-6">
                      Our brand liaison will correspond with you directly within the hour to coordinate delivery details.
                    </p>
                    <button
                      onClick={resetCheckout}
                      className="border border-kv-border text-kv-charcoal px-6 py-2.5 text-[10px] tracking-widest uppercase hover:bg-kv-cream-dark transition-colors"
                    >
                      Clear & Shop Again
                    </button>
                  </div>
                )}
              </div>

              {/* Summary and Action */}
              {cart.length > 0 && checkoutStep === 'idle' && (
                <div className="border-t border-kv-border pt-6 mt-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs uppercase tracking-[0.2em] text-kv-muted font-medium font-sans">Estimated Subtotal</span>
                    <span className="font-display text-2xl font-light text-kv-charcoal">
                      ${cartTotal}
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-[10px] uppercase font-mono tracking-widest text-kv-muted mb-2 font-bold">Liaison Contact Email</label>
                    <input
                      type="email"
                      placeholder="e.g. email@curatedluxury.com"
                      value={emailForm}
                      onChange={(e) => setEmailForm(e.target.value)}
                      className="w-full bg-kv-cream-dark border border-kv-border px-4 py-3 text-xs text-kv-charcoal focus:outline-none focus:border-kv-gold font-sans rounded-none"
                    />
                  </div>

                  <p className="text-[10px] text-kv-muted leading-relaxed mb-6 italic">
                    All prices are denoted in premium standards. Standard secure dispatch and tailored packaging are included complimentary.
                  </p>
                  <button
                    onClick={startCheckout}
                    disabled={!emailForm.trim()}
                    className="w-full bg-kv-navy disabled:bg-kv-navy/50 disabled:cursor-not-allowed text-kv-cream text-xs uppercase tracking-[0.25em] font-medium py-4 rounded-none hover:bg-kv-gold hover:text-kv-navy transition-all duration-300 flex items-center justify-center gap-2 font-sans"
                  >
                    Proceed to Checkout <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
