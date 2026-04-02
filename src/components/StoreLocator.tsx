import { motion } from 'motion/react';
import { MapPin, Search } from 'lucide-react';

export default function StoreLocator() {
  return (
    <section id="locator" className="py-32 bg-gradient-to-b from-drp-black to-drp-dark relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-drp-burgundy/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <MapPin className="w-16 h-16 text-drp-red mx-auto mb-6" />
          <h2 className="font-display text-5xl md:text-7xl text-drp-cream mb-6">
            FIND YOUR <span className="text-drp-red">FLAVOR</span>
          </h2>
          <p className="text-drp-cream/80 text-lg mb-12 max-w-2xl mx-auto">
            Craving the 23 flavors? Enter your zip code or city to find Dr Pepper near you.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-drp-cream/50" />
              </div>
              <input
                type="text"
                placeholder="Enter Zip Code or City"
                className="w-full bg-drp-black/50 border border-drp-cream/20 rounded-full py-4 pl-12 pr-4 text-drp-cream placeholder-drp-cream/50 focus:outline-none focus:border-drp-red focus:ring-1 focus:ring-drp-red transition-colors"
              />
            </div>
            <button
              type="submit"
              className="bg-drp-red text-drp-cream px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-drp-red transition-all duration-300 shrink-0 shadow-[0_0_20px_rgba(217,4,41,0.3)] hover:shadow-[0_0_30px_rgba(253,251,247,0.5)]"
            >
              Search
            </button>
          </form>

          <div className="mt-8 flex items-center justify-center gap-2 text-drp-cream/60 text-sm">
            <button className="hover:text-drp-cream underline decoration-drp-cream/30 underline-offset-4 transition-colors">
              Use my current location
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
