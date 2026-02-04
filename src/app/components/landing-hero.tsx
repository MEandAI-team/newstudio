import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function LandingHero() {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1657460899490-990d2026f785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2OTk2NzM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
      </motion.div>

      {/* Logo/Signature Reveal */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.h1
              className="text-[8vw] md:text-[6vw] tracking-wider mb-4"
              style={{
                fontFamily: 'serif',
                background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #B8860B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              STUDIO
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '300px' }}
            transition={{ delay: 1.2, duration: 1.2, ease: 'easeInOut' }}
            className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="text-white/70 text-lg md:text-xl tracking-[0.3em] uppercase"
          >
            Visual Narratives
          </motion.p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 text-[#D4AF37]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
