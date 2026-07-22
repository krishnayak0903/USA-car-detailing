import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael T.',
    vehicle: 'Porsche 911 GT3',
    text: 'Absolute perfection. They took my GT3 and made the paint look like liquid glass. The attention to detail is unmatched in the city.',
  },
  {
    name: 'Sarah J.',
    vehicle: 'Range Rover Sport',
    text: "With two kids and a dog, my interior was a disaster. USA Car Detailing brought it back to showroom condition. I couldn't believe my eyes.",
  },
  {
    name: 'David R.',
    vehicle: 'Ford F-150 Raptor',
    text: "The ceramic coating is a game changer. The truck stays clean so much longer, and water just flies off. Best investment I've made for my truck.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background border-t border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Client <span className="text-primary">Reviews</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Don't just take our word for it. Hear from our satisfied clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card p-8 rounded-xl border border-border flex flex-col relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-white/90 text-lg leading-relaxed mb-8 flex-1 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-bold uppercase tracking-wider text-white">{t.name}</p>
                <p className="text-primary text-sm font-medium">{t.vehicle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
