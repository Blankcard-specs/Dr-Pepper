import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="story" ref={containerRef} className="py-32 bg-drp-burgundy relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div style={{ opacity }} className="order-2 lg:order-1">
            <h2 className="font-display text-5xl md:text-7xl text-drp-cream mb-6 leading-none">
              THE MYSTERY OF <br/>
              <span className="text-drp-black">23 FLAVORS</span>
            </h2>
            <div className="space-y-6 text-drp-cream/90 text-lg">
              <p>
                Created in 1885 in Waco, Texas, Dr Pepper is the oldest major soft drink in the United States. But age isn't what makes it special.
              </p>
              <p>
                It's the recipe. A closely guarded secret blending 23 distinct flavors to create a taste that defies categorization. It's not a cola. It's not a root beer. It's not fruit-flavored.
              </p>
              <p className="font-bold text-xl text-drp-black">
                It's just Dr Pepper.
              </p>
            </div>
            
            <div className="mt-10">
              <a href="#" className="inline-flex items-center gap-2 border-b-2 border-drp-black text-drp-black font-bold uppercase tracking-widest pb-1 hover:text-drp-cream hover:border-drp-cream transition-colors">
                Read the Full History
              </a>
            </div>
          </motion.div>

          {/* Visuals */}
          <div className="order-1 lg:order-2 relative h-[600px] w-full flex items-center justify-center">
            <motion.div 
              style={{ y: y1 }}
              className="absolute left-0 top-10 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-drp-black/20 z-20"
            >
              <img 
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&auto=format&fit=crop" 
                alt="Vintage soda fountain" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div 
              style={{ y: y2 }}
              className="absolute right-0 bottom-10 w-72 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-drp-cream/20 z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop" 
                alt="Modern Dr Pepper" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Center decorative element */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
              <div className="w-40 h-40 bg-drp-red rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(217,4,41,0.5)]">
                <span className="font-display text-6xl text-drp-cream">1885</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
