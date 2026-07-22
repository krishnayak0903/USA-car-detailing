import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
              Book Your <span className="text-primary">Detail</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              Ready for showroom perfection? Fill out the form or reach out directly.
              We'll get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: Phone,
                  title: 'Call or Text',
                  detail: '(555) 123-4567',
                },
                {
                  icon: Mail,
                  title: 'Email',
                  detail: 'booking@usacardetailing.com',
                },
                {
                  icon: MapPin,
                  title: 'Location',
                  detail: '123 Detailers Row, Motor City, MI 48201\nMobile service available within 50 miles.',
                },
                {
                  icon: Clock,
                  title: 'Hours',
                  detail: 'Mon - Sat: 8:00 AM - 6:00 PM\nSunday: By Appointment Only',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider mb-1">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground whitespace-pre-line">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            id="book"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 rounded-2xl border border-border"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-background border border-border rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-background border border-border rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-background border border-border rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full bg-background border border-border rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Service Needed
                </label>
                <select className="w-full bg-background border border-border rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option value="">Select a service...</option>
                  <option value="basic">Basic Wash ($99+)</option>
                  <option value="premium">Premium Detail ($249+)</option>
                  <option value="elite">Elite Correction & Ceramic ($699+)</option>
                  <option value="custom">Custom / Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Vehicle Make & Model
                </label>
                <input
                  type="text"
                  className="w-full bg-background border border-border rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="e.g. 2022 Porsche 911"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  className="w-full bg-background border border-border rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors h-32 resize-none"
                  placeholder="Any specific areas of concern?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded font-bold uppercase tracking-wider hover:bg-blue-600 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
