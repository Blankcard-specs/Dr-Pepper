import { motion } from 'motion/react';

export default function Heritage() {
  return (
    <section id="heritage" className="py-32 bg-kv-cream border-t border-kv-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Layout: Title Area with massive spacing */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.4em] font-medium text-kv-gold block mb-4 font-sans">
            Our Legacy
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-kv-charcoal font-light leading-tight uppercase tracking-tight">
            The Shape of <span className="italic font-normal">Quiet Distinction</span>
          </h2>
          <div className="w-16 h-[1px] bg-kv-gold/40 mx-auto mt-8"></div>
        </div>

        {/* Side-by-Side Double Column Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Block: Craft Narrative */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-kv-gold block mb-3 font-semibold">
              01 &bull; SAVILE ROW CONSTRUCTION
            </span>
            <h3 className="font-display text-3xl md:text-4.5xl text-kv-charcoal font-light uppercase tracking-wide leading-tight mb-8">
              True Full-Canvas <br />Integrity
            </h3>
            
            <p className="text-sm text-kv-charcoal font-sans font-light leading-relaxed mb-6">
              At Kingsley & Vance, we do not believe in superficial layers. Our tailoring is underpinned by an authentic, floating full-canvas structure. Hours of delicate hand-rolling shape each chest panel, ensuring a jacket that breathes, drapes natural symmetry, and molds seamlessly to your personal posture over a lifetime of use.
            </p>

            <p className="text-sm text-kv-muted font-sans font-light leading-relaxed mb-8">
              We source single-origin extra-long staple threads, selecting only bespoke weavers such as Loro Piana to spin our worsted wools, cashmere fleeces, and heavyweight English cotton twills.
            </p>

            {/* Aesthetic Quote Block */}
            <div className="border-l-2 border-kv-gold/50 pl-6 my-4 italic text-sm text-kv-charcoal/80 font-display">
              "A Kingsley & Vance garment is not built to attract a passing glance. It is commissioned to sustain a permanent presence of dignity."
            </div>
          </div>

          {/* Right Block: Spectacular Cinematic Image Display */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative aspect-[4/5] bg-kv-cream-dark border border-kv-border p-3 shadow-md"
            >
              {/* Symmetrical framing markers for the gallery look */}
              <div className="absolute top-6 left-6 w-5 h-5 border-t border-l border-kv-gold/40"></div>
              <div className="absolute top-6 right-6 w-5 h-5 border-t border-r border-kv-gold/40"></div>
              <div className="absolute bottom-6 left-6 w-5 h-5 border-b border-l border-kv-gold/40"></div>
              <div className="absolute bottom-6 right-6 w-5 h-5 border-b border-r border-kv-gold/40"></div>

              <div className="w-full h-full overflow-hidden">
                <img
                  src="/src/assets/images/kingsley_heritage_detail_1780344581797.png"
                  alt="Tailor hands working on a half-finished suit jacket roll"
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-[1.5s] ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
