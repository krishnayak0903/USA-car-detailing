import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      {/* Abstract CSS 3D Element */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30" style={{ perspective: '1000px' }}>
        <motion.div
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="w-[40vw] h-[40vw] border-[1px] border-primary/40 rounded-full flex items-center justify-center relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div
            className="absolute inset-4 border-[1px] border-primary/30 rounded-full"
            style={{ transform: 'rotateX(45deg) rotateY(45deg)' }}
          />
          <div
            className="absolute inset-8 border-[1px] border-primary/20 rounded-full"
            style={{ transform: 'rotateX(-45deg) rotateY(-45deg)' }}
          />
          <div
            className="absolute inset-12 border-[2px] border-primary/50 rounded-full"
            style={{ transform: 'rotateX(90deg)' }}
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
            Premium Mobile & Studio Detailing
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-6 leading-none"
        >
          Showroom <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
            Perfection
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl font-light mb-10"
        >
          Meticulous attention to detail. Uncompromising quality. We restore your
          vehicle's finish to better-than-new condition.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="#book"
            className="group flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded text-lg font-bold uppercase tracking-wider hover:bg-blue-600 transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
          >
            Get a Free Quote
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded text-lg font-bold uppercase tracking-wider hover:bg-white/10 transition-all"
          >
            Explore Services
          </a>
        </motion.div>
      </div>
    </div>
  );
}
