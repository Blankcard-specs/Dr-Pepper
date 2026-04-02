import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-drp-black border-t border-drp-burgundy/50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="w-12 h-12 bg-drp-burgundy rounded-full flex items-center justify-center text-drp-cream font-display text-3xl tracking-wider mb-6">
              DP
            </div>
            <p className="text-drp-cream/60 text-sm mb-6 max-w-xs">
              23 Flavors. 1 of a Kind. The oldest major soft drink in the United States, bringing unique refreshment since 1885.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-drp-dark flex items-center justify-center text-drp-cream hover:bg-drp-red transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-drp-dark flex items-center justify-center text-drp-cream hover:bg-drp-red transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-drp-dark flex items-center justify-center text-drp-cream hover:bg-drp-red transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-drp-dark flex items-center justify-center text-drp-cream hover:bg-drp-red transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-drp-cream font-bold uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4 text-drp-cream/60 text-sm">
              <li><a href="#flavors" className="hover:text-drp-red transition-colors">Flavors</a></li>
              <li><a href="#story" className="hover:text-drp-red transition-colors">Our Story</a></li>
              <li><a href="#shop" className="hover:text-drp-red transition-colors">Merch Shop</a></li>
              <li><a href="#locator" className="hover:text-drp-red transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:text-drp-red transition-colors">Pepper Perks</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-drp-cream font-bold uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 text-drp-cream/60 text-sm">
              <li><a href="#" className="hover:text-drp-red transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-drp-red transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-drp-red transition-colors">Do Not Sell My Info</a></li>
              <li><a href="#" className="hover:text-drp-red transition-colors">Accessibility</a></li>
              <li><a href="#" className="hover:text-drp-red transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-drp-cream font-bold uppercase tracking-widest mb-6">Join the Pack</h4>
            <p className="text-drp-cream/60 text-sm mb-4">
              Sign up for exclusive drops, new flavors, and Pepper Perks.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-drp-dark border border-drp-cream/10 rounded-lg px-4 py-3 text-drp-cream text-sm focus:outline-none focus:border-drp-red transition-colors"
              />
              <button 
                type="submit"
                className="bg-drp-cream text-drp-black font-bold uppercase tracking-wider text-sm py-3 rounded-lg hover:bg-drp-red hover:text-drp-cream transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-drp-burgundy/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-drp-cream/40 text-xs">
            © {new Date().getFullYear()} Dr Pepper/Seven Up, Inc. All Rights Reserved.
          </p>
          <p className="text-drp-cream/40 text-xs">
            This is a conceptual redesign for demonstration purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
