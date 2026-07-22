import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-border py-4 shadow-lg'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded transform -skew-x-12 flex items-center justify-center group-hover:bg-blue-400 transition-colors">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold tracking-wider text-white uppercase font-sans">
            USA Car <span className="text-primary">Detailing</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Services', href: '#services' },
            { label: 'Before & After', href: '#before-after' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors uppercase tracking-widest"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#book"
          className="bg-primary text-white px-6 py-2.5 rounded text-sm font-bold uppercase tracking-wider hover:bg-blue-600 transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
        >
          Book Now
        </a>
      </div>
    </motion.nav>
  );
}
