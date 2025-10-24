import { motion } from 'framer-motion';
import { Bike } from 'lucide-react';
import travelBg from '../assets/bg-img.jpeg';

const Travel = () => {
  return (
   <section
  id="travel"
  className="relative pt-22 pb-32 mt-100 overflow-hidden" // add mt-20 for top margin
  style={{
    backgroundImage: `url(${travelBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  }}
>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            animate={{
              x: [0, 20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="inline-block mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center glow-effect">
              <Bike size={48} className="text-white" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Beyond Code:{' '}
            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary-glow to-accent">
              My Bike Travel Journey
            </span>
          </h2>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <p className="text-xl text-white leading-relaxed">
              When not leading tech teams, I travel across India on my motorcycle,
              exploring new perspectives that fuel innovation. Each journey teaches me
              resilience, adaptability, and the importance of embracing the unexpected —
              qualities that translate directly into how I approach technology leadership.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <div className="bg-primary/20 backdrop-blur-sm px-6 py-3 rounded-full border border-primary-glow/50">
              <p className="text-white font-semibold">10,000+ km traveled</p>
            </div>
            <div className="bg-primary/20 backdrop-blur-sm px-6 py-3 rounded-full border border-primary-glow/50">
              <p className="text-white font-semibold">15+ States explored</p>
            </div>
            <div className="bg-primary/20 backdrop-blur-sm px-6 py-3 rounded-full border border-primary-glow/50">
              <p className="text-white font-semibold">Endless inspiration</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Path */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 opacity-30"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,60 Q300,20 600,60 T1200,60"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          viewport={{ once: true }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--primary-glow))" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default Travel;
