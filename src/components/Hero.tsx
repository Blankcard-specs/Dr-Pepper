import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onViewChange?: (view: 'home' | 'collections' | 'heritage') => void;
}

export default function Hero({ onViewChange }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-start overflow-hidden bg-kv-cream-dark">
      {/* Background Image with Cinematic Editorial Grade Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/kingsley_heritage_hero_1780344282640.png"
          alt="Kingsley & Vance Autumn Editorial"
          className="w-full h-full object-cover object-[center_35%] scale-100"
          referrerPolicy="no-referrer"
        />
        {/* Soft dark vignette sweep in bottom and left for supreme legibility of serif typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-kv-charcoal/40 via-transparent to-transparent"></div>
        <div className="absolute inset-x-0 left-0 w-full sm:w-[65%] h-full bg-gradient-to-r from-kv-charcoal/45 via-kv-charcoal/20 to-transparent"></div>
      </div>

      {/* Hero Interactive Elements Canvas */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-24 flex flex-col items-start justify-center">
        
        {/* Elite Subtle Category Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.35em] font-medium text-kv-cream uppercase font-sans">
            Autumn / Winter Capsule
          </span>
        </motion.div>

        {/* Headline matching user's mockup */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-kv-cream font-light tracking-tight leading-[1.05] max-w-3xl text-left select-none uppercase"
        >
          Timeless Elegance,
          <br />
          <span className="italic">Refined For Now.</span>
        </motion.h1>

        {/* Minimal description for narrative flow */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-sm text-kv-cream-dark/95 max-w-md font-sans font-light tracking-wide leading-relaxed text-left block"
        >
          Curating the posture of high society. Designed with meticulous full-canvas structural integrity, Loro Piana fabrics, and a shared legacy from London to New York.
        </motion.p>

        {/* Discreet Shop the Look CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <button
            onClick={() => onViewChange?.('collections')}
            className="bg-kv-cream hover:bg-kv-navy hover:text-kv-cream text-kv-charcoal px-10 py-4 text-xs font-semibold tracking-[0.25em] uppercase rounded-none transition-all duration-500 border border-kv-cream hover:border-kv-navy inline-block shadow-md focus:outline-none"
          >
            Shop The Look
          </button>
        </motion.div>
      </div>

      {/* Discrete bottom scroll icon */}
      <div className="absolute bottom-8 right-12 hidden lg:flex flex-col items-center gap-2 text-kv-cream/65">
        <span className="text-[8px] tracking-[0.3em] uppercase font-mono">Scroll to view</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce stroke-[1.5]" />
      </div>
    </section>
  );
}
