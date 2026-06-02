import { motion } from 'motion/react';
import { BookOpen, ArrowUpRight } from 'lucide-react';

const articles = [
  {
    category: "LIVING WELL",
    title: "An Afternoon in Mayfair: The Posture of Autumn Layering",
    date: "Autumn Issue 2026",
    excerpt: "Exploring the quiet alleyways of London's legacy tailoring district, styled inside the unstructured worsted cashmere cable knit.",
    img: "/src/assets/images/kingsley_journal_mayfair_1780344601061.png"
  },
  {
    category: "TEXTILE CARE",
    title: "Preserving Noble Fibers: A Masterclass in Cashmere Care",
    date: "Fibre Standard No. 12",
    excerpt: "The heritage guidelines of washing, restoring, and storing long-staple Mongolian cashmere so that its natural resilience endures indefinitely.",
    img: "https://images.unsplash.com/photo-1548624149-f9b1859aa730?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Journal() {
  return (
    <section id="journal" className="py-32 bg-kv-cream relative border-t border-kv-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.4em] font-medium text-kv-gold block mb-4 font-sans">
              House Quarterly
            </span>
            <h2 className="font-display text-4xl md:text-5.5xl text-kv-charcoal font-light leading-tight uppercase tracking-tight">
              The Kingsley <span className="italic font-normal">Journal</span>
            </h2>
          </div>
          <p className="text-sm text-kv-muted max-w-sm font-sans font-light leading-relaxed">
            A meticulous collection of original chronicles capturing design theories, textile narratives, and high-end living.
          </p>
        </div>

        {/* Dynamic Article Grid (Oversized, spacious layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {articles.map((art, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="flex flex-col group cursor-pointer"
            >
              {/* Media Block */}
              <div className="relative aspect-[16/10] bg-kv-cream-dark border border-kv-border overflow-hidden mb-8">
                <img
                  src={art.img}
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual shade sweep */}
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-kv-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Information */}
              <div className="flex flex-col flex-1 pl-1">
                <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-kv-gold uppercase font-bold mb-4">
                  <span>{art.category}</span>
                  <span className="text-kv-muted/50">{art.date}</span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl text-kv-charcoal font-light uppercase tracking-wide leading-tight group-hover:text-kv-gold transition-colors duration-400">
                  {art.title}
                </h3>

                <p className="text-sm text-kv-muted font-sans font-light leading-relaxed mt-4 mb-6">
                  {art.excerpt}
                </p>

                {/* Understated link */}
                <div className="mt-auto flex items-center gap-1 text-[10px] font-sans font-semibold tracking-[0.25em] uppercase text-kv-navy border-b border-kv-navy/0 self-start group-hover:border-kv-gold group-hover:text-kv-gold transition-all duration-300 pb-0.5">
                  View Chronicle <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}
