import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const flavors = [
  {
    id: 'original',
    name: 'Dr Pepper Original',
    color: 'from-[#5C0A0A] to-[#2A0404]',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop', // Placeholder for actual can
    notes: 'The classic 23 flavor blend. Sweet, spicy, and entirely unique.',
    tag: 'The Classic',
  },
  {
    id: 'zero',
    name: 'Zero Sugar',
    color: 'from-[#1A1A1A] to-[#000000]',
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=800&auto=format&fit=crop',
    notes: 'All 23 flavors. Zero sugar. The sweet treat you deserve.',
    tag: 'Guilt Free',
  },
  {
    id: 'cherry',
    name: 'Cherry',
    color: 'from-[#D90429] to-[#8B0000]',
    image: 'https://images.unsplash.com/photo-1527004013197-933c4bcc61f4?q=80&w=800&auto=format&fit=crop',
    notes: 'A kiss of cherry makes the 23 flavors pop even more.',
    tag: 'Fruity Twist',
  },
  {
    id: 'cream',
    name: 'Cream Soda',
    color: 'from-[#D4A373] to-[#A0522D]',
    image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?q=80&w=800&auto=format&fit=crop',
    notes: 'Smooth, rich vanilla cream meets the classic blend.',
    tag: 'Smooth',
  },
];

export default function Flavors() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="flavors" className="py-32 bg-drp-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl text-drp-cream mb-4"
          >
            CHOOSE YOUR <span className="text-drp-red">PEPPER</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-drp-cream/70 text-lg max-w-2xl mx-auto"
          >
            From the original 23 flavors to bold new twists. Find the one that speaks to your tastebuds.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {flavors.map((flavor, index) => (
            <motion.div
              key={flavor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(flavor.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="relative group cursor-pointer h-[500px] rounded-3xl overflow-hidden"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${flavor.color} opacity-80 transition-opacity duration-500 group-hover:opacity-100`}
              />
              
              {/* Image (Placeholder for can) */}
              <div className="absolute inset-0 flex items-center justify-center p-8 transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-4">
                <img
                  src={flavor.image}
                  alt={flavor.name}
                  className="w-full h-full object-cover rounded-2xl opacity-50 mix-blend-overlay"
                  referrerPolicy="no-referrer"
                />
                {/* Simulated Can Shape for visual effect since we don't have real transparent can PNGs */}
                <div className="absolute w-32 h-64 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-2xl flex items-center justify-center">
                   <span className="font-display text-3xl text-white rotate-[-90deg] whitespace-nowrap tracking-widest">{flavor.name}</span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="self-end">
                  <span className="bg-drp-black/50 backdrop-blur-md text-drp-cream text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {flavor.tag}
                  </span>
                </div>
                
                <div className="transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
                  <h3 className="font-display text-4xl text-drp-cream mb-2">{flavor.name}</h3>
                  <p className="text-drp-cream/80 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {flavor.notes}
                  </p>
                  <button className="flex items-center gap-2 text-drp-cream font-bold uppercase tracking-wider text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 hover:text-drp-red">
                    Discover <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
