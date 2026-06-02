interface FooterProps {
  onViewChange?: (view: 'home' | 'collections' | 'heritage') => void;
}

export default function Footer({ onViewChange }: FooterProps) {
  return (
    <footer className="bg-kv-cream border-t border-kv-border py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center gap-6">
        
        {/* Simple premium centered links block */}
        <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-14 text-[10px] md:text-xs font-sans font-medium tracking-[0.3em] uppercase text-kv-charcoal/80">
          <a
            href="#heritage"
            onClick={(e) => {
              if (onViewChange) {
                e.preventDefault();
                onViewChange('heritage');
              }
            }}
            className="hover:text-kv-gold transition-colors select-none"
          >
            Our Heritage
          </a>
          <a
            href="#"
            onClick={(e) => {
              if (onViewChange) {
                e.preventDefault();
                onViewChange('collections');
              }
            }}
            className="hover:text-kv-gold transition-colors select-none"
          >
            Browse Collections
          </a>
          <a href="#" className="hover:text-kv-gold transition-colors select-none">
            Contact
          </a>
        </div>

        {/* Minimal legal subscript */}
        <p className="text-[9px] font-sans tracking-[0.15em] text-kv-muted/60 mt-2 select-none">
          &copy; {new Date().getFullYear()} KINGSLEY & VANCE. ALL RIGHTS RESERVED.
        </p>

      </div>
    </footer>
  );
}
