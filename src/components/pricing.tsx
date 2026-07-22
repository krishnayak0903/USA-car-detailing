import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic Wash',
    price: '$99',
    description: 'Perfect for regular maintenance.',
    features: [
      'Hand Wash & Dry',
      'Wheel & Tire Cleaning',
      'Tire Dressing',
      'Interior Vacuum',
      'Wipe Down Surfaces',
      'Clean Windows (In/Out)',
    ],
  },
  {
    name: 'Premium Detail',
    price: '$249',
    description: 'Complete interior & exterior reset.',
    popular: true,
    features: [
      'Everything in Basic',
      'Clay Bar Treatment',
      'Iron Decontamination',
      '6-Month Sealant applied',
      'Deep Carpet Extraction',
      'Leather Conditioning',
    ],
  },
  {
    name: 'Elite Correction',
    price: '$699',
    description: 'Flawless paint & long-term protection.',
    features: [
      'Everything in Premium',
      '1-Step Paint Correction',
      'Remove Swirls & Scratches',
      '3-Year Ceramic Coating',
      'Engine Bay Detail',
      'Fabric Guard Protection',
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Choose the level of perfection your vehicle needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-background p-8 rounded-2xl border ${
                plan.popular
                  ? 'border-primary shadow-[0_0_30px_rgba(37,99,235,0.15)] transform md:-translate-y-4'
                  : 'border-border'
              } flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold uppercase tracking-wider text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-muted-foreground mb-6 h-10">{plan.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-black text-white">{plan.price}</span>
                <span className="text-muted-foreground">/starting at</span>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                className={`w-full text-center py-4 rounded font-bold uppercase tracking-wider transition-all ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.3)]'
                    : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                }`}
              >
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
