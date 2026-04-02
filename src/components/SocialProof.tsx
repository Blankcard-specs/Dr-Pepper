import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

const posts = [
  { id: 1, img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop', likes: '12.4k', comments: '342', user: '@pepperfan99' },
  { id: 2, img: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=600&auto=format&fit=crop', likes: '8.2k', comments: '156', user: '@drp_lifestyle' },
  { id: 3, img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop', likes: '45.1k', comments: '1.2k', user: '@gamerdude' },
  { id: 4, img: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?q=80&w=600&auto=format&fit=crop', likes: '3.4k', comments: '89', user: '@sweet_treats' },
  { id: 5, img: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=600&auto=format&fit=crop', likes: '21.8k', comments: '567', user: '@weekendvibes' },
  { id: 6, img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop', likes: '9.9k', comments: '210', user: '@art_and_soda' },
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-drp-black border-t border-drp-burgundy/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-display text-5xl text-drp-cream mb-2">
              JOIN THE <span className="text-drp-red">PEPPER PACK</span>
            </h2>
            <p className="text-drp-cream/70">Tag us with #BeAPepper to be featured.</p>
          </div>
          <a href="#" className="flex items-center gap-2 text-drp-cream hover:text-drp-red transition-colors font-bold uppercase tracking-wider text-sm">
            <Instagram className="w-5 h-5" /> Follow @drpepper
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group aspect-square rounded-xl overflow-hidden cursor-pointer"
            >
              <img 
                src={post.img} 
                alt="User generated content" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-drp-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                <div className="flex gap-6 text-drp-cream font-bold">
                  <span className="flex items-center gap-2"><Heart className="w-5 h-5 fill-current" /> {post.likes}</span>
                  <span className="flex items-center gap-2"><MessageCircle className="w-5 h-5" /> {post.comments}</span>
                </div>
                <span className="text-drp-cream/80 text-sm">{post.user}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
