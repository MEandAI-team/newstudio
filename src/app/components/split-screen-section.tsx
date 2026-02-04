import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function SplitScreenSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const rightY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#0A0A0A] overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Left Side - Image with Parallax */}
        <motion.div style={{ y: leftY }} className="relative h-screen sticky top-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 z-10" />
          <img
            src="https://images.unsplash.com/photo-1657460899490-990d2026f785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2OTk2NzM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Photography"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          style={{ y: rightY }}
          className="relative flex items-center justify-center p-12 md:p-20"
        >
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#D4AF37] text-sm tracking-[0.4em] uppercase mb-6">
                About the Work
              </p>
              
              <h2
                className="text-5xl md:text-7xl text-white mb-8 leading-tight"
                style={{ fontFamily: 'serif' }}
              >
                Crafting Visual
                <br />
                <span className="text-[#D4AF37]">Stories</span>
              </h2>

              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  Every frame is a deliberate composition of light, shadow, and emotion. 
                  My approach combines technical precision with artistic intuition to 
                  create images that transcend the ordinary.
                </p>
                <p>
                  With over a decade of experience in cinematic photography, I specialize 
                  in capturing moments that tell compelling stories—whether it's the raw 
                  energy of street life or the refined elegance of editorial fashion.
                </p>
              </div>

              <motion.div
                whileHover={{ x: 10 }}
                className="mt-12 inline-flex items-center gap-4 text-[#D4AF37] cursor-pointer group"
                data-cursor-hover
              >
                <span className="text-lg tracking-wider">EXPLORE PHILOSOPHY</span>
                <div className="w-16 h-[2px] bg-[#D4AF37] group-hover:w-24 transition-all duration-300" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
