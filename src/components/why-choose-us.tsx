import React from 'react';
import { motion } from 'framer-motion';
import { Award, Leaf, Truck, ThumbsUp } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    title: 'Certified Technicians',
    description:
      'Our detailers are trained and certified in advanced paint correction and ceramic coatings.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Products',
    description:
      'We use premium, environmentally safe chemicals that protect your car and the planet.',
  },
  {
    icon: Truck,
    title: 'Mobile Service Available',
    description:
      'Fully self-contained mobile units ready to detail at your driveway or workplace.',
  },
  {
    icon: ThumbsUp,
    title: '100% Satisfaction',
    description:
      'We do not leave until you are absolutely thrilled with the results.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_0%,transparent_100%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
              The Standard of <span className="text-black">Excellence</span>
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              We do not cut corners. We treat every vehicle like it's a multi-million
              dollar hypercar. Precision, patience, and the best products in the world.
            </p>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-black/30 transition-colors"
              >
                <item.icon className="w-10 h-10 text-white mb-4 opacity-80" />
                <h3 className="text-xl font-bold uppercase tracking-wider mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
