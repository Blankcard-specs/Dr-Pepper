import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

const products = [
  { id: 1, name: 'Classic Logo Hoodie', price: '$45.00', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop' },
  { id: 2, name: 'Vintage Snapback', price: '$25.00', img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop' },
  { id: 3, name: '12-Pack Original', price: '$7.99', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop' },
  { id: 4, name: 'Retro Graphic Tee', price: '$30.00', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop' },
];

export default function Shop() {
  return (
    <section id="shop" className="py-24 bg-drp-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-display text-5xl text-drp-cream mb-2">
              PEPPER <span className="text-drp-red">MERCH</span>
            </h2>
            <p className="text-drp-cream/70">Wear the flavor. Drink the flavor.</p>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-2 text-drp-cream hover:text-drp-red transition-colors font-bold uppercase tracking-wider text-sm">
            View All <ShoppingBag className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] bg-drp-dark rounded-2xl overflow-hidden mb-4">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-drp-red text-drp-cream py-3 rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-drp-red transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <h3 className="text-drp-cream font-medium text-lg">{product.name}</h3>
                <span className="text-drp-cream/60">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
           <a href="#" className="inline-flex items-center gap-2 text-drp-cream hover:text-drp-red transition-colors font-bold uppercase tracking-wider text-sm border border-drp-cream/20 px-6 py-3 rounded-full">
            View All Shop
          </a>
        </div>
      </div>
    </section>
  );
}
