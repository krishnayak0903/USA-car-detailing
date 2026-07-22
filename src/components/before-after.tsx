import React from 'react';
import { motion } from 'framer-motion';

// Images are served from /public/images/
const comparisons = [
  {
    title: 'Paint Correction',
    before: '/images/paint-before.jpg',
    after: '/images/paint-after.jpg',
  },
  {
    title: 'Ceramic Coating',
    before: '/images/ceramic-before.jpg',
    after: '/images/ceramic-after.jpg',
  },
  {
    title: 'Full Exterior Wash',
    before: '/images/exterior-before.jpg',
    after: '/images/exterior-after.jpg',
  },
  {
    title: 'Deep Interior Detail',
    before: '/images/interior-before.jpg',
    after: '/images/interior-after.jpg',
  },
];

function ComparisonCard({
  title,
  before,
  after,
  index,
}: {
  title: string;
  before: string;
  after: string;
  index: number;
}) {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col gap-3 group"
    >
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-lg overflow-hidden cursor-ew-resize select-none border border-border"
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <img
            src={after}
            alt={`${title} After`}
            className="w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
            After
          </div>
        </div>

        {/* Before Image (Foreground, clipped) */}
        <div
          className="absolute inset-0 border-r-2 border-primary"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={before}
            alt={`${title} Before`}
            className="w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
            Before
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize flex items-center justify-center z-10"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg shadow-black/50">
            <div className="flex gap-1">
              <div className="w-0.5 h-3 bg-gray-400 rounded-full" />
              <div className="w-0.5 h-3 bg-gray-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold uppercase tracking-wider text-white px-1">
        {title}
      </h3>
    </motion.div>
  );
}

export function BeforeAfter() {
  return (
    <section id="before-after" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Results That <span className="text-primary">Speak</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Slide to reveal the dramatic transformation. We bring out the true
            potential in every vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {comparisons.map((item, index) => (
            <ComparisonCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
