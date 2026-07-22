import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Shield, Sparkles, Car, Brush, Settings } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Exterior Wash',
    description:
      'A meticulous hand wash using pH-neutral soaps to safely remove dirt and road grime without scratching your paint.',
  },
  {
    icon: Sparkles,
    title: 'Interior Detailing',
    description:
      'Deep cleaning of all surfaces, leather conditioning, carpet extraction, and streak-free glass.',
  },
  {
    icon: Shield,
    title: 'Ceramic Coating',
    description:
      'Long-lasting nano-ceramic protection that provides an insane gloss, hydrophobic properties, and UV resistance.',
  },
  {
    icon: Brush,
    title: 'Paint Correction',
    description:
      'Multi-stage machine polishing to permanently remove swirl marks, scratches, and oxidation.',
  },
  {
    icon: Settings,
    title: 'Engine Bay Cleaning',
    description:
      'Safe degreasing and dressing of engine bay components for a factory-new appearance.',
  },
  {
    icon: Droplets,
    title: 'Mobile Detailing',
    description:
      'We bring the shop to you. Fully equipped vans delivering premium results at your home or office.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Premium <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            From routine maintenance to full concourse-level restorations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card/50 backdrop-blur border border-border p-8 rounded-xl group hover:border-primary/50 transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
