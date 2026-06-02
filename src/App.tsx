import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Heritage from './components/Heritage';
import Journal from './components/Journal';
import Footer from './components/Footer';
import { Product, CartItem } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [view, setView] = useState<'home' | 'collections' | 'heritage'>('home');

  const handleAddToCart = (product: Product, quantity: number = 1, size: string = 'M') => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prevCart, { product, quantity, size }];
    });
    setCartOpen(true); // Open drawers directly for elite user feedback
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const handleViewChange = (newView: 'home' | 'collections' | 'heritage') => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-kv-cream selection:bg-kv-navy selection:text-kv-cream selection:bg-opacity-95">
      {/* Absolute top quiet premium dispatch ticker */}
      <div className="bg-kv-navy text-kv-cream text-[9px] font-sans font-medium tracking-[0.35em] uppercase py-2.5 text-center border-b border-kv-border/10 select-none">
        Complimentary Bespoke Dispatch & Tailored Packaging Worldwide
      </div>
      
      {/* Pristine Luxury Header and Drawer */}
      <Navbar
        cart={cart}
        onRemoveFromCart={handleRemoveFromCart}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        currentView={view}
        onViewChange={handleViewChange}
      />
      
      {/* Gallery exhibition canvas */}
      <main>
        {view === 'home' && (
          <>
            <Hero onViewChange={handleViewChange} />
            <Journal />
          </>
        )}
        {view === 'collections' && (
          <Collection onAddToCart={handleAddToCart} />
        )}
        {view === 'heritage' && (
          <Heritage />
        )}
      </main>
      
      {/* Simple quiet footer links */}
      <Footer onViewChange={handleViewChange} />
    </div>
  );
}
