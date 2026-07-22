import React from 'react';
import { Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded transform -skew-x-12 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold tracking-wider text-white uppercase font-sans">
                USA Car <span className="text-primary">Detailing</span>
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Premium automotive detailing services delivering showroom perfection.
              Paint correction, ceramic coatings, and meticulous care for your pride
              and joy.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#' },
                { label: 'Services', href: '#services' },
                { label: 'Before & After', href: '#before-after' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Book Now', href: '#book' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">
              Socials
            </h4>
            <ul className="space-y-3">
              {['Instagram', 'Facebook', 'YouTube', 'TikTok'].map((social) => (
                <li key={social}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} USA Car Detailing. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
