import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate random bubbles
  const bubbles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 20 + 5,
    left: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-drp-dark via-drp-burgundy to-drp-black pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute bottom-0 rounded-full bg-drp-cream/20 blur-[1px]"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.left}%`,
            }}
            animate={{
              y: ['100vh', '-10vh'],
              x: ['0px', `${Math.random() * 50 - 25}px`],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              delay: bubble.delay,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.8)_100%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6"
        >
          <span className="inline-block py-1 px-3 rounded-full border border-drp-cream/30 bg-drp-black/30 backdrop-blur-sm text-drp-cream/90 text-sm font-medium tracking-widest uppercase mb-6">
            The Original Blend
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="font-display text-7xl md:text-9xl lg:text-[12rem] leading-none tracking-tight text-drp-cream text-shadow-lg mb-4"
          style={{
            x: mousePosition.x * -1,
            y: mousePosition.y * -1,
          }}
        >
          THERE'S NOTHING
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-drp-cream via-red-200 to-drp-cream">
            LIKE A PEPPER
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-xl md:text-3xl text-drp-cream/80 font-medium max-w-2xl mx-auto mb-10"
        >
          23 Flavors. 1 of a Kind.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <a
            href="#flavors"
            className="bg-drp-cream text-drp-burgundy px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-[0_0_30px_rgba(253,251,247,0.3)]"
          >
            Explore the Flavor
          </a>
          <a
            href="#locator"
            className="bg-transparent border border-drp-cream text-drp-cream px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 hover:bg-drp-cream/10 hover:scale-105"
          >
            Find Near You
          </a>
        </motion.div>
      </div>

      {/* Floating Can Element (Decorative) */}
      <motion.div
        className="absolute right-[10%] top-[30%] w-64 h-96 bg-drp-red/20 blur-[100px] rounded-full pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  );
}
